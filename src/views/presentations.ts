import { html, css, LiteElement, property } from '@vandeurenglenn/lite'
import { customElement } from 'lit/decorators.js'
import '@vandeurenglenn/flex-elements/container.js'
import '@material/web/button/filled-button.js'
import '../components/post.js'

@customElement('presentations-view')
export class PresentationsView extends LiteElement {
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
        flex-direction: column;
        gap: 12px;
        background-color: var(--md-sys-color-surface-container-high);
        color: var(--md-sys-color-on-surface-container-high);
        border-radius: var(--md-sys-shape-corner-extra-large);
        padding: 12px;
      }

      input:not([type="checkbox"]):not([type="radio"]), textarea {
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
      .sub {
        font-size: 1.1em;
        font-weight: bold;
        width: 100%;
        text-align: center;
      }
      @keyframes spin {
        to { transform: rotate(360deg); }
      }
    `
  ]

  @property() accessor email: string = '';
  @property() accessor name: string = '';
  @property() accessor isSubmitting: boolean = false;
  @property() accessor successMessage: string = '';
  @property() accessor errorMessage: string = '';

    connectedCallback() {
    this.shadowRoot.addEventListener("submit", (event) => this.submitForm(event))
  }

  submitForm = async (event: Event) =>{
    event.preventDefault()
    const topics = Array.from(this.shadowRoot.querySelectorAll('input[name="topics"]:checked')) as HTMLInputElement[]
    let noError = true
    if (topics.length === 0) {
      this.errorMessage = 'Selecteer minstens één thema.';
        if (noError) noError = false
    }
    if (this.name === '') {
      this.errorMessage = 'Vul je naam in.';
        if (noError) noError = false
    }
    if (this.email === '') {
      this.errorMessage = 'Vul je e-mailadres in.';
        if (noError) noError = false
    } else {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(this.email)) {
            this.errorMessage = 'Vul een correct e-mailadres in.';
            if (noError) noError = false
        }
    }
    console.log(noError)
    if (noError) {
        this.isSubmitting = true;
        this.errorMessage = '';
        this.successMessage = '';
    const subject = 'Inschrijving Thema-avond';
    const message = `
Beste,

Bedankt voor je inschrijving voor de volgende thema-avonden:
${topics.map(t => `- ${t.value}`).join('\n')}

Gelieve het inschrijvingsgeld te storten op bankrekeningnr. BE88 7370 1345 3741
met vermelding “inschrijving thema-avond ${Math.random().toString(36).substring(2, 8).toLowerCase()}”.

Met vriendelijke groeten,
Het PoHo team
    `;
        const name = this.name;
        const email = this.email;
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
                this.successMessage = 'Bedankt voor je inschrijving! Je ontvangt zo meteen een mail met de betalingsinformatie.';
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
    
    // Reset the actual form fields in the DOM
    const nameInput = this.shadowRoot?.querySelector<HTMLInputElement>('#name');
    const emailInput = this.shadowRoot?.querySelector<HTMLInputElement>('#email');
    
    
    if (nameInput) nameInput.value = '';
    if (emailInput) emailInput.value = '';
  }

  render() {
      const topics = [
                        "Workshop snuffelbal maken: donderdag 11 september 2025 19u30",
                        "Aanschaf van een hond: maandag 13 oktober 2025 19u30",
                        "EHBO bij honden: donderdag 13 november 2025 19u30",
                        "Opvoedingstips: maandag 12 januari 2026 19u30",
                        "Lichaamstaal van de hond: maandag 16 februari 2026 19u30"
                    ];
    return html`
    <flex-container>
      <post-element
      image="./img/thema-avonden.webp"
      headline="5 Thema-avonden"
      subline="Informatieavond over diverse onderwerpen"
      ></post-element>
          <form>
        <label class="sub">Inschrijvingsformulier</label>

            ${this.successMessage ? html`<div class="success-message">${this.successMessage}</div>` : ''}
            ${this.errorMessage ? html`<div class="error-message">${this.errorMessage}</div>` : ''}
            <ul style="list-style:none;padding:0;">
              ${topics.map((topic) => html`
                <li>
                  <label>
                    <input type="checkbox" name="topics" value="${topic}">
                    ${topic}
                  </label>
                </li>
              `)}
            </ul>
            <p>
              Max. 30 personen per thema avond en minstens 10 dagen vooraf in te schrijven.
              5 euro inschrijvingsgeld <strong>(met uitzondering van Thema 1 hier is een extra kost van 12€ voor het materiaal (17€))</strong> te storten op bankrekeningnr. BE88 7370 1345 3741
              met vermelding “inschrijving thema-avond + naam en datum”.
            </p>
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
        <md-filled-button type="submit" ?disabled="${this.isSubmitting}">
            ${this.isSubmitting ? 'Verzenden...' : 'Inschrijven'} 
            ${this.isSubmitting ? html`<span class="loading"></span>` : ''}
         </md-filled-button>
          </form>
    </flex-container>
    `
  }
}
