import {TiniComponent, Page, html, css, unistylus} from '@tinijs/core';

@Page('page-docs')
export class DocsPage extends TiniComponent {
  protected template = html`<p>DocsPage</p>`;

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
    'page-docs': DocsPage;
  }
}
