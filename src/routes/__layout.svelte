<script>
	import Footer from '../components/Footer.svelte';
	import Header from '../components/Header.svelte';
</script>

<main>
	<Header />
	<div class="main-div">
		<slot />
	</div>
	<Footer />
</main>

<style>
	.main-div {
		min-height: calc(100vh - (8vh + 66px));
	}
</style>
