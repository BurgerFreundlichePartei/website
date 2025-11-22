class BankAccountComponent extends HTMLElement {
    connectedCallback() {
        fetch('web-component/html/bank_account_component.html')
            .then(response => response.text())
            .then(html => {
                this.innerHTML = html;

                const buttons = this.querySelectorAll('[data-copy]');
                buttons.forEach((btn) => {
                    btn.addEventListener('click', () => {
                        const selector = btn.getAttribute('data-copy');
                        const target = this.querySelector(selector);

                        if (!target) {
                            return;
                        }

                        const text = target.textContent.trim();
                        const original = btn.textContent;

                        // 1. Bevorzugt: moderne Clipboard-API (nur in sicheren Kontexten)
                        if (navigator.clipboard && window.isSecureContext) {
                            navigator.clipboard.writeText(text)
                                .then(() => {
                                    btn.textContent = 'Kopiert!';
                                    setTimeout(() => {
                                        btn.textContent = original;
                                    }, 1500);
                                })
                                .catch((err) => {
                                    console.error('Clipboard-Fehler:', err);
                                });
                            return;
                        }

                        // 2. Fallback: verstecktes Textfeld + execCommand
                        const textarea = document.createElement('textarea');
                        textarea.value = text;
                        textarea.style.position = 'fixed';
                        textarea.style.left = '-9999px';
                        document.body.appendChild(textarea);

                        textarea.select();
                        try {
                            const ok = document.execCommand('copy');
                            if (ok) {
                                btn.textContent = 'Kopiert!';
                                setTimeout(() => {
                                    btn.textContent = original;
                                }, 1500);
                            } else {
                                console.warn('Fallback-Kopie nicht erfolgreich');
                            }
                        } catch (e) {
                            console.error('Fallback-Clipboard-Error:', e);
                        } finally {
                            document.body.removeChild(textarea);
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
