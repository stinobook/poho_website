import { LiteElement, html, css } from '@vandeurenglenn/lite'
import { customElement, property } from '@vandeurenglenn/lite'
import Router from './routing.js'

@customElement('custom-hover-menu-item')
export class CustomHoverMenuItem extends LiteElement {
  @property({ attribute: true })
  accessor name: String

  _click(event) {
    const target = event.target
    const selected = target.getAttribute('route') ?? target.getAttribute('name')
    target.classList.add('custom-selected')
    location.hash = Router.bang(selected)
  }

  firstRender(): void {
    this.addEventListener('click', this._click)
  }

  static styles = [
    css`
      :host {
        display: flex;
        padding: 12px 24px;
        align-items: center;
        height: 56px;
        box-sizing: border-box;
        cursor: pointer;
        border-radius: var(--md-sys-shape-corner-large);
      }

      :host(:hover) {
        background-color: #4e9aff;
        color: #00295f;
      }

      :host(.custom-selected) {
        background-color: #9dc4f8;
        color: #00295f;
      }
    `
  ]

  render() {
    return html` ${this.name} `
  }
}
