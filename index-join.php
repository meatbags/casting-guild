<?php
  $content = apply_filters('the_content', get_the_content());
  $arr = explode('<p>', $content);
?>

<div class='section'>
  <div class='section-join'>
    <div class='section-join__inner'>
      <?php get_template_part('list-image-title'); ?>
      <div class='parallax parallax-line'>
        <div class='line'></div>
      </div>
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
      <?php
        get_template_part('list-files');
        get_template_part('list-links');
      ?>
    </div>
    <div class='parallax parallax-next'>
      <div class='parallax-next__inner'>&darr;</div>
    </div>
  </div>
</div>
