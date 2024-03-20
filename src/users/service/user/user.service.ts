import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/users/CreateUser.dto';
import { CreateUserType } from 'src/utils/types';

@Injectable()
export class UserService {
  private fakeUsers = [
    { username: 'chizzy', email: 'chizzy@gmail.com' },
    { username: 'Tola', email: 'tola@gmail.com' },
    { username: 'tolu', email: 'tolu@gmail.com' },
  ];

  fetchUsers() {
    return this.fakeUsers;
  }

  creteUser(userData: CreateUserType) {
    this.fakeUsers.push(userData);
    return;
  }
}
