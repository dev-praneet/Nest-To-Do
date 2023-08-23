import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { CreateUserDto } from './dto/CreateUser.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  async getUsers() {
    const users = await this.userService.getUsers();
    return users;
  }

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto) {
    const res = await this.userService.createUser(createUserDto);
    return { result: JSON.stringify(res) };
  }

  @Delete(':userId')
  async deleteUser(@Param('userId', ParseIntPipe) userId: number) {
    await this.userService.deleteUser(userId);
  }
}
