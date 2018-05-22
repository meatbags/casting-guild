<?php
  $content = apply_filters('the_content', get_the_content());
  $links = get_field('link_list');
?>

<div class='section'>
  <div class='section-resources'>
    <div class='section-resources__inner'>
      <?php get_template_part('list-image-title'); ?>
      <div class='p'>
        <?php echo $content; ?>
      </div>
      <?php if ($links): ?>
        <div class='friends'>
          <div class='friends-title'>
            <div class='friends-title__inner'>
              Our friends.
            </div>
          </div>
          <div class='friends-list'>
            <?php foreach($links as $link):
              $label= $link['name'];
              $url = $link['url'];
              $img = $link['logo']['sizes']['thumbnail'];
              ?>
              <div class='friend'>
                <a href='<?php echo $url; ?>'>
                  <div class='friend-img'>
                    <img src='<?php echo $img; ?>'>
                  </div>
                  <div class='friend-label'>
                    <?php echo $label; ?>
                  </div>
                </a>
              </div>
            <?php endforeach; ?>
          </div>
      <?php endif; ?>
      <br /><br />
    </div>
    <div class='parallax parallax-next'>
      <div class='parallax-next__inner'>&darr;</div>
    </div>
  </div>
</div>
