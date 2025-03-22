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
        justify-content: center;
        max-width: 1024px;
        gap:12px;
        height:fit-content;
        margin: 0 auto;
        align-items: stretch;
      }
      custom-tabs {
        width: 100%;
      }
      .hidden {
        display: none;
      }
    `
  ]


  @property() accessor selected

  async select(selected) {
    console.log(selected.detail)
    let members = this.shadowRoot.querySelectorAll('member-element')
    members.forEach((member) => member.getAttribute('group') === selected.detail ? member.classList.remove('hidden') : member.classList.add('hidden'))
    this.requestRender()
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
    title="Hoofdinstructeur / allroundinstructeur / welpenklas"
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
