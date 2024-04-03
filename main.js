let nota01 = document.getElementById('nota01');
let nota02 = document.getElementById('nota02');
let nota03 = document.getElementById('nota03');
let nota04 = document.getElementById('nota04');
let enviar = document.getElementById('enviar');
let txtMedia = document.getElementById('txtMedia');
let txtResultado = document.getElementById('txtResultado');

/* 
Se o valueAsNumber for indefinido ou não puder ser convertido em número, 
então o valor padrão será 0. Isso é útil para garantir que a variável tenha um valor numérico válido, 
mesmo se o campo estiver vazio ou contiver um valor inválido.
*/
enviar.addEventListener("click", function (event) {
  let valor01 = nota01.valueAsNumber || 0;
  let valor02 = nota02.valueAsNumber || 0;
  let valor03 = nota03.valueAsNumber || 0;
  let valor04 = nota04.valueAsNumber || 0;

  txtMedia.value = (valor01 + valor02 + valor03 + valor04)/4;
  let result = txtMedia.value;
if (result >= 6) {
  txtResultado.value = "Aprovado!";
} else {
  txtResultado.value = "Reprovado!";
  
}
});