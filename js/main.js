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

