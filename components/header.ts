import {
  TiniComponent,
  Component,
  UseConfigs,
  Reactive,
  Input,
  Query,
  html,
  css,
  unistylus,
  classMap,
} from '@tinijs/core';

import {AppConfigs} from '../app/types';

@Component('app-header')
export class HeaderComponent extends TiniComponent {
  @UseConfigs() configs!: AppConfigs;

  @Input() sticky = false;

  @Reactive() mobileExpanded = false;

  @Query('header') headerNode!: HTMLElement;

  onReady() {
    // header bg & blur
    setTimeout(() => this.onScroll(true), 30);
    window.addEventListener('scroll', () => this.onScroll());
    // close mobile menu
    this.renderRoot
      .querySelectorAll('.menu a')
      .forEach(node =>
        node.addEventListener('click', () => this.toggleMobileMenu())
      );
  }

  onDestroy() {
    window.removeEventListener('scroll', () => this.onScroll());
  }

  onScroll(forced = false) {
    const scrollY = window.scrollY;
    if (!forced && scrollY > 96) return;
    const bgOpacity = Math.min(0.65, scrollY / 96);
    const bgBlur = bgOpacity * 12;
    this.headerNode.style.setProperty(
      '--header-background',
      `rgba(var(--color-background-rgb), ${bgOpacity})`
    );
    this.headerNode.style.setProperty('--header-blur', `${bgBlur}px`);
  }

  toggleMobileMenu() {
    this.mobileExpanded = !this.mobileExpanded;
  }

  protected template = html`<header
    class=${classMap({
      sticky: this.sticky,
      expanded: this.mobileExpanded,
    })}
  >
    <button class="toggler" @click=${this.toggleMobileMenu}>
      <i
        class=${classMap({
          icon: true,
          'icon-menu': !this.mobileExpanded,
          'icon-close': this.mobileExpanded,
        })}
      ></i>
    </button>
    <a class="brand" href="/" @click=${() => (this.mobileExpanded = false)}>
      <img src="../assets/logo.svg" />
      <h1>Tini</h1>
    </a>
    <ul class="menu">
      <li class="docs"><a href="/docs">Docs</a></li>
      <li class="modules"><a href="/modules">Modules</a></li>
      <li class="support"><a href="/support">Support</a></li>
      <li class="about"><a href="/about">About</a></li>
    </ul>
    <ul class="links">
      <li class="github">
        <a href=${this.configs.github} target="_blank">
          <i class="icon icon-github"></i>
        </a>
      </li>
    </ul>
  </header>`;

  static styles = [
    unistylus`
      icon-menu
      icon-close
    `,
    css`
      header {
        background: var(--header-background, transparent);
        backdrop-filter: blur(var(--header-blur, 0));
        width: 100%;
        max-width: 1200px;
        margin: auto;
        box-sizing: border-box;
        padding: 1rem 0.5rem;
        border-bottom: 1px solid transparent;
        display: flex;
        align-items: center;
        line-height: 1;

        &,
        &.sticky {
          z-index: 500;
          position: fixed;
          top: 0;
          left: 0;
        }

        .toggler {
          background: none;
          border: 0;
          padding: 0;
          display: flex;
          align-items: center;
          justify-content: center;

          .icon {
            --size: 28px;
          }
        }

        .brand {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;

          img {
            width: 1.5rem;
            margin-right: 5px;
          }

          h1 {
            display: none;
          }
        }

        .menu {
          display: none;
          background: var(--color-background);
          margin: 0;
          padding: 1rem;
          list-style: none;
          position: fixed;
          border-top: 1px solid transparent;
          top: 64px;
          left: 0;
          width: 100%;
          height: calc(100vh - 64px);

          li {
            padding: 1rem;
            text-align: center;

            a {
              color: var(--color-foreground);
              text-decoration: none;
            }
          }
        }

        .links {
          list-style: none;
          margin: 0;
          padding: 0;

          .icon {
            --size: 20px;
          }
        }
      }

      header.expanded {
        background: var(--color-background);

        .menu {
          display: block;
          border-color: var(--color-background-shade);
        }
      }

      header.sticky {
        background: var(--color-background);
        border-color: var(--color-background-shade);
      }
    `,
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    'app-header': HeaderComponent;
  }
}
