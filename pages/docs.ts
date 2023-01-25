import {TiniComponent, Page, html, css, unistylus} from '@tinijs/core';

@Page('page-docs')
export class DocsPage extends TiniComponent {
  static styles = [
    unistylus``,
    css`
      :host {
        margin: 0;
      }
    `,
  ];

  protected render() {
    return html`<p>DocsPage</p>`;
  }
}
