import { Component } from '@angular/core';
import { Profile } from '@/components/profile/profile';
import { Friends } from '@/components/friends/friends';
import { Notifications } from '@/components/notifications/notifications';

@Component({
  selector: 'app-home',
  imports: [Profile, Friends, Notifications],
  templateUrl: './home.html',
})
export class Home {}
