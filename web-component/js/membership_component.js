// web-component/js/membership_component.js

class MembershipComponent extends HTMLElement {
    connectedCallback() {
        fetch('web-component/html/membership_component.html')
            .then(response => response.text())
            .then(html => {
                this.innerHTML = html;
            })
            .catch(error => {
                console.error('Fehler beim Laden von membership_component.html:', error);
                this.innerHTML = '<p>Inhalt konnte nicht geladen werden.</p>';
            });
    }
}

customElements.define('membership-component', HomeIntroComponent);
