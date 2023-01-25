import {
  TiniComponent,
  Component,
  UseConfigs,
  html,
  css,
  unistylus,
} from '@tinijs/core';

import {AppConfigs} from '../app/types';

@Component('app-welcome')
export class WelcomeComponent extends TiniComponent {
  @UseConfigs() configs!: AppConfigs;

  static styles = [
    unistylus``,
    css`
      :host {
        display: block;
        position: relative;
        width: 100%;
        padding: 4rem 1rem 2rem;
      }

      .bg-images {
        position: absolute;
        width: 100%;
        top: 0;
        left: 0;
        z-index: 100;

        .mobile {
          width: calc(100% + 2rem);
          margin-left: -1rem;
        }

        .tablet,
        .desktop {
          display: none;
        }
      }

      .content {
        position: relative;
        z-index: 101;

        .title {
          margin: 2rem 0;
          font-size: 3.5rem;
          font-weight: normal;
          text-align: center;
        }

        .tagline {
          font-size: 1.25rem;
          font-weight: 300;
          line-height: 1.75;
          color: var(--color-medium-shade);
          text-align: center;
        }

        .actions {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 2rem;

          .github {
            text-decoration: none;
            color: var(--color-foreground);
            text-decoration: none;
            display: flex;
            flex-wrap: nowrap;
            align-items: center;
            margin-top: 2rem;

            .icon {
              --size: 1.2rem;
              margin-left: 0.5rem;
            }
          }
        }
      }
    `,
  ];

  protected render() {
    return html`
      <div class="bg-images">
        <img
          class="mobile"
          src="../assets/images/welcome-gradient-mobile.svg"
        />
        <img
          class="tablet"
          src="../assets/images/welcome-gradient-tablet.svg"
        />
        <img class="desktop" src="../assets/images/welcome-gradient.svg" />
      </div>
      <div class="content">
        <h3 class="title">A tiny Web Framework</h3>
        <p class="tagline">
          Build your next web application with the Tini framework. An open
          source framework under MIT license that makes web development simple
          and powerful.
        </p>
        <div class="actions">
          <a class="start button-primary" href="/docs/intro">Get started</a>
          <a class="github" href=${this.configs.github} target="_blank">
            <strong>Open on Github</strong>
            <i class="icon icon-right"></i>
          </a>
        </div>
      </div>
    `;
  }
}
