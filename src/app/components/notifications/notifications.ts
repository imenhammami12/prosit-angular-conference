import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideBell } from '@ng-icons/lucide';
import { Component, inject, signal } from '@angular/core';
import { DatePipe } from '@angular/common';
import { NotificationService } from '@/services/notifications';
import { ZardCardImports } from '@/shared/components/card/card.imports';
import { ZardButtonComponent } from '@/shared/components/button';

@Component({
  selector: 'app-notifications',
  imports: [NgIcon, DatePipe, ZardCardImports, ZardButtonComponent],
  viewProviders: [provideIcons({ lucideBell })],
  templateUrl: './notifications.html',
})
export class Notifications {
  protected readonly notifications = inject(NotificationService).items;
  protected readonly visible = signal(false);
}
