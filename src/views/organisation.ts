import { html, css, LiteElement, query, property } from '@vandeurenglenn/lite'
import { customElement } from 'lit/decorators.js'
import '@vandeurenglenn/flex-elements/container.js'
import '@vandeurenglenn/lite-elements/button.js'
import '@vandeurenglenn/lite-elements/tabs.js'
import '../components/member.js'

@customElement('organisation-view')
export class OrganisationView extends LiteElement {
  static styles = [
    css`
        :host {
            overflow-y: auto;
        }
        ::-webkit-scrollbar {
            width: 8px;
            border-radius: var(--md-sys-shape-corner-extra-large);
            background-color: var(--md-sys-color-surface-container-highest);
        }
        ::-webkit-scrollbar-thumb {
            background: var(--md-sys-color-on-surface-container-highest);
            border-radius: var(--md-sys-shape-corner-extra-large);
            box-shadow: 0px 0px 6px 2px rgba(0, 0, 0, 0.5) inset;
        }
        flex-container {
            flex-flow: row wrap;
            justify-content: flex-start;
            max-width: 1024px;
            gap:12px;
            height:fit-content;
            margin: 0 auto;
            align-items: stretch;
        }
        custom-tabs {
            width: 100%;
        }
        member-element {
        opacity: 1;
        transform: scale(1);
        transition: opacity 250ms ease, transform 250ms ease;
        display: block;
        }

        member-element.hidden {
        display: none;
        opacity: 0;
        }
         member-element.fade-in {
        opacity: 0;
        transform: scale(0.95);
        }

         member-element.fade-in.show {
        opacity: 1;
        transform: scale(1);
        }
    `
  ]


  @property() accessor selected
async select(selected) {
  const group = selected.detail;
  const members = this.shadowRoot.querySelectorAll('member-element');

  members.forEach((member) => {
    const isMatch = member.getAttribute('group') === group;

    if (isMatch) {
      member.classList.remove('hidden');
      member.classList.add('fade-in');
      requestAnimationFrame(() => {
        member.classList.add('show');
      });
    } else {
      member.classList.remove('show', 'fade-in');
      member.classList.add('hidden');
    }
  });

  this.requestRender();
}

  render() {
    return html`
    <flex-container>
    <custom-tabs attr-for-selected="group" @selected=${this.select.bind(this)}>
      <custom-tab group="bestuur" class="custom-selected">Bestuur</custom-tab>
      <custom-tab group="instructeurs">Instructeurs</custom-tab>
      <custom-tab group="medewerkers">Medewerkers</custom-tab>
    </custom-tabs>
    <member-element
    group="bestuur"
    image="./img/members/joke.webp"
    name="Joke De Swaef"
    title="Voorzitter"
    content="GSM: 0477/52 39 83"
    ></member-element>
    <member-element
    group="bestuur"
    image="./img/members/raf.webp"
    name="Raf Van Hoyweghen"
    title="Penningmeester"
    content="GSM: 0497/84 20 38"
    ></member-element>
    <member-element
    group="bestuur"
    image="./img/members/lieve.webp"
    name="Lieve Boelaert"
    title="Secretaris"
    content="GSM: 0477/58 99 59"
    ></member-element>
    <member-element
    group="bestuur"
    image="./img/members/stijn.webp"
    name="Stijn Schepers"
    title="Bestuurslid"
    content="GSM: 0488/46 04 07"
    ></member-element>
    <member-element
    group="instructeurs"
    image="./img/members/jokevdv.webp"
    name="Joke VdV"
    title="Pups"
    class="hidden"
    ></member-element>
    <member-element
    group="instructeurs"
    image="./img/members/emma.webp"
    name="Emma"
    title="Pups"
    class="hidden"
    ></member-element>
    <member-element
    group="instructeurs"
    image="./img/members/vanessa.webp"
    name="Vanessa"
    title="Pubers"
    class="hidden"
    ></member-element>
    <member-element
    group="instructeurs"
    image="./img/members/madeline.webp"
    name="Madeline"
    title="Allroundinstructeur recreanten"
    class="hidden"
    ></member-element>
    <member-element
    group="instructeurs"
    image="./img/members/dirk.webp"
    name="Dirk"
    title="Pups / Clickerinitiatie"
    class="hidden"
    ></member-element>
    <member-element
    group="medewerkers"
    image="./img/logo.png"
    name="Ann"
    class="hidden"
    ></member-element>
    <member-element
    group="medewerkers"
    image="./img/logo.png"
    name="Tim"
    class="hidden"
    ></member-element>
    </flex-container>
    `
  }
}
