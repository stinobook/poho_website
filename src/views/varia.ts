import { html, css, LiteElement, query } from '@vandeurenglenn/lite'
import { customElement } from 'lit/decorators.js'
import '@vandeurenglenn/flex-elements/container.js'
import '@vandeurenglenn/lite-elements/button.js'
import '../components/post.js'

@customElement('varia-view')
export class VariaView extends LiteElement {
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
      headline="Links naar filmpjes"
      .content=${html`
        <custom-button type="filled" label="TV Oost 2020" @click=${() => window.open('https://www.facebook.com/karl.roelandt/videos/3940669035943790', '_blank')}>
        <span slot="icon"><custom-icon icon="check"></custom-icon></span>
        </custom-button>
        <custom-button type="filled" label="Watergewenning 2019" @click=${() => window.open('https://www.facebook.com/madeline.dekerpel/videos/10214059058048338/?t=1', '_blank')}>
        <span slot="icon"><custom-icon icon="check"></custom-icon></span>
        </custom-button>
        <custom-button type="filled" label="Tandjes kijken" @click=${() => window.open('https://www.facebook.com/madeline.dekerpel/videos/10216033926578817/', '_blank')}>
        <span slot="icon"><custom-icon icon="check"></custom-icon></span>
        </custom-button>
        <custom-button type="filled" label="Oefening 'tussen de benen' 2020" @click=${() => window.open('https://www.facebook.com/madeline.dekerpel/videos/pcb.3221960541189203/10216003086287829/?type=3&theater&ifg=1', '_blank')}>
        <span slot="icon"><custom-icon icon="check"></custom-icon></span>
        </custom-button>
                `}
      ></post-element>
    </flex-container>
    `
  }
}
