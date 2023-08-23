import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/typeorm';
import { Repository } from 'typeorm';

type CreateUserArgs = {
  userName: string;
  emailAddress: string;
  password: string;
};

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  getUsers() {
    return this.usersRepository.find();
  }

  createUser(userDetails: CreateUserArgs) {
    const newUser = this.usersRepository.create({
      ...userDetails,
    });

    return this.usersRepository.save(newUser);
  }

  deleteUser(id: number) {
    return this.usersRepository.delete({ id });
  }
}
