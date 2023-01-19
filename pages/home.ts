import {TiniComponent, Page, html, css, unistylus} from '@tinijs/core';
import {UseMeta, Meta} from '@tinijs/meta';

import '../components/welcome';

@Page('page-home')
export class HomePage extends TiniComponent {
  @UseMeta() meta!: Meta;

  onReady() {
    this.meta.setHomeMetas();
  }

  protected template = html`<app-welcome></app-welcome>`;

  static styles = [
    unistylus``,
    css`
      :host {
        display: block;
        margin-top: -64px;
      }
    `,
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    'page-home': HomePage;
  }
}
