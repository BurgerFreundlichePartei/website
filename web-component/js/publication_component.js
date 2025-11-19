// web-component/js/publication_component.js

class PublicationComponent extends HTMLElement {
    connectedCallback() {
        fetch('web-component/html/publication_component.html')
            .then(response => response.text())
            .then(html => {
                this.innerHTML = html;
            })
            .catch(error => {
                console.error('Fehler beim Laden von publication_component.html:', error);
                this.innerHTML = '<p>Inhalt konnte nicht geladen werden.</p>';
            });
    }
}

customElements.define('publication-component', PublicationComponent);
