class HeaderComponent extends HTMLElement {
    connectedCallback() {
        fetch('web-component/html/header.html')
            .then(response => response.text())
            .then(html => {
                this.innerHTML = html;
            });
    }
}

customElements.define('header-component', HeaderComponent);
