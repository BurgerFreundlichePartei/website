class VisionHeadMetaComponent extends HTMLElement {
    connectedCallback() {
        fetch('web-component/html/vision_head_meta_component.html')
            .then(response => response.text())
            .then(html => {
                const template = document.createElement('template');
                template.innerHTML = html.trim();
                document.head.appendChild(template.content);
            });
    }
}

customElements.define('vision-head-meta-component', VisionHeadMetaComponent);
