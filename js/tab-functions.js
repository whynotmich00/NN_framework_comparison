// Funzione per copiare il codice negli appunti
function copyCode(button) {
    // Trova l'elemento pre più vicino al pulsante
    const pre = button.parentElement.querySelector('pre');
    const code = pre.textContent;
    
    // Crea un elemento textarea temporaneo
    const textarea = document.createElement('textarea');
    textarea.value = code;
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'absolute';
    textarea.style.left = '-9999px';
    document.body.appendChild(textarea);
    
    // Seleziona e copia il testo
    textarea.select();
    document.execCommand('copy');
    
    // Rimuovi l'elemento temporaneo
    document.body.removeChild(textarea);
    
    // Feedback visivo
    button.textContent = 'Copiato!';
    button.classList.add('success');
    
    // Ripristina il testo del pulsante dopo 2 secondi
    setTimeout(() => {
        button.textContent = 'Copia';
        button.classList.remove('success');
    }, 2000);
}

// Funzione per gestire i tab
document.addEventListener('DOMContentLoaded', function() {
const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');

// Aggiungi event listener a ogni tab
tabs.forEach(tab => {
    tab.addEventListener('click', function() {
    // Rimuovi la classe "active" da tutte le tab e i contenuti
    tabs.forEach(t => t.classList.remove('active'));
    tabContents.forEach(c => c.classList.remove('active'));
    
    // Aggiungi la classe "active" alla tab cliccata
    this.classList.add('active');
    
    // Trova e attiva il contenuto corrispondente
    const tabId = this.getAttribute('data-tab');
    const activeContent = document.getElementById(tabId);
    activeContent.classList.add('active');
    
    // Assicurati che il codice venga evidenziato da Prism.js
    if (window.Prism) {
        Prism.highlightElement(activeContent.querySelector('code'));
    }
    });
});

// Attiva la prima tab e il suo contenuto all'avvio
if (tabs.length > 0 && !document.querySelector('.tab.active')) {
    tabs[0].classList.add('active');
    if (tabContents.length > 0) {
    tabContents[0].classList.add('active');
    }
}
});