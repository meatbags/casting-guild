<?php
  $content = apply_filters('the_content', get_the_content());
  $emails = get_field('emails');
  $socmed = get_field('social_media');
  $links = get_field('link_list');
?>

<div class='section'>
  <div class='section-contact'>

    <div class='section-contact__inner'>
      <h1 class='title parallax'>Contact.</h1>
      <div class='parallax parallax-line'>
        <div class='line'></div>
      </div>
      <?php get_template_part('list-images'); ?>
      <div class='section-emails'>
        <?php
        if ($emails):
          foreach ($emails as $email):
            $label = $email['label'];
            $url = $email['email'];
            ?>
          <br />
          <div class='email'>
            <div class='email-label'><?php echo $label; ?>.</div>
            <div class='email-email'>
              <a href='mailto:<?php echo $url; ?>'><?php echo $url; ?></a>
            </div>
          </div>
        <?php
          endforeach;
        endif;
      ?>

      <?php if ($socmed): ?>
        <br />
        <div class='social-media'>
          <div class='social-media__title'>Connect.</div>
          <?php
            foreach ($socmed as $soc):
              $label = $soc['label'];
              $url = $soc['url'];
          ?>
          <div class='social-media__link'>
            <a href='<?php echo $url; ?>'>
              <?php echo $label; ?>
            </a>
          </div>
        <?php endforeach; ?>
        </div>
      <?php endif; ?>

      <?php if ($links): ?>
        <br />
        <div class='social-media'>
          <div class='social-media__title'>Our friends.</div>
            <?php foreach($links as $link):
              $label= $link['name'];
              $url = $link['url'];
              //$img = $link['logo']['sizes']['thumbnail'];
              ?>
              <div class='social-media__link'>
                <a href='<?php echo $url; ?>'>
                  <?php echo $label; ?>
                </a>
              </div>
            <?php endforeach; ?>
          </div>
      <?php endif; ?>
      </div>
      <div class='section-form'>
        <?php //echo $content; ?>
        <br /><br />
      </div>
      <?php get_template_part('list-images'); ?>
    </div>
  </div>
</div>
