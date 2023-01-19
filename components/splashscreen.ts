import {
  TiniComponent,
  Component,
  Reactive,
  html,
  css,
  classMap,
} from '@tinijs/core';

@Component('app-splashscreen')
export class SplashscreenComponent extends TiniComponent {
  @Reactive() tooLong = false;
  @Reactive() exiting = false;

  onReady() {
    setTimeout(() => (this.tooLong = true), 7000);
  }

  hide() {
    this.exiting = true;
    setTimeout(() => this.remove(), 500);
  }

  protected template = html`
    <div class=${classMap({splashscreen: true, exiting: this.exiting})}>
      <div class="body"><img src="../assets/logo.svg" /></div>
      <div class="foot ${classMap({'too-long': this.tooLong})}">
        <span>Still working, please wait! 👌</span>
      </div>
    </div>
  `;

  static styles = css`
    .splashscreen {
      z-index: 900;
      position: fixed;
      left: 0;
      top: 0;
      display: flex;
      flex-flow: column;
      width: 100%;
      height: 100%;
      background: #f4f5f8;
      color: #222428;
      transition: opacity 0.5s ease;

      &.exiting {
        opacity: 0;
      }
    }

    .body {
      width: 100%;
      flex: 1;
      display: flex;
      flex-flow: column;
      justify-content: center;
      align-items: center;

      img {
        width: 120px;
        animation: heartbeat 1s infinite;
      }
    }

    .foot {
      opacity: 0;
      width: 100%;
      height: 72px;
      padding: 1rem;
      text-align: center;

      &.too-long {
        opacity: 1;
      }
    }

    @keyframes heartbeat {
      0% {
        transform: scale(0.75);
      }
      20% {
        transform: scale(1);
      }
      40% {
        transform: scale(0.75);
      }
      60% {
        transform: scale(1);
      }
      80% {
        transform: scale(0.75);
      }
      100% {
        transform: scale(0.75);
      }
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'app-splashscreen': SplashscreenComponent;
  }
}
