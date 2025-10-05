# 🚀 Deployment Anleitung für Netlify

## Schritt 1: Netlify Environment Variables setzen

1. Gehen Sie zu Ihrem Netlify Dashboard
2. Wählen Sie Ihre Site aus
3. Gehen Sie zu **Site settings** → **Environment variables**
4. Klicken Sie auf **Add a variable**
5. Fügen Sie folgende Variables hinzu:

```
Key: STRIPE_SECRET_KEY
Value: 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
```

```
Key: STRIPE_PUBLISHABLE_KEY  
Value: pk_live_51SEvie99LZyq13UTcLSfFmRyj645FMyMnbBFSoAWhqfRO9dFGcDOKvTKKSk2MvYOEfgY5ESBaZCN0raZC3IYQHqE00lETa6zjs
```

## Schritt 2: Dateien zu Netlify hochladen

### Option A: Drag & Drop (Einfachste Methode)

1. Öffnen Sie https://app.netlify.com/drop
2. Ziehen Sie Ihren gesamten Projektordner in das Fenster
3. Warten Sie bis der Upload abgeschlossen ist
4. Ihre Site ist live!

### Option B: Netlify CLI

```bash
# Netlify CLI installieren (falls noch nicht installiert)
npm install -g netlify-cli

# In Netlify einloggen
netlify login

# Site initialisieren
netlify init

# Deployen
netlify deploy --prod
```

### Option C: GitHub Integration

1. Pushen Sie Ihren Code zu GitHub
2. Gehen Sie zu Netlify Dashboard
3. Klicken Sie auf "New site from Git"
4. Wählen Sie Ihr Repository
5. Build settings:
   - Build command: (leer lassen)
   - Publish directory: `.`
6. Klicken Sie auf "Deploy site"

## Schritt 3: Environment Variables überprüfen

Nach dem Deployment:

1. Gehen Sie zu **Site settings** → **Environment variables**
2. Stellen Sie sicher, dass beide Stripe Keys gesetzt sind
3. Klicken Sie auf **Trigger deploy** → **Clear cache and deploy site**

## Schritt 4: Testen

1. Öffnen Sie Ihre Live-Site
2. Klicken Sie auf "Jetzt bestellen"
3. Sie sollten zum Stripe Checkout weitergeleitet werden
4. Verwenden Sie eine Test-Kreditkarte:
   - Nummer: `4242 4242 4242 4242`
   - Datum: Beliebiges zukünftiges Datum
   - CVC: Beliebige 3 Ziffern

⚠️ **ACHTUNG**: Sie verwenden LIVE-Keys! Echte Zahlungen werden verarbeitet!

## Schritt 5: Domain einrichten (Optional)

1. Gehen Sie zu **Domain settings**
2. Klicken Sie auf **Add custom domain**
3. Folgen Sie den Anweisungen zur DNS-Konfiguration

## 🔍 Troubleshooting

### Problem: Stripe Checkout funktioniert nicht

**Lösung:**
1. Überprüfen Sie die Environment Variables in Netlify
2. Stellen Sie sicher, dass die Keys mit `sk_live_` und `pk_live_` beginnen
3. Checken Sie die Browser-Konsole auf Fehler (F12)
4. Schauen Sie in die Netlify Function Logs

### Problem: 404 Error bei Functions

**Lösung:**
1. Stellen Sie sicher, dass `netlify.toml` korrekt ist
2. Der `functions` Ordner muss `netlify/functions` heißen
3. Triggern Sie ein neues Deployment

### Problem: Environment Variables werden nicht geladen

**Lösung:**
1. Gehen Sie zu Site Settings → Environment Variables
2. Löschen Sie die alten Variables
3. Fügen Sie sie neu hinzu
4. Triggern Sie ein Clear Cache Deployment

## 📊 Nach dem Deployment

### Bestellungen überwachen

1. Öffnen Sie Netlify Dashboard → Functions
2. Klicken Sie auf `process-order`
3. Hier sehen Sie alle Logs von Bestellungen

### Stripe Dashboard

1. Öffnen Sie https://dashboard.stripe.com
2. Gehen Sie zu **Payments**
3. Hier sehen Sie alle Zahlungen
4. Bei erfolgreicher Zahlung:
   - Bestellen Sie das Produkt bei AliExpress
   - Senden Sie die Tracking-Nummer an den Kunden

## 💡 Wichtige Hinweise

1. **Live-Modus**: Sie verwenden echte Stripe Keys - alle Zahlungen sind ECHT!
2. **Gebühren**: Stripe berechnet 1.4% + €0.25 pro Transaktion
3. **Steuern**: In Deutschland müssen Sie 19% MwSt. abführen
4. **Rechtliches**: 
   - Impressum erforderlich
   - Datenschutzerklärung erforderlich
   - AGB erforderlich
   - Widerrufsrecht erforderlich

## 🎯 Nächste Schritte

- [ ] Domain verbinden
- [ ] Google Analytics einrichten
- [ ] Facebook Pixel hinzufügen
- [ ] E-Mail-Benachrichtigungen einrichten
- [ ] Rechtliche Seiten erstellen (Impressum, Datenschutz, AGB)
- [ ] Marketing starten

## 📞 Support

Bei Problemen:
1. Checken Sie die Netlify Function Logs
2. Schauen Sie in die Browser-Konsole
3. Überprüfen Sie das Stripe Dashboard

---

**Viel Erfolg! 🚀**
