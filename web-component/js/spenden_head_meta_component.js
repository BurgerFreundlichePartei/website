class SpendenHeadMetaComponent extends HTMLElement {
    connectedCallback() {
        fetch('web-component/html/spenden_head_meta_component.html')
            .then(response => response.text())
            .then(html => {
                const template = document.createElement('template');
                template.innerHTML = html.trim();
                document.head.appendChild(template.content);
            });
    }
}

customElements.define('spenden-head-meta-component', SpendenHeadMetaComponent);
