document.addEventListener("DOMContentLoaded", function () {
    var formulario = document.getElementById("imcForm");

    if (formulario) {
        formulario.addEventListener("submit", function (event) {
            event.preventDefault();

            const idade = parseFloat(document.getElementById("idade").value);
            const altura = parseFloat(document.getElementById("altura").value);
            const peso = parseFloat(document.getElementById("peso").value);

            const imc = peso / ((altura * altura)*0.0001);

            const planoABasico = 100 + (idade * 10 * (imc / 10));
            const planoAStandard = (150 + (idade * 15))*(imc/10);
            const planoAPremium = (200 - (imc * 10) + (idade * 20))*(imc/10);

            let fatorComorbidade;
            if (imc < 18.5) {
                fatorComorbidade = 10;
            } else if (imc < 25) {
                fatorComorbidade = 1;
            } else if (imc < 30) {
                fatorComorbidade = 6;
            } else if (imc < 35) {
                fatorComorbidade = 10;
            } else if (imc < 40) {
                fatorComorbidade = 20;
            } else {
                fatorComorbidade = 30;
            }

            const planoBBasico = 100 + (fatorComorbidade * 10 * (imc / 10));
            const planoBStandard = (150 + (fatorComorbidade * 15)) * (imc/10);
            const planoBPremium = (200 - (imc*10) + (fatorComorbidade * 20)) * (imc/10);
            const maisBaratoA = Math.min(planoABasico, planoAStandard, planoAPremium);
            const maisBaratoB = Math.min(planoBBasico, planoBStandard, planoBPremium);

            document.getElementById("planoABasico").textContent = "R$" + planoABasico.toFixed(2);
            document.getElementById("planoAStandard").textContent = "R$" + planoAStandard.toFixed(2);
            document.getElementById("planoAPremium").textContent = "R$" + planoAPremium.toFixed(2);

            document.getElementById("planoBBasico").textContent = "R$" + planoBBasico.toFixed(2);
            document.getElementById("planoBStandard").textContent = "R$" + planoBStandard.toFixed(2);
            document.getElementById("planoBPremium").textContent = "R$" + planoBPremium.toFixed(2);
 
            document.getElementById("planoMaisBrtoA").textContent = "R$" + maisBaratoA.toFixed(2);
            document.getElementById("planoMaisBrtoB").textContent = "R$" + maisBaratoB.toFixed(2);

            document.getElementById("tabelaResultado").style.display = "table";
        });
    } else {
        console.error("Elemento com ID 'imcForm' não encontrado no DOM.");
    }
});

