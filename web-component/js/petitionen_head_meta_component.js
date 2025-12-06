class PetitionenHeadMetaComponent extends HTMLElement {
    connectedCallback() {
        fetch('web-component/html/petitionen_head_meta_component.html')
            .then(r => r.text())
            .then(html => {
                const t = document.createElement('template');
                t.innerHTML = html.trim();
                document.head.appendChild(t.content);
            })
            .catch(err => console.error('Fehler beim Laden der Petitions-Meta-Tags:', err));
    }
}

customElements.define('petitionen-head-meta-component', PetitionenHeadMetaComponent);
