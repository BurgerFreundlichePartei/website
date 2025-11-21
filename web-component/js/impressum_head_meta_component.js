class ImpressumHeadMetaComponent extends HTMLElement {
    connectedCallback() {
        fetch('web-component/html/impressum_head_meta_component.html')
            .then(response => response.text())
            .then(html => {
                const template = document.createElement('template');
                template.innerHTML = html.trim();
                document.head.appendChild(template.content);
            });
    }
}

customElements.define('impressum-head-meta-component', ImpressumHeadMetaComponent);
