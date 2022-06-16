<script>
	import { page } from '$app/stores';
	import { getEntryByRef } from '../../sdk';

	let blogs;
	let selectedBlog;
	const getSelectedBlog = async () => {
		let result = await getEntryByRef('Page', [
			'pages.blog.blog_reference',
			'pages.blog.blog_reference2',
			'pages.blog.blog_reference3'
		]);
		return result;
	};
	$: getSelectedBlog()
		.then(
			(val) =>
				(blogs = [
					val.pages[3].blog.blog_reference[0],
					val.pages[3].blog.blog_reference2[0],
					val.pages[3].blog.blog_reference3[0]
				])
		)
		.then(
			(val) =>
				(selectedBlog = val.filter((newBlog) => {
					return newBlog.uid === $page.params.uid;
				}))
		);
</script>

{#if selectedBlog}
	<div class="container-fluid" style="background: #f7f7f7">
		<div class="py-5 container text-left">
			<div class="blog__img d-flex justify-content-center">
				<img src={selectedBlog[0].blog_img.url} alt=".." class="blog__img__poster img-fluid" />
			</div>
			<div class="blog__title fs-1 my-3">{selectedBlog[0].blog_title}</div>
			<div class="blog__author my-4 fs-3">
				Author : <span class="fw-bold">{selectedBlog[0].blog_author}</span>
			</div>
			<div class="blog__content fs-5">{selectedBlog[0].blog_content}</div>
		</div>
	</div>
{:else}
	""
{/if}

<style>
	.blog__img__poster {
		width: 600px;
		height: auto;
	}
</style>
