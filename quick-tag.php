<?php
/**
 * Plugin Name: Quick Tag
 * Author: SaberHR
 * Plugin URI: http://saberhr.com
 * Author URI: http://saberhr.com
 * Description:
 * Version: 1.0.0
 * Licence: GPLv2 or later
 * Text Domain: quick-tag
 * Domain Path: /language/
 */

function quicktag_load_textdomain () {
	load_plugin_textdomain('quick-tag', false, plugin_dir_url(__FILE__) . '/languages');
}
add_action('plugins_loaded', 'quicktag_load_textdomain');


function quicktag_admin_assets ($screen) {
	if ('post.php' == $screen) {
		wp_enqueue_script('quick-tag-js', plugin_dir_url(__FILE__) .'/assets/admin/js/quick-tag.js', array('quicktags'), time(), true);
	}
}
add_action('admin_enqueue_scripts', 'quicktag_admin_assets');