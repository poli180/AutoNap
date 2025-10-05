# 📱 Telegram Benachrichtigungen einrichten

## Warum Telegram?
Bei jeder Bestellung erhalten Sie **sofort** eine Nachricht mit:
- Kundenname
- E-Mail
- Telefon
- Vollständige Lieferadresse
- Bestelldetails
- AliExpress Link

## Setup (5 Minuten):

### Schritt 1: Telegram Bot erstellen

1. Öffnen Sie Telegram
2. Suchen Sie nach `@BotFather`
3. Senden Sie: `/newbot`
4. Geben Sie einen Namen ein: `PetFeeder Order Bot`
5. Geben Sie einen Username ein: `petfeeder_orders_bot` (muss auf _bot enden)
6. Sie erhalten einen **Token** wie: `123456789:ABCdefGHIjklMNOpqrsTUVwxyz`
7. **Speichern Sie diesen Token!**

### Schritt 2: Chat ID herausfinden

1. Senden Sie eine Nachricht an Ihren neuen Bot (z.B. "Hallo")
2. Öffnen Sie in Ihrem Browser:
   ```
   https://api.telegram.org/bot<IHR_TOKEN>/getUpdates
   ```
   Ersetzen Sie `<IHR_TOKEN>` mit Ihrem Bot Token
3. Suchen Sie nach `"chat":{"id":` - die Zahl danach ist Ihre Chat ID
4. Beispiel: `"chat":{"id":123456789` → Ihre Chat ID ist `123456789`

### Schritt 3: In Netlify eintragen

1. Gehen Sie zu Netlify Dashboard
2. Site Settings → Environment variables
3. Fügen Sie hinzu:

```
Key: TELEGRAM_BOT_TOKEN
Value: <Ihr Bot Token>

Key: TELEGRAM_CHAT_ID
Value: <Ihre Chat ID>
```

4. Klicken Sie auf "Trigger deploy" → "Clear cache and deploy site"

## ✅ Fertig!

Jetzt erhalten Sie bei jeder Bestellung eine Telegram-Nachricht mit allen Details!

## Beispiel-Nachricht:

```
🔔 NEUE BESTELLUNG!

📦 Bestellnummer: cs_test_a1b2c3...

👤 KUNDENDATEN:
Name: Max Mustermann
📧 E-Mail: max@example.com
📱 Telefon: +49 123 456789

📍 LIEFERADRESSE:
Musterstraße 123
12345 Berlin
Deutschland

💰 BESTELLUNG:
Produkt: 3-in-1 Katzen Futterspender
Preis: €14.99
Status: paid

✅ NÄCHSTE SCHRITTE:
1. Bei AliExpress bestellen
2. Diese Lieferadresse verwenden
3. Tracking an max@example.com senden

💵 Gewinn: ca. €7.03

🔗 AliExpress: https://de.aliexpress.com/item/1005009728243260.html
```

## Was dann?

1. **Nachricht kommt** → Sie sehen alle Kundendaten
2. **AliExpress öffnen** → Klicken Sie auf den Link
3. **Produkt bestellen** → Geben Sie die Kundenadresse ein
4. **Tracking senden** → Schicken Sie Tracking-Nummer an Kunden-E-Mail

Das ist der **normale Dropshipping-Prozess**! Alle großen Dropshipper machen es so.

---

## Alternative: Automatisierungs-Tools

Wenn Sie es WIRKLICH automatisieren wollen:

### **DSers** (Empfohlen)
- Kostenlos für Shopify
- Automatische AliExpress Bestellungen
- Kosten: $0-19/Monat
- Website: https://www.dsers.com

### **AutoDS**
- Vollautomatisch
- Kosten: $19-299/Monat
- Website: https://www.autods.com

### **Oberlo**
- Nur für Shopify
- Kostenlos
- Website: https://www.oberlo.com

**ABER**: Diese Tools kosten Geld und Sie brauchen Shopify (~€29/Monat).

---

## 💡 Meine Empfehlung

**Starten Sie mit Telegram!**

Vorteile:
- ✅ Kostenlos
- ✅ Sofortige Benachrichtigungen
- ✅ Alle Kundendaten
- ✅ Funktioniert perfekt
- ✅ Kein zusätzliches Tool nötig

Wenn Sie später 50+ Bestellungen/Tag haben, können Sie auf AutoDS upgraden.

Aber für den Start ist Telegram **perfekt**!
