import { Injectable, signal } from '@angular/core';

export interface AppNotification {
  id: number;
  message: string;
  at: Date;
}

@Injectable({ providedIn: 'root' })
export class NotificationService {
  private nextId = 1;
  private readonly _items = signal<AppNotification[]>([
    { id: this.nextId++, message: 'Sarra vous a ajouté en ami', at: new Date() },
    { id: this.nextId++, message: 'Nouvelle conférence : Signals Workshop', at: new Date() },
  ]);
  readonly items = this._items.asReadonly();

  add(message: string): void {
    this._items.update(list => [{ id: this.nextId++, message, at: new Date() }, ...list]);
  }
}
