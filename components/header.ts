@Component('app-header')
export class HeaderComponent extends TiniComponent {
  @Reactive() solid = false;
  @Reactive() mobileExpanded = false;

  @Query('header') headerNode!: HTMLElement;

  static styles = [
    unistylus``,
    css`
      header {
        background: var(
          --header-background,
          rgba(var(--color-background-rgb), 0.325)
        );
        backdrop-filter: blur(var(--header-blur, 12px));
        width: 100%;
        max-width: 1200px;
        margin: auto;
        padding: 1rem 0.5rem;
        border-bottom: 1px solid transparent;
        display: flex;
        align-items: center;
        line-height: 1;

        &,
        &.solid {
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
          top: 65px;
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

      header.expanded,
      header.solid {
        background: var(--color-background);
        border-color: var(--color-background-shade);
      }

      header.expanded {
        .menu {
          display: block;
        }

        .social-icons {
          display: none;
        }

        .themer {
          display: flex;
        }
      }
    `,
  ];

  protected render() {
    return html`<header
      class=${classMap({
        solid: this.solid,
        expanded: this.mobileExpanded,
      })}
    >
      <button class="toggler" @click=${() => this.toggleMobileMenu()}>
        <i
          class=${classMap({
            icon: true,
            'icon-menu': !this.mobileExpanded,
            'icon-close': this.mobileExpanded,
          })}
        ></i>
      </button>
      <a class="brand" href="/" @click=${() => this.toggleMobileMenu(false)}>
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
  }

  onCreate() {
    this._manageGlobalEvents('add');
  }

  onReady() {
    this.renderRoot
      .querySelectorAll('.menu a')
      .forEach(node =>
        node.addEventListener('click', () => this.toggleMobileMenu())
      );
  }

  onDestroy() {
    this._manageGlobalEvents('remove');
  }

  toggleMobileMenu(expanded?: boolean) {
    this.mobileExpanded = expanded ?? !this.mobileExpanded;
    document.body.style.overflow = this.mobileExpanded ? 'hidden' : 'auto';
  }

  private _scrollEvent(forced = false) {
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

  private _popstateEvent() {
    this.solid = location.pathname !== '/';
  }

  private _manageGlobalEvents(action: 'add' | 'remove') {
    // window load
    const windowLoadListener = () => {
      this._scrollEvent(true);
      this._popstateEvent();
    };
    window[`${action}EventListener`]('load', windowLoadListener.bind(this));
    // window scroll
    const windowScrollListener = () => {
      this._scrollEvent();
    };
    window[`${action}EventListener`]('scroll', windowScrollListener.bind(this));
    // window popstate
    const windowPopstateListener = () => {
      this._popstateEvent();
    };
    window[`${action}EventListener`](
      'popstate',
      windowPopstateListener.bind(this)
    );
  }
}
