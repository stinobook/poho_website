import { LiteElement, html, css, customElement, property } from '@vandeurenglenn/lite'

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
    `
  ]

  render() {
    return html`
      <slot></slot>
      <flex-it></flex-it>
      <slot name="nav-bar"></slot>
    `
  }
}
