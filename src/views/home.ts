import { html, css, LiteElement, query } from '@vandeurenglenn/lite'
import { customElement } from 'lit/decorators.js'
import '@vandeurenglenn/flex-elements/container.js'
import '@vandeurenglenn/lite-elements/button.js'

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
      img{
        max-width:100%;
        padding: 25px 0;
        object-fit:contain;
      }
      flex-container {
        flex-direction: column;
        margin: 0 auto;
      }
      custom-icon {
        --custom-icon-color: var(--md-sys-color-on-primary);
      }
    `
  ]

  render() {
    return html`
    <flex-container>
      <h2>Welkom!</h2>
      <p>
      Onze hondenschool bestaat meer dan 25 jaar en elke woensdag- en vrijdagavond geven wij gehoorzaamheidstrainingen.
      Doch merken wij dat er daarnaast nog enorm veel vragen zijn en dit is de reden waarom wij onderstaande thema avonden organiseren.
      Toekomstige hondeneigenaars of mensen die reeds een hond hebben dienen nog beter geïnformeerd te worden.
      </p>
      <h3>6 thema-avonden</h3>
      <ol>
        <li>Aanschaf van een hond – rassen – fokker : maandag 1 juli 2024 19u30</li>
        <li>Speeltjes maken voor honden: donderdag 22 augustus 2024 19u30</li>
        <li>Voedingsleer : maandag 9 september19u30</li>
        <li>Opvoedingstips : maandag 7 oktober 2024 19u30</li>
        <li>EHBO bij honden : 4 november 2024 :   19.30u</li>
        <li>Lichaamstaal van de hond: maandag 2 december19u30</li>
      </ol>
      <p>
      Max. 30 personen per thema avond en minstens 10 dagen vooraf in te schrijven.
      3 euro inschrijvingsgeld te storten op bankrekeningnr. BE88 7370 1345 3741
      met vermelding “inschrijving thema-avond + naam en datum”.
      </p>
      <custom-button type="filled" label="Inschrijven">
      <span slot="icon"><custom-icon icon="pen"></custom-icon></span>
      </custom-button>

      <h3>Trooper</h3>
      <p>Wens je onze hondenschool een duwtje in de rug geven? Shop dan online via Trooper en steun gratis onze hondenschool!
      Dankzij Trooper komt de commissie die anders naar advertentiebureau's gaan naar onze VZW, en jij betaalt er niets extra voor!
      </p>
      <custom-button type="filled" label="Ik troop mee!" @click=${() => window.open('https://www.trooper.be/nl/trooperverenigingen/hondenschoolpoho', '_blank')}>
      <span slot="icon"><custom-icon icon="check"></custom-icon></span>
      </custom-button>

      <h3>Instructeur worden</h3>
      <p>Hondenschool PoHo zijn deuren staan altijd open voor kandidaat-instructeurs (m/v/x)
      die zeer goed kunnen omgaan met zowel mens als dier en die als hun hobby hondeneigenaars
      willen wegwijs maken in de opvoeding en het positief trainen van de hond(en).
      Begeleiding, opvolging en bijscholingen op regelmatige basis zijn verzekerd.</p>
      <p>Indien interesse neem dan contact op met de leden van het bestuur.</p>
      <p>Bel 0477/523983 (Joke De Swaef)</p>


    <img src="/img/logo.png" />
    </flex-container>
    `
  }
}
