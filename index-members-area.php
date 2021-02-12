<?php
  $content = apply_filters('the_content', get_the_content());

  // check if user logged in and has access
  $form = '';
  $url = 'http://www.castingguild.com.au/members-area-page/';
  if (is_user_logged_in()) {
    $user = wp_get_current_user();
    $userId = 'user_' . $user->ID;
    $disable = get_field('disable_members_area_access', $userId);
    if (!$disabled) {
      $form = '<a href="' . $url . '">Go To Members Area</a>';
    } else {
      $form = 'Your account does not have access to this page.';
    }
  } else {
    $form = '<div class="login-page"><div class="login-page__inner">';
    $form .= wp_login_form(array('echo'=>false, 'redirect'=>$url));
    $form .= '<a href="' . wp_lostpassword_url() . '">Password Reset</a>';
    $form .= '</div></div>';
  }

  // insert form into page string
  $content = str_replace('[CGA_LOGIN_FORM]', $form, $content);
  $arr = explode('<p>', $content);  
?>

<div class='section'>
  <div class='section-join'>
    <div class='section-join__inner'>
      <?php get_template_part('list-image-title'); ?>
      <br />
      <?php
        foreach ($arr as $p):
          $pretty = str_replace('</p>', '', $p);
          if ($pretty != ''): ?>
          <div class='p'>
            <div class='content'>
              <?php echo $pretty; ?>
            </div>
          </div>
          <?php
          endif;
        endforeach;
      ?>
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
