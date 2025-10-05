# 🚀 Deployment Anleitung

## ✅ Schritt 1: Zu Netlify hochladen

1. Öffnen Sie: https://app.netlify.com/drop
2. Ziehen Sie den gesamten `AutoNap` Ordner in das Fenster
3. Warten Sie bis Upload fertig ist

## ✅ Schritt 2: Environment Variables setzen

**WICHTIG**: Nach dem Upload müssen Sie die Stripe Keys in Netlify eintragen!

1. Gehen Sie zu Ihrer Site in Netlify
2. Klicken Sie auf: **Site configuration** → **Environment variables**
3. Klicken Sie auf: **Add a variable**

### Variable 1: Secret Key
```
Key: STRIPE_SECRET_KEY
Value: [Ihr Stripe Secret Key - beginnt mit sk_live_]
```

### Variable 2: Publishable Key
```
Key: STRIPE_PUBLISHABLE_KEY
Value: [Ihr Stripe Publishable Key - beginnt mit pk_live_]
```

**Wo finde ich meine Keys?**
- Gehen Sie zu: https://dashboard.stripe.com/apikeys
- Kopieren Sie die Keys von dort

## ✅ Schritt 3: Site neu deployen

1. Gehen Sie zu: **Deploys**
2. Klicken Sie auf: **Trigger deploy** → **Clear cache and deploy site**
3. Warten Sie 1-2 Minuten

## ✅ Schritt 4: Testen

1. Öffnen Sie Ihre Website
2. Klicken Sie auf "Jetzt bestellen"
3. Stripe Checkout sollte sich öffnen!

## 📱 Optional: Telegram Benachrichtigungen

Um bei jeder Bestellung eine Telegram-Nachricht zu erhalten:

### Telegram Bot erstellen:
1. Öffnen Sie Telegram
2. Suchen Sie: `@BotFather`
3. Senden Sie: `/newbot`
4. Folgen Sie den Anweisungen
5. Speichern Sie den Bot Token

### Chat ID finden:
1. Senden Sie eine Nachricht an Ihren Bot
2. Öffnen Sie: `https://api.telegram.org/bot<TOKEN>/getUpdates`
3. Suchen Sie nach `"chat":{"id":NUMMER`
4. Die Nummer ist Ihre Chat ID

### In Netlify eintragen:
```
TELEGRAM_BOT_TOKEN = [Ihr Bot Token]
TELEGRAM_CHAT_ID = [Ihre Chat ID]
```

## 🎯 Fertig!

Ihre Dropshipping-Website ist jetzt live!

Bei jeder Bestellung:
1. Kunde zahlt über Stripe
2. Sie erhalten Benachrichtigung (wenn Telegram konfiguriert)
3. Sie bestellen bei AliExpress mit Kundenadresse
4. Sie senden Tracking-Nummer an Kunden

**Viel Erfolg! 🚀**
