<?php
/**
 * WrAIter Light - AI Assisted Autocontent Elementor support Light Version
 *
 * @link              https://www.balcomsoft.com/
 * @since             1.0.0
 * @package           Wraiter Light
 *
 * @wordpress-plugin
 * Plugin Name:        WrAIter Light - AI Assisted Autocontent Elementor support Light Version
 * Plugin URI:        https://wraiter.balcomsoft.com
 * Description:       WrAIter Light - AI Assisted Autocontent Elementor support Light Version
 * Version:           1.2.0
 * Author:            Balcomsoft
 * Author URI:        https://www.balcomsoft.com/
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       wraiter-light
 * Domain Path:       /languages
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}
define( 'WRAITER_LIGHT_VERSION', '1.1.0' );
define( 'WRAITER_LIGHT_FILE', __FILE__ );
define( 'WRAITER_LIGHT_PATH', dirname( WRAITER_LIGHT_FILE ) );
define( 'WRAITER_LIGHT_URL', plugin_dir_url( WRAITER_LIGHT_FILE ) );
define( 'WRAITER_LIGHT_ASSETS', WRAITER_LIGHT_URL . 'assets' );
define( 'WRAITER_LIGHT_ELEMENTOR_PATH', WRAITER_LIGHT_PATH . '/includes' );



/**
 * The core plugin class that is used to load.
 */
require plugin_dir_path( __FILE__ ) . '/includes/class-wraiter-light-loader.php';
