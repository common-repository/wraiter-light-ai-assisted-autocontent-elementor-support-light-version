<?php
/**
 * Autoload.
 *
 * @author  Balcomsoft
 * @package Wraiter Light
 * @version 1.0.0
 * @since   1.0.0
 */

if ( ! function_exists( 'wraiter_light_core_autoload' ) ) {
	/**
	 * Locate class files to load
	 *
	 * @param string $path path to class file.
	 *
	 * @return void
	 */
	function wraiter_light_core_autoload( $path ) {
		$items = glob( $path . DIRECTORY_SEPARATOR . '*' );
		foreach ( $items as $item ) {
			if ( is_file( $item ) ) {
				$basename = basename( $item );
				if ( 'php' === pathinfo( $item )['extension']
					&& ( false !== strpos( $basename, 'class-wraiter-light-' ) || strpos( $basename, 'wraiter-light-' ) !== false )
				) {
					require_once $item;
				}
			}
		}
		// Load files in subdirectories.
		foreach ( $items as $item ) {
			if ( is_dir( $item ) ) {
				wraiter_light_core_autoload( $item );
			}
		}
	}
}
if ( ! function_exists( 'wraiter_light_elementor_status' ) ) {
	/**
	 * Elementor status check
	 *
	 * @return bool
	 * @author Balcomsoft
	 */
	function wraiter_light_elementor_status() {
		$elementor_path    = 'elementor/elementor.php';
		$installed_plugins = get_plugins();

		return isset( $installed_plugins[ $elementor_path ] );
	}
}

