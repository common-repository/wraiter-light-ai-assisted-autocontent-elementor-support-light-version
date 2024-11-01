<?php
/**
 * Ad Banners.
 *
 * @author  Balcomsoft
 * @package Wraiter Light
 * @version 1.0.0
 * @since   1.0.0
 */

/**
 * WraiterLight function to banner widget
 */
function wraiter_light_display_ad_banner_widget() {
	wp_add_dashboard_widget(
		'wraiter_light_ad_banner_widget',
		'Announcement by Balcomsoft',
		'wraiter_light_display_ad_banner_content'
	);
}

/**
 * WraiterLight function to banner widget
 */
function wraiter_light_display_ad_banner_content() {
	$urls       = wraiter_light_get_banner_plugin_urls();
	$banner_url = isset( $urls['banner_url'] ) ? $urls['banner_url'] : '';
	$plugin_url = isset( $urls['plugin_url'] ) ? $urls['plugin_url'] : '';
	wraiter_light_get_banner_plugin_urls();
	?>
	<div style="text-align: center;">
		<a href="<?php echo esc_url( $plugin_url ); ?>"><img style="width: 100%;" src="<?php echo esc_url( $banner_url ); ?>"/></a>
	</div>
	<?php
}

/**
 * Hook the function to the admin_notices action
 */
add_action( 'wp_dashboard_setup', 'wraiter_light_display_ad_banner_widget' );
/**
 * Display the ad banner popup in the WordPress dashboard.
 */
function wraiter_light_display_ad_banner_popup() {

	$transient = get_transient( 'wraiter_light_ad_banner_popup_dismissed' );
	if ( $transient ) {
		return;
	}
	$urls       = wraiter_light_get_banner_plugin_urls();
	$banner_url = isset( $urls['banner_url'] ) ? $urls['banner_url'] : '';
	$plugin_url = isset( $urls['plugin_url'] ) ? $urls['plugin_url'] : '';
	?>
	<script>
		jQuery(document).ready(function ($) {

			var bannerPopup = '<div id="wraiter_light_ad-banner-popup" style="display:none; position:fixed; top:50%; left:50%; transform:translate(-50%, -50%); background-color:#50575e85; padding:20px; border-radius:10px;">';
			bannerPopup += '<a href="#" id="wraiter_light_close-banner-popup" style="float:right;font-size: 16px;color: white;	position: absolute;right:5px;font-weight:bold;">X</a>';
			bannerPopup += '<a href="<?php echo esc_url( $plugin_url ); ?>"><img src="<?php echo esc_url( $banner_url ); ?>" /></a>';
			bannerPopup += '</div>';
			$("body").append(bannerPopup);

			setTimeout(function () {
				$("#wraiter_light_ad-banner-popup").fadeIn();
			}, 1000);

			$("#wraiter_light_close-banner-popup").click(function (e) {
				e.preventDefault();
				$("#wraiter_light_ad-banner-popup").fadeOut();
				$.post(
						ajaxurl,
						{
							action: 'wraiter_light_dismiss_ad_banner_popup'
						}
				);
			});

			$(document).mouseup(function (e) {
				var container = $("#wraiter_light_ad-banner-popup");
				if (!container.is(e.target) && container.has(e.target).length === 0) {
					container.fadeOut();
					$.post(
							ajaxurl,
							{
								action: 'wraiter_light_dismiss_ad_banner_popup'
							}
					);
				}
			});
		});
	</script>
	<?php
}

/**
 * Callback function to dismiss the ad banner popup.
 */
function wraiter_light_dismiss_ad_banner_popup_callback() {

	set_transient( 'wraiter_light_ad_banner_popup_dismissed', 5, DAY_IN_SECONDS );
	wp_die();
}

/**
 * Add the AJAX action to dismiss the popup.
 */
add_action( 'wp_ajax_wraiter_light_dismiss_ad_banner_popup', 'wraiter_light_dismiss_ad_banner_popup_callback' );
/**
 * Hook the function to display the popup in the WordPress dashboard footer.
 */
add_action( 'admin_footer', 'wraiter_light_display_ad_banner_popup' );
/**
 * Get Banner url.
 *
 * @return array|mixed
 * @author Balcomsoft
 */
function wraiter_light_get_banner_plugin_urls() {
	$url      = 'https://wraiter.balcomsoft.com/banner_templatemonster_plugin_urls.json';
	$response = wp_remote_get( $url );
	if ( is_wp_error( $response ) || wp_remote_retrieve_response_code( $response ) !== 200 ) {
		return array();
	}
	$body = wp_remote_retrieve_body( $response );
	$data = json_decode( $body, true );
	if ( ! is_array( $data ) ) {
		return array();
	}

	return $data;
}

