<?php
/**
 * Code Highlight Editor control AI
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
if ( ! class_exists( 'Wraiter_Light_ChatGPT_Code_Editor_Control' ) ) :
	/**
	 *
	 * Code Highlight Editor control for AI content generation.
	 * This class defines the Code Highlight Editor control for generating AI-generated content in Elementor.
	 * It adds several controls to the Code Highlight Editor widget, allowing users to specify the prompt, keywords,
	 * language, and generate content with the click of a button.
	 *
	 * @since      1.0.0
	 * @package    Wraiter
	 * @subpackage Wraiter Light/includes
	 */
	class Wraiter_Light_ChatGPT_Code_Editor_Control {

		/**
		 * Constructor.
		 *
		 * Add action for Elementor Code Highlight Editor widget.
		 */
		public function __construct() {
			add_action( 'elementor/element/code-highlight/section_content/before_section_end', array( $this, 'ai_content_generation_controls' ), 20, 2 );
		}

		/**
		 * AI content generation controls.
		 *
		 * Add controls to Elementor Code Highlight Editor widget.
		 *
		 * @param Controls_Stack $widget     The widget control object.
		 * @param string         $section_id The section ID.
		 */
		public function ai_content_generation_controls( $widget, $section_id ) {
			$widget->add_control(
				'wraiter_light_content_generation',
				array(
					'label'     => esc_html__( 'Wraiter Light Code Highlight AI Generation', 'wraiter-light' ),
					'type'      => \Elementor\Controls_Manager::HEADING,
					'separator' => 'before',
				)
			);
			$widget->add_control(
				'wraiter_light_type',
				array(
					'type'        => \Elementor\Controls_Manager::TEXTAREA,
					'label'       => esc_html__( 'Type for Code Highlight AI Generation', 'wraiter-light' ),
					'label_block' => true,
					'rows'        => 2,
					'description' => esc_html__( 'Please type clear instructions/topic and type programming language in which the code should be generated for Code Highlight AI Generation', 'wraiter-light' ),
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
					'event'       => 'wraiterlight:codecontent:request',
				)
			);
		}

		/**
		 * AI content generation controls.
		 *
		 * Add controls to Elementor text editor widget.
		 *
		 * @param Controls_Stack $widget     The widget control object.
		 * @param string         $section_id The section ID.
		 */
		public function ai_content_after_generation_controls( $widget, $section_id ) {
			$widget->start_controls_section(
				'wraiter_light_text_settings_section',
				array(
					'label' => esc_html__( 'Ai Text Content Wraiter Light Settings', 'wraiter-light' ),
					'tab'   => \Elementor\Controls_Manager::TAB_CONTENT,
				)
			);
			$widget->add_control(
				'wraiter_light_suggestions',
				array(
					'type'        => \Elementor\Controls_Manager::SELECT,
					'label'       => esc_html__( 'Number of Blockquotes contents suggestions', 'wraiter-light' ),
					'description' => esc_html__( 'Please select Number of Blockquotes contents suggestions.', 'wraiter-light' ),
					'options'     => wraiter_light_get_numbers_array(),
					'default'     => 1,
				)
			);
			$widget->end_controls_section();
		}
	}

	new Wraiter_Light_ChatGPT_Code_Editor_Control();
endif;

