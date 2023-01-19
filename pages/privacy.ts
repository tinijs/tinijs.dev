import {TiniComponent, Page, html, css, unistylus} from '@tinijs/core';

@Page('page-privacy')
export class PrivacyPage extends TiniComponent {
  protected template = html`<p>PrivacyPage</p>`;

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
    'page-privacy': PrivacyPage;
  }
}
