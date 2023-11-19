document.getElementById("imcForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Obter os valores do formulário
    const idade = parseFloat(document.getElementById("idade").value);
    const altura = parseFloat(document.getElementById("altura").value);
    const peso = parseFloat(document.getElementById("peso").value);

    // Calcular IMC
    const imc = peso / (altura * altura);

    // Calcular preços para Operadora A
    const planoABasico = 100 + idade * (10 * (imc / 10));
    const planoAStandard = (150 + idade * 15) * (imc / 10);
    const planoAPremium = (200 - (imc + 10) + idade * 20) * (imc / 10);

    // Calcular fator de comorbidade para Operadora B
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

    // Calcular preços para Operadora B
    const planoBBasico = 100 + fatorComorbidade * (10 * (imc / 10));
    const planoBStandard = (150 + fatorComorbidade * 15) * (imc / 10);
    const planoBPremium = (200 - (imc + 10) + fatorComorbidade * 20) * (imc / 10);

    // Atualizar os resultados na tabela
    document.getElementById("planoABasico").textContent = planoABasico.toFixed(2);
    document.getElementById("planoAStandard").textContent = planoAStandard.toFixed(2);
    document.getElementById("planoAPremium").textContent = planoAPremium.toFixed(2);

    document.getElementById("planoBBasico").textContent = planoBBasico.toFixed(2);
    document.getElementById("planoBStandard").textContent = planoBStandard.toFixed(2);
    document.getElementById("planoBPremium").textContent = planoBPremium.toFixed(2);

    // Exibir a tabela de resultados
    document.getElementById("tabelaResultado").style.display = "table";
});
