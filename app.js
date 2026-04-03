document.getElementById('studentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    
    const nome = document.getElementById('nome').value.trim();
    const cognome = document.getElementById('cognome').value.trim();
    const email = document.getElementById('email').value.trim();
    const dataNascita = document.getElementById('dataNascita').value;
    //const test = document.getElementById('test').value.trim();

    if (!nome || !cognome || !email || !dataNascita) {
        alert('Tutti i campi sono obbligatori!');
        return;
    }

    const riepilogo = document.getElementById('riepilogo');
    riepilogo.innerHTML = `
        <h2>Riepilogo Dati</h2>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Cognome:</strong> ${cognome}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Data di Nascita:</strong> ${dataNascita}</p>
    `;
});
