import {
  HttpException,
  HttpStatus,
  Injectable,
  NestMiddleware,
} from '@nestjs/common';
import { NextFunction } from 'express';

@Injectable()
export class ExampleMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Example Middleware');
    const authorization = req.headers['authorization'];
    console.log(authorization);
    if (!authorization)
      throw new HttpException(
        'No authorization Token',
        HttpStatus.UNAUTHORIZED,
      );
    next();
  }
}
