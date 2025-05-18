const functions = require('firebase-functions');
const cors = require('cors')({ origin: true });
const nodemailer = require('nodemailer');

// Email configuration - FIXED to use functions.config()
const gmailEmail = functions.config().gmail?.email;
const gmailPassword = functions.config().gmail?.password;

// Set up the proper sending email address
const senderEmail = 'info@hondenschoolpoho.be'; // This is the forwarded email address
// Destination also remains the same forwarded address
const destinationEmail = 'info@hondenschoolpoho.be';

if (!gmailEmail || !gmailPassword) {
  console.error('Missing email configuration. Set gmail.email and gmail.password using:');
  console.error('firebase functions:config:set gmail.email="your-email@gmail.com" gmail.password="your-app-password"');
}

const mailTransport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: gmailEmail,
    pass: gmailPassword,
  },
});

// Validate and send email
exports.sendMail = functions
  .region('europe-west1')  // Change to Europe region
  .https.onRequest((req, res) => {
    // Apply CORS middleware
    return cors(req, res, async () => {
      // Check request method
      if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed. Please use POST.' });
      }

      try {
        // Validate request body
        const { name, email, subject, message } = req.body;
        
        if (!name || !email || !subject || !message) {
          return res.status(400).json({ error: 'Alle velden zijn verplicht.' });
        }
        
        if (!isValidEmail(email)) {
          return res.status(400).json({ error: 'Ongeldig e-mailadres.' });
        }
        
        // Send confirmation email to sender - Also updated
        const confirmationOptions = {
          from: {
            name: "Hondenschool Poho",
            address: senderEmail
          },
          to: [email, destinationEmail],
          replyTo: email,
          subject: `[Contactformulier] ${subject}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2>Bedankt voor je bericht</h2>
              <p>Beste ${name},</p>
              <p>We hebben je bericht ontvangen en zullen zo snel mogelijk contact met je opnemen.</p>
              <p>Hieronder vind je een kopie van je bericht:</p>
              <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin: 15px 0;">
                <strong>Onderwerp:</strong> ${subject}<br><br>
                ${message.replace(/\n/g, '<br>')}
              </div>
              <p>Met vriendelijke groeten,<br>Het PoHo team</p>
            </div>
          `
        };
        
        await mailTransport.sendMail(confirmationOptions);

        return res.status(200).json({ success: true });
      } catch (error) {
        console.error('Error sending email:', error);
        return res.status(500).json({ error: 'Er is een probleem opgetreden bij het verzenden van je bericht.' });
      }
    });
  });

// Email validation helper
function isValidEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
