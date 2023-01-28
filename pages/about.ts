@Page('page-about')
export class AboutPage extends TiniComponent {
  static styles = [
    unistylus``,
    css`
      :host {
        margin: 0;
      }
    `,
  ];

  protected render() {
    return html`<p>AboutPage</p>`;
  }
}
