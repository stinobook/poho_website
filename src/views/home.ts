import { html, css, LiteElement, query } from '@vandeurenglenn/lite'
import { customElement } from 'lit/decorators.js'
import '@vandeurenglenn/flex-elements/container.js'
import '@vandeurenglenn/lite-elements/button.js'
import '../components/post.js'

@customElement('home-view')
export class HomeView extends LiteElement {
  static styles = [
    css`
      :host {
        overflow-y: auto;
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
      flex-container {
        flex-direction: column;
        max-width: 1024px;
        gap:12px;
        height:fit-content;
        margin: 0 auto;
      }
      post-element:nth-of-type(even) {
        --flex-direction: row;
      }
      post-element:nth-of-type(odd) {
        --flex-direction: row-reverse;
      }
    `
  ]

  render() {
    return html`
    <flex-container>
      <post-element
      image="./img/luchtfoto.jpg"
      headline="Welkom!"
      .content=${html`
      <p>Onze hondenschool bestaat meer dan 25 jaar en elke woensdag- en vrijdagavond geven wij gehoorzaamheidstrainingen.
      Doch merken wij dat er daarnaast nog enorm veel vragen zijn en dit is de reden waarom wij onderstaande thema avonden organiseren.
      Toekomstige hondeneigenaars of mensen die reeds een hond hebben dienen nog beter geïnformeerd te worden.<br/> <br/>
      <strong class="larger">Onthaalmoment:</strong> Woensdag om 20.00 uur<br/>
    <strong class="larger">Instappen eerste les:</strong> Vrijdag om 20.00 uur, na inschrijving</p>
    `}
      ></post-element>
      <post-element
      image="./img/thema-avonden.webp"
      headline="5 Thema-avonden"
      subline="Informatieavond over diverse onderwerpen"
      .content=${html`
      <ol>
        <li>Workshop snuffelbal maken: donderdag 11 september 2025 19u30</li>
        <li>Aanschaf van een hond: maandag 13 oktober 2025 19u30</li>
        <li>EHBO bij honden: donderdag 13 november 2025 19u30</li>
        <li>Opvoedingstips: maandag 12 januari 2026 19u30</li>
        <li>Lichaamstaal van de hond: maandag 16 februari 2026 19u30</li>
      </ol>
      <p>
      Max. 30 personen per thema avond en minstens 10 dagen vooraf in te schrijven.
      5 euro inschrijvingsgeld <strong>(met uitzondering van Thema 1 hier is een extra kost van 12€ voor het materiaal (17€))</strong> te storten op bankrekeningnr. BE88 7370 1345 3741
      met vermelding “inschrijving thema-avond + naam en datum”.
      </p>
      <custom-button type="filled" label="Inschrijven">
      <span slot="icon"><custom-icon icon="pen"></custom-icon></span>
      </custom-button>
      `}
      ></post-element>
      <post-element
      image="./img/QRtrooper.webp"
      headline="Trooper"
      subline="Gratis steun voor onze hondenschool dankzij online-shopping"
      .content=${html`
      <p>Wens je onze hondenschool een duwtje in de rug geven? Shop dan online via Trooper en steun gratis onze hondenschool!
      Dankzij Trooper komt de commissie die anders naar advertentiebureau's gaan naar onze VZW, en jij betaalt er niets extra voor!
      </p>
      <custom-button type="filled" label="Ik troop mee!" @click=${() => window.open('https://www.trooper.be/nl/trooperverenigingen/hondenschoolpoho', '_blank')}>
      <span slot="icon"><custom-icon icon="check"></custom-icon></span>
      </custom-button>
      `}
      ></post-element>
      <post-element
      image="./img/logo.png"
      headline="Instructeur worden?"
      subline="Bel 0477/523983 (Joke De Swaef)"
      .content=${html`
      <p>Hondenschool PoHo zijn deuren staan altijd open voor kandidaat-instructeurs (m/v/x)
      die zeer goed kunnen omgaan met zowel mens als dier en die als hun hobby hondeneigenaars
      willen wegwijs maken in de opvoeding en het positief trainen van de hond(en).
      Begeleiding, opvolging en bijscholingen op regelmatige basis zijn verzekerd.</p>
      <p>Indien interesse neem dan contact op met de leden van het bestuur.</p>
      `}
      ></post-element>
    </flex-container>
    `
  }
}
