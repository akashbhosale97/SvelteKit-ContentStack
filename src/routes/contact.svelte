<script>
	import { getEntry } from '../sdk';
	import { onMount } from 'svelte';
	import { contact } from '../entries-store';
	onMount(async () => {
		let result = await getEntry('Page');
		contact.set(result[0].pages[2].contact);
	});
	console.log($contact);
</script>

{#if $contact.length !== 0}
	<div class="container" style={{ paddingTop: '80px' }}>
		<div class="row" style={{ marginBottom: '100px', minHeight: '70vh' }}>
			<div class="col-lg-6">
				<h1 class="my-lg-5 my-4 contacttitle">{$contact.contact_title}</h1>
				<p class="contactcontent my-lg-2 my-4">{$contact.contact_content}</p>
			</div>
			<div class="col-lg-6">
				<form>
					<input type="text" placeholder={$contact.name_placeholder} class="w-100 my-lg-4" />
					<input type="email" placeholder={$contact.email_placeholder} class="w-100 my-lg-4" />
					<textarea class="w-100 my-lg-4" placeholder={$contact.message_placeholder} />
					<button
						class="btn btn-primary btnbgcolor px-lg-3 py-lg-2 py-sm-0 px-sm-0"
						onClick={(e) => {
							e.preventDefault();
						}}
					>
						{$contact.sendmsg_btn}
					</button>
				</form>
			</div>
		</div>
	</div>
{:else}
	<div class="loading">Loading...</div>
{/if}

<style>
	form input,
	textarea {
		background: #f3f3f3;
		border: none;
		outline: none;
		padding: 20px 0;
		text-indent: 10px;
	}
	.btnbgcolor {
		background: #715cdd !important;
		font-weight: bold;
	}
	.contacttitle {
		font-size: 40px;
	}

	.contactcontent {
		font-size: 18px;
	}

	@media screen and (max-width: 780px) {
		form input,
		textarea {
			padding: 15px 0;
			margin: 10px 0;
		}
		form button {
			padding: 5px 10px !important;
			background: #715cdd !important;
			width: 100%;
		}
		.contacttitle {
			font-size: 22px;
		}

		.contactcontent {
			font-size: 18px;
		}
	}
</style>
