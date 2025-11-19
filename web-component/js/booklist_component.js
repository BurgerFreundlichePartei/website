// web-component/js/booklist_component.js
class BooklistComponent extends HTMLElement {
    connectedCallback() {
        fetch('web-component/html/booklist_component.html')
            .then(response => response.text())
            .then(html => {
                this.innerHTML = html;
            })
            .catch(error => {
                console.error('Fehler beim Laden von booklist_component.html:', error);
                this.innerHTML = '<p>Die Buchliste konnte nicht geladen werden.</p>';
            });
    }
}

customElements.define('booklist-component', BooklistComponent);
