// Netlify Function to process orders after successful payment
// This function receives order details and can send notifications

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method Not Allowed' })
    };
  }

  try {
    const { sessionId, product, aliexpressUrl } = JSON.parse(event.body);
    
    console.log('Order received:', {
      sessionId,
      product,
      aliexpressUrl,
      timestamp: new Date().toISOString()
    });

    // Hier können Sie:
    // 1. Eine E-Mail an sich selbst senden mit den Bestelldetails
    // 2. Die Bestellung in einer Datenbank speichern
    // 3. Eine Benachrichtigung an Ihr System senden
    // 4. Automatisch bei AliExpress bestellen (mit API-Integration)

    // Beispiel: Order-Daten für Ihr Dropshipping-System
    const orderData = {
      orderId: sessionId,
      product: product,
      aliexpressUrl: aliexpressUrl,
      status: 'pending',
      createdAt: new Date().toISOString(),
      // Hier würden Kundeninformationen aus Stripe kommen
      instructions: 'Bitte bei AliExpress bestellen und Tracking-Nummer an Kunden senden'
    };

    // TODO: Implementieren Sie hier Ihre Benachrichtigungslogik
    // z.B. E-Mail versenden, Webhook aufrufen, etc.

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        success: true,
        message: 'Order processed successfully',
        orderData: orderData
      })
    };
  } catch (error) {
    console.error('Error processing order:', error);
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
