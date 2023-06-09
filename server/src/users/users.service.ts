import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersEntity } from './entities/users.entity';
import { Repository } from 'typeorm';
import { UserLoginDto } from './dto/user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersEntity)
    private readonly userRepositoy: Repository<UsersEntity>,
  ) {}

  async create(createUserDto: any) {
    const user: UsersEntity = {
      isDelete: false,
      ...createUserDto,
    };
    const users = this.userRepositoy.create(user);
    await this.userRepositoy.save(user);
    return users;
  }

  async findAll() {
    return await this.userRepositoy.find();
  }

  async findOne(id: number) {
    return await this.userRepositoy.findOne({
      where: {
        id,
      },
    });
  }

  async update(id: number, updateUserDto: any) {
    const user: UsersEntity = {
      isDelete: false,
      ...updateUserDto,
    };
    return await this.userRepositoy.update({ id }, user);
  }

  async remove(id: number) {
    return await this.userRepositoy.delete({ id });
  }

  async bulkInsertUsers(createUsersDto: any[]) {
    return this.userRepositoy.insert(createUsersDto);
  }

  async validateUser(loginDto: UserLoginDto) {
    return await this.userRepositoy.findOne({
      where: {
        email: loginDto.email,
        password: loginDto.password,
      },
    });
  }
}
