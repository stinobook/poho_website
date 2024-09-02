import { html, css, LiteElement } from '@vandeurenglenn/lite'
import { customElement } from 'lit/decorators.js'
import '@vandeurenglenn/flex-elements/container.js'
import '@material/web/button/filled-button.js'
import '../components/post.js'


@customElement('contact-view')
export class ContactView extends LiteElement {
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
      input, textarea {
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
      .error {
        color: var(--md-sys-color-error);
      }
      .error input[type=text], .error textarea {
        background-color: var(--md-sys-color-error-container);
        color: var(--md-sys-color-error);
        border: 1px solid var(--md-sys-color-error);
        outline: none;
      }
    `
  ]

  connectedCallback() {
    this.shadowRoot.addEventListener("submit", (event) => this.submitForm(event))
    this.shadowRoot.addEventListener("change", (event) => this.formValid(event.target))
  }

  async submitForm(event) {
    event.preventDefault()
    const fields = Array.from(this.shadowRoot.querySelectorAll('input'))
    const textarea = this.shadowRoot.querySelector('textarea')
    let noError = true
    if (!textarea.value) {
      textarea.parentElement.classList.add('error')
        if (noError) noError = false
    } else {
      if (!this.validCheck(textarea) && noError) noError = false
    }
    for (const field of fields) {
      if (!field.value) {
          field.parentElement.classList.add('error')
          if (noError) noError = false
      } else {
        if (!this.validCheck(field) && noError) noError = false
      }
    }
    if (noError) {
      //send mail
    }
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
      default:
        field.parentElement.classList.remove('error')
        return(true)
        break;
    }
  }

  render() {
    return html`
    <flex-container>
    <post-element
    .headline=${html`
      Hondenschool PoHo<br>
      Steenbergstraat 12<br>
      9308 Hofstade-Aalst
      `}
    .content=${html`
      <p>
        Voor alle vragen en opmerkingen kan u steeds terecht bij een van onze bestuursleden. <br>
        Joke De Swaef: 0477 / 523 983<br>
        Als uw vraag <strong>niet dringend</strong> is, kan u steeds gebruik maken van onderstaand email formulier en iemand van PoHo zal u zo spoedig mogelijk terug contacteren.
      </p>
      <p>Open op <strong>woensdag</strong> en <strong>vrijdag</strong> vanaf <strong>19u45</strong>, tenzij anders gecommuniceerd via de home- of facebookpagina.</p>
      `}
    ></post-element>
      <form>
        <label class="sub">Contactformulier</label>
        <label>Naam<input type="text" name="name"/></label>
        <label>E-mail adres<input type="text" name="email"/></label>
        <label>Bericht<textarea name="message" rows="4"></textarea></label>
        <label class="extralabel">Stuur mij een kopie</label>
        <input type="checkbox" name="copy" id='copy' class="extra"/>
        <label for="copy" class="pill"></label>
        <md-filled-button action="submit">Verzenden</md-filled-button>
      </form>
    </flex-container>
    `
  }
}
