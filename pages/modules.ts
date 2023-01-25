import {TiniComponent, Page, html, css, unistylus} from '@tinijs/core';

@Page('page-modules')
export class ModulesPage extends TiniComponent {
  static styles = [
    unistylus``,
    css`
      :host {
        margin: 0;
      }
    `,
  ];

  protected render() {
    return html`<p>ModulesPage</p>`;
  }
}
