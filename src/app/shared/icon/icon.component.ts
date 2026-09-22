import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Small inline-SVG icon set used across the navbar, footer, contact, and
 * about sections. Kept as plain inline SVG (rather than an icon-font CDN)
 * so icons never depend on a third-party request succeeding, and render
 * identically during SSR and in the browser.
 *
 * Usage: <app-icon name="linkedin"></app-icon>
 */
@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [CommonModule],
  template: `
    <svg
      [attr.width]="size"
      [attr.height]="size"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.8"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
      class="app-icon"
    >
      <ng-container [ngSwitch]="name">
        <g *ngSwitchCase="'linkedin'">
          <path d="M4 4h16v16H4z" stroke="none" />
          <path d="M6.94 8.5a1.44 1.44 0 1 0 0-2.88 1.44 1.44 0 0 0 0 2.88Z" fill="currentColor" stroke="none" />
          <path d="M5.5 10.2h2.9v8.3H5.5zM10.9 10.2h2.8v1.2c.5-.8 1.5-1.4 2.8-1.4 2.1 0 3.3 1.4 3.3 3.9v4.6h-2.9v-4.1c0-1.1-.4-1.9-1.5-1.9-.8 0-1.3.6-1.5 1.1-.1.2-.1.5-.1.8v4.1h-2.9v-8.3Z" fill="currentColor" stroke="none" />
        </g>
        <g *ngSwitchCase="'github'">
          <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.15-1.11-1.46-1.11-1.46-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.93 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.6 9.6 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.83-2.34 4.68-4.57 4.92.36.31.68.92.68 1.85v2.75c0 .26.18.58.69.48A10 10 0 0 0 12 2Z" fill="currentColor" stroke="none" />
        </g>
        <g *ngSwitchCase="'instagram'">
          <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
          <circle cx="12" cy="12" r="3.6" />
          <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
        </g>
        <g *ngSwitchCase="'whatsapp'">
          <path d="M20 12a8 8 0 1 1-3.5-6.6" />
          <path d="M20 12a8 8 0 0 1-11.9 6.96L4 20l1.1-4A8 8 0 0 1 20 12Z" />
          <path d="M9.3 8.7c-.2.4-.7 1.4-.5 2.2.3 1.3 2 3.3 3.5 3.9.9.4 1.7.2 2.1-.1.3-.2.6-.7.6-1.1 0-.2 0-.3-.1-.3l-1.4-.7c-.2 0-.3 0-.4.1l-.4.5c-.1.1-.2.1-.4 0-.6-.3-1.5-1.1-1.8-1.7-.1-.1 0-.3 0-.4l.4-.5c.1-.1.1-.3.1-.4l-.6-1.6c-.1-.2-.3-.2-.4-.2h-.4c-.1 0-.3.1-.4.3Z" fill="currentColor" stroke="none" />
        </g>
        <g *ngSwitchCase="'mail'">
          <rect x="3.5" y="5" width="17" height="14" rx="2.2" />
          <path d="M4.5 6.5 12 12.5l7.5-6" />
        </g>
        <g *ngSwitchCase="'phone'">
          <path d="M6.6 3.5h3l1.3 4.4-2.1 1.6a12 12 0 0 0 5.7 5.7l1.6-2.1 4.4 1.3v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.6 5.7a2 2 0 0 1 2-2.2Z" />
        </g>
        <g *ngSwitchCase="'compass'">
          <circle cx="12" cy="12" r="9" />
          <path d="M15.5 8.5 14 14l-5.5 1.5L10 10l5.5-1.5Z" />
        </g>
        <g *ngSwitchCase="'bike'">
          <circle cx="6" cy="17" r="3.2" />
          <circle cx="18" cy="17" r="3.2" />
          <path d="M6 17 10 8h4l3 5M10 8H8M14 8l3 4.5h2.5" />
        </g>
        <g *ngSwitchCase="'map'">
          <path d="M9 4 4 6v14l5-2 6 2 5-2V4l-5 2-6-2Z" />
          <path d="M9 4v14M15 6v14" />
        </g>
        <g *ngSwitchCase="'code'">
          <path d="M8 8 4 12l4 4M16 8l4 4-4 4M13.5 6 10.5 18" />
        </g>
        <g *ngSwitchCase="'bulb'">
          <path d="M9 18h6M10 21h4" />
          <path d="M12 3a6.5 6.5 0 0 0-4 11.6c.5.4.9 1 1 1.7v.7h6v-.7c.1-.7.5-1.3 1-1.7A6.5 6.5 0 0 0 12 3Z" />
        </g>
        <g *ngSwitchCase="'menu'">
          <path d="M4 7h16M4 12h16M4 17h16" />
        </g>
        <g *ngSwitchCase="'close'">
          <path d="M6 6l12 12M18 6 6 18" />
        </g>
        <g *ngSwitchCase="'arrow-right'">
          <path d="M5 12h14M13 6l6 6-6 6" />
        </g>
        <g *ngSwitchCase="'download'">
          <path d="M12 3v12M7 10l5 5 5-5M5 19h14" />
        </g>
        <g *ngSwitchCase="'award'">
          <circle cx="12" cy="9" r="5.5" />
          <path d="M8.5 13.5 7 21l5-2.5L17 21l-1.5-7.5" />
        </g>
        <g *ngSwitchCase="'external-link'">
          <path d="M9 6h9v9M18 6 6 18" />
        </g>
      </ng-container>
    </svg>
  `,
  styles: [
    `
      :host {
        display: inline-flex;
      }
      .app-icon {
        display: block;
      }
    `,
  ],
})
export class IconComponent {
  @Input() name = '';
  @Input() size = 20;
}
