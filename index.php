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
				  get_template_part('index', $name);
				endwhile;
 		endif;
	?>
</div>

<?php
	get_footer();
?>
