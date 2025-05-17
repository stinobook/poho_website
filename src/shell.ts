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
import './ui/drawer.js'
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
        height: 100dvh;
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
        background: url('./assets/icons/icon-32x32.png') no-repeat;
        cursor: pointer;

      }
      .logo h1 {
        font-size: 20px;
        white-space: nowrap;
        min-width: fit-content;
        margin: 0 0 0 44px;
        height: 32px;
        cursor: pointer;
      }

      header-element {
        background-color: var(--md-sys-color-surface-container-high);
        color: var(--md-sys-color-on-surface-container-high);
      }

      drawer-element custom-hover-menu {
        align-items: flex-start;
      }
      @media (min-width: 1280px) {
        drawer-element {
          opacity: 0;
          pointer-events: none;
        }
      }
      .footer {
        z-index: 99;
        background-color: var(--md-sys-color-background);
      }
      .footer small {
        padding: 8px 12px;
        display: flex;
        justify-content: space-between;
      }
      .footer small img {
        width: 24px;
        height: 24px;
        padding: 0 8px;        
      }
      .sides {
        flex-grow: 1;
        flex-basis: 0;
        min-width: max-content;
      }
      .right {
        text-align: right;
      }
      .signup {
        background-color: var(--md-sys-color-primary);
        color: var(--md-sys-color-on-primary);
      }
      flex-row {
        gap: 6px;
      }
         @media (max-width: 1280px) {
        header-element {
          min-width: 100%;
          max-height: 60px;
        }
      }
    `
  ]

  selectorSelected({ detail }: CustomEvent) {
    location.hash = Router.bang(detail)
  }

  @query('drawer-element')
  accessor drawer

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
          item && this.drawer.open === true ? this.drawer.open = false : '' 
        } else {
          this.drawer.open === true ? this.drawer.open = false : '' 
        }
      }
    }
  }

  _drawerOpen = ({ detail }) => {
    console.log(detail)

    if (detail) this.drawer.open = true
    else this.drawer.open = false
  }

  connectedCallback() {
    this.router = new Router(this)
    document.addEventListener('drawer-open', this._drawerOpen)
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
          @click=${() => location.hash = '!/home'} ><h1>Hondenschool PoHo</h1></div>

        <flex-it></flex-it>

        <flex-row slot="nav-bar">
          <custom-hover-menu-item name="Home" route="home"></custom-hover-menu-item>

          <custom-hover-menu-item name="Organisatie" route="organisation"></custom-hover-menu-item>

          <custom-hover-menu name="Praktisch">
            <custom-hover-menu-item
              slot="sub-menu"
              name="Voorlichting" route="preparation"></custom-hover-menu-item>
            <custom-hover-menu-item
              slot="sub-menu"
              name="Trainingsdagen" route="hours"></custom-hover-menu-item>
          </custom-hover-menu>

          <custom-hover-menu-item name="Missie & Visie" route="mission"></custom-hover-menu-item>

          <custom-hover-menu name="Informatie">
            <custom-hover-menu-item
              slot="sub-menu"
              name="Slipkettingen" route="slipchains"></custom-hover-menu-item>
            <custom-hover-menu-item
              slot="sub-menu"
              name="Broodfok" route="puppymills"></custom-hover-menu-item>
            <custom-hover-menu-item
              slot="sub-menu"
              name="Weetjes" route="info"></custom-hover-menu-item>
            <custom-hover-menu-item
              slot="sub-menu"
              name="Spelen en spelletjes" route="games"></custom-hover-menu-item>
            <custom-hover-menu-item
              slot="sub-menu"
              name="Test Sociaal gedrag" @click=${() => window.open('./img/test_sociaal_gedrag.pdf', '_blank')}></custom-hover-menu-item>
            <custom-hover-menu-item
              slot="sub-menu"
              name="Dagboek Iron" route="iron"></custom-hover-menu-item>
          </custom-hover-menu>

          <custom-hover-menu name="Multimedia">
            <custom-hover-menu-item
              slot="sub-menu"
              name="Varia" route="varia"></custom-hover-menu-item>
          </custom-hover-menu>

          <custom-hover-menu-item name="Thema-avonden" route="presentations"></custom-hover-menu-item>
          <custom-hover-menu-item name="Contact" route="contact"></custom-hover-menu-item>
          <custom-hover-menu-item class="signup" name="Inschrijven" route="signup"></custom-hover-menu-item>
        </flex-row>
      </header-element>

      <drawer-element>
      <div slot="logoname"
        class="logo"
        @click=${() => location.hash = '!/home'}><h1>Hodenschool PoHo</h1></div>

        <custom-hover-menu-item
          type="drawer"
          name="Home" route="home"></custom-hover-menu-item>

        <custom-hover-menu-item
          type="drawer"
          name="Organisatie" route="organisation"></custom-hover-menu-item>

        <custom-hover-menu
          type="drawer"
          name="Praktisch">
          <custom-hover-menu-item
            slot="sub-menu"
            type="drawer"
            name="Voorlichting" route="preparation"></custom-hover-menu-item>
          <custom-hover-menu-item
            slot="sub-menu"
            type="drawer"
            name="Trainingsdagen" route="hours"></custom-hover-menu-item>
        </custom-hover-menu>

        <custom-hover-menu-item
          type="drawer"
          name="Missie & Visie" route="mission"></custom-hover-menu-item>

        <custom-hover-menu
          type="drawer"
          name="Informatie">
          <custom-hover-menu-item
            slot="sub-menu"
            type="drawer"
            name="Slipkettingen" route="slipchains"></custom-hover-menu-item>
          <custom-hover-menu-item
            slot="sub-menu"
            type="drawer"
            name="Broodfok" route="puppymills"></custom-hover-menu-item>
          <custom-hover-menu-item
            slot="sub-menu"
            type="drawer"
            name="Weetjes" route="info"></custom-hover-menu-item>
          <custom-hover-menu-item
            slot="sub-menu"
            type="drawer"
            name="Spelen en spelletjes" route="games"></custom-hover-menu-item>
          <custom-hover-menu-item
            slot="sub-menu"
            type="drawer"
            name="Test Sociaal gedrag" @click=${() => window.open('./img/test_sociaal_gedrag.pdf', '_blank')}></custom-hover-menu-item>
          <custom-hover-menu-item
            slot="sub-menu"
            type="drawer"
            name="Dagboek Iron" route="iron"></custom-hover-menu-item>
        </custom-hover-menu>


        <custom-hover-menu
        type="drawer" name="Multimedia">
        <custom-hover-menu-item
          slot="sub-menu"
          type="drawer"
          name="Varia" route="varia"></custom-hover-menu-item>
      </custom-hover-menu>

        <custom-hover-menu-item
          type="drawer"
          name="Thema-avonden" route="presentations"></custom-hover-menu-item>
        <custom-hover-menu-item
          type="drawer"
          name="Contact" route="contact"></custom-hover-menu-item>
        <custom-hover-menu-item
          class="signup"
          type="drawer"
          name="Inschrijven" route="signup"></custom-hover-menu-item>
      </drawer-element>

      <custom-pages attr-for-selected="route">
        <loading-view route="loading"> </loading-view>
        <home-view route="home"> </home-view>
        <organisation-view route="organisation"> </organisation-view>
        <preparation-view route="preparation"> </preparation-view>
        <hours-view route="hours"> </hours-view>
        <mission-view route="mission"> </mission-view>
        <slipchains-view route="slipchains"> </slipchains-view>
        <puppymills-view route="puppymills"> </puppymills-view>
        <info-view route="info"> </info-view>
        <games-view route="games"> </games-view>
        <iron-view route="iron"> </iron-view>
        <signup-view route="signup"> </signup-view>
        <rules-view route="rules"></rules-view>
        <presentations-view route="presentations"></presentations-view>
        <contact-view route="contact"></contact-view>
        <varia-view route="varia"></varia-view>
      </custom-pages>
      <div class="footer">
      <small><span class="sides">&copy; 2019-2025</span><img alt="PoHo" src="./assets/icons/icon-32x32.png"><strong style="padding: 0 4px;">Hondenschool PoHo VZW</strong><span class="sides right">BE 0869 886 793</span></small>
      </div>
    `
  }
}
