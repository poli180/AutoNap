const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// Webhook Handler für Stripe Events
// Wird automatisch aufgerufen wenn eine Zahlung erfolgreich ist

exports.handler = async (event) => {
  // Nur POST requests erlauben
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const sig = event.headers['stripe-signature'];
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  let stripeEvent;

  try {
    // Stripe Event verifizieren
    stripeEvent = stripe.webhooks.constructEvent(
      event.body,
      sig,
      webhookSecret
    );
  } catch (err) {
    console.error('Webhook signature verification failed:', err.message);
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Webhook signature verification failed' })
    };
  }

  // Handle the event
  if (stripeEvent.type === 'checkout.session.completed') {
    const session = stripeEvent.data.object;
    
    console.log('Payment successful! Session:', session.id);

    try {
      // Hole die vollständigen Session-Details mit Kundeninformationen
      const fullSession = await stripe.checkout.sessions.retrieve(session.id, {
        expand: ['customer', 'line_items', 'shipping_details']
      });

      // Extrahiere Kundendaten
      const customerData = {
        email: fullSession.customer_details.email,
        name: fullSession.customer_details.name,
        phone: fullSession.customer_details.phone || '',
        address: fullSession.shipping_details || fullSession.customer_details.address,
        amount: fullSession.amount_total / 100, // Convert from cents
        currency: fullSession.currency,
        sessionId: session.id,
        paymentStatus: fullSession.payment_status
      };

      console.log('Customer Data:', customerData);

      // Hier würde die automatische AliExpress Bestellung erfolgen
      // Da AliExpress keine offizielle API hat, gibt es mehrere Optionen:
      
      // Option 1: E-Mail Benachrichtigung an Sie
      await sendOrderNotificationEmail(customerData);

      // Option 2: Speichern in Datenbank für manuelle Verarbeitung
      await saveOrderToDatabase(customerData);

      // Option 3: Integration mit Dropshipping-Tools wie:
      // - Oberlo
      // - DSers
      // - AutoDS
      // Diese Tools haben AliExpress-Integration

      return {
        statusCode: 200,
        body: JSON.stringify({ 
          received: true,
          message: 'Order processed successfully'
        })
      };

    } catch (error) {
      console.error('Error processing order:', error);
      return {
        statusCode: 500,
        body: JSON.stringify({ error: error.message })
      };
    }
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ received: true })
  };
};

// Funktion zum Senden einer E-Mail-Benachrichtigung
async function sendOrderNotificationEmail(customerData) {
  const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
  const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;
  
  const orderDetails = `
🔔 NEUE BESTELLUNG!

📦 Bestellnummer: ${customerData.sessionId.substring(0, 20)}...

👤 KUNDENDATEN:
Name: ${customerData.name}
📧 E-Mail: ${customerData.email}
📱 Telefon: ${customerData.phone || 'Nicht angegeben'}

📍 LIEFERADRESSE:
${customerData.address.line1}
${customerData.address.line2 || ''}
${customerData.address.postal_code} ${customerData.address.city}
${customerData.address.state || ''}
${customerData.address.country}

💰 BESTELLUNG:
Produkt: 3-in-1 Katzen Futterspender
Preis: €${customerData.amount}
Status: ${customerData.paymentStatus}

✅ NÄCHSTE SCHRITTE:
1. Bei AliExpress bestellen
2. Diese Lieferadresse verwenden
3. Tracking an ${customerData.email} senden

💵 Gewinn: ca. €7.03

🔗 AliExpress: https://de.aliexpress.com/item/1005009728243260.html
  `;

  console.log('Order Notification:', orderDetails);
  
  // Sende Telegram Benachrichtigung wenn konfiguriert
  if (TELEGRAM_BOT_TOKEN && TELEGRAM_CHAT_ID) {
    try {
      const telegramUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
      await fetch(telegramUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: orderDetails,
          parse_mode: 'HTML'
        })
      });
      console.log('Telegram notification sent');
    } catch (error) {
      console.error('Failed to send Telegram notification:', error);
    }
  }
  
  return { success: true };
}

// Funktion zum Speichern in einer Datenbank
async function saveOrderToDatabase(customerData) {
  // Hier würden Sie die Daten in einer Datenbank speichern
  // z.B. Airtable, Google Sheets, MongoDB, etc.
  
  const orderRecord = {
    orderId: customerData.sessionId,
    timestamp: new Date().toISOString(),
    customer: {
      name: customerData.name,
      email: customerData.email,
      phone: customerData.phone
    },
    shipping: customerData.address,
    product: '3-in-1 Katzen Futterspender',
    amount: customerData.amount,
    status: 'pending_fulfillment',
    aliexpressUrl: 'https://de.aliexpress.com/item/1005009728243260.html',
    notes: 'Automatisch erstellt durch Stripe Webhook'
  };

  console.log('Saving order to database:', orderRecord);
  
  // TODO: Implementieren Sie hier Ihre Datenbank-Integration
  
  return { success: true };
}
