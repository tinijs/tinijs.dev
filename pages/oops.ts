@Page('page-oops')
export class OopsPage extends TiniComponent {
  metas: PageMetas = {
    title: 'Oops',
    description: 'Error 404, not found!',
  };

  static styles = [
    unistylus``,
    css`
      :host {
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        width: 100%;
        padding: 3rem 1rem 1rem;
      }

      p {
        color: var(--color-medium);
      }

      p:last-child {
        margin-top: 1rem;
      }
    `,
  ];

  protected render() {
    return html`
      <h1>Oops! 🫣</h1>
      <p>Something is broken here.</p>
      <p><a class="button-primary" href="/">Home</a></p>
    `;
  }
}
