import {Observable, ObservableSubscribe} from '@tinijs/core';

export class SettingService {
  @Observable() theme = 'light';
  themeChanged!: ObservableSubscribe<string>;

  changeTheme(theme: string) {
    document.body.dataset.theme = this.theme = theme;
  }
}

export default SettingService;
