import { html, css, LiteElement, query, property, queryAll } from '@vandeurenglenn/lite'
import { customElement } from 'lit/decorators.js'
import '@vandeurenglenn/lite-elements/pages.js'
import '@vandeurenglenn/lite-elements/theme.js'
import '@vandeurenglenn/lite-elements/selector.js'
import '@vandeurenglenn/lite-elements/list-item.js'
import '@vandeurenglenn/lite-elements/icon.js'
import '@vandeurenglenn/lite-elements/icon-set.js'
import '@vandeurenglenn/flex-elements/it.js'
import '@vandeurenglenn/flex-elements/row.js'
import './ui/header.js'
import './custom-hover-menu.js'
import icons from './icons.js'
import Router from './routing.js'
import type { CustomPages, CustomSelector } from './component-types.js'
// import default page
import './views/loading.js'

@customElement('pohoweb-shell')
export class PoHoWebShell extends LiteElement {
  router: Router
  static styles = [
    css`
      custom-pages {
        width: 100%;
        height: 100%;
        display: flex;
      }
      :host {
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        background: var(--md-sys-color-background);
        color: var(--md-sys-color-on-background);
        height: 100%;
        width: 100%;
      }
      ::-webkit-scrollbar {
        width: 8px;
        border-radius: var(--md-sys-shape-corner-extra-large);
        background-color: var(--md-sys-color-surface-container-highest);
      }
      ::-webkit-scrollbar-thumb {
        background: var(--md-sys-color-on-surface-container-highest);
        border-radius: var(--md-sys-shape-corner-extra-large);
        box-shadow: 0px 0px 6px 2px rgba(0, 0, 0, 0.5) inset;
      }
      .logo {
        background: url('./assets/icons/icon-32x32.png');
        width: 32px;
        height: 32px;
      }
    `
  ]

  selectorSelected({ detail }: CustomEvent) {
    location.hash = Router.bang(detail)
  }

  @query('.menu')
  accessor selector: CustomSelector

  @query('custom-pages')
  accessor pages: CustomPages

  @queryAll('custom-hover-menu')
  accessor customHoverMenus

  @queryAll('custom-hover-menu-item')
  accessor customHoverMenuItems

  async select(selected) {
    await this.pages.rendered
    this.pages.select(selected)

    for (const item of this.customHoverMenus) {
      if (item.classList.contains('custom-selected')) item.classList.remove('custom-selected')
      const menuItem = item.shadowRoot.querySelector('custom-hover-menu-item')
      const _selected = item.getAttribute('route') ?? item.getAttribute('name')
      if (menuItem.classList.contains('custom-selected') && _selected !== selected)
        menuItem.classList.remove('custom-selected')
    }
    for (const item of this.customHoverMenuItems) {
      const _selected = item.getAttribute('route') ?? item.getAttribute('name')
      if (item.classList.contains('custom-selected') && _selected !== selected) item.classList.remove('custom-selected')

      if (_selected === selected) {
        item.classList.add('custom-selected')
        if (item.getAttribute('slot') === 'sub-menu') {
          item.parentElement.classList.add('custom-selected')
        }
      }
    }
  }

  firstRender() {
    this.router = new Router(this)
  }

  render() {
    return html`
      <!-- just cleaner -->
      ${icons}
      <!-- see https://vandeurenglenn.github.io/custom-elements/ -->
      <custom-theme .loadFont=${false}></custom-theme>
      <header-element>
        <div
          class="logo"
          route="home"></div>

        <flex-it></flex-it>

        <flex-row slot="nav-bar">
          <custom-hover-menu-item name="home"></custom-hover-menu-item>

          <custom-hover-menu-item name="Organisatie"></custom-hover-menu-item>

          <custom-hover-menu name="Praktisch">
            <custom-hover-menu-item
              slot="sub-menu"
              name="voorbereiding"></custom-hover-menu-item>
            <custom-hover-menu-item
              slot="sub-menu"
              name="trainingsdagen"></custom-hover-menu-item>
          </custom-hover-menu>

          <custom-hover-menu-item name="Missie & Visie"></custom-hover-menu-item>

          <custom-hover-menu name="informatie">
            <custom-hover-menu-item
              slot="sub-menu"
              name="Slipkettingen"></custom-hover-menu-item>
            <custom-hover-menu-item
              slot="sub-menu"
              name="Broodfok"></custom-hover-menu-item>
            <custom-hover-menu-item
              slot="sub-menu"
              name="Weetjes"></custom-hover-menu-item>
            <custom-hover-menu-item
              slot="sub-menu"
              name="[TEST]Sociaal gedrag"></custom-hover-menu-item>
          </custom-hover-menu>

          <custom-hover-menu-item name="Thema-avonden"></custom-hover-menu-item>
          <custom-hover-menu-item name="Contact"></custom-hover-menu-item>
        </flex-row>
      </header-element>

      <custom-pages attr-for-selected="route">
        <loading-view route="loading"> </loading-view>
        <home-view route="home"> </home-view>
      </custom-pages>
    `
  }
}
