import {TiniComponent, Layout, html} from '@tinijs/core';

@Layout('layout-default')
export class LayoutDefault extends TiniComponent {
  protected template = html`<div class="page"><slot></slot></div>`;
}

declare global {
  interface HTMLElementTagNameMap {
    'layout-default': LayoutDefault;
  }
}
