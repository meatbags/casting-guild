<?php
$title = get_the_title();
$image = get_field('image');

if ($image): ?>
  <div class='image-title'>
    <div class='image-title__inner'>
      <img class='image-title-img' src='<?php echo $image['sizes']['large']; ?>' />
      <div class='image-title-title'><?php echo $title; ?></div>
    </div>
  </div>
<?php else: ?>
  <div class='colour-title parallax'>
    <div class='colour-title__inner'>
      <h1 class='title'><?php echo $title; ?>.</h1>
    </div>
  </div>
<?php endif; ?>
