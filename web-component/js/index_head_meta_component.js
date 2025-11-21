class IndexHeadMetaComponent extends HTMLElement {
    connectedCallback() {
        fetch('web-component/html/index_head_meta_component.html')
            .then(response => response.text())
            .then(html => {
                const template = document.createElement('template');
                template.innerHTML = html.trim();
                document.head.appendChild(template.content);
            });
    }
}

customElements.define('index-head-meta-component', IndexHeadMetaComponent);
