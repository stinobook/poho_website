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
        overflow: hidden;
        width: 100%;
        height: 100%;
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
        max-width: 1024px;
        gap:12px;
        max-height:100%;
        margin: 0 auto;
        justify-content: center;
        align-items:stretch;
        overflow: auto;
      }
    `
  ]

  render() {
    return html`
    <flex-container>
      <info-element
      headline="Syndroom van Cushing"
      icon="info"
      .content=${html`
        <p><strong>Het Syndroom van Cushing</strong> wordt veroorzaakt door een hyperactieve bijnier die te veel steroiden en andere hormonen in het bloed pompt. 
        Een tumor kan er bijvoorbeeld de oorzaak van zijn. Meestal komt de ziekte pas voor bij honden die ouder dan zes jaar zijn. </p>
        <h3>Symptomen</h3>
        <p>
          De bijnieren produceren bij het Syndroom van Cushing te veel hormonen. Het kan zowel om één soort hormonen als om meerde gaan. 
          Daardoor zijn de symptomen heel verscheiden en soms amper op te merken.<br>          
          Bij honden zijn het vaak glucocorticoïden (een soort steroïden) die worden geproduceerd. 
          Daardoor wordt de afbraak van de spiermassa in gang gezet, waardoor de beestjes magere pootjes krijgen. Ook gaat je hond of kat er veel van drinken en plassen.<br>          
          Ook kan het immuunsysteem aangetast worden, waardoor er ontstekingen opduiken. Doordat de pancreas ook schade oploopt, kan je hond moeten braken of last van diarree krijgen. 
          Andere verschijnselen zijn haarverlies, verhardingen onder de huid, toegenomen eetlust en een hoge bloeddruk.
        </p>
        <h3>Diagnose</h3>
          <p>De diagnose is bij het Syndroom van Cushing moeilijk te stellen: er is geen test om de aandoening vast te stellen. Wat de dierenarts kan doen is de bloedwaarden meten en een röntgenfoto laten maken om te zien of er een tumor is.</p>
        <h3>Behandeling</h3>
          <p>De ziekte kan met medicijnen of door middel van chirurgie worden behandeld. De methode hangt van de symptomen af. Medicijnen kunnen de productie van hormonen in de bijnieren tegengaan. Vandaar dat de meeste honden al geholpen zijn met medicijnen. 
            Chirurgische ingrepen worden zoveel mogelijk gemeden, en zijn enkel nodig als medicijnen niet blijken te helpen.</p>
        <h3>Prognose</h3>
        <p>
          Het Syndroom van Cushing is op zich niet levensbedreigend. Maar een verzwakt immuunsysteem – een van de gevolgen van het syndroom – zorgt er wel voor dat andere ziektes snel een vat op je dier kunnen krijgen. 
          De ziekte zelf heeft nauwelijks echte duidelijke symptomen. Vermoeidheid komt vaak voor, maar dat hoeft niet eens.<br>
          Als het de levenskwaliteit bij je hond in gevaar brengt, ga dan direct naar de dierenarts zodat je viervoeter snel zijn oude leventje weer heeft. 
          Het Syndroom van Cushing hoeft geen gevolgen voor het leven te hebben.
       </p>
                `}
      ></info-element>
      <info-element
      headline="Wat er echt in hondenvoer zit."
      icon="info"
      .content=${html`
      <p>Tegenwoordig is er een enorme keuze tussen de verschillende soorten hondenvoer. Elke dag opnieuw word je gebombardeerd door reclamespots die bepaalde soorten hondenvoer promoten. De spots zijn mooi, modern en aantrekkelijk. Maar bieden ze ook kwalitatieve producten? 
        Welke voeding is nu het beste voor je hond zodat hij een evenwichtige dosis proteïnen binnen krijgt?</p>
      <h3>De juiste keuze</h3>
      <p>
        Hondenvoer, waar veel reclame over gemaakt wordt, is natuurlijk niet het beste hondenvoer. Een vuistregel die je vaak kan 
        gebruiken om de kwaliteit na te gaan: hoe duurder het voer, hoe beter de kwaliteit. Maar ook dit moet je natuurlijk met een korreltje zout nemen.<br>  
        Het gaat hem vooral om de voedingswaarde die in het voedsel zit. Let op de balans van het voedsel. Goed hondenvoer bestaat best uit 25 % proteïnen en voor een 
        kleine 20 % uit vetten. Voor de meeste honden is dit een heel goede balans. Let er wel op dat puppies en kweekhonden vaak een aangepast dieet nodig hebben. 
        De details hieromtrent regel je best met je dierenarts.
      </p>
      <h3>Gezondheid troef!</h3>
      <p>
        Een hondenmaaltijd kan bestaan uit kip, kalkoen, vis, rijst, aardappelen, zonnebloemolie en groenten. De belangrijkste ingrediënten van de voeding moeten 
        vleesproducten zijn en niet de graanproducten. Belangrijke vitaminen voor je hond zijn onder meer Vitamine E, Omega 3 en 6. Deze zorgen voor een gloeiende gezonde vacht. 
        Houd er ook rekening mee dat je geen voedsel aanbiedt dat afgeladen vol zit met bewaarmiddelen.<br>  
        Nog enkele ingrediënten die je best niet of zo weinig mogelijk in je hondenvoer wil hebben, zijn: granen, maïs, afvalproducten van kip en soja. Deze ingrediënten zijn 
        moeilijk te verteren en kunnen je hond op termijn gezondheidsproblemen geven. Natuurlijk is suiker ook een product dat je niet in grote 
        hoeveelheden in je dagelijks hondendieet wil hebben.<br>  
        Wanneer je toch het gevoel hebt dat je hond ongezond eten binnenspeelt, kan je best eens langsgaan bij je dierenarts. Net als mensen moeten ook sommige honden een dieet volgen. 
        Dit is meestal vrij duur maar altijd in het belang van de hond. Het is steeds belangrijk om je dierenarts te raadplegen wanneer je vragen of opmerkingen hebt. 
        Het is gemakkelijk om verloren te lopen in de rijen vol hondenvoer en daarom is het belangrijk de juiste keuzes te maken in het belang van je hond.
      </p>
                `}
      ></info-element>
      <info-element
      headline="Een spelende hond"
      subline="Alternatieven binnenshuis"
      icon="info"
      .content=${html`
      <p>Iedereen die opteert voor een hond als huisdier, zou moeten weten dat je dan kiest voor gezelschap dat graag beweegt en buiten komt. 
        Honden zijn dieren die over het algemeen liever wel dan niet elke dag buiten spelen of wandelen. Het is dan ook logisch dat hondeneigenaars 
        hun huisdier de mogelijkheid geven om zich in de buitenlucht te ontspannen. Wanneer dat toch niet lukt, om welke reden dan ook, zijn er gelukkig andere mogelijkheden.</p>
      <h3>Niet elk baasje heeft evenveel tijd of mogelijkheden</h3>
      <p>Honden zijn energieke dieren en dus is het aan te raden hen de mogelijkheid te bieden om af en toe buiten te ravotten. Een baasje dat zijn of haar hond die kans op 
        regelmatige basis ontneemt, zou misschien beter helemaal geen hond aanschaffen. Met je hond op stap gaan, is trouwens niet enkel nodig omdat het dier zijn behoeften moet doen. 
        Je hond eens in een vijver laten zwemmen, ermee dollen in een weiland of een flinke boswandeling maken kan het dier enkel maar goed doen. Toch zijn er hondeneigenaars 
        die omwille van bepaalde redenen niet altijd de mogelijkheid hebben om bovenstaande dingen te doen. Iemand die bijvoorbeeld fulltime van ’s ochtends vroeg tot ’s avonds 
        laat moet werken, heeft niet elke dag de energie om nog met de hond te gaan wandelen. Of nog, wanneer je in het centrum van een grote stad woont zijn de mogelijkheden 
        tot vertier in de buitenlucht vaak beperkter dan op het platteland. Tenslotte zijn er soms ook praktische redenen die het buitenspelen met je hond kunnen beperken. Denk bijvoorbeeld 
        maar aan weerfenomenen zoals hittegolven of sneeuwstormen. Gelukkig zijn er alternatieven voor wanneer je gedwongen bent om voor onbepaalde tijd binnen te blijven. Wij schetsen er twee van.</p>
      <h3>De jacht op voedsel</h3>
      <p>Honden zijn huisdieren die verlekkerd zijn op hun dagelijkse portie hondenbrokken en snoepjes allerlei. Een toffe manier om je hond de kans te geven wat energie kwijt te raken, 
        is dan ook om zijn of haar eten ergens in je huis te verstoppen. Je kan bijvoorbeeld kleine hoeveelheden voedsel droppen in verschillende kamers van je woonplaats. Honden hebben 
        immers een uitstekende reukzin en met wat gesnuffel komen ze hun eten meestal gauw op het spoor. Je kan als baasje bijvoorbeeld ergens onder de kast, achter deuren, tussen enkele 
        kartonnen dozen of simpelweg op een stoel makkelijk wat hondenbrokken kwijt. Natuurlijk mag de zoektocht aanvankelijk niet te moeilijk zijn, zodat de hond de moed niet opgeeft en stopt 
        met spoorzoeken. Wanneer je na een tijdje merkt dat jouw viervoeter het spelletje doorheeft, kan je de moeilijkheidsgraad alsnog verhogen.</p>
      <h3>Je hond op date</h3>
      <p>Er is nog een tweede geweldige manier om je hond te laten ravotten zonder daarvoor naar buiten te moeten. Als baasje ken je vast wel iemand uit je nabije omgeving 
        die ook één of meerdere honden heeft. Een zeer leuk idee kan dan ook zijn om een date te organiseren tussen je eigen hond en het bevriende exemplaar. Honden zijn immers 
        sociale zoogdieren en de kans om zich uit te leven met een andere viervoeter, zullen ze niet gauw laten liggen. Concreet spreek je dan met de andere persoon een datum af 
        waarop je de tijd hebt om de tweede hond te ontvangen. Vervolgens zorg je er best ook voor dat je huis die dag opgeruimd is, zodat er geen dierbare voorwerpen sneuvelen. 
        Daarenboven kan je met het andere baasje afspreken om eens af te wisselen. Het ene plezier is toch het andere waard en op die manier blijkt het daten misschien wel duurzamer 
        op lange termijn? </p>
                `}
      ></info-element>
      <info-element
      headline="Je Franse Bulldog trainen en opvoeden"
      icon="info"
      .content=${html`
        <p>Omdat Franse Bulldogs zo gesteld zijn op mensen en ons echt willen plezieren, vinden we het op zich niet zo moeilijk om hen te trainen. 
          Hun training moet je consequent en op een goede manier aanpakken. Ze kunnen een beetje koppig zijn, maar dat geld eigenlijk voor alle hondenrassen. 
          Als je van de opvoeding en training een spelletje maakt zijn ze helemaal in hun sas. Ze zullen de hele tijd willen “spelen”.</p>
        <h3>De Franse bulldog is een vrij intelligent ras</h3>
        <p>Wat intelligentie betreft scoort de <a @click=${() => window.open('https://www.hondencentrum.com/hondenrassen/franse-buldog/', '_blank')} href="">Franse Bulldog</a> vrij goed ten 
        opzichte van andere rassen. Niet zo goed als sommige herders, 
          maar de Franse bulldog behoort zeker tot de slimste bulldoggen. Over alle hondenrassen heen scoren ze gemiddeld.<br>
        Het komt er op neer dat de Franse Bulldog een vrij intelligent ras is, dat graag speelt en met mensen bezig is. 
          Als je genoeg tijd en energie in het ras steekt, zal hij of zij zeer snel leren en zullen jullie heel veel plezier aan elkaar beleven.<br>
        Hetzelfde geld voor de zindelijkheidstraining. Iets wat we veel horen is: Hoe groter het ras, hoe gemakkelijker de zindelijkheidstraining verloopt. Maar dat zou wel eens te maken 
          kunnen hebben met de hoeveelheid tijd die er in de 
          zindelijkheidstraining gestoken wordt. Een groter ras maakt natuurlijk ook meer rotzooi en dan wordt er al eens sneller meer tijd in gestoken.<br>
        Franse bulldogs vallen zowat in het midden. Niet heel groot en niet heel klein. Dus hun plasjes willen we in het huis toch zeker vermijden. 
          Maar geen nood: Het is hen vrij gemakkelijk aan te leren.</p>
        <h3>Beweging: Veel, maar niet te lang</h3>
        <p>De Franse Bulldog is niet het ras dat naast je loopt als je gaat joggen. Ze houden van korte wandelingen als het ten minste niet te warm is buiten. Een “Frenchie” mag je nooit in te hoge temperaturen laten rondlopen. 
          Ze houden dus absoluut van een korte wandeling en een lang middagdutje erna. Maar die korte wandeling mag je zeker drie, vier keer per dag doen.<br>
        De Franse Bulldog speelt heel graag, maar je mag zo een spel niet te lang laten duren. Ze zullen zich na een tijdje forceren en ademen wordt dan moeilijker en moeilijker. Dus na het spel las je best een rustpauze in. 
          Dit is het ideale tijdstip om samen wat te rusten en te knuffelen. Ze zullen nooit kwaad zijn als je hen extra affectie geeft.</p>
                `}
      ></info-element>
      <info-element
      headline="Gezonde honden drinken water"
      subline="Schol!"
      icon="info"
      .content=${html`
      <p>Water drinken lijkt een vanzelfsprekende zaak. Hondenbaasjes zetten vaak zonder al te veel nadenken een kom water neer waar de hond naar believen van kan drinken. Maar baasjes weten meestal niet of hun hond wel genoeg drinkt, of misschien dat hij zelfs te veel drinkt. Hoeveel moet een hond eigenlijk drinken om gezond te blijven? En hoe kunnen baasjes het drinkgedrag van hun hond sturen?</p>
      <h3>Vitaal water</h3>
      <p>Net zoals voor mensen, is water ook van vitaal belang voor honden. Hydratatie houdt de gezondheidstoestand op peil en verhoogt het zelfs. Een te lage waterinname brengt nierstenen, orgaanfalen en mogelijk zelfs de dood met zich mee. Een te hoge waterinname daarentegen leidt tot een opgeblazen maag en hyponatriëmie (elektrolytenverstoring), beter bekend als watervergiftiging. Het drinkgedrag van de hond bepaalt dus in belangrijke mate zijn gezondheidstoestand!</p>
      <h3>Extreme drinkpatronen</h3>
      <p>Een hond die te veel of te weinig water drinkt kan last hebben van een bepaalde ziekte. Een “overdrinker” kan een blaasontsteking of een infectie hebben, of zelfs aan diabetes lijden. Deze honden zijn overgehydrateerd en tonen symptomen zoals overgeven, lethargisch en verward gedrag. Een “onderdrinker” wijst dan weer op parvovirose, leptospirose of pancreatitis. Een gedehydrateerde hond herken je aan flets, glansloos tandvlees en een nekvel dat niet soepel terugveert als je het uitrekt en loslaat. Het is opnieuw duidelijk dat het drinkgedrag van je hond in directe relatie staat met zijn gezondheid. Het is daarom belangrijk zijn waterinname goed te beheren en bij te sturen indien nodig.</p>
      <h3>Hoeveel water heeft een hond nodig?</h3>
      <p>Verschillende factoren bepalen hoeveel water je hond idealiter moet opnemen. </p>
      <ul>
        <li>Grootte: Een goede richtlijn is 50 ml water per kilogram lichaamsgewicht. Een hond van 25 kg heeft dus gemiddeld 1250 ml, ofwel 1,2 liter water per dag nodig.</li>
        <li>Voer: Droogvoer en snoeperijen zijn meestal zouter dan blikvoer waardoor meer water opgenomen moet worden. Let daarom goed op de hoeveelheid zout dat je je hond voorschotelt en probeer dit te beperken.</li>
        <li>Leeftijd: Jonge honden hebben om de twee uur 150 ml water nodig en moeten dus sterk opgevolgd worden. Oudere honden daarentegen voelen zelf aan wanneer ze moeten drinken.</li>
        <li>Beweging: Hoe meer je hond beweegt, hoe meer water hij nodig heeft. Neem daarom op je wandelingen telkens een thermos drinkfles mee speciaal voor je hond.</li>
        <li>Weer: Warmer weer vraagt om meer wateropname.</li>
        <li>Medicatie: Sommige medicijnen vereisen een verhoogde of verlaagde wateropname. Bespreek dit met je dierenarts.</li>
      </ul>
      <h3>Bijsturen waar nodig</h3>
      <p>Honden die te veel of te weinig drinken, moeten bijgestuurd worden in hun drinkgedrag om zo een optimale hoeveelheid water binnen te krijgen. Er bestaan verschillende trucjes om dat te bereiken. </p>
      <ul>
        <li><strong>Onderdrinker</strong>: Beloon je hond telkens wanneer hij drinkt en bepaal op die manier zijn gedrag. Plaats drinkbakken op strategische plaatsen, gebruik smaakjes om water lekkerder te maken voor je hond en schotel hem zoutarme kippenbouillon voor.</li>
        <li><strong>Overdrinker</strong>: Gebruik een waterdispenser zoals die bestaan voor konijnen (aangepaste versie voor honden!). Er bestaan ook speciale “likflessen”. Beide hulpmiddelen zorgen ervoor dat het drinken trager en beperkter gebeurt. Op termijn heeft dit ook een conditionerend gedragseffect.</li>
      </ul>
      <p>Wil je je hond gezond houden – en zelfs gezonder maken – schenk dan aandacht aan zijn drinkgedrag. Doe er alles aan om hem te leren dat drinken belangrijk is, maar met mate moet gebeuren.</p> 
                `}
      ></info-element>
      <info-element
      headline="Vuurwerk"
      subline="Help, mijn hond heeft angst voor vuurwerk!"
      icon="info"
      .content=${html`
          <p>Sommige honden hebben geen probleem met vuurwerk. De lichtflitsen en het geluid van vuurwerk doen hen niets. Jachthonden, bijvoorbeeld, kunnen al gewoon zijn aan de geluiden van jachtgeweren.<br>
          De meeste honden zijn echter niet gewend aan deze dingen, dus oudejaar en Nieuwjaar kan een bijzonder stressvolle periode zijn voor deze honden en hun baasjes.</p>
          <h3>Weglopers</h3>
          <p>Met Nieuwjaar rennen meer huisdieren weg dan elke andere dag in het jaar. Je kan dus best extra maatregelen nemen.<br>
          Houd je hond tijdens het vuurwerk goed in de gaten en zorg ervoor dat hij de juiste identificatie draagt. Moest hij dan weglopen, dan kan de "vinder" je gemakkelijk contacteren.</p>
          <h3>Natuurlijke reflex</h3>
          <p>
            Het is natuurlijk voor honden om bang te zijn voor harde geluiden. De geluiden triggeren hun zenuwstelsel en ze kunnen angstig of bang worden. Wegrennen van het geluid is een overlevingsinstinct.<br>
            Vergeet niet dat voor je hond vuurwerk heel anders is dan andere natuurlijke harde geluiden. Zoals bijvoorbeeld donder. Vuurwerk komt van dichterbij, is levendiger en gaat gepaard met plotselinge flitsen en brandende geuren. <br>  
            Honden ervaren de wereld door hun zintuigen - neus, ogen, oren. Logisch dus dat het vuurwerk behoorlijk overweldigend kan zijn.<br>  
            Hier zijn enkele tips om je hond rustig te houden, zodat het voor jou en je hond dragelijk wordt.
          </p>
          <h3>1. Voorbereiding</h3>
          <p>Zorg ervoor dat je hond op een plek zit waar hij het vuurwerk niet kan zien of horen. Zoals bijvoorbeeld het huis van een vriend, familielid of een dagopvang voor honden waarmee je hond bekend is. Als het een onbekende plek voor je hond is, neem hem daar dan een paar keer mee in de dagen voor Nieuwjaar, zodat hij de plek wat kent.</p>
          <h3>2. Accommodatie</h3>
          <p>Als je je hond niet mee kunt nemen naar een plek weg van vuurwerk, zorg dan dat je een reiskennel thuis hebt waarin hij zich veilig voelt. Als je niet thuis bent, vraag dan een oppas om je hond gezelschap te houden en om hem uit te laten. </p>
          <h3>3. Gewenning</h3>
          <p>De beste manier om e hond voor te bereiden op vuurwerk, is om ervoor te zorgen dat hij zich van tevoren vertrouwd voelt met het geluid. Hoewel dit een eenvoudig proces lijkt, kan het enige tijd duren.<br>
          Je start best drie of vier maanden op van tevoren met het spelen van het opgenomen geluid van vuurwerk. Steeds een beetje luider. Best voordat hij eet, voor een wandeling en vóór affectie en spel.<br>
          Geleidelijk aan zal hij de vuurwerk knallen associëren met iets goeds. Ook al heb je maar twee of drie weken meer voor eindejaar, start er toch mee. Het zal altijd helpen. En gebruik deze methode samen met de andere tips.</p>
          <h3>4. Communicatie</h3>
          <p>Als je tijdens het vuurwerk bij je hond bent, zullen jouw woorden hem helpen te ontspannen. Onthoud wel: Terwijl mensen communiceren met woorden, communiceren honden heel anders. Ze kijken ook naar hun roedelleider voor aanwijzingen over hoe ze zich zouden moeten gedragen. Als je niet veel commotie maakt of opwinding toont over het vuurwerk, leert hij ook minder betrokken te zijn.</p>
          <h3>5. Sedatie - medicijnen</h3>
          <p>
            Vindt je het toch nodig om medicatie (in uitzonderlijke gevallen) of een thundershirt te gebruiken? Bedenk dan dat je een dergelijk hulpmiddel op het juiste moment moet introduceren. En dat je hem ook moet laten wennen aan een thundershirt.<br>  
            Dit betekent dat je hond eerst rustig moet zijn. En dan pas introduceren. Als je hond al een angstniveau van 8 of 9 heeft, zal de mentale toestand de medicatie overschrijven. Als hij al zwaar ademt, zal het thundershirt, dat is ontworpen om de ademhaling te vertragen, niet werken.<br>  
            In alle bovenstaande gevallen, kan je eerst de overtollige energie van je hond al kwijt spelen door een goede wandeling te maken. Hij zal er veel rustiger van worden.<br>  
            Het allerbelangrijkste: Denk niet dat je hond is zoals een kind. Voel je niet schuldig dat hij dat “leuke” vuurwerk mist. Je hond mist het niet. Dus het beste wat je kan doen is het vuurwerk mijden. Indien je niet anders kan, probeer dan bovenstaande tips. Wanneer de knallen van Nieuwjaar weer voorbij zijn, zal je hond je dankbaar zijn. 
          </p>
                `}
      ></info-element>
      <info-element
      headline="Hoe blaffen afleren"
      icon="info"
      .content=${html`
      <p>
        Blaffen is voor honden een vorm van communicatie. Ze zijn van nature waakzaam en willen ons waarschuwen bij mogelijk gevaar. In zo een situatie ben je je trouwe viervoeter dankbaar. Maar als je hond niet van stoppen weet en abnormaal veel blaft, kan het uitermate vervelend zijn. Niet alleen voor jezelf maar ook voor de mensen rondom je.<br>  
        Met het ‘stop met blaffen’-bevel kan je aangeven wanneer het genoeg is en je hond moet stoppen. Een eenvoudige truck die je na goed oefenen perfect kan aanleren!
      </p>
      <h3>Waarom honden blaffen</h3>
      <p>
        Vroeger waren honden ons levend alarmsysteem. Ze zijn van nature waakzaam en hebben eeuwenlang ons territorium beschermd. Ook vandaag vertrouwen mensen overal ter wereld nog steeds op honden om hun huis, gewassen en/of vee te beschermen. Vooral hondenrassen die voor dit doel gekweekt werden, zoals de Duitse Scheper en de Pyrenese berghond, doen hun waakjob uitstekend. <br>
        Toch zal je zien dat elke hond waakzaam gedrag vertoont als er een vreemde voor je deur staat.
        Als je deurbel rinkelt, begint vaak het geblaf. Laat je hond gerust 4 tot 5 keer blaffen en neem dan vlug over door je viervoeter te bedanken. Je hond zal zich gewaardeerd voelen voor zijn beschermende taak. Op die manier heeft je hond niet overmatig geblaft en voel je je thuis een beetje veiliger.<br>
        Tegenover vroeger, zijn er weinig tot geen uitdagingen meer voor onze honden. Ze leven binnenshuis en doen niet veel meer dan eten, slapen en af en toe eens gaan wandelen wanneer hun baasje daar zin of tijd voor heeft. Vooral actieve honden die ze vroeger kweekten om te werken, zullen vaker uit verveling blaffen. <br>  
        Hoewel je het blaffen vaak als irritant ervaart, zou je eens moeten achterhalen waarom je hond blaft. Als je de reden van het blaffen kent, kan je het blafgedrag immers makkelijker veranderen. De beste remedie tegen overmatig blaffen is méér beweging en mentale stimulatie. Op die manier zal je hond meer inspanning leveren en vermoeid geraken. Hierdoor zal je viervoeter minder de neiging hebben om te blaffen.
      </p>

      <h3>Het ‘blaf-‘ en ‘stop-‘ bevel</h3>
      <p>Je hond het blaf- en stopbevel aanleren klinkt misschien moeilijk, maar het is een fantastische en eenvoudige manier om het blafgedrag te verminderen en te stoppen op commando. <br>
      Hoe ga je te werk?:</p>
              <ul>
                <li>Trigger je hond om te blaffen. Dit kan je doen door bijvoorbeeld aan de deurbel te bellen of op de deur te kloppen. Als je hond aan het blaffen is, moedig je hem verder aan door het vocaal bevel ‘blaf’ te roepen samen met een handgebaar.</li>
                <li>Om je hond het stopbevel te geven gebruik je je stem en een handgebaar. Beloon hem vervolgens met een snoepje of speeltje als hij even stil kan blijven.</li> 
                <li>Hoe meer je deze oefening herhaalt, hoe sneller je hond het bevel onder de knie krijgt. Eens je merkt dat je hond het kunstje doorheeft, moedig je hem weer aan om te blaffen, gevolgd door opnieuw het stopbevel met een duidelijk handsignaal. Blijft je hond vervolgens langer dan 30 seconden stil, beloon hem dan opnieuw met een snoepje. Ga op die manier door en blijf de stille periode verlengen. Bouw dan ook de beloningen af.</li>
              </ul>
                `}
      ></info-element>
      <info-element
      headline="Een rashond of niet?"
      icon="info"
      .content=${html`
        <p>
          Honden zijn vaak de beste vrienden van de mens. Als je een hond wil, moet je eerst goed nadenken over welke hond je wil: wil je een rashond of liever vuilnisbakkenras? Vaak kan je ook een puur ras krijgen of een gemengd ras, bij een gemengd ras worden twee verschillende rassen gekruist.<br>  
          Een hond kiezen hangt van verschillende dingen inhouden: de grootte van je huis, hoeveel ruimte heb je, hoe vaak kan je met de hond gaan wandelen of spelen met hem, wil je een speels of kalm gezelschapsdier,...? Ook moet je rekening houden met alle verantwoordelijkheden die een hond met zich meebrengt. 
        </p>
        <h3>Verantwoordelijkheden bij een hond</h3>
        <small>Met welke verantwoordelijkheden moet je rekening houden als je een hond koopt?</small>
        <ul>
          <li>de hond moet iedere dag eten krijgen</li>
          <li>wil je een rashond of een bastaardras?</li>
          <li>Er moet iedere dag met de hond gespeeld worde</li>
          <li>de hond moet elke dag uitgelaten worde</li>
          <li>je moet opletten wat de hond ee</li>
          <li>de gezondheid van de hond moet goed inde gaten gehouden worden</li>
        </ul>
        <h3>Rashond of bastaardhond?</h3>
        <p>
          Het is geen gemakkelijke keuze: ga je een rashond kopen of heb je liever een bastaardhond? Een rashond wordt beter in de gaten gehouden en het kweken gebeurt nauwgezet. Het koppel honden dat moet kweken, wordt goed nagekeken op ziektes en ook de voorouders worden genetisch goed nagekeken. Alleen wanneer er geen enkel probleem is bij de voorouders, zal er gekweekt worden. Zo ben je dus redelijk zeker van een gezonde hond. Al is er ook nog een mogelijkheid dat honden aan bepaalde “kweekkwaaltjes” gaan lijden zoals knieën die zwakker zijn. <br>
          Wanneer de kweekhonden niet compatibel zijn , wordt er een andere partner gezocht met een gezonde voorgeschiedenis. 
        </p>
        <h3>Het kopen van een rashond</h3>
        <p>Wanneer het rashondje geadopteerd kan worden, moet de hond eerst nog veel testen ondergaan en zal de kweker ook voor een goede thuis screenen. Als toekomstige hondeneigenaar word je heel erg nagecheckt, je moet een <a @click=${() => window.open('http://www.jehondopvoeden.com/?utm_source=Hondencentrum%20;Aweber&utm_medium=link%20;in%20;artikel&utm_content=rashond&utm_campaign=hondencentrum%20;artikel%20;Aweber', '_blank')} href="">puppycursus</a> gevolgd hebben en kunnen aantonen dat je een goede een goed beveiligde achtertuin hebt. </p>
        <h3>Honden van een gemengd ras</h3>
        <p>
          Honden van een gemengd ras kunnen vatbaarder zijn voor ziektes omdat zij niet zo goed gecontroleerd worden als echte rashonden. Vaak zijn honden van gemengde rassen eigenlijk ongelukjes dus worden ze niet zo goed nagekeken. <br>  
          Let wel op dat je een hond koopt van een erkende kweker, anders betaal je een hoop geld voor allemaal onderzoeken die zogezegd gebeurd zijn maar nooit echt uitgevoerd werden. Ook bestaat er dan een kans dat de honden niet in goede gezondheid verkeren en je ook veel dierenartskosten krijgt. 
        </p>
                `}
      ></info-element>
      <info-element
      headline="Honden met obesitas"
      subline="Overgewicht bij honden"
      icon="info"
      .content=${html`
        <p>In de Verenigde Staten alleen al kampt ongeveer de helft van alle honden met overgewicht. Meer nog, uit wetenschappelijk onderzoek blijkt dat maar liefst 30 tot 40 percent van alle honden uit onze Westerse wereld te zwaar is. Deze cijfers zijn zonder meer verontrustend, want net zoals bij mensen kan obesitas bij honden voor serieuze gezondheidsproblemen zorgen. Maar wat is obesitas bij honden eigenlijk? Hieronder schetsen wij twee minder voor de hand liggende verklaringen voor hondenzwaarlijvigheid.</p>
        <h3>Obesitas?</h3>
        <p>Miljoenen mensen over de hele wereld sukkelen met een of andere vorm van obesitas. Obesitas betekent letterlijk dat overtollig vet zich ophoopt in het lichaam, als gevolg van de opname van meer calorieën dan dat er calorieën worden verbruikt. Dat deze aandoening geen pretje is voor de persoon in kwestie, staat vast. Het is immers algemeen geweten dat ernstige zwaarlijvigheid absoluut niet gezond is voor je lichaam. Hartziekten, bewegingsproblemen, suikerziekte, verhoogde cholesterol, onvruchtbaarheid, rugklachten en een te hoge bloeddruk zijn maar enkele voorbeelden van de vele aandoeningen die een gevolg kunnen zijn van obesitas. Het aantal mensen dat onder zwaarlijvigheid lijdt, stijgt bovendien nog elk jaar. Ook bij honden komt overgewicht steeds vaker voor. Viervoeters met obesitas krijgen vaak af te rekenen met hartproblemen, leveraandoeningen, nierziekten en gewrichtsproblemen.</p>
        <h3>Wolven en de stofwisseling: een eerste verklaring voor hondenobesitas</h3>
        <p>Het zou te gemakkelijk zijn om te besluiten dat elke hond met obesitas simpelweg te veel voedsel krijgt van zijn of haar baasje. Natuurlijk helpt het niet om je huisdier elke dag opnieuw te verwennen met ongezonde tussendoortjes, maar er zijn andere verklaringen mogelijk voor zwaarlijvigheid. Ten eerste heeft obesitas bij honden soms te maken met de stofwisseling van de dieren. De stofwisseling van onze viervoeters is immers nog altijd erg vergelijkbaar met die van wolven. Wolven leven in het wild en dus zijn hun lichamen er op voorzien om zeer efficiënt vetreserves op te slaan. Een wolf weet immers niet wanneer hij een volgende prooi zal verschalken, en bijgevolg moet elke bruikbare voedselreserve opgeslagen worden voor mogelijke magere tijden. Honden die bij jou in huis leven hebben een gelijkaardige stofwisseling en daar ligt net het probleem. Wanneer je viervoeter bijvoorbeeld elke dag zijn extra tussendoortje aangeboden krijgt, weet zijn lichaam niet dat er de volgende dag weer voldoende voedsel zal zijn. Een natuurlijke reactie is dan ook dat de extra vetreserves opgeslagen worden, terwijl dit eigenlijk helemaal niet nodig is. Wanneer je dan bovendien een hond hebt die vaak binnen zit en relatief weinig beweegt, is het logisch dat het dier na korte tijd zwaarlijvig is.</p>
        <h3>Het verschil tussen lichamelijke en geestelijke honger: een tweede verklaring</h3>
        <p>Een tweede mogelijke verklaring voor hondenobesitas is het verschil tussen de lichamelijke honger van uw hond enerzijds en de geestelijke honger van het dier anderzijds. De lichamelijke honger is eigenlijk de gewone honger. Bij lichamelijke honger heeft je viervoeter immers nood aan voedsel, oftewel omdat de maag leeg is oftewel omdat er te weinig energie in het lichaam aanwezig is. Wanneer je jouw huisdier een normale portie eten geeft omdat hij of zij lijdt onder lichamelijke honger, is de kans op obesitas eigenlijk niet aanwezig. Daartegenover staat echter geestelijke honger en daarbij liggen de zaken anders. Net zoals wolven voelen ook honden vlak na de maaltijd, of zelfs een langere tijd erna, de behoefte om ergens op te kauwen. Vroeger dacht men dat de viervoeters dit kauwgedrag vertoonden om speeksel te produceren of om hun tanden schoon te maken. Nu weet men echter dat honden kauwen omdat er daardoor in hun lichaam endorfine vrijkomen. Deze endorfine zorgen voor een gevoel van rust en ontspanning, maar verminderen daarnaast ook de agressie en de angst bij de dieren. Indien je als hondeneigenaar niet beschikt over voorwerpen waarop je viervoeter kan kauwen zonder ze op te eten, zal het dier bij jou komen smeken voor voedsel om op te kauwen. Wanneer je als baasje vervolgens toegeeft aan de geestelijke honger en jij je huisdier na de maaltijd toch nog iets lekkers toestopt, verorbert je hond eigenlijk meer voedsel dan nodig. Daarin schuilt natuurlijk een tweede minder voor de hand liggende verklaring voor zwaarlijvigheid bij honden.</p>
                `}
      ></info-element>
      <info-element
      headline="Ontdek de speurneus van je hond"
      subline="Gratis E-Boek"
      icon="info"
      @click=${() => window.open('https://digidog.nl/gratis-ebook-speurenmetjehond/', '_blank')}
      ></info-element>
      <info-element
      headline="Hoe kies je een dierenarts?"
      icon="info"
      .content=${html`
        <p>Een dierenarts is heel erg belangrijk, hij of zij zorgt ervoor dat je huisdier weer gezond wordt wanneer het ziek is. Het is handig om, voordat je een huisdier aanschaft, een dierenarts te vinden die alle inentingen in orde kan maken en kan kijken of er niets mis is met het dier dat je gekocht hebt. Een goede dierenarts vinden is heel erg belangrijk en kan ook redelijk moeilijk zijn: net als een huisarts, heeft een dierenarts een bepaalde manier van werken die jou misschien niet aanstaat. Is de dierenarts misschien te ongevoelig of heb je er gewoon geen goed gevoel bij? </p>

        <h3>Een paar handige tips om een goede dierenarts te vinden:</h3>
        <ul>
          <li>Vraag het eens na bij buren, kennissen en vrienden . Hebben zij een goede dierenarts en zijn ze er heel tevreden over? Behandelt hij de dieren goed en is hij te bereiken wanneer je hem nodig hebt? Legt de dierenarts goed uit wat er gaat gebeuren als er bijvoorbeeld geopereerd gaat worden of wanneer het dier ziek is? Legt hij goed uit hoe je het dier verder moet behandelen wanneer het weer thuis is? Vergeet je instinct niet: wanneer je echt een slecht gevoel hebt bij een dierenarts, ga er dan niet meer naartoe. De dierenarts mag niet alleen sympathiek zijn voor de dieren, maar ook voor de eigenaars van de dieren. Als het niet klikt, ga dan niet terug, ook al heeft de dierenarts zo’n goede reputatie. </li>
          <li>Hebben ze ook een bepaalde regeling voor spoedeisende hulp? Bieden ze wel spoedeisende hulp aan? Ongelukken met huisdieren gebeuren bijna nooit tijdens de uren dat de dierenarts in zijn praktijk zit. En wat gebeurt er als je huisdier nog een nachtje bij de dierenarts moet blijven? Is er dan iemand die erbij blijft?</li>
          <li>Zoek een dierenarts die in de buurt woont: voor dieren is het heel stresserend om naar een vreemde plaats te gaan, als je er dan voor kan zorgen dat je de reistijd minder lang kan maken, is dat zeker meegenomen.</li>
          <li>Kijk ook na hoe het exact zit met dingen als een dierenverzekering, betalen in delen,…</li>
        </ul>
                `}
      ></info-element>
      <info-element
      headline="Trekspelletjes"
      subline="Wie trekt aan het langste eind?"
      icon="info"
      .content=${html`
        <p>Heel wat honden zijn gek op vecht- en krachtspelletjes. Touwtrekken is daar één van. Niet iedereen is echter overtuigd van de waarde van het spel. Het zou agressief en dominant gedrag uitlokken. Nochtans is touwtrekken op alle vlak een goede oefening voor je hond. Bovendien is het een leuke manier om de band met je viervoeter te versterken.</p>
        <p>Onderstaande regels neem je best in acht. Zo loopt het spel niet uit de hand en kan de pret niet meer stuk!</p>
        <ol>
          <li>Leer je hond eerst en vooral een commando aan, waarop hij het speeltje moet loslaten, zoals “los”. Zo kun je het spel stoppen indien nodig.</li>
          <li>Kies een stevig en flexibel speeltje. Speeltjes gemaakt uit stevig rubber met handvat zijn hiervoor ideaal. Op deze manier kan je hand uit de burt van de mond van je hond blijven.</li>
          <li>Kies voor een ruime speelzone zonder afleiding, gevaarlijke voorwerpen of rommel. Buiten is ideaal, maar ook binnen kun je ook touwtrekken als er voldoende ruimte is</li>
          <li>Tijdens het spel kan je hond opgewonden geraken en grommen. Dit is volstrekt normaal. Het spel speelt immers in op zijn jagersinstinct. Hou dit toch in de gaten. Als zij staart kwispelt dan is er geen probleem. Twijfel je en lijkt je hond niet zo vrolijk meer, neem dan zeker een pauze.</li>
          <li>Wil je pauzeren? Stop dan met trekken en zeg “los”. Neem even de tijd om wat basiscommando’s te geven, zoals “zit” en “lig”. Lijkt je hond ontspannen dan kun je het spel hervatten</li>
          <li>Als je hond tijdens het spel (onbewust) bijt, stop dan onmiddellijk. Zeg “los”, neem het speeltje en ga weg. Lijkt je hond vrij kalm, dan kun je hem wat basiscommando’s geven en het sel hervatten. Maakt je hond echter twee of drie keer opnieuw dezelfde fout, stop het spel dan voor de hele dag. Door de aard van het spel kan het gebeuren dat zijn tanden langs je hand schrapen, maar op die manier zal je hond beseffen dat hij extra voorzichtig moet zijn met zijn tanden.</li>
          <li>Je hond mag op het eind zeker winnen. Zo krijgt hij meer zelfvertrouwen. Als hij zich echter slecht gedraagt, dan moet jij winnen</li>
          <li>Honden kunnen ook onderling touwtrekken. Een ‘scheidsrechter’ is hier dan nodig om de bovenstaande regels toe te passen</li>
        </ol>
        <p>Touwtrekken met je hond kan een prachtige ervaring zijn. Het is mentaal en fysiek een stimulans voor je hond maar ook jij krijgt er energie door. Hou de regels in je achterhoofd en laat jullie gaan!</p>
                `}
      ></info-element>
      <info-element
      headline="Je hond in bad"
      icon="info"
      .content=${html`
      <p>
        De gezondheid van je hond is erg belangrijk: je moet de hond gezond houden, de hond moet goed eten en de hond moet genoeg beweging krijgen op een dag. Een andere manier om ervoor te zorgen dat de hond in goede gezondheid blijft, is de hond in bad te doen. De hond in bad doen kan een hele klus zijn, zeker als de hond (of het nu een volwassen hond of een puppy is) het helemaal niet gewend is om in bad te gaan. En bovendien moet niet elke hond veel in bad.<br>
        In dit artikel bespreken we een paar vragen die vaak voorkomen bij baasjes die hun viervoeter in bad willen doen.
      </p>
      <h3>Hoe vaak moet de hond in bad?</h3>
      <p>
        Hoe vaak de hond in bad moet, hant heel erg af van het ras van de hond, de grootte en hoe actief de hond is. Doe je hond alleen in bad wanneer hij erg vies is, het is en blijft voor de hond een erg vervelende ervaring en het is voor hem dan ook fijn wanneer het baden tot een minimum beperkt kan worden. <br>
        Je mag een hond niet te vaak in bad doen, op die manier gaat hij alle natuurlijke oliën verliezen die normaal in de huid zitten. Zo krijgt de hond last van een pijnlijke en jeukende huid en dat moet je proberen te voorkomen. 
      </p>
      <h3>Waar kan ik de hond het best in bad doen?</h3>
      <p>
        Veel mensen doen de hond in bad in de tuin. Ze doen de hond in de tuin en maken de hond nat met de tuinslang. Het grote probleem met de tuinslang is dat de temperatuur niet constant blijft. Let er wel op dat de temperatuur fijn is voor de hond om in bad te gaan, te koud water is heel onaangenaam net als te warm water. <br>
        Als de hond niet te groot is, kan je hem ook in bad doen binnen. Daar hoef je je niet zoveel zorgen te maken over de temperatuur van het water en de temperatuur van het water omdat dat beter te regelen valt. 
      </p>
      <h3>Worstelen met de hond om hem in bad te krijgen?</h3>
      <p>Veel mensen hebben dit probleem: de hond is te groot of te snel en rent snel het bad uit als hij kan. Sommige hondeneigenaren lossen dit probleem op door een speciaal hondenbad te kopen waardoor de hond niet weg dan. Soms kan de hond ook vastgehouden worden om jezelf en de hond zelf te beschermen. </p>
      <p>Pas op met het wassen van het hoofd als de hond dat nog niet gewend is. De hond kan dan erg terughoudend zijn.</p>

                `}
      ></info-element>
      <info-element
      headline="Chocolade"
      subline="Kan chocolade dodelijk zijn voor je hond?"
      icon="info"
      .content=${html`
      <p>Je weet het of je weet het niet, maar chocolade kan inderdaad dodelijk zijn voor je hond. Ondanks honden veelal wel verlekkerd zijn op de smaak van chocolade, blijft het eten ervan niet zonder risico’s. De gevolgen kunnen zelfs zo ernstig zijn dat ze kunnen resulteren in een overlijden. Wij leggen je graag uit waarom je deze zoetigheid te allen tijde voor je viervoeter moet vermijden.</p>
      <h3>Hoeveel chocolade je hond mag eten</h3>
      <p>Uiteraard luidt het -meest voor de hand liggende- antwoord hierop: geen. Voorkomen is beter dan genezen, en dat geldt zeker en vast ook in dit geval. Het is natuurlijk ook wel zo dat, wanneer je je hond nietsvermoedend toch een stukje chocolade geeft, dit niet meteen een doodsoorzaak hoeft te zijn. Toch blijft het uitkijken geblazen, want het is immers niet alleen de omvang van het stukje chocolade dat een risicobepalende factor is. De reactie van de hond zal ook afhankelijk zijn van de gevoeligheid van de hond zelf, zijn grootte en het concentratiegehalte van de chocolade. Wat wel algemeen geweten is, is dat de meeste honden al een erg grote dosis chocolade ( bijvoorbeeld: een reep van 200gr.) moeten verorberen vooraleer ze zwaar ziek worden.</p>
      <h3>Waarom je hond geen chocolade mag eten</h3>
      <p>In chocolade zit de stof theobromine. Deze stf werkt bij mensen in op de gemoedstoestand. Honden verdragen deze stof echter niet omdat hun metabolisme dit niet snel genoeg kan afbreken. De theobromine kan tot 20 uur in hun bloed blijven circuleren en zodanig hartinfarcten veroorzaken. Ook epileptische aanvallen, krampen, een hoge hartslag en in het ergste geval de dood kunnen de gevolgen zijn van een theobrominevergiftiging. </p>
      <h3>Wat te doen bij theobrominevergiftiging</h3>
      <p>Hoe sneller je erbij bent, hoe beter. Voor deze vergiftiging bestaat immers geen geneesmiddel of tegengif. Hoe langer het gif in het lichaam van de hond blijft, hoe groter de kans wordt dat de hartspieren van de hond volledig verlamd zullen raken. Het is dus de kwestie van het gif zo snel mogelijk uit het lichaam van de hond te halen. Dit kun je bereiken door de hond te laten braken. Hiervoor kan je een schepje zout in zijn keel brengen (maar dit raden we eigenlijk niet aan). De beste optie is echter je hond naar de dierenarts brengen voor een maagspoeling. </p>
                `}
      ></info-element>
      <info-element
      headline="Nieuwe puppy"
      subline="De komst van je nieuwe puppy vraagt voorbereiding."
      icon="info"
      .content=${html`
        <p>Waarschijnlijk ben je al enthousiast voor de komst van je nieuwe puppy. Vergeet echter niet dat voorbereiding enorm belangrijk is. Je kunt je puppy het best vergelijken met een peuter. Inspecteer je huis en tuin in alle hoeken en kanten. Net als peuters lijkt alles hen interessant. Ze kunnen de gevaarlijke zaken niet onderscheiden van onschuldige dingen. Op die manier kunnen er domme ongelukjes gebeuren, maar met grote gevolgen. </p>
        <h3>Enkele tips:</h3>
        <ul>
          <li>
            De tuin:
            <ul>
              <li>Is je voortuin en je tuin goed omheind? Zijn er geen grote gaten waardoor je puppy kan ontsnappen of waarin hij eventueel zelfs vast zitten?</li>
              <li>Staat je vuilnis veilig weg? Zorg ervoor dat je hond geen dingen kan eten die hem ziek maen.</li>
              <li>Let er ook goed op waar je je tuin met pesticiden behandelt. Hou je puppy uit de buurt van die zones.</li>
              <li>Zet alle chemische en schadelijke producten op een plaats waar je hond niet bij kan.</li>
            </ul>
          </li>
          <li>
            Je huis:
              <ul>
                <li>Leg alle elektrische kabels in een ruimte waar je hond niet bij kan, of verstop ze onder het tapijt. Pas op dat je puppy niet gaat kauwen op kabels.</li>
                <li>Net als een peuter, vindt je puppy alles interessant en zal overal op onderzoek gaan. Zelfs kasten zijn niet meer veilig! Denk er misschien aan om kindeslotjes op de deuren te plaatsen.</li>
                <li>Heb je trappen in je huis? Zorg dan voor peuterhekjes! Je puppy zou wel eens, in een van zijn heftige loopbuien, van de trap kunnen vallen. Puppies snappen vaak nog niet het gevaar van een rap.</li>
                <li>Je hond groeit sneller dan een peuter. Zie hem als een deel van de familie. Maak een bedje voor hem en plaats het ergens waar hij zich nu en later veilig en comfortabel zal voelen</li>
                <li>Je huis klaar maken voor de komst van een puppy vraagt veel tijd en werk. Als de puppy er al is, maar je huis nog niet in orde is, denk er dan aan om een speelbox voor hem te plaatsen. Dar kan hij spelen en jij hoeft je geen zorgen te maken over je meubels of andere dingen.</li>
              </ul>
          </li>
        </ul>
        <p>Tot slot, en essentieel: Je puppy heeft veel liefde, knuffels en aandacht nodig! Dit is sowieso de basis van een warme thuis. </p>
                `}
      ></info-element>
      <info-element
      headline=""
      icon="info"
      .content=${html`
                `}
      ></info-element>
      <info-element
      headline=""
      icon="info"
      .content=${html`
                `}
      ></info-element>
      <info-element
      headline=""
      icon="info"
      .content=${html`
                `}
      ></info-element>
      <info-element
      headline=""
      icon="info"
      .content=${html`
                `}
      ></info-element>
      <info-element
      headline=""
      icon="info"
      .content=${html`
                `}
      ></info-element>
    </flex-container>
    `
  }
}
