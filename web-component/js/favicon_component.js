class HeadComponent extends HTMLElement {
    connectedCallback() {
        fetch('web-component/html/favicon_component.html')
            .then(response => response.text())
            .then(html => {
                const template = document.createElement('template');
                template.innerHTML = html.trim();
                document.head.appendChild(template.content);
            });
    }
}

customElements.define('favicon-component', HeadComponent);
