import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
  Req,
  Res,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateUserDto } from 'src/users/CreateUser.dto';
import { UserService } from 'src/users/service/user/user.service';

@Controller('users') // root url is '/users'
export class UsersController {
  constructor(private userService: UserService) {}

  @Get()
  getUsers() {
    return this.userService.fetchUsers();
  }
  // @Get()
  // getUsers() {
  //   return { username: 'chizzy', email: 'chizzy@gmail.com' };
  // }

  @Get('user')
  // query parameters - for filtering
  // filter by username and age localhost:3000/users/user?username=chisom&age=23
  findUser(@Query('username') username: string, @Query('age') age: number) {
    return [
      {
        username,
        email: username + '@gamil.com',
        age,
      },
    ];
  }

  @Get('posts')
  getUsersPosts() {
    return [
      {
        username: 'chizzy',
        email: 'chizzy@gmail.com',
        posts: ['i love Tolu', 'Javascript is fun', 'i love dsa with python'],
      },
    ];
  }

  @Post()
  @UsePipes(new ValidationPipe())
  creteUser(@Body() userData: CreateUserDto) {
    return this.userService.creteUser(userData);
    //return userData;
  }
  // express way
  // createUser(@Req() request: Request, @Res() response: Response) {
  //   console.log(request.body);
  //   response.send('Created');
  // }

  // route parameters
  @Get(':id/:postId')
  getUserById(
    @Param('id', ParseIntPipe) id: number,
    @Param('postId') postId: string,
  ) {
    console.log(id);
    return { id, postId };
  }
  // express way
  // getUserById(@Req() request: Request, @Res() response: Response) {
  //   console.log(request.params);
  //   response.send(`Your id is ${request.params.id}`);
  // }
}
