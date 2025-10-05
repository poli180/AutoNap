// Google Sheets Integration für automatische Bestellverwaltung
// Speichert Bestellungen automatisch in Google Sheets

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const orderData = JSON.parse(event.body);
    
    // Google Sheets API URL (Sie müssen dies mit Ihrer Sheet-URL ersetzen)
    const GOOGLE_SHEETS_URL = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
    
    if (!GOOGLE_SHEETS_URL) {
      console.log('Google Sheets URL not configured. Order data:', orderData);
      return {
        statusCode: 200,
        body: JSON.stringify({ 
          success: true, 
          message: 'Order logged (Google Sheets not configured)' 
        })
      };
    }

    // Sende Daten an Google Sheets
    const response = await fetch(GOOGLE_SHEETS_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(orderData)
    });

    if (response.ok) {
      console.log('Order saved to Google Sheets successfully');
      return {
        statusCode: 200,
        body: JSON.stringify({ 
          success: true, 
          message: 'Order saved to Google Sheets' 
        })
      };
    } else {
      throw new Error('Failed to save to Google Sheets');
    }

  } catch (error) {
    console.error('Error saving to sheets:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};
