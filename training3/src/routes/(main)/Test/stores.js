import { derived, readable, writable } from "svelte/store";

export let coefficient = writable(0)
export let multiplier = writable(0)
export let divider = writable(0)

export let result = derived(
    [coefficient, multiplier, divider], 
    ([$coefficient, $multiplier, $divider]) => {
    return ($coefficient * $multiplier) / $divider;
});
