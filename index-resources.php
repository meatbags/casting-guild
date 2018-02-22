<?php
  $content = apply_filters('the_content', get_the_content());
?>

<div class='section'>
  <div class='section-resources'>
    <div class='section-resources__inner'>
      <h1 class='title parallax'>CGA Resources.</h1>
      <div class='parallax parallax-line'>
        <div class='line'></div>
      </div>
      <?php get_template_part('list-images'); ?>
      <div class='parallax p'>
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
