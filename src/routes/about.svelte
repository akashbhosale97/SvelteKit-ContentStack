<script>
	import AboutCard from '../components/AboutCard.svelte';
	import Banner from '../components/Banner.svelte';
	import { getEntryByRef } from '../sdk/index.svelte';
	import { onMount } from 'svelte';
	import { about } from '../entries-store';
	import { fly } from 'svelte/transition';
	onMount(async () => {
		let result = await getEntryByRef('Page', [
			'pages.about.banner1',
			'pages.about.banner2',
			'pages.about.card1',
			'pages.about.card2',
			'pages.about.card3',
			'pages.about.card4'
		]);
		about.set(result.pages[1].about);
	});
</script>

<div class="about_wrapper">
	{#if $about.length !== 0}
		<div in:fly={{ y: 50, duration: 500, delay: 500 }} out:fly={{ y: -50, duration: 500 }}>
			<div class="container">
				<div class="banner__first" data-aos="fade-up">
					<Banner
						direction=""
						background="white"
						img={$about.banner1[0].banner_img.url}
						classN=""
						btntext=""
						bg=""
						text1={$about.banner1[0].banner_heading}
						text2={$about.banner1[0].banner_content}
					/>
				</div>
			</div>
			<div class="container-fluid about-full" data-aos="fade-up">
				<div class="container">
					<div class="row">
						<h3 class="text-center py-4 fw-bold">Our Mission</h3>
					</div>
					<div class="row">
						<div class="col-lg-6 d-flex flex-column align-items-start resp">
							<AboutCard
								img={$about.card1[0].banner_img.url}
								title={$about.card1[0].banner_heading}
								content={$about.card1[0].banner_content}
							/>
							<AboutCard
								img={$about.card2[0].banner_img.url}
								title={$about.card2[0].banner_heading}
								content={$about.card2[0].banner_content}
							/>
						</div>
						<div class="col-lg-6 d-flex flex-column align-items-end resp">
							<AboutCard
								img={$about.card3[0].banner_img.url}
								title={$about.card3[0].banner_heading}
								content={$about.card3[0].banner_content}
							/>
							<AboutCard
								img={$about.card4[0].banner_img.url}
								title={$about.card4[0].banner_heading}
								content={$about.card4[0].banner_content}
							/>
						</div>
					</div>
				</div>
			</div>
			<div class="container" data-aos="fade-up">
				<Banner
					background="white"
					img={$about.banner2[0].banner_img.url}
					btntext=""
					text1={$about.banner2[0].banner_heading}
					text2={$about.banner2[0].banner_content}
				/>
			</div>
		</div>
	{:else}
		<div class="loading">Loading...</div>
	{/if}
</div>

<style>
	.about-full {
		background: #f2f2f2;
	}

	@media screen and (max-width: 780px) {
		.resp {
			align-items: center !important;
		}
	}
</style>
