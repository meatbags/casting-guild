<?php
  $title = get_the_title();
  $content = get_the_content();
?>

<div class='section'>
  <div class='section__header'>
    <div class='section__header__inner'>
      <h1 class='title'><?php echo $title; ?>&nbsp;.</h1>
    </div>
  </div>

  <div class='section__body'>
    <div class='section__body__inner'>
      <?php echo $title; echo $content; ?>
    </div>
  </div>
</div>
