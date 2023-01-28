@Component('app-nav-indicator')
export class NavIndicatorComponent extends TiniComponent {
  @Reactive() active = false;

  @Query('.indicator') indicatorNode!: HTMLDivElement;

  private timerIntervals = [
    [50, 15],
    [100, 12],
    [200, 10],
    [300, 8],
    [500, 7],
    [700, 6],
    [1000, 5],
  ];
  private timers = [] as any[];

  static styles = css`
    .indicator {
      z-index: 900;
      box-sizing: border-box;
      display: flex;
      width: 100%;
      height: 5px;
      position: fixed;
      top: -5rem;
      left: 0;
      cursor: pointer;
      background: linear-gradient(
        90deg,
        rgba(235, 68, 90, 1) 0%,
        rgba(82, 96, 255, 1) 35%,
        rgba(61, 194, 255, 1) 70%,
        rgba(45, 211, 111, 1) 100%
      );
      transition: 0.1s clip-path ease;
      clip-path: inset(0 100% 0 0);

      &.active {
        top: 65px;
      }
    }
  `;

  protected render() {
    return html`
      <div
        class=${classMap({indicator: true, active: this.active})}
        @click=${this.hide}
      ></div>
    `;
  }

  show() {
    this.active = true;
    this.timerIntervals.forEach(([time, percentage], i) =>
      this.timers.push(
        setTimeout(() => {
          this.timers[i] = null;
          this.indicatorNode.style.clipPath = `inset(0 ${percentage}% 0 0)`;
        }, time)
      )
    );
  }

  hide() {
    this.indicatorNode.style.clipPath = 'inset(0 0 0 0)';
    setTimeout(() => {
      this.active = false;
      this.indicatorNode.style.clipPath = 'inset(0 100% 0 0)';
    }, 150);
    this.timers.forEach(item => item && clearTimeout(item));
  }
}
