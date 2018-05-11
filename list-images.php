<?php
$image = get_field('image');

if ($image): ?>
  <div class='parallax parallax-images'>
    <div class='parallax-images__inner'>
      <div class='image'>
        <img src='<?php echo $image['sizes']['large']; ?>' />
      </div>
    </div>
  </div>
<?php
endif;
?>
