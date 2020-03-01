<script>
    let count = 1;

    function increaseCount() {
      return count += 1;
    }

    function decreaseCount() {
      return count -= 1;
    }

</script>
<main>
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
</main>
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
