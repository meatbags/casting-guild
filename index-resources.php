<?php
  $content = apply_filters('the_content', get_the_content());
?>


<div class='grid'>
  <div class='grid-third'></div>
  <div class='grid-twothirds section-content'>
    <?php echo $content; ?>
    [ resources load here ]
  </div>
</div>
