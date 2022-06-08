<script>
	import { getEntryByRef } from '../../sdk';
	import { onMount } from 'svelte';
	import { blog, blogs } from '../../entries-store';
	import BlogCard from '../../components/BlogCard.svelte';
	import { fly } from 'svelte/transition';
	onMount(async () => {
		let result = await getEntryByRef('Page', [
			'pages.blog.blog_reference',
			'pages.blog.blog_reference2',
			'pages.blog.blog_reference3'
		]);
		blogs.set(result.pages[3].blog);
		blog.set([$blogs.blog_reference[0], $blogs.blog_reference2[0], $blogs.blog_reference3[0]]);
	});
</script>

{#if $blogs.length !== 0}
	<div in:fly={{ y: 50, duration: 500, delay: 500 }} out:fly={{ y: -50, duration: 500 }}>
		<div
			class="container-fluid py-5 text-white"
			style="height: 300px; background: #715cdd"
			data-aos="fade-up"
		>
			<div class="row">
				<div class="blog_banner_title fs-2 col-lg-12 text-center">
					{$blogs.blog_page_heading}
				</div>
				<div class="blog_banner_content fs-5 mt-3 col-lg-6 offset-lg-3">
					{$blogs.blog_page_content}
				</div>
			</div>
		</div>
		<div class="container mt-5">
			<div class="row">
				{#each $blog as blog}
					<div class="col-lg-4">
						<BlogCard {blog} />
					</div>
				{/each}
			</div>
		</div>
	</div>
{:else}
	''
{/if}

<style>
</style>
