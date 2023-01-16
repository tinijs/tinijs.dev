import {
  TiniComponent,
  Component,
  UseConfigs,
  html,
  unistylus,
  css,
} from '@tinijs/core';

import {AppConfigs} from '../app/types';

@Component('app-welcome')
export class AppWelcome extends TiniComponent {
  @UseConfigs() configs!: AppConfigs;

  protected template = html`
    <h3 class="title">A tiny Web Framework</h3>
    <p class="tagline">
      Build your next web application with the "Tí nị" framework. An open source
      framework under MIT license that makes web development simple and
      powerful.
    </p>
    <div class="action">
      <button>Get started</button>
      <a href=${this.configs.github} target="_blank">Open on Github</a>
    </div>
  `;

  protected styling() {
    return [
      unistylus``,
      css`
        :host {
          display: block;
          width: 100%;
          padding: 3rem 1rem 2rem;
          background: url(https://nuxt.com/assets/home/hero-gradient.svg);
          background-size: 100%;
        }

        .title {
          font-size: 3.5rem;
          font-weight: normal;
          margin-bottom: 2rem;
        }

        .tagline {
          font-size: 1.25rem;
          font-weight: 300;
          line-height: 1.75;
          color: var(--color-medium-shade);
        }
      `,
    ];
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-welcome': AppWelcome;
  }
}
