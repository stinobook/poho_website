import { LiteElement, customElement, html, property } from '@vandeurenglenn/lite'
import { StyleList, css } from '@vandeurenglenn/lite/element'
import '@vandeurenglenn/lite-elements/icon.js'
import '@vandeurenglenn/lite-elements/button.js'
import '@vandeurenglenn/lite-elements/dialog.js'

@customElement('info-element')
export class InfoElement extends LiteElement {
  @property()
  accessor headline

  @property()
  accessor icon

  @property()
  accessor subline

  @property()
  accessor content

  static styles?: StyleList = [
    css`
      :host {
        border-radius: var(--md-sys-shape-corner-medium);
        background: var(--md-sys-color-surface-variant);
        color: var(--md-sys-color-on-surface-variant);
        display: flex;
        width: 100%;
        justify-content: center;
      }
      .card {
        border-radius: var(--md-sys-shape-corner-medium);
        background: var(--md-sys-color-surface-variant);
        color: var(--md-sys-color-on-surface-variant);
        width: 100%;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        padding: 12px;
      }
      .headline {
        display: flex;
        flex-direction: row;
        align-items:flex-start;
        width: 100%;
        gap: 12px;
      }
      .card:hover {
        background: var(--md-sys-color-outline-variant);
      }
      .icon {
        height: 32px;
        width: 32px;
      }
      h1 {
        line-height: 1;
        margin: 0;
        font-size: 1.3rem;
      }
      h2 {
        font-size: 1rem;
        font-weight: 300;
        margin-top: 5px;
      }
      p {
        position: relative;
        margin-bottom: 12px;
      }
      custom-dialog dialog {
        overflow: visible;
        max-width: 80%;
        max-height: 80%;
      }
    `
  ]

  connectedCallback() {
    this.shadowRoot.addEventListener('click', this.#clickHandler)
  }
  disconnectedCallback() {
    this.shadowRoot.removeEventListener('click', this.#clickHandler)
  }


  #clickHandler = event => {
    const dialog = this.shadowRoot.querySelector('custom-dialog');
    console.log(dialog.open)
    dialog.hasAttribute('open') ? dialog.open = false : dialog.open = !dialog.open
  }

  _renderHeadline() {
    if (!this.headline) return ''
    return html`${this.headline}`
  }

  _renderIcon() {
    if (!this.icon) return ''
    return html`<custom-icon class="icon" icon=${this.icon}></custom-icon>`
  }

  _renderSubline() {
    if (!this.subline) return ''
    return html`<h2>${this.subline}</h2>`
  }

  _renderContent() {
    if (!this.content) return ''
    return html`<p>${this.content}</p>`
  }

  render() {
    return html`
    <div class="card">
      <div class="headline">
        <h1>${this._renderHeadline()}</h1>
        ${this._renderIcon()}
      </div>
      ${this._renderSubline()}
    </div>
    <custom-dialog class="dialog">
      <span slot="title">${this._renderHeadline()}</span>
      ${this._renderContent()}
    </custom-dialog>
    `
  }
}