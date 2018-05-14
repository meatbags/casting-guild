<?php
  $content = apply_filters('the_content', get_the_content());
?>

<div class='section'>
  <div class='section-resources'>
    <div class='section-resources__inner'>
      <?php get_template_part('list-image-title'); ?>
      <div class='parallax parallax-line'>
        <div class='line'></div>
      </div>
      <div class='p'>
        <?php echo $content; ?>
      </div>
      <?php get_template_part('list-files'); ?>
      <br /><br />
    </div>
    <div class='parallax parallax-next'>
      <div class='parallax-next__inner'>&darr;</div>
    </div>
  </div>
</div>
