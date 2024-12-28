class FooterComponent extends HTMLElement {
    connectedCallback() {
        fetch('web-component/html/footer.html')
            .then(response => response.text())
            .then(html => {
                this.innerHTML = html;
            });
    }
}

customElements.define('footer-component', FooterComponent);
