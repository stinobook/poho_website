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
        image="./img/eetfestijn.png"
        headline="Eetfestijn 2025"
        .content=${html`
            <p>
            Op <strong>zondag 16 november 2025</strong> organiseert Hondenschool POHO haar jaarlijks eetfestijn.<br/><br/>
            Kom genieten van een heerlijke maaltijd en steun tegelijk onze hondenschool!
            </p>

            <p>
            <strong>Locatie:</strong> St. Pauluszaal – Botermelkstraat 63B, 9300 Aalst<br/>
            <strong>Tijd:</strong> 11u30 tot 15u
            </p>

            <p>
            <strong>Menu:</strong><br/>
            Zalmfilet – met saus naar keuze, slaatje en kroketjes (€23)<br/>
            Varkenshaasje – met saus naar keuze, slaatje en kroketjes (€21)<br/>
            Hertenragout – met slaatje van rauwe witloof en kroketjes (€23)<br/>
            Voor de allerkleinsten: Balletjes in tomatensaus (€12)
            </p>

            <p>
            Steunkaarten zijn verkrijgbaar aan €5 – elke bijdrage helpt ons enorm.<br/><br/>
            <strong>Info en inschrijving </strong>via <a href="#!/contact" @click=${() => location.hash = '!/contact'}>contactformulier.</a> of bij onze leden.<br/>
            </p>

            <p>
            Samen maken we er een gezellige en smakelijke dag van.
            </p>
        `}
        ></post-element>
      <post-element
      image="./img/luchtfoto.jpg"
      headline="Welkom!"
      .content=${html`
      <p>Onze hondenschool bestaat meer dan 25 jaar en elke woensdag- en vrijdagavond geven wij gehoorzaamheidstrainingen.
      Doch merken wij dat er daarnaast nog enorm veel vragen zijn en dit is de reden waarom wij onderstaande thema avonden organiseren.
      Toekomstige hondeneigenaars of mensen die reeds een hond hebben dienen nog beter geïnformeerd te worden.<br/> <br/>
      <strong class="larger">Onthaalmoment:</strong> Woensdag om 20u15.<br/>
    <strong class="larger">Instappen eerste les:</strong> Na afspraak op onthaalmoment.</p>
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
      <custom-button type="filled" @click=${() => location.hash = '!/presentations'} label="Thema-avonden">
      <span slot="icon"><custom-icon icon="check"></custom-icon></span>
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
      headline="Vacature: Vrijwillige Hondeninstructeur Gehoorzaamheid"
      subline="Locatie: Hofstade bij Aalst"
      .content=${html`
        <strong>Uren:</strong> 3 uur per week, op woensdag- en vrijdagavond van 19.30u tot 21u<br/>
        <strong>Type functie:</strong> Vrijwillig met vrijwilligersvergoeding</p>

        <p>Ben jij een enthousiaste hondenliefhebber? Heb je plezier in het werken met mensen en hun viervoeters? Dan zijn wij op zoek naar jou!</p>

        <p><strong>Wat ga je doen?</strong><br/>
        Als vrijwillige instructeur geef je gehoorzaamheidstrainingen aan baasjes en hun honden, van beginners tot recreatief niveau.
        Je begeleidt hen op een positieve, gestructureerde manier en zorgt ervoor dat elke les leerzaam en leuk is.</p>

        <p><strong>Jouw taken:</strong><br/>
        - Geven van wekelijkse gehoorzaamheidslessen op de pleinen van onze hondenschool<br/>
        - Begeleiding van baas en hond<br/>
        - Observeren van hondengedrag en bijsturen indien nodig<br/>
        - Samenwerken met collega-instructeurs en bestuur</p>

        <p><strong>Wie ben jij?</strong><br/>
        - Je hebt ervaring met hondentraining (opleiding of praktijk)<br/>
        - Je staat stevig in je schoenen en communiceert duidelijk<br/>
        - Je werkt graag met mensen én honden<br/>
        - Je bent betrouwbaar, geduldig en positief ingesteld<br/>
        - Een diploma of certificaat in kynologie is een pre, maar geen vereiste</p>

        <p><strong>Wat bieden wij?</strong><br/>
        - Een gezellige, informele sfeer binnen een enthousiast team<br/>
        - Mogelijkheid tot (bij)scholing of cursussen<br/>
        - Veel voldoening uit het begeleiden van honden en hun baasjes<br/>
        - Waardering, erkenning en een hoop hondenknuffels!<br/>
        - Bij de opstart individuele begeleiding door onze ervaringsdeskundigen</p>

        <p><strong>Interesse?</strong><br/>
        Stuur een korte motivatie en eventueel je ervaring naar <a href="mailto:joke.deswaef@telenet.be">joke.deswaef@telenet.be</a></p>
      `}
      ></post-element>
    </flex-container>
    `
  }
}
