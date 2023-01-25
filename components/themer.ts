import {
  TiniComponent,
  Component,
  Inject,
  html,
  css,
  unistylus,
  Observe,
  Observer,
} from '@tinijs/core';
import {SettingService} from '@tinijs/useful';

@Component('app-themer')
export class ThemerComponent extends TiniComponent {
  @Inject() settingService!: SettingService;

  @Observe() settingObserver!: Observer<string>;

  static styles = [
    unistylus``,
    css`
      :host {
        margin: 0;
      }
    `,
  ];

  protected render() {
    return html`
      <label class="form-switch">
        <input type="checkbox" @change=${this.changeTheme} />
        <span class="slider"></span>
      </label>
    `;
  }

  onInit() {
    this.settingObserver.subscribe(
      this.settingService.themeChanged(theme => {
        const isDark = theme === 'dark';
        // switcher state
        const switcherNode = this.renderRoot?.querySelector('.form-switch');
        if (switcherNode) {
          switcherNode.classList[isDark ? 'add' : 'remove']('on');
        }
        // checkbox
        const inputNode = switcherNode?.querySelector('input');
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
}
