import {TiniComponent, Layout, html, css} from '@tinijs/core';

import '../components/header';
import '../components/footer';

@Layout('layout-default')
export class DefaultLayout extends TiniComponent {
  static styles = css`
    :host {
      display: block;
      width: 100vw;
      overflow-x: hidden;
    }

    .body {
      width: 100%;
      margin-top: 64px;
      min-height: calc(100vh - 64px - 237px);
    }
  `;

  protected render() {
    return html`
      <app-header></app-header>
      <div class="body"><slot></slot></div>
      <app-footer></app-footer>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'layout-default': DefaultLayout;
  }
}
