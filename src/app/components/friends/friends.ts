import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideUsers } from '@ng-icons/lucide';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ZardCardImports } from '@/shared/components/card/card.imports';
import { ZardInputComponent } from '@/shared/components/input';

@Component({
  selector: 'app-friends',
  imports: [NgIcon, ZardCardImports, ZardInputComponent, FormsModule],
  viewProviders: [provideIcons({ lucideUsers })],
  templateUrl: './friends.html',
})
export class Friends {
  protected readonly friends = [{ name: 'Sami' }, { name: 'Sarra' }, { name: 'Amine' }];
}
