import {
  TiniComponent,
  Component,
  Reactive,
  Input,
  Query,
  html,
  css,
  unistylus,
  classMap,
} from '@tinijs/core';

import './themer';
import './social-icons';

@Component('app-header')
export class HeaderComponent extends TiniComponent {
  @Input() sticky = false;

  @Reactive() mobileExpanded = false;

  @Query('header') headerNode!: HTMLElement;

  onCreate() {
    // header bg & blur
    window.addEventListener('load', () => this.onScroll(true));
    window.addEventListener('scroll', () => this.onScroll());
  }

  onReady() {
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
    <div class="social-icons">
      <app-social-icons></app-social-icons>
    </div>
    <div class="themer">
      <app-themer></app-themer>
    </div>
  </header>`;

  static styles = [
    unistylus`
      icon
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
          margin-right: 35px;
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

              &:hover {
                text-decoration: underline;
              }
            }
          }
        }

        .themer {
          display: none;
          width: 59.19px;
          justify-content: flex-end;
        }
      }

      header.expanded {
        background: var(--color-background);

        .menu {
          display: block;
          border-color: var(--color-background-shade);
        }

        .social-icons {
          display: none;
        }

        .themer {
          display: flex;
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
