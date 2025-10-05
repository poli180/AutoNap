// server.js
require('dotenv').config({ path: './Stripe.env' });   // liest Stripe.env Datei ein
const express = require('express');
const Stripe = require('stripe');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

// Serve static files from the current directory
app.use(express.static(path.join(__dirname)));

// Stripe initialisieren mit deinem SECRET KEY
// ⚠️ NIE den Secret Key im Frontend verwenden!
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

// Domain deiner Website (lokal oder live)
const DOMAIN = process.env.DOMAIN || 'http://localhost:4242';

// Endpoint für Checkout-Session
app.post('/create-checkout-session', async (req, res) => {
  try {
    const { item } = req.body; // { name, amount, currency }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: item.currency || 'eur',
            product_data: { name: item.name },
            unit_amount: item.amount, // in Cent!
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${DOMAIN}/success.html?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${DOMAIN}/cancel.html`,
    });

    res.json({
      id: session.id,
      publicKey: process.env.STRIPE_PUBLISHABLE_KEY,
    });
  } catch (err) {
    console.error('Stripe Error:', err);
    res.status(500).json({ error: err.message });
  }
});

// Serve index.html for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const PORT = process.env.PORT || 4242;
app.listen(PORT, () => console.log(`✅ Server läuft auf http://localhost:${PORT}`));
