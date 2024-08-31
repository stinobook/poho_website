import { html, css, LiteElement, query } from '@vandeurenglenn/lite'
import { customElement } from 'lit/decorators.js'
import '@vandeurenglenn/flex-elements/container.js'
import '@vandeurenglenn/lite-elements/button.js'
import '../components/post.js'

@customElement('rules-view')
export class RulesView extends LiteElement {
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
      headline="Huishoudelijk reglement"
      .content=${html`
                <ul>
                  <li>Lidgeld
                  <p>
                    130 € op jaarbasis<br>
                    2e lid 30€<br>
                    Hernieuwing 130€ + 2de lid : 30€
                  </p></li>
                  <li>Ieder lid is verantwoordelijk voor zijn eigen hond en elke training dient u uw   licentiekaart voor te leggen: Info verzekeringen: http://www.kkush.be/nl/licenties</li>
                  <li>
                    Wat brengt u mee tijdens de trainingen ?
                      <p>Hond aan vaste halsband met leiband, clicker, rodi worst in stukjes, poepzakjes en speeltje.</p>
                  </li>
                  <li>
                    De hondenschool is gesloten indien zeer slecht weer voorspeld wordt.
                        <p>
                          Hevige rukwinden, hevig onweer, hagel en zware sneeuwval.<br >
                          Dit wordt vooraf op de POHO facebookpagina gecommuniceerd.
                        </p>
                  </li>
                  <li>Wanneer de hond een grote behoefte doet op het terrein moet men dit zelf opnemen door middel van een poepzakje en alles deponeren in de voorziene afvalbak. Zowel bij een grote als bij een kleine behoefte op het terrein dient men € 0,50 boete te betalen (zie spaarpot op de toog). Alle honden dienen hun behoefte te doen op de aanwezige plaspleinen.</li>
                  <li>Het is verboden geweld te gebruiken tegenover de hond.</li>
                  <li>De slipketting is verboden in alle klassen.</li>
                  <li>De toegangspoort van het terrein moet steeds gesloten worden, zowel bij het betreden als bij het verlaten van het terrein.</li>
                  <li>Het is verboden de trainingsvelden met uw hond te betreden zonder instructeur.</li>
                  <li>Indien de training reeds aan de gang is, moet men steeds toestemming vragen aan de instructeurs om het veld te mogen betreden.</li>
                  <li>Het is verboden te roken en alcoholische dranken te nuttigen op de trainingsvelden.</li>
                  <li>Het gezondheidsboekje van de hond moet steeds in orde zijn en op vraag van het bestuur ter controle worden voorgelegd.</li>
                  <li>Agressieve honden of honden met gedragsproblemen kunnen weggestuurd worden.</li>
                  <li>De minimum leeftijd van een geleider wordt bepaald afhankelijk van de grootte van de hond, rijpheid van de geleider en het akkoord van de ouders.</li>
                  <li>Wie wedstrijden wil spelen onder de naam van de school, kan dit enkel mits de goedkeuring van het bestuur.</li>
                  <li>De hond dient aan de leiband te worden gehouden op het volledige domein van de hondenschool.</li>
                  <li>Honden mogen na de training niet achtergelaten worden in de auto of hondenremork.</li>
                  <li>Bij niet-naleving van het huishoudelijk reglement kan het lid uitgesloten of beboet worden.</li>
                  <li>Bij inschrijving in de hondenschool verklaart het lid zich akkoord met het huishoudelijk reglement.</li>
                </ul>
                `}
      ></post-element>
    </flex-container>
    `
  }
}
