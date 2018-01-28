<?php
  global $post;
  $name = $post->post_name;
  $id = get_the_ID();
  $title = get_the_title();
?>

<div class='section' id='<?php echo $name; ?>'>
  <div class='section__header'>
    <div class='section__header__inner'>
      <h1 class='title hidden'><?php echo $title; ?>&nbsp;.</h1>
      <div class='section__header__prompt'>
        <div class='section__header__prompt__inner'>
          <!--&#9660;-->&nbsp;
        </div>
      </div>
    </div>
  </div>

  <div class='section__body'>
    <div class='section__body__inner'>
      <?php
      switch ($name) {
        case 'home':
        case 'join':
        case 'members':
        case 'resources':
        case 'contact';
          get_template_part('index', $name);
          break;
        default:
          echo apply_filters('the_content', get_the_content());
          break;
      }
      ?>
    </div>
  </div>
</div>
