import {TiniComponent, Page, html, css, unistylus} from '@tinijs/core';

@Page('page-terms')
export class TermsPage extends TiniComponent {
  protected template = html`<h2>Terms of service</h2>

    <h3>1. Terms</h3>

    <p>
      By accessing this Website, accessible from https://tinijs.dev, you are
      agreeing to be bound by these Website Terms and Conditions of Use and
      agree that you are responsible for the agreement with any applicable local
      laws. If you disagree with any of these terms, you are prohibited from
      accessing this site. The materials contained in this Website are protected
      by copyright and trade mark law.
    </p>

    <h3>2. Use License</h3>

    <p>
      Permission is granted to temporarily download one copy of the materials on
      TiniJS Hompage's Website for personal, non-commercial transitory viewing
      only. This is the grant of a license, not a transfer of title, and under
      this license you may not:
    </p>

    <ul>
      <li>modify or copy the materials;</li>
      <li>
        use the materials for any commercial purpose or for any public display;
      </li>
      <li>
        attempt to reverse engineer any software contained on TiniJS Hompage's
        Website;
      </li>
      <li>
        remove any copyright or other proprietary notations from the materials;
        or
      </li>
      <li>
        transferring the materials to another person or "mirror" the materials
        on any other server.
      </li>
    </ul>

    <p>
      This will let TiniJS Hompage to terminate upon violations of any of these
      restrictions. Upon termination, your viewing right will also be terminated
      and you should destroy any downloaded materials in your possession whether
      it is printed or electronic format.
    </p>

    <h3>3. Disclaimer</h3>

    <p>
      All the materials on TiniJS Hompage’s Website are provided "as is". Lam
      Nhan Web App makes no warranties, may it be expressed or implied,
      therefore negates all other warranties. Furthermore, TiniJS Hompage does
      not make any representations concerning the accuracy or reliability of the
      use of the materials on its Website or otherwise relating to such
      materials or any sites linked to this Website.
    </p>

    <h3>4. Limitations</h3>

    <p>
      TiniJS Hompage or its suppliers will not be hold accountable for any
      damages that will arise with the use or inability to use the materials on
      TiniJS Hompage’s Website, even if TiniJS Hompage or an authorize
      representative of this Website has been notified, orally or written, of
      the possibility of such damage. Some jurisdiction does not allow
      limitations on implied warranties or limitations of liability for
      incidental damages, these limitations may not apply to you.
    </p>

    <h3>5. Revisions and Errata</h3>

    <p>
      The materials appearing on TiniJS Hompage’s Website may include technical,
      typographical, or photographic errors. TiniJS Hompage will not promise
      that any of the materials in this Website are accurate, complete, or
      current. TiniJS Hompage may change the materials contained on its Website
      at any time without notice. TiniJS Hompage does not make any commitment to
      update the materials.
    </p>

    <h3>6. Links</h3>

    <p>
      TiniJS Hompage has not reviewed all of the sites linked to its Website and
      is not responsible for the contents of any such linked site. The presence
      of any link does not imply endorsement by TiniJS Hompage of the site. The
      use of any linked website is at the user’s own risk.
    </p>

    <h3>7. Site Terms of Use Modifications</h3>

    <p>
      TiniJS Hompage may revise these Terms of Use for its Website at any time
      without prior notice. By using this Website, you are agreeing to be bound
      by the current version of these Terms and Conditions of Use.
    </p>

    <h3>8. Your Privacy</h3>

    <p>Please read our Privacy Policy.</p>

    <h3>9. Governing Law</h3>

    <p>
      Any claim related to TiniJS Hompage's Website shall be governed by the
      laws of vn without regards to its conflict of law provisions.
    </p>`;

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
}

declare global {
  interface HTMLElementTagNameMap {
    'page-terms': TermsPage;
  }
}
