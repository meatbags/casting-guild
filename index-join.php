<?php
  $content = apply_filters('the_content', get_the_content());
?>

<div class='section-join'>
  <?php
    echo $content;
    get_template_part('list-files');
    get_template_part('list-links');
  ?>
</div>
