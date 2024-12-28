class HeadLinkComponent extends HTMLElement {
    connectedCallback() {
        fetch('web-component/html/head_link_component.html')
            .then(response => response.text())
            .then(html => {
                const template = document.createElement('template');
                template.innerHTML = html.trim();
                document.head.appendChild(template.content);
            });
    }
}

customElements.define('head-link-component', HeadLinkComponent);
