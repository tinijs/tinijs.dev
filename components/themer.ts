import {
  TiniComponent,
  Component,
  Inject,
  html,
  css,
  unistylus,
  SubscribeObservable,
  ObservableSubscription,
} from '@tinijs/core';
import {SettingService} from '../services/setting';

@Component('app-themer')
export class ThemerComponent extends TiniComponent {
  @Inject() settingService!: SettingService;

  @SubscribeObservable()
  themeSubscription!: ObservableSubscription<string>;

  onInit() {
    this.themeSubscription.subscribe(
      this.settingService.themeChanged(theme => {
        const isDark = theme === 'dark';
        const root = this.renderRoot;
        // status
        const labelNode = root?.querySelector('label');
        if (labelNode) {
          labelNode.classList[isDark ? 'add' : 'remove']('on');
        }
        // checkbox
        const inputNode = root?.querySelector('input');
        if (inputNode) {
          inputNode.checked = isDark;
        }
      })
    );
  }

  changeTheme(e: Event) {
    this.settingService.changeTheme(
      (e.target as HTMLInputElement).checked ? 'dark' : 'light'
    );
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
