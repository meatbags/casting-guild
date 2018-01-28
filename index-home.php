<?php
  $content = apply_filters('the_content', get_the_content());
  $dir = get_template_directory_uri();
?>

<div class='grid'>
  <div class='grid-third'>
  </div>
  <div class='grid-twothirds section-content'>
    <div class='logo'>
      <div class='logo__image'>
        <img src='<?php echo $dir; ?>/lib/img/a.svg' />
        <img src='<?php echo $dir; ?>/lib/img/g.svg' />
        <img src='<?php echo $dir; ?>/lib/img/c.svg' />
      </div>
    </div>
    <?php echo $content; ?>
    <br />
    <div class='grid'>
      <div class='grid-half'>To members.</div>
      <div class='grid-half'>Join.</div>
    </div>
  </div>
</div>
