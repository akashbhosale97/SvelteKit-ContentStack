<script>
	import Banner from '../components/Banner.svelte';
	import HomeCard from '../components/HomeCard.svelte';
	import { getEntryByRef } from '../sdk';
	import { onMount } from 'svelte';
	import { home } from '../entries-store';
	onMount(async () => {
		let result = await getEntryByRef('Page', [
			'pages.home.banner1',
			'pages.home.banner2',
			'pages.home.card1',
			'pages.home.card2'
		]);
		home.set(result.pages[0].home);
	});
</script>

<div>
	{#if $home.length !== 0}
		<div class="banner__first" data-aos="fade-up">
			<Banner
				img={$home.banner1[0].banner_img.url}
				classN="text-white"
				btntext={$home.banner1[0].banner_btntxt}
				text1={$home.banner1[0].banner_heading}
				text2={$home.banner1[0].banner_content}
			/>
		</div>
		<div data-aos="fade-up">
			<Banner
				direction="row-reverse"
				background="white"
				img={$home.banner2[0].banner_img.url}
				classN="text-dark"
				btntext={$home.banner2[0].banner_btntxt}
				bg="bg-transparent"
				text1={$home.banner2[0].banner_heading}
				text2={$home.banner2[0].banner_content}
			/>
		</div>
		<div class="container my-4">
			<div class="row mb-4">
				<div class="col-lg-6 h2 text-center home__learn">{$home.learn_title}</div>
				<div class="col-lg-6 d-flex justify-content-end home__view">
					<button class="btn btn-outline-dark fw-bold">{$home.view_btn_text}</button>
				</div>
			</div>
			<div class="row">
				<div class="col-lg-6 my-lg-0 my-sm-3" data-aos="fade-up">
					<HomeCard
						img={$home.card1[0].banner_img.url}
						title={$home.card1[0].banner_heading}
						content={$home.card1[0].banner_content}
					/>
				</div>
				<div class="col-lg-6" data-aos="fade-up">
					<HomeCard
						img={$home.card2[0].banner_img.url}
						title={$home.card2[0].banner_heading}
						content={$home.card1[0].banner_content}
					/>
				</div>
			</div>
		</div>
	{:else}
		<div class="loading">Loading...</div>
	{/if}
</div>

<!-- <style>
	.banner__first {
		padding-top: 65px;
	}

	@media screen and (max-width: 780px) {
		.home__view {
			justify-content: center !important;
		}
		.home__learn {
			font-size: 18px;
			margin-bottom: 20px;
		}
		.banner__first {
			padding-top: 60px;
		}
	}
</style> -->
