import { LiteElement, html, css, customElement, property } from '@vandeurenglenn/lite'
import '@vandeurenglenn/lite-elements/icon-button.js'

@customElement('drawer-element')
export class DrawerElement extends LiteElement {
  @property({ type: Boolean, reflect: true }) accessor open
  static styles = [
    css`
      :host {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100px;
        box-sizing: border-box;
        padding: 12px 24px;
        background-color: var(--md-sys-color-surface-container-high);
        color: var(--md-sys-color-on-surface-container-high);
        height: 100%;
        width: 240px;
        position: fixed;
        opacity: 0;
        pointer-events: none;
      }

      :host([open]) {
        opacity: 1;
        pointer-events: auto;
        z-index: 1000;
      }

      custom-icon {
        pointer-events: none;
      }
      :host([open]) custom-icon {
        pointer-events: auto;
      }
    `
  ]

  render() {
    return html`<custom-icon
        icon="menu_open"
        @click=${() => document.dispatchEvent(new CustomEvent('drawer-open', { detail: false }))}></custom-icon>
      <slot></slot> `
  }
}
