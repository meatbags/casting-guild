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
        <div class='file__inner-label'>
          <?php echo $title; ?>
        </div>
        <a target='_blank' href='<?php echo $url; ?>'>
          <div class='file-name'>
            Download PDF
          </div>
          <div class='file-icon'>
            &#128462;
          </div>
        </a>
      </div>
    </div>
  <?php endforeach; ?>
  </div>
<?php
endif;
?>
