// web-component/js/article_list_component.js
class ArticleListComponent extends HTMLElement {
    connectedCallback() {
        fetch('web-component/html/article_list_component.html')
            .then(response => response.text())
            .then(html => {
                this.innerHTML = html;
            })
            .catch(error => {
                console.error('Fehler beim Laden von article_list_component.html:', error);
                this.innerHTML = '<p>Die Buchliste konnte nicht geladen werden.</p>';
            });
    }
}

customElements.define('article-list-component', ArticlelistComponent);
