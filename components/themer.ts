import {TiniComponent, Component, html, css, unistylus} from '@tinijs/core';

@Component('app-themer')
export class ThemerComponent extends TiniComponent {
  changeTheme(e: Event) {
    const {checked} = e.target as HTMLInputElement;
    document.body.dataset.theme = checked ? 'dark' : 'light';
  }

  protected template = html`
    <label class="form-switch">
      <input type="checkbox" @change=${this.changeTheme} />
      <span class="slider"></span>
    </label>
  `;

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
    'app-themer': ThemerComponent;
  }
}
