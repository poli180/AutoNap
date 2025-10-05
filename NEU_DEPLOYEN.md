# 🚀 Neu Deployen - Schritt für Schritt

## Problem behoben!
Ich habe die `package.json` und `netlify.toml` korrigiert.

## ✅ Jetzt neu deployen:

### Methode 1: Drag & Drop (EINFACHSTE)

1. **Öffnen Sie**: https://app.netlify.com/drop
2. **Ziehen Sie den GESAMTEN Ordner** `AutoNap` in das Fenster
3. **Warten Sie** bis Upload fertig ist (1-2 Minuten)
4. **Klicken Sie** auf die neue Site URL

### Methode 2: Über bestehendes Site

1. **Gehen Sie zu**: https://app.netlify.com
2. **Klicken Sie** auf Ihre Site "autonap"
3. **Gehen Sie zu**: Deploys
4. **Scrollen Sie nach unten** zu "Need to update your site?"
5. **Ziehen Sie** den Ordner in das Drag & Drop Feld

---

## ⚠️ WICHTIG: Environment Variables setzen!

Nach dem Deployment:

1. **Gehen Sie zu**: Site configuration → Environment variables
2. **Fügen Sie hinzu**:

```
STRIPE_SECRET_KEY
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
```

```
STRIPE_PUBLISHABLE_KEY
pk_live_51SEvie99LZyq13UTcLSfFmRyj645FMyMnbBFSoAWhqfRO9dFGcDOKvTKKSk2MvYOEfgY5ESBaZCN0raZC3IYQHqE00lETa6zjs
```

3. **Klicken Sie**: Trigger deploy → Clear cache and deploy site

---

## 📋 Checkliste:

- [ ] Ordner neu zu Netlify hochgeladen
- [ ] Deployment erfolgreich (grüner Haken)
- [ ] Environment Variables gesetzt
- [ ] Site neu deployed nach Variables
- [ ] Website getestet
- [ ] Stripe Checkout funktioniert

---

## 🎯 Nach erfolgreichem Deployment:

1. **Testen Sie die Website**
2. **Klicken Sie auf "Jetzt bestellen"**
3. **Stripe Checkout sollte öffnen**
4. **Richten Sie Telegram ein** (siehe TELEGRAM_SETUP.md)

---

## ✅ Dann sind Sie fertig und können verkaufen! 🚀
