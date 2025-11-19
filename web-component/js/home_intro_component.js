// web-component/js/home_intro_component.js

class HomeIntroComponent extends HTMLElement {
    connectedCallback() {
        fetch('web-component/html/home_intro_component.html')
            .then(response => response.text())
            .then(html => {
                this.innerHTML = html;
            })
            .catch(error => {
                console.error('Fehler beim Laden von home_intro_component.html:', error);
                this.innerHTML = '<p>Inhalt konnte nicht geladen werden.</p>';
            });
    }
}

customElements.define('home-intro-component', HomeIntroComponent);
