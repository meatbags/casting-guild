<?php
	get_header();
	$title = get_the_title();
	$title = ($title == 'home') ? get_bloginfo() : $title;
?>

<div class='page ajax-target'>
	<div class='page__inner'>
		<h1 class='capitalise'>
			<?php echo $title; ?>
			<div class='underline'>
				<div class='underline__inner'></div>
			</div>
		</h1>
		<?php
			if (have_posts()):
				while (have_posts()):
					the_post();
					the_content();
					endwhile;
	 		endif;
		?>
	</div>
</div>

<?php
	get_footer();
?>
