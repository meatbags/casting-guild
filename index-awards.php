<?php
  $title = get_the_title();
  $content = apply_filters('the_content', get_the_content());
  $awards = get_field('award');
?>

<div class='section section-awards'>
  <div class='section-inner section-awards__inner'>
    <?php
      echo $title;
      echo $content;
    ?>
  </div>
</div>
