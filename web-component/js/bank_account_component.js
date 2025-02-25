class BankAccountComponent extends HTMLElement {
    connectedCallback() {
        fetch('web-component/html/bank_account_component.html')
            .then(response => response.text())
            .then(html => {
                this.innerHTML = html;
            });
    }
}
customElements.define('bank-account-component', BankAccountComponent);