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
        position:relative;
        flex-flow: row wrap;
        max-width: 1024px;
        gap:12px;
        height:100%;
        margin: 0 auto;
        justify-content: center;
        align-items:stretch;
      }
      #scrollcontainer {
        width:100%;
        overflow: auto;
      }
    `
  ]

  render() {
    return html`
    <div id="scrollcontainer">
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
        headline="Junior wordt Senior"
        subline="Hoe verzorg ik mijn ouder wordende hond?"
        icon="info"
        .content=${html`
                <p>We wensen onze hond natuurlijk allemaal een zo lang en gelukkig mogelijk leven toe. Doordat onze kennis op het vlak van gezondheid veel groter is dan vroeger, neemt ook bij honden de levensverwachting toe. Toch is dit niet zo vanzelfsprekend als het lijkt. Een ouder wordende hond heeft namelijk hele andere noden en behoeften dan een puppy. In ruil voor de liefde die we door de jaren heen van onze hond hebben gekregen, is het nu aan ons om onze hond de verzorging te geven die hij nodig heeft.</p>
                <h3>Hoe kun je merken dat je hond ouder begint te worden?</h3>
                <p>Net zoals mensen krijgen ook honden vanaf een bepaalde leeftijd grijze haren, sommige rassen al vroeger dan andere. Ook wordt hun huid minder elastisch en kan die een beetje vettig gaan aanvoelen. Hun botten en spieren verliezen hun soepelheid, waardoor de hond iets rustiger wordt: hij is minder speels, hij loopt niet zo snel de trap meer op, springt minder in de zetel, enzovoort. Het zal beginnen opvallen dat hij zich vaker uitrekt dan vroeger en dat het hem meer tijd kost om wakker te worden. Zijn tanden kunnen los gaan staan en ook zijn nagels worden langer. Hoe ouder de hond wordt, hoe groter de kans op hart- en leverproblemen. Het is belangrijk dat wij als liefhebbende baasjes zoveel mogelijk ons best doen om onze verzorging aan te passen aan de nieuwe behoeften van onze ouder wordende hond.</p>
                <h3>Wat kan ik doen om mijn hond te helpen?</h3>
                <p>
                  Voor honden vanaf 7 jaar bestaat speciaal hndenvoer (meestal aangegeven met ‘senior’) dat aangepast is aan de behoeften van een oudere hond. Aangezien honden op leeftijd minder bewegen dan hun jongere soortgenoten, is het ook belangrijk dat de hoeveelheid eten die ze krijgen vermindert, anders worden ze te dik.<br >
                  Om te zorgen dat je er op tijd bij bent als er toch iets aan de hand zou zijn, kun je wekelijks zelf een onderzoekje doen bij je hond. Bij dit onderzoek meet je zijn temperatuur, het aantal hartslagen en het aantal keer dat hij inademt per minuut. Ook controleer je of zijn tanden, ogen, voetzolen en huid er goed uit zien. De resultaten hou je elke week bij, zodat je direct kan zien of er iets aan zijn toestand veranderd is. Het beste kun je op voorhand eens bij de dierenarts langsgaan om te vragen wat de normale waarden zijn voor jouw type hond.
                </p>
                  `}
        ></info-element>
        <info-element
        headline="Ben jij de geschikte hondeneigenaar?"
        icon="info"
        .content=${html`
                  <p>Niemand kan een nestje schattige kleine puppy’s weerstaan. Je kan echter niet impulsief zijn als het aankomt op de aanschaf van een huisdier. Je gaat een levenslange verbintenis aan en je zal je dagelijks met je hond moeten bezighouden. Daarom is het nodig om eens stil te staan bij de volgende zaken.</p>
                  <h3>Ben ik wel geschikt?</h3>
                  <p>
                    Hou er zeker rekening mee dat je elke dag tijd zal moeten vrijmaken om met je trouwe viervoeter om te gaan. Als je die tijd niet hebt, of niet kan opbrengen, ben je sowieso al niet geschikt. <strong>Voor een hond zorgen gaat veel verder dan hem alleen maar overstelpen met liefde.</strong><br >
                    Daarnaast is er ook een prijskaartje dat eraan vast hangt, de basisuitgaven voor een hond kunnen uiteenlopen van € 500 tot € 20.000 per jaar. Dat verschilt natuurlijk van persoon tot persoon en van ras tot ras. Hou er ook rekening mee dat ook je hond ziek kan worden, en een bezoek aan de dierenarts soms onvoorspelbaar kan zijn! Het is mogelijk om een huisdierenverzekering af te sluiten om deze onverwachte kosten te dekken.
                  </p>                  
                  <h3>Wat met mijn gezondheid?</h3>
                  <p>Als je last hebt van chronische aandoeningen of blessures, dan kan je hier hinder van ondervinden wanneer je voor je hond zorgt. Is er misschien iemand anders die voor de hond kan zorgen als dat nodig is?</p>                   
                  <h3>Allergisch?</h3>
                  <p>Een allergie kan zorgen voor ernstige gezondheidsproblemen en zelfs ertoe lijden dat je daarom je hond moet afstaan. Als jij of iemand in het gezin lijdt aan een hondenallergie, oordeel dan eerst in hoeverre je om kunt gaan met de symptomen. Het is namelijk erg jammer als je de hond afstaat terwijl je de allergie kunt vermijden. Als je invalide bent, is het een goed idee om een speciale assistentiehond aan te schaffen. Hiermee sla je dus twee vliegen in één klap; en een leuk gezelschap en een goede hulp!</p>                   
                  <h3>Is mijn omgeving geschikt?</h3>
                  <p>
                    Kan ik van mijn huis een goede omgeving voor mijn hond maken? Is mijn huis al geschikt voor een huisdier? Sommige honden hebben veel ruimte nodig en spelen enorm graag buiten. Woon je dus op een appartement en ben je niet vaak thuis, dan is een erg actieve hond waarschijnlijk niets voor jou.<br>
                    Daarnaast moet je interieur ook geschikt zijn voor je hond, want ze durven nogal wat als het aankomt op het vinden van allerlei lekkers. Het zou absurd zijn om te verwachten dat je hond al automatisch weet wat hij mag en wat niet. 
                  </p>                  
                  <h3>Kan ik tijd maken voor mijn hond?</h3>
                  <p>Als je lange dagen moet werken of veel moet reizen dan kan je beter geen hond aanschaffen. Uiteraard is een sociaal leven belangrijk voor mensen, maar bedenk alvorens je een hond aanschaft of je al dan niet aanpassingen wil maken in functie van de hond. Indien je hier nog niet aan toe bent, is het beter om pas later een hond in huis te halen. Weeg ook de tijd af die je dient te steken in training, verzorging, beweging en dierenartsverzorging. Als je hier grondig over nagedacht hebt, kan je overgaan tot de aankoop van een hond.</p>
                  `}
        ></info-element>
        <info-element
        headline="Wachten, Auto & Trappen"
        icon="info"
        .content=${html`
                  <h3>Wachten</h3>
                  <p>
                    In het dagelijks leven is het heel belangrijk dat je hond niet wild overal heen loopt. Dit geldt binnenshuis, maar in grotere mate buitenshuis, vooral in het openbaar en het verkeer.<br> 
                    Het is daarom belangrijk dat u uw hond de gewoonte aanleert om te wachten tenzij je het "Volg" commando geeft. <br>
                    Begin bij de deur. Het is voor een hond vrijwel automatisch dat hij een deur inloopt als hij opengaat. Het doel van deze truc is om hem te laten wachten tot u het Volg commando geeft. <br>
                    Zeg dus eerst consequent Blijf voordat u de deur opent. Als hij vervolgens blijf zitten, beloont u hem. Als u daarna het Volg commando geeft en hij loopt achter u aan, dan beloont u hem weer. Herhaal dit totdat de hond automatisch wacht tot u het Volg commando geeft, ook als u niet het Blijf commando gebruikt terwijl u de deur opent. <br>
                    Hetzelfde moet gelden in het verkeer. De hond mag pas volgen als u het commando geeft: Hij mag nooit uit zichzelf gaan lopen of automatisch met u meelopen. Hij wacht tot u het commando geeft.
                  </p>
                  <h3>In de Auto</h3>
                  <p>
                    Voor deze truc gebruiken we het "Hup!" commando. <br>
                    Ga naar de rechterkant van de auto. Het doel is om hem achterin te laten zitten, schuin achter de bestuurder zodat hij u niet kan lastig vallen of af kan leiden tijdens het rijden. U kan zo ook beter in uw achteruitkijk spiegel kijken. <br>
                    Laat hem eerst wachten bij de autodeur, en doe de deur open. Hij moet blijven zitten totdat u het "Hup" commando geeft. Als hij bij dit commando de auto ingaat, beloon hem dan met een snack/aai en de Clicker. <br>
                    Zorg als laatste dat het raam niet te ver openstaat: Hij moet er absoluut niet te ver uit kunnen hangen. Halverwege is meer dan voldoende. <br>
                  </p>
                  <h3>Trappen</h3>
                  <p>
                    Honden, net als kleine kinderen, hebben vaak de neiging om hard de trap op en af te rennen. <br>
                    Om dit (gevaarlijke) gedrag te voorkomen gebruiken we het "Rustig" commando. Geef dit commando in een sterke, langzame toon. U kunt met dit commando oefenen als u hem uitlaat en hij aan de riem trekt - zo leert hij alvast wat u met dit commando bedoelt. <br>
                    Als hij het commando begrijpt op straat kan u gaan oefenen op de trap. 
                  </p>
                  <ul>
                    <li>Laat hem op de eerste trede klimmen en laat hem vervolgens wachten. </li>
                    <li>Laat hem op de tweede trede klimmen en laat hem daar ook even zitten. </li>
                    <li>Ga hiermee door maar doe het nu 2 treden tegelijk, en daarna 3. Oefen het een paar keer. </li>
                    <li>Laat hem vervolgens rustig de trap op en aflopen. Iedere keer als hij sneller wil, zegt u "Ruuuustig!"</li>
                  </ul>
                 `}
        ></info-element>
        <info-element
        headline="Het juiste huisdier is daarom nog niet je beste vriend…"
        icon="info"
        .content=${html`
                    <p>Overal ter wereld worden honden gekweekt. Niets verkeerd natuurlijk, al is de laatste jaren de vraag naar honden ‘op bestelling’ gestegen. Mensen hebben een ideaalbeeld van een hond voor ogen en kwekers doen er alles aan om aan dit beeld te beantwoorden. De gekste rassen worden gekweekt: grote honden met kleine pootjes, kleine hondjes met grote oren, … echt alles is mogelijk geworden. Eigenlijk mag je jouw hond niet alleen beoordelen op zijn uiterlijk. Ook bij dieren zit de ware en echte schoonheid soms binnenin verscholen. Laat je daarom niet vangen aan al die commerciële bastaarden. Je bent toch immers meer op zoek naar een (h)echte vriend dan naar een pronkstuk?</p>
                    <h3>Maak je huiswerk</h3>
                    <p>
                      Voor je echt intensief op zoek gaat naar een hond, moet je zeker je huiswerk gedaan hebben. Welke hond je zoekt hangt af van veel verschillende factoren. Je thuissituatie, of je kinderen hebt of niet, hoeveel tijd je kan besteden en nog veel meer dingen. Probeer je daarom goed op voorhand in te lichten over in welke richting je moet zoeken. Beperk je zoektocht tot enkele geschikte rassen. Je raakt immers snel emotioneel gehecht aan een hond. Het risico dat je thuiskomt met een diertje dat eigenlijk niet bij je past is daarom erg groot.<br>
                      Je moet zeker tijdens je zoektocht eens langsgaan bij het asiel. Je stelt een enorm goede daad door in de steek gelaten beestjes een tweede kans te geven. Hoewel ze in het begin veel tijd en aandacht vragen, zullen ze al je inspanningen ruimschoots terugbetalen met bakken gemeende liefde.
                    </p>
                    <h3>Puppy's worden groot</h3>
                    <p>
                      Iedereen wordt ook dadelijk verliefd op een puppy, zelfs al bij de eerste aanblik. Puppy’s zijn ook lief en knuffelbaar, dat zeker, maar veel mensen vergeten dat een puppy enorm veel werk met zich meebrengt. Je moet hem alles nog leren en daar kruipt zeer veel tijd en energie in.<br>
                      Ook wanneer je niet goed meer te been bent en je op zoek bent naar een hond die jou vooral binnenshuis moet gezelschap brengen, is een puppy geen goed idee. Puppy’s moeten in hun eerste maanden zo veel als mogelijk in contact komen met andere mensen en andere honden. Ze moeten hun sociale vaardigheden aanscherpen, zowel tegenover mensen als tegenover soortgenoten. Zeker tijdens de eerste 5 maanden van hun leven is dit noodzakelijk. Wanneer ze onthouden worden van contacten met anderen, kan dit leiden tot onvoorspelbaar gedrag. <br>
                      De beste omgeving om in contact te komen met andere honden is de hondenschool, maak er dus zeker gebruik. 
                    </p>

                  `}
        ></info-element>
        <info-element
        headline="Zwangerschap bij je hond"
        icon="info"
        .content=${html`
                  <p>Wanneer je merkt dat je hond zwanger is en je weet dat er een nest puppy’s gaat aankomen, ben je meestal allereerst verheugd met dit nieuws. Een nest puppy’s is leuk en ongelofelijk schattig. Maar er komt ook veel werk bij kijken, zorg dus dat je voorbereid aan de taak begint.</p>
                  <h3>De zwangerschap</h3>
                  <p>
                    De zwangerschap van een hond duurt ongeveer 60 dagen. De tijd om je voor te bereiden is dus relatief miniem. Allereerst moet je ervoor zorgen dat je hond voldoende eet. Tijdens de zwangerschap zal je hond meer eten. Het is jouw verantwoordelijkheid om ervoor te zorgen dat de voeding voldoende voedzaam en gevarieerd is. <br>
                    Je houdt je hond ook best in de gaten. Symptomen als ochtendmisselijkheid of constipatieproblemen kunnen ook bij honden optreden. Daarom is het belangrijk dat je samen met je dierenarts overlegt wat je hond precies mag of moet eten.
                  </p>
                  <h3>Vak voor de bevalling</h3>
                  <p>
                    Je kan tot enkele weken voor de bevalling je hond nog vrijwel alles laten doen. Fysiek of sportief zware inspanningen zijn natuurlijk altijd afgeraden tijdens de zwangerschap. Veel dierenartsen raden wel aan om de hond vanaf 3 weken voor de zwangerschap niet meer in de buurt te laten komen van andere honden. Deze incubatieperiode houd je best aan tot ongeveer 3 weken na de zwangerschap. Volwassen honden kunnen namelijk ziektes met zich mee dragen die voor hen ongevaarlijk zijn maar voor puppy’s wel dodelijk kunnen zijn.<br>
                    Zorg ook voor een goede afgedekte plaats waar je hond kan bevallen. In deze plaats kunnen de pups dan de eerste weken van hun leven doorbrengen. Zorg ervoor dat de moederhond de plek kan verlaten maar de pups niet, een omwalling van een halve meter is meestal voldoende.
                  </p>
                  <h3>De bevalling</h3>
                  <p>
                    Wanneer je hond bijna klaar is om te bevallen, zakt haar lichaamstemperatuur lichtjes. Je kan dit opvolgen met een thermometer. Van zodra de temperatuur verlaagt, zal je hond binnen de 24 uur bevallen. <br>
                    Als de bevalling begint, moet je ervoor zorgen dat je hond voldoende water ter beschikking krijgt. Van zodra de pups geboren worden, moet je erop letten dat de moeder de pups schoonlikt. Indien dit niet gebeurt, moet je het zelf doen. Want de puppy’s zullen stikken als ze niet uit hun vlies bevrijd worden. <br>
                    De tussentijd tussen 2 puppy’s duurt meestal 30 tot 60 minuten. Het is ook mogelijk dat de moeder enkele uren rust neemt tijdens de bevalling.<br>
                    Wanneer er problemen optreden moet je zo snel mogelijk de dierenarts erbij halen. Er kunnen, net als bij mensen, altijd problemen voorkomen maar meestal gebeurt alles vlot en normaal.
                  </p>
                  `}
        ></info-element>
        <info-element
        headline="Agressieve honden"
        icon="info"
        .content=${html`
                    <p>Er heeft vast al eens een hond naar je gegromd. Misschien heeft er ooit al eens een hond geprobeerd je te bijten. Agressie bij honden kan voor ons mensen serieuze gevolgen hebben. Als jouw hond naar jou blaft, gromt of bijt, ga dan naar de dierenarts. Die kan je vertellen wat de oorzaak van de agressie bij je hond is en kan je ook vertellen wat je ertegen kan doen. Vaak hoef je het gedrag namelijk alleen maar consequent af te leren.</p>
                    <h3>Soorten agressie bij honden:</h3>
                    <ul>
                      <li>agressie tussen honden onderling zonder externe oorzaak</li>
                      <li>agressie die veroorzaakt wordt doordat de hond iemand zijn territorium ziet betreden</li>
                      <li>agressie als een gevolg van competitief gedrag, zoals wanneer honden de hiërarchie onderling willen bepalen.</li>
                      <li>agressie waarbij een persoon wordt aangevallen omdat de hond zijn baasje de baas wil zijn</li>
                      <li>agressie die door medicatie wordt veroorzaakt</li>
                      <li>agressie die door een slechte medische toestand ontstaat (zoals bij epilepsie het geval wil zijn)</li>
                      <li>agressie als uiting van angst, waarbij de hond denkt dat hij moet vechten voor zijn leven. Deze vorm van agressie kan je makkelijk herkennen doordat de hond wel agressief reageert maar tegelijkertijd een houding aanneemt die zijn angst verraadt (zo is de staat vaak tussen de benen).</li>
                      <li>agressie die voortkomt uit de angst dat voedsel gestolen gaat worden. De hond vergeet soms dat het baasje eten geeft en niet wil afpakken, waardoor het diertje wel eens wil aanvallen.</li>
                      <li>agressie die wordt veroorzaakt door een slecht leven waardoor de hond, die als puppy bijvoorbeeld helemaal vereenzaamd was, vreemd reageert op onbekende situaties.</li>
                      <li>agressie die de hond toont omdat het beestje ergens pijn heeft</li>
                      <li>agressie van een teefje om haar puppy's te beschermen</li>
                      <li>agressie die dient om het baasje te beschermen</li>
                      <li>agressie als het gevolg van te enthousiast ravotten</li>
                      <li>aangeleerde agressie die voorkomt bij honden die niet goed genoeg weten wie ze wel en wie ze niet moeten bijten</li>
                      <li>onbedoeld aangeleerde agressie waarbij de hond beloond is door het baasje als het beestje agressief is geweest. Waar het baasje de hond wil kalmeren met een snoepje of iets dergelijks, daar leert hij de hond eigenlijk dat het agressieve gedrag goed is.</li>
                    </ul>
                    <h3>Agressie, wat nu?</h3>
                    <p>Het is beter als je er vroeg bij bent en direct ingrijpt wanneer een hond agressief gedrag vertoont. Zorg er vooral voor dat je het agressieve gedrag op een juiste manier afleert. Dat is natuurlijk makkelijker gezegd dan gedaan. Zoals bij het laatste type van agressie bij honden aantoont, hebben mensen snel goede bedoelingen met hun hond maar verkrijgen ze in werkelijkheid een averechts effect. Door het beestje bewust te maken van zijn positie en hem consequent een verwachtingspatroon voor te houden (voor wie en wanneer moet hij of zij op zijn hoede zijn?) zal het beestje zijn agressie snel achterwege laten. Om het diertje goed af te richten kan je zoals gezegd het beste naar de dierenarts/gedragstherapeut gaan. Die zal je kunnen zeggen hoe je van je boze of bange hond weer een blije viervoeter kan maken.</p>
                  `}
        ></info-element>
        <info-element
        headline="Een hond uit het asiel kiezen?"
        icon="info"
        .content=${html`
            <p>Vaak stellen mensen zich de vraag of ze een hond uit het asiel zouden halen en of het misschien beter is om een rashond te kopen. Het is eigenlijk niet slecht om een hond uit een asiel te adopteren, meestal zijn de honden daar omdat ze afgedankt zijn door hun baasje en niet omdat ze een vervelend karakter hebben. Honden uit een asiel zijn vaak heel trouw en hebben veel liefde nodig. Als ze merken dat ze dat krijgen, zijn het vaak hele brave honden. Ook zijn ze vaak erg makkelijk om af te richten.</p>
            <h3>Tips voor de adoptie in gang te zetten</h3>
            <p>Hier volgen een paar tips om de adoptie zo goed mogelijk te laten verlopen:</p>
                    <ul>
                      <li>Ga op voorhand al eens met het hele gezin op bezoek bij het asiel. Zo ka iedereen in het gezin eens kijken naar de honden en kom je niet voor onaangename verrassingen te staan. Niet alleen het eerste bezoek zal veel ophelderen, ook een tweede bezoek is zeer aan te raden.</li>
                      <li>Mag je wel een hond houden als je een woning huurt? Kijk dit zeker even na, het kan je veel narigheid besparen.</li>
                      <li>Vraag dit ook zeker na als je met mensen samenwoont.</li>
                      <li>Is de hond gecastreerd of gesteriliseerd</li>
                      <li>Heeft de hond alle nodige inentingen gekregen?</li>
                      <li>Krijg je een boekje mee waarin alle vaccinaties staan?</li>
                      <li>Vaak zijn de honden in een asiel blootgesteld aan allerlei virussen omdat ze simpelweg geen geld hebben om alle dieren een uitgebreide medische zorg te geven. Laat dit zeker eens controleren door je eigen dierenarts voor je misschien kinderen of eventueel nog andere huisdieren in gevaar brengt.</li>
                      <li>Verken zo snel mogelijk de nieuwe buurt met de hond: hoe sneller de hond went, hoe beter.</li>
                      <li>Train de hond gelijk: laat hem zitten als hij kennismaakt met de andere leden van het gezin en geef hem een complimentje als hij plast in een gebied waar het mag. Je kan niet vroeg genoeg beginnen met het trainen van de hond, je zal er later alleen profijt van hebben.</li>
                      <li>Laat de hond kennismaken met het huis terwijl hij nog aan een leiband loopt. Zo laat je meteen zien wie de baas is en voorkom je brokken.</li>
                      <li>Geef de hond ook tijd om zichzelf aan te passen. Een nieuw huis en nieuwe baasjes kunnen erg stresserend zijn voor de hond en hij kan zelfs bang zijn voor deze nieuwe situatie. Na een paar weken zou dit opgelost moeten zijn. Routine is hierbij heel belangrijk</li>
                    </ul>
                  `}
        ></info-element>
        <info-element
        headline="Groenten op het menu?"
        icon="info"
        .content=${html`
                    <p>
                      Voor de meeste huisdieren vormen groenten een gezonde aanvulling om de maaltijden die vooral uit vlees bestaan. 
                      Hondachtigen zijn van nature uit eigenlijk eerder omnivoren dan carnivoren. Hun spijsverteringsstelsel kan perfect plantaardige voedingsstoffen verteren. Wolven eten ook vaak fruit of noten. Daarnaast eten wolven ook altijd eerst de maag van hun prooi op, deze bevat veel plantaardige resten.
                      Honden hebben nood aan een maaltijd die voor 30% uit groenten of fruit bestaat. Let er wel op dat fruit of groenten steeds worden gekookt en fijngehakt. Rauwe groenten zijn zeer slecht verteerbaar voor een hond.
                    </p>
                    <h3>Welke groenten of welk fruit gebruik je het best?</h3>
                    <p>
                      Gebruik geen granen. Geen enkele soort is geschikt als voeding voor zowel katten als honden. <br>
                      Probeer zeker te variëren omdat elke groente of elk fruit zijn eigen speciale voordelen heeft. Gebruik regelmatig groene groenten. Deze bevatten chlorofyl en hebben een zuiverende werking voor het lichaam.<br>
                      Enkele ideeën: wortels, spinazie, zoete aardappels, waterkers, broccoli, erwten, asperges, bonen, selder, boerenkool, rapen, bananen, appels, peren… Let er wel op dat groenten die onder de grond worden gekweekt minder gebruikt worden dan groenten boven de grond. <br>
                      Rauwe ajuin, look, tomaten, pepers, komkommer en aardappels worden beter vermeden. Ze bevatten stoffen die je hond meer kwaad dan goed doen.<br>
                      Ook noten kunnen een goede aanvulling zijn omdat ze veel gezonde omega-3 vetzuren bevatten. Maal de noten eerst en geef geen al te grote dosissen. Eén à twee noten per dag volstaan ruim voor een grote hond.
                    </p>
                  `}
        ></info-element>
        <info-element
        headline="Het juiste ras kiezen start bij de puppy"
        icon="info"
        .content=${html`
                <p>Die schattige snoezige puppies doen je smelten. Die ene speelse puppy verovert in een mum van tijd je hart. Stop! Je neemt hierdoor overhaast een impulsieve en dure beslissing. Te veel mensen laten zich bij de keuze van een hond leiden door de charmes van de puppy. Die puppy die eerst zo lief leek, zou wel eens een bron van frustraties kunnen worden in de toekomst. Goed overwegen welk hondenras perfect bij jou en je familie past, is fundamenteel. </p>
                <h3>Elk ras zijn eigen karakter</h3>
                <p>
                  Bij een bepaald ras horen typische karaktereigenschappen. Hoe ouder de hond wordt, hoe duidelijker die karaktertrekken. Een bepaald karakter kan perfect zijn voor de ene familie, maar botsen met een andere familie. 
                  Eens het schattige van de puppy verdwenen is, moet je verder met het karakter van je hond. Dit is de grootste reden waarom mensen hun hond weg doen: ze kunnen niet meer overweg met een bepaalde karaktereigenschap. Dit kan van grote problemen gaan, zoals agressief gedrag, tot kleine problemen, zoals op alles kauwen. De verkeerde hond bij de verkeerde familie levert voor beiden frustraties op. 
                </p>
                <h3>De perfecte match</h3>
                <p>
                  De oplossing is nochtans eenvoudig: ga op onderzoek uit, voor je een hond in huis haalt. Zo merk je wat bij jou past en bovendien kun je je al voorbereiden op eventuele gedrags-of gezondheidsproblemen die verbonden zijn met de rashond waar je uiteindelijk voor kiest.<br>
                  Wil je goede informatie in verband met een bepaald ras, vertrouw dan niet zomaar op wat een dierenverkoper je vertelt. Vele zijn vaak gewoon uit op verkoop en zullen je snel paaien met wat jij wilt horen. Betrouwbare informatie vind je eerder in de vele boeken die bestaan, en uit goede bron, bij mensen die zelf eenzelfde rashond hebben of bij goede hondenfokkers.
                </p>
                <p>Je oog laten vallen op een bepaald ras, stel jezelf eerst deze vragen:</p>
                <ul>
                  <li>Wat is typisch aan hun karakter?</li>
                  <li>Hoe luidruchtig zijn ze?</li>
                  <li>Kunnen ze met kinderen overweg?</li>
                  <li>Kunnen ze makkelijk overweg met andere dieren?</li>
                  <li>Hoeveel gevoel voor bescherming hebben ze?</li>
                  <li>Wat is hun gemiddelde levensduur?</li>
                  <li>Hoe groot is een volwassen hond en hoeveel weegt hij?</li>
                  <li>Wat zijn de vaak voorkomende gezondheidsproblemen?</li>
                  <li>Verliezen ze veel haar?</li>
                  <li>Hebben ze veel verzorging of een speciale zorg nodig?</li>
                  <li>Hoeveel eet hij?</li>
                  <li>Zijn ze makkelijk te trainen?</li>
                  <li>Kun je ze makkelijk zindelijk maken?</li>
                </ul>
                <p>Kijk daarna of de antwoorden stroken met je eigen verwachting. Hoe meer antwoorden overeenkomen, hoe beter!</p>
                <p>Wil je een hond, gebruik dan je gezond verstand. Een hond wordt meestal, letterlijk en figuurlijk, een vriend voor het leven.</p>
                  `}
        ></info-element>
        <info-element
        headline="Hoezo, mijn hond eet stront?"
        icon="info"
        .content=${html`
              <p>Sorry voor het taalgebruik, maar nu hebben we wel uw aandacht. Heeft u ooit al eens gehoord van coprofagie? Of van scatofagie misschien? De kans dat u nu bedenkelijk fronst, is reëel. En geen paniek, want u bent heus niet de enige bij wie de twee begrippen geen belletje doen rinkelen. Toch komt elke hondeneigenaar wel eens in contact met dit fenomeen.</p>
              <h3>Coprofagie?</h3>
              <p>
                Coprofagie, ook wel aangeduid met scatofagie, is het verschijnsel waarbij een dier ontlasting eet. Daarbij zijn er twee mogelijke manieren waarop dit gedrag plaatsvindt. Ten eerste kan het zijn dat een dier zijn of haar eigen uitwerpselen verorbert. Daarnaast is er de consumptie van de ontlasting van andere soorten of soortgenoten. Dieren in het wild doen het natuurlijk constant.<br>
                Het bekendste voorbeeld is ongetwijfeld de mestkever die zich voedt met de mest van planteneters allerlei. Ook voor gezelschapsdieren bij de mensen thuis is coprofagie alledaags. Knaagdieren, zoals konijnen en cavia’s, doen het bijvoorbeeld omdat ze op die manier hun spijsvertering kunnen reguleren. De hond is dus niet het enige huisdier dat stront eet. Maar toch kan dit specifieke gedrag van viervoeters bij veel baasjes op onbegrip rekenen. Het ziet er vies uit en erg hygiënisch lijkt het ook al niet. Toch is coprofagie een verschijnsel waarachter vaak gefundeerde en logische verklaringen schuilgaan. Daarom schetsen wij hieronder waarom een hond die ontlasting eet soms wel het begrip verdient van zijn of haar baasje.
              </p>
              <h3>Zorgzame moeders</h3>
              <p>
                Bent u de trotse eigenaar van een teefjeshond? Is jouw viervoeter bovendien al eens bevallen van een nest puppy’s? Wanneer de antwoorden op bovenstaande vragen bevestigend zijn, is de kans wel bijzonder groot dat u al eens in contact kwam met coprofagie. Een eerste reden die kan verklaren waarom honden uitwerpselen eten, heeft immers alles te maken met het moederinstinct. Denk daarbij maar eens aan wilde dieren. Uitwerpselen hebben een sterke geur en zijn voor diersoorten in het wild bijgevolg een uitstekende manier om aan territoriumafbakening te doen. Zowat iedereen zag ooit wel eens een documentaire waarin een luipaard over de savanne stapt, en ondertussen urineert of poept. Strontgeur dient dus om te laten weten dat je er bent en om andere soorten te waarschuwen. Ook wanneer een beest niet aan territoriumafbakening wil doen, moet het echter regelmatig poepen. Daarin schuilt natuurlijk een gevaar, want een dier verraadt met uitwerpselen ongewild zijn of haar aanwezigheid.<br>
                Tijdens de eerste weken na de bevalling is de instinctieve reactie van een teefjeshond bijgevolg om de uitwerpselen van haar jongen op te eten. De moeder wil zo de geur van de ontlasting maskeren om te vermijden dat mogelijke roofdieren de puppy’s ontdekken. Eigenlijk mag je als baasje dus best bewondering hebben voor jouw hond die de stront eet van haar eigen jongen. Het ziet er misschien vies uit en het is niet per definitie gezond, maar het toont tegelijkertijd wel aan dat je viervoeter een zorgzame moeder is.
              </p>
              <h3>Je hond communiceert: ontlasting eten als compensatie</h3>
              <p>
                Iedereen met een hond weet dat deze huisdieren absoluut dol zijn op hun voedsel. Een viervoeter kan zijn of haar enthousiasme vaak maar moeilijk verbergen wanneer het voedertijdstip is aangebroken. Hij of zij spurt als een gek doorheen jouw huis, kwispelt met de staart en springt tegen je benen op. Honden eten graag, en naast hun hondenbrokken zijn ze verlekkerd op extra snoepjes en verrassingen. Toch kijken vele mensen raar op wanneer hun huisdier opeens interesse vertoont in uitwerpselen. Het besef moet er echter zijn dat precies het voedsel van je hond verband kan houden met waarom het dier toevlucht zoekt tot de verorbering van uitwerpselen. Het is namelijk goed mogelijk dat het voedsel van je viervoeter te weinig voedingsstoffen van een bepaalde aard bevat. Dit kan bijvoorbeeld gebeuren wanneer je een hond alleen maar hondenbrokken geeft, en zelden of nooit iets anders. Variatie in de voedingsgewoonten van je huisdier is dus belangrijk.<br>
                Evengoed kan het zijn dat het voedsel uit balans geraakt, net omdat je als baasje probeert allerlei goedbedoelde extra’s toe te voegen aan het gamma. De natuurlijke reactie van je hond is dat het dier het evenwicht van zijn of haar dieet probeert te herstellen door de consumptie van uitwerpselen. Als baasje kan je coprofagie in dit geval dus zien als een manier waarop je hond communiceert over zijn voedingsgewoonten. Het huisdier doet dus aan compensatie, maar volgens specialisten is het eten van stront vaak niet gezond voor viervoeters. Als hondenbaasje is het in dat geval dan ook raadzaam om de voeding van je hond eens grondig te heroverwegen.
              </p>
                  `}
        ></info-element>
        <info-element
        headline="Honden aan de leiband?"
        icon="info"
        .content=${html`
        <p>Iedereen kan zich wel momenten herinneren waarop er een hond los voorbijliep die eigenlijk aan de leiband moest. In zo’n situaties zie je dan vaak enkele tientallen meters achter het dier de eigenaar lopen met rond zijn pols de riem of het koord gewikkeld. Maar waarom is het soms eigenlijk echt wel aan te raden om je hond aan de leiband te houden?</p>
        <h3>Wetgeving rond leibanden</h3>
        <p>Vreemd genoeg bestaat er in België en Nederland geen algemene eenduidige wetgeving of reglementering over het aan de leiband houden van viervoeters. Elke gemeente moet dan ook afzonderlijk een reglement opstellen en maatregelen nemen om de veiligheid en de rust van de bevolking te verzekeren. Bijgevolg heeft de overgrote meerderheid aan Belgische en Nederlandse gemeenten elk op zich de beslissing genomen om hun inwoners te verplichten honden aan de leiband te houden. Daarbij komt nog de bepaling dat gevaarlijke hondensoorten verplicht een muilband moeten dragen tijdens folkloristische of feestelijke bijeenkomsten in of buiten de bebouwde kom. Inbreuken op de regelgeving rond leibanden zijn natuurlijk strafbaar en worden beboet met een gemeentelijke administratieve sanctie. De geldsom die een overtreder moet ophoesten is trouwens niet te onderschatten, want hoewel het in het beste geval gaat om 25 euro kan het bedrag oplopen tot maar liefst 250 euro. De mate waarin er overlast plaatsvond en een mogelijke herhaling van de feiten zijn twee factoren waarmee de bevoegde ambtenaar rekening houdt bij het bepalen van de strafmaat. Behalve een mogelijke boete zijn er echter nog andere factoren die het dragen van een leiband aan te raden maken.</p>
        <h3>De veiligheid van je hond</h3>
        <p>De belangrijkste reden om je hond aan de leiband te houden, is misschien wel dat je jouw huisdier zelf er mogelijk een groot plezier mee doet. Honden blijven immers dieren en dus zijn ze niet altijd even voorspelbaar in hun handelingen. Niet elk baasje woont bijvoorbeeld midden in een bosrijke omgeving waar de kans op verkeer of andere loslopende viervoeters erg klein is. Sommige hondeneigenaars zijn met andere woorden verplicht om hun metgezel uit te laten in een drukke omgeving met veel verkeer of andere honden. Je hond aan de leiband houden is dan ook een methode om de veiligheid van je huisdier te garanderen. Het zorgt er immers voor dat je preventief kan handelen en dat je niet moet ingrijpen wanneer het misschien al te laat is. Je wil tenslotte toch niet thuis moeten komen van een wandeling met je hond om dan jouw vrouw te moeten vertellen dat het dier gekwetst, of erger nog, overleden is?</p>
        <h3>De angst van een ander voor jouw hond</h3>
        <p>
          Bijna iedereen heeft ooit al eens een discussie gevoerd met iemand anders over wat nu eigenlijk het beste huisdier is. Sommige mensen zweren bij katten, terwijl anderen er rotsvast van overtuigd zijn dat honden de tofste metgezellen zijn. Afgezien van jouw persoonlijke stellingname in dit debat, valt het toch niet te ontkennen dat een aanzienlijk aantal mensen schrik heeft van honden? Er vinden bijvoorbeeld maar weinig familiefeestjes plaats waarbij er niet iemand is die vraagt of het mogelijk is om de viervoeters apart te houden. Wanneer je als baasje gaat wandelen met je hond, is de kans dan ook reëel dat je, ergens op je pad, iemand kruist bij wie het angstzweet uitslaat wanneer hij of zij jouw viervoeter in het oog krijgt. Wanneer jij je als hondeneigenaar met je eigen exemplaar in het openbaar begeeft, is het daarom verstandig om het dier aan de leiband te houden. Dit getuigt immers van het nodige respect voor andere mensen en ook van een gezonde portie mededogen. Bovendien zal je op sympathie kunnen rekenen van die ene toevallige voorbijganger met een hondenfobie.<br>
          Natuurlijk laat je je hond voor de rest zoveel mogelijk vrij in je tuin of in speciale losloopgebieden.
        </p>
                  `}
        ></info-element>
        <info-element
        headline="Hondengriep"
        icon="info"
        .content=${html`
            <p>Zo soms verschijnt er een storm van berichten over de hondengriep. Hoe oud is de ziekte? Hoe heeft het zich ontwikkeld? Hoe verspreidt het zich? En hoe wordt het verholpen? Wat kan je doen om ervoor te zorgen dat jouw hond het niet krijgt? De antwoorden op die vragen kunnen in een notendop worden gegeven.</p>
            <h3>Het ontstaan</h3>
            <p>De hondengriep is een virus dat is voortgekomen uit een griepvariant die paarden ziek maakt. De ziekte werd pas in 2004 voor het eerst ontdekt bij een hond. </p>
            <h3>Loopt mijn hond gevaar?</h3>
            <p>Ja elke hond is vatbaar voor de ziekte. Er is echter wel een vaccin tegen de hondengriep. Het vaccin kan niet voorkomen dat een hond ziek wordt, maar kan er wel voor zorgen dat de hond minder last heeft van de griep dan wanneer hij niet gevaccineerd zou zijn.</p>
            <h3>Is de ziekte dodelijk?</h3>
            <p>Meestal niet. De meeste honden met hondengriep krijgen een lichte variant. Vaak moeten ze gewoon aanhoudend hoesten – soms langer dan drie weken – en ook krijgt de hond last van snot en slijm, maar dat kan gewoon met antibiotica verholpen worden. <br>
            De honden die een ernstige variant krijgen, hebben vaak veel koorts en kunnen moeilijk ademen. Sommigen krijgen zelfs een longontsteking. In 95% van de gevallen heeft de ziekte echter geen dodelijke afloop.</p>
            <h3>Hoe verspreidt de ziekte zich?</h3>
            <p>Tegenwoordig wordt de ziekte veel via de lucht overgedragen, zoals kennelhoest. Er is dus niet eens lichamelijk contact nodig om de ziekte te verspreiden. De ziekte wordt, voor zover bekend, niet via mensen overgedragen – zij zijn ook niet vatbaar voor de ziekte.</p>
            <h3>Hoe kan ik voorkomen dat mijn hond de hondengriep krijgt?</h3>
            <p>Uiteraard zal veel contact met andere honden het risico op infectie vergroten. Dus als je hond naar een kennel wordt gebracht of naar de hondenschool is de kans groter dat je hond de ziekte krijgt, dan wanneer het diertje alleen thuis zit. Om te weten of de hond gevaccineerd moet worden, moet je bij de dierenarts te raden gaan. Die kan je zeggen of het risico op hondengriep bij jouw hond groot is.</p>
            <h3>Moet ik mijn hond thuis laten blijven?</h3>
            <p>Dat hangt van jouw keuze af. Een hond is een sociaal wezen en heeft beweging nodig. Het diertje thuislaten kan verstandiger zijn, maar het blijft moeilijk om het beestje elke beweging en elk sociaal contact met andere honden te ontzeggen. Als je hond veel begint te hoesten, last van snot heeft of van zijn ademhaling, als het beestje koortsig is, ga dan gelijk naar de dierenarts.</p>
                  `}
        ></info-element>
        <info-element
        headline="Juiste Naam Kiezen"
        subline="Moeilijk maar noodzakelijk"
        icon="info"
        .content=${html`
              <p>Ons kleine landje telt officieel zo’n 1,2 miljoen trouwe viervoeters. De kans is dus reëel dat ook jij binnenkort een nieuw huisdier mag verwelkomen. Daarbij is de juiste naamkeuze voor jouw hond natuurlijk belangrijk en soms erg moeilijk. Wij bekijken hier voor jou de opties.</p>
              <h3>Een nieuwe hond in huis</h3>
              <p>Heb jij ooit al een hond als huisdier gehad? Dan weet je vast nog hoe gelukkig je was toen je hem of haar voor het eerst kon strelen. En dan denk je waarschijnlijk terug aan hoe belangrijk het was om je nieuwe viervoeter een gepaste naam te geven. Je vindt het erg belangrijk dat de naam bij jouw hond past. En dus ga je op zoek naar een leuke naam. Die kan natuurlijk heel erg klassiek zijn. Iedereen kent wel van die typische hondennamen. ‘Bob, Tobias, Luna, Max en Sam’ komen vaak voor. Panikeren hoeft echter niet wanneer je origineler wilt zijn in je keuze, want er zijn heus nog opties.</p>
              <h3>Beroemd en bizar</h3>
              <p>Ten eerste kan je voor inspiratie misschien eens kijken naar beroemde baasjes en hun beroemde honden. Sommige beroemdheden opteren voor gewone hondennamen, dus een klassieke keuze hoeft niet meteen saai te zijn. De Amerikaanse president Barack Obama schafte voor zijn dochtertjes een Portugese waterhond aan en noemde het dier ‘Bo’. Of wat dacht je van ‘Bobby’, het maatje van Kuifje? Maar natuurlijk zijn er ook meer bizarre keuzes. ‘Idéfix’ is het witte hondje van stripheld Obelix en is afgeleid van het Franse ‘idée fixe’, wat zoveel betekent als ‘waanidee’. Internationale sterren zijn vaak excentrieke mensen en dat durft zich wel eens te uiten in de namen die ze hun honden geven. Kelly Clarkson noemt haar hondjes ‘Joplin’ en ‘Security’. De Amerikaanse zanger John Legend gaf zijn Engelse bulldog met ‘Puddy’ een verrassende maar niet echt stoere naam. Miley Cyrus opteerde dan weer voor ‘Mary Jane’. </p>
              <h3>Griekse en Latijnse inspiratie</h3>
              <p>Een tweede originele optie is dat je de naam van je hond baseert op het Grieks of op het Latijn. Deze twee dode talen verstaan immers zeer goed de kunst om een bepaalde eigenschap, een karaktertrek of een kwaliteit in één woord zeer mooi te beschrijven. Wanneer je een donkere hond hebt, kan je bijvoorbeeld kiezen voor het Latijnse ‘Adrian’ oftewel ‘de donkere’. Het Griekse ‘Ambrose’ betekent dan weer ‘onsterfelijk’ en het Latijnse ‘Anthony’ staat voor ‘onbetaalbaar’. Wanneer je trouw een belangrijke eigenschap vindt, opteer je best voor het Latijnse ‘Fidel’ dat zich vertaalt in ‘toegewijd’. </p>
              <h3>Een hond die luistert</h3>
              <p>Wil jij als baasje een hond die goed luistert? Dan is het misschien toch raadzaam om niet enkel en alleen belang te hechten aan de meest opvallende of zonderlinge naam. Ten eerste reageert een hond met een korte en duidelijke naam overwegend beter op commando’s dan eentje met een lange naam. Het zou dus best wel eens moeilijker kunnen zijn om een hond te doen luisteren die ‘Martha Stewart’ heet, dan een viervoeter met de naam ‘Jack’. Wanneer je meerdere honden hebt, is het bovendien slim om namen te kiezen die niet op elkaar lijken, zodat verwarring uitblijft. Ook opteer je best niet voor de naam van het vorige overleden huisdier. Zo vermijd je onnodige vergelijkingen tussen de oude hond en de nieuwe opvolger.</p>
              <h3>Tot slot: volg je gevoel</h3>
              <p>Voor welke hondennaam je ook kiest, de voornaamste tip is dat je altijd je gevoel volgt. Wanneer je een viervoeter in huis haalt, opteer je immers voor een dier dat hopelijk vele jaren jouw gezel zal zijn. Het is dan natuurlijk erg belangrijk dat je de hond een naam geeft die je zelf graag hoort. De naam moet positieve emoties opwekken bij het baasje. Het moet een naam zijn die je niet beu geraakt en die je trots maakt op de hond die hem draagt.</p>
                  `}
        ></info-element>
        <info-element
        headline="Een goede fokker vinden"
        subline="Enkele tips"
        icon="info"
        .content=${html`
                <p>Honden zijn graag geziene beestjes en veel mensen willen er graag een in huis nemen. Wanneer je op zoek gaat naar een echte rashond, kom je automatisch bij een fokker terecht. Er zijn al veel artikels geschreven die gaan over de hond, maar ook de fokker moet aan bepaalde eisen voldoen. In volgend artikel worden een aantal zaken opgesomd, die jouw zoektocht naar een goede, betrouwbare fokker hopelijk zal vergemakkelijken.</p>
                <h3>Ga op zoek naar zijn referenties</h3>
                <p>
                  Een goede fokker springt niet kwistig om met referenties. Wanneer je met hem persoonlijk gaat praten, zal hij daarentegen wel enkele adressen geven. Daar kan je dan terecht om zijn vorig ‘werk’ te bewonderen.<br>
                  Nog eenvoudiger zou het zijn, moest je kunnen rekenen op een fokker die sommige van jouw vrienden heeft geholpen. Zij kunnen jou exact vertellen hoe volwassen die fokker met zijn verantwoordelijkheid omsprong.
                </p>
                <h3>Normaal stelt hij jou een karrenvracht aan vragen</h3>
                <p>
                  Een fokker die houdt van zijn vak, zal dikwijls meer vragen stellen aan jou dan omgekeerd. De fokkers houden immers van hun dieren en zijn op zoek naar eerlijke betrouwbare baasjes. Ze geven hun meesterwerken niet aan iedereen mee naar huis!<br>
                  Ze zullen vragen stellen over je financiële situatie, of je thuis nog kinderen hebt, hoe groot je huis is en of je wel of niet een tuin hebt. Wanneer jouw fokker geen enkele van deze vragen stelt, is het duidelijk dat hij meer met geld bezig is, dan met een goede omgeving te zoeken voor zijn honden.
                </p>
                <h3>Risico’s en waarborg…</h3>
                <p>Een professionele fokker laat zijn puppies altijd onderwerpen aan een goede medische analyse. Zo kunnen zijn klanten met een tevreden en gerust gemoed met hun puppy naar huis gaan. Helaas zijn er enkele medische risico’s die niet onmiddellijk kunnen opgespoord worden. Een <a @click=${() => window.open('https://www.hondencentrum.com/hondenrassen/golden-retriever/', '_blank')} href="">Golden Retriever</a> kan na enkele maanden last krijgen van zijn heupgewricht (heupdysplasie). Dit ongemak is erfelijk en daarom zou een goede fokker er geen probleem van mogen maken om jouw geld terug te geven.</p>
                <h3>Manieren waarop je een hondenfokker vindt</h3>
                <p>Uiteraard is het internet een gelegenheid bij uitstek om de massaal aangereikte informatie te filteren. Ook in de krant vind je talloze zoekertjes. Als je liever meteen de goeie vindt, wend je dan tot een dierenarts, of zoek contact op een hondententoonstelling of bij een <a @click=${() => window.open('https://www.hondencentrum.com/extra/rasverenigingen/', '_blank')} href="">rasvereniging</a>.</p>
                  `}
        ></info-element>
        <info-element
        headline="Oudere honden trainen"
        icon="info"
        .content=${html`
                <p>Heb je een volwassen hond geadopteerd uit het asiel, of heb je de training voor je hond indertijd opgegeven? Goed nieuws dan! Ook volwassen honden kunnen nog perfect getraind worden. Het is zelfs zo dat ze af en toe gemakkelijker te trainen zijn omdat ze langer hun aandacht bij de zaak kunnen houden.<br>
                Met de hieronder opgesomde tips, maak je meer dan waarschijnlijk kans op succes! Denk er ook aan: straf je hond nooit fysiek. Dat leidt alleen maar tot ongewenst en agressief gedrag. Maak liever gebruik van beloningen of complimenten om positief gedrag te stimuleren.</p>
                <h3>Tips voor de hond</h3>
                <p>Het zindelijk maken van volwassen honden moet in principe veel makkelijker gaan dan het zindelijk maken van puppies. Volwassen honden zijn immers rustiger en hebben meer controle over hun blaas. Hou hem binnen goed in het oog en ga met hem naar buiten als hij naar het toilet moet. Ga steevast naar dezelfde plaats en moedig hem uitbundig aan. Beloon hem ook onmiddellijk nadat hij naar het toilet is geweest. Wacht er niet mee tot hij binnen is, want dan kan hij het verband tussen beloning en naar het toilet gaan niet meer leggen. Natuurlijk zijn er ook gevallen waarbij het niet zo simpel is. Volhouden is dan de boodschap.</p>
                <h3>Bevelen leren</h3>
                <p>Ook tijdens dit leerproces moet je gebruik maken van veel beloningen en uitbundige aanmoedigingen. Basiscommando’s zoals ‘zit’, ‘lig’ of ‘kom’ zijn niet moeilijk aan te leren. Zolang je ze consequent gebruikt en je zelf de tijd neemt. Zorg ervoor dat iedereen in het gezin dezelfde commando’s gebruikt, anders raakt je hond in de war. Zeg af en toe het commando en zet je hond ook in de gewenste houding wanneer hij je negeert. Wanneer je continu de bevelen roept zonder dat de hond reageert of wordt gecorrigeerd, zal hij zeker denken dat hij niet moet luisteren.</p>
                <h3>Ook oudere honden zijn verzot op speelgoed</h3>
                <p>Zowel jonge als oude honden hebben speelgoed nodig om hen bezig te houden. Bij gebrek aan speelgoed kunnen ze uit verveeldheid beginnen knagen op je meubilair. </p>
                <h3>Wat als het niet lukt?</h3>
                <p>Natuurlijk zijn er ook oudere honden die de gewoontes van hun vroegere baas aangeleerd hebben. Die zijn helaas niet zo gemakkelijk af te leren. Maar het gaat wel. Je moet alleen veel geduld hebben.</p>
                  `}
        ></info-element>
        <info-element
        headline="Pas op voor vergiftiging van je hond"
        icon="info"
        .content=${html`
                <p>Bij kinderen letten we er altijd op dat we alle medicijnen en schoonmaakmiddelen keurig opbergen, zodat het kind veilig is en gezond blijft. Maar besteden we bij onze honden ook voldoende aandacht aan hun veiligheid? </p>
                <h3>Pijnstillers</h3>
                <p>
                  Pijnstillers worden bij honden altijd in een bepaalde dosis voorgeschreven. De dosis is niet te vergelijken met die van mensen. Als een hond onze pijnstillers dan ook inneemt kunnen de gevolgen ernstig zijn. Bloedarmoede, maagbloeding, darmproblemen, al die aandoeningen kunnen al door een pijnstiller worden veroorzaakt. Voor een kleine hond is een dosis van 200 gram al giftig.<br>
                  Van die pijnstillers is paracetamol wel de meest gevaarlijke voor dieren. Het zuurstofgehalte in het bloed kan erdoor aangetast worden, waardoor het huisdier last van een ernstige depressie kan krijgen. Ook honden krijgen veel buikpijn van paracetamol. Maar dat niet alleen: ze kunnen ook overgeven, last van depressie krijgen en een gebrek aan eetlust krijgen. Katten zullen last krijgen van slijmen en zwellingen in het gezicht en van de poten. Een hogere dosering is zo giftig voor de huisdieren dat ze er zelfs aan doodgaan.
                </p>
                <h3>Neurologisch gif</h3>
                <p>Je huisdier kan ook vergiftigd worden door pesticiden, insekticiden, rattengif en shampoos. Let daar dus goed mee op. Je kan dit soort vergiftiging herkennen aan de volgende symptomen:</p>
                        <ul>
                          <li>overmatig kwijlen</li>
                          <li>overgeven en diarree</li>
                          <li>trillen</li>
                          <li>(epileptische) aanvallen</li>
                          <li>overdreven opgewonden gedrag</li>
                          <li>depressie</li>
                          <li>afwijkende grote van de pupillen</li>
                        </ul>
                <p>Heeft je hond rattengif opgegeten, dan kan het huisdiertje, net als muizen en ratten, doodbloeden. Zorg er dan ook voor dat je onmiddellijk naar de dierenarts gaat als je merkt dat je rattenvergif plots weg of op is. Doe dat ook als je hond last heeft van neusbloedingen en bloederige ontlasting.</p>
                <h3>Afval</h3>
                <p>We denken snel dat afval niet giftig is. Toch worden er giftige stoffen geproduceerd door rottingsbacteriën. Een hond kan door het eten of drinken van afval ernstige ziekteverschijnselen krijgen:</p>
                        <ul>
                          <li>overgeven</li>
                          <li>bloederige diarree</li>
                          <li>buik- of maagpijn</li>
                          <li>rillingen</li>
                          <li>shock</li>
                        </ul>
                <h3>Voorkomen is beter dan genezen</h3>
                <p>De volgende tips kunnen ervoor zorgen dat je hond niet snel zal worden vergiftigd.</p>
                        <ul>
                          <li>zorg ervoor dat je alle pesticiden netjes opbergt en zorg ervoor dat de verpakkingen niet beschadigd zijn</li>
                          <li>sluit je vuilniszakken goed af en zorg ervoor dat ze niet kunnen worden omgestoten</li>
                          <li>houd je hond uit de buurt van je bloemen- of moestuin</li>
                          <li>gebruik voor je hond nooit medicijnen die je voor jezelf gebruikt, tenzij de dierenarts je dat aanraadt.</li>
                        </ul>
                <h3>Soorten gif</h3>
                <p>
                  Vergif is er in verschillende soorten. Sommige giffen hebben een invloed op het hart en de bloedvaten. Tabak en avocado kunnen het hart en de bloedvaten van je hond mogelijk beschadigen. Bovendien is avocado ook gevaarlijk voor de spijsverteringskanalen bij honden. <br>
                  Dat laatste geldt ook voor chocola, uien, tomaten en courgettes. Daarnaast kunnen die lekkernijen ook slecht zijn voor de ademhaling van de dieren. Ui heeft, net als knoflook, ook een giftige werking op bloed. Daarnaast zijn er ook talloze plantsoorten die levensgevaarlijk zijn voor je huisdier. Dus als je vermoedt dat je dier een giftige stof heeft ingenomen, of als je vreemd gedrag bij je huisdier opmerkt, ga dan direct naar de dierenarts.
                </p>
                  `}
        ></info-element>
        <info-element
        headline="Blaffende honden bijten niet"
        icon="info"
        .content=${html`
                <p>Mensen communiceren door te praten, honden doen dit met geblaf. Toch ervaren mensen het blaffen al gauw als
                excessief. Het ligt echter in de natuur van de hond. Om het te stoppen moet je eerst begrijpen waarom je hond blaft.</p>
                <h3>Aandacht trekken</h3>
                <p>Blaffen is voor honden een manier om je aandacht op te eisen. Ze willen dat je dichterbij komt en hen aandacht geeft.</p>
                <h3>Verveling</h3>
                <p>
                  Honden blaffen uit verveling. Stel jezelf daarom enkele vragen. Krijgt de hond genoeg lichaamsbeweging? Komt hij
                  voldoende in contact met andere honden? Hoeveel speeltijd krijgt hij? Is er genoeg mentale stimulatie?<br>
                  Kortom, honden die zich vervelen hebben nood aan uitdaging. Lichaamsbeweging, sociaal contact, speeltijd en
                  training zijn goede prikkels.
                </p>
                <h3>Frustratie</h3>
                <p>
                  Honden uiten hun frustratie door te blaffen. Zo raken ze gefrustreerd door onduidelijke signalen van hun baasjes.
                  Denk maar aan slechte timing of een te lage beloning voor goed gedrag.<br>
                  Ze blaffen eveneens uit frustratie wanneer er geen duidelijke verwachtingen zijn. Ze hebben het bijvoorbeeld moeilijk
                  om bevelen uit te voeren in een nieuwe omgeving. Met hun geblaf communiceren ze dat er verdere training nodig is.
                </p>
                <h3>Verlatingsangst</h3>
                <p>
                  Een hond met verlatingsangst blaft. Laat hem dus niet te lang alleen of probeer die tijd te overbruggen. Bied hem
                  bijvoorbeeld mentale stimulatie aan met speeltjes. Of beter nog, schakel een oppas in. Begroeten en weggaan moeten
                  sowieso rustig verlopen.<br>
                  Doet de hond zichzelf pijn of breekt hij je huis af? Raadpleeg dan een gedragsdeskundige.
                </p>
                <h3>Spelen</h3>
                <p>
                  Honden maken door hun geblaf duidelijk dat ze willen spelen. De hond is dan opgewonden. Dit gaat gepaard met
                  gekwispel, spelbuigingen en gespring. Leer hem om rustig te blijven. Bovendien mag je hem pas begroeten als hij
                  gekalmeerd is. Verlang hetzelfde van vreemden. Je wilt het gedrag immers niet bekrachtigen. Beloon hem enkel
                  wanneer hij rustig of gefocust blijft.
                </p>
                <h3>Afstand vergroten</h3>
                <p>
                  Blaffen is een afstandvergrotend signaal. Honden verdedigen zichzelf zo tegen een potentieel conflict. Naast laag
                  geblaf vertoont hij eveneens intimiderende lichaamstaal. Denk aan grommen, happen, de tanden ontbloten of een
                  stijve kwispeling.<br>
                  Ook blaffen achter een hek, in een bench of aan een leiband is afstandvergrotend gedrag.<br>
                  Ontaardt het in agressie? Vraag dan advies aan een gedragsdeskundige. Breng eveneens een bezoek aan de dierenarts.
                </p>
                <h3>Ter waarschuwing</h3>
                <p>
                  Honden willen hun baasjes beschermen. Dat doen ze door te blaffen. Waarschuwingsblaffen is echter zelfversterkend.
                  Corrigeer dit gedrag met het tegengesteld commando "Stil!".
                </p>
                <h3>Stop excessief blaffen</h3>
                <p>
                  Blaffen op zich is dus geen probleem. Honden blaffen nu eenmaal. Overmatig blaffen moet je daarentegen wel
                  aanpakken. Analyseer waarom je hond blaft en reageer erop met positieve stimuli. Beloon goed gedrag bijvoorbeeld
                  met een koekje of speeltijd.<br>
                  Gaat het je petje te boven? Schakel dan de hulp in van een gedragsdeskundige tijdens de training.
                </p>
                  `}
        ></info-element>
        <info-element
        headline="Angst voor onweer"
        icon="info"
        .content=${html`
                <p>Sommige honden zijn enorm bang voor vuurwerk en onweer, andere honden dan
                weer helemaal niet. De reden hiervoor is niet echt duidelijk. Misschien ligt het aan het
                gehoor van je hond, de socialisatie of zijn algemene angstniveau. Sowieso blijft het
                vervelend als je, anders zo rustige, hond bijna hysterisch wordt als het dondert.</p>
                <h3>Vuurwerk en donder</h3>
                <p>
                  Ook al lijken het twee gelijkaardige dingen, er is een groot verschil tussen de angst voor
                  vuurwerk en de angst voor donder. Is je hond bang van vuurwerk? Dan zijn het
                  hoogstwaarschijnlijk de knallen die hem, soms letterlijk, de stuipen op het lijf jagen. Je
                  bange hond kan beginnen kwijlen of beven. Hij zal zich proberen verbergen in je schoot
                  of hij zal vluchten naar een veilig plekje.<br>
                  Als je hond bang is van donder, dan is er meer in het spel dan de luide knallen. Je hond
                  kan bang zijn van de elektriciteit die tijdens een donderstorm in de lucht hangt. Hij voelt
                  deze in zijn vacht als statische elektriciteit. Honden voelen donderstormen al aankomen
                  lang voor de eerste donderslag. Een geliefd schuilplekje is de badkuip. De gladde kanten
                  van de badkuip verzachten de elektriciteit in hun vacht, waardoor ze zich kalmer voelen.
                </p>
                <h3>Wat kun je eraan doen?</h3>
                <p>
                  Er zijn bepaalde kruidenremedies die je hond kunnen kalmeren, zoals valeriaan en
                  skullcap. Ook essentiële oliën zoals pepermuntolie kunnen rust geven. Pas op! Ook
                  kruiden zijn niet zonder gevaar zijn. Ook al zijn ze natuurlijk, het betekent nog niet dat
                  ze veilig zijn. Consulteer dus eerst je dierenarts. Kruidenremedies hebben tijd nodig om
                  te werken. Bij onverwachte vuurwerken of donderstormen heeft deze medicatie dus een
                  beperkte doeltreffendheid. Heeft je hond een groot probleem? Bespreek dan samen met
                  de dierenarts welk middel het meest geschikt is en snel werkt als het echt nodig is.<br>
                  Er bestaat ook een soort kledij voor je hond die hem kan helpen. Je hond wordt als het
                  ware ‘ingepakt’ in een cape waardoor hij beschermd is tegen de elektriciteit in de lucht.
                  Bovenstaande methodes kunnen je hond helpen op korte termijn. Op de lange termijn
                  kan desensitisatie helpen: hem ongevoelig maken voor de luide geluiden. Dit kun je doen
                  door het geluid van vuurwerk of donder op te nemen en af te spelen voor je hond (van
                  stil naar steeds iets luider). Op die manier wordt je hond dit geluid misschien gewoon en
                  ervaart hij ze niet meer als angstwekkend.<br>
                  Een laatste hulpmiddeltje: de tv of de radio. Laat de tv of de muziek luid spelen als er
                  vuurwerk of donder is. Op die manier is het geluid buiten minder aanwezig, en je hond,
                  hopelijk, minder angstig!
                </p>
                  `}
        ></info-element>
        <info-element
        headline="Slecht gedrag bij je hond"
        subline="10 tips om dit tegen te gaan"
        icon="info"
        .content=${html`
        <ul>
          <li>Probeer situaties te vermijden die slecht gedrag in de hand werken.</li>
          <li>Beloon goed gedrag met aandacht en dankbaarheid.</li>
          <li>Ga regelmatig langs bij je dierarts, liever voorkomen dan genezen!</li>
          <li>Voer onmiddellijk regels in en wijk er nooit van af.</li>
          <li>Verbeter slecht gedrag maar voorzie steeds een alternatief (een kauwspeeltje,...l)</li>
          <li>Onderwerp je hond nooit aan fysieke strafmaatregelen. Dit leidt alleen maar tot</li>
          <li>ongewenst en agressief gedrag.</li>
          <li>Speel geen ruige spelletjes die bijtgedrag stimuleren.</li>
          <li>Hou je hond goed in het oog en probeer in te schatten wat hij nodig heeft.</li>
          <li>Laat je hond met zoveel mogelijk mensen, dieren en plaatsen kennismaken.</li>
          <li>Hou – zeker in de beginperiode – je hond goed in het oog. Beperk ook het aantal ruimtes waar hij mag komen in je huis. Na het vervolledigen zijn training kan je eventueel die beperking opheffen</li>
        </ul>
                  `}
        ></info-element>
        <info-element
        headline="Wat een hond niet mag eten"
        icon="info"
        .content=${html`
            <p>Door je hond gezonde, aangepaste voeding te geven hou je hem in topvorm. Helaas weet je hond
            zelf niet wat goed voor hem is. Daarom is het belangrijk dat je zelf goed weet wat je hond wel
            en niet mag eten. <br>
            Sommige etenswaren die wij zelf graag eten zijn giftig voor je hond. Geef hem dus niks dat niet
            speciaal voor hem gemaakt is. Geef je hem toch iets anders dan kan hij ziek worden of zelfs dood
            gaan. Als je twijfelt kan je best even contact opnemen met de dierenarts. Hij weet precies wat je
            hond mag hebben. <strong>Enkele etenswaren die je hem zeker niet mag geven zijn</strong>:</p>
            <h3>Chocolade:</h3>
            <p>
              Chocolade is zeer giftig voor je hond. De stof theobromine in chocolade kan zorgen voor
              hartkloppingen en diarree. Uiteindelijk kan je hond hieraan dood gaan.
            </p>
            <h3>Druiven en rozijnen:</h3>
            <p>
              De maag van je hond kan hier niet tegen. Druiven en rozijnen veroorzaken diarree. Ook kan je
              hond er van gaan overgeven.
            </p>
            <h3>Rauwe vis:</h3>
            <p>Rauwe vis kan schadelijke bacteriën bevatten die voedselvergiftiging veroorzaken.</p>
            <h3>Katteneten:</h3>
            <p>
              Katteneten is, zoals de naam al zegt, bedoeld voor katten. Voor honden bevat het te veel vetten
              en proteïnen.
            </p>
            <h3>Melk:</h3>
            <p>Een hond kan melk erg slecht verteren.</p>
            <h3>Champignons:</h3>
            <p>
              Grote hoeveelheden champignons zorgen voor nierproblemen. Hierdoor kan je hond in een
              coma raken en uiteindelijk dood gaan.
            </p>
            <h3>Aardappelen en tomaten:</h3>
            <p>
              Aardappelen en tomaten vallen onder de groep nachtschade groenten. Vooral rauw zijn ze
              gevaarlijk voor je hond. Ze kunnen schade veroorzaken aan de nieren en het centrale
              zenuwstelsel.
            </p>
            <h3>Alcohol:</h3>
            <p>
              Alcohol kan niet goed door de lever van je hond worden afgebroken. Dit zorgt voor beschadiging
              van de lever. Zonder een goed werkende lever kan je hond dood gaan.
            </p>
            <h3>Noten:</h3>
            <p>
              Noten bevatten te veel fosfor voor een hond. Door een teveel aan fosfor kunnen nierstenen
              ontstaan. In walnoten kan er een schadelijke schimmel voorkomen waar je hond ziek van wordt.
            </p>
            <h3>Cafeïne:</h3>
            <p>
              Cafeïne is voor je hond een giftige stof. Het zorgt voor een versnelt hartritme, ongecontroleerde
              trillingen en bloedingen.<br>
              Mocht je hond toch iets hebben opgegeten dat niet voor hem bedoeld was dan kan je best je
              dierenarts om raad vragen. In dringende gevallen neem je de hond mee naar de arts zodat hij
              direct kan worden behandeld.
            </p>
                  `}
        ></info-element>
        <info-element
        headline="Droge huid bij je hond?"
        icon="info"
        .content=${html`
              <p>Het is normaal dat mensen in de winter last krijgen van een droge huid.
              Maar ook dieren hebben er last van. En ook bij dieren kan je die huid beter
              verzorgen. </p>
              <h3>Hoe help je honden met een droge huid?</h3>
              <ul>
                <li>stop je hond zo weinig mogelijk in bad</li>
                <li>verwijder haar en schilfertjes zoveel mogelijk door je hond te borstelen</li>
                <li>gebruik een vochtinbrengende shampoo als je je hond toch in bad doet. Let wel: die shampoo moet voor honden zijn, want een hondenhuid heeft een ander pH-gehalte.</li>
                <li>goede voeding zorgt er ook voor dat de huid en het haar van de hond in goede staat bijft. Ga dus gerust bij een dierenarts langs. Die zal je misschien voedingsupplementen aanbieden.</li>
              </ul>
              <h3>Is het wel alleen een droge huid?</h3>
              <p>
                Als je hond zichzelf krabt, kan dat veel redenen hebben: allergieën,
                parasieten en infecties kunnen je dier plagen. Vaak kan je denken dat het
                diertje enkel een droge huid heeft. Let dus goed op, in sommige gevallen is
                dat niet zo. Ook kan een droge huid erop wijzen dat je hond nier- of
                leverproblemen heeft. Daarnaast kan ook de schildklier zijn aangetast.<br>
                Als de volgende problemen dus langer dan een week aanhouden, ga dan
                naar een dierenarts.
              </p>
              <ul>
                <li>huidirritatie (bultjes, uitslag, rode huid)</li>
                <li>kapotte zweertjes</li>
                <li>overmatig haarverlies</li>
                <li>dood, droog haar dat makkelijk loslaat</li>
                <li>onnodig veel gelik aan de voeten</li>
                <li>veel wrijven over het gezicht</li>
              </ul>
                  `}
        ></info-element>
        <info-element
        headline="Je hond en artritis"
        icon="info"
        .content=${html`
                <p>Erg makkelijk is het niet om artritis bij je hond te herkennen. Maar naarmate de tijd
                vordert zal het duidelijker worden; je hond kan wat trager rechtkomen, loopt wat
                moeilijker, springt minder makkelijk op de bank. De gewrichten van het beestje raken
                ontstoken en het diertje begint pijn te voelen, zwellingen te krijgen waardoor je hond
                minder mobiel is. Maar er zijn zeker manieren om het diertje te helpen nog van het leven
                te genieten. </p>
                <h3>De dierenarts</h3>
                <p>
                  Je moet er eerst voor zorgen dat de dierenarts de diagnose stelt. Help de dierenarts door
                  te zeggen welk opmerkelijke gedrag je bij je hond hebt opgemerkt. Dat vergemakkelijkt
                  de zaken: als je zegt welk gedrag je hebt opgemerkt, zal de dierenarts op verschillende
                  manieren kunnen onderzoeken welke soort artritis je hond heeft. Verschillende
                  gegevens helpen namelijk
                </p>
                <ul>
                  <li>de medische geschiedenis</li>
                  <li>fysieke test</li>
                  <li>röntgenfoto's</li>
                  <li>bloedonderzoeken</li>
                  <li>onderzoek van het vocht uit de slijmbeurzen en dergelijke</li>
                </ul>
                <p>
                  De dierenarts kan zo vaststellen of er een bacteriële infectie is in de gewrichten of dat er
                  echt sprake is van osteoartritis. Die laatste variant kan in sommige gevallen chirurgisch
                  worden verholpen. Osteoartritis is de meest voorkomende variant, zowel bij mensen als
                  bij dieren.<br>
                  Bijna elke oude hond lijdt er wel in zekere mate aan. Bij osteoartritis beginnen de botten
                  namelijk door slijtage van het kraakbeen tegen elkaar te schuren. Die wrijving zorgt ook
                  voor beschadiging van de botten zelf. Als de artritis die op deze manier wordt
                  veroorzaakt niet behandeld kan worden, kan je nog altijd manieren zoeken om de pijn
                  draaglijk te maken.
                </p>
                <h3>Je hond verzorgen</h3>
                <p>
                  Na diagnose zal je dierenarts je kunnen zeggen hoe je de artritis het beste kan
                  behandelen. Er zijn veel nieuwe medicijnen op de markt: steroiden,
                  ontstekingsremmende medicijnen tegen de zwelling, voedingsupplementen. Let wel:
                  probeer de artritis nooit te behandelen met middeltjes die bij mensen helpen. Maar er
                  zijn ook holistische therapieën die kunnen helpen.
                </p>
                <h3>Een paar tips</h3>
                <p>
                  Zelfs als de artritis wordt behandeld, kan je nog dingen doen voor je hond om het diertje
                  zich beter te laten voelen. Wat kunt je allemaal doen?
                </p>
                <ul>
                  <li>zorg dat de voeding en drinken van je hond makkelijk bereikbaar is en niet op een gladde ondergrond staat</li>
                  <li>laat de hond zitten en rusten op een zachte ondergrond (zoals een hondenbedje of een zitzak)</li>
                  <li>bewerk glibberige ondergronden met producten die de ondergrond minder glad maken.</li>
                  <li>let goed op je hond als die de trap opgaat, zodat het diertje niet gewond raakt</li>
                  <li>warmte kan de pijn verzachten: een warmwaterkruikje in het bedje van de hond kan zeker helpen.</li>
                  <li>Probeer de hond alsnog zoveel mogelijk te laten bewegen</li>
                </ul>
                  `}
        ></info-element>
        <info-element
        headline="4 fouten die je moet vermijden bij het opvoeden van je hond"
        icon="info"
        .content=${html`
                <p>Veel mensen zijn er echter van overtuigd dat een positief beloningsysteem het meest effectief is.
                Toch zijn er ook nog steeds mensen die opteren voor de dominante en fysieke aanpak, waarbij
                zij duidelijk maken aan de hond dat zij het gezag hebben over hem. Persoonlijk zijn wij voor de
                eerste manier van trainen, maar als je het toch op een andere manier wil doen, dan hier toch
                enkele zaken waar je op moet letten.<br>
                Een eerste tip: Als hondeneigenaar is het goed om fysiek contact te gebruiken wanneer je jouw
                hond beloont, maar zeker niet wanneer je hem wil straffen. Het werkt ook contraproductief
                wanneer je jouw hond begint af te breken als hij niet gedaan heeft wat je vroeg. Hieronder vind
                je een lijstje met de meest gemaakte fouten door mensen die hun hond willen trainen. Vermijd
                deze zaken, want ze veroorzaken meer kwaad dan goed!</p>
                <h3>1. Wrijf je honds neus NOOIT tegen het tapijt na een plasje</h3>
                <p>
                  Wanneer je jouw hond straft door zijn neus tegen het tapijt te wrijven nadat hij er op
                  geplast heeft, zal hij jou als baasje heel eng en kwaadaardig vinden. Honden hebben
                  immers een kortetermijngeheugen. Ze zullen zich al niet meer herinneren wat ze fout
                  hebben gedaan op het moment dat hun baasje hen wil straffen voor de ‘overtreding’.
                  Ondanks hun kortetermijngeheugen zullen ze zich deze incidenten of straffen wel jaren
                  blijven herinneren. Het zal voor jou als baasje lang duren om zijn vertrouwen terug te
                  winnen.<br>
                  Wat dan wel te doen als je hond op het tapijt plast? Maak het tapijt proper en verdubbel
                  de zindelijkheidstraining door je hond elk uur mee naar buiten te nemen. Loof je hond
                  wanneer hij naar buiten gaat. Op een bepaald moment zal hij je zelf waarschuwen
                  wanneer hij naar buiten wil om een plasje te doen.
                </p>
                <h3>2. Sla je hond NOOIT met de krant (of met iets anders)</h3>
                <p>
                  Er is een lange tijd onduidelijkheid geweest onder hondeneigenaars over het al dan niet
                  slaan van je hond met een opgerolde krant in plaats van met de hand. Men was ervan
                  overtuigd dat dit ervoor zou zorgen dat de hond hierdoor niet meer bang zou zijn van de
                  hand van zijn baasje. Pas toch op. Je hond zal op termijn steeds banger worden van zijn
                  ‘boze baasje’.<br>
                  Het is veel effectiever om je hond bevelen aan te leren zoals “afblijven” of “loslaten”. Als
                  je deze bevelen vaak oefent, dan zal je hond deze op termijn begrijpen en je ook
                  gehoorzamen. Wanneer je jouw hond wil wegsturen omdat hij er een boeltje van
                  gemaakt heeft, stuur hem dan rustig naar zijn mand of kennel. Zo zullen zowel jij als je
                  hond minder gestresseerd geraken.
                </p>
                <h3>3. Ruk niet aan je honds leiband</h3>
                <p>
                  Sommige baasjes hebben de neiging om hun hond terecht te wijzen als deze een fout
                  heeft begaan door hard aan de leiband te trekken. Velen onder hen doen hem dan een
                  strakke leiband aan zodat hij niet te veel kan trekken aan de leiband. Maar wanneer je
                  dan zelf een aantal keer aan de leiband trekt om je hond in toom te houden, zal de
                  halsband de luchtpijp van je hond beetje bij beetje beschadigen. Blijft een wandeling aan
                  de leiband steeds een beetje een gevecht tussen hond en baasje, opteer dan bijvoorbeeld
                  voor een harnas. Zo kan jij je hond nog steeds leiden, maar raakt zijn luchtpijp niet
                  beschadigd.
                </p>
                <h3>4. Gebruik geen vallen wanneer je hond op de tafel of op andere meubelen klimt</h3>
                <p>
                  De meeste honden houden ervan om rond te snuffelen in de keuken op zoek naar lekkere
                  etensrestjes die er zijn achtergelaten. Sommige honden zullen nog iets verder gaan door
                  op de tafel of het aanrecht te proberen klimmen op zoek naar voedsel. Een mogelijkheid
                  die soms wordt gesuggereerd om dit te vermijden is het opzetten van muizenvallen op
                  de tafel of het aanrecht om je hond af te schrikken.<br>
                  Het is echter veel effectiever om je hond te proberen af te leiden met iets anders,
                  bijvoorbeeld een bot of iets lekkers. Zo kan jij tegelijkertijd rustig al het eten op een
                  veiligere plaats zetten. Houd er rekening mee dat je hond een sterk ontwikkeld
                  reukorgaan heeft. Een cake verstoppen onder een deksel zal niet helpen. Stop de cake
                  gewoon onmiddellijk in de kast. Betrap je jouw hond, beveel hem dan om er af te blijven
                  of maak een negatief geluid zodat hij beseft dat zijn gedrag niet aanvaard wordt. Boos
                  worden of schreeuwen heeft geen zin. Je hond zal de volgende keer gewoon proberen om
                  het iets heimelijker te doen.
                </p>
                  `}
        ></info-element>
        <info-element
        headline="Je hond weet of je betrouwbaar bent"
        icon="info"
        .content=${html`
                <p>Een nieuwe studie heeft aangetoond dat honden niet alleen weten hoe ze menselijke
                lichaamstaal moeten interpreteren, maar ook dat ze snel kunnen leren wanneer iemand
                niet de waarheid spreekt. Wanneer ze merken dat een persoon liegt, kan dat een invloed
                hebben op de mate waarin ze gezag van hem of haar zullen aanvaarden in de toekomst.<br>
                Akiko Takaoka, een Japanse academicus, bestudeerde het gedrag van honden. De
                resultaten van haar studie werden gepubliceerd in het wetenschappelijke tijdschrift
                Animal Cognition. Takaoka onderwierp 340 honden aan de volgende oefening: ze
                verstopte eten in een container, een andere container liet ze leeg.</p>
                <p>De test bestond uit 3 fases:</p>
                <ol>
                  <li>Een persoon wees naar de container waarin het eten verstopt zat.</li>
                  <li>Eerst werd de inhoud van beide containers aan de hond getoond. Daarna wees</li>
                  <li>dezelfde persoon als in test  naar de lege, en dus ‘foute’, container.</li>
                  <li>De persoon wees daarna opnieuw naar de ‘juiste’ container.</li>
                </ol>
                <p>
                  Wat bleek? Na de tweede fase van de test vertrouwde de hond de testpersoon niet meer,
                  dus wanneer deze daarna opnieuw naar de ‘juiste’ container wees, wou de hond niet
                  meer naar binnen gaan. Wanneer er echter een nieuwe testpersoon bij het experiment
                  betrokken werd die naar dezelfde container wees dan de eerste testpersoon,
                  vertrouwde de hond hem wel. Volgens Takaoka komt dit omdat “honden mensen
                  onmiddellijk minder betrouwbaar vinden van zodra deze één keer niet de waarheid
                  vertellen.”
                </p>
                <h3>Je hond trainen</h3>
                <p>
                  De resultaten van deze studie zijn zeer interessant voor mensen die zich afvragen hoe
                  hun hond denkt, maar ook voor diegenen die hun hond willen trainen. Amber
                  Burckhalter, een Amerikaanse experte in het gedrag van honden, zegt dat de relatie
                  tussen de hond en het baasje gebaseerd moet zijn op vertrouwen. “Wanneer je het
                  vertrouwen van je hond hebt gewonnen, zal hij je gemakkelijker gehoorzamen in het
                  dagelijkse leven. Vertrouwt hij je niet, dan zal hij je mijden. In extreme gevallen kan je
                  hond hierdoor angstig of net agressief reageren.”
                </p>
                  `}
        ></info-element>
        <info-element
        headline="Rond is ongezond voor mens en hond"
        icon="info"
        .content=${html`
              <p>Natuurlijk staat er op honden weinig druk tijdens het zomerseizoen. Ze moeten tijdens de
              lentemaanden niet naar de sportschool om vetrolletjes weg te werken zodat ze nog aantrekkelijk
              worden gevonden door andere honden. Maar ook bij honden brengt overgewicht een hoop
              problemen met zich mee – bijna dezelfde problemen als bij mensen. En net als bij ons is
              overgewicht ook erg veel voorkomend bij dieren: zo'n 60% van de volwassen honden heeft
              overgewicht of zal het in de toekomst nog krijgen door de leeftijd of door een gebrek aan
              beweging.</p>
              <h3>De gevolgen van overgewicht</h3>
              <p>
                Het lijkt natuurlijk niet zo'n groot probleem: overgewicht bij je hond maakt hem of haar
                misschien een stuk schattiger. Maar het is wel degelijk ernstig. Bedenk eens dat een hond die 10
                kilo weegt waar die normaal gesproken 8,0 kilo zou moeten wegen, ongeveer zo dik is als een
                mens die 100 kilo weegt terwijl hij eigenlijk maar 80 kilo zou mogen wegen. Het is dan ook niet
                vreemd dat overgewicht bij dieren dezelfde gevolgen heeft als bij ons:
              </p>
              <ul>
                <li>je huisdier zal hartproblemen kunnen krijgen</li>
                <li>ademhalingsproblemen komen veel voor bij huisdieren met overgewicht</li>
                <li>je hond zal eerder diabetes krijgen</li>
                <li>het beendergestel van je huisdier zal eerder onder het gewicht moeten lijden</li>
                <li>ook komen maag- en darmproblemen veel voor bij honden met overgewicht.</li>
              </ul>
              <h3>Snoepjes geven uit liefde</h3>
              <p>
                Je verwent je hond. Dat doen we allemaal. En eigenlijk is dat overgewicht dan ook een gevolg van
                de liefde die je voor je huisdier voelt. Je geeft een hond eten als hij honger heeft, omdat je het
                huisdiertje graag ziet. Helaas maakt liefde blind, ook hier. Je vergeet al snel dat de extra kilo's die
                het beestje meedraagt nadelig kunnen zijn voor zijn of haar gezondheid.
              </p>
              <h3>Wees actief</h3>
              <p>
                Overgewicht is trouwens ook vaak het gevolg van een gebrek aan beweging. En ook dat gebrek
                aan beweging zorgt weer voor extra lasten bij het huisdier.
              </p>
              <ul>
                <li>de gewrichten van de hond worden zwak</li>
                <li>de hond gaat een hekel hebben aan beweging omdat de gewrichten beschadigd zijn en dus pijn doen.</li>
                <li>ook raakt het bindweefsel van de dieren aangetast.</li>
                <li>Vooral oudere honden zullen deze problemen snel ondervinden.</li>
              </ul>
              <h3>Tip</h3>
              <p>
                Denk je dat jouw hond overgewicht heeft, of ben je er bang voor dat het huisdiertje er last van
                zal krijgen, neem dan snel contact op met de dierenarts. Die zal je helpen bij het opstellen van
                een goed trainingsprogramma, zodat je hond snel fit en actief wordt. Bovendien kan je
                dierenarts je zeggen welk voedsel je het beste kan aanschaffen voor je hond.
              </p>
                  `}
        ></info-element>
        <info-element
        headline="Hondensnoepjes"
        subline="welke zijn het gezondst en wanneer en hoe moet je ze geven?"
        icon="info"
        .content=${html`
                <p>Wanneer je het gedrag van een hond wilt veranderen, dan is positieve versterking vaak
                een van de belangrijkste technieken hiervoor. Positieve versterking kan heel wat
                vormen aannemen, maar het geven van speciale hondensnoepjes lijkt zowel bij baasjes
                als bij hun honden hoog boven de rest uit te tronen. Een hond trakteren op een lekkere
                snack is dan ook niet alleen een gebaar van liefde, maar vormt tegelijkertijd ook een
                cruciale factor om goed gedrag aan te leren en te belonen. Aangezien hondensnoepjes
                erg belangrijk zijn in de opvoeding van een hond, geven we je enkele tips mee over
                welke lekkernijen het beste zijn en wanneer en hoe je ze het beste kan geven.</p>
                <h3>Waarom werken hondensnoepjes zo goed?</h3>
                <p>
                  Het geven van hondensnoepjes is een effectieve techniek om heel wat verschillende
                  redenen, maar vooral het reukvermogen van je favoriete viervoeter lijkt hierin een grote
                  rol te spelen. Dat reukvermogen is namelijk zo goed ontwikkeld dat honden een
                  traktatie al vanop een afstand van achttien meter kunnen ruiken. Meer nog, vaak zijn ze
                  zelfs in staat om ook de belangrijkste ingrediënten waar te nemen.
                </p>
                <h3>Wanneer kan je het best hondensnoepjes geven?</h3>
                <p>
                  Wanneer je hond rustig en gehoorzaam is, dan kan het geven van een hondensnoepje dit
                  gedrag versterken. Wanneer je hond zich echter veel te opgewonden en geprikkeld
                  gedraagt, vermijd dan om je hond op iets lekkers te trakteren. Op die manier beloon je
                  immers het verkeerde gedrag. Daarnaast is ook het tijdstip van de beloning erg
                  belangrijk. Hondensnoepjes zullen doorgaans enkel hun vruchten afwerpen wanneer je
                  ze aanbiedt tussen twee maaltijden in. Wanneer je je hond echter op een snoepje
                  trakteert vlak voor of na een maaltijd, dan zal het gewenste effect hoogstwaarschijnlijk
                  uitblijven. Verder is het ook belangrijk om te kiezen voor snoepjes die je hond ook
                  daadwerkelijk lekker vindt. Probeer wel voor variatie te zorgen en probeer ook om het
                  lekkerste voor het laatste te bewaren. Het kan namelijk zijn dat je hond interesse begint
                  te verliezen in de techniek en deze laatste vuistregel zorgt er dan voor dat je huisdier
                  terug gemotiveerd wordt.
                </p>
                <h3>Hoe kan je hondensnoepjes het best geven?</h3>
                <p>
                  Om te beginnen is het belangrijk om je hond altijd eerst te laten ruiken aan de traktatie,
                  maar tegelijkertijd het snoepje op een afstand te houden en je huisdier te laten wachten.
                  Onthoud dat honden een erg goed ontwikkeld reukvermogen hebben, waardoor het niet
                  nodig is om een lekkernij recht onder hun snuit te duwen. De neus vormt namelijk het
                  belangrijkste zintuig van een hond, gevolgd door de ogen en de oren. Vanaf het moment
                  dat je viervoeter de heerlijke geur opsnuift, zal hij of zij waarschijnlijk enthousiast
                  beginnen rond te springen en misschien zelfs proberen om op jou springen. In dat geval
                  is het belangrijk dat je als baasje een afkeurende houding aanneemt, zowel qua attitude
                  als lichaamshouding. Dat kan je doen door langzaam naar achteren of naar één kant te
                  bewegen en vervolgens even te wachten. Geduld is hier de sleutel tot succes, aangezien
                  een grote portie geduld van het baasje zich zal vertalen naar een welopgevoede hond. Na
                  een tijdje zal je hond dan beginnen te beseffen wat hij of zij moet doen om een traktatie
                  te veroveren. Hij of zij zal rustig gaan zitten en zal kalm en afwachtend naar jou kijken.
                  Dat is het moment waarop je je huisdier met de lekkernij mag belonen.
                </p>
                <h3>Welke hondensnoepjes kan je het best kiezen?</h3>
                <p>
                  Wanneer je hondensnoepjes koopt, zorg er dan voor dat je hond de uitgezochte
                  lekkernijen ook daadwerkelijk lekker vindt. Gebruik hierbij je gezond verstand en
                  probeer ook om steevast een blik te werpen op de ingrediëntenlijst. Wanneer die lijst
                  onbekende of onuitspreekbare ingrediënten bevat, dan is het goed mogelijk dat de snack
                  niet in de smaak zal vallen bij je hond. Vergeet tijdens je zoektocht naar de juiste snack
                  ook niet dat honden andere smaakvoorkeuren hebben dan mensen. Jij zou misschien de
                  luchtpijp van een rund niet meteen aan je tafelgasten voorschotelen, maar voor je hond
                  kan het wel een ware feestmaaltijd zijn. Verder moet je ook onthouden dat niet alle
                  lekkernijen even geschikt zijn om aan een hond te geven. Mensen genieten bijvoorbeeld
                  graag van een heerlijke chocoladereep, maar dat wil niet zeggen dat een hond dat ook
                  zal doen. Meer nog, chocolade kan je huisdier zelfs ziek maken. Houd er dan ook
                  rekening mee dat veel dingen die wij eten vaak slecht zijn voor honden, aangezien hun
                  maag niet alles even goed kan verteren.
                </p>
                  `}
        ></info-element>
        <info-element
        headline="Vrouwen en honden"
        subline="De redenen voor hun hechte band"
        icon="info"
        .content=${html`
              <p>Door de eeuwen heen lijkt de band tussen vrouwen en honden alleen maar hechter te worden. Vandaag
              de dag is het zelfs geen verrassing meer dat de man naar de zetel wordt verbannen wanneer de hond zijn
              plaats in het bed heeft ingenomen. Hoewel honden vroeger vooral werden gebruikt om de man te
              vergezellen op de jacht of om te helpen bij dagelijkse karweitjes, hebben ze zich vandaag de dag
              voornamelijk omgedoopt tot gezelschapsdier van de vrouw. Maar waarom lijken deze huisdieren zo’n
              sterke voorkeur te hebben voor het vrouwelijke geslacht?</p>
              <h3>De relatie tussen een vrouw en haar hond</h3>
              <p>
                Tegenwoordig heeft het harde werkleven van een hond plaatsgemaakt voor een luilekkerleventje. Terwijl
                ze vroeger na een zware dag vol arbeid moesten slapen in een koude schuur, vullen de meeste honden
                tegenwoordig hun dag door al liggend op een zacht tapijt te staren naar een knapperend haardvuur. Eén
                ding is dan ook zeker: ze houden ervan om vertroeteld te worden. De reden voor hun voorkeur voor
                vrouwelijk gezelschap is dan ook simpel. Vrouwen staan namelijk bekend als het verzorgende geslacht en
                dat is ook iets wat deze slimme viervoeters hebben ingezien. Tijd doorbrengen met een vrouw impliceert
                voor hen dan ook een grotere kans op verwennerij. Maar ook omgekeerd hebben vrouwen heel wat
                redenen om in het gezelschap van hun viervoeters te vertoeven. Honden kunnen namelijk stress
                verminderen of doen verdwijnen en zijn bovendien geweldige luisteraars die nooit een ongewenst oordeel
                vellen. Daarbij komt nog dat de meeste honden hun vrouwelijk baasje een veilig en beschermd gevoel
                bieden, waardoor ze steeds vaker op de voorgrond treden ter vervanging van de man.
              </p>
              <h3>De psychologie van de moeder-hond dynamiek</h3>
              <p>
                Vrouwen zijn dus verzorgende types en dat komt vooral tot uiting op het moment dat ze moeder worden.
                Die heuglijke gebeurtenis lijkt bovendien de band tussen een vrouw en haar hond alleen maar hechter te
                maken. Om dat fenomeen te verklaren, voerde Het Instituut voor Psychologie aan de Universiteit van
                Milaan een studie uit naar de relatie tussen een moeder en haar hond. Die studie toonde aan dat het
                gedrag van een moeder ten opzichte van haar baby ook de interactie bepaalt met andere sociale partners,
                namelijk de hond. Daarnaast heeft de hechte band tussen een moeder en een hond ook deels te maken met
                het bijzondere observatievermogen van honden. Wanneer een hond zich liefdevol gedraagt ten opzichte
                van een kind en voor dit gedrag vervolgens lof ontvangt, zal de viervoeter gemotiveerd zijn om in de buurt
                van het kind te blijven en te helpen bij verschillende ouderschapstaken. Dat levert de hond op zijn beurt
                nog meer aandacht en lof op, wat de band tussen beiden alleen maar versterkt.
              </p>
              <h3>Onvoorwaardelijke steun in elke situatie</h3>
              <p>
                De unieke dynamiek tussen een moeder en haar hond is dus duidelijk geen fabeltje. Dat tonen niet alleen
                de resultaten van bovenstaande studie aan, maar blijkt ook uit heel wat situaties in de praktijk. Neem nu
                het voorbeeld van Sarah Rodgers, die vijf jaar geleden het trotse baasje van Porter werd. Drie jaar later
                trouwde ze en één jaar later werd ze moeder van een zoontje. Al snel werd duidelijk dat Sarah zich geen
                zorgen maakte over haar vaardigheden als nieuwe moeder, maar wel over hoe Porter zich bij al deze
                veranderingen voelde. Volgens Sarah kreeg Porter namelijk voor de geboorte van haar zoon alle aandacht,
                terwijl die aandacht nu sterk verminderd is. Daarom probeert ze speciale tijd in te lassen om aan haar
                hond te besteden. Sarah vindt het dan ook opmerkelijk hoe sterk de band met haar hond is opgebloeid
                sinds de geboorte van haar kind. Zo neemt Porter vaak de rol van haar man op wanneer die op zakenreis
                is. Wanneer Sarah zich angstig of verdrietig voelt, dan snelt Porter toe om haar een beschermend gevoel te
                bieden. Maar daar blijft het niet bij. Volgens Sarah is haar geliefde viervoeter ook bijzonder intuïtief. Zo
                leek hij tijdens de laatste drie dagen van haar zwangerschap als het ware aan haar vastgekleefd te zijn. Hij
                volgde haar overal met een bezorgde uitdrukking en vanaf het moment dat Sarah ging zitten, drukte hij
                zijn hoofd tegen haar buik. De relatie tussen een vrouw en haar hond is dus geen éénrichtingsverkeer
                waarbij de hond mag rekenen op pure verwennerij, maar waarbij de vrouw ook mag rekenen op
                onvoorwaardelijke steun in elke situatie.
              </p>
                  `}
        ></info-element>
        <info-element
        headline="Rawhide kauwbotten"
        subline="De plus- en minpunten"
        icon="info"
        .content=${html`
              <p>Wie hond zegt, krijgt vaak direct het beeld in zijn hoofd van een trouwe viervoeter die
              rustig aan zijn bot aan het knabbelen is. Kauwen op een bot maakt dan ook al
              eeuwenlang deel uit van de dagelijkse routine van honden. Daarom geven eigenaars
              vaak rawhide botten of botten van ongelooide huid als verrassingssnack aan hun
              geliefde huisdier. Maar wat is rawhide, hoe wordt het gemaakt en wat zijn de plus-en
              minpunten? We geven je een antwoord op enkele veelvoorkomende vragen.</p>
              <h3>Wat is het?</h3>
              <p>
                Rawhide is de binnenste zachte huid van een dier. Om rawhide botten te maken, maakt
                men meestal gebruik van het onderhuids bindweefsel van runderen, maar in principe
                kan het gemaakt worden van elk vee met een gespleten hoef. Zo kan de huid ook
                afkomstig zijn van een varken, een schaap, een paard en zelfs een buffel. In principe
                maakt het niet zoveel uit van welk dier de huid gebruikt wordt, aangezien de kwaliteit
                en de veiligheid van het product vooral afhankelijk zijn van de omstandigheden waarin
                het dier geleefd heeft. Die omstandigheden kunnen namelijk een cruciale invloed
                uitoefenen op de dikte en de droogte van het product.
              </p>
              <h3>Hoe wordt het gemaakt?</h3>
              <p>
                Wanneer rawhide wordt geïmporteerd uit het buitenland, wordt het vaak eerst in een
                chemisch bad ondergedompeld om het beter te kunnen bewaren tijdens het transport.
                Wanneer het uit het binnenland zelf afkomstig is, wordt het enkel getransporteerd in
                gekoelde containers om op die manier verderf te voorkomen. Het gevolg hiervan is dat
                geïmporteerde rawhide botten vaak met een extra dosis chemicaliën te maken krijgen,
                terwijl botten die afstammen uit het binnenland doorgaans minder chemicaliën bezitten.
                Nadat de rawhide getransporteerd is, wordt het product verder verwerkt. In dat geval
                wordt het eerst geweekt in een as- en loogoplossing om zowel haar en vet te
                verwijderen. Hierna wordt het doorgaans gereinigd met water of met bleekmiddel en/of
                waterstofperoxide. In sommige landen worden hiervoor iets gevaarlijkere chemische
                stoffen gebruikt. Ten slotte kunnen er eventueel ook kunstmatige smaakstoffen aan het
                bot worden toegevoegd die je hond gegarandeerd kauwgenot opleveren.
              </p>
              <h3>Waarom houden honden ervan?</h3>
              <p>
                Er bestaat geen twijfel over dat honden ervan houden om op rawhide botten te kauwen.
                Ze ervaren namelijk een soort drang die voor hen erg functioneel is. Zo is het allereerst
                een manier voor puppy’s om te reageren op nieuwe tandjes die aan het groeien zijn.
                Wanneer de hond volwassen is, gebeurt kauwen eerder instinctmatig. In dat geval is het
                vooral een manier om voldoening te geven aan de kauwdrang, om te spelen en om hun
                tanden te reinigen. Ten slotte kan kauwen ook een reactie zijn op angstige of
                stresserende gevoelens.
              </p>
              <h3>Wat zijn de plus- en minpunten?</h3>
              <ul style="list-style-type: none;">
                <li>
                  Pluspunten
                  <ul style="list-style-type: none;">
                    <li>+ Ze zijn een oplossing voor de drang van honden om ergens op te kauwen.</li>
                    <li>+ Wanneer ze op een correcte manier worden geconsumeerd, kunnen ze het gebit van je hond reinigen.</li>
                    <li>+ Voor heel wat baasjes zijn ze een goedkope verrassing om voor hun hond te kopen.</li>
                  </ul>
                </li>
                <li>
                  Minpunten
                  <ul style="list-style-type: none;">
                    <li>- Ze kunnen een ongewenste bron zijn van gevaarlijke chemicaliën</li>
                    <li>- Wanneer ze slechter van kwaliteit zijn – namelijk dunner en droger – dan zou je hond er weleens een tand op kunnen breken, wat op zijn beurt kan leiden tot heel wat pijn en een hoge rekening bij de dierenarts.</li>
                    <li>- Botten met toegevoegde smaakstoffen kunnen bij gevoelige honden tot gezondheidsproblemen leiden, zoals braakneigingen en diarree.</li>
                  </ul>
                </li>
                <li>
                  De gevaren
                  <ul style="list-style-type: none;">
                    <li>! Wanneer het bot niet het geschikte formaat heeft voor je hond, dan kan dat leiden tot verstikkingsgevaar.</li>
                    <li>! Grote stukken kunnen soms in hun geheel worden ingeslikt. Die stukken zijn echter onverteerbaar en kunnen leiden tot ernstige ziekte en zelfs de dood.</li>
                  </ul>
                </li>
              </ul>
              <h3>Waarop moet je letten?</h3>
              <h4>Kijk naar de origine van het bot</h4>
              <p>
                Wanneer je een bot uitkiest om je trouwe viervoeter mee te belonen, zorg er dan voor
                dat je op voorhand uitzoekt waar het gemaakt is. Het land van oorsprong heeft namelijk
                een grote invloed op de kwaliteit en de veiligheid van het product, aangezien rawhide
                die in het buitenland gemaakt is vaak meer chemicaliën bevat. Daarnaast is het ook
                beter voor je hond om de varianten met smaakstoffen te vermijden.
              </p>
              <h4>Besteed aandacht aan lengte en gewicht</h4>
              <p>
                Zorg ervoor dat het formaat van het bot dat je kiest overeenkomt met de grootte van je
                hond. Daarnaast zijn ook lange en cilindervormige botten beter.
              </p>
              <h4>Controleer het kauwgedrag van je hond</h4>
              <p>
                Probeer altijd je huisdier in de gaten te houden wanneer je hem of haar een traktatie
                geeft om op te kauwen. Sommige honden zijn namelijk gulziger dan anderen en zullen
                proberen om hun traktatie in een recordtempo op te peuzelen. Het gevaar bestaat erin
                dat wanneer ze te snel kauwen, ze makkelijk kunnen stikken in een te groot stuk. Denk
                er daarom altijd aan om de botten af te nemen wanneer ze kort genoeg zijn geworden
                om in één keer door te slikken. Op die manier kunnen tragedies vermeden worden.
              </p>
                  `}
        ></info-element>
        <info-element
        headline="Puppy voor langere periode alleen laten"
        subline="Een checklist"
        icon="info"
        .content=${html`
                <p>Hoe ouder je puppy wordt, hoe meer je de neiging kan hebben om hem voor langere tijd
                alleen te laten. Zeker wanneer je puppy ongeveer 76 weken oud is, zo’n 7 à 8 uur zijn
                plas kan ophouden en de meeste van zijn slechte manieren, zoals kussens verscheuren,
                is afgeleerd. Houd er toch ook rekening mee dat je puppy zowel fysisch als mentaal kan
                afzien wanneer hij voor een langere periode wordt alleen gelaten. De stress die deze
                veroorzaakt in combinatie met het feit dat je puppy beseft dat hij binnenshuis niet naar
                de WC mag gaan, kunnen ervoor zorgen dat je puppy ongelukkig wordt.<br>
                De ideale oplossing is misschien wel om je puppy te trainen om te verblijven in zijn
                kennel. Het idee erachter is dat je puppy de kennel gaat beschouwen als een veilige
                plaats die hij associeert met leuke dingen. Zo zal je puppy minder gestresseerd zijn als jij
                van huis bent. Sommige hondeneigenaars houden echter niet van deze methode en laten
                hun puppy liever buiten wanneer ze voor langere tijd weg zijn. In dat geval kan je best
                een bepaald gebied afbakenen waar je puppy vrij kan bewegen zonder veel verleidingen
                in de buurt. Welke methode je ook kiest, gebruik deze checklist om ervoor te zorgen dat
                je puppy de periode wanneer jij weg bent zo optimaal mogelijk kan doorbrengen.</p>
                <h3>Je puppy alleen thuislaten? Gebruik deze checklist!</h3>
                <ol><li>Beveilig de ruimte</li>
                <p>
                  Baby- of hondenhekjes zijn handig wanneer je de keuken of de woonkamer wil
                  afbakenen en wanneer je puppy niet getraind is om te leven in een kennel. Je kan
                  hem ook in een afgesloten kamer plaatsen, maar zorg dan zeker dat er voldoende
                  water is en een bed voor je puppy om in te slapen.
                </p>
                <li>Scan de ruimte op eventuele verleidingen</li>
                <p>
                  Voor je vertrekt, is het een goed idee om eerst even goed na te kijken of er niets
                  gevaarlijk of verleidelijk is voor je puppy in de ruimte waar hij verblijft. Ook
                  wanneer je puppy in een kennel verblijft, kan je deze beter even goed checken.
                  Misschien heeft je puppy wel enkele zaken verzameld en verstopt.
                </p>
                <li>Zet de televisie of de radio op</li>
                <p>
                  Een beetje achtergrondgeluid kan je puppy helpen om zich op zijn gemak te
                  voelen. Zet op televisie bijvoorbeeld Animal Planet op of zet de radio op een
                  zender met klassieke muziek.
                </p>
                <li>Laat je puppy geleidelijk wennen aan het feit dat hij alleen gelaten wordt</li>
                <p>
                  Ga er niet vanuit dat je puppy zich gemakkelijk zal aanpassen aan het feit dat hij
                  voor een aantal uren alleen gelaten wordt. Hoewel honden tijd anders ervaren
                  dan mensen, zullen honden die voor lange tijd alleen worden gelaten zich
                  beginnen te vervelen of sneller dingen beginnen te vernietigen, zoals schoenen of
                  kussens. Je puppy moet leren alleen te zijn. Laat hem eerst een uur of twee alleen
                  en bouw dan geleidelijk aan op.
                </p>
                <li>Geef je puppy voldoende aandacht</li>
                <p>
                  Als je het grootste deel van de dag niet thuis bent, zorg dan zeker dat je
                  voldoende quality time met je puppy doorbrengt wanneer je wél thuis bent. Let
                  wel op dat je niet te veel de aandacht trekt van je puppy wanneer je vertrekt of
                  thuiskomt na een langere periode. Gedraag je gewoon zoals anders. Eerst
                  uitgebreid afscheid nemen of je puppy direct beginnen te vertroetelen wanneer je
                  thuis komt, is een slecht idee. Dat maakt het voor je puppy ook moeilijker om zich
                  aan te passen aan de ‘nieuwe’ situatie.
                </p>
                </ol>
                <h3>Niet té lang alleen</h3>
                <p>
                  Het is aan te raden om je puppy niet meer dan 5 uur alleen te laten, hoewel sommige
                  puppy’s tot 8 uur alleen gelaten kunnen worden. Als je ’s middags niet langs huis kan
                  gaan, dan is het een goed idee om een hondenuitlater in te huren. Heb je een goed
                  contact met je buren? Dan kan je natuurlijk ook aan hen vragen om je hond even buiten
                  te laten! Ga je op reis, laat je puppy dan niet alleen. Huur ofwel een hondensitter in of
                  breng hem naar een hondenpension waar er ook activiteiten worden georganiseerd
                  voor de honden.<br>
                  Het is niet altijd evident om tijd te maken voor je puppy naast je werk en hobby’s, maar
                  vergeet niet dat je puppy deel uitmaakt van de familie. Je wil toch ook dat je familie
                  gezond en gelukkig is!
                </p>
                  `}
        ></info-element>
        <info-element
        headline="Virale infecties en ziektes bij honden"
        icon="info"
        .content=${html`
              <p>Een infectie wordt veroorzaakt door microbes, virussen, bacteriën, schimmels, protozoa,
              parasieten of prionen (afwijkende eiwitten). Honden worden meestal getroffen in hun meest
              kwetsbare periode: wanneer ze een puppy zijn. Bij honden zijn de meeste virale infecties
              gekend, maar als de ziektes niet op tijd ontdekt en behandeld worden, kunnen ze fataal aflopen.</p>
              <h3>Hondsdolheid (rabiës)</h3>
              <p>
                Hondsdolheid is een ernstige virale ziekte die bij elk zoogdier kan voorkomen. Het virus schuilt
                in speeksel. Besmetting gebeurt via een beet, een krab of zelfs een lik van een besmet dier. De
                symptomen zijn verandering van gedrag, hoofdpijn, koorts, pijn, watervrees, verlamming van de
                kaakspieren, kwijlen, volledige verlamming, coma met de dood tot gevolg.
                Vaccinatie is in bijna alle Europese landen verplicht, behalve in België en Nederland. Hou hier
                rekening mee als je met je hond op reis gaat!
              </p>
              <h3>Parvovirus</h3>
              <p>
                Het parvovirus is een ernstige en besmettelijke aandoening. De ziekte komt, ondanks vaccinatie,
                nog vaak voor bij puppy's. Symptomen zijn braken, bloederige diarree, ademhalingsproblemen,
                cardiovasculaire problemen en ernstige ontstekingen in de darmen. Bij behandeling is
                hospitalisatie nodig.
              </p>
              <h3>Coronavirus</h3>
              <p>
                Het coronavirus lijkt de lichte variant van het parvovirus. De symptomen zijn gelijkaardig:
                braken en diarree. Het virus verspreidt zich via uitwerpselen. Vooral voor puppy's is deze ziekte
                gevaarlijk, daarom krijgen ze een vaccin. Bij een ernstige infectie is hospitalisatie nodig.
              </p>
              <h3>Hondenziekte</h3>
              <p>
                Vooral pups zijn vatbaar voor deze dreigende ziekte. De symptomen zijn een loopneus, hoesten,
                ontstekingen, hersenvliesontsteking met zenuwletsels of de dood tot gevolg.
              </p>
              <h3>Hondengriep</h3>
              <p>
                Hondengriep is een ademhalingsinfectie. De symptomen zijn hoge koorts en een longontsteking.
                Onmiddellijke behandeling is vereist.
              </p>
              <h3>Hepatitis</h3>
              <p>
                Deze besmettelijke leverziekte wordt verspreid via urine. De symptomen zijn koorts en
                ontsteking van de lever.
              </p>
              <h3>Canine Herpesvirus</h3>
              <p>
                Dit virus is de belangrijkste oorzaak van puppysterfte. Puppy's krijgen deze ziekte via hun
                moeder. De symptomen zijn zwakte, depressie, zachte gele uitwerpselen en verlies van
                zuigreflex. Behandeling van puppy's is moeilijk. Puppy's die de besmetting overleven hebben
                vaak een aantasting in hun hersenen.
              </p>
              <h3>Pseudorabiës</h3>
              <p>
                Deze ziekte komt meestal voor bij varkens. Toch kan deze ziekte ook bij honden een fatale afloop
                kennen. De symptomen lijken enorm op die bij hondsdolheid: jeuk, verlamming van de
                kaakspieren, agressie en kwijlen. Het zenuwstelsel wordt aangetast en dit leidt vaak tot de dood.
              </p>
              <h3>Canine minute virus</h3>
              <p>
                Deze besmettelijke ziekte veroorzaakt ademhalingsproblemen en darmproblemen bij jonge
                pups. De besmetting gebeurt oraal. De symptomen worden duidelijk bij puppy's van een tot drie
                weken: ernstige diarree, ademhalingsproblemen en anorexia. Deze ziekte kan fataal aflopen.<br>
                Voorkomen is beter dan genezen. Toch is het niet onmogelijk dat je hond besmet raakt. Hou
                veranderingen in zijn gedrag goed in het oog. Hoe sneller je de ziekte ontdekt, hoe meer kans op
                genezen!
              </p>
                  `}
        ></info-element>
        <info-element
        headline="Hoe kan je het zicht van je hond controleren?"
        icon="info"
        .content=${html`
              <p>Het tweede levensjaar van je hond is het moment om het zicht van hem/haar te laten nakijken. Op deze
              leeftijd moet de hond kleuren kunnen zien en zijn vermogen om details te zien moet ook optimaal zijn.
              Honden kijken anders dan mensen, wat betekent dat hun wereld anders is dan de onze. Hun gevoeligheid
              voor licht en beweging, visueel perspectief, diepte perceptie, en de kleurenvisie zijn allemaal helemaal
              anders dan de onze.</p>
              <h3>Eigenschappen van het zicht van een hond tegenover die van de mens:</h3>
              <h4>Gevoeligheid voor licht</h4>
              <p>
                Honden zien het beste bij weinig licht, terwijl de mens ontworpen is om het beste te zien bij helder licht.
                Dat maakt de hond een beter roofdier.
              </p>
              <h4>Gevoeligheid voor beweging</h4>
              <p>
                Honden kunnen een object detecteren in beweging tot wel 900 meter ver, terwijl wij alleen een stilstaand
                voorwerp kunnen detecteren van op ongeveer 600 meter afstand.
              </p>
              <h4>Visueel perspectief</h4>
              <p>
                Uiteraard heeft een hond een heel ander visueel perspectief dan een mens daarom is het nuttig om bij de
                communicatie met je hond te hurken op zijn niveau .
              </p>
              <h4>Diepte perspectief</h4>
              <p>
                Dit is afhankelijk van het binoculair zicht van een dier en wordt beïnvloed door de vorm van de schedel.
                Honden hebben tot ongeveer 60 graden in de diepteperspectief , wat vele minder is dan de mens.
              </p>
              <h4>Kleurenvisie</h4>
              <p>
                Vroeger werd gedacht dat honden alleen in zwart-wit kon zien en hoewel hun bereik kleiner is dan dat
                van de mens, hebben ze wel degelijk het vermogen om kleuren te zien. Het blijkt dat honden enkel in
                blauwe en gele kleuren kijken.
              </p>
              <h3>De tekenen dat je puppy’s zicht niet optimaal is kunnen zijn:</h3>
              <ul>
                <li>niet herkennen van familieleden</li>
                <li>tegen meubels aanlopen</li>
                <li>blaffen naar levenloze objecten</li>
              </ul>
              <p>
                Als je deze problemen waarneemt kan je pup een vroegtijdige behandeling krijgen, om zo verdere
                problemen te voorkomen. Het beste is om dit niet uit te stellen!<br>
                Het is makkelijk om het zicht van je pup zelf te testen. Ga voor je hond staan, beweeg je rechterhand alsof
                je een bevel gaat geven en beweeg dan je linkerhand. Als je dit een paar keer herhaalt en je puppy volgt je
                bewegingen goed mee, kan je er bijna zeker van zijn dat zijn zicht goed is.<br>
                Een andere truc is om je puppy mee te nemen naar een nieuwe plek. Als een hond al te gewend is aan je
                huis dan is het mogelijk dat hij uit gewoonte de objecten ontwijkt. Op een nieuwe plaats zal dit echter niet
                het geval zijn en zal je meteen merken of het zicht van je pup in orde is.
              </p>
                  `}
        ></info-element>
        <info-element
        headline="8 tips om te vermijden dat je hond vergiftigd raakt"
        icon="info"
        .content=${html`
              <p>Dagelijks raken verschillende honden ter wereld per ongeluk vergiftigd. Er zijn echter genoeg manieren om dit te
              vermijden. Volg deze tips om de veiligheid van je beste vriend te garanderen.</p>
              <ol>
                <li>Kindersloten</li>
                <p>
                  Hoewel kindersloten hoofdzakelijk bedoeld zijn voor kinderen, kan je ze ook perfect gebruiken om ervoor te
                  zorgen dat je honden de kasten niet kunnen openen. Zo kunnen ze niet aan het eten, het afval en ook niet aan
                  eventuele giftige stoffen.
                </p>
                <li>Bewaar je medicatie op een veilige plaats</li>
                <p>
                  Deze tip lijkt voor de hand liggend, maar soms kan je na het nemen van bepaalde medicatie al eens vergeten
                  om ze terug op haar plaats te leggen. Laat je jouw medicatie rondslingeren, bijvoorbeeld op de tafel, dan zou
                  je hond hier wel eens mee in contact kunnen komen, met alle gevolgen van dien.
                </p>
                <li>Zorg dat je geen vergif in huis hebt.</li>
                <p>
                  Als je niets giftigs is huis hebt, dan kan je hond niet vergiftigd geraken. Zorg dus dat je geen producten in
                  huis hebt met giftige bestanddelen. Ook bloemen kunnen giftig zijn. Kies daarom voor valse bloemen in
                  plaats van echte exemplaren.
                </p>
                <li>Licht bezoekers in</li>
                <p>
                  Niet iedereen weet wat wel en niet giftig is voor honden. Het is een goed idee om een lijst uit te hangen met
                  alle etenswaren die honden niet mogen eten, bijvoorbeeld op de koelkast. Zo mogen honden onder andere
                  geen druiven of uien eten, zaken die mensen wel gewoon kunnen eten. Schrijf op deze lijst ook een
                  telefoonnummer van een dierenarts voor het geval dat.
                </p>
                <li>Afblijven!</li>
                <p>
                  Leer je hond waarvan hij moet afblijven. Zo kan je zijn leven redden wanneer je eens per ongeluk iets laat
                  vallen of wanneer hij zijn zinnen heeft gezet op iets giftigs. Zorg dat hij vertrouwd raakt met het bevel
                  ‘afblijven’ en weet wat hij moet doen wanneer je hem dit toeroept.
                </p>
                <li>Loslaten!</li>
                <p>
                  Leer je hond wanneer hij iets moet loslaten. Zo kan je toch nog ingrijpen wanneer je hond iets giftigs in zijn
                  bezit heeft. Als je jouw hond goed traint, dan zal hij uitspuwen wat hij is zijn mond heeft. Ook kan je hem
                  trainen om alles uit te spuwen. Begin te oefenen met een tak.
                </p>
                <li>Niets oppikken van de grond</li>
                <p>
                  Wanneer je kleine kindjes hebt of zelf vaak spullen achterlaat op de grond, is het best om je hond te leren dat
                  hij niets mag oppikken wat op de grond ligt. Dat is niet altijd evident, maar wel heel effectief. Leer je hond
                  dat hij enkel dingen van op te grond mag oppikken of opeten als jij hem de toestemming geeft.
                </p>
                <li>Weet wat je kan verwachten</li>
                <p>
                  Je hond kan snel in moeilijkheden geraken, nog voor je het goed en wel beseft. Zorg ervoor dat je steeds weet
                  waar je hond is en waar hij mee bezig is. Als je jouw hond niet helemaal vertrouwt, zet ‘onveilige’ gebieden
                  dan af. Als je niet thuis bent, is het handig om je hond in zijn kennel te zetten. Zo ben je zeker dat er geen
                  ongelukken kunnen gebeuren
                </p>
              </ol>
                  `}
        ></info-element>
        <info-element
        headline="Pups tussen 13 en 18 maanden"
        subline="Wat te verwachten?"
        icon="info"
        .content=${html`
                <p>Na het eerste levensjaar van je pup is het belangrijk om te weten dat het leren, zowel voor jou als voor de hond, nog
                niet gedaan is. Het moeilijkste gedrag van je hond merk je vooral in het eerste jaar, maar ook na de 12de maand
                durven er nieuwe dingen opduiken die je misschien niet zo leuk vindt. Voorbeelden hiervan zijn vaak verlatingsangst,
                het graven van kuilen en springen. Ook de oude gewoontes kunnen terug de kop opsteken wanneer je pup deze niet
                verder bevordert. Als je bent overgeschakeld naar volwassenvoeding is het ook belangrijk dat je de porties aanpast
                aan het gewicht en de grootte van je pup, niet alle voeding is goed voor elke hond! Hieronder vind je enkele zaken
                waar je zeker rekening mee moet houden in het 2de levensjaar van je hond!</p>
                <h3>Wat valt er te verwachten bij je puppy’s eerste jaarlijks onderzoek?</h3>
                <p>
                  Je dierenarts zal je vast niet aanraden om je pup elk jaar tegen allerlei kwaaltjes te vaccineren, maar dat wil niet
                  zeggen dat het niet belangrijk is dat je je pup wel elk jaar goed laat nakijken. Het jaarlijks onderzoek kan wel even
                  duren, dus is ook meteen de perfecte moment om al je lijst vragen en zorgen te delen met de dierenarts, zo kan hij/zij
                  hier meteen rekening mee houden. Bij het allereerste onderzoek, zal de dierenarts je hond eerst heel grondig
                  onderzoeken voor hij de vaccinaties toedient. Tijdens het onderzoek is het als baasje belangrijk om zeer kalm te
                  blijven want dan kan je puppy zo jou gedrag overnemen. Het jaarlijks onderzoek wordt ook wel neus-tot-staart
                  onderzoek genoemd omdat de dierenarts zijn tijd neemt om je puppy van top tot teen te onderzoeken. De eerst
                  vaccinaties die je hond toegediend worden zijn tegen DHLPP, Corona en Lyme.
                </p>
                <h3>Hoe kan je zien dat je puppy goed reageert op volwassenen voeding?</h3>
                <p>
                  Het is vrij makkelijk om te zien of je puppy niet goed om kan met de nieuwe voeding. Als je hond last heeft van
                  diarree, verstopping, Coprofagie, een opgeblazen buik, huiduitslag of allergie, hyperactiviteit, agressie of elke andere
                  verandering in de persoonlijkheid, dan ligt dit hoogstwaarschijnlijk aan de voeding die hem toegediend wordt. Er is
                  een overvloed van keuze in hondenvoer wat het moeilijk maakt om de juiste te kiezen, maar dan weet je ook zeker dat
                  de juiste voeding voor jou hond ertussen staat!<br>
                  Als je hond een te losse stoelgang heeft dan is het belangrijk om geen voedsel te geven waar olie in zit. Om constipatie
                  tegen te gaan is het weer belangrijk van voeding te geven zonder olie en met meer koolhydraten. Het opgeblazen
                  buikje van je puppy kan niet alleen door de foute voeding verschijnen, maar ook als je je puppy twee keer per dag eten
                  geeft i.p.v. drie maal. Als je je puppy toch vaker eten geeft en het opgezwollen buikje gaat niet weg dan is het
                  aangeraden om voeding te geven met meer koolhydraten.<br>
                  Puppy’s die hyperactief worden van de nieuwe voeding hebben meer proteïne nodig. Wat belangrijk is om als baasje
                  te weten tijdens het veranderen van voeding is dat dit heel rustig moet gaan. Vul de eerste week ongeveer een kwartje
                  van de etensbak met het nieuwe voedsel. Na 3 weken zou je het resultaat normaal al moeten kunnen waarnemen.
                </p>
                <h3>Hoe voorkom je dat je hond gaat vechten met andere honden?</h3>
                <p>
                  Als we denken aan de typische hondengevechten dan denken we meteen aan de populaire rassen die speciaal gefokt
                  zijn om te vechten. Echter is dit niet het geval want elk ras is in staat om te vechten.<br>
                  Honden vechten vaak om te laten zien van wie het territorium is waar ze zich op bevinden, maar ook als de ene hond
                  dominant probeert te zijn tegenover de andere. Agressie tussen honden kan overal opduiken en het is dus zeer
                  belangrijk om dit zo snel mogelijk af te leren. Er zijn veel aanwijzingen dat een pup gaat om te vechten voordat het
                  daadwerkelijk gebeurt zoals rechtstaand haar, grommen en niet meer reageren op commando’s. om dit te voorkomen
                  is het cruciaal dat je hond weet dat jij de baas bent, dit doe je door hem de basis commando’s “zit”, “lig” en “kom hier”
                  te leren zodat hij zeker naar je luistert. Als je puppy een goede interactie heeft met een andere hond is het belangrijk
                  dat je hem hiervoor beloont.<br>
                  Puppy’s die in een gevecht terecht komen, kunnen twee kanten uit. Enerzijds zal je hond nooit meer een gevecht
                  aangaan, anderzijds zal hij dit blijven doen. Als dit probleem zich meerdere malen voordoet is het aangeraden om een
                  hondentrainer er bij te halen.
                </p>
                  `}
        ></info-element>
        <info-element
        headline="Supplementaire anti-oxidanten voor je hond?"
        icon="info"
        .content=${html`
                <p>Net als voor ons, is het leven voor onze huisdieren de laatste jaren niet meer zoals het
                zou moeten zijn. Verontreiniging, eenzijdige voeding, te weinig beweging, ...
                Herkenbaar? Ook je trouwe viervoeter heeft hier last van. Om aan eenzijdige voeding te
                ontsnappen, proberen we om zoveel mogelijk zelf ons eten te bereiden. Genoeg groente,
                genoeg fruit, we hebben veel zelf in de hand. Voor je hond, die volledig afhankelijk is van
                jou, kies je echter 'kant-en-klare' voeding, het commerciële hondenvoer. Commercieel
                hondenvoer bestaat nog niet zo lang. Vroeger kregen honden meer huisbereide voeding.
                Ze zwierven ook meer rond, en aten instinctief meer gras en kruiden. Vooral als ze zich
                niet goed voelden, gekwetst waren of verteringsproblemen hadden, gingen ze op zoek
                naar natuurlijke remedies.</p>
                <p>
                  Deze natuurlijke remedies kennen we nu vaak als anti-oxidanten. Bepaalde anti-
                  oxidanten kunnen ook voordelen hebben voor je hond:
                </p>
                <ul>
                  <li>Astragalus membranaceous (Huang Qi) ondersteunt het immuunsysteem en houdt het suikergehalte in het bloed, de bloeddruk, de energie, en de eetlust stabiel.</li>
                  <li>Viscum Album (maretak) wordt gebruikt om de bloeddruk en het immuunsysteem op peil te houden.</li>
                  <li>Echinacea purpurea is een unieke immuunbooster voor het lymfesysteem.</li>
                  <li>Withania Somnifera (Indische ginseng) houdt het bloed gezond en ondersteunt het immuunssysteem.</li>
                  <li>Sylibum Marianus (melkdistel) is een anti-oxidant dat gebruikt wordt om de lever te herstellen. Het bevat een silymarin, een flavanoïde. Silymarin beschermt de lever tegen giftige stoffen en heeft antikanker eigenschappen.</li>
                  <li>Uncaria Tormentosa (kattenklauw) versterkt het immuunsysteem en ondersteunt de gezonde celfunctie.</li>
                </ul>
                <p>
                  Al deze kruiden zijn gekend als anti-oxidanten voor honden. Ze versterken het
                  immuunsysteem, geven extra energie, ondersteunen de gezondheid en kunnen
                  zuiverend zijn voor het lichaam. De gezondheid van de cellen, weefsels en organen
                  kunnen met deze kruiden geholpen worden. Het zijn bovendien kruiden die al eeuwen
                  gebruikt worden in de medische wereld en die ook waarvan ook wetenschappelijk
                  bewezen is dat ze echt helpen.<br>
                  Gebruik je anti-oxidanten voor je hond? Laat dan zeker je dierenarts weten wat je
                  gebruikt. Toon hem desnoods de verpakking met de ingrediënten. Zo kan hij ook
                  meevolgen of het resultaat heeft op je hond.
                </p>
                  `}
        ></info-element>
        <info-element
        headline="Wat is de juiste manier om met je puppy te spelen?"
        icon="info"
        .content=${html`
            <p>Soms lijkt het wel of het leven met een puppy enkel werken is en geen plezier maken,
            maar het spelen met je puppy is net zo belangrijk als zijn training. Spelen helpt je puppy
            namelijk zijn sociale vaardigheden te bevorderen. Spelen met je puppy zorgt er ook voor
            dat je je hond beter begrijpt en dat je er beter mee kan communiceren. Het is belangrijk
            om een emotionele, sterke band op te bouwen met je puppy.<br>
            Met spelen bedoelen we spelletjes spelen en niet sporten. Spelletjes hebben meestal een
            doel en er is meestal concurrentie, maar zonder dat je druk op je hond zet om te winnen.
            Ze zijn leuk en tegelijkertijd ook leerrijk.</p>
            <h3>Wat zijn leuke en goede spelletjes om met je hond te spelen?</h3>
            <p>Spelletjes die je kan spelen met je puppy:</p>
            <p>
              <strong>Volg de leider:</strong> het is de bedoeling dat je een hindernissenbaan opstelt en aan het einde
              van de baan een speeltje klaarlegt. Door je hond opgewonden te maken kan je hem jou
              proberen te laten volgen. Om het makkelijker te maken kan je hiervoor een lekkernij
              gebruiken. Ga zoveel als je wil heen en weer over het parcours, maar laat je hond het
              speeltje niet grijpen tot het spel gedaan is.
              Vindt de lekkernij: laat je puppy zitten en laat hem enkele lekkernijen zien en ruiken.
              Loop naar een andere ruimte en verstop de snoepjes zodat je hond ze kan zoeken. Roep
              je hond naar binnen en laat hem de eerste schuilplaats zien, zo kan hij de andere zelf
              gemakkelijk vinden.
            </p>
            <p>
              <strong>Verstoppertje:</strong> laat je hond zitten of liggen en verstop je ergens zonder dat je hond zit
              waar je verstopt zit. Als je een goede plek hebt gevonden dan moet je ‘kom’ roepen,
              zodat je hond weet dat hij je moet zoeken.
            </p>
            <p>
              <strong>Ruim je speelgoed op:</strong> heel leuk voor elk baasje is dat je hond zijn eigen speelgoed
              opruimt. Wees enthousiast en vraag aan je hond om een speeltje te pakken en te
              brengen, als hij bij jou is moet hij het in je hand loslaten. Als hij dit doet dan moet je
              ‘dankjewel’ zeggen en hem belonen voor zijn goede daad. Als je hond dit onder de knie
              heeft kan je hem leren het zelf in de doos te laten vallen en het speelgoed zal op een
              miraculeuze wijze verdwijnen!<br>
              Geloof het of niet, er zijn ook spellen die je kunt kopen om te spelen met je pup zoals
              "Vind je het erg?". Dit spel is een dobbelspel met het doel om je hond de truc te laten
              doen die op de kaart staat die je getrokken hebt. De trucs zijn zeer creatief en zorgen
              voor veel amusement.<br>
              Als een puppy niet speelt worden zijn zintuigen niet naar behoren ontwikkelt. Het lijkt
              soms alsof er geen tijd meer over is door al die training en bezoekjes aan de dierenarts,
              maar spelen helpt je hond wel degelijk om zich beter te gedragen en rustiger te blijven.
            </p>
                  `}
        ></info-element>
        <info-element
        headline="Allergieën bij honden"
        icon="info"
        .content=${html`
              <p>Net zoals mensen hebben onze honden soms last van allergieën. Het is een overdreven reactie
              van ons immuunsysteem op enkele stoffen. Veel voorkomende allergieën zijn overgevoeligheid
              aan pollen, stof, bepaalde voedingsstoffen of insectenbeten. Hoe het lichaam reageert wanneer
              het in aanraking komt met een van deze stoffen, hangt af van geval tot geval en van allergie tot
              allergie. De symptomen variëren van jeuk en rode vlekken tot ademhalingsproblemen en soms
              zelfs de dood.<br>
              Honden die last hebben van allergieën leiden soms een beklagenswaardig leven. Zeker wanneer
              ze niet geholpen worden, leven ze in een ware hel. Genezen van een allergie is onmogelijk, maar
              gelukkig kunnen we de symptomen goed bestrijden.<br>
              De verschillende allergieën kan je onderverdelen in enkele hoofdcategorieën.</p>
              <h3>Contactallergieën</h3>
              <p>
                Deze variant komt bij honden het vaakst voor. Het lichaam reageert op stoffen waarmee het in
                aanraking komt. De huid die in aanraking is geweest met de stof waar het lichaam allergisch
                voor is, zal geïrriteerd raken. Meestal vertoont het een lichte zwelling en een branderig, jeukerig
                gevoel. Contactallergieën zijn niet moeilijk te voorkomen. Vind de stof waar het lichaam op
                reageert en probeer deze zo veel mogelijk te mijden.
              </p>
              <h3>Voedselallergieën</h3>
              <p>
                De meeste honden zijn niet geboren met een voedselallergie. In de loop der jaren is het wel
                mogelijk dat hun lichaam reageert op enkele stoffen in een voeding, meestal dierlijke eiwitten.
                Gekende producten die een mogelijke allergene reactie oproepen zijn: paardenvlees, melk, tong,
                ei en soja. Een voedselallergie kan zich op vele manieren manifesteren zoals
                spijsverteringsproblemen, overgeven, jeuk en ademhalingsproblemen.
                Voedselallergieën zijn niet zo gemakkelijk te verhelpen. De enige mogelijkheid is beginnen met
                een strikt basisdieet, waarvan je weet dat je hond er niet op reageert. Vul dit basisdieet week na
                week aan met andere producten, in de hoop zo tot de allergieopwekkende stof te vinden.
              </p>
              <h3>Atopieën</h3>
              <p>
                Sommige allergieën worden veroorzaakt omdat de hond een bepaalde stof inademt. Grassen en
                bloemen kunnen stuifmeel verspreiden en dat kan bij sommige huisdieren een allergische
                reactie opwekken. De symptomen variëren van jeuk aan de poten, ontstoken lippen en oogleden
                tot ademhalings- of darmklachten. Het is helaas niet gemakkelijk te ontdekken voor welke stof
                jouw huisdier allergisch is. Je kan je wenden tot gespecialiseerde testen, maar als de allergie zich
                tot minder dan 3 maanden per jaar beperkt, is een medicatiekuur zeker aan te bevelen.
              </p>
              <h3>Vlooienallergieën</h3>
              <p>
                Heel wat honden hebben ook te kampen met een allergie tegen het speeksel van vlooien. Hun
                immuunsysteem reageert op een bepaald eiwit in het speeksel van de vlo. Er ontstaat een kleine
                ontsteking op de plaats van de beet. Na een reeks van beten ontwikkelt het lichaam een reactie
                tegen de beten.<br>
                Meestal worden vlooienallergieën opgemerkt na het eerste levensjaar van je hond. De
                symptomen zijn huiduitslag op de buik, de achterpoten en de lies.
              </p>
                  `}
        ></info-element>
        <info-element
        headline="10 tips om veilig te gaan lopen met je hond."
        icon="info"
        .content=${html`
              <p>Vele mensen nemen een hond als nieuwe jogpartner en ze zijn geweldig! Voordat je de weg oprent zijn hier enkele
              tips om op een veilige, leuke manier blokje rond te lopen met je beste vriend.</p>
              <h3>Plan je route</h3>
              <p>
                Het is belangrijk om te weten welke route je gaat nemen en ook om zeker te zijn of die route wel hondvriendelijk is. Je
                moet ook zeker weten of je hond deze route wel aankan, als deze moeilijk en uitdagend is.
              </p>
              <h3>Gezondheid</h3>
              <p>
                Voor je vertrekt moet je zeker zijn dat je hond gezond en wel is. Kijk even of hij wel zin heeft om te gaan lopen en of hij
                nog voldoende energie heeft. Als je hond ziek geweest is, vraag je dierenarts dan of het ok is om terug te gaan joggen.
              </p>
              <h3>Vertel het aan een vriend</h3>
              <p>Laat iemand weten waar en wanneer je naartoe gaat. Zeker als het een plek ver weg is of in een gevaarlijke buurt is.</p>
              <h3>Wat lekkers en wat water</h3>
              <p>
                We weten allemaal dat water enorm belangrijk is. Lekkernijen zijn dan weer handig als je in een heel nare situatie
                terecht komt, om bijvoorbeeld andere honden af te leiden of als jouw hond snel afgeleid is hem weer te laten focussen
                op het joggen.
              </p>
              <h3>Het weer</h3>
              <p>
                Niet enkel voor jouw maar ook voor je hond is het belangrijk om rekening te houden met het weer. Is het te koud? Is
                het te warm? Moet je hond een regenvest aan? Moet hij een koelingsvest aan? Wat vind je van schoentjes om zijn
                pootjes te beschermen?
              </p>
              <h3>Geknipte nagels</h3>
              <p>
                Zorg ervoor dat je hond zijn nagels geknipt zijn vooraleer je gaat joggen. De ongeknipte nagel kan scheuren en hevig
                bloeden. Als dit gebeurt zal je je hond terug naar huis moeten dragen.
              </p>
              <h3>De juiste uitrusting</h3>
              <p>
                Het is heel belangrijk dat zijn halsband in goede staat is. Als je dit op reserve hebt, is het altijd een goed idee om een
                extraatje mee te nemen. Zorg ervoor dat je hond niet kan ontsnappen uit zijn halsband.
              </p>
              <h3>De leiband</h3>
              <p>
                Om het joggen makkelijker te maken is het aangeraden om een speciale leiband hiervoor te kopen. Deze kan je rond je
                middel binden en zo blijven jij en je hond zeker bij elkaar zonder dat je hem moet vasthouden. Zorg er wel voor dat je
                geen uitrekbare leiband hiervoor gebruikt.
              </p>
              <h3>Wachten na het eten</h3>
              <p>
                Geef je hond de tijd om zijn voedsel te verteren voor jullie gaan joggen om braaksel te vermeiden. Een uur is normaal
                voldoende rusttijd, maar om zeker te zijn moet je aan je dierenarts vragen hoelang je het beste kan wachten. Dit
                verschilt voor iedere hond.
              </p>
              <h3>Stretchen</h3>
              <p>
                Zowel jij als je hond zouden moeten stretchen voor en na het joggen. Het vermindert de kans op blessures en op
                hevige spierpijnen.
              </p>
                  `}
        ></info-element>
        <info-element
        headline="Bloed in de urine van jouw hond"
        icon="info"
        .content=${html`
            <p>Zit er bloed in de urine van je hond? Panikeer dan niet. In veel gevallen kan het probleem snel
            en gemakkelijk behandeld worden. Er zijn heel wat aandoeningen die het kunnen veroorzaken,
            ga dus wel zo snel mogelijk langs bij de dierenarts om een correcte diagnose te laten stellen. De
            bloeding ontstaat meestal in de urinebuis of de blaas.</p>
            <h3>Oorzaken</h3>
            <ul>
              <li><strong>Blaasontsteking:</strong> Dit is een veel voorkomend blaasprobleem. De blaaswand is zeer gevoelig en zeer vatbaar voor infecties. In de urine zie je druppels of sliertjes helderrood bloed. Wanneer de urine donker is en stinkt, kan men denken aan een infectie.</li>
              <li><strong>Nierstenen:</strong> In de urine zitten mineralen die opgelost worden en samen met het vocht het lichaam verlaten. Soms klonteren die mineralen samen en vormen ze steentjes. Deze stenen gaan de blaaswand irriteren en bloedingen veroorzaken.</li>
              <li><strong>Blaasstenen:</strong> Dit zijn vaak kleine niersteentjes die in de blaas terecht gekomen zijn.</li>
              <li><strong>Oestrus:</strong> Dit kan gebeuren wanneer de teef loops is. Het bloed komt dan uit de vagina in de urine terecht.</li>
              <li><strong>Verwondingen:</strong> Bij een harde val of aanrijding kan bloed in de urine een teken zijn van een inwendig letsel.</li>
              <li><strong>Vergiftiging</strong></li>
            </ul>
            <h3>Voorkomen is beter dan genezen</h3>
            <p>
              Zorg voor voldoende vers water zodat de hond veel kan drinken. Hij kan dan veel urineren en
              dit zorgt ervoor dat de bacteriën regelmatig uit het lichaam verwijderd worden. Geef geen
              kraantjeswater maar gefilterd water. Dit helpt namelijk de giftige stoffen sneller uit het lichaam
              te krijgen. Ga regelmatig met je hond wandelen, zodat hij regelmatig kan urineren. Een ophoping
              van de urine kan infecties veroorzaken. Zorg er ook voor dat je viervoeter voldoende vitamine C
              naar binnen krijgt. Dit is namelijk een goede preventie tegen infecties.
            </p>
            <h3>Behandeling</h3>
            <p>
              In eerste instantie gaat de dierenarts antibiotica voorschrijven. Komt het probleem regelmatig
              terug ondanks de antibiotica? Dan zal hij verder onderzoek doen naar het onderliggend
              probleem en de juiste behandeling hiervoor bepalen.
            </p>
            <h3>Homeopathie</h3>
            <p>
              Homeopathie kan een zeer effectieve behandeling zijn. Deze remedie is 100% veilig en de hond
              heeft geen last van nevenwerkingen. Het zorgt voor een juiste lichaamsbalans. Bovendien zal het
              je tijd en geld besparen omdat je minder vaak naar de dierenarts moet.
            </p>
                  `}
        ></info-element>
        <info-element
        headline="Je hond en kanker"
        icon="info"
        .content=${html`
              <p>Het laatste dat je bij een consultatie bij de dierenarts wenst te horen is het woord 'kanker'. Je
              weet automatisch hoe machteloos je je zal voelen, hoeveel gevolgen zo'n diagnose met zich kan
              meebrengen en, bovenal, hoe erg je hond zal lijden.<br>
              Het is dan ook een geruststelling dat kanker bij honden een chronische ziekte is die over het
              algemeen het beste te verzachten of verhelpen valt – vooral als je er vroeg bij bent. Wanhoop
              dus niet gelijk als je dat woord hoort. Jij en je hond kunnen nog de beste jaren tegemoet gaan.
              Hou vooral je hoofd erbij.</p>
              <h3>Wees op de hoogte</h3>
              <p>
                Kanker klinkt vooral heel onbekend voor ons. Door goed te weten wat voor een ziekte het is en
                welke hoop er nog is, kan je veel angst overwinnen. Je zal het gevoel krijgen dat je de situatie
                veel beter de baas bent.<br>
                In eerste instantie is er gewoon sprake van een foutje in de aanmaak van cellen. Het duurt een
                hele tijd vooraleer de kankercellen zoveel in aantal zijn toegenomen dat ze een tumor vormen.
                Pas na enige tijd beginnen de zieke cellen ook de gezonde aan te tasten.<br>
                Daarnaast is geen enkele kankersoort hetzelfde. Ga dan ook naar de dierenarts. Die zal je advies
                kunnen geven en legt de situatie helder voor je uit. Als je dan ook met vragen zit, stel die dan
                direct.<br>
                Je kan ook naar de bibliotheek gaan. Lees boeken over kanker (bij dieren). Ook artikelen uit de
                media kunnen je helpen. Zo kan je daarin informatie over organisaties vinden die dierenziektes
                bestrijden.
              </p>
              <h3>Hoe kan mijn hond van kanker genezen?</h3>
              <p>
                Elke hond is verschillend en elke kankersoort is verschillend. Daarnaast is de leeftijd van je hond
                en de verdere gezondheid van het beestje van belang. Alles hangt dus van de omstandigheden af.
                Toch zijn er drie verschillende remedies die het vaakst voorkomen:
              </p>
              <ul>
                <li><strong>chirurgische verwijdering van de kankercellen</strong> – wat een heel precair proces is als de kanker is uitgezaaid of dreigt uit te zaaien.</li>
                <li><strong>chemotherapie:</strong> je hond of kat krijgt chemische stoffen in het lichaam die de kankercellen kapotmaken. Honden en katten reageren normaliter beter op chemotherapie dan mensen.</li>
                <li><strong>bestraling:</strong> stralen worden op de tumor gericht om de omvang ervan te doen afnemen.</li>
                <li>Er zijn ook andere methodes, zoals cryochirurgie, waarbij de tumor wordt bevroren, acupunctuur, en genentherapie. Zorg er in ieder geval voor dat je betrokken bent bij het genezingsproces.</li>
              </ul>
              <h3>Teamwork!</h3>
              <p>
                De kanker bestrijdt je hond niet alleen. Zie jezelf als de leider van een team dat zich inzet om je
                hond weer helemaal gezond te krijgen!
              </p>
                  `}
        ></info-element>
        <info-element
        headline="Zelf je hond verzorgen"
        icon="info"
        .content=${html`
            <p>Honden kunnen voor een groot deel hun eigen vacht verzorgen. Toch is een beetje hulp
            van het baasje altijd meer dan welkom. Bovendien heeft het alleen maar voordelen! Je
            krijgt een betere band met je hond en je zal kwaaltjes snel ontdekken zodat ze geen kans
            krijgen om te evolueren naar een meer ernstige aandoening.<br>
            Honden likken, schudden of krabben om hun vacht proper te houden. Vaak is dit echter
            niet genoeg om vlooien of teken te weren. Een grondige borstel –of kambeurt is dus
            zeker geen overbodige luxe. Bovendien zal de vacht veel properder zijn en zullen
            pijnlijke klitten geen kans krijgen.</p>
            <h3>Je hond borstelen</h3>
            <p>
              Langharige honden zouden elke dag geborsteld moeten worden om klitten in hun vacht
              te voorkomen. Kortharige honden of honden met een gladde vacht kunnen een keer per
              week geborsteld worden.<br>
              Sommige honden zijn verzot op de massage van een goede borstelbeurt, maar anderen
              doen er wel even over om er gewoon aan te geraken.<br>
              Als je hond probeert weg te komen, probeer hem er dan geleidelijk aan, in kleine
              stappen, aan te doen wennen. Begin met de borstel twee of drie keer door de vacht te
              halen terwijl je vrolijk tegen hem praat. Zo zal je hond zich het meest op zijn gemak
              voelen in een situatie die hij nog niet kent. Beloon je hond wanneer je klaar bent met
              borstelen. Naargelang je hond er meer en meer aan went, kan je de borsteltijd elke keer
              wat uitbreiden.
            </p>
            <h3>Beter voorkomen dan genezen</h3>
            <p>
              Onderzoek je hond zijn vacht regelmatig. Teken en vlooien zijn op het eerste zicht kleine
              ongemakjes, maar als ze niet verwijderd worden kunnen ze tot meer ernstige
              aandoeningen leiden. Let erop dat rond zijn staart geen restjes hangen die op
              rijstkorreltjes lijken. Deze zouden erop kunnen wijzen dat je hond wormen heeft. Indien
              dit het geval is, twijfel dan niet en ga zeker langs bij je dierenarts.<br>
              Ook hebben honden vaak tandproblemen. Om kostelijke behandelingen te voorkomen
              kan het volstaan om het gebit van je hond elke dag te poetsen. Kindertandenborstels
              kunnen hier dienst voor doen, maar kunnen pijnlijk zijn voor het tandvlees. Het best kan
              je dus een eenvoudige tandenborstel voor honden aanschaffen. Wat wel een must is, is
              tandpasta speciaal voor honden. Je eigen tandpasta kan giftig zijn.
            </p>
                  `}
        ></info-element>
        <info-element
        headline="Hoe herken je maagtorsie bij jouw hond?"
        icon="info"
        .content=${html`
              <p>Maagtorsie is een levensbedreigende ziekte. De maag vult zich met lucht en zwelt op als
              een ballon. Door deze opzwelling worden zowel de ingang als de uitgang van de maag
              geblokkeerd. Het kan nog erger… Het is ook mogelijk dat de mild, die zich naast de maag
              bevindt, geklemd raakt en scheurt. Wanneer dit gebeurt, is van een natuurlijke oplossing
              geen sprake meer. Alleen een chirurgische ingreep kan je hond dan nog redden.</p>
              <h3>Hoe kan ik het herkennen?</h3>
              <p>
                Een maagtorsie of maagdraaiing is een bedreiging die meestal alleen bij grotere rassen
                voorkomt. Zowel puppy’s, honden van middelbare leeftijd als oude honden kunnen er
                last van hebben. Enkele symptomen:
              </p>
              <ul>
                <li>Overdreven braken zonder dat de hond effectief iets overgeeft, behalve wat slijm</li>
                <li>Een opgezette buik</li>
                <li>Onrustig of extreem slap</li>
                <li>De hond vertoont tekenen van kortademigheid</li>
              </ul>
              <h3>Wat te doen bij noodgevallen?</h3>
              <p>
                Herkent u enkele van bovenstaande symptomen? Dan moet u niet aarzelen en
                onmiddellijk uw dierenarts raadplegen. Een maagtorsie kan immers binnen het halfuur
                dodelijk zijn. De dierenarts zal de maag inprikken, zodat de overbodige lucht kan
                ontsnappen. Zo komen alle organen weer tot rust. Nadien zal de dierenarts ook nog
                medicatie toedienen om de shock waarin de hond zich bevindt te behandelen. Tot slot
                zal hij proberen om de dichtgeklemde ingang van de maag door middel van een buis te
                deblokkeren.
              </p>
              <h3>Kan je een maagtorsie voorkomen?</h3>
              <p>
                Men is het niet eens over de oorzaken van een maagtorsie, dus een sluitend advies om
                een maagtorsie te voorkomen kunnen we je niet geven.
                Enkele kleine tips zijn wel mogelijk:
              </p>
              <ul>
                <li>Het helpt wel om je hond 4 keer kleinere porties eten te geven, dan 2 of 3 grote porties. Zo voorkom je dat de maag zich uitrekt in de borstholte van je hond.</li>
                <li>Probeer je hond te beletten om te grote hoeveelheden water te drinken.</li>
                <li>Beperk de inspanningen na de maaltijd. Zo kan het eten rustig verteren.</li>
                <li>Pas op met nieuw hondenvoer. Andere en onbekende producten kunnen soms leiden tot overdreven gasproductie in zijn spijsverteringsstelsel.</li>
              </ul>
                  `}
        ></info-element>
        <info-element
        headline="De waarheid achter 5 hondenmythes"
        icon="info"
        .content=${html`
              <p>De hond is een van ’s werelds meest populaire en sociale huisdieren. Hondeneigenaars zijn meestal dol op
              hun trouwe viervoeter en dat is begrijpelijk, want ze geven hun baasjes liefde op een unieke manier. Je
              kunt er mee gaan wandelen, ze bewaken het huis, je kan er mee spelen, ze knuffelen graag en ga zo maar
              verder. Toch bestaan er enkele hardnekkige mythes over honden en heel wat mensen hebben de neiging
              om deze verhaaltjes te geloven. Maar wat is eigenlijk de waarheid achter 5 vaak vertelde hondenmythen?</p>
              <h3>De warme en droge neus</h3>
              <p>
                Heel wat mensen geloven dat honden, en bij uitbreiding andere huisdieren zoals katten, maar best
                beschikken over een koude en natte neus. Zo’n neus zou een teken zijn van gezondheid. Toch is dat niet
                altijd het geval, want ook bij een gezonde hond kan de neus soms warm en droog aanvoelen. Als je als
                baasje toch denkt dat een droge neus op gezondheidsproblemen duidt, kan je natuurlijk wel nog altijd
                actie ondernemen en naar de dierenarts gaan. Zeker zijn kan immers nooit kwaad, toch?
              </p>
              <h3>De zachte plek</h3>
              <p>
                De volgende mythe heeft te maken met het aaien van je hond. Heel wat mensen geloven namelijk dat je
                viervoeter het geweldig vindt wanneer hij of zij gestreeld wordt in de onderbuik en de zadelregio van het
                lijf. Deze mythe stamt af van het feit dat honden nogal bijzonder reageren op strelingen over deze delen
                van het lichaam: ze beginnen in het rond te draaien, springen op en neer en krabben met hun poten. Toch
                is het tegendeel waar, want baasjes realiseren zich vaak niet dat het gestreel inwerkt op het zenuwstelsel
                van de hond, waardoor het dier eigenlijk ongewild allerhande bewegingen begint uit te voeren.
              </p>
              <h3>Plassen met de poot omhoog</h3>
              <p>
                Volwassen honden, zeker de mannetjes maar soms ook de vrouwtjes, heffen een poot omhoog wanneer ze
                plassen en dit in tegenstelling tot puppy’s. De mythe is dat onze viervoeters dat doen omwille van hun
                hormonen, maar eigenlijk is dat klinkklare onzin. Honden zijn sociale dieren en dus willen ze soortgenoten
                laten weten waar ze zijn geweest. Door hun poot omhoog te heffen, sproeit de urine simpelweg wijder in
                het rond en dat helpt de dieren om hun geur te verspreiden. Je kan het een beetje vergelijken met
                luipaarden die op de savanne hun territorium afbakenen door te urineren tegen bomen. Ze laten weten ‘ik
                ben hier geweest’.
              </p>
              <h3>Oude honden</h3>
              <p>
                De volgende mythe bestaat uit het cliché dat je oude honden geen nieuwe dingen meer kan aanleren.
                Zogezegd kun je een hond dus enkel nieuwe truckjes laten doen wanneer het nog om een jong dier gaat.
                Dat is echter fout, want honden zijn intelligente dieren die nooit te oud zijn om dingen bij te leren. Meer
                nog, door een oude hond nieuwe gedragingen bij te brengen, stimuleer je net de gezondheid van zijn geest
                en dat kan alleen maar positief zijn.
              </p>
              <h3>Wachten met training</h3>
              <p>
                De laatste mythe bestaat eruit dat heel wat hondeneigenaars ervan overtuigd zijn dat ze moeten wachten
                totdat hun puppy zes maanden is vooraleer ze het dier kunnen trainen. Deze mythe is er omdat honden
                rond de leeftijd van zes maanden langzaam volwassen worden en dus beter zouden begrijpen wat hun
                wordt aangeleerd. Dat is echter niet juist, want eigenlijk kun je de puppy het best trainen vanaf het
                moment dat het diertje bij jouw thuis arriveert. Jonge honden zijn immers al erg gauw in staat om
                bepaalde gedragingen aan te leren. Op deze manier vermijd je bovendien ook dat de puppy moeilijk gaat
                doen wanneer hij bijna volgroeid is.
              </p>
                  `}
        ></info-element>
        <info-element
        headline="Kan mijn hond het coronavirus krijgen?"
        icon="info"
        .content=${html`
            <p>Je hebt waarschijnlijk al gehoord over het Coronavirus. Het kan heel eng zijn als zo'n
            virus zich zo snel lijkt te verspreiden, maar als hondenliefhebber denken velen van ons
            meteen aan onze trouwe viervoeter. Vooral als je bekend bent met de uitdrukking,
            "Canine Coronavirus."<br>
            Eerst en vooral: geen paniek.</p>
            <h3>Wat is het Coronavirus?</h3>
            <p>
              Hoewel de mensen grotendeels verwijzen naar de huidige ziekte bij alleen
              "Coronavirus", is de term eigenlijk van toepassing op een familie van virussen die lijken
              op een "kroon" wanneer ze worden bekeken onder een elektronenmicroscoop, genaamd
              Coronaviridae. De huidige stam, die voor het eerst werd waargenomen in december,
              wordt 2019-CoV genoemd. Andere stammen waar je misschien van gehoord hebt zijn
              SARS-CoV en MERS-CoV. Beide hebben een vergelijkbare ophef veroorzaakt, maar zijn
              inmiddels tot rust gekomen.<br>
              2019-CoV zou zijn ontstaan op een markt in Wuhan, China, door de consumptie van
              slangen die besmet waren met het virus. Op dit moment zijn er meer dan 6000
              bevestigde gevallen in China, maar ook geïnfecteerde mensen in andere landen - die
              allemaal recentelijk Wuhan, China, lijken te hebben bezocht. (Aantallen lopen nog steeds
              op)
            </p>
            <h3>Kunnen dieren het Coronavirus krijgen?</h3>
            <p>
              Ja. De huidige stam wordt eigenlijk gekoppeld aan slangen die op de markt worden
              verkocht. In dit geval lijkt het erop dat dieren die het virus bij zich dragen, het kunnen
              doorgeven aan een menselijke gastheer door de consumptie van zijn vlees. (Dit wordt
              nog steeds onderzocht)
            </p>
            <h3>Kan mijn hond het Coronavirus krijgen?</h3>
            <p>
              Er bestaat een Canine Coronavirus Disease - het lijkt echter niet in verband te staan met
              deze stam.<br>
              Het Canine Coronavirus dankt zijn naam aan dezelfde eigenschap die menselijke
              virussen krijgen - een rond, kroonvormig uiterlijk wanneer het onder een
              elektronenmicroscoop wordt bekeken. De meeste gevallen worden veroorzaakt door
              honden die poep eten die het virus bij zich draagt. Een andere reden om ervoor te
              zorgen dat je hond geen uitwerpselen eet.<br>
              Volgens WHO heeft de Canine Coronavirus Disease GEEN invloed op mensen.
            </p>
            <h3>Wat zijn de symptomen van het Canine Coronavirus bij honden?</h3>
            <p>
              Canine Coronavirus veroorzaakt zelden symptomen bij honden, maar in de weinige
              gevallen dat het dat wel doet, kunt u een plotseling beginnende diarree opmerken,
              samen een slechte eetlust. De diarree van uw hond kan bloed of slijm bevatten, en als de
              infectie optreedt terwijl uw hond lijdt aan een andere ziekte, zoals het Parvovirus, zal
              deze ernstiger worden.<br>
              Natuurlijk kunnen deze symptomen wijzen op een aantal andere problemen, dus wees
              er zeker van dat u naar uw dierenarts gaat.
            </p>
            <h3>Kan ik het Coronavirus van mijn hond krijgen?</h3>
            <p>
              Op dit moment zijn er geen gevallen gemeld van 2019-CoV bij honden.<br>
              Eerdere stammen van het Coronavirus werden getraceerd naar contact tussen mens en
              dier. SARS-CoV lijkt te zijn veroorzaakt door contact met civetkatten en MERS van
              dromedariskamelen. 2019-CoV zou voor het eerst zijn overgedragen aan mensen via
              slangen die werden verkocht op een markt in Wuhan. Na besmetting van de menselijke
              gastheer veroorzaakt het virus ademhalingsproblemen en wordt het van mens tot mens
              verspreid, vaak via de lucht, via een nies of hoest.
            </p>
            <h3>Kan ik mijn hond het Coronavirus geven?</h3>
            <p>
              Als u denkt dat u geïnfecteerd bent, moet u onmiddellijk contact opnemen met uw arts,
              en hen laten weten dat u vermoedt dat u geïnfecteerd bent voordat u naar hen toe gaat,
              zodat ze voorzorgsmaatregelen kunnen nemen.<br>
              Uit eerdere stammen van het Coronavirus blijkt dat zoogdieren, zoals kamelen en
              civetkatten, het Coronavirus kunnen krijgen en de mens kunnen besmetten. Er lijken
              echter geen gevallen te zijn van mensen die het Coronavirus bij zich dragen en hun
              huisdieren besmetten.<br>
              Goede hygiënepraktijken moeten altijd uw eerste verdediging zijn - was uw handen
              regelmatig, bedek uw mond als u niest. Voor uw hond - probeer te voorkomen dat hij
              poep eet en doe hem regelmatig in bad.
            </p>
                  `}
        ></info-element>
        <info-element
        headline="Vers, natuurlijk eten voor je hond"
        icon="info"
        .content=${html`
            <p>Vele baasjes menen dat hun hond zonder problemen kunnen mee-eten wat
            de pot schaft. Jammer genoeg beseffen ze niet dat deze voeding, bestemd
            voor mensen, niet aan de voedingsbehoeften van een hond voldoet. Wat
            gezond en geschikt voor ons is, is dat veelal niet voor onze viervoeters. Wij
            vertellen je graag wat je hond nodig heeft en hoe je eraan kan beginnen.
            Het is begrijpelijk dat vele eigenaars voor minder conventionele voeding
            kiezen. Meestal zijn de ingrediënten van zulke hondenvoeding maar erg
            vaag omschreven en weet je dus niet wat er precies in zit. Wanneer je je
            eten zelf bereidt, stelt dat probleem zich uiteraard niet. De maaltijd van je
            hond is op die manier niet alleen vers en heeft niet alleen meer smaak, je
            kiest ook volledig zelf de gezonde ingrediënten.</p>
            <h3>Een gezond dieet</h3>
            <p>
              Een gezond dieet begint met verse ingrediënten. Dit wil zeggen dat ze
              “natuurlijk” vers moeten zijn en dus geen kleurstoffen, zoetstoffen,
              bewaarmiddelen of enig andere chemische stoffen mogen bevatten. Dit wil
              eveneens zeggen dat de maaltijd niet in de magnetron mag bereid worden.
              Hierdoor gaan immers de belangrijkste vitamines en mineralen verloren.
              Denk eraan dat honden instinctief jagers blijven, en dus ook effectief verse
              voeding nodig hebben! Een andere gulden regel voor een gezond dieet is
              dat van variatie. Wanneer je je hond elke dag hetzelfde voorschotelt, zal het
              uiteindelijk nog maar weinig effect hebben. Daarnaast moeten vlees en vis
              rauw geserveerd worden, in tegenstelling tot groenten en granen die
              lichtjes gekookt dienen te worden.
            </p>
            <h3>Een recept</h3>
            <p>
              Kook gedurende 2 minuten 3 of 4 groenten naar keuze (600-800g), samen
              met bruine rijst, granen of brood. Serveer deze met rauw vlees of rauwe vis
              (200g). Van vlees kan zowel rundvlees alsook kip gebruikt worden. De lever
              en niertjes van beiden kun je best niet gebruiken. Het hart en de maag
              kunnen dan weer wel. Paardenvlees wordt best alleen gebruikt nadat je
              hond er een zware training op heeft zitten. Om je hond helemaal in
              topconditie te krijgen kan je hem elke zevende dag enkel groenten met
              graanproducten voorschotelen. Denk er bovendien aan dat je een hond
              nooit chocolade mag geven, en ook andere versnaperingen doen vaak meer
              kwaad dan goed.
            </p>
                  `}
        ></info-element>
        <info-element
        headline="Tekenen dat je hond zich verveelt"
        subline="en hoe het te verhelpen"
        icon="info"
        .content=${html`
              <p>Iedereen verveelt zich weleens en daar is eigenlijk helemaal niets verkeerd mee. Je ken het
              gevoel heus wel: je weet niet goed wat aanvangen, alle andere mensen lijken wel te weten wat te
              doen, het duurt nog enkele uren vooraleer de volgende activiteit op het programma staat en de
              tijd lijkt maar niet voorbij te gaan. Maar wist je dat ook honden last kunnen hebben van
              verveling? Meer nog, het is helemaal niet ongewoon dat jouw trouwe viervoeter zich soms
              verveelt. Maar wat zijn eigenlijk de tekenen van een verveelde hond en hoe kun je er iets aan
              doen?</p>
              <h3>Tekenen van verveling bij je hond</h3>
              <p>
                Als baasje moet je goed beseffen dat spelen voor honden, en al zeker voor puppy’s, een
                belangrijke dagelijkse bezigheid is. Spelen zorgt voor het plezier en de ontspanning van de hond,
                en maakt dat de viervoeters hun lichaam beter beheersen en hun reactievermogen verbeteren.
                Aangezien honden sociale dieren zijn die vaak in een gezinssituatie leven, is ravotten meestal de
                enige manier voor honden om hun natuurlijk gedrag zoals jagen en spoorzoeken te vertonen.<br>
                Toch slaat bij elke hond de verveling weleens toe, bijvoorbeeld wanneer het dier uren achter
                elkaar alleen zit. Verveling is trouwens nefast voor zowel de hond als het baasje, want bij vele
                hondengedragsproblemen ligt verveling vaak aan de basis. Vernielzucht, agressie, overdadig
                likgedrag en nog andere gedragingen van uw hond kunnen allemaal uitgelokt worden door
                verveling. Dat een hond zich verveelt, merk je aan verschillende dingen. Ten eerste gaan heel
                wat honden uit verveling beginnen graven in de tuin, omdat ze willen ontsnappen van al dat
                saaie gedoe.<br>
                Daarnaast volgt je viervoeter jou met zijn favoriete speeltje in de bek om aan te geven dat hij een
                spelletje wil spelen. Nog andere honden zullen non-stop beginnen blaffen om duidelijk te maken
                dat ze zich vervelen. Ten slotte zijn er ook nog de viervoeters die simpelweg tegen je op
                beginnen springen om aandacht te zoeken en hun verveling te uiten. Maar wat eraan gedaan?
              </p>
              <h3>Hoe te verhelpen</h3>
              <p>
                Een eerste goede manier om ervoor te zorgen dat je hond zich minder verveelt, bestaat eruit om
                met het dier buiten te ravotten. ‘Een vermoeide hond is een brave hond’, is hier het devies.
                Wanneer je de hond mee naar buiten neemt om te lopen, te zwemmen of samen te wandelen,
                keert je viervoeter nadien moe terug naar huis. Daardoor zal hij eerder geneigd zijn om zijn
                mand op te zoeken voor een dutje dan dat hij uit verveling de boel op stelten wil zetten.<br>
                Een volgende manier om de verveling tegen te gaan, bestaat eruit dat je de hond binnenshuis
                speeltjes geeft waarmee hij eventjes zoet is. Zo bestaan er speciale puzzelspeeltjes waarin je iets
                lekker in kan stoppen voor je hond. Bij deze voorwerpen is je viervoeter, indien hij dat lekkers
                wil bemachtigen, een hele poos zoet met het open krijgen van het puzzelspeeltje.<br>
                Ten slotte is er ook nog de goede ouderwetse training als middel om verveling bij je huisdier
                tegen te gaan. <a @click=${() => window.open('https://www.hondencentrum.com/je-hond-opvoeden/', '_blank')} href="">Je hond trainen</a> is sowieso iets nuttigs, maar het aanleren van bepaalde
                commando’s vermoeit het dier ook mentaal en dat zorgt ervoor dat je hond slaperig wordt. Dus:
                waar wacht je nog op?
              </p>
                  `}
        ></info-element>
        <info-element
        headline="Schoonheidsbehandelingen voor honden"
        subline="Luxe of nodig?"
        icon="info"
        .content=${html`
            <p>Toegegeven, je kan ver gaan in het verzorgen van je hond. Toch is een goede verzorging
            geen overbodige luxe. Wanneer je je hond op frequente basis onder andere borstelt, zal
            hij een gezonde huid en een glanzende vacht hebben zonder parasieten. Bovendien
            versterk je de band met je hond door de extra aandacht die hij krijgt.<br>
            Het is perfect mogelijk om je hond zelf te verzorgen, maar het spreekt voor zich dat ze in
            een professioneel hondensalon over een uitgebreider aanbod beschikken. Wanneer je
            hond een vacht heeft die regelmatig getrimd moet worden kan je bijvoorbeeld beter bij
            een hondensalon terecht. Daarnaast hoef je er zelf geen tijd in te steken en kan je er toch
            gerust in zijn dat je hond in goede handen is.</p>
            <h3>De verzorging van dichtbij bekeken</h3>
            <p>
              Wie nog nooit is langs geweest in een hondensalon weet meestal niet wat hij of zij er
              precies van moet verwachten. Een “standaard” behandeling omvat om te beginnen een
              grondige kambeurt. Zo worden knopen en klitten in de vacht uit elkaar gehaald en
              worden gelijktijdig de dode haren verwijderd. Ook zal de verzorger de vacht van de
              hond aftasten om te kijken of de hond last heeft van vlooien of teken. Vervolgens zal de
              hond gewassen worden in een bad.<br>
              Indien nodig zal de hond gewassen worden met een speciale vlooienshampoo. Ook de
              tanden ontsnappen niet aan de poetsbeurt en worden flink geschrobd. De nagels worden
              geknipt en de oren worden voorzichtig gepoetst. Voorts kan je je hond ook laten “stylen”
              met allerhande hondenaccessoires.
            </p>
            <h3>Hoe vaak je hond verzorging nodig heeft</h3>
            <p>
              Hoe vaak je je hond moet kammen of wassen hangt vooreerst af van het ras en van de
              vacht. Het spreekt voor zich dat de ene hond dus meer verzorging nodig heeft dan de
              andere. Moest je nog geen hond hebben, kan het handig zijn om dit op voorhand in
              rekening te brengen. Een gekrulde vacht, ook wel “poedelvacht” genoemd vraagt zo’n 6
              keer per jaar om verzorging. De honden met de gemakkelijkste vacht zijn de kort-
              harigen, zij hebben maar 1 keer per jaar verzorging nodig. Dit in tegenstelling tot
              honden met lange haren, die elke maand aan een bad toe zijn.<br>
              Cocker Spaniels behoren tot de “zijdevachten” en zij hebben haast elke dag een
              kambeurt nodig. Daarnaast worden ze 4 keer per jaar in het hondensalon verwacht. Tot
              slot zijn er nog de “zachte, gladde vachten”, waar we onder andere de labradors onder
              kunnen rekenen. Zij komen er vanaf met een wekelijkse borstelbeurt en een bad
              wanneer het nodig is.
            </p>
                  `}
        ></info-element>
        <info-element
        headline="Epilepsie bij je hond"
        icon="info"
        .content=${html`
            <p>Epilepsie wordt veroorzaakt door een aantal schokjes in de hersenen. Daardoor verliest je hond
            de controle over zijn spieren. Het gevolg is een zenuwaanval. Soms is zo'n aanval moeilijk te
            herkennen doordat je hond enkel een verstoorde motoriek heeft. Een zware aanval valt echter
            altijd te herkennen: je hond zal op de grond vallen en schokken.<br>
            De meeste honden krijgen er last van tussen hun tweede en hun zesde levensjaar. Vaak merk je
            de ziekte gedurende lange tijd niet op. De ware oorzaak van de ziekte is dan ook onbekend.
            Epileptische aanvallen kunnen ook worden veroorzaakt door tumoren of hart-, nier- of
            leveraandoeningen. Die laatste soort aanvallen komt vaker bij oudere dieren voor.</p>
            <h3>De fases van een epilepsie-aanval</h3>
            <ul>
              <li><strong>aura:</strong> een periode die voorafgaat aan de echte aanval. Het diertje is gedesoriënteerd of rusteloos. Het kan zijn dat je hond of kat wat jankt of klaagt.</li>
              <li><strong>aanval:</strong> de samentrekkingen van de spieren merk je tijdens deze periode op. Bij een ernstige aanval zal je hond of kat omvallen, het bewustzijn verliezen, languit liggen en onregelmatig (of nauwelijks) ademen. Normaal duurt zo'n aanval ongeveer dertig seconden.</li>
              <li><strong>nasleep:</strong> er zijn geen samentrekkingen meer maar je hond of kat is verward en uitgeput. Sommige huisdiertjes zullen binnen enkele minuten weer gewoon rechtstaan en bewegen, anderen honden en katten doen er uren over vooraleer ze weer normaal reageren.</li>
            </ul>
            <p>
              Als je hond een aanval heeft gehad, laat het beestje dan rustig bijkomen en wacht af. Pak het
              beestje vooral niet op. Ga als het diertje hersteld is naar de dierenarts voor een diagnose. Die zal
              dan ook een medicijn kunnen voorschrijven.
            </p>
            <h3>Onregelmatige aanvallen</h3>
            <p>
              Als je hond of kat onregelmatig last heeft van aanvallen, zorg er dan voor dat je bijhoudt
              wanneer die aanvallen exact hebben plaatsgevonden. Noteer daarbij
            </p>
            <li>de datum</li>
            <li>het tijdstip</li>
            <li>de omstandigheden (omgeving)</li>
            <li>de duur van de aanval</li>
            <li>een beschrijving van de ernst van de aanval</li>
            <li>de tijd die het beestje nodig had om te herstellen.</li>
            <p>
              Door die gegevens bij te houden zal de dierenarts kunnen afleiden of medicatie helpt. Als er
              medicatie is voorgeschreven: verander de dosis niet op eigen initiatief.<br>
              Zo kan je ervoor zorgen dat je hond nog lang bij je blijft.
            </p>
                  `}
        ></info-element>
        <info-element
        headline="Hoe je hond kalm te houden bij etenstijd"
        icon="info"
        .content=${html`
            <p>Etenstijd kan soms wel lijken alsof je wilde beesten voedert. Voor je het weet heb je opeens een waanzinnige ,
            blaffende , springende, bijtende hond die het voedsel uit je handen duwt voordat je het zelfs op de grond hebt gezet.
            Het hoeft echter zo niet te zijn. Etenstijd is de perfecte tijd om je hond te laten werken aan zijn zelfbeheersing en aan
            zijn manieren. Hieronder vind je enkele tips.</p>
            <h3>Je hond africhten</h3>
            <p>
              Als je hond meerdere slechte manieren vertoont is het belangrijk dat je hier een voor een aan werkt voordat je hond
              succesvol zal zijn. De meeste honden weten wanneer het etenstijd is door te zien wat jij doet en door welke tijd van de
              dag het is. Zodra je hond het vervelende gedrag vertoont dat je probeert weg te werken, stopt etenstijd. We zullen
              blaffen als voorbeeld gebruiken.
            </p>
            <ol>
              <li>Je gaat naar de plaats waar het eten van je hond staat en hij blaft nog voor je het hebt.</li>
              <li>Ga terug naar wat je aan het doen was en negeer je hond totdat hij stopt met blaffen.</li>
              <li>Na een paar seconden van stilte ga je terug naar de plek waar het voedsel staat.</li>
              <li>Als hij weer blaft, ga dan terug en wacht op deze paar seconden van stilte.</li>
              <li>Als je zijn kom hebt gevuld en hij begint met blaffen, dan zet je de kom buiten bereik en ga je terug doen waar je mee bezig was terwijl je je blaffende hond negeert tot hij stopt.</li>
              <li>Herhaal deze stap totdat je je hond in complete stilte eten kan geven.</li>
            </ol>
            <p>Zolang je hond niet blaft, kan etenstijd doorgaan.</p>
            <h3>De aanhouder wint</h3>
            <p>
              Honden gaan eerst altijd iets harder en langer proberen, voordat ze weten dat het niet gaat werken. Bereid je er dus
              op voor dat het blaffen eerst erger wordt voor het stopt.
            </p>
            <p>
              <h3>De volgende stap</h3>
              De volgende stap is beslissen wat je wilt dat je hond in de plaats doet van blaffen. Als je het niet erg vindt dat hij je
              volgt, zolang hij niet springt of blaft, dan volg je net dezelfde stappen als hierboven om hem het springen af te leren.
              Om je hond te laten wachten terwijl jij het eten gaat halen is erg goed voor het trainen van zijn zelfbeheersing.
            </p>
            <h3>Hem laten wachten</h3>
            <p>
              Als je wilt dat je hond wacht totdat jij klaar bent met het eten te halen en te geven, is dit het perfecte moment om dit te
              doen. Zonder blaffen en springen is het makkelijk. Het is net hetzelfde als andere trucjes als ‘zit’ en ‘blijf’ aan te leren,
              met als beloning de maaltijd dat hij krijgt wanneer jij zegt dat het mag.
            </p>
            <ol>
              <li>Breng de maaltijd naar buiten.</li>
              <li>Als je hond van zijn plek komt, pak je de kom en zet je ze terug weg.</li>
              <li>Als hij terug naar de plek gaat en daar blijft, breng je de kom terug. Als hij terug komt neem je de kom terug en ga je weg.</li>
              <li>Herhaal dit tot je helemaal tot aan je hond kan zonder dat hij rechtstaat of naar jou toekomt. Geef hem dan de maaltijd.</li>
            </ol>
            <p>
              Consistentie is de sleutel tot succes. Als er anderen je hond eten geven, wijs hen dan op de nieuwe manier die jij hebt
              aangeleerd. Als dit niet gebeurt, wordt je hond verward en wordt zijn slecht gedrag alleen maar erger. Wie weet?
              Misschien zijn Chihuahua’s het meeste empathie en misschien hebben Puggles de beste redenering. Met genoeg
              mensen, kunnen we binnenkort zien hoe nauw de verwachtingen weerspiegelen aan de realiteit.
            </p>
                  `}
        ></info-element>
      </flex-container>
    </div>
    `
  }
}
