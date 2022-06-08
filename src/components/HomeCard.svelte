<script>
	export let img, title, content;
</script>

<div class="card my-3">
	<img src={img} class="card-img-top" alt="..." />
	<div class="card-body">
		<h5 class="card-title fw-bold homecardtitle">{title}</h5>
		<p class="card-text fs-5 my-lg-4 my-sm-5 homecardcontent">
			{content}
		</p>
		<a href="/" class="btn btn-outline-dark">Read More</a>
	</div>
</div>

<style>
	.aboutcard {
		width: 380px;
	}
	@media screen and (max-width: 780px) {
		.aboutcard {
			width: 100%;
		}
		.right {
			width: 100%;
		}
		h3 {
			font-size: 22px;
		}
		p {
			font-size: 16px;
		}
	}
</style>
