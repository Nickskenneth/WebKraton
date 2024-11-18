<script>
    import Arithmetic from './arithmetic.svelte'

    // let coefficient = 0;
    import {coefficient} from './stores'

    // let multiplier = 0;
    import {multiplier} from './stores'
    // let divider = 0;
    import {divider} from './stores'
</script>

<input type="number" bind:value={$coefficient} class="p-1 rounded shadow"/>
<input type="number" bind:value={$multiplier} class="p-1 rounded shadow"/>
<input type="number" bind:value={$divider} class="p-1 rounded shadow"/>

<!-- <Arithmetic input={$coefficient} multiplier= {$multiplier} divider={$divider}></Arithmetic> -->
 <Arithmetic></Arithmetic>