<?php
  //$content = apply_filters('the_content', get_the_content());
  $has_access = false;

  if (is_user_logged_in()) {
    $user = wp_get_current_user();
    $disabled = get_field('disable_members_area_access', $user->ID);
    $has_access = $disabled == false;
  }

  //$arr = explode('<p>', $content);
?>

<div class='section'>
  <div class='section-join'>
    <div class='section-join__inner'>
      <?php get_template_part('list-image-title'); ?>
      <?php if ($has_access): ?>
        <a href="<?php echo get_site_url() . '/members-area/'; ?>">Go To Members Area</a>
      <?php elseif (is_user_logged_in()): ?>
        Your account does not have access to this page.<br>
        Please contact the CGA administrators to request access.<br>
      <?php else: ?>
        <div class="login-page">
          <div class="login-page__inner">
            <?php wp_login_form(array('redirect'=>get_site_url() . '/members-area/')); ?>
            <a href="' . wp_lostpassword_url() . '">Password Reset</a>
          </div>
        </div>
      <?php endif; ?>
    </div>
    <div class='parallax parallax-next'>
      <div class='parallax-next__inner'>&darr;</div>
    </div>
  </div>
</div>

<style>
  .login-page {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .login-page .login-page__inner {}
  .login-page p {
    width: 100%;
    display: flex;
    padding-bottom: 2px;
  }
  .login-page label[for="user_login"], .login-page label[for="user_pass"] { width: 33.333%; }
  .login-page input[type="text"], .login-page input[type="password"] { width: 66.666%; }
  .login-page input[type="submit"] { margin-top: 16px; }
</style>
