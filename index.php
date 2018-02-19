<?php
	get_header();
?>

<div class='page'>
	<?php
		$query = new WP_Query(array('post_type' => 'page', 'orderby' => 'menu_order'));

		if ($query->have_posts()):
			while ($query->have_posts()):
				$query->the_post();
				  global $post;
				  $name = $post->post_name;
				?>
					<div class='section' id='<?php echo $name; ?>'>
				    <?php get_template_part('index', $name); ?>
					</div>
				<?php
				endwhile;
 		endif;
	?>
</div>

<?php
	get_footer();
?>
