import { html, css, LiteElement, query } from '@vandeurenglenn/lite'
import { customElement } from 'lit/decorators.js'
import '@vandeurenglenn/flex-elements/container.js'
import '@vandeurenglenn/lite-elements/button.js'
import '../components/post.js'

@customElement('games-view')
export class GamesView extends LiteElement {
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
      headline="Spelregels"
      .content=${html`
          <p>Er zijn verschillende verkeerde opvattingen over spelen met je hond. Vaak bedoelen de mensen het goed, maar zorgen ze er onbewust voor dat de hond het spel eigenlijk helemaal niet leuk vindt.<br>
          Waar moet je op letten als je een speeltje gebruikt:</p>
            <ol>
              <li>
                Beweeg het speeltje weg van de hond: sla het speeltje dus niet in het gezicht van de hond (stel je eens voor dat iemand dat bij jou doet…).
                    <ol type="a">
                      <li>Houd het speeltje op de grond en beweeg het heen en weer (zoals een prooi).</li>
                      <li>Is je hond niet erg geïnteresseerd in zijn piepspeeltje, ga er dan niet constant in knijpen. Van het eeuwige gepiep zal hij enkel zenuwachtig worden  (De andere honden, baasjes en instructeurs trouwens ook).</li>
                      <li>Liefst geen spelletje dat gemaakt is van tennisbalstof. Dit is enorm schadelijk voor de tanden.</li>
                    </ol>
              </li>
              <li>
                Speel gecontroleerd:
                    <ol type="a">
                      <li>Introduceer handige commando’s op het moment dat deze zich stellen: heeft de hond het speeltje stevig vast? Zeg dan tegen hem: “Dat is vast, flinke vast!”</li>
                      <li>Laat de hond het speeltje spontaan los? Zeg dan tegen hem: “Dat is los, flinke los” en geef hem nadien onmiddellijk het speeltje terug of geef hem een snoepje.</li>
                    </ol>
              </li>
            </ol>
          <p>
            Waarom onmiddellijk het speeltje terug geven? Op die manier leert hij dat ‘loslaten’ steeds beloond wordt. Als je iedere keer het speeltje afneemt en wegstopt zonder dat er aan beloning komt (een snoepje of het teruggeven van het speeltje), zal hij in de toekomst minder geneigd zijn om het los te laten.<br>
            Wat als de hond niet wil loslaten? Ga ruilen: neem enkele snoepjes en laat je hond hieraan ruiken. Op het moment dat hij loslaat zeg je “Flinke los!” en geef je hem de snoepjes.
          </p>
            <ol>
              <li>
                Let erop dat je hond met jou speelt
                    <ol type="a">
                      <li>Hou het speeltje steeds zelf vast aan de ene kant.</li>
                      <li>Niet met de andere honden.</li>
                      <li>Speel actief mee: loop achterwaarts met het speeltje op de grond, maak grote bewegingen, doe lekker onnozel.</li>
                    </ol>
              </li>
            </ol>

        
        `}
      ></post-element>
      <post-element
      headline="Spelletjes"
      subline="Een overzicht van goede en minder goede spelletjes om te spelen met je hond."
      .content=${html`
              <p>
                Commandoregels – Thuis lezen als huiswerk:<br>
                Veel mensen maken, goed bedoeld, enkele foutjes bij het geven van commando’s aan jonge of ongetrainde honden. We horen maar al te vaak het volgende zinnetje:<br>
                <strong>“Zit Bobby, zit. Alé, zit! Ziii-iiit!”</strong><br>
                Dit, terwijl Bobby nog niet eens geleerd heeft wat “zit” dan wel is.<br>
                Bij elk nieuw commando zijn er een aantal stapjes die je moet volgen vooraleer je kan verwachten dat je hond het commando kent.<br>
                Eerst en vooral dien je het gewenst gedrag uit te lokken met voedsel en een handbeweging. ZONDER dat je een commando zegt.<br>
                Je gaat je hond met andere woorden ongeveer 20 keer belonen voor een bepaald gedrag (bijvoorbeeld zitten) zonder dat je het commando gebruikt.<br>
                Pas als je weet dat er 99,9% kans is dat de hond gaat zitten als hij jouw handbeweging ziet, ga je het commando zeggen OP HET MOMENT dat hij de intentie maakt van dat gedrag te gaan doen. In ons voorbeeld van de zitoefening is dat dan op het moment dat zijn poep naar beneden gaat.<br>
                “Flink” + belonen doe je van zodra de hond de beweging heeft afgemaakt. In dit voorbeeld is dit wanneer zijn kont de grond raakt.<br>
                Pas als je dit weer zo’n 20 keer gedaan hebt, kan je eens proberen of het commando gekend is. Dit door het commando te zeggen, samen met de handbeweging te maken. Doet de hond wat jij van hem verwacht? SUPER!<br>
                Doet hij het nog niet? Ga dan enkele stapjes terug.<br>
                Nadien probeer je het commando uit zonder handbeweging.<br>
                <i>
                  We beschrijven de oefening zit even wat concreter zodat je een duidelijk beeld hebt van wat we hiermee bedoelen:<br>
                  Stap 1: beweeg een snoepje van de neus van de hond over zijn hoofd tussen zijn oren. De hond volgt dit snoepje met zijn snoet en maakt automatisch de beweging zit à “flink” + snoepje<br>
                  Stap 2: beweeg een snoepje van de neus van de hond over zijn hoofd tussen zijn oren. De hond volgt dit snoepje met zijn snoet en maakt automatisch de beweging zit à “zit” + “flink” + snoepje = <strong>Verwoorden wat hij doet, op het moment dat hij het de beweging inzet.</strong><br>
                  Stap 3: beweeg een snoepje van de neus van de hond over zijn hoofd tussen zijn oren, samen met het commando “zit” te zeggen. De hond gaat zitten? Snoepje! De hond gaat niet zitten? Ga enkele stappen terug.<br>
                </i>
                Wat als je dit niet doet?<br>
                Stel je voor: je zegt “zit” en de hond kijkt naar een voorbijrijdende auto.<br>
                De volgende keer zeg je “zit” en de hond legt zich neer.<br>
                De keer nadien zeg je “zit” en de hond gaat toevallig zitten.<br>
                Het commando is NIET gekend. Maar het is een keuzemogelijkheid geworden tussen: rondkijken, liggen en zitten. Het is dus niet duidelijk voor je hond. Hij zal in de toekomst één van die drie dingen doen bij het horen van “zit”.<br>
                Honden kennen onze taal niet. Het is aan ons om het ze te leren. En dat kan alleen maar door te verwoorden wat ze doen, op het moment dat ze het doen.<br>
                Als je er van uit gaat dat de hond het commando kent, maar hij stelt het gedrag niet meteen: wacht dan minstens 7 seconden. Laat de hond even nadenken. Ga niet meteen het commando herhalen. Anders is het commando niet meer “zit”, maar wel “zitzitzit”.<br>
                Het heeft ook geen zin om lange tijd te trainen op een nieuwe oefening. Ongeveer 5 keer een bepaalde oefening na elkaar is voldoende. Dan even afwisselen door met je hond te spelen bijvoorbeeld. Een hond onthoudt vooral de laatste oefening. Dit wil zeggen: als je 19 keer een goede zit gekregen hebt en de 20e keer is hij verkeerd: dan is de laatste oefening doorslaggevend om onthouden te worden. Dus liever maar 5 keer na elkaar!  Let erop om steeds met succes een oefening te kunnen afronden.<br>
                Ook handig om te weten: train liever in korte stukjes (bijvoorbeeld 3 x 10 minuutjes i.p.v. 1 x 30 minuten)<br>
                Samengevat:<br>
                <ul>
                  <li>Gebruik stapjes en begin nooit met een commando dat nog niet gekend is.</li>
                  <li>Verwoord wat de hond doet op het moment dat het gedrag zich stelt.</li>
                  <li>De 7 seconden-regel, laat je hond nadenken.</li>
                  <li>Nooit te lang aan één bepaalde oefening werken, voldoende afwisselen met spel.</li>
                  <li>Liever in korte perioden dan lange.</li>
                </ul>  
                <strong>Probleemgedrag?</strong><br>
                Trekken aan de lijn voorkomen:<br>
                Veel baasjes klagen omdat hun hond trekt aan de lijn. Nu moet je weten dat dit gedrag eigenlijk is aangeleerd door de baas. De hond doet dit helemaal niet om jou te pesten of omdat hij perse dominant is. Hij doet dit omdat hij denkt dat het goed is, omdat hij dit geleerd heeft.<br>
                Want wat doen de baasjes?<br>
                De puppy/hond trekt en ze lopen er achter.<br>
                Wat leert de hond? Als ik ergens heen wil, moet ik trekken aan de lijn. Dat is de enige manier waarop ik geraak waar ik wil zijn.<br>
                Denk aan wat we in het begin schreven over beloning. Soms is een snoepje of een speeltje een beloning. Soms niet! Soms moet je kijken wat je hond het liefst heeft en dat als beloning gaan gebruiken.<br>
                Wat wilt je hond in dit geval? Vooruit gaan, gaan snuffelen aan de graskant, een andere hond of mens groeten, …<br>
                Zorg er dan voor dat hij dit alleen maar kan doen als hij netjes aan de lijn loopt. En geef het storende gedrag (trekken aan de lijn) geen gevolg. Blijf koppig staan!<br>
                Pas als de lijn terug ontspannen is, beloon je door verder te stappen. Op die manier leert de hond: als ik ergens wil geraken, lukt dat alleen als ik netjes wandel.<br>
                Je kan natuurlijk nog extra gaan belonen met een snoepje als de hond naast je been wandelt.<br>
                Hetzelfde zien we met baasjes die gezellig een babbeltje willen doen met iemand die ze zijn tegengekomen op wandeling (of baasjes die op het plein staan te luisteren naar de instructeur). De hond trekt zenuwachtig heen en weer. In veel gevallen geeft de baas onbewust enkele meters toe. De lijn wordt soms van de ene hand naar de andere hand overgegeven. Waardoor de hond leert: als ik hard genoeg trek, kom ik soms een beetje vooruit. (= een variabele beloning) In de toekomst zal hij nog harder trekken.<br>
                Voorkom dit door je hand met de lijn in stevig aan je heup te houden. Trekt je hond? Ga dan niet snokken aan de lijn, maar probeer ook zelfs geen halve meter toe te geven.<br>
                Negeer dat gedrag volledig en blijf gewoon stevig staan.<br>
                Als de hond door heeft dat dit gedrag niets oplevert en de spanning van de lijn lost, prijs hem dan de hemel in met een snoepje, een aanraking, een lief woord of die geliefde graskant waar hij zo graag even wil gaan snuffelen.<br>
                Samenvatting:<br>
                <ul>
                  <li>Beter voorkomen dan genezen, bekijk elke wandeling met je puppy/hond als een oefenmoment. Laat hem geen enkel moment trekken. Sta STIL als het wel gebeurt.</li>
                  <li>Kijk naar je hond en wat hij wil als beloning en gebruik dat dan ook.</li>
                  <li>Beloon door verder te stappen als de lijn ontspannen is. Als de hond aan je been loopt, mag je zelfs een snoepje als extraatje geven.</li>
                  <li>Bij het stilstaan: hou de lijn aan je heup, beloon als de lijn ontspannen is.</li>
                  <li>Wees enorm consequent! Alleen deze techniek op het hondenplein toepassen is niet voldoende. Je moet het ELKE keer doen.</li>
                </ul>
              </p>

        `}
      ></post-element>
      <post-element
      headline="Jouw puppy bijt?"
      subline="Prijs jezelf gelukkig![1]"
      .content=${html`
              <p>Een puppy heeft op jonge leeftijd nog onvoldoende bijtremming, dit wil zeggen; hij bijt hard en ongeremd. Door zijn nestgenoten, zijn vader en zijn moeder te bijten komt een puppy nu net aan de weet hoe hard hij exact moet bijten om de ander wel of geen pijn te doen, en trekt hij daar conclusies uit. In de periode dat puppy’s melktanden hebben, zijn de ideale voorwaarden aanwezig om hun dit te leren.  Puppy’s hebben vóór hun 12 weken zwakke kaakspieren, naaldscherpe tanden en een niet aflatende neiging om te bijten. Deze 3 elementen zorgen ervoor dat er veel ervaringen opgedaan worden.<br>
              <strong>Des te meer de puppy in zijn jeugd de kans krijgt om mensen, honden en andere dieren al spelend te bijten, des te meer kans dat hij  bijtgeremd is als volwassen hond.</strong></p>
              <p>
                Het speels bijten moet niet alleen toegelaten, maar zelfs <strong>gestimuleerd</strong> worden. Natuurlijk  moet het uiteindelijk volledig ophouden want we kunnen geen volwassen hond houden die, net als een puppy speels knabbelt aan armen, benen of kleding van kinderen, vrienden of kennissen.<br>
                Het is echter heel belangrijk dat dit puppybijten stap voor stap, door een systematisch leerproces, uit de wereld geholpen wordt. Laat je in tussentijd niet verleiden om door middel van straf het speels bijten op te lossen.<br>
                Het is <strong>verkeerd</strong> te veronderstellen dat het speelse puppybijten zo nodig onmiddellijk moet gestopt worden. Dit is zeker niet de bedoeling! Door een stap voor stap leerproces wil je immers niet alleen dat het bijten stopt maar ook dat je puppy iets geleerd heeft. De puppy moet in eerste instantie leren om zijn beet te controleren, dit wil zeggen: <strong>zacht bijten.</strong> Daarna pas kan je hem leren op te houden met bijten. Wat je met het aanleren van bijtgeremdheid wil bereiken is dat, mocht de volwassen hond toch ooit bijten, hij dit geremd zal doen, en dat de aangebrachte verwondingen slechts minimaal zijn. Maak jezelf er niet te vlug vanaf, denk niet dat het vanzelf wel zal loslopen. Bijtgeremdheid aanleren is <strong>van levensbelang</strong> voor je hond en voor de mensen die met hem omgaan.
              </p>
              <h3>Fase 1: De kracht van de beet temperen.</h3>
              <p>
                Het eerste punt op de agenda is de puppy doen stoppen met je pijn te doen als hij bijt. Het is hierbij niet nodig om de puppy te straffen, maar het is wel nodig om hem te laten weten wanneer het pijn doet. Meestal is een eenvoudig “Aah” voldoende.  De kracht waarmee je “Aahh” zegt, hangt af van de kracht van de beet en van de mentale toestand van de puppy op dat ogenblik.<br>
                Als de puppy zijn bijten stopt, roep hem dan bij je en speel dan verder. Als de puppy zich niets aantrekt van je schreeuw, draai je dan weg en maak hem met je stem duidelijk dat je het niet plezant vindt “Aah, dat doet pijn, jij brutale kerel”. Om je woorden meer effect bij te brengen en je gekwetste gevoelens te accentueren kan je met een stoel rammelen of met de palm van je hand op het tafelblad slaan. Nooit de puppy slaan, kletsen, enz. Dit maakt heel de zaak alleen maar erger. Fysieke straffen (slaan, schoppen) zorgen er meestal voor dat de puppy angstig of agressief wordt. Dit leidt natuurlijk tot een andere vorm van bijten. Het speels bijten kan dan veranderen in gemeend bijten. Bij een aantal rassen geraakt de puppy door geschreeuw, gebrul of door straf alleen nog meer opgewonden waardoor hij nog harder bijt. Als je het gevoel hebt dat je puppy wint, scheldt hem dan zoveel uit als je daar de behoefte voor voelt, noem hem een “schoft” als je wil, maar verlaat de kamer en sluit de deur achter je. Deze vorm van berisping is zeker voor minder gevoelige honden de beste straf. Geef je hond vervolgens een paar minuten om te beseffen dat hij zijn favoriet menselijk knabbelvoorwerp moet missen. Ga daarna terug en maak het goed. Je kan ook gebruik maken van een baby-hekje om je terug te trekken of je hond ogenblikkelijk met zij leiband ergens vastmaken. Het is belangrijk dat je de puppy hierna duidelijk maakt dat je toch nog steeds van hem houdt, en dat het alleen zijn pijnlijke beten zijn die je niet wil. Roep de puppy, doe hem zitten terwijl je op een rustige manier tegen hem praat. Maar stuur niet meer aan op speels bijten totdat je meer geoefend hebt met andere oefeningen. Je kan hem bijvoorbeeld leren, terwijl je hem uit de hand eten geeft, wat “Stilletjes” en “Afblijven” betekent. Dit wordt je aangeleerd in de les. Heb je het gevoel dat ondanks deze maatregelen het bijten uit de hand loopt, wacht dan niet tot je puppy ouder is of verwacht niet dat het vanzelf zal overgaan als hij ouder wordt. Ga dan te rade bij je instructeur.
              </p>
              <h3>Fase 2. Bijten zonder druk uit te oefenen.</h3>
              <p>
                Zelfs als de beten nu geen pijn meer doen, moet de hond toch nog geleerd worden om <strong>helemaal geen druk</strong> meer uit te oefenen. Als je puppy knabbelt wacht dan op een beet die iets harder is dan de rest en reageer hierop alsof het je heel erg pijn deed (ook al was dit niet zo). “Aah…, gij kleine snotter – stilletjes – rustig – hee, dat deed pijn hoor”. Je moet dus eigenlijk een beetje liegen tegen je puppy. Je laat hem verstaan dat hij je heel erg pijn heeft gedaan, ook al is dit niet echt zo. De boodschap die de hond daaruit concludeert, klinkt dan als volgt: “Amaai, die mensen zijn ook vlug geraakt, echte kruidjes-roer-me-niet. Zij zijn veel gevoeliger dan mijn honden-speelkameraadjes. Mensen zijn overgevoelig. Ik moet bij hen extra voorzichtig zijn als ik knabbel”. Deze reactie is precies wat we wilden. De puppy moet heel voorzichtig worden wanneer hij met mensen speelt. Het ideaal is dat de puppy vóór zijn 3 maanden ouderdom geleerd heeft om mensen geen pijn meer te doen.<br>
                De puppy mag in elk geval <strong>geen druk</strong> meer uitoefenen bij het bijten tegen de tijd dat hij <strong>4-5 maanden oud</strong> is.
              </p>
              <h3>Fase 3. De frequentie van het in de handen knabbelen verminderen.</h3>
              <p>Eens de puppy geleerd heeft om eerder te sabbelen dan op je handen te bijten, is het tijd om ook de frequentie te doen verminderen. Leer de puppy dat er niets mis is als hij je hand in zijn muil neemt zolang jij geen “stop” zegt. Je wil hem dit leren omdat het niet gemakkelijk is om een tas koffie te drinken of de telefoon te beantwoorden als er 30 kg. hond aan je mouw hangt! Nu is het moment dat het “Afblijven” – bevel weer een rol speelt. Dit bevel kan je best van tevoren aanleren met een snoepje dat je hem met de hand aanreikt. Eens je hond het bevel kent met een snoepje kan je het bevel “afblijven” ook gebruiken om het knabbelen te stoppen. Zeg “Afblijven”. Prijs de puppy als hij stopt en je loslaat. Bedenk dat het doel is dat je hond het bevel “afblijven” opvolgt en hij stopt met knabbelen. Daarom moet je, elke keer dat de puppy stopt, nog even met hem spelen. Dit wil zeggen, laat je puppy terug knabbelen als beloning omdat hij op bevel gestopt is met het knabbelen. Stop en herbegin de spelsessie opnieuw en opnieuw. Denk eraan dat, omdat de puppy wil knabbelen, dit ook de beste beloning is voor zijn stoppen. Beloon hem door hem opnieuw te laten beginnen. Als je dan uiteindelijk beslist dat de knabbelsessie finaal moet stoppen, wandel dan bijvoorbeeld met hem naar de keuken en geef hem een smakelijk snoepje of een knabbelvoorwerp waarmee hij zijn tanden kan bezig houden.</p>
              <h3>Fase 4. Het bijten en stoppen op bevel</h3>
              <p>
                Nu je puppy geleerd heeft dat hij niet ongevraagd in je kleding of je ledematen mag bijten, zou je hem kunnen leren om op jouw bevel, d.w.z. slechts nadat je het hem nadrukkelijk gevraagd hebt, te bijten in je armen of in een voorwerp dat je hem aanbiedt.
                Deze fase kan je echter pas aanleren nadat je zeker weet dat je hond ook op bevel stopt of loslaat. Eens 5 maanden oud zou de puppy geen druk meer mogen uitoefenen met zijn tanden wanneer hij aan je knabbelt en moet hij onmiddellijk stoppen wanneer, om het even wie van de familie, daarom vraagt. Speels en ongevraagd knabbelen is typisch voor puppy’s en je zou kunnen zeggen dat het ook nog getolereerd kan worden bij opgroeiende honden. Maar het is daarentegen <strong>totaal onaanvaardbaar</strong> voor honden in hun pubertijd of volwassen honden. Het maakt niets uit hoe speels of onschuldig hun motieven zijn, het is <strong>totaal taboe</strong> voor honden ouder dan 6 maanden om <strong>ongevraagd</strong> een arm van bijvoorbeeld een kind vast te nemen, zelfs al doet hij dit zachtjes. Deze situatie moet zeker ouders met kinderen kippenvel bezorgen. De hond moet geleerd worden om <strong>niemand</strong> met zijn tanden aan te raken zolang hij daartoe niet verzocht werd. De puppy mag ook nooit toegelaten worden om te knabbelen op kleding, pantoffels, veters, T-shirt, broek of blouse. Omdat het geen pijn doet als de hond in deze dingen bijt, geven sommige eigenaars soms ook niet de zo noodzakelijke reactie en is het bijgevolg voor de hond ook niet duidelijk dat hij dit niet mag. Vooraleer je kan spreken van een kind- en mensveilige hond moet hem zeker geleerd worden.
              </p>
              <small>[1] Uit de puppycursus van Pieter Knapen (Van Leodipako) – naar de tips van Dany Grosemans</small>
        `}
      ></post-element>
      <post-element
      headline="Aandacht aandacht!"
      subline="Prijs jezelf gelukkig!(1)"
      .content=${html`
          <p>
            Eén van de belangrijkste dingen die je zal leren in de hondenschool is het verkrijgen van jouw hond z’n onverdeelde aandacht. Iedere les starten we dan ook met een zogenaamde aandachtsoefening.<br>
            Het is echter heel belangrijk dat je je hond <strong>iedere keer</strong> hij aandacht toont en geïnteresseerd is in jou, gaat belonen. Zeker thuis! En daarom geven we je enkele handige stapjes mee om thuis al mee aan de slag te gaan. [2]<br>
            <i>
              Tip!<br>
              Zet een kom met snoepjes (of een deel van zijn dagelijkse proportie aan brokken) op het aanrecht. Steek geregeld wat snoepjes of brokken in je zak, zodat je altijd iets bij de hand hebt in huis.
            </i>
          </p>
          <ul>
          <li style="list-style:none;">
          Stap 1:
          <p>
            Zijn je zakken gevuld met snoep? Goed, we gaan aan de slag!<br>
            Doe niets speciaals. Je gewone dagelijkse bezigheden zijn meer dan genoeg.<br>
            Houd je hond steeds vanuit een ooghoek in de gaten. Kijkt hij jou aan? Zeg dan “Flink!” en geef hem een snoepje. Het maakt nog niet uit dat hij nog niet naar jou toekomt. Enkel het feit dat hij jou aankijkt, wordt in de eerste plaats al beloond. Nadien zal je hond spontaan naar jou beginnen komen. Ook daarvoor krijgt hij een “Flink!” en een snoepje.<br>
            Al na één dag kan je de termijn van kijken gaan opbouwen. In het begin beloonde je meteen als hij keek, nu ga je eerst één seconde, dan twee, dan drie enz. gaan wachten voor je hem beloont. Op die manier leer je je hond telkens een beetje langer naar jou kijken.
          </p>
          </li>
          <li style="list-style:none;">
          Stap 2:
          <p>
            Nu kan je beginnen met afleidingsmanoeuvres in te schakelen. Vraag aan een vriend om de kamer binnen te komen, om lawaai te maken in de kamer ernaast, om naar je hond toe te komen, om naast je hond te gaan staan, om jou een hand te geven, …<br>
            Iedere keer jouw hond toch naar jou kijkt: “Flink!” en een snoepje.<br>
            Ook hier is het belangrijk dat je de moeilijkheidsgraad langzaam gaat opbouwen.<br>
            Op de duur is je hond in staat om jou te blijven aankijken terwijl iemand naast hem een hamburger staat te eten.<br>
            Dit is trouwens ook een goede manier om het kijken naar jou als standaard gedrag te gaan installeren: “Vreemde toestanden? = Naar mam of pap kijken!”
          </p>
          </li>
          <li style="list-style:none;">
          Stap 3:
          <p>Idem als stap 1, maar dan in de tuin.</p>
          </li>
          <li style="list-style:none;">
          Stap 4:
          <p>Idem als stap 1, maar dan voor je huis. (Nog niet op echte wandeling, maar aan een lange lijn voor je gevel.)</p>
          </li>
          <li style="list-style:none;">
          Stap 5:
          <p>
            Met je hond naar andere omgevingen. Stel: je komt in een café, kantine, restaurant, … terecht en meteen is je hond overdonderd door allerlei prikkels. Met andere woorden: hij heeft hoogstwaarschijnlijk geen aandacht voor jou.<br>
            Wat we nu gaan doen, heeft veel weg van ‘omkoperij’, maar het is eigenlijk veel meer dan dat. Terwijl je die nieuwe omgeving binnengaat, prop je je hond extreem lekkere snoepjes onder z’n neus. Let erop dat het dingen zijn met een felle geur, die hij niet kan negeren.<br>
            Hier maken we gebruik van klassieke conditionering. We gaan met andere woorden onze hond leren om elke keer hij in een nieuwe ruimte/situatie komt naar jou te kijken. Hij zal een nieuwe ruimte associëren met het feit dat jij iets lekkers aanbiedt. En automatisch vergroot de kans dat hij in de toekomst jouw aandacht zal opzoeken in een nieuwe ruimte. Na verloop van tijd ga je niet meer onmiddellijk een jackpot van snoepjes toedienen, maar ga je eens checken of je hond al automatisch jouw blik komt zoeken. En dan geef je de jackpot pas.
          </p>
          </li>
          <li style="list-style:none;">
          Stap 6:
          <p>
            Pas stilaan hetzelfde toe als in stap 1 en 5 op andere plaatsten. Bijvoorbeeld het park, …<br>
            Bouw de mate van prikkels op. Begin in een zo prikkelarme omgeving mogelijk, nadien zoek je drukkere plekken op.
          </p>
          </li>
          <li style="list-style:none;">
          Stap 7:
          <p>
            Nu ga je dit toepassen op wandeling. Maar let op! Het is hierbij enorm belangrijk dat je een onvoorwaardelijke aandacht gericht hebt op je hond. Want iedere keer hij jou aankijkt, moet hij beloond worden.<br>
            Als je het enkele keren gemist hebt, zal hij van zelf op zoek gaan naar andere voor hem interessante dingen. Bijvoorbeeld het snuffelen aan de graskant, andere honden groeten, … Dit is allemaal zelfbelonend gedrag, dat snel kan escaleren tot situaties die jij niet prettig zal vinden.<br>
            Wil jij aandacht <strong>van</strong> je hond? Heb dan zelf ook aandacht <strong>voor</strong> je hond!
          </p>
          </li></ul>
          <p>Los van de aandachtsoefeningen die je zal aangeleerd krijgen in de hondenschool, is dit dus een ideale manier om met je hond bezig te zijn. Vergeet hem zeker ook niet te belonen wanneer hij jou op het hondenschoolterrein spontaan aankijkt! Ook al ben je op dat moment met een andere oefening bezig: jou aankijken moet ALTIJD beloond worden.</p>
          <h3>Roedeltheorie achterhaald! Hoe moet het dan wel?</h3>
          <p>Heel veel mensen zijn ervan overtuigd dat een hond erop gebrand is om ‘zijn positie in de roedel’ te verbeteren. Om dat te voorkomen passen deze personen soms zelfs onmenselijke technieken toe om de hond te herinneren aan zijn laagste plaats. Ze drukken hem bijvoorbeeld met kracht op de grond…</p>
          <p>
            Eigenlijk is het helemaal zo ingewikkeld niet.<br>
            Een hond is een opportunist. Hij zal inderdaad altijd gedrag vertonen dat hem het meest oplevert. Is hij daarom noodzakelijk dominant? Natuurlijk niet.<br>
            Je zou het kunnen vergelijken met een tweejarige peuter. Stel je voor: een peuter in zijn stoel aan tafel. De fopspeen van de peuter valt toevallig van het tafeltje.<br>
            Wat doen de ouders? Ze rapen het natuurlijk voor hem op.<br>
            Wat leert de peuter? LEUK! Ik kan mama/papa iets laten doen. Tof spelletje, ik probeer het nog eens!<br>
            En de peuter laat keer op keer zijn fopspeen vallen.
          </p>
          <p>
            Moeten we die peuter nu benaderen zoals de honden al jaren benaderd worden en ervan uitgaan dat die peuter dit gedrag bewust stelt om zijn plaats binnen het gezin op te eisen? Het is vast en zeker een DOMINANT kind zeg!<br>
            Laat ons niet lachen.<br>
            Bij honden is het niet anders. Ze zullen gedrag herhalen dat beloond geweest is (hetzij door de eigenaar, hetzij door de hond of de omgeving zelf) en gedrag minder vaak vertonen als het gecorrigeerd geweest is (hetzij door de eigenaar, hetzij door de omgeving zelf).
          </p>
          <small>[2] Uit het boek “When Pigs Fly! Training success with impossible dogs” van Jane Killion</small>
        `}
      ></post-element>
      <post-element
      headline="Onderzoek wees uit dat honden leren door zowel klassieke conditionering als operante conditionering."
      .content=${html`
              <p>Klassieke conditionering gebeurt door de hond zelf. Hier heeft de baas in principe geen bewuste inbreng in. De hond koppelt gebeurtenissen aan elkaar.<br>
              Bijvoorbeeld: de eigenaar wordt gewekt door de wekker, komt de trap afgestapt, doet de deur van de woonkamer open en groet de hond. De hond is blij bij het zien van zijn eigenaar.<br>
              Hoe werkt klassieke conditionering nu? In ons voorbeeld gaat het zo:<br>
              De hond hoort de wekker en na verloop van tijd begint hij al te kwispelen en dol te doen in de woonkamer omdat hij op voorhand wéét dat volgende dingen gaan volgen: baas komt de trap af, doet de deur open en groet de hond.<br>
              Klassieke conditionering maakt het leven voorspelbaar voor de hond.
              </p>
              <p>
                Operante conditionering kan door de mensen worden gebruikt om honden allerlei dingen aan te leren. In volgend schema zie je een overzicht van de verschillende manieren waarop gedrag kan worden beïnvloed. Let op de verwarrende benaming van ‘positieve straf’. Uiteraard is hier niets positiefs aan.<br>
                We bedoelen met <strong>positief</strong> dat er iets wordt <strong>toegevoegd</strong>.<br>
                We bedoelen met <strong>negatief</strong> dat er iets wordt <strong>weggenomen</strong>.<br>
                Beloning (positieve of negatieve) zorgt ervoor dat gedrag toeneemt, straf (positieve of negatieve) zorgt ervoor dat gedrag afneemt.<br>
                Belangrijk hierbij is dat je denkt vanuit het standpunt van je hond. Vraag je af of wat jij als een beloning voor hem beschouwt, dit ook is voor je hond. Een voorbeeld? Een aai kan voor jou een beloning lijken maar kijk naar je hond op het moment dat je hem wil aaien. Krimpt hij wat ineen met de oren naar achteren en de staart tussen de benen? Dan beschouwt hij jouw aai niet als een beloning maar als een bedreiging.<br>
                Soms zijn baasjes zich niet bewust dat ze één van deze manieren toepassen. Zie het voorbeeld van de apporteeroefening bij negatieve straf. Het helpt als je je bewust wordt van deze leertechnieken, dan kan je ze gaan toepassen.
              </p>
              <h3>Positieve beloning</h3>
              <p>Er wordt iets <strong>aangenaams</strong> voor de hond <strong>toegevoegd</strong> op het moment dat een gedrag zich stelt: dat gedrag zal in de toekomst <strong>toenemen</strong>.Vb. Hond gaat zitten en hij krijgt een snoepje.<br>
              Maar ook: <br>
              <i>Hond knabbelt vuilnisbak open en vindt etensrestjes.</i><br>
              <i>Of: Hond trekt aan de lijn en komt zo bij een andere hond.</i><br>
              In al deze voorbeelden zal het gedrag in de toekomst nog vertoond worden, aangezien de hond hier op de één of andere manier is voor beloond geweest.<br>
              </p>
              <h3>Positieve straf</h3>
              <p>
                Er wordt iets <strong>onaangenaams</strong> voor de hond <strong>toegevoegd</strong> op het moment dat een gedrag zich stelt: dat gedrag zal in de toekomst <strong>afnemen</strong>. Vb. Hond blaft en krijgt een schop.<br>
                Maar ook: <br>
                <i>Hond duwt vuilnisbak omver en verschiet door het lawaai van het metalen deksel dat op de grond valt.</i><br>
                <i>Of: Hond trekt aan de lijn en krijgt een schok van de elektrische leiband.</i><br>
                In al deze voorbeelden zal het gedrag in de toekomst minder frequent voorkomen omdat hij hier op de één of andere manier is voor gestraft geweest.<br>
              </p>
              <h3>Negatieve beloning</h3>
              <p>Er wordt iets onaangenaams weggenomenop het moment dat een gedrag zich stelt: dat gedrag zal in de toekomst toenemen.Vb. Hond blaft op voorbijganger.<br>
              <i>De voorbijganger gaat, zoals het woord zegt, natuurlijk gewoon voorbij. De hond denkt dat zijn blaffen de persoon heeft weggejaagd en zal in de toekomst nog blaffen naar voorbijgangers.</i><br>
              Idem met een luchtballon.<br>
              Of: baknijd. De hond gromt als iemand in de buurt komt van zijn eten.<br>
              Meestal gaat die persoon achteruit. De baknijd zal toenemen.</p>
              <h3>Negatieve straf</h3>
              <p>
                Er wordt iets aangenaams weggenomen op het moment dat een gedrag zich stelt: dat gedrag zal in de toekomst afnemen.Vb. De hond gromt bij het spelen.<br>
                <i>De baas stopt het spel onmiddellijk. Het grommen zal afnemen, want het leuke (spel) is gestopt.</i><br>
                Maar ook: De hond brengt zijn apport terug en het baasje stopt het weg en verlaat het plein.<br>
                De hond zal in de toekomst zijn apportje niet meer afgeven, want het aangename is zomaar weggenomen toen hij het bracht.
              </p>
              <p>
                In veel gevallen kan gedrag van een zogenaamde “dominante” hond achterhaald worden in dit schema. En dan merk je dat de hond deze vervelende manieren gewoon geleerd heeft van de baas. Hij leeft niet om jou als baas te kunnen overmeesteren, maar hij leeft volgens wat hem in het verleden het meest heeft opgebracht.<br>
                Leer jij je hond vriendelijk en consequent enkele manieren, dan zal je een “beleefde” hond krijgen.
              </p>
              <p>
                Studies hebben aangetoond dat je er niet van uit hoeft te gaan dat je “de baas” moet zijn van de hond. Wees zijn coach, zijn leraar, zijn steun en houvast.<br>
                Zoals een ouder dit ook hoort te zijn van een kind.
              </p>
              <p>
                <strong>Heb jij na het lezen van deze info vragen? Aarzel niet en spreek er onmiddellijk een instructeur over aan… Hij/zij legt het met plezier uit.</strong><br>
                <br>
                Veel succes!
              </p>
        `}
      ></post-element>
    </flex-container>
    `
  }
}
