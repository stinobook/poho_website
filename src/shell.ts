import { html, css, LiteElement, query, property } from '@vandeurenglenn/lite'
import { customElement } from 'lit/decorators.js'
import '@vandeurenglenn/lite-elements/theme.js'
import '@vandeurenglenn/lite-elements/selector.js'
import '@vandeurenglenn/lite-elements/pages.js'
import '@vandeurenglenn/lite-elements/menu.js'
import '@vandeurenglenn/lite-elements/list-item.js'
import '@vandeurenglenn/lite-elements/icon.js'
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
      :host {
        display: flex;
        flex-direction: row;
        box-sizing: border-box;
        background: var(--md-sys-color-background);
        color: var(--md-sys-color-on-background);
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
      #container {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100vh;
        flex-direction: column;
      }
      span {
        cursor: pointer;
        pointer-events:none;
      }
      li {
        list-style: none;
      }
      li .custom-selected {
        background: var(--md-sys-color-secondary-container);
        color: var(--md-sys-color-on-secondary-container);
      }
      .navbar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 20px;
        background-color: var(--md-sys-color-surface-variant);
        color: var(--md-sys-color-on-surface-variant);
        width:100%;
      }
      .logo {
        background: url('./assets/icons/icon-32x32.png') no-repeat;
        width: 32px;
        height: 32px;
      }
      .menu {
        display: flex;
        gap: 1em;
        font-size: 18px;
      }
      .menu li:hover {
        background-color: var(--md-sys-color-outline);
        border-radius: 5px;
        transition: 0.3s ease;
      }
      .menu li {
        padding: 5px 14px;
        display: inline;
      }
      .submenu {
        position: relative;
      }
      .dropdown {
        background-color: rgb(1, 139, 139);
        padding: 1em 0;
        position: absolute;
        display: none;
        border-radius: 8px;
        top: 35px;
      }
      .dropdown li + li {
        margin-top: 10px;
      }
      .dropdown li {
        padding: 0.5em 1em;
        width: 8em;
        text-align: center;
      }
      .dropdown li:hover {
        background-color: #4c9e9e;
      }
      .submenu:hover .dropdown {
        display: block;
      }
      input[type=checkbox] {
        display: none;
      } 
      .hamburger {
        display: none;
        font-size: 24px;
        user-select: none;
      }
      @media (max-width: 768px) {
        .menu {
           display:none;
           position: absolute;
           background-color:teal;
           right: 0;
           left: 0;
           text-align: center;
           padding: 16px 0;
         }
       
         .menu li:hover {
           display: inline-block;
           background-color:#4c9e9e;
           transition: 0.3s ease;
         }
       
         .menu li + li {
           margin-top: 12px;
         }
       
         input[type=checkbox]:checked ~ .menu {
           display: block;
         }
       
         .hamburger {
           display: block;
         }
       
         .dropdown {
           left: 50%;
           top: 30px;
           transform: translateX(35%);
         }
       
         .dropdown li:hover {
           background-color: #4c9e9e;
         }
       }
        
    `
  ]

  selectorSelected({ detail }: CustomEvent) {
    console.log(detail)
    location.hash = Router.bang(detail.getAttribute('route'))
  }

  @query('.menu')
  accessor selector: CustomSelector

  @query('custom-pages')
  accessor pages: CustomPages


  async select(selected) {
    this.selector.select(selected)
    this.pages.select(selected)
  }

  async connectedCallback() {
    this.router = new Router(this)
  }

  render() {
    return html`
      <style>
      :host {
        display: block;
        inset: 0;
        position: relative;
        height: 100%;
        width: 100%;
      }
        custom-pages {
          width: 100%;
          height: 100%;
          display: flex;
        }
      </style>
      <!-- just cleaner -->
      ${icons}
      <!-- see https://vandeurenglenn.github.io/custom-elements/ -->
      <custom-theme loadFont="false"></custom-theme>
      <div id="container">
        <nav class="navbar">
          <div class="logo" route="home"></div>
          <ul class="nav-links">
            <input type="checkbox" id="checkbox_toggle" />
            <label for="checkbox_toggle" class="hamburger">&#9776;</label>
            <div class="menu" attr-for-selected="route" @selected=${this.selectorSelected.bind(this)}>
              <li route="home"><span>Home</span></li>
              <li route="home1"><span>Organisatie</span></li>
              <li route="home" class="submenu"><span>Praktisch</span>
                <ul class="dropdown">
                  <li route="home"><span>Voorbereiding</span></li>
                  <li route="home"><span>Trainingsdagen</span></li>
                </ul>
              </li>
              <li route="home"><span>Missie & Visie</span></li>
              <li route="home" class="submenu"><span>Informatie</span>
                <ul class="dropdown">
                  <li route="home2"><span>Slipkettingen</span></li>
                  <li route="home"><span>Broodfok</span></li>
                  <li route="home"><span>Weetjes</span></li>
                  <li route="home"><span>[TEST]Sociaal gedrag</span></li>
                </ul>
              </li>
              <li route="home"><span>Thema-avonden</span></li>
              <li route="home"><span>Contact</span></li>
            </div>
          </ul>
        </nav>
        <custom-pages attr-for-selected="route">
          <loading-view route="loading"> </loading-view>
          <home-view route="home"> </home-view>
        </custom-pages>
      </div>
    `
  }
}
