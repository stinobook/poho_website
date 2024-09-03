import { html, css, LiteElement, query, property } from '@vandeurenglenn/lite'
import { customElement } from 'lit/decorators.js'
import '@vandeurenglenn/flex-elements/container.js'
import '@vandeurenglenn/lite-elements/button.js'
import '../components/diary.js'
import '../components/info.js'

@customElement('iron-view')
export class IronView extends LiteElement {
  @property({type: String}) accessor ironmenu = "intro"

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
        flex-flow: row wrap;
        justify-content: center;
        max-width: 1024px;
        gap:12px;
        height:fit-content;
        margin: 0 auto;
        align-items: stretch;
      }
      select {
        padding: 10px 10px 10px 15px;
        font-size: 1rem;
        color: var(--md-sys-color-on-secondary);
        background: var(--md-sys-color-secondary);
        border: 0;
        border-radius: 3px;
        outline: 0;
        margin-left: 24px;
        box-sizing: border-box;
        float:right;
        width: 70%;
      }
      .card {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: 100%;
        background-color: var(--md-sys-color-surface-container-high);
        color: var(--md-sys-color-on-surface-container-high);
        border-radius: var(--md-sys-shape-corner-extra-large);
        gap: 12px;
        box-sizing: border-box;
        padding: 12px;
      }
      label {
        float: left;
        width: 100%;
        padding: 4px 12px;
        margin-right: 12px;
        font-size: 1rem;
        border-top-left-radius: 3px;
        border-bottom-left-radius: 3px;
      }
    `
  ]

  connectedCallback() {
    this.shadowRoot.querySelector('#ironmenu').addEventListener('change', event => {
      this.ironmenu = (this.shadowRoot.getElementById('ironmenu') as HTMLSelectElement).value
    })
  }

  renderPage(menu) {
    switch (menu) {
      case 'intro':
        return html`
          <diary-element
          image="./img/iron/dirkjoke.png"
          headline="Voorwoord"
          .content=${html`
              <p>
                De bedoeling van dit dagboek is alle toekomstige hondenliefhebbers duidelijk te maken dat de aanschaf van een hond,
                hetzij een volwassen, hetzij een puppy van 7 weken, een grondige verandering in je leven teweeg brengt. Tegelijkertijd is
                het voor ons als eigenaar steeds leuk om later alles nog eens na te lezen, om eventuele fouten die nu worden gemaakt
                met onze nieuwe puppy, later niet meer te maken.
              </p>
              <p>
                Vooraleer een hond aan te schaffen dien je ten eerste op voorhand te weten dat je heel wat <u>nieuwe vrije tijd</u> en <u>nieuwe energie
                </u> zult moeten opofferen. Dit vooral in het bezig zijn met de hond zelf (zindelijk maken, spelen, commando’s
                aanleren) als eveneens in het vrij maken van tijd om mee te gaan wandelen. Dit blijkt gedeeltelijk uit het dagboek,
                aangezien wij als eigenaars alle twee fulltime gaan werken, en ik persoonlijk vind dat er hierdoor nog wat te weinig tijd
                wordt doorgebracht met onze puppy. Wat ik dan wel positief ervaar is dat de aanwezigheid van onze tweede briard van
                8 jaar veel goed maakt. Als ze elkaar aanvaarden, hebben ze gezelschap aan elkaar om te slapen en te ravotten.
              </p>
              <p>
                Voor een optimale start dien je ook op voorhand te weten dat de aanschaf van een puppy liefst dient te gebeuren bij
                een <u>erkende fokker, waarin je vertrouwen hebt,</u> en die maximaal een paar rassen in zijn bezit heeft. Deze fokkers weten
                meestal perfect waar ze mee bezig zijn (kunnen juiste adviezen geven over het ras, het karakter van uw toekomstige
                puppy, …). In winkels waar verschillende rassen samengetroept zitten, koopt men dikwijls een puppy met gezondheids -
                of gedragsproblemen of een puppy die helemaal niet voldoet aan de specifieke raseigenschappen qua karakter of
                uiterlijke kenmerken.
              </p>
              <p>
                Als je niet kan voldoen aan een minimum tijdsbesteding zoals hieronder in het dagboek wordt beschreven is het, volgens
                mijn bescheiden mening, niet aan te raden om een hond - puppy in huis te nemen. We willen immers allemaal een
                gelukkige hond, liefst zonder gedragsproblemen, of niet soms ?
              </p>
              <p>
                Wie het kan opbrengen om dagelijks minimum 1 uur met zijn hond bezig te zijn (wandeling is hierbij noodzakelijk)
                schept een prachtige band met zijn hond en verlengt hierdoor zeker de levensduur van zijn lievelingsdier (onze Golden
                Retriever Flash is bijna 13 jaar geworden en onze Shi-Tzu Flup is momenteel 15 jaar). Het is ook zeker aan te raden om
                een hondenschool te zoeken waar je goed wordt ontvangen, met al je vragen terecht kan, en waar er op een positieve
                manier (bijv. met clicker, zoals bij HS POHO te Hofstade(Aalst) wordt getraind.) Het is ook mooi meegenomen als je reeds
                kan beginnen trainen (vooral connectietraining en spel) vanaf de leeftijd van 8 weken.
              </p>
              <p>
                Onze bedoeling is om later gehoorzaamheidswedstrijden te spelen, zodat Iron in het weekend ook actief aan de slag
                blijft. Dit hoeft echter ieder voor zich uit te maken.
              </p>
              <p>
                Het dagboek van den Iron kan wekelijks worden opgevolgd op deze website.<br>
                Hebt u bepaalde vragen ? Stuur gerust een mailtje naar joke.deswaef@telenet.be !!
              </p>
              <p>Beste hondenliefhebbers, veel leesgenot !!</p>
              <p>Dirk en Joke</p>
          `}
          ></diary-element>
          <diary-element
          .image=${["./img/iron/ironp1.png","./img/iron/ironp2.png","./img/iron/ironp3.png","./img/iron/ironp4.png","./img/iron/iron6w1.png","./img/iron/iron6w2.png","./img/iron/ironflupaubry.png"]}
          headline="Voorwoord door de fokker : Jef Verswijfel - Irène Van Genechten"
          subline="Ik ben geboren op 20/05/2009 uit een nestje van 11 puppies, waarvan 6 reutjes (1 fauve) en 5 teefjes (1 fauve) en kreeg onmiddellijk een wit lintje om !!"
          .content=${html`
                <p>
                  Op 20 mei 2009 ben ik geboren als de 10de van 11 pups. Wat een massa vriendjes om tegenaan te kruipen en om mee te
                  ravotten. Het zal vechten worden voor eten, maar ik maak me geen zorgen. Ons mama, Diva, heeft zoveel melk, zeker
                  genoeg voor ons allemaal.
                </p>
                <p>
                  Het enige waar ik nu aan denk is eten en slapen. Na 14 dagen gingen mijn oogjes open, en dan begon het pas. Er liepen
                  altijd mensen langsheen ons nest. In het begin vond ik dat maar niks, maar na enkele dagen en weken was het prettig. Ik
                  werd door iedereen gestreeld, bepoteld en opgepakt. Goed om te socialiseren hoorde ik de fokker dikwijls zeggen, wat
                  dit ook mocht betekenen.
                </p>
                <p>
                  Er werden ook allerlei geluiden afgespeeld (voorbijrijdende treinen, onweer, voetbalsupporters, enz.) en zo dikwijls
                  herhaald dat ik het beu werd. Hoeveel moeite ik ook deed, we moesten ze blijven aanhoren.
                </p>
                <p>
                  Na 4 weken mocht ik samen met mijn broers en zussen buiten. We wilden meer dan enkel ons nest en dat konden we
                  buiten zeker vinden. Er hingen daar allerlei vreemde voorwerpen (blikjes, ballen, …) heen en weer te slingeren en het
                  woord socialiseren kwam weer voor de pinnen.
                </p>
                <p>
                  We gingen op onderzoek want we waren nogal nieuwsgierig. Eens alles werd goedgekeurd begon de pret. Alles was om
                  mee te spelen.
                </p>
                <p>
                  Een hebberig baasje als ik ben, heb ik dikwijls mijn nestgenoten te snel afgeweest. De mooiste en plezantste speeltjes
                  verzamelde ik ergens in een hoekje voor mij alleen. Mijn fokker zag dit graag, “eentje met veel buitdrift” (wat dat ook
                  mocht betekenen) hoorde ik dan.
                </p>
                <p>
                  Toen ik 6 weken oud was kwam de dierenarts langs. We werden helemaal onderzocht en kregen een prik in ons
                  achterste. Het deed even pijn maar ik heb me flink gehouden. Ze gaan hier niet achter mijn kont vertellen dat ik
                  kleinzerig ben hé !!!
                </p>
                <h3>Iron 6 weken</h3>
                <p>
                  Een paar dagen later kwam er nog zo’n rare man met een apparaat om onze chip te controleren. Ik dacht al …toch niet
                  weer een prik he…., maar nee hoor het gepiep viel best mee.
                </p>
                <p>
                  Onder alle bezoekers waren ook mijn toekomstige baasjes. Voor mij was het moeilijk kiezen want iedereen was zeer lief.
                  Maar ik kreeg hulp. De fokker heeft uren gespendeerd om ons gade te slaan en te testen, zodat ik zeker bij de goede en
                  juiste baasjes zou terecht komen. Dat gold ook voor mijn broers en zussen. Ik kreeg onmiddellijk de naam “Iron” mee
                  (onze namen moeten immers in 2009 met een “i” beginnen), verwijzend naar de hardrockgroep Iron Maiden.
                </p>
                <p>Mijn toekomstige baasjes, Joke en Dirk, waren tevreden met de keuze. Ik ben dan ook een knappe gast hé !</p>
                <a href="#"><small @click=${() => window.open('http://www.rvp.be/', '_blank')}>Geschreven door Renaat Van Poelvoorde.</small></a>
          `}
          ></diary-element>
        `
      case 'pedigree':
        return html`
          <diary-element
          image="./img/iron/diva.png"
          headline="Diva de la Maison Echaruq"
          subline="Mijn moeder."
          .content=${html`
              <table>
                <tr>
                  <td rowspan="4">Voodoo du Noble Nid</td>
                  <td rowspan="2">Nash du Domaine des Cypres</td>
                  <td>Gerare du Mont Brindille</td>
                </tr>
                <tr>
                  <td>Gaia du Domaine des Cypres</td>
                </tr>
                <tr>
                  <td rowspan="2">Revue du Bois D'Howis</td>
                  <td>Kaly du Bois D'Howis</td>
                </tr>
                <tr>
                  <td>Gaille Fauve de la Chaume du Bois Dieu</td>
                </tr>
                <tr>
                  <td rowspan="4">Udine de la Maison Echaruq</td>
                  <td rowspan="2">Valuas Isham</td>
                  <td>Pursan du Clos des Cedres</td>
                </tr>
                <tr>
                  <td>Disco du Moulin D'eau</td>
                </tr>
                <tr>
                  <td rowspan="2">Qurache du Bohémien</td>
                  <td>Juan of the Gloaming</td>
                </tr>
                <tr>
                  <td>Noblesse-Oblige of the Gloamin</td>
                </tr>
              </table>
            `}
          ></diary-element>
          <diary-element
          image="./img/iron/aquino.png"
          headline="Aquino van de Hoolhoeve"
          subline="Mijn vader."
          .content=${html`
              <table>
                <tr>
                  <td rowspan="4">Jeronimo de Lacabru<br>HD TC</td>
                  <td rowspan="2">Pursan du Clos des Cedres<br>HD A</td>
                  <td>James du Clos des Cedres<br>HD A</td>
                </tr>
                <tr>
                  <td>Julie du Clos des Cedres CH</td>
                </tr>
                <tr>
                  <td rowspan="2">Int. Champion Delilah Grise van de Hoolhoeve</td>
                  <td>Adios de Lacabru<br>HD B</td>
                </tr>
                <tr>
                  <td>Adut van de Hoolhoeve<br>HD TC</td>
                </tr>
                <tr>
                  <td rowspan="4">Ma Petite Delilah van de Hoolhoeve<br>HD TC</td>
                  <td rowspan="2">Jolly Jumper des Monts d'en Crauzille<br> HD TC</td>
                  <td>Hapache des Monts d'en Crauzille</td>
                </tr>
                <tr>
                  <td>Eoui des Monts d'en Crauzille</td>
                </tr>
                <tr>
                  <td rowspan="2">Int. Champion Delilah Grise van de Hoolhoeve</td>
                  <td>Adios de Lacabru<br>HD B</td>
                </tr>
                <tr>
                  <td>Adut van de Hoolhoeve</td>
                </tr>
              </table>
            `}
          ></diary-element>
        `
      case '2009':
        return html`
        <info-element
        headline="Juli"
        icon="pdf"
        @click=${() => window.open('./img/iron/0907.pdf', '_blank')}
        ></info-element>
        <info-element
        headline="Augustus"
        icon="pdf"
        @click=${() => window.open('./img/iron/0908.pdf', '_blank')}
        ></info-element>
        <info-element
        headline="September"
        icon="pdf"
        @click=${() => window.open('./img/iron/0909.pdf', '_blank')}
        ></info-element>
        <info-element
        headline="Oktober"
        icon="pdf"
        @click=${() => window.open('./img/iron/0910.pdf', '_blank')}
        ></info-element>
        <info-element
        headline="November"
        icon="pdf"
        @click=${() => window.open('./img/iron/0911.pdf', '_blank')}
        ></info-element>
        <info-element
        headline="December"
        icon="pdf"
        @click=${() => window.open('./img/iron/0912.pdf', '_blank')}
        ></info-element>
        `
      case '2010':
        return html`
        <info-element
        headline="Januari"
        icon="pdf"
        @click=${() => window.open('./img/iron/1001.pdf', '_blank')}
        ></info-element>
        <info-element
        headline="Februari"
        icon="pdf"
        @click=${() => window.open('./img/iron/1002.pdf', '_blank')}
        ></info-element>
        <info-element
        headline="April"
        icon="pdf"
        @click=${() => window.open('./img/iron/1004.pdf', '_blank')}
        ></info-element>
        <info-element
        headline="Mei"
        icon="pdf"
        @click=${() => window.open('./img/iron/1005.pdf', '_blank')}
        ></info-element>
        <info-element
        headline="Juni"
        icon="pdf"
        @click=${() => window.open('./img/iron/1006.pdf', '_blank')}
        ></info-element>
        <info-element
        headline="Juli"
        icon="pdf"
        @click=${() => window.open('./img/iron/1007.pdf', '_blank')}
        ></info-element>
        <info-element
        headline="Augustus"
        icon="pdf"
        @click=${() => window.open('./img/iron/1008.pdf', '_blank')}
        ></info-element>
        <info-element
        headline="September"
        icon="pdf"
        @click=${() => window.open('./img/iron/1009.pdf', '_blank')}
        ></info-element>
        <info-element
        headline="Oktober"
        icon="pdf"
        @click=${() => window.open('./img/iron/1010.pdf', '_blank')}
        ></info-element>
        <info-element
        headline="November"
        icon="pdf"
        @click=${() => window.open('./img/iron/1011.pdf', '_blank')}
        ></info-element>
        <info-element
        headline="December"
        icon="pdf"
        @click=${() => window.open('./img/iron/1012.pdf', '_blank')}
        ></info-element>
      `
      case '2011':
        return html`
        <info-element
        headline="2011 Zijn we gestart zoals vorig jaar."
        icon="pdf"
        @click=${() => window.open('./img/iron/11.pdf', '_blank')}
        ></info-element>
        `
      case '2012':
        return html`
        <info-element
        headline="2012"
        icon="pdf"
        @click=${() => window.open('./img/iron/12.pdf', '_blank')}
        ></info-element>
        `
      case 'pics':
        return html`
        <diary-element
        .content=${html`
          <flex-container class="gallery">
            <img src="./img/iron/foto1-3.webp" loading="lazy" />
            <img src="./img/iron/foto1-4.webp" loading="lazy" />
            <img src="./img/iron/foto1-5.webp" loading="lazy" />
            <img src="./img/iron/foto2-3.jpg" loading="lazy" />
            <img src="./img/iron/foto2-4.webp" loading="lazy" />
            <img src="./img/iron/foto2-5.webp" loading="lazy" />
            <img src="./img/iron/foto3-3.jpg" loading="lazy" />
            <img src="./img/iron/foto3-4.webp" loading="lazy" />
            <img src="./img/iron/foto3-5.webp" loading="lazy" />
            <img src="./img/iron/foto4-2.webp" loading="lazy" />
            <img src="./img/iron/foto5-2.webp" loading="lazy" />
            <img src="./img/iron/foto6-2.webp" loading="lazy" />
          </flex-container>
        `}
        ></diary-element>
        `
    }
  }


  render() {
    return html`
    <flex-container>
    <section class="card">
      <label>
        Menu
        <select id="ironmenu">
          <option value="intro">Intro</option>
          <option value="pedigree">Stamboom</option>
          <option value="2009">2009</option>
          <option value="2010">2010</option>
          <option value="2011">2011</option>
          <option value="2012">2012</option>
          <option value="pics">Foto's</option>
        </select>
      </label>
    </section>
      ${this.ironmenu ? this.renderPage(this.ironmenu) : ''}
    </flex-container>
    `
  }
}
