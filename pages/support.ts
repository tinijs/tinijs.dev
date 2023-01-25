import {TiniComponent, Page, html, css, unistylus} from '@tinijs/core';

@Page('page-support')
export class SupportPage extends TiniComponent {
  static styles = [
    unistylus``,
    css`
      :host {
        margin: 0;
      }
    `,
  ];

  protected render() {
    return html`<p>SupportPage</p>`;
  }
}
