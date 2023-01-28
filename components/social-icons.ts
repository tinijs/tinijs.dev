@Component('app-social-icons')
export class SocialIconsComponent extends TiniComponent {
  @UseConfigs() configs!: AppConfigs;

  static styles = [
    unistylus``,
    css`
      ul {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        flex-wrap: nowrap;
        align-items: center;

        li {
          margin: 0.3rem;
        }

        a {
          text-decoration: none;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .icon {
          --size: 20px;
        }
      }
    `,
  ];

  protected render() {
    return html`
      <ul>
        <li class="twitter">
          <a href=${this.configs.twitter} target="_blank">
            <i class="icon icon-twitter"></i>
          </a>
        </li>
        <li class="github">
          <a href=${this.configs.github} target="_blank">
            <i class="icon icon-github"></i>
          </a>
        </li>
      </ul>
    `;
  }
}
