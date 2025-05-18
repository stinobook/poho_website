import { html, css, LiteElement, property } from '@vandeurenglenn/lite'
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
      .success-message {
        background-color: rgba(76, 175, 80, 0.1);
        border-left: 4px solid #4caf50;
        padding: 12px;
        margin: 16px 0;
        color: #2e7d32;
        border-radius: 4px;
      }
      
      .error-message {
        background-color: rgba(244, 67, 54, 0.1);
        border-left: 4px solid #f44336;
        padding: 12px;
        margin: 16px 0;
        color: #c62828;
        border-radius: 4px;
      }
      
      /* Loading indicator */
      .loading {
        display: inline-block;
        width: 20px;
        height: 20px;
        margin-left: 10px;
        border: 3px solid rgba(255,255,255,.3);
        border-radius: 50%;
        border-top-color: var(--md-sys-color-on-primary);
        animation: spin 1s ease-in-out infinite;
      }
      
      @keyframes spin {
        to { transform: rotate(360deg); }
      }
      
      button:disabled {
        background-color: var(--md-sys-color-outline);
        cursor: not-allowed;
      }
    `
  ]

  @property() accessor name: string = '';
  @property() accessor email: string = '';
  @property() accessor subject: string = '';
  @property() accessor message: string = '';
  @property() accessor successMessage: string = '';
  @property() accessor errorMessage: string = '';
  @property() accessor isSubmitting: boolean = false;

  connectedCallback() {
    this.shadowRoot.addEventListener("submit", (event) => this.submitForm(event))
    this.shadowRoot.addEventListener("change", (event) => this.formValid(event.target))
  }

  submitForm = async (event: Event) =>{
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
        this.isSubmitting = true;
        this.errorMessage = '';
        this.successMessage = '';
        const name = this.name;
        const email = this.email;
        const subject = this.subject;
        const message = this.message;
        try {
            console.log('Sending email via Firebase function...');
            
            // Updated URL to use Europe region
            const response = await fetch('https://europe-west1-poho-app.cloudfunctions.net/sendMail', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                name,
                email,
                subject,
                message
              })
            });
            
            console.log('Response received:', response.status);
            
            if (response.ok) {
              this.successMessage = 'Bedankt voor je bericht! We nemen zo snel mogelijk contact met je op.';
              this.resetForm();
          } else {
              // Parse error response
              let errorData;
              try {
                errorData = await response.json();
              } catch (e) {
                errorData = { error: 'Er is een onbekende fout opgetreden.' };
              }
              
              this.errorMessage = errorData.error || 'Er is een fout opgetreden bij het verzenden van je bericht.';
              console.error('Form submission error:', errorData);
            }
          } catch (error) {
            console.error('Error sending message:', error);
            this.errorMessage = 'Er is een probleem opgetreden bij het verzenden van je bericht. Controleer je internetverbinding en probeer het later opnieuw.';
          } finally {
            // Always reset loading state
            this.isSubmitting = false;
          }
    }
  }

  resetForm() {
    console.log('Resetting form...');
    
    // Reset our property values
    this.name = '';
    this.email = '';
    this.subject = '';
    this.message = '';
    
    // Reset the actual form fields in the DOM
    const nameInput = this.shadowRoot?.querySelector<HTMLInputElement>('#name');
    const emailInput = this.shadowRoot?.querySelector<HTMLInputElement>('#email');
    const subjectInput = this.shadowRoot?.querySelector<HTMLInputElement>('#subject');
    const messageInput = this.shadowRoot?.querySelector<HTMLTextAreaElement>('#message');
    
    console.log('Form inputs:', { nameInput, emailInput, subjectInput, messageInput });
    
    if (nameInput) nameInput.value = '';
    if (emailInput) emailInput.value = '';
    if (subjectInput) subjectInput.value = '';
    if (messageInput) messageInput.value = '';
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
      default:
        field.parentElement.classList.remove('error')
        return(true)
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
        ${this.successMessage ? html`<div class="success-message">${this.successMessage}</div>` : ''}
        ${this.errorMessage ? html`<div class="error-message">${this.errorMessage}</div>` : ''}
        <label>
            Naam
            <input
            type="text"
            id="name"
            name="name"
            .value="${this.name}"
            @input="${(e: Event) => this.name = (e.target as HTMLInputElement).value}"
            required
          />
        </label>
        <label>
            E-mail adres
            <input
            type="email"
            id="email"
            name="email"
            .value="${this.email}"
            @input="${(e: Event) => this.email = (e.target as HTMLInputElement).value}"
            required
          />
        </label>
        <label >
            Onderwerp:
            <input
            type="text"
            id="subject"
            name="subject"
            .value="${this.subject}"
            @input="${(e: Event) => this.subject = (e.target as HTMLInputElement).value}"
            required
            />
        </label>
        <label>
            Bericht
            <textarea
            id="message"
            name="message"
            rows="4"
            .value="${this.message}"
            @input="${(e: Event) => this.message = (e.target as HTMLTextAreaElement).value}"
            required
        ></textarea>
        </label>
        <md-filled-button type="submit" ?disabled="${this.isSubmitting}">
        ${this.isSubmitting ? 'Verzenden...' : 'Verzenden'} 
        ${this.isSubmitting ? html`<span class="loading"></span>` : ''}
         </md-filled-button>
      </form>
    </flex-container>
    `
  }
}
