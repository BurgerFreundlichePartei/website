# 📘 BürgerFreundlichePartei (BFREI) – Offizielle Webseite

Dies ist das offizielle Repository der BürgerFreundlichenPartei (BFREI).
Die Webseite stellt die Vision, Ziele, Veröffentlichungen und rechtlich
erforderlichen Informationen bereit (Impressum, Datenschutzerklärung).

---

## 📂 Inhalt

**Hauptseiten**
- `index.html` – Startseite mit Vision, Zielen und Hero-Bereich.
- `publikationen.html` – Übersicht über Bücher und politische Artikel.
- `vision.html` – Ausführliche Darstellung der Vision der Partei.
- `ziele.html` – Vollständige Liste der politischen Ziele.
- `spenden.html` – Spendenseite mit Kontakt-Hinweis.
- `impressum.html` – Gesetzlich vorgeschriebenes Impressum.
- `datenschutzerklaerung.html` – Datenschutzerklärung gemäß DSGVO.

**Stile**
- `styles/styles.css` – Zentrales Theme (Light/Dark), Layout und Komponenten-Styling.

**Web Components**
- `web-component/html/header_component.html`  
- `web-component/html/navigation_component.html`  
- `web-component/html/booklist_component.html`  
- `web-component/html/article_list_component.html`  
- *(weitere Komponenten unter `/html` und `/js`)*

**Assets**
- `images/` – Logos, Favicons, Social-Media-Grafiken
- `assets/` – Symbolgrafiken

---

## ⭐ Merkmale der Webseite

### 🌗 **Dark-/Light-Theme**
- automatisches Theme abhängig vom System
- manuelle Umschaltung via Theme-Button (persistiert in localStorage)

### 🧩 **Modulare Architektur (Web Components)**
- Header, Navigation, Footer
- Buchliste (inkl. Amazon-/EPUB-/GitHub-Links)
- Artikelliste
- Saubere Trennung: HTML, JS, CSS unabhängig voneinander wartbar

### ♿ **Barrierefreiheit**
- ARIA-Labels für Navigation, Buttons und Listen
- Semantische HTML-Struktur
- Fokussichtbar, kontrastoptimierte Theme-Farben
- Responsive auf Mobile, Tablet und Desktop

### ⚖️ **Rechtssicherheit**
- DSGVO-konformes Impressum
- DSGVO-konforme Datenschutzerklärung
- Externe Links öffnen in separaten Tabs (`target="_blank" rel="noopener"`)

---

## 🚀 Lokale Nutzung

1. **Repository klonen**
   ```bash
   git clone https://github.com/BurgerFreundlichePartei/website.git
   ```

2. **Lokalen Webserver starten**

   ```bash
   python -m http.server
   ```

3. Seite öffnen:
   **[http://localhost:8000](http://localhost:8000)**

---

## 🌐 Deployment (GitHub Pages)

1. GitHub → *Settings* → *Pages*
2. **Source:**

    * Branch: `main`
    * Ordner: `/root`
3. Seite erreichbar unter:

**[https://BurgerFreundlichePartei.github.io/website/](https://BurgerFreundlichePartei.github.io/website/)**

---

## 🛠️ Anpassungsmöglichkeiten

### **Webcomponents erweitern**

* Neue politische Artikel einfach in `article_list_component.html` ergänzen
* Neue Bücher in `booklist_component.html` hinzufügen

### **Navigation erweitern**

* Menüeinträge anpassen in `navigation_component.html`

### **Theme anpassen**

* Farbvariablen in `styles.css` (`:root`) ändern:

    * `--bfrei-blue`
    * `--bfrei-orange`
    * `--color-card-bg`
    * usw.

---

## 📬 Kontakt

**BürgerFreundlichePartei (BFREI)**
Seestraße 68
71638 Ludwigsburg
E-Mail: [buergerfreundliche.partei@gmail.com](mailto:buergerfreundliche.partei@gmail.com)

---

## 📄 Lizenz

Alle Inhalte sind urheberrechtlich geschützt.
Nutzung oder Weitergabe nur mit ausdrücklicher Zustimmung der BFREI.

---
