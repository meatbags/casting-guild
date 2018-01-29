<?php
  $content = apply_filters('the_content', get_the_content());
  $dir = get_template_directory_uri();
?>

<div class='grid'>
  <div class='grid-third mobile-hide'>
  </div>
  <div class='grid-twothirds section-content section-home mobile-main'>
    <div class='logo'>
      <div class='logo__image'>
        <img src='<?php echo $dir; ?>/lib/img/a.svg' />
        <img src='<?php echo $dir; ?>/lib/img/g.svg' />
        <img src='<?php echo $dir; ?>/lib/img/c.svg' />
      </div>
    </div>
    <?php echo $content; ?>
    <br />
    <div class='button-list'>
      <div class='button'>
        <div id='button-members' class='button__inner'>Members.</div>
      </div>
      <div class='button'>
        <div id='button-join' class='button__inner'>Join.</div>
      </div>
    </div>
  </div>
</div>
