import { Pipe, PipeTransform } from '@angular/core';

import { User } from '../dashboard/inventory/User';
@Pipe({
  name: 'tableFilter06'
})
export class TableFilter06Pipe implements PipeTransform {

  transform(
    user: User[],
    search_client: string
  ): User[] {

    if (!user || !search_client) {
      return user;
    }
    return user.filter(user =>
      user.Client.toLowerCase().indexOf(search_client.toLowerCase()) !== -1);

  }

}