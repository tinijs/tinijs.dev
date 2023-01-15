import {
  TiniComponent,
  Component,
  Input,
  html,
  css,
  unistylus,
  classMap,
} from '@tinijs/core';

@Component('app-header')
export class HeaderComponent extends TiniComponent {
  @Input() sticky = false;

  protected template = html`<header class=${classMap({sticky: this.sticky})}>
    <div class="brand">
      <a href="/"><img src="../assets/logo-name.svg" /></a>
    </div>
    <div class="menu">
      <div class="toggler">
        <button><i class="icon-2x icon-menu"></i></button>
      </div>
      <nav class="nav">
        <ul>
          <li class="docs"><a href="/docs">Docs</a></li>
          <li class="support"><a href="/support">Support</a></li>
          <li class="about"><a href="/about">About</a></li>
        </ul>
      </nav>
      <div class="links">
        <ul>
          <li class="github">
            <a href="https://github.com/tinijs" target="_blank">
              <i class="icon-2x icon-github"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </header>`;

  static styles = [
    unistylus``,
    css`
      header {
        margin: 0;

        &.sticky {
        }
      }

      .brand {
        img {
        }
      }

      .menu {
        .toggler {
        }

        .nav {
        }

        .links {
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
