import {TiniComponent, Page, html, css, unistylus} from '@tinijs/core';

@Page('page-terms')
export class TermsPage extends TiniComponent {
  static styles = [
    unistylus``,
    css`
      :host {
        display: block;
        box-sizing: border-box;
        width: 100%;
        max-width: 720px;
        padding: 0.5rem 1rem 2rem;
      }

      h2 {
        text-align: center;
      }
    `,
  ];

  protected render() {
    return html`<h2>Terms of service</h2>

      <h3>1. Terms</h3>

      <p>
        By accessing this Website, accessible from https://tinijs.dev, you are
        agreeing to be bound by these Website Terms and Conditions of Use and
        agree that you are responsible for the agreement with any applicable
        local laws. If you disagree with any of these terms, you are prohibited
        from accessing this site. The materials contained in this Website are
        protected by copyright and trade mark law.
      </p>

      <h3>2. Use License</h3>

      <p>
        Copyright (C) by Lam Nhan
        <a href="https://lamnhan.com" target="_blank">https://lamnhan.com</a>
      </p>

      <p>
        Permission is hereby granted, free of charge, to any person obtaining a
        copy of this website and associated materials (the "Website" or "TiniJS
        Homepage"), to deal in the Website without restriction, including
        without limitation the rights to use, copy, modify, merge, publish,
        distribute, sublicense, and/or sell copies of the Website, and to permit
        persons to whom the Website is furnished to do so, subject to the
        following conditions:
      </p>

      <ul>
        <li>
          The above copyright notice and this permission notice shall be
          included in all copies or substantial portions of the Website.
        </li>
      </ul>

      <h3>3. Disclaimer</h3>

      <p>
        THE WEBSITE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
        OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
        MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
        IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
        CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
        TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
        WEBSITE OR THE USE OR OTHER DEALINGS IN THE WEBSITE.
      </p>

      <h3>4. Limitations</h3>

      <p>
        TiniJS Hompage or its suppliers will not be hold accountable for any
        damages that will arise with the use or inability to use the materials
        on TiniJS Hompage’s Website, even if TiniJS Hompage or an authorize
        representative of this Website has been notified, orally or written, of
        the possibility of such damage. Some jurisdiction does not allow
        limitations on implied warranties or limitations of liability for
        incidental damages, these limitations may not apply to you.
      </p>

      <h3>5. Revisions and Errata</h3>

      <p>
        The materials appearing on TiniJS Hompage’s Website may include
        technical, typographical, or photographic errors. TiniJS Hompage will
        not promise that any of the materials in this Website are accurate,
        complete, or current. TiniJS Hompage may change the materials contained
        on its Website at any time without notice. TiniJS Hompage does not make
        any commitment to update the materials.
      </p>

      <h3>6. Links</h3>

      <p>
        TiniJS Hompage has not reviewed all of the sites linked to its Website
        and is not responsible for the contents of any such linked site. The
        presence of any link does not imply endorsement by TiniJS Hompage of the
        site. The use of any linked website is at the user’s own risk.
      </p>

      <h3>7. Site Terms of Use Modifications</h3>

      <p>
        TiniJS Hompage may revise these Terms of Use for its Website at any time
        without prior notice. By using this Website, you are agreeing to be
        bound by the current version of these Terms and Conditions of Use.
      </p>

      <h3>8. Your Privacy</h3>

      <p>Please read our <a href="/privacy">Privacy Policy</a>.</p>

      <h3>9. Governing Law</h3>

      <p>
        Any claim related to TiniJS Hompage's Website shall be governed by the
        laws of Vietnam without regards to its conflict of law provisions.
      </p>`;
  }
}
