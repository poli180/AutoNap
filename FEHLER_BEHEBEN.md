# 🔧 Stripe Fehler beheben

## Problem: "Es gab ein Problem mit der Zahlung"

Das Problem ist: **Die Environment Variables sind nicht in Netlify gesetzt!**

## ✅ LÖSUNG (Schritt für Schritt):

### Schritt 1: Netlify Dashboard öffnen

1. Gehen Sie zu: https://app.netlify.com
2. Klicken Sie auf Ihre Site "autonap"

### Schritt 2: Environment Variables setzen

1. Klicken Sie auf **"Site configuration"** (linkes Menü)
2. Klicken Sie auf **"Environment variables"**
3. Klicken Sie auf **"Add a variable"** → **"Add a single variable"**

### Schritt 3: Stripe Secret Key hinzufügen

```
Key: STRIPE_SECRET_KEY
Value: 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
```

Klicken Sie auf **"Create variable"**

### Schritt 4: Stripe Publishable Key hinzufügen

Klicken Sie erneut auf **"Add a variable"**

```
Key: STRIPE_PUBLISHABLE_KEY
Value: pk_live_51SEvie99LZyq13UTcLSfFmRyj645FMyMnbBFSoAWhqfRO9dFGcDOKvTKKSk2MvYOEfgY5ESBaZCN0raZC3IYQHqE00lETa6zjs
```

Klicken Sie auf **"Create variable"**

### Schritt 5: Webhook Secret hinzufügen (Optional für später)

```
Key: STRIPE_WEBHOOK_SECRET
Value: (Wird später von Stripe generiert)
```

### Schritt 6: Site neu deployen

1. Gehen Sie zu **"Deploys"** (oben im Menü)
2. Klicken Sie auf **"Trigger deploy"**
3. Wählen Sie **"Clear cache and deploy site"**
4. Warten Sie 1-2 Minuten bis Deployment fertig ist

### Schritt 7: Testen

1. Öffnen Sie Ihre Website: https://autonap.netlify.app
2. Klicken Sie auf "Jetzt bestellen"
3. Sie sollten jetzt zum Stripe Checkout weitergeleitet werden!

---

## 🔍 Überprüfen ob es funktioniert:

### Browser-Konsole öffnen:
1. Drücken Sie **F12** auf Ihrer Website
2. Gehen Sie zum Tab **"Console"**
3. Klicken Sie auf "Jetzt bestellen"
4. Schauen Sie ob Fehler angezeigt werden

### Netlify Function Logs checken:
1. Gehen Sie zu Netlify Dashboard
2. Klicken Sie auf **"Functions"** (linkes Menü)
3. Klicken Sie auf **"create-checkout"**
4. Hier sehen Sie alle Logs und Fehler

---

## ❌ Häufige Fehler:

### Fehler: "STRIPE_SECRET_KEY is not defined"
**Lösung**: Environment Variables nicht gesetzt → Siehe Schritt 2-4 oben

### Fehler: "Invalid API Key"
**Lösung**: Falsche Keys kopiert → Überprüfen Sie die Keys in Stripe.env

### Fehler: "Function not found"
**Lösung**: Functions Ordner falsch → Muss `netlify/functions` heißen

### Fehler: "CORS error"
**Lösung**: Bereits behoben in create-checkout.js

---

## 📋 Checkliste:

- [ ] Environment Variables in Netlify gesetzt
- [ ] STRIPE_SECRET_KEY korrekt
- [ ] STRIPE_PUBLISHABLE_KEY korrekt
- [ ] Site neu deployed (Clear cache)
- [ ] Website getestet
- [ ] Stripe Checkout öffnet sich

---

## 🆘 Wenn es immer noch nicht funktioniert:

1. **Screenshot von Netlify Environment Variables machen**
2. **Browser-Konsole Screenshot (F12)**
3. **Netlify Function Logs Screenshot**

Dann kann ich das genaue Problem sehen!

---

## ✅ Nach dem Fix:

Wenn Stripe funktioniert:
1. Telegram Bot einrichten (siehe TELEGRAM_SETUP.md)
2. Testbestellung machen
3. Marketing starten!

**Sie sind fast fertig! Nur noch die Environment Variables setzen!** 🚀
