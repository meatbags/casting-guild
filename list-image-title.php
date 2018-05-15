<?php
$title = get_the_title();
$image = get_field('image');

if ($image): ?>
  <div class='colour-title parallax'>
    <div class='colour-title__inner has-image'>
      <img src='<?php echo $image['sizes']['large']; ?>' />
      <h1 class='title'><?php echo $title; ?>.</h1>
    </div>
  </div>
<?php else: ?>
  <div class='colour-title parallax'>
    <div class='colour-title__inner'>
      <h1 class='title'><?php echo $title; ?>.</h1>
    </div>
  </div>
<?php endif; ?>
