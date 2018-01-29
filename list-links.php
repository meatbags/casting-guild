<?php
$links = get_field('link_list');
if ($links):
?>
<div class='link-list'>
  <?php foreach($links as $link):
    $name = $link['name'];
    $url = $link['url'];
    $img = $link['logo']['sizes']['thumbnail'];
    ?>
    <div class='link'>
      <div class='link__inner'>
        <a href='<?php echo $url; ?>' target='_blank'>
          <div class='link-img'>
            <?php if ($img): ?>
              <img src='<?php echo $img; ?>'/>
            <?php endif; ?>
          </div>
          <div class='link-name'><?php echo $name; ?></div>
        </a>
      </div>
    </div>
  <?php endforeach; ?>
</div>
<?php endif; ?>
