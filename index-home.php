<?php
  $content = apply_filters('the_content', get_the_content());
  $dir = get_template_directory_uri();
?>

<div class='section'>
  <div class='section-home'>
    <div class='section-home__inner'>
      <div class='title-box'>
        <div class='logo'>
          <img title='CGA Logo' alt='CGA-logo' src='<?php echo get_template_directory_uri(); ?>/lib/img/cga-logo.png'>
        </div>
        <div class='title'>CASTING GUILD of AUSTRALIA</div>
        <div class='parallax double-line'>
          <div class='line'></div>
        </div>
        <div class='est'>Established 2013</div>
      </div>
      <div class='parallax parallax-next'>
        <div class='parallax-next__inner'>
          <div class='chevron-down'></div>
        </div>
      </div>
    </div>
    <div class='background-image'>
      <div class='background-image__inner'>
        <img style='object-fit:cover;width:100%;height:100%' src='<?php echo $dir;?>/lib/img/background_casting_wall.jpg' />
      </div>
    </div>
  </div>
</div>
