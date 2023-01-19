import {TiniComponent, Page, html, css, unistylus} from '@tinijs/core';

@Page('page-terms')
export class TermsPage extends TiniComponent {
  protected template = html`<p>TermsPage</p>`;

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
    'page-terms': TermsPage;
  }
}
