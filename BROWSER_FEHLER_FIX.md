## 🔧 Browser-Fehler beheben

Wenn im Browser eine Fehlermeldung erscheint:

### 1. Browser-Konsole öffnen:
- **Drücken Sie F12** auf Ihrer Website
- **Gehen Sie zum Tab "Console"**
- **Schauen Sie nach roten Fehlermeldungen**

### 2. Häufige Fehler & Lösungen:

**Fehler: "STRIPE_SECRET_KEY is not defined"**
```
✅ Lösung: Environment Variables nicht gesetzt!

Gehen Sie zu Netlify Dashboard:
1. Site configuration → Environment variables
2. Fügen Sie hinzu:
   - STRIPE_SECRET_KEY = [Ihr Secret Key]
   - STRIPE_PUBLISHABLE_KEY = [Ihr Publishable Key]
3. Trigger deploy → Clear cache and deploy site
```

**Fehler: "Invalid API Key"**
```
✅ Lösung: Falsche Keys kopiert!

1. Gehen Sie zu: https://dashboard.stripe.com/apikeys
2. Kopieren Sie die Keys NEU
3. Setzen Sie sie in Netlify Environment Variables
4. Deployen Sie neu
```

**Fehler: "Function not found"**
```
✅ Lösung: Functions nicht aktiviert!

1. Gehen Sie zu Netlify Dashboard
2. Site configuration → Functions
3. Stellen Sie sicher, dass Functions aktiviert sind
4. Der Ordner muss "netlify/functions" heißen
```

### 3. Test-Schritte:

1. **Öffnen Sie Browser-Konsole (F12)**
2. **Klicken Sie auf "Jetzt bestellen"**
3. **Schauen Sie die Console-Meldungen**
4. **Wenn Fehler: Screenshot machen**

---

## 📋 Schnell-Checkliste:

- [ ] Environment Variables in Netlify gesetzt?
- [ ] Keys von https://dashboard.stripe.com/apikeys kopiert?
- [ ] Site neu deployed nach Variables?
- [ ] Browser-Cache geleert?

---

## 🎯 Wenn nichts hilft:

**Bitte machen Sie Screenshots von:**
1. **Netlify Environment Variables** (Site configuration)
2. **Browser Console** (F12 → Console Tab)
3. **Der Fehlermeldung** auf der Website

Dann kann ich das **genaue Problem sehen** und lösen!

**Welche Fehlermeldung bekommen Sie genau?** 📸
