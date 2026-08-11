import { Injectable, signal } from '@angular/core';

export type ToastType = 'success' | 'error' | 'warning' | 'info';

export interface ToastMessage {
  id: string;
  type: ToastType;
  title?: string;
  message: string;
  duration?: number;
}

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  toasts = signal<ToastMessage[]>([]);

  show(message: string, type: ToastType = 'info', title?: string, duration: number = 4000) {
    const id = Math.random().toString(36).substring(2, 9);
    const toast: ToastMessage = { id, type, title, message, duration };

    this.toasts.update(items => [...items, toast]);

    if (duration > 0) {
      setTimeout(() => {
        this.dismiss(id);
      }, duration);
    }
  }

  success(message: string, title: string = 'Succès') {
    this.show(message, 'success', title);
  }

  error(message: string, title: string = 'Erreur') {
    this.show(message, 'error', title, 5000);
  }

  warning(message: string, title: string = 'Attention') {
    this.show(message, 'warning', title);
  }

  info(message: string, title: string = 'Information') {
    this.show(message, 'info', title);
  }

  dismiss(id: string) {
    this.toasts.update(items => items.filter(t => t.id !== id));
  }
}
