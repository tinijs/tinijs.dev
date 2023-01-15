import {
  TiniComponent,
  Component,
  Reactive,
  Input,
  html,
  css,
  unistylus,
  classMap,
} from '@tinijs/core';

@Component('app-header')
export class HeaderComponent extends TiniComponent {
  @Input() sticky = false;
  @Reactive() mobileExpanded = false;

  toggleMobileMenu() {
    this.mobileExpanded = !this.mobileExpanded;
  }

  protected template = html`<header class=${classMap({sticky: this.sticky})}>
    <button class="toggler" @click=${this.toggleMobileMenu}>
      <i
        class=${classMap({
          icon: true,
          'icon-menu': !this.mobileExpanded,
          'icon-close': this.mobileExpanded,
        })}
      ></i>
    </button>
    <a href="/" class="brand">
      <img src="../assets/logo.svg" />
      <h1>Tini</h1>
    </a>
    <ul class=${classMap({menu: true, expanded: this.mobileExpanded})}>
      <li class="docs"><a href="/docs">Docs</a></li>
      <li class="modules"><a href="/modules">Modules</a></li>
      <li class="support"><a href="/support">Support</a></li>
      <li class="about"><a href="/about">About</a></li>
    </ul>
    <ul class="links">
      <li class="github">
        <a href="https://github.com/tinijs" target="_blank">
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
        background: gray;
        width: 100%;
        max-width: 1200px;
        margin: auto;
        box-sizing: border-box;
        padding: 1rem 0.5rem;
        border-bottom: 1px solid transparent;
        display: flex;
        align-items: center;
        line-height: 1;

        &.sticky {
          position: sticky;
          border-color: var(--color-medium);
        }
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
        background: var(--color-background);
        background: #aaaaaa;
        display: none;
        margin: 0;
        padding: 0;
        list-style: none;
        position: fixed;
        border-top: 1px solid transparent;
        top: 64px;
        left: 0;
        width: 100%;
        height: calc(100vh - 64px);

        &.expanded {
          display: block;
          border-color: var(--color-medium);
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
    `,
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    'app-header': HeaderComponent;
  }
}
