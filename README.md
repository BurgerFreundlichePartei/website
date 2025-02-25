# BürgerFreundlichePartei (BFREI) - Offizielle Webseite

Dies ist das offizielle Repository der Webseite der BürgerFreundlichePartei (BFREI), die für eine transparente und bürgerfreundliche Demokratie steht. Die Webseite enthält Informationen über die Partei, ihre Ziele, Vision und Kontaktmöglichkeiten sowie rechtlich erforderliche Dokumente wie Impressum und Datenschutzerklärung.

## Inhalt

- **`index.html`**: Startseite der Webseite mit Informationen über die BFREI.
- **`datenschutzerklaerung.html`**: Datenschutzerklärung gemäß DSGVO.
- **`impressum.html`**: Impressum der Partei.
- **`styles.css`**: Zentrale CSS-Datei für das Design der Webseite.
- **`images/`**: Ordner mit Bildern, Logos und Favicons.

## Merkmale der Webseite

- **Barrierefreiheit**:
  - Alt-Texte für Bilder.
  - ARIA-Labels für Links.
  - Semantisch korrekter HTML-Code.
- **Rechtssicherheit**:
  - Enthält Impressum und Datenschutzerklärung.
  - Verlinkung zu externen Ressourcen (z. B. Social Media, GitHub).
- **Modularität**:
  - Leicht erweiterbar für zukünftige Inhalte.

## Installation

1. **Klonen des Repositories**:
   ```bash
   git clone https://github.com/BurgerFreundlichePartei/website.git
   ```
2. **Dateien auf einem lokalen Webserver ausführen** (z. B. mit Python):
   ```bash
   python -m http.server
   ```
3. Im Browser unter `http://localhost:8000` aufrufen.

## Deployment

Die Webseite kann über GitHub Pages bereitgestellt werden:

1. **Repository-Einstellungen öffnen**.
2. **GitHub Pages aktivieren**:
   - Branch: `main`
   - Ordner: `/root` (Standard).
3. Die Seite ist unter `https://BurgerFreundlichePartei.github.io/website/` erreichbar.

## Anpassungen

- **Favicons**:
  - Im Ordner `images/` befinden sich verschiedene Formate für Favicons.
  - Bei Bedarf die `link`-Tags im `<head>` der `index.html` anpassen.
- **Social Media Links**:
  - Aktualisiere die Links im Footer-Bereich der `index.html`.

## Rechtliche Hinweise

Die Webseite erfüllt die Anforderungen der DSGVO durch die Bereitstellung von:

- Einer ausführlichen Datenschutzerklärung.
- Einem Impressum mit vollständigen Kontaktinformationen.

## Kontakt

BürgerFreundlichePartei (BFREI)  
Seestraße 68  
71638 Ludwigsburg  
E-Mail: [buergerfreundliche.partei@gmail.com](mailto:buergerfreundliche.partei@gmail.com)  

---

### Lizenz
Der Inhalt dieses Repositories ist urheberrechtlich geschützt und darf nur mit ausdrücklicher Genehmigung der BürgerFreundlichePartei (BFREI) verwendet werden.

