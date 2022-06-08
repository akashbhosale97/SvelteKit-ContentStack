<script>
	export let img, blogTitle, blogContent, blogAuthor;
</script>

<div class="container-fluid" style={{ background: '#f7f7f7' }} data-aos="fade-up">
	<div class="py-5 my-5 container text-left">
		<div class="blog__title fs-1">{data[0].blog_title}</div>
		<div class="blog__author my-4 fs-3">
			Author : <span class="fw-bold">{data[0].blog_author}</span>
		</div>
		<div class="blog__content fs-5">{data[0].blog_content}</div>
	</div>
</div>

<style>
</style>
