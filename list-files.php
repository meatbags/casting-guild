<?php
$files = get_field('file_list');
if ($files): ?>

  <div class='file-list'>
  <?php foreach($files as $file):
    $title = $file['file']['title'];
    $name = $file['file']['filename'];
    $url = $file['file']['url'];
    ?>
    <div class='file'>
      <a target='_blank' href='<?php echo $url; ?>'>
        <div class='file__inner'>
          &rarr;&nbsp;&nbsp;<?php echo $title; ?>
        </div>
      </a>
    </div>
  <?php endforeach; ?>
  </div>

<?php
endif;
?>
