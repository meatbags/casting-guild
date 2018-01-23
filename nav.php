<?php
  $title = get_the_title();
  $query = new WP_Query(array('post_type' => 'page', 'orderby' => 'menu_order'));
?>

<div class='nav'>
  <div class='nav__inner'>
    <div class='nav__inner__header'>
      <div class='nav-logo'>
        <a href='<?php echo get_site_url(); ?>'>
          <img src='<?php echo get_template_directory_uri() . '/lib/img/cga-logo.png' ; ?>' alt='CGA Logo'/>
        </a>
      </div>
    </div>
    <div class='nav__inner__body'>
      <?php
        if ($query->have_posts()):
          while ($query->have_posts()):
            $query->the_post();
            $label = get_the_title();
          ?>
            <div class='nav-item uppercase <?php if ($title == $label){ echo 'active'; } ?>'>
              <div class='nav-item__popup'>
                <div class='nav-item__popup__inner'></div>
              </div>
              <div class='nav-item__link'>
                <a href='<?php echo get_the_permalink();?>'>
                  <span class='active-show'>{&nbsp;</span>
                  <?php echo $label; ?>
                  <span class='active-show'>&nbsp;}</span>
                </a>
              </div>
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
