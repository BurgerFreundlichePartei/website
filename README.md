Hier ist die **aktualisierte README**, präziser, klarer und passend zum aktuellen Stand deiner Webseite (mit Webcomponents, Artikellisten, Buchkacheln, responsive Layout etc.).
Ich habe nichts „aufgeblasen“, sondern sauber und strukturiert optimiert.

---

# 📘 BürgerFreundlichePartei (BFREI) – Offizielle Webseite

Dies ist das offizielle Repository der BürgerFreundlichenPartei (BFREI).
Die Webseite stellt die Vision, Ziele und Veröffentlichungen der Partei dar und bietet rechtlich erforderliche Informationen wie Impressum und Datenschutzerklärung.

---

## 📂 Inhalt

* **`index.html`** – Startseite mit Überblick zur Partei, Vision und Zielen.
* **`publikationen.html`** – Übersicht über Bücher und politische Artikel.
* **`impressum.html`** – Gesetzlich vorgeschriebenes Impressum.
* **`datenschutzerklaerung.html`** – Datenschutzerklärung gemäß DSGVO.
* **`styles/`** – Zentrales CSS-Layout (`styles.css`).
* **`web-component/`** – Eigene Webcomponents für Bücher- und Artikellisten.

    * `html/booklist_component.html`
    * `html/article_list_component.html`
    * `js/article_list_component.js`
* **`images/`** – Logos, Favicons und andere statische Medien.

---

## ⭐ Merkmale der Webseite

### **Barrierefreiheit**

* Alt-Texte für Bilder
* ARIA-Attribute zur besseren Navigation
* Semantisch korrekter HTML-Aufbau
* Responsive Design (mobil optimiert)

### **Modulare Architektur**

* Verwendung von Webcomponents für:

    * **Buchliste**
    * **Artikelliste** (politische Texte, automatisch erweiterbar)
* Klare Trennung von Layout, Logik und Inhalt
* Leicht wartbar und erweiterbar

### **Rechtssicherheit**

* DSGVO-konformes Impressum
* DSGVO-konforme Datenschutzerklärung
* Externe Links als neue Tabs (`target="_blank"` + `rel="noopener noreferrer"`)

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
3. Im Browser öffnen:
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

### **Favicons**

* Unter `/images/` verfügbar
* Anpassbar über `<link>`-Tags im `<head>` der HTML-Dateien

### **Social-Media-Links**

* Editierbar im Footer der `index.html`

### **Artikel- & Bücherlisten**

* Inhalte werden über eigene Webcomponents eingebunden
* Politische Artikel erscheinen als **responsive Kachel-Liste**
* URLs können einfach in den Komponenten ergänzt werden

---

## ⚖️ Rechtliche Hinweise

Die Webseite enthält:

* Vollständiges Impressum
* DSGVO-konforme Datenschutzerklärung

Alle Inhalte sind Eigentum der **BürgerFreundlichenPartei (BFREI)** und dürfen nicht ohne Genehmigung verwendet werden.

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
