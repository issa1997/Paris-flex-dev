import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ValidationPipe,
  UsePipes,
  Logger,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto, UsersParamsDto, UserLoginDto } from './dto/user.dto';
import { errorRes, successRes } from 'src/utls/response.formatter';
import _ = require('lodash');

@Controller('api/users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly logger: Logger,
  ) {}

  @Post()
  @UsePipes(new ValidationPipe())
  async create(@Body() user: UserDto) {
    try {
      const createduser = await this.usersService.create(user);
      return successRes('User created successfully', createduser);
    } catch (error) {
      this.logger.error((error as Error).message);
      return errorRes((error as Error).message);
    }
  }

  @Get()
  async findAll() {
    try {
      const rates = await this.usersService.findAll();
      if (_.isEmpty(rates)) {
        return errorRes('Error fetching rates');
      }
      return successRes('Users fetched successfully', rates);
    } catch (error) {
      this.logger.error((error as Error).message);
      return errorRes((error as Error).message);
    }
  }

  @Get('get/:id')
  async findOne(@Param() params: UsersParamsDto) {
    try {
      const rates = await this.usersService.findOne(parseInt(params.id));
      if (_.isEmpty(rates)) {
        return errorRes('Error fetching user');
      }
      return successRes('User fetched successfully', rates);
    } catch (error) {
      this.logger.error((error as Error).message);
      return errorRes((error as Error).message);
    }
  }

  @Patch(':id')
  async update(@Param() params: UsersParamsDto, @Body() user: UserDto) {
    try {
      const updateduser = await this.usersService.update(
        parseInt(params.id),
        user,
      );
      return successRes('user updated successfully', updateduser);
    } catch (error) {
      this.logger.error((error as Error).message);
      return errorRes((error as Error).message);
    }
  }

  @Delete(':id')
  async remove(@Param() params: UsersParamsDto) {
    return this.usersService.remove(parseInt(params.id));
  }

  @Post('/login')
  async login(@Body() login: UserLoginDto) {
    try {
      const users = await this.usersService.validateUser(login);
      if (_.isEmpty(users)) {
        return errorRes('Error fetching user');
      }
      return successRes('User fetched successfully', users);
    } catch (error) {
      this.logger.error((error as Error).message);
      return errorRes((error as Error).message);
    }
  }
}
