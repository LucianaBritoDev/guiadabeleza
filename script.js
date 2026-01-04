// Desativa async do Cloudflare
var script1 = document.createElement("script");
script1.src = "/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js";
script1.setAttribute("data-cfasync", "false");
document.head.appendChild(script1);

// Adiciona o FontAwesome
var script2 = document.createElement("script");
script2.src = "https://kit.fontawesome.com/yourcode.js";
script2.crossOrigin = "anonymous";
document.head.appendChild(script2);
