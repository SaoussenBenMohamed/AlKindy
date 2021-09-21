import { NestExpressApplication, ExpressAdapter } from '@nestjs/platform-express';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ClassSerializerInterceptor } from '@nestjs/common';
import { NestFactory, Reflector } from '@nestjs/core';
import * as rateLimit from 'express-rate-limit';
import * as helmet from 'helmet';
import { join } from 'path';
import * as favicon from 'serve-favicon';
import { ValidationPipe } from './shared/pipes/validation.pipe';
import { RolesGuard } from './guards/roles.guard';
import { AppModule } from './app.module';
import * as fs from 'fs';
import * as http from 'http';
import * as https from 'https';
import * as express from 'express';

async function bootstrap() {
  // const appOptions = {
  //   key: fs.readFileSync(join(__dirname, '..', 'cert.key')),
  //   cert: fs.readFileSync(join(__dirname, '..', 'cert.crt'))
  // };
  const server = express();
  // const app = await NestFactory.create<NestExpressApplication>(AppModule, new ExpressAdapter(server));
  const app = await NestFactory.create<NestExpressApplication>(AppModule, { cors: true });
  app.setGlobalPrefix('api');

  const options = new DocumentBuilder()
    .setTitle('Esprit back-end')
    .setDescription('Back-end for Esprit website')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('/docs', app, document);
  app.use(
    helmet(),
    rateLimit({
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 10000 // limit each IP to 100 requests per windowMs
    }),
    favicon(join(__dirname, '..', 'public', 'favicon.ico'))
  );
  app.useStaticAssets(join(__dirname, '..', 'uploads'), {
    prefix: '/uploads/',
    extensions: ['jpg', 'jpeg', 'png', 'pdf', 'doc', 'docx']
  });
  app.useStaticAssets(join(__dirname, '..', 'public'), { dotfiles: 'allow' });
  app.useGlobalInterceptors(new ClassSerializerInterceptor(new Reflector()));
  app.useGlobalGuards(new RolesGuard(new Reflector()));
  app.useGlobalPipes(new ValidationPipe());
  // app.use((req, res, next) => {
  //   if (!req.secure) {
  //     return res.redirect(['https://', req.get('Host').toString(), req.url].join(''));
  //   }
  //   next();
  // });
  // app.init();
  // http.createServer(server).listen(process.env.PORT || 3000);

  // https.createServer(appOptions, server).listen(process.env.PORT_HTTPS || 3001);
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
