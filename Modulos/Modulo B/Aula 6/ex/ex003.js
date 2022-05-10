var nome = window.prompt("Qual seu nome?")
document.write(`Olá <strong>${nome}</strong>, seu nome tem ${nome.length} letras.<br/>`)
document.write(`Seu nome em maiúsculo é <strong>${nome.toUpperCase()}</strong><br/>`)
document.write(`Seu nome em minúsculo é <strong>${nome.toLowerCase()}</strong>`)