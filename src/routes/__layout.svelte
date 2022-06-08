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
	div {
		min-height: calc(100vh - (8vh + 66px));
	}
</style>
