import {TiniComponent, Page, html, css, unistylus} from '@tinijs/core';

@Page('page-modules')
export class ModulesPage extends TiniComponent {
  protected template = html`<p>ModulesPage</p>`;

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
    'page-modules': ModulesPage;
  }
}
