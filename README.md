# PetFeeder Pro - Dropshipping Store

3-in-1 Automatischer Futterspender für Katzen und Hunde - E-Commerce Website mit Stripe-Integration

## 🚀 Features

- ✅ Moderne, responsive Website
- ✅ Stripe Checkout Integration (Live-Modus)
- ✅ Netlify Serverless Functions
- ✅ AliExpress Dropshipping Integration
- ✅ Automatische Bestellverarbeitung
- ✅ Success/Cancel Seiten

## 📦 Setup

### 1. Netlify Deployment

1. Pushen Sie dieses Repository zu GitHub
2. Verbinden Sie Ihr Repository mit Netlify
3. Fügen Sie die Environment Variables in Netlify hinzu:
   - `STRIPE_SECRET_KEY`: Ihr Stripe Secret Key
   - `STRIPE_PUBLISHABLE_KEY`: Ihr Stripe Publishable Key

### 2. Stripe Konfiguration

Ihre Stripe Keys sind bereits in `Stripe.env` konfiguriert:
- **Secret Key**: `sk_live_51SEvie99LZyq13UT...`
- **Publishable Key**: `pk_live_51SEvie99LZyq13UT...`

⚠️ **WICHTIG**: Stellen Sie sicher, dass `Stripe.env` NICHT in Git committed wird!

### 3. Netlify Environment Variables

Gehen Sie zu Netlify Dashboard → Site Settings → Environment Variables und fügen Sie hinzu:

```
STRIPE_SECRET_KEY=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
STRIPE_PUBLISHABLE_KEY=pk_live_51SEvie99LZyq13UTcLSfFmRyj645FMyMnbBFSoAWhqfRO9dFGcDOKvTKKSk2MvYOEfgY5ESBaZCN0raZC3IYQHqE00lETa6zjs
```

## 🛒 Dropshipping Workflow

### Automatischer Ablauf:

1. **Kunde bestellt** → Zahlt über Stripe Checkout (€14.99)
2. **Zahlung erfolgreich** → Kunde wird zu `success.html` weitergeleitet
3. **Order Notification** → `process-order` Function wird aufgerufen
4. **Sie erhalten Benachrichtigung** → Mit allen Bestelldetails
5. **Sie bestellen bei AliExpress** → Produkt für ~€7-8
6. **Gewinn** → €14.99 - €7 - Stripe Gebühren = ~€6 Gewinn pro Verkauf

### AliExpress Produkt:
**Link**: https://de.aliexpress.com/item/1005009728243260.html

**Ihr Verkaufspreis**: €14.99  
**AliExpress Preis**: ~€7-8  
**Gewinn pro Verkauf**: ~€6-7

## 📧 Bestellbenachrichtigungen

Die `process-order.js` Function loggt alle Bestellungen. Sie können diese erweitern um:

- E-Mail-Benachrichtigungen zu senden
- Bestellungen in einer Datenbank zu speichern
- Automatisch bei AliExpress zu bestellen (mit API)
- Slack/Discord Benachrichtigungen

## 🔧 Lokale Entwicklung

```bash
# Dependencies installieren
npm install

# Netlify Dev Server starten
netlify dev

# Website läuft auf http://localhost:8888
```

## 📱 Deployment

```bash
# Zu Netlify deployen
netlify deploy --prod
```

Oder pushen Sie einfach zu GitHub - Netlify deployed automatisch!

## ⚠️ Wichtige Hinweise

1. **Stripe Live-Modus**: Sie verwenden echte Live-Keys! Alle Zahlungen sind ECHT.
2. **Gebühren**: Stripe berechnet 1.4% + €0.25 pro Transaktion in Europa
3. **Steuern**: Denken Sie an die Umsatzsteuer (MwSt.)
4. **AGB**: Erstellen Sie AGB, Impressum und Datenschutzerklärung
5. **Kundenservice**: Richten Sie eine Support-E-Mail ein

## 📊 Nächste Schritte

- [ ] E-Mail-Benachrichtigungen einrichten
- [ ] Google Analytics hinzufügen
- [ ] Facebook Pixel für Ads
- [ ] Mehr Produkte hinzufügen
- [ ] Blog/Content Marketing
- [ ] SEO optimieren

## 🎯 Marketing Tipps

1. **Facebook/Instagram Ads**: Zielgruppe = Katzenbesitzer
2. **TikTok**: Kurze Videos vom Produkt
3. **Google Ads**: Keywords wie "Katzen Futterspender"
4. **Influencer**: Kontaktieren Sie Pet-Influencer

## 💰 Gewinnrechnung

**Pro Verkauf:**
- Verkaufspreis: €14.99
- AliExpress Kosten: -€7.50
- Stripe Gebühren: -€0.46
- **Gewinn**: €7.03

**Bei 10 Verkäufen/Tag:**
- Tagesgewinn: €70.30
- Monatsgewinn: ~€2,100

## 📞 Support

Bei Fragen zur Website oder zum Setup, kontaktieren Sie mich!

---

**Viel Erfolg mit Ihrem Dropshipping Business! 🚀**
