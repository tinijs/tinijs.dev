/* eslint-disable @typescript-eslint/ban-ts-comment */
const providers = {
  /*
   * Consts
   */
  // ...
  /*
   * Helpers
   */
  // ...
  /*
   * Services
   */
  fetchService: () => import('@tinijs/useful/services/fetch'),
  localstorageService: () => import('@tinijs/useful/services/localstorage'),
  settingService: () => import('@tinijs/useful/services/setting'),

  /*
   * Vendors
   */
  //@ts-ignore
  // ...
};

export default providers;
export type Providers = typeof providers;
