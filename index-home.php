<?php
  $content = apply_filters('the_content', get_the_content());
  $dir = get_template_directory_uri();
?>

<div class='section'>
  <div class='section-home'>
    <div class='section-home__inner'>
      <div class='title-box'>
        <div class='title'>The Casting Guild of Australia.</div>
        <div class='parallax double-line'>
          <div class='line'></div>
        </div>
        <div class='est'>EST. 2013</div>
      </div>
      <div class='parallax parallax-next'>
        <div class='parallax-next__inner'>&darr;</div>
      </div>
    </div>
    <div class='background-image'>
      <div class='background-image__inner'>
        <img src='<?php echo $dir;?>/lib/img/background_casting_wall.jpg' />
      </div>
    </div>
  </div>
</div>
