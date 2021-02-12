<?php $protected = get_field('password_protected_page'); ?>

<?php if ($protected === NULL || $protected === FALSE): ?>
  <?php get_template_part('index'); ?>
<?php else: ?>
  <?php get_template_part('page-members-area'); ?>
<?php endif; ?>