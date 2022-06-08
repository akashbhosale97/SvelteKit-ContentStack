<script>
	export let img, title, content;
</script>

<div class="aboutcard d-flex my-4" data-aos="fade-up">
	<div class="left pe-4">
		<img src={img} alt="..." />
	</div>
	<div class="right">
		<h3>{title}</h3>
		<p>{content}</p>
	</div>
</div>
