class ZieleComponent extends HTMLElement {
    connectedCallback() {
        fetch('web-component/html/ziele_component.html')
            .then(response => response.text())
            .then(html => {
                this.innerHTML = html;
            });
    }
}

customElements.define('ziele-component', ZieleComponent);
