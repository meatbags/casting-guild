<?php
  $title = get_the_title();
  $query = new WP_Query(array('post_type' => 'page', 'orderby' => 'menu_order'));
  $dir = get_template_directory_uri() . '/lib/img/';
?>

<div class='nav'>
  <div class='nav__inner'>
    <div class='nav__inner__header'>
      <a href='<?php echo get_site_url(); ?>'>
        <div class='nav-logo'>
          <img src='<?php echo $dir; ?>a.svg' />
          <img src='<?php echo $dir; ?>g.svg' />
          <img src='<?php echo $dir; ?>c.svg' />
        </div>
      </a>
    </div>
    <div class='nav__inner__body'>
      <?php
        if ($query->have_posts()):
          while ($query->have_posts()):
            $query->the_post();
            $label = get_the_title();
          ?>
            <div class='nav-item <?php if ($title == $label){ echo 'active'; } ?>'>
              <a href='<?php echo get_the_permalink();?>'>
                <div class='nav-item__link '>
                  <?php echo $label; ?>
                </div>
              </a>
            </div>
          <?php
          endwhile;
        endif;

        wp_reset_query();
      ?>
    </div>
  </div>
  <div class='nav__indicator'>
    <!-- <div class='nav__indicator__slider'></div> -->
  </div>
</div>
