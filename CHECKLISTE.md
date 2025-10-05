# ✅ Deployment Checkliste

## Vor dem Deployment

- [x] Alle Dateien erstellt
- [x] Stripe Live-Keys konfiguriert
- [x] Netlify Functions erstellt
- [x] Success/Cancel Seiten erstellt
- [x] AliExpress Link integriert

## Deployment Schritte

### 1. Netlify Deployment
- [ ] Gehen Sie zu https://app.netlify.com
- [ ] Ziehen Sie den gesamten Ordner `AutoNap` in das Netlify Drop-Fenster
- [ ] Warten Sie bis Upload abgeschlossen ist

### 2. Environment Variables setzen
- [ ] Gehen Sie zu Site Settings → Environment variables
- [ ] Fügen Sie hinzu:
  ```
  STRIPE_SECRET_KEY=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
  ```
- [ ] Fügen Sie hinzu:
  ```
  STRIPE_PUBLISHABLE_KEY=pk_live_51SEvie99LZyq13UTcLSfFmRyj645FMyMnbBFSoAWhqfRO9dFGcDOKvTKKSk2MvYOEfgY5ESBaZCN0raZC3IYQHqE00lETa6zjs
  ```
- [ ] Klicken Sie auf "Trigger deploy" → "Clear cache and deploy site"

### 3. Testen
- [ ] Öffnen Sie Ihre Live-Site
- [ ] Klicken Sie auf "Jetzt bestellen"
- [ ] Prüfen Sie ob Stripe Checkout öffnet
- [ ] Testen Sie mit Testkarte: `4242 4242 4242 4242`

⚠️ **WICHTIG**: Sie verwenden LIVE-Keys! Echte Zahlungen werden verarbeitet!

## Nach dem Deployment

### Bestellungen verwalten

Wenn ein Kunde bestellt:

1. **Zahlung prüfen**
   - Öffnen Sie https://dashboard.stripe.com
   - Gehen Sie zu "Payments"
   - Sehen Sie die neue Zahlung (€14.99)

2. **Bei AliExpress bestellen**
   - Öffnen Sie: https://de.aliexpress.com/item/1005009728243260.html
   - Bestellen Sie das Produkt (~€7-8)
   - Geben Sie die Kundenadresse ein (aus Stripe)
   - Bezahlen Sie

3. **Tracking-Nummer senden**
   - Warten Sie auf AliExpress Tracking-Nummer
   - Senden Sie diese per E-Mail an den Kunden

4. **Gewinn berechnen**
   - Verkaufspreis: €14.99
   - AliExpress Kosten: -€7.50
   - Stripe Gebühren: -€0.46
   - **Ihr Gewinn: €7.03**

## Wichtige Links

- **Ihre Website**: [Wird nach Deployment angezeigt]
- **Netlify Dashboard**: https://app.netlify.com
- **Stripe Dashboard**: https://dashboard.stripe.com
- **AliExpress Produkt**: https://de.aliexpress.com/item/1005009728243260.html

## Rechtliches (WICHTIG!)

Bevor Sie verkaufen, benötigen Sie:

- [ ] **Impressum** (Pflicht in Deutschland!)
- [ ] **Datenschutzerklärung** (DSGVO-konform)
- [ ] **AGB** (Allgemeine Geschäftsbedingungen)
- [ ] **Widerrufsbelehrung** (14 Tage Widerrufsrecht)

**Tipp**: Nutzen Sie Generatoren wie:
- https://www.e-recht24.de (Impressum Generator)
- https://datenschutz-generator.de (Datenschutz)

## Marketing Tipps

### Sofort starten:
1. **Facebook/Instagram Ads**
   - Zielgruppe: Katzenbesitzer, 25-55 Jahre
   - Budget: Start mit €10/Tag
   - Bild: Katze mit Futterspender

2. **Google Ads**
   - Keywords: "Katzen Futterspender", "Automatischer Futterspender"
   - Budget: €5-10/Tag

3. **TikTok**
   - Kurze Videos vom Produkt
   - Hashtags: #katzen #futterspender #haustiere

### Langfristig:
- Instagram Account erstellen
- Content Marketing (Blog)
- Influencer Marketing
- E-Mail Marketing

## Gewinnrechnung

### Pro Verkauf:
- Verkaufspreis: **€14.99**
- AliExpress: **-€7.50**
- Stripe Gebühren: **-€0.46**
- **Gewinn: €7.03**

### Monatsziele:
- **5 Verkäufe/Tag** = €1,054/Monat
- **10 Verkäufe/Tag** = €2,109/Monat
- **20 Verkäufe/Tag** = €4,218/Monat

## Troubleshooting

### Website zeigt weißen Bildschirm
- Prüfen Sie Browser-Konsole (F12)
- Checken Sie Netlify Function Logs
- Stellen Sie sicher, dass alle Dateien hochgeladen sind

### Stripe Checkout öffnet nicht
- Prüfen Sie Environment Variables in Netlify
- Checken Sie ob Keys korrekt sind
- Schauen Sie in Browser-Konsole

### Zahlung funktioniert nicht
- Prüfen Sie Stripe Dashboard auf Fehler
- Stellen Sie sicher, dass Sie Live-Keys verwenden
- Checken Sie Netlify Function Logs

## Support & Hilfe

Bei Problemen:
1. Netlify Function Logs checken
2. Browser-Konsole öffnen (F12)
3. Stripe Dashboard prüfen
4. README.md und DEPLOYMENT.md lesen

---

## 🎉 Sie sind bereit!

Alle Dateien sind korrekt konfiguriert. Folgen Sie einfach den Schritten oben und Ihr Dropshipping-Store ist live!

**Viel Erfolg! 🚀💰**
