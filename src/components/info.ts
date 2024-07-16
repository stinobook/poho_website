import { LiteElement, customElement, html, property } from '@vandeurenglenn/lite'
import { StyleList, css } from '@vandeurenglenn/lite/element'
import '@vandeurenglenn/lite-elements/icon.js'

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
        max-width: 250px;
        justify-content: center;
        flex: 1 1 100%;
      }
      .card:hover {
        background: var(--md-sys-color-outline-variant);
        border-radius: var(--md-sys-shape-corner-medium);
      }
      .modal {
        background: var(--md-sys-color-primary-container);
        height: 3px;
        overflow: hidden;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        transition: width 0.5s ease 0.5s, height 0.5s ease;
        width: 0;
      }
      label {
        cursor: pointer;
        display: flex;
        flex-flow: row wrap;
        align-items:flex-start;
        width: 100%;
        gap: 12px;
        padding: 12px;
      }
      input {
        cursor: pointer;
        height: 0;
        opacity: 0;
        width: 0;
        border: 0;
        margin: 0;
        z-index: -1;
        position: absolute;
      }
      input:focus {
        outline: none;
      }
      .content {
        overflow: auto;
        height: calc(100% - 24px);
        padding: 12px;
      }
      .title {
        padding-top: 12px;
        display: inline-block;
        padding-bottom: 20px;
        width: 100%;
      }
      .closebutton {
        width: 32px;
        height: 32px;
        position: absolute;
        right: 0;
        top: 0;
        z-index: 100;
      }
      custom-icon {
        --custom-icon-size: 32px;
      }
      input:checked ~ .modal {
        height: 100%;
        width: 100%;
        transition: width 0.5s ease, height 0.5s ease 0.5s;
      }
      input:checked ~ .modal .content {
        color: var(--md-sys-color-on-primary-container);
        transition: color 0.5s ease 0.5s;
      }
      .icon {
        height: 32px;
        width: 32px;
      }
      h1 {
        display: flex;
        margin: 0;
        font-size: 1.3rem;
        flex: 1;
      }
      h2 {
        font-size: 1rem;
        font-weight: 300;
        margin-top: 5px;
        flex: 0 0 100%;
      }
      p {
        position: relative;
        margin-bottom: 12px;
        display: inline-block;
      }
    `
  ]

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
    return html`${this.content}`
  }

  render() {
    return html`
    ${!this.content ? '' : html`<input type='checkbox' id='modalbutton'/>`}
      <label class="label" for='modalbutton'>
        <h1>${this._renderHeadline()}<flex-it></flex-it>
        ${this._renderIcon()}</h1>
        ${this._renderSubline()}
      </label>
    ${!this.content ? '' : html`
      <div class="modal">
        <div class="content">
          <span class="title"><h1>${this._renderHeadline()}</h1><label for="modalbutton" class="closebutton"><custom-icon icon="close"></custom-icon></label></span>
          ${this._renderContent()}
        </div>
      </div>
    `}
    `
  }
}