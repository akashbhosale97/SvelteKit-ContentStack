<script>
	export let direction, background, img, classN, btntext, bg, text1, text2;
</script>

<div class="container-fluid home" style="background: {background}">
	<div class="container">
		<div class="row banner_row py-5" style="flex-direction:{direction}">
			<div class="col-lg-6 col-md-6 col-sm-12 my-auto banner_left">
				<h1 class={`${classN} ? 'text-dark fs-1' : "fs-1 text-white" bannerheading`}>
					{text1}
				</h1>
				<p class={`${classN} my-4 fs-5 bannercontent`}>{text2}</p>
				<div class="banner__btn my-4">
					<button class="btn-light {bg} btn px-3 py-2 banner_text fw-bold btn-banner">
						{btntext}
					</button>
				</div>
			</div>
			<div class="col-lg-6 col-md-6 col-sm-12">
				<img src={img} alt="..." class="img-fluid" />
			</div>
		</div>
	</div>
</div>

<style>
	.home {
		background-color: #715cdd;
	}

	.banner_text {
		color: #715cdd;
	}

	.banner_text:hover {
		color: #715cdd;
	}

	.banner_left {
	}

	.banner_row {
		justify-content: space-between !important;
	}

	.btn-banner {
		border: #715cdd !important;
	}

	@media screen and (max-width: 780px) {
		.bannerheading {
			font-size: 20px !important;
			font-weight: bold;
		}
		.bannercontent {
			font-size: 18px !important;
		}
	}
</style>
