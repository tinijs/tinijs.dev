import {TiniComponent, Layout, html, css} from '@tinijs/core';

import '../components/header';

@Layout('layout-default')
export class LayoutDefault extends TiniComponent {
  static styles = css`
    :host {
      display: block;
      width: 100vw;
      overflow-x: hidden;
    }
  `;

  protected render() {
    return html`
      <app-header></app-header>
      <div class="page"><slot></slot></div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'layout-default': LayoutDefault;
  }
}
