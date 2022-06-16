<script>
	import { getEntryByRef } from '../../sdk';
	import BlogCard from '../../components/BlogCard.svelte';
	let blogs;
	let blog;
	const getBlogsData = async () => {
		let result = await getEntryByRef('Page', [
			'pages.blog.blog_reference',
			'pages.blog.blog_reference2',
			'pages.blog.blog_reference3'
		]);
		return result;
	};
	$: getBlogsData()
		.then((val) => (blogs = val.pages[3].blog))
		.then(
			(val) => (blog = [val.blog_reference[0], val.blog_reference2[0], val.blog_reference3[0]])
		);
</script>

<svelte:head>
	<title>Blogs</title>
</svelte:head>

{#if blogs}
	<div>
		<div class="container-fluid py-5 text-white" style="height: 300px; background: #715cdd">
			<div class="row">
				<div class="blog_banner_title fs-2 col-lg-12 text-center">
					{blogs.blog_page_heading}
				</div>
				<div class="blog_banner_content fs-5 mt-3 col-lg-6 offset-lg-3">
					{blogs.blog_page_content}
				</div>
			</div>
		</div>
		<div class="container mt-5">
			<div class="row">
				{#if blog}
					{#each blog as blog}
						<div class="col-lg-4">
							<BlogCard {blog} />
						</div>
					{/each}
				{/if}
			</div>
		</div>
	</div>
{:else}
	''
{/if}

<style>
</style>
