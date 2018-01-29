<?php
  $content = apply_filters('the_content', get_the_content());
?>


<div class='grid'>
  <div class='grid-third mobile-hide'></div>
  <div class='grid-twothirds section-content section-resources mobile-main'>
    <?php
      echo $content;
      get_template_part('list-files');
      get_template_part('list-links');
    ?>
  </div>
</div>
