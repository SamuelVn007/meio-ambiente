document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); 
    document.getElementById("feedback").innerText = "Obrigado por entrar em contato! Responderemos em breve.";
    document.getElementById("contact-form").reset();
});
