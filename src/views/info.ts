import { html, css, LiteElement, query } from '@vandeurenglenn/lite'
import { customElement } from 'lit/decorators.js'
import '@vandeurenglenn/flex-elements/container.js'
import '@vandeurenglenn/lite-elements/button.js'
import '../components/info.js'

@customElement('info-view')
export class InfoView extends LiteElement {
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
        flex-direction: row;
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
      <info-element
      headline="Syndroom van Cushing"
      subline="test"
      icon="info"
      .content=${html`
        Symptomen
        De bijnieren produceren bij het Syndroom van Cushing te veel hormonen. Het kan zowel om één soort hormonen als om meerde gaan. Daardoor zijn de symptomen heel verscheiden en soms amper op te merken.
        
        Bij honden zijn het vaak glucocorticoïden (een soort steroïden) die worden geproduceerd. Daardoor wordt de afbraak van de spiermassa in gang gezet, waardoor de beestjes magere pootjes krijgen. Ook gaat je hond of kat er veel van drinken en plassen. 
        
        Ook kan het immuunsysteem aangetast worden, waardoor er ontstekingen opduiken. Doordat de pancreas ook schade oploopt, kan je hond moeten braken of last van diarree krijgen. Andere verschijnselen zijn haarverlies, verhardingen onder de huid, toegenomen eetlust en een hoge bloeddruk.
        Diagnose
        De diagnose is bij het Syndroom van Cushing moeilijk te stellen: er is geen test om de aandoening vast te stellen. Wat de dierenarts kan doen is de bloedwaarden meten en een röntgenfoto laten maken om te zien of er een tumor is.
        Behandeling
        De ziekte kan met medicijnen of door middel van chirurgie worden behandeld. De methode hangt van de symptomen af. Medicijnen kunnen de productie van hormonen in de bijnieren tegengaan. Vandaar dat de meeste honden al geholpen zijn met medicijnen. Chirurgische ingrepen worden zoveel mogelijk gemeden, en zijn enkel nodig als medicijnen niet blijken te helpen.
        Prognose
        Het Syndroom van Cushing is op zich niet levensbedreigend. Maar een verzwakt immuunsysteem – een van de gevolgen van het syndroom – zorgt er wel voor dat andere ziektes snel een vat op je dier kunnen krijgen. De ziekte zelf heeft nauwelijks echte duidelijke symptomen. Vermoeidheid komt vaak voor, maar dat hoeft niet eens.
        
        Als het de levenskwaliteit bij je hond in gevaar brengt, ga dan direct naar de dierenarts zodat je viervoeter snel zijn oude leventje weer heeft. Het Syndroom van Cushing hoeft geen gevolgen voor het leven te hebben.
                `}
      ></info-element>

      <info-element
      headline="Syndroom van Cushing"
      subline="test"
      icon="info"
      .content=${html`
        Symptomen
        De bijnieren produceren bij het Syndroom van Cushing te veel hormonen. Het kan zowel om één soort hormonen als om meerde gaan. Daardoor zijn de symptomen heel verscheiden en soms amper op te merken.
        
        Bij honden zijn het vaak glucocorticoïden (een soort steroïden) die worden geproduceerd. Daardoor wordt de afbraak van de spiermassa in gang gezet, waardoor de beestjes magere pootjes krijgen. Ook gaat je hond of kat er veel van drinken en plassen. 
        
        Ook kan het immuunsysteem aangetast worden, waardoor er ontstekingen opduiken. Doordat de pancreas ook schade oploopt, kan je hond moeten braken of last van diarree krijgen. Andere verschijnselen zijn haarverlies, verhardingen onder de huid, toegenomen eetlust en een hoge bloeddruk.
        Diagnose
        De diagnose is bij het Syndroom van Cushing moeilijk te stellen: er is geen test om de aandoening vast te stellen. Wat de dierenarts kan doen is de bloedwaarden meten en een röntgenfoto laten maken om te zien of er een tumor is.
        Behandeling
        De ziekte kan met medicijnen of door middel van chirurgie worden behandeld. De methode hangt van de symptomen af. Medicijnen kunnen de productie van hormonen in de bijnieren tegengaan. Vandaar dat de meeste honden al geholpen zijn met medicijnen. Chirurgische ingrepen worden zoveel mogelijk gemeden, en zijn enkel nodig als medicijnen niet blijken te helpen.
        Prognose
        Het Syndroom van Cushing is op zich niet levensbedreigend. Maar een verzwakt immuunsysteem – een van de gevolgen van het syndroom – zorgt er wel voor dat andere ziektes snel een vat op je dier kunnen krijgen. De ziekte zelf heeft nauwelijks echte duidelijke symptomen. Vermoeidheid komt vaak voor, maar dat hoeft niet eens.
        
        Als het de levenskwaliteit bij je hond in gevaar brengt, ga dan direct naar de dierenarts zodat je viervoeter snel zijn oude leventje weer heeft. Het Syndroom van Cushing hoeft geen gevolgen voor het leven te hebben.
                `}
      ></info-element>

      <info-element
      headline="Syndroom van Cushing"
      subline="test"
      icon="info"
      .content=${html`
        Symptomen
        De bijnieren produceren bij het Syndroom van Cushing te veel hormonen. Het kan zowel om één soort hormonen als om meerde gaan. Daardoor zijn de symptomen heel verscheiden en soms amper op te merken.
        
        Bij honden zijn het vaak glucocorticoïden (een soort steroïden) die worden geproduceerd. Daardoor wordt de afbraak van de spiermassa in gang gezet, waardoor de beestjes magere pootjes krijgen. Ook gaat je hond of kat er veel van drinken en plassen. 
        
        Ook kan het immuunsysteem aangetast worden, waardoor er ontstekingen opduiken. Doordat de pancreas ook schade oploopt, kan je hond moeten braken of last van diarree krijgen. Andere verschijnselen zijn haarverlies, verhardingen onder de huid, toegenomen eetlust en een hoge bloeddruk.
        Diagnose
        De diagnose is bij het Syndroom van Cushing moeilijk te stellen: er is geen test om de aandoening vast te stellen. Wat de dierenarts kan doen is de bloedwaarden meten en een röntgenfoto laten maken om te zien of er een tumor is.
        Behandeling
        De ziekte kan met medicijnen of door middel van chirurgie worden behandeld. De methode hangt van de symptomen af. Medicijnen kunnen de productie van hormonen in de bijnieren tegengaan. Vandaar dat de meeste honden al geholpen zijn met medicijnen. Chirurgische ingrepen worden zoveel mogelijk gemeden, en zijn enkel nodig als medicijnen niet blijken te helpen.
        Prognose
        Het Syndroom van Cushing is op zich niet levensbedreigend. Maar een verzwakt immuunsysteem – een van de gevolgen van het syndroom – zorgt er wel voor dat andere ziektes snel een vat op je dier kunnen krijgen. De ziekte zelf heeft nauwelijks echte duidelijke symptomen. Vermoeidheid komt vaak voor, maar dat hoeft niet eens.
        
        Als het de levenskwaliteit bij je hond in gevaar brengt, ga dan direct naar de dierenarts zodat je viervoeter snel zijn oude leventje weer heeft. Het Syndroom van Cushing hoeft geen gevolgen voor het leven te hebben.
                `}
      ></info-element>

      <info-element
      headline="Syndroom van Cushing"
      subline="test"
      icon="info"
      .content=${html`
        Symptomen
        De bijnieren produceren bij het Syndroom van Cushing te veel hormonen. Het kan zowel om één soort hormonen als om meerde gaan. Daardoor zijn de symptomen heel verscheiden en soms amper op te merken.
        
        Bij honden zijn het vaak glucocorticoïden (een soort steroïden) die worden geproduceerd. Daardoor wordt de afbraak van de spiermassa in gang gezet, waardoor de beestjes magere pootjes krijgen. Ook gaat je hond of kat er veel van drinken en plassen. 
        
        Ook kan het immuunsysteem aangetast worden, waardoor er ontstekingen opduiken. Doordat de pancreas ook schade oploopt, kan je hond moeten braken of last van diarree krijgen. Andere verschijnselen zijn haarverlies, verhardingen onder de huid, toegenomen eetlust en een hoge bloeddruk.
        Diagnose
        De diagnose is bij het Syndroom van Cushing moeilijk te stellen: er is geen test om de aandoening vast te stellen. Wat de dierenarts kan doen is de bloedwaarden meten en een röntgenfoto laten maken om te zien of er een tumor is.
        Behandeling
        De ziekte kan met medicijnen of door middel van chirurgie worden behandeld. De methode hangt van de symptomen af. Medicijnen kunnen de productie van hormonen in de bijnieren tegengaan. Vandaar dat de meeste honden al geholpen zijn met medicijnen. Chirurgische ingrepen worden zoveel mogelijk gemeden, en zijn enkel nodig als medicijnen niet blijken te helpen.
        Prognose
        Het Syndroom van Cushing is op zich niet levensbedreigend. Maar een verzwakt immuunsysteem – een van de gevolgen van het syndroom – zorgt er wel voor dat andere ziektes snel een vat op je dier kunnen krijgen. De ziekte zelf heeft nauwelijks echte duidelijke symptomen. Vermoeidheid komt vaak voor, maar dat hoeft niet eens.
        
        Als het de levenskwaliteit bij je hond in gevaar brengt, ga dan direct naar de dierenarts zodat je viervoeter snel zijn oude leventje weer heeft. Het Syndroom van Cushing hoeft geen gevolgen voor het leven te hebben.
                `}
      ></info-element>
    </flex-container>
    `
  }
}
