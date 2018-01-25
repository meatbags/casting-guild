<?php
	get_header();
	$title = get_the_title();
	$title = ($title == 'home') ? get_bloginfo() : $title;
?>

<div class='page ajax-target'>
	<div class='page__title'>
		<h1 class='page__title__inner capitalise'>
			<?php echo $title; ?>
		</h1>
	</div>
	<div class='page__inner'>
		<?php
			if (have_posts()):
				while (have_posts()):
					the_post();
					if (is_home()): ?>
						<div>HOME</div>
					<?php endif;
					the_content();
					endwhile;
	 		endif;
		?>
	</div>
</div>

<?php
	get_footer();
?>
