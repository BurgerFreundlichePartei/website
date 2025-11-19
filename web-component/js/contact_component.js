// web-component/js/contact_component.js

class ContactComponent extends HTMLElement {
    connectedCallback() {
        fetch('web-component/html/contact_component.html')
            .then(response => response.text())
            .then(html => {
                this.innerHTML = html;
            })
            .catch(error => {
                console.error('Fehler beim Laden von contact_component.html:', error);
                this.innerHTML = '<p>Inhalt konnte nicht geladen werden.</p>';
            });
    }
}

customElements.define('contact-component', HomeIntroComponent);
