const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event) => {
  // Only allow POST
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method Not Allowed' })
    };
  }

  try {
    const { item } = JSON.parse(event.body);
    
    // Get the domain from the request or use environment variable
    const domain = process.env.URL || 'http://localhost:8888';

    console.log('Creating checkout session for:', item);

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: item.currency || 'eur',
            product_data: {
              name: item.name,
              description: item.description || '3-in-1 Automatischer Futterspender für Katzen und Hunde',
            },
            unit_amount: item.amount, // Amount in cents
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      // Wichtig: Kundenadresse sammeln für Dropshipping!
      shipping_address_collection: {
        allowed_countries: ['DE', 'AT', 'CH', 'FR', 'IT', 'ES', 'NL', 'BE', 'PL', 'CZ'],
      },
      phone_number_collection: {
        enabled: true,
      },
      customer_email: undefined, // Kunde gibt E-Mail selbst ein
      success_url: `${domain}/success.html?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${domain}/cancel.html`,
      // Metadata für Tracking
      metadata: {
        product: item.name,
        aliexpress_url: 'https://de.aliexpress.com/item/1005009728243260.html'
      }
    });

    console.log('Checkout session created:', session.id);

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        sessionId: session.id,
        url: session.url
      })
    };
  } catch (error) {
    console.error('Stripe Error:', error);
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ error: error.message })
    };
  }
};
