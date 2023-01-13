import {TiniComponent, Component, html} from '@tinijs/core';

@Component('app-welcome')
export class AppWelcome extends TiniComponent {
  protected template = html`<h1>Hello world! 👋</h1>`;
}

declare global {
  interface HTMLElementTagNameMap {
    'app-welcome': AppWelcome;
  }
}
