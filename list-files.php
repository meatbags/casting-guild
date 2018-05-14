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
      <div class='file__inner'>
        <a target='_blank' href='<?php echo $url; ?>'>
          <div class='file-icon'>
            &#128462;
          </div>
          <div class='file-name'>
            <?php echo $title; ?>
          </div>
        </a>
      </div>
      </a>
    </div>
  <?php endforeach; ?>
  </div>
<?php
endif;
?>
