import {TiniComponent, Component, html, unistylus} from '@tinijs/core';

@Component('app-welcome')
export class AppWelcome extends TiniComponent {
  protected template = html`<h1>Hello world! 👋</h1>`;

  protected styling() {
    return [unistylus``];
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-welcome': AppWelcome;
  }
}
