	</div> <!-- /wrapper -->
</div> <!-- /content -->

<?php
	$dir = get_template_directory_uri();
?>

<div class='footer'>
	<div class='footer__inner'>
		<div class='footer-box'>
			<div class='footer-box__half'>
				<div class='footer-logo'>
					<a href='<?php echo get_site_url(); ?>'>
						<img src='<?php echo $dir . '/lib/img/cga-logo-white.png' ;?>' alt='CGA Logo White' />
					</a>
				</div>
			</div>
			<div class='footer-divider'>
			</div>
			<div class='footer-box__half'>
				<div class='footer-links'>
					<div class='footer-links__item'>
						<img src='<?php echo $dir . '/lib/img/fb-logo.png' ;?>' alt='Facebook Logo' />
					</div>
					<div class='footer-links__item'>
						<img src='<?php echo $dir . '/lib/img/g-logo.png' ;?>' alt='Google Plus Logo' />
					</div>
					<div class='footer-links__item'>
						<img src='<?php echo $dir . '/lib/img/insta-logo.png' ;?>' alt='Instagram Logo' />
					</div>
					<div class='footer-links__item'>
						<img src='<?php echo $dir . '/lib/img/tw-logo.png' ;?>' alt='Twitter Logo' />
					</div>
				</div>
			</div>
		</div>
		<div class='footer__copyright'>
			&copy; CGA <?php echo date("Y"); ?>
		</div>
	</div>
</div>

<?php wp_footer(); ?>

</body>
</html>
