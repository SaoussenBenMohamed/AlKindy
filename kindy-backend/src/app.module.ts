import { AppService } from './app.service';
import { AppController } from './app.controller';
import { CacheInterceptor, CacheModule, Module } from '@nestjs/common';
import { HandlebarsAdapter, MailerModule } from '@nest-modules/mailer';
import { TypeOrmModule } from '@nestjs/typeorm';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';
import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';
// MODULES

import { PartnershipModule } from './modules/partnerships/partnership.module';
import { TimeTableModule } from './modules/timetables/timeTable.module';
import { SliderModule } from './modules/sliders/slider.module';
import { EventModule } from './modules/events/event.module';
import { PressModule } from './modules/press/press.module';
import { UserModule } from './modules/users/user.module';
import { ClubModule } from './modules/clubs/club.module';

import { UnitModule } from './modules/unit/unit.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    CacheModule.register(),
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: process.env.DB_HOST,
      database: process.env.DB_NAME,
      entities: [join(__dirname, '**/entities/**.entity{.ts,.js}')],
      synchronize: true,
      logger: 'advanced-console',
      useUnifiedTopology: true
    }),

    MailerModule.forRoot({
      transport: {
        host: process.env.SENDGRID_HOST,
        port: process.env.SENDGRID_PORT,
        secure: true, // use SSL
        auth: {
          user: process.env.SENDGRID_USER,
          pass: process.env.SENDGRID_API_KEY
        }
      },
      template: {
        dir: join(__dirname, '..', 'templates'), // from src not dist folder (perhaps needs to change in Prod !!!!!!!)
        adapter: new HandlebarsAdapter(), // or new PugAdapter
        options: {
          strict: true
        }
      }
    }),
    ServeStaticModule.forRoot(
      {
        rootPath: join(__dirname, '../../', 'backend-client/build'),
        exclude: ['/api*'],
        renderPath: '/admin*',
        serveStaticOptions: { index: false }
      },
      {
        rootPath: join(__dirname, '../../', 'frontend-client/build'),
        exclude: ['/api*'],
        renderPath: '*'
      }
    ),

    UserModule,
    SliderModule,
   
    PressModule,
    ClubModule,
    PartnershipModule,
    TimeTableModule,
    EventModule,
    UnitModule
  ],
  controllers: [AppController],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: CacheInterceptor
    },
    AppService
  ]
})
export class AppModule {}
