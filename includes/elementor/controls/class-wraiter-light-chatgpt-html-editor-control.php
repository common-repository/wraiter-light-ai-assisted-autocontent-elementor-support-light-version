<?php
/**
 * Html Editor control AI
 *
 * @link       https://www.balcomsoft.com/
 * @since      1.0.0
 *
 * @package    Wraiter
 * @subpackage Wraiter Light/includes
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
if ( ! class_exists( 'Wraiter_Light_ChatGPT_Html_Editor_Control' ) ) :
	/**
	 *
	 * Html Editor control for AI content generation.
	 * This class defines the Html Editor control for generating AI-generated content in Elementor.
	 * It adds several controls to the Html Editor widget, allowing users to specify the prompt, keywords,
	 * language, and generate content with the click of a button.
	 *
	 * @since      1.0.0
	 * @package    Wraiter
	 * @subpackage Wraiter Light/includes
	 */
	class Wraiter_Light_ChatGPT_Html_Editor_Control {

		/**
		 * Constructor.
		 *
		 * Add action for Elementor Html Editor widget.
		 */
		public function __construct() {
			add_action( 'elementor/element/html/section_title/before_section_end', array( $this, 'ai_content_generation_controls' ), 20, 2 );
		}

		/**
		 * AI content generation controls.
		 *
		 * Add controls to Elementor Html Editor widget.
		 *
		 * @param Controls_Stack $widget     The widget control object.
		 * @param string         $section_id The section ID.
		 */
		public function ai_content_generation_controls( $widget, $section_id ) {
			$widget->add_control(
				'wraiter_light_content_generation',
				array(
					'label'     => esc_html__( 'Wraiter Light  HTML Code AI Generation', 'wraiter-light' ),
					'type'      => \Elementor\Controls_Manager::HEADING,
					'separator' => 'before',
				)
			);
			$widget->add_control(
				'wraiter_light_type',
				array(
					'type'        => \Elementor\Controls_Manager::TEXTAREA,
					'label'       => esc_html__( 'Type for HTML Code AI Generation', 'wraiter-light' ),
					'label_block' => true,
					'rows'        => 2,
					'description' => esc_html__( 'Please specify clear instructions wit proper style and syntax for HTML CODE AI Generation', 'wraiter-light' ),
					'dynamic'     => array(
						'active' => true,
					),
				)
			);
			$widget->add_control(
				'wraiter_light_generate',
				array(
					'type'        => \Elementor\Controls_Manager::BUTTON,
					'label'       => '',
					'separator'   => 'before',
					'show_label'  => false,
					'text'        => esc_html__( 'Generate and Insert', 'wraiter-light' ),
					'button_type' => 'default',
					'event'       => 'wraiterlight:htmlcontent:request',
				)
			);
		}
	}

	new Wraiter_Light_ChatGPT_Html_Editor_Control();
endif;
