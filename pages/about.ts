import {TiniComponent, Page, html, css, unistylus} from '@tinijs/core';

@Page('page-about')
export class AboutPage extends TiniComponent {
  protected template = html`<p>AboutPage</p>`;

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
    'page-about': AboutPage;
  }
}
