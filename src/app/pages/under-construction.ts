import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideConstruction } from '@ng-icons/lucide';
import { ZardCardImports } from '@/shared/components/card/card.imports';
import { ZardButtonComponent } from '@/shared/components/button';

@Component({
  selector: 'app-under-construction',
  imports: [NgIcon, RouterLink, ZardCardImports, ZardButtonComponent],
  viewProviders: [provideIcons({ lucideConstruction })],
  templateUrl: './under-construction.html',
})
export class UnderConstruction {
  protected readonly router = inject(Router);
}
