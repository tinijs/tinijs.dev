import {TiniComponent, Page, html, css, unistylus} from '@tinijs/core';

import '../components/welcome';

@Page('page-home')
export class HomePage extends TiniComponent {
  static styles = [
    unistylus``,
    css`
      :host {
        display: block;
        margin-top: -64px;
      }
    `,
  ];

  protected render() {
    return html`<app-welcome await></app-welcome>`;
  }
}
