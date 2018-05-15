<?php
  $content = apply_filters('the_content', get_the_content());
  $emails = get_field('emails');
  $socmed = get_field('social_media');
  $links = get_field('link_list');
?>

<div class='section'>
  <div class='section-contact'>
    <div class='section-contact__inner'>
      <?php get_template_part('list-image-title'); ?>

      <div class='section-contact__inner__body'>
        <div class='section-emails'>
          <?php
          if ($emails):
            foreach ($emails as $email):
              $label = $email['label'];
              $url = $email['email'];
              ?>
            <br />
            <div class='email'>
              <div class='label'>
                <div class='label__inner'>
                  <?php echo $label; ?>
                </div>
              </div>
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
            <div class='label'>
              <div class='label__inner'>
                Connect
              </div>
            </div>
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
        </div>
      </div>
    </div>
  </div>
</div>
