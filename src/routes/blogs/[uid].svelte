<script>
	import { blog, selectedBlog } from '../../entries-store';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { getEntryByRef } from '../../sdk/index.svelte';
	import { fly } from 'svelte/transition';
	onMount(async () => {
		let result = await getEntryByRef('Page', [
			'pages.blog.blog_reference',
			'pages.blog.blog_reference2',
			'pages.blog.blog_reference3'
		]);
		blog.set([
			result.pages[3].blog.blog_reference[0],
			result.pages[3].blog.blog_reference2[0],
			result.pages[3].blog.blog_reference3[0]
		]);
		const blog_uid = $page.params.uid;
		const select = $blog.filter((newBlog) => {
			return blog_uid === newBlog.uid;
		});
		selectedBlog.set(select);
	});
</script>

{#if $selectedBlog.length !== 0}
	<div
		class="container-fluid"
		style="background: #f7f7f7"
		data-aos="fade-up"
		in:fly={{ y: 50, duration: 500, delay: 500 }}
		out:fly={{ y: -50, duration: 500 }}
	>
		<div class="py-5 container text-left">
			<div class="blog__img d-flex justify-content-center">
				<img src={$selectedBlog[0].blog_img.url} alt=".." class="blog__img__poster img-fluid" />
			</div>
			<div class="blog__title fs-1 my-3">{$selectedBlog[0].blog_title}</div>
			<div class="blog__author my-4 fs-3">
				Author : <span class="fw-bold">{$selectedBlog[0].blog_author}</span>
			</div>
			<div class="blog__content fs-5">{$selectedBlog[0].blog_content}</div>
		</div>
	</div>
{:else}
	<div class="loading">Loading</div>
{/if}

<style>
	.blog__img__poster {
		width: 600px;
		height: auto;
	}
</style>
