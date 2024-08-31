import { html, css, LiteElement, query } from '@vandeurenglenn/lite'
import { customElement } from 'lit/decorators.js'
import '@vandeurenglenn/flex-elements/container.js'
import '@material/web/button/filled-button.js'

@customElement('signup-view')
export class SignupView extends LiteElement {
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
      form {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: 100%;
        background-color: var(--md-sys-color-surface-container-high);
        color: var(--md-sys-color-on-surface-container-high);
        border-radius: var(--md-sys-shape-corner-extra-large);
        gap: 12px;
        padding: 12px;
      }
      input, select {
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
      label {
        float: left;
        width: 100%;
        padding: 4px 12px;
        margin-right: 12px;
        font-size: 1rem;
        border-top-left-radius: 3px;
        border-bottom-left-radius: 3px;
      }
      .sub {
        font-size: 1.1em;
        font-weight: bold;
        width: 100%;
        text-align: center;
      }
      .extradetails {
        display: none;
      }
      .extra:checked ~ .extradetails {
        display: initial;
      }
      .pill {
        position: relative;
        display: inline-block;
        width: 54px;
        height: 28px;
        background-color: rgba(0, 0, 0, 0.25);
        border-radius: 20px;
        transition: all 0.3s;
        padding: 0;
        margin-right: 24px;
        margin-left: auto;
      }
      .pill::after {
        content: '';
        position: absolute;
        width: 26px;
        height: 26px;
        border-radius:50%;
        background-color: var(--md-sys-color-on-primary);
        top: 1px;
        left: 1px;
        transition: all 0.3s;
      }
      
      .extra:checked + .pill::after {
        left : 27px;
      }
      .extra:checked + .pill {
        background-color: var(--md-sys-color-primary);;
      }
      .extra {
        display : none;
      }
      .extralabel {
        max-width: fit-content;
      }
      md-filled-button {
        width: 100%;
      }
    `
  ]

  render() {
    return html`
    <flex-container>
      <form>
        <label class="sub">Eigen gegevens</label>
        <label>E-mail adres:<input type="text" name="email"/></label>
        <label>Voornaam<input type="text" name="name"/></label>
        <label>Familienaam<input type="text" name="lastname"/></label>
        <label>Geboortedatum<input type="text" name="birthday"/></label>
        <label class="extralabel">Tweede geleider inschrijven?</label>
        <input type="checkbox" name="extra" id='extra' class="extra"/>
        <label for="extra" class="pill"></label>
          <label class="sub extradetails">Gegevens tweede geleider</label>
          <label class="extradetails">E-mail adres:<input type="text" name="email2"/></label>
          <label class="extradetails">Voornaam<input type="text" name="name2"/></label>
          <label class="extradetails">Familienaam<input type="text" name="lastname2"/></label>
          <label class="extradetails">Geboortedatum<input type="text" name="birthday2"/></label>
        <label class="sub">Woonplaats</label>
        <label>Straat en huisnummer<input type="text" name="street"/></label>
        <label>Gemeente<input type="text" name="community"/></label>
        <label>Postcode<input type="text" name="postalcode"/></label>
        <label>Telefoonnummer<input type="text" name="phone"/></label>
        <label class="sub">Gegevens hond</label>
        <label>Naam hond<input type="text" name="dogname"/></label>
        <label>Ras hond<input type="text" name="dograce"/></label>
        <label>Chipnummer<input type="text" name="chipnumber"/></label>
        <label>Stamboomnummer<input type="text" name="pedigree"/></label>
        <label>Waar werd de hond aangekocht?<input type="text" name="store"/></label>
        <label>Leeftijd bij aankoop<input type="text" name="buyage"/></label>
        <label>Heb je al hondentraining gevolgd?<input type="text" name="experience"/></label>
        <label class="sub">Reglement</label>
        <label class="extralabel">Ik heb het <a href="#!/rules" @click=${() => location.hash = '!/rules'}>huishoudelijk reglement</a> gelezen en ga hiermee akkoord.
        </label>
        <input type="checkbox" name="rules" id='rules' class="extra"/>
        <label for="rules" class="pill"></label>
        <md-filled-button action="submit">Verzenden</md-filled-button>
      </form>
    </flex-container>
    `
  }
}
