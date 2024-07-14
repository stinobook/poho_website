import { html, css, LiteElement, query } from '@vandeurenglenn/lite'
import { customElement } from 'lit/decorators.js'
import '@vandeurenglenn/flex-elements/container.js'
import '@vandeurenglenn/lite-elements/button.js'
import '../components/post.js'

@customElement('mission-view')
export class MissionView extends LiteElement {
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
      headline="Missie"
      content="Uw hond gehoorzaam maken, door middel van een positieve trainingsmethode, is onze taak.
                Actieve lessen, door deskundig opgeleide instructeurs, zorgen ervoor dat u een prima
                band krijgt met uw hond."
      ></post-element>
      <post-element
      headline="Visie"
      content="Vanuit de hondenschool willen we, als één communicerend team, zowel onderling als
              met de leden, onze missie realiseren door het respecteren van onze waarden en normen
              (respect voor geleider en hond tonen en verdienen; collegialiteit is de basis voor een
              ontspannen geest binnen onze hondenschool; professionaliteit is de fundering voor een
              doeltreffende aanpak)."
      ></post-element>
    </flex-container>
    `
  }
}
