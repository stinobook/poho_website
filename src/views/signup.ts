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
        background-color: var(--md-sys-color-surface-container-high);
        color: var(--md-sys-color-on-surface-container-high);
        border-radius: var(--md-sys-shape-corner-extra-large);
        gap: 12px;
        padding: 12px;
      }
      input, select {
        padding: 10px 10px 10px 15px;
        font-size: 1rem;
        color: var(--md-sys-color-on-surface-container-highest);
        background: var(--md-sys-color-surface-container-highest);
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
        background-color: var(--md-sys-color-primary);
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
      .error-message {
        color: var(--md-sys-color-error);
        display: inline-block;
        font-size: 12px;
        line-height: 15px;
        margin: 5px 0 0;
      }
      label + input + label + .error-message {
        display: none;
      }
      .error {
        color: var(--md-sys-color-error);
      }
      .error input[type=text] {
        background-color: var(--md-sys-color-error-container);
        color: var(--md-sys-color-error);
        border: 1px solid var(--md-sys-color-error);
        outline: none;
      }
      .error + input + label + .error-message {
        display: inline-block;
        margin: -12px 12px 12px;
      }
    `
  ]


  connectedCallback() {
    this.shadowRoot.addEventListener("submit", (event) => this.submitForm(event))
    this.shadowRoot.addEventListener("input", (event) => this.formValid(event.target))
    this.shadowRoot.querySelector("#rules").addEventListener("change", (event) => {
      const rules = this.shadowRoot.querySelector('#rules') as HTMLInputElement
      (!rules.checked) ? this.shadowRoot.querySelector('#rules2').classList.add('error') : this.shadowRoot.querySelector('#rules2').classList.remove('error')

    })
  }

  submitForm(event) {
    event.preventDefault()
    const fields = Array.from(this.shadowRoot.querySelectorAll('input'))
    const secSub = (this.shadowRoot.querySelector('#extra') as HTMLInputElement).checked
    const rules = this.shadowRoot.querySelector('#rules') as HTMLInputElement
    let noError = true
    for (const field of fields) {
      if (!field.value) {
          if (secSub && (field.name === 'email2' || field.name === 'name2' || field.name === 'lastname2' || field.name === 'birthday2')) { 
            field.parentElement.classList.add('error')
            if (noError) noError = false
          } else if (!secSub && field.name !== 'email2' && field.name !== 'name2' && field.name !== 'lastname2' && field.name !== 'birthday2') {
            field.parentElement.classList.add('error')
            if (noError) noError = false
          }
      } else {
        if (!this.validCheck(field) && noError) noError = false
      }
    }
    (!rules.checked) ? this.shadowRoot.querySelector('#rules2').classList.add('error') : this.shadowRoot.querySelector('#rules2').classList.remove('error')
    console.log(noError) 
  }

  formValid(field) {
    if (field.parentElement.classList.contains('error')) {
      this.validCheck(field)
    }
  }

  validCheck(field) {
    switch (field.name) {
      case 'email':
      case 'email2':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(field.value)) {
          field.parentElement.classList.add('error')
          return (false)
        } else {
          field.parentElement.classList.remove('error')
          return(true)
        }
        break;
      case 'street':
        const streetRegex = /^(?<name>\w[\s\w]+?)\s*(?<num>\d+\s*[a-z]?)$/;
        if (!streetRegex.test(field.value)) {
          field.parentElement.classList.add('error')
          return (false)
        } else {
          field.parentElement.classList.remove('error')
          return(true)
        }
        break;
      case 'community':
        const communityRegex = /^([a-zA-Z\u0080-\u024F]+(?:. |-| |'))*[a-zA-Z\u0080-\u024F]*$/;
        if (!communityRegex.test(field.value)) {
          field.parentElement.classList.add('error')
          return (false)
        } else {
          field.parentElement.classList.remove('error')
          return(true)
        }
        break;
      case 'postalcode':
        const postalcodeRegex = /^\d{4}$/;
        if (!postalcodeRegex.test(field.value)) {
          field.parentElement.classList.add('error')
          return (false)
        } else {
          field.parentElement.classList.remove('error')
          return(true)
        }
        break;
      case 'phone':
        const phoneRegex = /^(((\+|00)32[ ]?(?:\(0\)[ ]?)?)|0){1}(4(60|[6789]\d)\/?(\s?\d{2}\.?){2}(\s?\d{2})|(\d\/?\s?\d{3}|\d{2}\/?\s?\d{2})(\.?\s?\d{2}){2})$/;
        if (!phoneRegex.test(field.value)) {
          field.parentElement.classList.add('error')
          return (false)
        } else {
          field.parentElement.classList.remove('error')
          return(true)
        }
      default:
        field.parentElement.classList.remove('error')
        return(true)
        break;
    }
  }

  render() {
    return html`
    <flex-container>
      <form>
        <label class="sub">Eigen gegevens</label>
        <label>E-mail adres:<input type="text" name="email"/></label>
        <label>Voornaam<input type="text" name="name"/></label>
        <label>Familienaam<input type="text" name="lastname"/></label>
        <label>Geboortedatum<input type="date" name="birthday"/></label>
        <label class="extralabel">Tweede geleider inschrijven?</label>
        <input type="checkbox" name="extra" id='extra' class="extra"/>
        <label for="extra" class="pill"></label>
          <label class="sub extradetails">Gegevens tweede geleider</label>
          <label class="extradetails">E-mail adres:<input type="text" name="email2"/></label>
          <label class="extradetails">Voornaam<input type="text" name="name2"/></label>
          <label class="extradetails">Familienaam<input type="text" name="lastname2"/></label>
          <label class="extradetails">Geboortedatum<input type="date" name="birthday2"/></label>
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
        <label id="rules2" class="extralabel">Ik heb het <a href="#!/rules" @click=${() => location.hash = '!/rules'}>huishoudelijk reglement</a> gelezen en ga hiermee akkoord.</label>
        <input type="checkbox" name="rules" id='rules' class="extra"/>
        <label for="rules" class="pill"></label>
        <span class="error-message">Gelieve akkoord te gaan met het huishoudelijk reglement</span>
        <md-filled-button action="submit">Verzenden</md-filled-button>
      </form>
    </flex-container>
    `
  }
}
