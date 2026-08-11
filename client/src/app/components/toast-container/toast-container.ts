import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-toast-container',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <div class="toast-container" *ngIf="toastService.toasts().length > 0">
      <div 
        *ngFor="let toast of toastService.toasts()" 
        class="toast-card animate-toast" 
        [ngClass]="'toast-' + toast.type"
      >
        <div class="toast-icon">
          <iconify-icon *ngIf="toast.type === 'success'" icon="lucide:check-circle-2"></iconify-icon>
          <iconify-icon *ngIf="toast.type === 'error'" icon="lucide:alert-circle"></iconify-icon>
          <iconify-icon *ngIf="toast.type === 'warning'" icon="lucide:alert-triangle"></iconify-icon>
          <iconify-icon *ngIf="toast.type === 'info'" icon="lucide:info"></iconify-icon>
        </div>

        <div class="toast-content">
          <div class="toast-title" *ngIf="toast.title">{{ toast.title }}</div>
          <div class="toast-message">{{ toast.message }}</div>
        </div>

        <button class="toast-close" (click)="toastService.dismiss(toast.id)" aria-label="Fermer">
          <iconify-icon icon="lucide:x"></iconify-icon>
        </button>
      </div>
    </div>
  `,
  styles: [`
    .toast-container {
      position: fixed;
      top: 24px;
      right: 24px;
      z-index: 99999;
      display: flex;
      flex-direction: column;
      gap: 12px;
      max-width: 400px;
      width: calc(100vw - 48px);
      pointer-events: none;
    }

    .toast-card {
      pointer-events: auto;
      display: flex;
      align-items: flex-start;
      gap: 14px;
      padding: 14px 18px;
      border-radius: 12px;
      background: #ffffff;
      color: #1a1f36;
      border: 1px solid #e8eaef;
      box-shadow: 0 10px 30px rgba(26, 31, 54, 0.12), 0 2px 6px rgba(0,0,0,0.04);
      position: relative;
      overflow: hidden;
      box-sizing: border-box;
      transition: all 0.25s cubic-bezier(0.22, 1, 0.36, 1);
    }

    .toast-card::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: 4.5px;
      border-radius: 12px 0 0 12px;
    }

    .toast-success::before { background-color: #16a34a; }
    .toast-error::before   { background-color: #e11d48; }
    .toast-warning::before { background-color: #d97706; }
    .toast-info::before    { background-color: #d4a853; }

    .toast-icon {
      font-size: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 1px;
      flex-shrink: 0;
    }

    .toast-success .toast-icon { color: #16a34a; }
    .toast-error .toast-icon   { color: #e11d48; }
    .toast-warning .toast-icon { color: #d97706; }
    .toast-info .toast-icon    { color: #d4a853; }

    .toast-content {
      flex: 1;
      min-width: 0;
    }

    .toast-title {
      font-size: 13.5px;
      font-weight: 700;
      color: #1a1f36;
      margin-bottom: 2px;
      letter-spacing: -0.01em;
    }

    .toast-message {
      font-size: 12.5px;
      color: #4a5168;
      line-height: 1.45;
      word-break: break-word;
    }

    .toast-close {
      background: transparent;
      border: none;
      color: #8a92a8;
      cursor: pointer;
      padding: 0;
      display: flex;
      align-items: center;
      font-size: 16px;
      transition: color 0.15s;
      margin-top: 1px;
    }

    .toast-close:hover {
      color: #1a1f36;
    }

    @keyframes slideInRight {
      from {
        opacity: 0;
        transform: translateX(40px) scale(0.95);
      }
      to {
        opacity: 1;
        transform: translateX(0) scale(1);
      }
    }

    .animate-toast {
      animation: slideInRight 0.35s cubic-bezier(0.22, 1, 0.36, 1) both;
    }
  `]
})
export class ToastContainer {
  toastService = inject(ToastService);
}
