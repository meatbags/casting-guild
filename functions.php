<?php

function custom_setup()
{
	add_theme_support('title-tag');
	add_theme_support('automatic-feed-links');
	add_theme_support('post-thumbnails');
}
add_action('after_setup_theme', 'custom_setup');

function remove_admin_post_types() {
  remove_menu_page('edit.php');
  remove_menu_page('edit-comments.php');
	update_option( 'link_manager_enabled', 0 );
}
add_action('admin_menu', 'remove_admin_post_types');

function add_admin_post_types() {
}
add_action('init', 'add_admin_post_types');

add_filter( 'the_title', 'custom_title' );
function custom_title( $title ) {
	if ( $title == '' ) {
		return '&rarr;';
	} else {
		return $title;
	}
}

add_filter( 'wp_title', 'custom_filter_wp_title' );
function custom_filter_wp_title( $title )
{
	return $title . esc_attr( get_bloginfo( 'name' ) );
}

add_action( 'widgets_init', 'custom_widgets_init' );
function custom_widgets_init(){
	register_sidebar( array (
		'name' => __( 'Sidebar Widget Area', 'custom' ),
		'id' => 'primary-widget-area',
		'before_widget' => '<li id="%1$s" class="widget-container %2$s">',
		'after_widget' => "</li>",
		'before_title' => '<h3 class="widget-title">',
		'after_title' => '</h3>',
	));
}

function custom_custom_pings( $comment ){
	$GLOBALS['comment'] = $comment;
	?>
	<li <?php comment_class(); ?> id="li-comment-<?php comment_ID(); ?>"><?php echo comment_author_link(); ?></li>
	<?php
}

add_action( 'wp_enqueue_scripts', 'custom_load_scripts' );
function custom_load_scripts()
{
	// js
	wp_enqueue_script( 'customjquery', get_stylesheet_directory_uri() . '/lib/build/jquery-3.2.1.min.js');
	wp_enqueue_script( 'customscript', get_stylesheet_directory_uri() . '/lib/build/app.min.js');
	wp_enqueue_script( 'customscript-slick', get_stylesheet_directory_uri() . '/lib/build/slick.min.js');

	// stylez
	wp_register_style( 'customstyle', get_stylesheet_directory_uri() . '/lib/build/style.css', array(), '1.0.2' );
	wp_register_style( 'customstyle-slick', get_stylesheet_directory_uri() . '/lib/build/slick.css' );
	wp_register_style( 'customstyle-slicktheme', get_stylesheet_directory_uri() . '/lib/build/slick-theme.css' );
	wp_enqueue_style( 'customstyle' );
	wp_enqueue_style( 'customstyle-slick' );
	wp_enqueue_style( 'customstyle-slicktheme' );
}
