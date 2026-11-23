import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ZardButtonComponent } from '@/shared/components/button';
import { ConferenceList } from '../Conference-list/conference-list';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, ZardButtonComponent],
  templateUrl: './navbar.html',
})
export class Navbar {
  protected readonly links = [
    { label: 'Accueil', path: '/', highlight: true },
    { label: 'Profil', path: '/profile', highlight: true },
    { label: 'Conférences', path: '/conferences', highlight: true },
    { label: 'Amis', path: '/friends', highlight: true },
    { label: 'Notifications', path: '/notifications', highlight: true },
  ];
}
