<?php
  //$title = get_the_title();
  $content = apply_filters('the_content', get_the_content());
  $pol = get_field('policy');
?>

<div class='section section-policies'>
  <div class='section-inner section-policies__inner'>
    <?php get_template_part('list-image-title'); ?>
    <?php foreach ($pol as $p):
        $pt = $p['policy_title'];
        $pc = $p['policy_copy'];
        $pu = $p['policy_document'];
        ?>
      <div class='policy'>
        <div class='policy-header'>
          <div class='policy-title'>
            <?php echo $pt; ?>
          </div>
          <div class='policy-url'>
            <?php if ($pu): ?>
              <a target='_blank' href='<?php echo $pu; ?>'>
                <div class='file-name'>PDF Download</div>
                <div class='file-icon'>&#128462;</div>
              </a>
            <?php else: ?>
              <div class='coming-soon'>PDF Download (Coming Soon)</div>
            <?php endif; ?>
          </div>
        </div>
        <div class='policy-body'>
          <?php echo $pc; ?>
        </div>
      </div>
    <?php endforeach; ?>
  </div>
</div>
