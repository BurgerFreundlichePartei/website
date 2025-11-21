class SchemaPublicationsComponent extends HTMLElement {
    connectedCallback() {
        fetch('web-component/html/publikationen_schema_head_component.html')
            .then(r => r.text())
            .then(html => {
                const t = document.createElement('template');
                t.innerHTML = html.trim();
                document.head.appendChild(t.content);
            });
    }
}

customElements.define('publikationen-schema-component', SchemaPublicationsComponent);
