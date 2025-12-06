class PetitionenSchemaHeadComponent extends HTMLElement {
    connectedCallback() {
        fetch('web-component/html/petitionen_schema_head_component.html')
            .then(r => r.text())
            .then(html => {
                const t = document.createElement('template');
                t.innerHTML = html.trim();
                document.head.appendChild(t.content);
            });
    }
}

customElements.define('petitionen-schema-component', PetitionenSchemaHeadComponent);
