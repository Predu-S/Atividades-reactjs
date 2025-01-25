<!-- svelte-ignore missing-declaration -->
<!-----Questão 1 - Plataforma Web-->

<script>
    let nome = $state('');

    let celsius = $state('');
    let fahrenheit = $state('');
    function ConverterTemperatura(){
        let celsius = parseFloat(celsius);
        let fahrenheit = parseFloat((celsius * 9/5) + 32);
    }



</script>

<h2>Qual é o seu nome?</h2>

<input bind:value={nome} type="text" placeholder="nome" />

{#if nome}
    <p>Olá {nome}</p>
{/if}

<!-----Questão 2 - Plataforma Web-->

<h2>Conversor de Temperatura</h2>

<input bind:value={celsius} type="number" placeholder="Celsius" />

<button on:click={ConverterTemperatura}>Converter</button>

{#if fahrenheit}
    <p>A temperatura em Fahrenheit é {fahrenheit}</p>
{/if}