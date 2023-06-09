import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { Command } from 'nestjs-command';
import _ = require('lodash');
import * as users from '../meta-data/users.json';

/**
 * Usage and Description - This file will be used as custom command file
 * that could serve the purpose as a seeder to seed all the meta craft
 * in the json file as well as to remove all the craft using custom commands
 *
 **/

@Injectable()
export class UsersCommand {
  constructor(private readonly usersService: UsersService) {}

  /**
   * Usage and Description - Using this function all the craft data
   * in the JSON file will be inserted to the collection
   *
   **/
  @Command({
    command: 'seed:users',
    describe: 'will insert all the user meta data',
  })
  async seed() {
    try {
      if (!_.isUndefined(users) || !_.isEmpty(users)) {
        const addedUsers = await this.usersService.bulkInsertUsers(users);
        console.log(addedUsers);
        !_.isEmpty(addedUsers)
          ? console.log('User added successfully')
          : console.log('Error adding user');
      }
    } catch (error) {
      console.log(`Seeder Exception  ${error}`);
    }
  }
}
