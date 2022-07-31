<?php get_header(); ?>

<?php if (is_user_logged_in()):
  $user = wp_get_current_user();
  $userId = 'user_' . $user->ID;
  $disabled = get_field('disable_members_area_access', $userId);
  if ($disabled == false): ?>

<!-- MEMBERS AREA CONTENT -->

<?php
  global $post;
  $content = apply_filters('the_content', $post->post_content);
  $arr = explode('<p>', $content);
?>
<div class='section'>
  <div class='section-join section--members-area'>
    <div class='section-join__inner'>
      <div class="colour-title parallax active">
        <div class="colour-title__inner">
          <h1 class="title">Members Area.</h1>
        </div>
      </div>
      <div class='p'>
        <div class='content'>
          <a href='/'>CGA Home</a>
          <a href='<?php echo wp_logout_url(get_site_url()); ?>'>Log out</a>
        </div>
      </div>
      <br />
      <!-- content -->
      <?php
      foreach ($arr as $p):
        $pretty = str_replace('</p>', '', $p);
        if ($pretty != ''): ?>
          <div class='p parallax'>
            <div class='content'>
              <?php echo $pretty; ?>
            </div>
          </div>
        <?php endif;
      endforeach;
      get_template_part('list-files');
      get_template_part('list-links');
      ?>
    </div>
  </div>
</div>
<style>
  .section--members-area { min-height:100vh; }
</style>

<?php else: ?>

<!-- LOGGED IN WITHOUT ACCESS -->

<div class='page'>
  <div class="section section-request-access">
     Your account does not have access to this page.<br>
     Please contact the CGA administrators to request access.<br><br>
     <a href='/'>CGA Home</a>
  </div>
</div>
<style>
.section-request-access {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>

  <?php endif; ?>
<?php else: ?>

<!-- MEMBERS AREA LOGIN FORM -->

<div class='login-page'>
  <div class='login-page__inner'>
    Please log in to access this page.
    <br /><br />
    <?php wp_login_form(); ?>
    <a href="<?php echo wp_lostpassword_url(); ?>">Password Reset</a>
  </div>
</div>
<style>
  .login-page {
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
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

<?php endif; ?>
<?php get_footer(); ?>
