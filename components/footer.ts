import {TiniComponent, Component, html, css, unistylus} from '@tinijs/core';

import './themer';
import './social-icons';

@Component('app-footer')
export class FooterComponent extends TiniComponent {
  protected template = html`
    <div class="border">
      <img src="../assets/logo.svg" />
    </div>
    <div class="themer">
      <app-themer></app-themer>
    </div>
    <div class="copyright">
      &copy; 2023 TiniJS - MIT license. Built with 💖 by
      <a href="https://lamnhan.com" target="_blank">Lam Nhan</a>
      . The homepage is inspired by
      <a href="https://nuxt.com" target="_blank">Nuxt</a>
      .
    </div>
    <ul class="menu">
      <li><a href="/terms">Terms</a></li>
      <li><a href="/privacy">Privacy</a></li>
      <li><a href="/about">About</a></li>
    </ul>
    <ul class="social-icons">
      <app-social-icons></app-social-icons>
    </ul>
  `;

  static styles = [
    unistylus``,
    css`
      :host {
        display: block;
        width: 100%;
      }

      .border {
      }
      .themer {
      }
      .copyright {
      }
      .menu {}
      .social-icons {}
    `,
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    'app-footer': FooterComponent;
  }
}
