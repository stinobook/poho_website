import { html, css, LiteElement, query } from '@vandeurenglenn/lite'
import { customElement } from 'lit/decorators.js'
import '@vandeurenglenn/flex-elements/container.js'
import '@vandeurenglenn/lite-elements/button.js'
import '../components/post.js'

@customElement('preparation-view')
export class PreparationView extends LiteElement {
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
      image="./img/belangrijk.png"
      headline="Voorlichting"
      subline="Wat je moet weten VOORDAT je voor het eerst het terrein betreedt."
      content="Beloning: Zoals de naam van onze hondenschool (POsitieve HOndenopleiding) doet vermoeden werken we hier zoveel mogelijk door middel van positieve bekrachtiging/beloning. 
                Concreet betekent dit dat je je hond een positieve beloning gaat geven iedere keer hij gedrag vertoont waarvan jij vindt dat het wenselijk is.
                Een positieve beloning kan van alles zijn. Het is belangrijk dat je thuis op onderzoek gaat naar wat jouw hond echt fantastisch vindt."
      ></post-element>
      <post-element
      headline="Voeding als beloning"
      image="./img/snack.png"
      .content=${html`
                De meeste honden zijn dol op voeding en zeer vaak is voeding dan ook de ideale beloning voor bij het trainen. 
                Er is echter een groot verschil in wat jij goede voeding vindt en wat je hond goede voeding vindt.
                Honden houden van iets dat sterk geurt. Denk aan salami, zwanworstjes, hesp, spek, rodiworst…"
                <br><strong>Vlees is over het algemeen een goede beloning en is ook te verkrijgen aan de toog.</strong><br>
                Nog belangrijk om te weten is dat je je hond best niet voedt vlak voor je komt trainen. 
                Bij pupjes en grote honden verdeel je de dagelijks aanbevolen hoeveelheid over minimum twee maaltijden. 
                Geef dan bijvoorbeeld ’s morgens nog eten, maar wacht met de volgende maaltijd tot na de les. 
                Heb je een hond die aanleg heeft om snel in gewicht bij te komen, dan kan je de hoeveelheid snoepjes die je tijdens 
                de les gebruikt hebt, aftrekken van zijn avondmaal.
                `}
      ></post-element>
      <post-element
      headline="Speeltje als beloning"
      .content=${html`Het kan best zijn dat jouw hond niet erg geïnteresseerd is in voedsel. Misschien heeft jouw hond meer zin in een spelletje! 
                Het spel kan dan eventueel ook gebruikt worden als beloning in de plaats van voeding. De instructeur in kwestie zal dit wel snel 
                in de gaten hebben en samen met jou naar een gepaste beloning zoeken. Er zijn zelfs honden die als beloning even mogen snuffelen omdat ze 
                dit nu eenmaal liever doen dan een snoepje aannemen of spelen. Ook hier zal de instructeur je met raad en daad bijstaan. <br>
                Maar iedereen die komt trainen heeft sowieso een gepast speeltje nodig. Want ook op een goede manier spelen wordt aangeleerd.
                `}
      ></post-element>
      <post-element
      headline="Wat is een goed speeltje?"
      subline="Er is helaas niet zo iets als “het ideale speeltje”"
      .content=${html`Hier geldt hetzelfde als bij voeding: je zal op zoek moeten gaan naar wat jouw hond geweldig vindt.
                Presenteer hem enkele dingen. Je zal vlug merken waar hij dol op is.        
                Soms is een hond niet erg geïnteresseerd in een kant en klaar speeltje van in de winkel. 
                Misschien heeft hij een voorkeur voor een bepaalde plastic fles? 
                Of een platgebeten voetbal? Houd dit speeltje dan thuis aan de kant en gebruik het <strong>enkel op de hondenschool</strong>.
                Het helpt om je hond niet vrij met dit speeltje te laten spelen. Als je het enkel gebruikt op de hondenschool blijft het 
                steeds ‘nieuw’ voor je hond én hij zal het associëren met JOU!        
                <strong>Samen spelen is namelijk fijner dan alleen en het komt de connectie tussen hond en geleider absoluut ten goede.</strong>
                Handig is steeds dat er een <strong>handvat</strong> aan het speeltje is voorzien. Zodat zowel jij als de hond het speeltje tegelijkertijd kunnen vasthouden. 
                Een heel gamma aan speeltjes vind je in de winkel van de club.        
                Is jouw hond dol op een speeltje zonder handvat of touw? Haal even de handige Harry in jezelf naar boven en bevestig er zelf een touw aan.
                `}
      ></post-element>
      <post-element
      headline="Aandachtspunten speeltje"
      subline="Voor op de hondenschool"
      .content=${html`
                  Zorg er steeds voor dat je een speeltje bij hebt waar je hond in geïnteresseerd is:
                  <ul>
                  <li>Liefst iets met een handvat of touw aan.</li>
                  <li>Gebruik het enkel op de hondenschool.</li>
                  <li>Wissel eventueel geregeld eens af.</li>
                  <li>Laat je hond er niet alleen mee spelen (niet alleen thuis, maar ook niet alleen op het terrein van de hondenschool: hier spelen we SAMEN).</li>
                  </ul>
                  <p>Check zeker ook: </p>
      <custom-button type="filled" label="Spelen en spelletjes" @click=${() => location.hash = '!/games'}>
      <span slot="icon"><custom-icon icon="check"></custom-icon></span>
      </custom-button>
                `}
      ></post-element>
    </flex-container>
    `
  }
}
