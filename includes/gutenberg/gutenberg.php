<?php
/**
 * Blockquote control AI
 *
 * @link       https://www.balcomsoft.com/
 * @since      1.0.0
 *
 * @package    Wraiter
 * @subpackage Wraiter/includes
 */

/**
 * Blockquote control AI
 *
 * @link       https://www.balcomsoft.com/
 * @since      1.0.0
 *
 * @package    Wraiter
 * @subpackage Wraiter/includes
 */
function wraiter_light__build_plugin_js_config() {
	$available_sizes           = array();
	$nonce                     = wp_create_nonce( 'wp_rest' );
	$code                      = get_locale();
	$wraiter_light_script_vars = array(
		'ajax_url'                      => admin_url( 'admin-ajax.php' ),
		'wraiter_light_aicontent_nonce' => wp_create_nonce( 'wraiter_light_aicontent_nonce' ),
		'nonce'                         => $nonce,
		'siteUrl'                       => get_site_url(),
		'pluginUrl'                     => plugin_dir_url( __FILE__ ),
		'selectedLanguage'              => wraiter_get_language( $code ),
		'prompts'                       => array(
			'paragraph' => array(
				'menuTitle'              => 'Write a paragraph onit',
				'requiresTextSelection'  => 1,
				'icon'                   => 'paragraph',
				'generatedTextPlacement' => 'below',
			),
		),
	);
	$wraiter_light_script_vars['isOpenAIKeyValid'] = true;

	return $wraiter_light_script_vars;
}

/**
 * Enqueue the script and style files for the block editor.
 *
 * @since 1.0.0
 */
function wraiter_light_plugin_enqueue_scripts() {

	wp_enqueue_script( 'wraiter-light-plugin-script', plugin_dir_url( __FILE__ ) . '/build/index.js', array( 'jquery' ), time(), true );
	wp_localize_script( 'wraiter-light-plugin-script', 'wraiterLightConfig', wraiter_light__build_plugin_js_config() );
	wp_enqueue_style( 'wraiter-light-plugin-style', plugin_dir_url( __FILE__ ) . 'popup.css', array(), time() );
}

add_action( 'enqueue_block_editor_assets', 'wraiter_light_plugin_enqueue_scripts' );
/**
 * Register the block.
 *
 * @since 1.0.0
 */
function wraiter_light_plugin_register_button() {

	if ( ! function_exists( 'register_block_type' ) ) {
		return;
	}
	register_block_type(
		'wraiter-light-plugin/button',
		array(
			'editor_script' => 'wraiter-light-plugin-script',
		)
	);
}

add_action( 'init', 'wraiter_light_plugin_register_button' );
/**
 * Get language
 *
 * @param string $code The language code.
 *
 * @return string The language name.
 * @since 1.0.0
 */
function wraiter_get_language( $code ) {
	$languages = array(
		'af'             => 'Afrikaans',
		'ar'             => 'Arabic',
		'ary'            => 'Moroccan Arabic',
		'as'             => 'Assamese',
		'az'             => 'Azerbaijani',
		'azb'            => 'South Azerbaijani',
		'ba'             => 'Bashkir',
		'bel'            => 'Belarusian',
		'bg_BG'          => 'Bulgarian',
		'bn_BD'          => 'Bengali (Bangladesh)',
		'bn_IN'          => 'Bengali (India)',
		'bo'             => 'Tibetan',
		'br'             => 'Breton',
		'bs_BA'          => 'Bosnian',
		'ca'             => 'Catalan',
		'ceb'            => 'Cebuano',
		'cs_CZ'          => 'Czech',
		'cy'             => 'Welsh',
		'da_DK'          => 'Danish',
		'de_DE_formal'   => 'German (Formal)',
		'de_CH_informal' => 'Swiss German (Informal)',
		'de_CH'          => 'Swiss German',
		'de_DE'          => 'German',
		'dv'             => 'Divehi',
		'el'             => 'Greek',
		'en_AU'          => 'English (Australia)',
		'en_CA'          => 'English (Canada)',
		'en_GB'          => 'English (UK)',
		'en_NZ'          => 'English (New Zealand)',
		'en_ZA'          => 'English (South Africa)',
		'en'             => 'English',
		'en_US'          => 'English',
		'eo'             => 'Esperanto',
		'es_AR'          => 'Spanish (Argentina)',
		'es_CL'          => 'Spanish (Chile)',
		'es_CO'          => 'Spanish (Colombia)',
		'es_CR'          => 'Spanish (Costa Rica)',
		'es_EC'          => 'Spanish (Ecuador)',
		'es_ES'          => 'Spanish (Spain)',
		'es_MX'          => 'Spanish (Mexico)',
		'es_PE'          => 'Spanish (Peru)',
		'es_UY'          => 'Spanish (Uruguay)',
		'es_VE'          => 'Spanish (Venezuela)',
		'es'             => 'Spanish',
		'et'             => 'Estonian',
		'eu'             => 'Basque',
		'fa_AF'          => 'Persian (Afghanistan)',
		'fa_IR'          => 'Persian (Iran)',
		'fi'             => 'Finnish',
		'fr_BE'          => 'French (Belgium)',
		'fr_CA'          => 'French (Canada)',
		'fr_CH'          => 'French (Switzerland)',
		'fr_FR'          => 'French',
		'fur'            => 'Friulian',
		'fy'             => 'Frisian',
		'ga'             => 'Irish',
		'gd'             => 'Scottish Gaelic',
		'gl_ES'          => 'Galician',
		'gu_IN'          => 'Gujarati',
		'he_IL'          => 'Hebrew',
		'hi_IN'          => 'Hindi',
		'hr'             => 'Croatian',
		'hsb'            => 'Upper Sorbian',
		'hu_HU'          => 'Hungarian',
		'hy'             => 'Armenian',
		'id_ID'          => 'Indonesian',
		'is_IS'          => 'Icelandic',
		'it_CH'          => 'Italian (Switzerland)',
		'it_IT'          => 'Italian',
		'ja'             => 'Japanese',
		'jv_ID'          => 'Javanese',
		'ka_GE'          => 'Georgian',
		'kk'             => 'Kazakh',
		'km'             => 'Khmer',
		'kn'             => 'Kannada',
		'ko_KR'          => 'Korean',
		'kok'            => 'Konkani',
		'ku'             => 'Kurdish',
		'ky_KY'          => 'Kyrgyz',
		'la'             => 'Latin',
		'lb_LU'          => 'Luxembourgish',
		'lt_LT'          => 'Lithuanian',
		'lv'             => 'Latvian',
		'mk_MK'          => 'Macedonian',
		'ml_IN'          => 'Malayalam',
		'mn'             => 'Mongolian',
		'mr'             => 'Marathi',
		'ms_MY'          => 'Malay',
		'mt_MT'          => 'Maltese',
		'my_MM'          => 'Burmese',
		'nb_NO'          => 'Norwegian (Bokmål)',
		'ne_NP'          => 'Nepali',
		'nl_BE'          => 'Dutch (Belgium)',
		'nl_NL'          => 'Dutch',
		'nn_NO'          => 'Norwegian (Nynorsk)',
		'oci'            => 'Occitan',
		'pa_IN'          => 'Punjabi',
		'pl_PL'          => 'Polish',
		'ps'             => 'Pashto',
		'pt_BR'          => 'Portuguese (Brazil)',
		'pt_PT'          => 'Portuguese (Portugal)',
		'rhg'            => 'Rohingya',
		'ro_RO'          => 'Romanian',
		'ru_RU'          => 'Russian',
		'sa_IN'          => 'Sanskrit',
		'se_NO'          => 'Northern Sami',
		'si_LK'          => 'Sinhala',
		'sk_SK'          => 'Slovak',
		'sl_SI'          => 'Slovenian',
		'sq'             => 'Albanian',
		'sr_RS'          => 'Serbian (Cyrillic)',
		'su_ID'          => 'Sundanese',
		'sv_SE'          => 'Swedish',
		'sw'             => 'Swahili',
		'ta_IN'          => 'Tamil',
		'te'             => 'Telugu',
		'th'             => 'Thai',
		'tl'             => 'Tagalog',
		'tr_TR'          => 'Turkish',
		'tt_RU'          => 'Tatar',
		'tah'            => 'Tahitian',
		'ug_CN'          => 'Uighur',
		'uk'             => 'Ukrainian',
		'ur'             => 'Urdu',
		'uz_UZ'          => 'Uzbek',
		'vi'             => 'Vietnamese',
		'xmf'            => 'Mingrelian',
		'zh_CN'          => 'Chinese (Simplified)',
		'zh_HK'          => 'Chinese (Hong Kong)',
		'zh_TW'          => 'Chinese (Traditional)',
	);
	$language  = ( empty( $languages[ $code ] ) ) ? 'English' : $languages[ $code ];

	return $language;
}
