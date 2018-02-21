<?php
  $content = apply_filters('the_content', get_the_content());
  $states = array('vic', 'nsw', 'qld', 'wa', 'sa', 'tas', 'nt', 'act');
  $members = new WP_User_Query(array(
    'role__in' => $states,
    'meta_key' => 'first_name',
    'orderby' => 'meta_value',
    'order' => 'ASC'
  ));
?>

<div class='section'>
  <div class='section-members'>
    <div class='section-members__inner'>
      <div class='members-search'>
        <?php echo $content; ?>
        <div class='search-by-name'>
          <input type='text' placeholder='Search Name.' id='filter-name'></input>
          <div class='search-by-name__submit'>
            <div class='filter-name-search'>Search Members.</div>
            <!--<div class='filter-name-clear'>Clear.</div>-->
          </div>
        </div>
        <div class='parallax parallax-line'>
          <div class='line'></div>
        </div>
        <div class='search-by-state'>
          <div class='filter-state__item' data-state='nsw'>NSW.</div>
          <div class='filter-state__item' data-state='vic'>VIC.</div>
          <div class='filter-state__item' data-state='qld'>QLD.</div>
          <div class='filter-state__item' data-state='sa'>SA.</div>
          <div class='filter-state__item' data-state='wa'>WA.</div>
          <div class='filter-state__item' data-state='nt'>NT.</div>
          <div class='filter-state__item' data-state='nt'>ACT.</div>
          <div class='filter-state__item' data-state='tas'>TAS.</div>
          <div class='filter-state__item active' data-state='all'>All.</div>
        </div>
      </div>
      <div class='members-list'>
        <div class='members-list__column'>
          <?php
            foreach ($members->results as $member):
              $name = $member->display_name;
              $filterString = $member->user_nicename;
              $email = $member->user_email;
              $url = $member->user_url;
              $role = get_the_author_meta('aim', $member->ID);
              $state = '';
              foreach ($member->roles as $s) {
                if (in_array($s, $states)) {
                  $state = $s;
                  break;
                }
              }
          ?>

            <div class='member' data-name='<?php echo $filterString; ?>' data-state='<?php echo $state; ?>'>
              <div class='member__inner'>
                <div class='member__header'>
                  <span class='member__header__name'><?php echo $name; ?></span>
                  <?php if ($role): ?>
                    <div class='member__header__subheader'>(<?php echo $role; ?>)</div>
                  <?php endif; ?></div>
                <div class='member__body'>
                  <div class='member__body__inner'>
                    <?php if ($email): ?>
                      <div class='email'>
                        <a href='mailto:<?php echo $email; ?>'><?php echo $email; ?></a>
                      </div>
                    <?php endif;
                    if ($url): ?>
                      <div class='website'>
                        <a target='_blank' href='<?php echo $url; ?>'>Website</a>
                      </div>
                    <?php endif; ?>
                  </div>
                </div>
              </div>
            </div>

          <?php
            endforeach;
          ?>
          <div class='no-members hidden'>
            <div class='no-members__inner'>No members found.</div>
          </div>
        </div>
        <div class='members-list__column'></div>
        <div class='members-list__column'></div>
        <div class='members-list__column'></div>
      </div>
    </div>
    <div class='parallax parallax-next'>
      <div class='parallax-next__inner'>&darr;</div>
    </div>
  </div>
</div>
