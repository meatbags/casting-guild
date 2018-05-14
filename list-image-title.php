<?php
$image = get_field('image');
$title = get_the_title();

if ($image): ?>
  <div class='image-title'>
    <div class='image-title__inner'>
      <img class='image-title-img' src='<?php echo $image['sizes']['large']; ?>' />
      <div class='image-title-title'><?php echo $title; ?></div>
    </div>
  </div>
<?php else: ?>
  <h1 class='title parallax'><?php echo $title; ?></h1>
<?php endif; ?>
