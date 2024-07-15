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
        max-width: 200px;
        justify-content: center;
        flex: 1;
      }
      .card:hover {
        background: var(--md-sys-color-outline-variant);
        border-radius: var(--md-sys-shape-corner-medium);
      }
      .modal {
        background: var(--md-sys-color-primary-container);
        height: 1px;
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
        position:fixed;
      }
      input:focus {
        outline: none;
      } 
      input:checked {
        height: 30px;
        position: fixed;
        right: 20px;
        top: 20px;
        z-index: 1;
        -webkit-appearance: none;
        width: 30px;
        animation: showClose 1s forwards;
      }
      input:checked::after, input:checked:before {
        border-top: 1px solid var(--md-sys-color-on-primary-container);
        content: '';
        display: block;
        position: absolute;
        top: 50%;
        transform: rotate(45deg);
        width: 100%;
      }
        input:checked::after {
          transform: rotate(-45deg);
      }
      @keyframes showClose {
        99% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
      }
      .content {
        overflow: auto;
        height: 100%;
        padding: 12px;
      }
      .title {
        padding-top: 30px;
        display: block;
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
        line-height: 1;
        margin: 0;
        font-size: 1.3rem;
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
      <input type='checkbox' id='modalbutton'/>
      <label class="label" for='modalbutton'>
        <h1>${this._renderHeadline()}
        ${this._renderIcon()}</h1>
        ${this._renderSubline()}
      </label>
    <div class="modal">
      <div class="content">
        <span class="title"><h1>${this._renderHeadline()}</h1></span>
        ${this._renderContent()}
      </div>
    </div>
    `
  }
}