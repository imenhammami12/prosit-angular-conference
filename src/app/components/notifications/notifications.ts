import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.html',
  styleUrl: './notifications.css',
})
export class Notifications {

  notificationList = signal([
    { message: 'Une nouvelle conférence est disponible.' },
    { message: 'Sami vous a envoyé une invitation.' },
    { message: 'Votre profil a été mis à jour avec succès.' },
  ]);

  show = signal(false);

  bTnTxt = 'Afficher les notifications';

  showNotifications() {
    this.show.set(!this.show());

    this.bTnTxt = this.show()
      ? 'Masquer les notifications'
      : 'Afficher les notifications';
  }
}
