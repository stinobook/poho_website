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
        width:100%;
      }

      .sub-menu-container {
        overflow: hidden;
        pointer-events: none;
        z-index: 1000;
        position: absolute;
        top: 45px;
        max-height: 0;
        transition: max-height 0.3s cubic-bezier(0, 1, 0, 1);
        left: 50%;
        transform: translatex(-50%);
        white-space: nowrap;
      }

      .sub-menu {
        background-color: var(--md-sys-color-surface-container-highest);
        color: var(--md-sys-color-on-surface-variant-highest);
        border-radius: var(--md-sys-shape-corner-medium);
        padding: 8px;
      }

      [name='sub-menu']::slotted(*:hover) {
        background-color: #4e9aff;
        color: #00295f;
      }

      :host(:hover) .sub-menu-container {
        pointer-events: auto;
        max-height: 1000px;
        transition: max-height 0.3s ease-in-out;
      }

      :host(.custom-selected) custom-hover-menu-item {
        background-color: #9dc4f8;
        color: #00295f;
      }

      :host([type='drawer']:hover) .sub-menu-container {
        position: relative;
        top: 0;
        opacity: 1;
        pointer-events: auto;
        left: 0%;
        transform: translatex(0%);
        width:100%;
      }
      :host([type='drawer']) .sub-menu-container {
        left: 0%;
        transform: translatex(0%);
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
