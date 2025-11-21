class VisionComponent extends HTMLElement {
    connectedCallback() {
        fetch('web-component/html/vision_component.html')
            .then(response => response.text())
            .then(html => {
                this.innerHTML = html;
            })
            .catch(error => {
                console.error('Fehler beim Laden der Vision-Komponente:', error);
                this.innerHTML = '<p>Die Vision kann derzeit nicht geladen werden.</p>';
            });
    }
}

customElements.define('vision-component', VisionComponent);
