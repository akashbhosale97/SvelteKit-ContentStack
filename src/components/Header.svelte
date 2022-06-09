<script>
	import { getEntry } from '../sdk';
	import { onMount } from 'svelte';
	import { header } from '../entries-store';
	onMount(async () => {
		let result = await getEntry('Header');
		header.set(result[0]);
	});
</script>

<div>
	{#if $header.length !== 0}
		<nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
			<div class="container">
				<a class="navbar-brand d-flex align-items-center" href="/" sveltekit:prefetch>
					<img src={$header.nav[0].logo.logo.logo_img.url} alt="..." class="csimg me-2" />
					<h3 class="pt-2 fs-4">
						{$header.nav[0].logo.logo.logo_brand}
					</h3>
				</a>
				<button
					class="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
					id="btntoggle"
				>
					<span class="navbar-toggler-icon" />
				</button>
				<div class="collapse navbar-collapse navbar__header" id="navbarSupportedContent">
					<ul class="navbar-nav mb-2 ms-auto mb-lg-0 fs-5 show" id="ul-toggle">
						<li class="nav-item px-lg-3 mx-auto">
							<a
								class="nav-link"
								aria-current="page"
								href={$header.nav[1].nav_links.nav_links.home.href}
								sveltekit:prefetch
							>
								{$header.nav[1].nav_links.nav_links.home.title}
							</a>
						</li>
						<li class="nav-item px-lg-3 mx-auto">
							<a
								class="nav-link"
								href={$header.nav[1].nav_links.nav_links.about.href}
								sveltekit:prefetch
							>
								{$header.nav[1].nav_links.nav_links.about.title}
							</a>
						</li>
						<li class="nav-item px-lg-3 mx-auto">
							<a class="nav-link" href="/blogs" sveltekit:prefetch> Blogs </a>
						</li>
						<li class="nav-item px-lg-3 mx-auto">
							<a
								class="nav-link"
								href={$header.nav[1].nav_links.nav_links.contact.href}
								sveltekit:prefetch
							>
								{$header.nav[1].nav_links.nav_links.contact.title}
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	{:else}
		<br />
	{/if}
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap');
	:global(*) {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: 'Quicksand', sans-serif;
	}

	:global(body) {
		padding-top: 8vh;
	}

	:global(h1, h2, h3, h4, h5, ul, p) {
		margin: 0 !important;
		padding: 0 !important;
	}

	.navbar {
		background: #fff !important;
		box-shadow: 2px 2px 8px 1px rgba(0, 0, 0, 0.1);
	}

	.navbar-nav li a {
		color: black !important;
	}

	.csimg {
		height: auto;
		width: 40px;
	}

	.navbar-toggler:focus,
	.navbar-toggler:active,
	.navbar-toggler-icon:focus {
		outline: none;
		box-shadow: none;
	}

	@media screen and (max-width: 780px) {
		.navbar-nav li a {
			font-size: 16px !important;
		}
		/* .show {
    display: none;
  } */
	}
</style>
