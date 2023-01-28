@Page('page-docs')
export class DocsPage extends TiniComponent {
  @Inject() fetchService!: FetchService;

  @Reactive() categoryId?: string;
  @Reactive() docId?: string;

  onBeforeEnter(location: RouterLocation) {
    const {cat, slug} = location.params
    this.categoryId = slug ? cat as string : undefined;
    this.docId = (slug || cat) as string | undefined;
  }

  static readonly CATEGORIES = {
    'none': {},
    'guides': {},
  };

  static styles = [
    unistylus``,
    css`
      :host {
        margin: 0;
      }
    `,
  ];

  protected templateHome() {
    return html`<p>Docs Home</p>`;
  }

  protected templateArticle(id: string, categoryId?: string) {
    return html`<p>Docs Article: ${id} | ${categoryId}</p>`;
  }

  protected render() {
    return !this.docId
      ? this.templateHome()
      : this.templateArticle(this.docId, this.categoryId);
  }

  onInit() {
    console.log(this.docId, this.categoryId);
  }
  
  private fetchContent() {
    this.fetchService.getText();
  }
}
