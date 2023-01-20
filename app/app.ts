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

import '../components/splashscreen';
import '../components/nav-indicator';
import '../layouts/default';
import '../pages/home';
import '../pages/404';

@App(providers, {splashscreen: 'manual', navIndicator: true})
export class AppRoot extends TiniComponent {
  $configs = configs;
  $meta!: Meta;
  $router!: Router;
  $store!: Store;

  @Inject() localstorageService!: LocalstorageService;
  @Inject() settingService!: SettingService;

  onInit() {
    this.localstorageService.init();
    this.settingService
      .integrateLocalstorage(this.localstorageService)
      .setDefaults({theme: 'light'})
      .onReady(() => hideAppSplashscreen())
      .init();
  }

  onReady() {
    this.$meta = initMetas({metas});
    this.$router = registerRoutes(routes);
    this.$store = createStore(states);
  }

  protected template = html`
    <app-splashscreen></app-splashscreen>
    ${APP_ROOT_TEMPLATE}
    <app-nav-indicator></app-nav-indicator>
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'app-root': AppRoot;
  }
}
