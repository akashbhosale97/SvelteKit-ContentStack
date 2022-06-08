<script>
	export let img, blogTitle, blogContent, blogAuthor;
</script>

<a href={`/blog/${blogTitle}`} class="link-dark text-decoration-none">
	<div class="card mb-3" role="button" data-aos="fade-up">
		<div class="row g-0 align-items-center">
			<div class="col-md-4">
				<img src={img} class="img-fluid rounded-start" alt="..." />
			</div>
			<div class="col-md-8">
				<div class="card-body">
					<h5 class="card-title">{blogTitle}</h5>
					<p class="fw-bold my-3">{blogAuthor}</p>
					<p class="card-text d-none">{blogContent}</p>
				</div>
			</div>
		</div>
	</div>
</a>

<style>
</style>
