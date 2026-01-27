import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { PageLayout } from '@ht/shared/ui-common/layouts/page';

@Component({
  selector: 'app-counter-pages-communications',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PageLayout],
  template: `<app-ui-page title="communications">
    <div class="flex items-center justify-center">
      <button class="btn btn-circle btn-error" (click)="decrement()">-</button>
      <span class="mx-2 text-2xl font-mono">{{ count() }}</span>
      <button class="btn btn-circle btn-success" (click)="increment()">+</button>
    </div>
  </app-ui-page>`,
  styles: ``,
})
export class CommunicationPage {
  count = signal(0);
  increment() {
    this.count.update((c) => c + 1);
  }
  decrement() {
    this.count.update((c) => c - 1);
  }
}
