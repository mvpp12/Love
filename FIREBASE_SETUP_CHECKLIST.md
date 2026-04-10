# ✅ Firebase Setup Checklist

Follow these steps to enable real-time photo sharing!

## **Step-by-Step Setup:**

### **1️⃣ Create Firebase Project**
- [ ] Go to: https://firebase.google.com
- [ ] Click "Get Started"
- [ ] Create new project named "Our-Memories"
- [ ] Wait for project to create
- [ ] Note your Project ID (looks like: `our-memories-abc123`)

### **2️⃣ Set Up Firebase Realtime Database**
- [ ] In Firebase Console, click "Build" → "Realtime Database"
- [ ] Click "Create Database"
- [ ] Select Region (closest to you, e.g., "us-east1")
- [ ] Click "Create" (Start in test mode)
- [ ] Copy the Database URL (looks like: `https://our-memories-abc123.firebaseio.com`)

### **3️⃣ Set Up Firebase Cloud Storage**
- [ ] In Firebase Console, click "Build" → "Cloud Storage"
- [ ] Click "Get Started"
- [ ] Accept terms and click "Done"
- [ ] Location should auto-fill

### **4️⃣ Get Your Firebase Config**
- [ ] Go to Firebase Console → Project Settings (gear icon)
- [ ] Scroll to "Your apps" section
- [ ] Click on the web app (looks like `</>`)
- [ ] Copy the entire config object:

```javascript
const firebaseConfig = {
    apiKey: "YOUR_API_KEY_HERE",
    authDomain: "YOUR_PROJECT.firebaseapp.com",
    databaseURL: "https://YOUR_PROJECT.firebaseio.com",
    projectId: "YOUR_PROJECT",
    storageBucket: "YOUR_PROJECT.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID",
    measurementId: "YOUR_MEASUREMENT_ID"
};
```

### **5️⃣ Update firebase-config.js**
- [ ] Open file: `d:\Love\firebase-config.js`
- [ ] Replace the example config with YOUR config from Step 4
- [ ] Save the file

### **6️⃣ Set Firebase Rules**

**Realtime Database Rules:**
- [ ] In Firebase Console → Realtime Database → Rules tab
- [ ] Replace everything with:

```json
{
  "rules": {
    "albums": {
      ".read": "auth != null || query.limitToFirst == true",
      ".write": true,
      "$albumId": {
        ".indexOn": ["uploadTime"]
      }
    }
  }
}
```

- [ ] Click "Publish"

**Cloud Storage Rules:**
- [ ] In Firebase Console → Cloud Storage → Rules tab
- [ ] Replace everything with:

```
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /albums/{allPaths=**} {
      allow read, write;
    }
  }
}
```

- [ ] Click "Publish"

### **7️⃣ Deploy to GitHub**
- [ ] Open PowerShell in `d:\Love`
- [ ] Run these commands:

```bash
git add firebase-config.js
git commit -m "Add Firebase configuration"
git push origin main
```

- [ ] Wait 2-3 minutes for GitHub Pages to deploy

### **8️⃣ Test It Out!**
- [ ] Visit: https://mvpp12.github.io/Love
- [ ] Enter password: `100324`
- [ ] Upload a test photo
- [ ] Check browser console (F12) for Firebase messages
- [ ] Open in another browser/device
- [ ] Do you see both photos synced? ✅

---

## 🔍 **Verify Firebase is Working**

### In Browser Console (F12 → Console):
You should see messages like:
```
✅ Firebase initialized successfully!
✅ Photos synced from Firebase
🔄 New photo detected - syncing...
```

### If you see errors like:
```
⚠️ Firebase not available, using local storage
```

This means:
- Firebase config might be wrong
- Project isn't fully initialized
- Check your API key and config

---

## 🆘 **Troubleshooting**

### **"Storage is full" error**
- Photos are too large
- Compress images before uploading
- Or delete old photos

### **Photos not syncing**
- Check Firebase Rules are published (should be green)
- Refresh page (Ctrl + F5)
- Check browser console for errors
- Make sure both users have same album URL

### **Firebase config not working**
- Double-check config values match Firebase Console
- Make sure projectId is correct
- Try disabling browser extensions
- Clear cache and cookies

### **Can't upload videos**
- Videos are large - compress or use smaller files
- Check Cloud Storage quota
- Verify storage rules allow write access

---

## 📊 **Firebase Limits (Free Tier)**

| Feature | Limit |
|---------|-------|
| Realtime Database Storage | 100 MB (total) |
| Cloud Storage | 5 GB (total) |
| Simultaneous Connections | 100 |
| Downloads per day | 1 GB |

If you exceed, photos will stop syncing but won't delete!

---

## ✨ **Success!**

Once Firebase is set up:

✅ Both of you see the same album
✅ New photos appear **INSTANTLY**
✅ Edits sync in real-time
✅ Works across devices
✅ Photos persist after browser close

---

## 📝 **Keep Your Config Safe!**

⚠️ Your Firebase config is basically public (tied to your web app).
✅ It's designed to be public - that's normal!
✅ The password protection (`100324`) provides security

If you want extra security:
- Change the password
- Restrict Firebase rules
- Hide your album URL

---

**Ready to set it up? Start with Step 1!** 🚀❤️

Questions? Check browser console (F12) for detailed error messages!
