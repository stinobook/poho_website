import { html, css, LiteElement, query } from '@vandeurenglenn/lite'
import { customElement } from 'lit/decorators.js'
import '@vandeurenglenn/flex-elements/container.js'
import '@vandeurenglenn/lite-elements/button.js'
import '../components/post.js'

@customElement('puppymills-view')
export class PuppymillsView extends LiteElement {
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
        flex-direction: column;
        max-width: 1024px;
        gap:12px;
        height:fit-content;
        margin: 0 auto;
      }
      post-element:nth-of-type(even) {
        --flex-direction: row;
      }
      post-element:nth-of-type(odd) {
        --flex-direction: row-reverse;
      }
    `
  ]

  render() {
    return html`
    <flex-container>
      <post-element
      headline="Stop broodfok!"
      subline="Een pup koop je niet in de winkel!"
      .content=${html`
                10 Tips om je niet in de luren te laten leggen:
                <ul>
                  <li>Een goede fokker zet zijn pups niet op zoekertjessites</li>
                  <li>Verkoopt zijn pups niet aan winkels</li>
                  <li>Heeft niet non-stop pups te koop</li>
                  <li>Fokt maximum 2 rassen</li>
                  <li>De pups zitten samen met hun mama, bij voorkeur in huis</li>
                  <li>Je kan bijgevolg het moederdier zien</li>
                  <li>De ouders werden getest op erfelijke aandoeningen</li>
                  <li>De pups verlaten het nest niet voordat ze 8 weken zijn</li>
                  <li>De pups werden gechipt en gevaccineerd</li>
                </ul>
                  <custom-button type="filled" label="Meer informatie" @click=${() => window.open('https://www.broodfok.be', '_blank')}>
                  <span slot="icon"><custom-icon icon="language"></custom-icon></span>
                  </custom-button>
        `}
      ></post-element>
    </flex-container>
    `
  }
}
