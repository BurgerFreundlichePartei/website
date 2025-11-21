class DatenschutzHeadMetaComponent extends HTMLElement {
    connectedCallback() {
        fetch('web-component/html/datenschutz_head_meta_component.html')
            .then(response => response.text())
            .then(html => {
                const template = document.createElement('template');
                template.innerHTML = html.trim();
                document.head.appendChild(template.content);
            });
    }
}

customElements.define('datenschutz-head-meta-component', DatenschutzHeadMetaComponent);
