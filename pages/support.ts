import {TiniComponent, Page, html, css, unistylus} from '@tinijs/core';

@Page('page-support')
export class SupportPage extends TiniComponent {
  protected template = html`<p>SupportPage</p>`;

  static styles = [
    unistylus``,
    css`
      :host {
        margin: 0;
      }
    `,
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    'page-support': SupportPage;
  }
}
