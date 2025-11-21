class NavigationComponent extends HTMLElement {
    connectedCallback() {
        fetch('web-component/html/navigation_component.html')
            .then(response => response.text())
            .then(html => {
                this.innerHTML = html;

                const toggleButton = this.querySelector('[data-nav-toggle]');
                const navLinks = this.querySelector('[data-nav-links]');

                if (toggleButton && navLinks) {
                    toggleButton.addEventListener('click', () => {
                        const isOpen = navLinks.classList.toggle('is-open');
                        toggleButton.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
                    });
                }
            })
            .catch(error => {
                console.error('Fehler beim Laden der Navigations-Komponente:', error);
                this.innerHTML = '<p>Navigation kann derzeit nicht geladen werden.</p>';
            });
    }
}

customElements.define('navigation-component', NavigationComponent);
