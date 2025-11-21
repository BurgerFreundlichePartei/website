class NavigationComponent extends HTMLElement {
    connectedCallback() {
        fetch('web-component/html/navigation_component.html')
            .then(response => response.text())
            .then(html => {
                this.innerHTML = html;
            });
    }
}

customElements.define('navigation-component', NavigationComponent);
