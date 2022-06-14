<script>
	export let img, title, content;
</script>

<div class="card my-3">
	<img src={img} class="card-img-top" alt="..." />
	<div class="card-body">
		<p class="card-title h5 fw-bold homecardtitle">{title}</p>
		<p class="card-text fs-5 my-lg-4 my-sm-5 homecardcontent">
			{content}
		</p>
		<a href="/" class="btn btn-outline-dark">Read More</a>
	</div>
</div>
