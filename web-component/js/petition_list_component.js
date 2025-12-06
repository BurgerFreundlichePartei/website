class PetitionListComponent extends HTMLElement {
    connectedCallback() {
        fetch('web-component/html/petition_list_component.html')
            .then(response => response.text())
            .then(html => {
                this.innerHTML = html;
            })
            .catch(error => {
                console.error('Fehler beim Laden von petition_list_component.html:', error);
                this.innerHTML = '<p>Die Petitionsliste konnte nicht geladen werden.</p>';
            });
    }
}

customElements.define('petition-list-component', PetitionListComponent);
