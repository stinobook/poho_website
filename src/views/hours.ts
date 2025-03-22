import { html, css, LiteElement, query } from '@vandeurenglenn/lite'
import { customElement } from 'lit/decorators.js'
import '@vandeurenglenn/flex-elements/container.js'
import '@vandeurenglenn/lite-elements/button.js'
import '../components/post.js'

@customElement('hours-view')
export class HoursView extends LiteElement {
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
      headline="Trainingsdagen"
      .content=${html`
                De trainingen gaan door op <strong>woensdag</strong> en <strong>vrijdag</strong>.
                <table>
                  <tr>
                    <th>Groep</th>
                    <th>Aanvangsuur (Woe & Vrij)</th>
                  </tr>
                  <tr>
                    <td>Welpenklas</td>
                    <td>20 u.</td>
                  </tr>
                  <tr>
                    <td>Pups</td>
                    <td>20:15 u.</td>
                  </tr>
                  <tr>
                    <td>Pubers</td>
                    <td>20 u.</td>
                  </tr>
                  <tr>
                    <td>Recreanten</td>
                    <td>20 u.</td>
                  </tr>
                </table>
                <p>Elke woensdag is er een vrijblijvend <strong>info- en kennismakingsmoment</strong> om <strong>20u15</strong>, hier kan je wat uitleg krijgen over onze hondenschool alsook vragen stellen.</p>
                `}
      ></post-element>
      <post-element
      headline="Uitzonderlijke sluitingen"
      .content=${html`
                  De hondenschool is gesloten indien stormweer voorspeld wordt.<br>
                  STORMWEER betekent : hevige rukwinden, hevig onweer, hagel en zware sneeuwval.
                  <p>Dit wordt vooraf op de PoHo facebookpagina gecommuniceerd</p>
                  <custom-button type="filled" label="Facebook" @click=${() => window.open('https://www.facebook.com/groups/237522749633012', '_blank')}>
                  <span slot="icon"><custom-icon icon="groups"></custom-icon></span>
                  </custom-button>
                `}
      ></post-element>
    </flex-container>
    `
  }
}
