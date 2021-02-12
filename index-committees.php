<?php
  $title = get_the_title();
  $content = apply_filters('the_content', get_the_content());
  $committees = get_field('committees');
?>

<div class='section section-committees'>
  <div class='section-inner section-committees__inner'>
    <?php get_template_part('list-image-title'); ?>
    <div class='section-committees-body'>
      <div class='p'>
        <?php echo $content; ?>
      </div>
      <?php
      if ($committees):
        foreach ($committees as $c):
          $title = $c['committee_title'];
          $members = $c['committee_members'];?>
          <div class='committee'>
            <div class='committee-title'>
              <?php echo $title; ?>
            </div>
            <div class='committee-members'>
              <div class='committee-members__inner'>
                <?php if ($members):
                  foreach ($members as $item): ?>
                    <div class='item'>
                      <?php echo $item['name']; ?>
                    </div>
                  <?php endforeach;
                endif; ?>
              </div>
            </div>
          </div>
          <?php
        endforeach;
      endif;
      ?>
    </div>
  </div>
</div>
