import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideUser } from '@ng-icons/lucide';
import { Component } from '@angular/core';
import { ZardCardImports } from '@/shared/components/card/card.imports';

@Component({
  selector: 'app-profile',
  imports: [NgIcon, ZardCardImports],
  viewProviders: [provideIcons({ lucideUser })],
  templateUrl: './profile.html',
})
export class Profile {
  protected readonly user = { name: 'Ahmed', email: 'ahmed@email.com' };
}
