<?php
  $content = apply_filters('the_content', get_the_content());
  $arr = explode('<p>', $content);
?>

<div class='section'>
  <div class='section-generic'>
    <div class='section-generic__inner'>
      <?php get_template_part('list-image-title'); ?>
      <h1 class='title parallax'><?php echo get_the_title(); ?></h1>
      <div class='parallax parallax-line'>
        <div class='line'></div>
      </div>
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
    <div class='parallax parallax-next'>
      <div class='parallax-next__inner'>&darr;</div>
    </div>
  </div>
</div>
