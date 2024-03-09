nome = prompt("Qual é o seu nome?");
document.write(
  ` Olá <strong>
  ${nome.toUpperCase()}</strong>. 
  Seu nome tem ${nome.length} letras!`
);
