import { LiteElement, html, css, customElement, property } from '@vandeurenglenn/lite'
import '@vandeurenglenn/lite-elements/icon-button.js'

@customElement('header-element')
export class HeaderElement extends LiteElement {
  static styles = [
    css`
      :host {
        display: flex;
        width: 100%;
        height: 100px;
        box-sizing: border-box;
        padding: 12px 24px;
        align-items: center;
      }

      [name='nav-bar']::slotted(*) {
        display: flex;
        justify-content: space-between;
        background-color: var(--md-sys-color-surface-container-high);
        color: var(--md-sys-color-on-surface-container-high);
        border-radius: var(--md-sys-shape-corner-large);
      }

      custom-icon-button {
        opacity: 0;
        pointer-events: none;
        position: absolute;
      }

      @media (max-width: 959px) {
        custom-icon-button {
          position: initial;
          opacity: 1;
          pointer-events: auto;
        }
        [name='nav-bar']::slotted(*) {
          opacity: 0;
          position: absolute;
          pointer-events: none;
        }
      }
    `
  ]

  render() {
    return html`
      <custom-icon-button
        icon="menu"
        @click=${() => document.dispatchEvent(new CustomEvent('drawer-open', { detail: true }))}></custom-icon-button>
      <slot></slot>
      <flex-it></flex-it>
      <slot name="nav-bar"></slot>
    `
  }
}
