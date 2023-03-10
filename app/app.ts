import {
  TiniComponent,
  App,
  APP_ROOT_TEMPLATE,
  Inject,
  html,
  hideAppSplashscreen,
} from '@tinijs/core';
import {initMetas, Meta} from '@tinijs/meta';
import {registerRoutes, Router} from '@tinijs/router';
import {createStore} from '@tinijs/store';
import {LocalstorageService, SettingService} from '@tinijs/useful';

import configs from '../configs/development';
import providers from './providers';
import routes from './routes';
import {metas} from './metas';
import states, {Store} from './states';

import '../layouts/default';
import '../pages/home';
import '../pages/oops';

import '../components/nav-indicator';

@App(providers, {splashscreen: 'manual', navIndicator: true})
export class AppRoot extends TiniComponent {
  $configs = configs;
  $meta!: Meta;
  $router!: Router;
  $store!: Store;

  @Inject() localstorageService!: LocalstorageService;
  @Inject() settingService!: SettingService;

  protected render() {
    return html`
      ${APP_ROOT_TEMPLATE}
      <app-nav-indicator></app-nav-indicator>
    `;
  }

  onInit() {
    this.localstorageService.init();
    this.settingService
      .integrateLocalstorage(this.localstorageService)
      .setDefaults({theme: 'light'})
      .init(() => hideAppSplashscreen());
  }

  onReady() {
    this.$meta = initMetas({metas});
    this.$router = registerRoutes(routes);
    this.$store = createStore(states);
  }
}
