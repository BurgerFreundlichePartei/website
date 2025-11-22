class BankAccountComponent extends HTMLElement {
    connectedCallback() {
        fetch('web-component/html/bank_account_component.html')
            .then(response => response.text())
            .then(html => {
                this.innerHTML = html;

                // Alle Copy-Buttons aktivieren (IBAN + BIC)
                const buttons = this.querySelectorAll('[data-copy]');
                buttons.forEach((btn) => {
                    btn.addEventListener('click', () => {
                        const selector = btn.getAttribute('data-copy');
                        const target = this.querySelector(selector);

                        if (target) {
                            const text = target.textContent.trim();

                            if (navigator.clipboard && navigator.clipboard.writeText) {
                                navigator.clipboard.writeText(text).then(() => {
                                    const original = btn.textContent;
                                    btn.textContent = 'Kopiert!';
                                    setTimeout(() => {
                                        btn.textContent = original;
                                    }, 1500);
                                }).catch((err) => {
                                    console.error('Clipboard-Fehler:', err);
                                });
                            } else {
                                console.warn('Clipboard API nicht verfügbar');
                            }
                        }
                    });
                });
            })
            .catch(error => {
                console.error('Fehler beim Laden der bank_account_component.html:', error);
                this.innerHTML = '<p>Kontodaten können derzeit nicht geladen werden.</p>';
            });
    }
}

customElements.define('bank-account-component', BankAccountComponent);
