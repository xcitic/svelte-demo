<script>
    export let name;
    let count = 0;

    function increaseCount() {
      return count += 1;
    }

    function decreaseCount() {
      return count -= 1;
    }

    $: console.log(count);

    $: if (count > 2) {
      alert('Count is over 2');
    }

    let src = 'https://svelte.dev/tutorial/image.gif';
    let info = 'Rick Astley dancing.';

</script>
    <h1>Hello {name}</h1>
    <h1> Count: {count} </h1>
    <button class="btn btn-primary" on:click={increaseCount}>
        <span>
            +
        </span>
    </button>
    <button class="btn btn-primary" on:click={decreaseCount}>
        <span class="center">
            -
        </span>
    </button>

    <div>
        <img {src} alt="{info}">
    </div>
<style>
    .btn {
        color: lightskyblue;
        width: 1.4rem;
        height: 1.4rem;
        border-radius: 0.2rem;
    }

    span .center {
        margin-right: auto;
        margin-left: auto;
    }
</style>
