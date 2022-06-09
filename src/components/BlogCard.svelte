<script>
	export let blog;
</script>

<a href="/blogs/{blog.uid}" class="link-dark text-decoration-none">
	<div class="card mb-3" role="button" data-aos="fade-up">
		<div class="row g-0 align-items-center">
			<div class="col-md-12">
				<img src={blog.blog_img.url} class="img-fluid rounded-start blog_img" alt="..." />
			</div>
			<div class="col-md-12">
				<div class="card-body">
					<h5 class="card-title">{blog.blog_title}</h5>
					<p class="fw-bold my-3">{blog.blog_author}</p>
					<p class="card-text d-none">{blog.blog_content}</p>
				</div>
			</div>
		</div>
	</div>
</a>

<style>
	.blog_img:first-child {
		width: 100%;
		height: auto;
		object-fit: contain;
	}
</style>
