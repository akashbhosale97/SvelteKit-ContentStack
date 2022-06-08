<script>
	import Footer from '../components/Footer.svelte';
	import Header from '../components/Header.svelte';
</script>

<main>
	<Header />
	<div>
		<slot />
	</div>
	<Footer />
</main>

<style>
	main {
		/* display: flex;
		flex-direction: column;
		justify-content: space-between;
		min-height: 100vh; */
	}
	div {
		min-height: calc(100vh - (8vh + 66px));
		overflow-y: scroll;
	}
</style>
