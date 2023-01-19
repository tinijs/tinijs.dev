import {TiniComponent, Page, html, css, unistylus} from '@tinijs/core';
import {UseMeta, Meta, PageMetas} from '@tinijs/meta';

const metas: PageMetas = {
  title: 'Oops',
  description: 'Error 404, not found!',
};

@Page('page-404')
export class OopsPage extends TiniComponent {
  @UseMeta() meta!: Meta;

  onReady() {
    this.meta.setPageMetas(metas);
  }

  protected template = html`
    <h1>Oops! 🫣</h1>
    <p>Something is broken here.</p>
    <p><a class="button-primary" href="/">Home</a></p>
  `;

  static styles = [
    unistylus``,
    css`
      :host {
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        width: 100%;
        padding: 3rem 1rem 1rem;
      }

      p {
        color: var(--color-medium);
      }

      p:last-child {
        margin-top: 1rem;
      }
    `,
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    'page-404': OopsPage;
  }
}
