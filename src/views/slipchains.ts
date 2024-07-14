import { html, css, LiteElement, query } from '@vandeurenglenn/lite'
import { customElement } from 'lit/decorators.js'
import '@vandeurenglenn/flex-elements/container.js'
import '@vandeurenglenn/lite-elements/button.js'
import '../components/post.js'

@customElement('slipchains-view')
export class SlipchainsView extends LiteElement {
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
      headline="Slipkettingen en anti-prikbanden"
      subline="Marteltuigen voor uw hond!"
      .content=${html`
              <p>“Traditionele” trainers en hedendaagse hondenbezitters willen wij als hondenschool laten inzien 
                dat het gebruik van onder andere een slipketting meer slecht dan goed doet en niet meer van deze tijd is.</p>
              <p>De slipketting veroorzaakt steeds een stikeffect ! Door een ruk of door het op spanning zetten van de ketting wordt de luchttoevoer afgesneden.</p>
              <p>Hierdoor ontstaan er gezondheidsproblemen in de zin van kneuzingen en bloeduitstortingen, 
                beschadiging van de luchtpijp en slokdarm. Daarnaast krijgen veel honden in de nek kale plekken, haren worden afgebroken en er ontstaat huidirritatie.</p>
              <p>Sommige honden die een te hoge en te langdurige druk door de slipketting moeten verwerken krijgen zelfs last met eten en drinken of krijgen benauwdheidsaanvallen. 
                Zelfs een risico op blindheid en strottenhoofdverbrijzeling komen voor indien de slipketting hoog in de nek wordt gedragen. Een plotselinge ruk kan problemen aan de wervels (zoals een whiplash bij ons) veroorzaken!</p>
              <p>Een slipketting wordt vaak toegepast uit onwetendheid of vanuit onmacht. Er wordt echter een relatie gecreëerd gebaseerd op het geven van boodschappen 
                middels pijn (iedere ruk = afknelling van de luchtweg en slokdarm = pijn). Een slipketting veroorzaakt ook geconditioneerde angst, welke nadien een gewoonte wordt. 
                Veel honden reageren hun frustratie af op andere honden, voorbijgangers, … Als de hond aan de lijn trekt en een ruk in de nek krijgt, 
                legt de hond niet altijd automatisch de associatie “trekken aan de lijn is pijn”. De hond kan evengoed de associatie ook leggen met andere honden, het verkeer, …</p>
              <p>De slipketting kan dus de vertrouwensband tussen hond en baas schaden!</p>
              <p>Nog steeds zeggen veel mensen dat een ruk in de nek met een slipketting dezelfde straf is als de straf die wolven aan elkaar geven in een roedel. 
                Echter, de nekbeet die de Alpha wolf geeft is bedoeld om te doden (wegens te dominant gedrag) en niet om te corrigeren. Men geeft dus eigenlijk de boodschap 
                “ik maak je dood” als je met een slipketting tracht de nekbeet na te bootsen.</p>
              <p>De slipketting wordt nog steeds veel gebruikt omdat de hond trekt aan de leiband. Het geven van een ruk aan de lijn met een slipketting werkt vaak maar voor even of heeft geen effect. 
                De hond heeft vaak niet eens in de gaten waarom hij/zij deze correctie krijgt, omdat na de correctie meteen wordt doorgelopen en dit dus weer “belonend” werkt! 
                Sommige honden worden door de rukken opgejut om nog harder te trekken (gevolg : een averechts effect).</p>
              <h3>Besluit:</h3>
              <p>Ouderwetse en niet-(bij)geschoolde hondentrainers hebben moeite om de slipketting achterwege te laten (schrik van andere positieve methodes samen met het vasthouden aan datgene wat bekend is).</p>
              <p>Ook in de hondensport moet men open staan voor nieuwe uitdagingen. Het voordeel van positief trainen is dat het gewenste gedrag beloond wordt en er geen pijnprikkels aan te pas komen.</p>
              <small>
              <p>Bronnen:</p>  
                <ul>
                  <li>Als mijn hond niet wil luisteren (Angela Wegman)</li>    
                  <li>Woef (okt. 2003) (Dany Grosemans)</li>
                  <li>Artikel trimcaniskrant (febr. 2009) (Monique Hendriks) </li>
                </ul>
              </small>
        `}
      ></post-element>
    </flex-container>
    `
  }
}
