import { LiteElement, html, css, customElement, property } from '@vandeurenglenn/lite'
import './custom-hover-menu-item.js'
import Router from './routing.js'

@customElement('custom-hover-menu')
export class CustomHoverMenu extends LiteElement {
  @property({ attribute: true })
  accessor name: string

  static styles = [
    css`
      :host {
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        position: relative;
        justify-content: flex-start;
        align-items: flex-end;
      }

      .sub-menu-container {
        padding-top: 12px;
        opacity: 0;
        pointer-events: none;
        z-index: 1000;
        position: absolute;
        top: 54px;
      }

      .sub-menu {
        background-color: var(--md-sys-color-surface-container-highest);
        color: var(--md-sys-color-on-surface-variant-highest);
        border-radius: var(--md-sys-shape-corner-large);
      }

      [name='sub-menu']::slotted(*:hover) {
        background-color: #4e9aff;
        color: #00295f;
      }

      :host(:hover) .sub-menu-container {
        opacity: 1;
        pointer-events: auto;
      }

      :host(.custom-selected) custom-hover-menu-item {
        background-color: #9dc4f8;
        color: #00295f;
      }
    `
  ]

  render() {
    return html`
      <custom-hover-menu-item .name=${this.name}></custom-hover-menu-item>
      <div class="sub-menu-container">
        <div class="sub-menu">
          <slot name="sub-menu"></slot>
        </div>
      </div>
    `
  }
}
