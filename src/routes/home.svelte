<script>
	import Banner from '../components/Banner.svelte';
	import HomeCard from '../components/HomeCard.svelte';
	import { getEntryByRef } from '../sdk';

	let home;
	const getHomeData = async () => {
		let result = await getEntryByRef('Page', [
			'pages.home.banner1',
			'pages.home.banner2',
			'pages.home.card1',
			'pages.home.card2'
		]);
		return result;
	};
	$: getHomeData().then((val) => (home = val.pages[0].home));
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<div>
	{#if home}
		<div>
			<div class="banner__first">
				<Banner
					img={home.banner1[0].banner_img.url}
					classN="text-white"
					btntext={home.banner1[0].banner_btntxt}
					text1={home.banner1[0].banner_heading}
					text2={home.banner1[0].banner_content}
				/>
			</div>
			<div>
				<Banner
					direction="row-reverse"
					background="white"
					img={home.banner2[0].banner_img.url}
					classN="text-dark"
					btntext={home.banner2[0].banner_btntxt}
					bg="bg-transparent"
					text1={home.banner2[0].banner_heading}
					text2={home.banner2[0].banner_content}
				/>
			</div>
			<div class="container my-4">
				<div class="row mb-4">
					<div class="col-lg-6 h2 text-center home__learn">{home.learn_title}</div>
					<div class="col-lg-6 d-flex justify-content-end home__view">
						<button class="btn btn-outline-dark fw-bold">{home.view_btn_text}</button>
					</div>
				</div>
				<div class="row">
					<div class="col-lg-6 my-lg-0 my-sm-3">
						<HomeCard
							img={home.card1[0].banner_img.url}
							title={home.card1[0].banner_heading}
							content={home.card1[0].banner_content}
						/>
					</div>
					<div class="col-lg-6">
						<HomeCard
							img={home.card2[0].banner_img.url}
							title={home.card2[0].banner_heading}
							content={home.card1[0].banner_content}
						/>
					</div>
				</div>
			</div>
		</div>
	{:else}
		<br />
	{/if}
</div>

<style>
	@media screen and (max-width: 780px) {
		.home__view {
			justify-content: center !important;
		}
		.home__learn {
			font-size: 18px;
			margin-bottom: 20px;
		}
	}
</style>
