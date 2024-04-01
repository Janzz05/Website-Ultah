document.getElementById("sign").onclick = function() {
    document.getElementById("response").style.display = "block";
};

function sendToWhatsApp() {
    var comment = document.getElementById("comment").value;
    var whatsappLink = "https://wa.me/6289635878671?text=" + encodeURIComponent(comment);
    window.open(whatsappLink, "_blank");
}