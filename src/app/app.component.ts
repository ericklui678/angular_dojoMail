import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  users: (string|object)[] = [
    {email: 'bill@gates.com', level: true, subject: 'New Windows', content: 'Windows XI will launch in year 2100'},
    {email: 'ada@lovelace.com', level: true, subject: 'Programming', content: 'Enchantress of Numbers'},
    {email: 'john@carmac.com', level: false, subject: 'Updated Algo', content: 'New algorithm for shadow volumes'},
    {email: 'gabe@newel.com', level: false, subject: 'HL3', content: 'Just kidding...'},
  ];
}
