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
  settingService: () => import('../services/setting'),

  /*
   * Vendors
   */
  //@ts-ignore
  // ...
};

export default providers;
export type Providers = typeof providers;
