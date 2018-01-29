<?php
  $content = apply_filters('the_content', get_the_content());
  $emails = get_field('emails');
  $socmed = get_field('social_media');
?>

<div class='grid grid-contact'>
  <div class='grid-40 section-emails'>
    <?php
    if ($emails):
      foreach ($emails as $email):
        $label = $email['label'];
        $url = $email['email'];
        ?>
      <div class='email'>
        <div class='email-label'><?php echo $label; ?></div>
        <div class='email-email'>
          <a href='mailto:<?php echo $url; ?>'><?php echo $url; ?></a>
        </div>
      </div>
    <?php
      endforeach;
    endif;
  ?>

  <?php if ($socmed): ?>
    <div class='social-media'>
      <div class='social-media__title'>Connect</div>
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
  <div class='grid-60 section-content section-contact'>
    <?php echo $content; ?>
    <br /><br />
  </div>
</div>
