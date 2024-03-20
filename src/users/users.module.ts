import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { UsersController } from './controllers/users/users.controller';
import { UserService } from './service/user/user.service';
import { ExampleMiddleware } from './middlewares/example/example.middleware';

@Module({
  controllers: [UsersController],
  providers: [UserService],
})
export class UsersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ExampleMiddleware).forRoutes({
      path: 'users',
      method: RequestMethod.POST,
    });
  }
}
