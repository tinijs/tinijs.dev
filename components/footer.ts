@Component('app-footer')
export class FooterComponent extends TiniComponent {
  static styles = [
    unistylus``,
    css`
      :host {
        display: block;
        width: 100%;
        padding: 0 0 1rem;

        a {
          text-decoration: none;

          &:hover {
            text-decoration: underline;
          }
        }
      }

      .border {
        position: relative;
        width: 100%;
        border-top: var(--size-border) solid var(--color-background-shade);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        &::before {
          display: block;
          content: '';
          width: 3rem;
          height: calc(var(--size-border) * 2);
          transform: translateY(calc(var(--size-border) - 2px));
          background: var(--color-background);
        }

        img {
          width: 1rem;
          transform: translateY(-1rem);
        }
      }

      .themer {
        margin-top: 0.5rem;
        display: flex;
        justify-content: center;
      }

      .copyright {
        padding: 1rem;
        text-align: center;
        color: var(--color-medium-shade);

        &,
        a {
          font-size: 0.9rem;
        }

        a {
          color: var(--color-foreground-tint);
        }
      }

      .menu {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        align-items: center;
        justify-content: center;

        li {
          margin: 0 0.5rem;

          a {
            color: var(--color-foreground);
          }
        }
      }

      .social-icons {
        display: flex;
        justify-content: center;
        padding: 1.5rem 1rem 1rem;
      }
    `,
  ];

  protected render() {
    return html`
      <div class="border">
        <img src="../assets/logo.svg" />
      </div>
      <div class="themer">
        <app-themer></app-themer>
      </div>
      <div class="copyright">
        &copy; 2023 Tini JS - MIT license. Built with 💖 by
        <a href="https://lamnhan.com" target="_blank">Lam Nhan</a>. The homepage
        is inspired by <a href="https://nuxt.com" target="_blank">Nuxt.com</a>.
      </div>
      <ul class="menu">
        <li><a href="/terms">Terms</a></li>
        <li><a href="/privacy">Privacy</a></li>
        <li><a href="/about">About</a></li>
      </ul>
      <div class="social-icons">
        <app-social-icons></app-social-icons>
      </div>
    `;
  }
}
