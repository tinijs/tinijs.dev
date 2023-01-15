import {TiniComponent, Layout, html} from '@tinijs/core';

import '../components/header';

@Layout('layout-default')
export class LayoutDefault extends TiniComponent {
  protected template = html`
    <app-header></app-header>
    <div class="page"><slot></slot></div>
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'layout-default': LayoutDefault;
  }
}
