<?php
  $title = get_the_title();
  $content = apply_filters('the_content', get_the_content());
  $awards = get_field('award');
?>

<div class='section-rising-star'>
  <div class='section section-awards'>
    <div class='section-inner section-awards__inner'>
      <?php get_template_part('list-image-title'); ?>
      <div class='section-awards-body'>
        <div class='p'>
          <?php echo $content; ?>
        </div>
        <?php
        if ($awards):
          foreach ($awards as $a):
            $heading = $a['award_title'];
            $hosts = $a['award_hosts'];
            $list = $a['award_awards'];
            $gallery = $a['award_gallery']; ?>
          <div class='award'>
            <div class='award-header'>
              <?php echo $heading; ?>
            </div>
            <div class='award-body'>
              <div class='award-body__inner'>
                <div class='award-hosts'>
                  <?php echo $hosts; ?>
                </div>
                <div class='award-list'>
                <?php if ($list):
                    foreach ($list as $item):
                      $itemTitle = $item['title'];
                      $itemRecipients = $item['recipients'];
                      $itemNominees = $item['nominees'];
                      ?>
                      <div class='item'>
                        <div class='item-title'>
                          <?php echo $itemTitle; ?>
                        </div>
                        <div class='item-recipients'>
                          <?php
                            if ($itemRecipients):
                              foreach ($itemRecipients as $n): ?>
                            <div class='name'>
                              <?php echo $n['name']; ?>
                            </div>
                          <?php
                              endforeach;
                            endif;
                          ?>
                        </div>
                        <div class='item-nominees'>
                          <?php
                            if ($itemNominees):
                              foreach ($itemNominees as $n): ?>
                            <div class='name'>
                              <?php echo $n['name']; ?>
                            </div>
                          <?php
                              endforeach;
                            endif;
                          ?>
                        </div>
                      </div>
                    <?php endforeach;
                  endif; ?>
                </div>
                <div class='award-gallery'>
                  <?php if ($gallery): ?>
                    <div class='gallery-grid'>
                      <?php  foreach ($gallery as $img): ?>
                        <div class='s'>
                          <div class='name'>
                            <div class='name__inner'>
                              <?php echo $img['title']; ?>
                            </div>
                          </div>
                          <img src='<?php echo $img['sizes']['large']; ?>'>
                        </div>
                      <?php endforeach; ?>
                    </div>
                  <?php endif; ?>
                </div>
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
</div>
