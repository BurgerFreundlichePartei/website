class SchemaHeadComponent extends HTMLElement {
    connectedCallback() {
        fetch('web-component/html/schema_head_component.html')
            .then(response => response.text())
            .then(html => {
                const template = document.createElement('template');
                template.innerHTML = html.trim();
                document.head.appendChild(template.content);
            });
    }
}

customElements.define('schema-head-component', SchemaHeadComponent);
