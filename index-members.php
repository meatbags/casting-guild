<?php
  $content = apply_filters('the_content', get_the_content());
  $states = array('vic', 'nsw', 'qld', 'wa', 'sa', 'nt', 'tas');
  $members = new WP_User_Query(array(
    'role__in' => $states,
    'meta_key' => 'last_name',
    'orderby' => 'meta_value',
    'order' => 'ASC'
  ));
?>

<div class='grid'>
  <div class='grid-third'></div>
  <div class='grid-twothirds section-content'>
    <div class='members-search grid'>
      <div class='search-by-name'>
        <input type='text' id='filter-name'></input>
        <div class='filter-name-search'>Search.</div>
        <div class='filter-name-clear'>Clear.</div>
      </div>
      <div class='search-by-state'>
        <div class='filter-state__item' data-state='all'>ALL</div>
        <div class='filter-state__item' data-state='vic'>VIC</div>
        <div class='filter-state__item' data-state='nsw'>NSW</div>
        <div class='filter-state__item' data-state='qld'>QLD</div>
        <div class='filter-state__item' data-state='sa'>SA</div>
        <div class='filter-state__item' data-state='wa'>WA</div>
        <div class='filter-state__item' data-state='nt'>NT</div>
        <div class='filter-state__item' data-state='tas'>TAS</div>
      </div>
    </div>
    <div class='members-list'>
    <?php
      echo $content;
      foreach ($members->results as $member):
        $name = $member->display_name;
        $filterString = $member->nicename;
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
          <div class='member__header'><?php echo $name; ?></div>
          <div class='member__body'>
            <div class='member__body__inner'>
              <?php if ($role): ?>
                <div class='role'><?php echo $role; ?></div>
              <?php endif; ?>
              <?php if ($email): ?>
                <div class='email'><?php echo $email; ?></div>
              <?php endif;
              if ($url): ?>
                <div class='website'>
                  <a target='_blank' href='<?php echo $url; ?>'>Website.</a>
                </div>
              <?php endif; ?>
            </div>
          </div>
        </div>
      </div>

    <?php
      endforeach;
    ?>
    </div>
  </div>
</div>
