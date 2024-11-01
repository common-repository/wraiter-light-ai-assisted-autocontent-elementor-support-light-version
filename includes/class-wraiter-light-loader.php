<?php
/**
 * Register all actions and filters for the plugin
 *
 * @link       https://www.balcomsoft.com/
 * @since      1.0.0
 *
 * @package    Wraiter
 * @subpackage Wraiter Light/includes
 */

/**
 * Register all actions and filters for the plugin.
 *
 * Maintain a list of all hooks that are registered throughout
 * the plugin, and register them with the WordPress API. Call the
 * run function to execute the list of actions and filters.
 *
 * @package    Wraiter
 * @subpackage Wraiter Light/includes
 * @author     Balcomsoft <info@balcomsoft.com>
 */
class Wraiter_Light_Loader {

	/**
	 * The unique identifier of this plugin.
	 *
	 * @since    1.0.0
	 * @access   protected
	 * @var      string $plugin_name The string used to uniquely identify this plugin.
	 */
	protected $plugin_name;

	/**
	 * The current version of the plugin.
	 *
	 * @since    1.0.0
	 * @access   protected
	 * @var      string $version The current version of the plugin.
	 */
	protected $version;

	/**
	 * Initialize the collections used to maintain the actions and filters.
	 *
	 * @since    1.0.0
	 */
	public function __construct() {

		if ( defined( 'WRAITER_LIGHT_VERSION' ) ) {
			$this->version = WRAITER_LIGHT_VERSION;
		} else {
			$this->version = '1.0.0';
		}
		$this->plugin_name = 'wraiter-light';
		require_once WRAITER_LIGHT_PATH . '/includes/helpers.php';
		require_once WRAITER_LIGHT_PATH . '/includes/global-functions.php';
		require_once WRAITER_LIGHT_PATH . '/includes/settings.php';
		require_once WRAITER_LIGHT_PATH . '/includes/ad-banner.php';
		wraiter_light_core_autoload( WRAITER_LIGHT_ELEMENTOR_PATH . '/helpers/' );
		require_once WRAITER_LIGHT_PATH . '/includes/gutenberg/gutenberg.php';
		if ( ! class_exists( 'Wraiter_Light_Elementor_Widgets' ) ) {
			wraiter_light_core_autoload( WRAITER_LIGHT_ELEMENTOR_PATH . '/elementor/controls/' );
		}
		add_action( 'plugins_loaded', array( $this, 'plugins_loaded' ) );
		add_action( 'elementor/editor/before_enqueue_scripts', array( $this, 'enqueue_text_editor_scripts' ) );
		add_action( 'elementor/frontend/after_register_scripts', array( $this, 'enqueue_text_editor_stm_scripts' ) );
	}

	/**
	 * PLugins loaded.
	 *
	 * @since    1.0.0
	 */
	public function plugins_loaded() {
		$this->load_plugin_textdomain();

	}

	/**
	 * Load the plugin text domain for translation.
	 *
	 * @since    1.0.0
	 */
	public function load_plugin_textdomain() {

		load_plugin_textdomain(
			'wraiter-light',
			false,
			dirname( dirname( plugin_basename( __FILE__ ) ) ) . '/languages/'
		);
	}

	/**
	 * Load Frontend Scripts
	 */
	public function enqueue_text_editor_scripts() {

		wp_enqueue_script( 'jquery-ui-dialog' );
		wp_enqueue_style( 'wp-jquery-ui-dialog' );
		$wraiter_light_enqueu_val = array(
			'wraiter-light-globals-scripts'               => 'wraiter-light-globals.js',
			'wraiter-light-elementor-text-editor-scripts' => 'text-editor.js',
			'wraiter-light-elementor-heading-scripts'     => 'heading.js',
			'wraiter-light-elementor-html-editor-scripts' => 'html-editor.js',
			'wraiter-light-elementor-code-highlight-scripts' => 'code-highlight.js',
			'wraiter-light-testimonials'                  => 'wraiter-light-testimonials.js',
			'wraiter-light-blockquote'                    => 'wraiter-light-blockquote.js',
			'wraiter-light-elementor-wp-text-editor-scripts' => 'wp-text-editor.js',
		);
		$ajax_params              = array(
			'ajax_url'                      => admin_url( 'admin-ajax.php' ),
			'wraiter_light_aicontent_nonce' => wp_create_nonce( 'wraiter_light_aicontent_nonce' ),
		);
		foreach ( $wraiter_light_enqueu_val as $enque_string => $filenames ) {
			if ( 'wraiter-light-globals-scripts' === $enque_string ) {
				$script_dependence = array( 'jquery', 'wp-i18n', 'jquery-ui-dialog' );
			} else {
				$script_dependence = array( 'jquery', 'wp-i18n', 'jquery-ui-dialog', 'wraiter-light-globals-scripts' );
			}
			wp_enqueue_script( $enque_string, WRAITER_LIGHT_URL . "assets/js/{$filenames}", $script_dependence, time(), true );
			wp_localize_script( $enque_string, 'wraiter_light_ajax_object', $ajax_params );
			wp_set_script_translations(
				$enque_string,
				'wraiter-light',
				WRAITER_LIGHT_PATH . 'languages'
			);
		}
		$wraiter_light_enqueu_style_val = array(
			'wraiter-light-globals-style' => 'wraiter-light-style.css',
		);
		foreach ( $wraiter_light_enqueu_style_val as $enque_string => $filenames ) {
			wp_enqueue_style( $enque_string, WRAITER_LIGHT_URL . "assets/css/{$filenames}", array(), time(), 'all' );
		}
	}

	/**
	 * Load Frontend Scripts
	 */
	public function enqueue_text_editor_stm_scripts() {

		wp_enqueue_script( 'jquery-ui-dialog' );
		wp_enqueue_style( 'wp-jquery-ui-dialog' );
		$wraiter_light_enqueu_val = array(
			'wraiter-light-globals-scripts' => 'wraiter-light-globals.js',
			'wraiter-light-elementor-wp-text-editor-scripts' => 'wp-text-editor.js',
		);
		$ajax_params              = array(
			'ajax_url'                      => admin_url( 'admin-ajax.php' ),
			'wraiter_light_aicontent_nonce' => wp_create_nonce( 'wraiter_light_aicontent_nonce' ),
		);
		foreach ( $wraiter_light_enqueu_val as $enque_string => $filenames ) {
			if ( 'wraiter-light-globals-scripts' === $enque_string ) {
				$script_dependence = array( 'jquery', 'wp-i18n', 'jquery-ui-dialog' );
			} else {
				$script_dependence = array( 'jquery', 'wp-i18n', 'jquery-ui-dialog', 'wraiter-light-globals-scripts' );
			}
			$script_dependence = array();
			wp_enqueue_script( $enque_string, WRAITER_LIGHT_URL . "assets/js/{$filenames}", $script_dependence, time(), true );
			wp_localize_script( $enque_string, 'wraiter_light_ajax_object', $ajax_params );
			wp_set_script_translations(
				$enque_string,
				'wraiter-light',
				WRAITER_LIGHT_PATH . 'languages'
			);
		}
	}
}

new Wraiter_Light_Loader();
