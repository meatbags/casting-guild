<?php get_header(); ?>

<div class='page'>
	<?php
		$query = new WP_Query(array('post_type' => 'page', 'orderby' => 'menu_order'));
		if ($query->have_posts()):
			while ($query->have_posts()):
				$query->the_post();
				global $post;
				$name = $post->post_name;
				$title = str_replace(' ', '-', strtolower(get_the_title()));	
				$protected = get_field('password_protected_page');
				?>
				<div style='display:none' data-name='<?php echo $name; ?>' data-title='<?php echo $title; ?>'></div>
				<?php
				if ($protected === NULL || $protected === FALSE) {
					if (locate_template('index-' . $name . '.php')) {
				 		get_template_part('index', $name);
					} elseif (locate_template('index-' . $title . '.php')) {
						get_template_part('index', $title);
					} else {
						get_template_part('index-generic');
					}
				}
			endwhile;
 		endif;
	?>
</div>

<?php get_footer(); ?>
