<script>
	import Header from "./Header.svelte";
	import Hero from "./Hero.svelte";
	import Contents from "./Contents.svelte";
</script>

<main>
	<Header></Header>
	<Hero></Hero>
	<Contents></Contents>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		min-height: 100%;
		background-color: black;
	}
</style>