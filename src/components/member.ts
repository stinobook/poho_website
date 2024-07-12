import { LiteElement, customElement, html, property } from '@vandeurenglenn/lite'
import { StyleList, css } from '@vandeurenglenn/lite/element'

@customElement('member-element')
export class MemberElement extends LiteElement {
  @property()
  accessor image

  @property()
  accessor name

  @property()
  accessor title

  @property()
  accessor content

  onChange(propertyKey: string, value: any): void {
    if (propertyKey === 'image') {
      if (value) this.setAttribute('has-image', '')
      else this.removeAttribute('has-image')
    }
  }

  static styles?: StyleList = [
    css`
      :host {
        border-radius: var(--md-sys-shape-corner-extra-large);
        background: var(--md-sys-color-surface-variant);
        color: var(--md-sys-color-on-surface-variant);
      }
      :host * {
        box-sizing: border-box;
      }
      .card {
        box-shadow: 0 3px 7px -1px rgba(#000, .1);
        line-height: 1.4;
        padding: 30px 0 0;
        align-items: center;
        display: flex;
        flex-flow: column nowrap;
        position:relative;
        width: 240px;
      }
      .img {
        display: inline-block;
        height: 130px;
        width: 130px;
        margin-bottom: 50px;
        position: relative;
      }
      img {
        object-fit: cover;
        border-radius: 50%;
        height: 100%;
        width: 100%;
      }
      .content {
        display: block;
        padding:12px;
        width: 100%;
        overflow: hidden;
      }
      h1 {
        line-height: 1;
        margin: 0;
        font-size: 1.3rem;
        white-space: nowrap;
        max-width: 100%;
      }
      h2 {
        font-size: 1.1rem;
        font-weight: 300;
        margin-top: 5px;
      }
      p {
        position: relative;
        margin-bottom: 12px;
      }
      @media (max-width: 640px) {
      }
    `
  ]

  _renderImage() {
    if (!this.image) return ''
    return html` <img loading="lazy" src=${this.image} /> `
  }

  _renderName() {
    if (!this.name) return ''
    return html`<h1>${this.name}</h1>`
  }

  _renderTitle() {
    if (!this.title) return ''
    return html`<h2>${this.title}</h2>`
  }
  _renderContent() {
    if (!this.content) return ''
    return html`<p>${this.content}</p>`
  }


  render() {
    return html`
    <div class="card">
      <div class="img">
        ${this._renderImage()}
      </div>
      <div class="content">
        ${this._renderName()} 
        ${this._renderTitle()}
        ${this._renderContent()}
       <slot></slot>
      </div>
    </div>
    `
  }
}