import { UserModule } from './../users/user.module';
import { AuthMiddleware } from './../users/middlewares/auth.middleware';
import { RdiEntity } from './entities/rdi.entity';
import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { RdiController } from './rdi.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RdiService } from './rdi.service';

@Module({
  imports: [TypeOrmModule.forFeature([RdiEntity]), UserModule],
  providers: [RdiService],
  controllers: [RdiController],
  exports: [RdiService]
})
export class RdiModule implements NestModule {
  public configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .forRoutes(
        { path: 'rdi/*', method: RequestMethod.DELETE },
        { path: 'rdi/*', method: RequestMethod.PUT },
        { path: 'rdi', method: RequestMethod.PUT },
        { path: 'rdi', method: RequestMethod.POST },
        { path: 'rdi', method: RequestMethod.PATCH }
      );
  }
}
