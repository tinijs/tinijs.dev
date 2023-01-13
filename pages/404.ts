import {TiniComponent, Page, html} from '@tinijs/core';
import {UseMeta, Meta, PageMetas} from '@tinijs/meta';

const metas: PageMetas = {
  title: 'Oops',
  description: 'Error 404, not found!',
};

@Page('page-404')
export class Page404 extends TiniComponent {
  @UseMeta() meta!: Meta;

  onReady() {
    this.meta.setPageMetas(metas);
  }

  protected template = html`<h1 style="text-align: center;">Oops 🫣!</h1>`;
}

declare global {
  interface HTMLElementTagNameMap {
    'page-404': Page404;
  }
}
