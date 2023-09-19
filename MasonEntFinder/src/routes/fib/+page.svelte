
<script>

    /**@type {number}*/
    export let fibNumber;

    /**
     * @param {number} num
     */
    export function calculateFibonacci(num) {
        if (!fibNumber) return;
        if (fibNumber === 0 || fibNumber === 1) return fibNumber;

        return fibNumber;
    }

</script>

<main>

    <h1>type in a number below.</h1>
    <input id="fib-num" type="number" placeholder="type in a number" bind:value="{fibNumber}">

    <!-- ternary expression here since fibNumber could be undefined (a falsy value) -->
    <p>{calculateFibonacci(fibNumber) || ""}</p>

</main>

<!-- just means that the style is restricted to this file only. -->
<style scoped> 

</style>