<script>
	import { getEntry } from '../sdk';
	import { onMount } from 'svelte';
	import { header } from '../entries-store';
	onMount(async () => {
		let result = await getEntry('Header');
		header.set(result);
	});
</script>

<div>
	{#if $header[0]}
		<nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
			<div class="container">
				<a class="navbar-brand d-flex align-items-center" href="/">
					<img src={$header[0].nav[0].logo.logo.logo_img.url} alt="..." class="csimg me-2" />
					<h3 class="pt-2 fs-4">
						{$header[0].nav[0].logo.logo.logo_brand}
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
				<div class="collapse navbar-collapse navbar__$header" id="navbarSupportedContent">
					<ul class="navbar-nav mb-2 ms-auto mb-lg-0 fs-5 show" id="ul-toggle">
						<li class="nav-item px-lg-3 mx-auto">
							<a
								class="nav-link"
								aria-current="page"
								href={$header[0].nav[1].nav_links.nav_links.home.href}
							>
								{$header[0].nav[1].nav_links.nav_links.home.title}
							</a>
						</li>
						<li class="nav-item px-lg-3 mx-auto">
							<a class="nav-link" href={$header[0].nav[1].nav_links.nav_links.about.href}>
								{$header[0].nav[1].nav_links.nav_links.about.title}
							</a>
						</li>
						<li class="nav-item px-lg-3 mx-auto">
							<a class="nav-link" href="/blogs"> Blogs </a>
						</li>
						<li class="nav-item px-lg-3 mx-auto">
							<a class="nav-link" href={$header[0].nav[1].nav_links.nav_links.contact.href}>
								{$header[0].nav[1].nav_links.nav_links.contact.title}
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	{:else}
		<div class="loading">Loading...</div>
	{/if}
</div>

<style>
	.loading {
		display: flex;
		justify-content: center;
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
