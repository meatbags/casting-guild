<?php if (is_home() || is_front_page()): ?>

<div class='menu'>
  <div class='menu__inner'>
    <div class='menu-item link-me' data-target='.section-home'>home</div>
    <div class='menu-item link-me' data-target='.section-members'>members</div>
    <div class='menu-item'>
      <a style='text-decoration:none;' href='<?php echo get_site_url(); ?>/members-area/'>members area</a>
    </div>
    <div class='menu-item link-me' data-target='.section-join'>about us</div>
    <div class='menu-item link-me' data-target='.section-committees'>committees</div>
    <div class='menu-item' >
      <div class='link-me' data-target='.section-awards'>CGA awards</div>&nbsp;/&nbsp;
      <div class='link-me' data-target='.section-rising-star'>Rising Stars</div>
    </div>
    <div class='menu-item'>
      <div class='link-me' data-target='.section-policies'>policies</div>&nbsp;/&nbsp;
      <div class='link-me' data-target='.section-resources'>resources</div>
    </div>
    <div class='menu-item link-me' data-target='.section-contact'>contact</div>
    <?php if (is_user_logged_in()): ?>
      <div class='menu-item'><a href='<?php echo wp_logout_url(get_site_url()); ?>'>log out</a></div>
    <?php endif; ?>
    <div class='menu-item menu-close'>Close</div>
  </div>
</div>

<?php else: ?>

<div class='menu'>
  <div class='menu__inner'>
    <div class='menu-item'><a href='/'>home</a></div>
    <?php if (is_user_logged_in()): ?>
      <div class='menu-item'><a href='<?php echo wp_logout_url(get_site_url); ?>'>log out</a></div>
    <?php endif; ?>
    <div class='menu-item menu-close'>Close</div>
  </div>
</div>

<?php endif; ?>
<style>
  .menu-item a { text-decoration:none; }
  .menu-item a:hover { color: #6cd; }
</style>
