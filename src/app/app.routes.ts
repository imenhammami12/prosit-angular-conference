import { Routes } from '@angular/router';
import { Home } from './pages/home';
import { Friends } from './components/friends/friends';
import { Notifications } from './components/notifications/notifications';
import { ConferenceList } from './components/Conference-list/conference-list';
export const routes: Routes = [
  { path: '', component: Home },
  { path: 'friends', component: Friends },
  { path: 'notifications', component: Notifications },
  { path: 'conferences', component: ConferenceList },
];
