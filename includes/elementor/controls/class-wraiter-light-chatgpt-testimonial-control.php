<?php
/**
 * Testimonials control AI
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
if ( ! class_exists( 'Wraiter_Light_ChatGPT_Testimonial_Control' ) ) :
	/**
	 *
	 * Testimonialscontrol for AI content generation.
	 * This class defines the text editor control for generating AI-generated content in Elementor.
	 * It adds several controls to the text editor widget, allowing users to specify the prompt, keywords,
	 * language, and generate content with the click of a button.
	 *
	 * @since      1.0.0
	 * @package    Wraiter
	 * @subpackage Wraiter Light/includes
	 */
	class Wraiter_Light_ChatGPT_Testimonial_Control {

		/**
		 * Constructor.
		 *
		 * Add action for Elementor text editor widget.
		 */
		public function __construct() {
			add_action( 'elementor/element/testimonial/section_testimonial/before_section_end', array( $this, 'ai_content_generation_controls' ), 20, 2 );
		}

		/**
		 * AI content generation controls.
		 *
		 * Add controls to Elementor text editor widget.
		 *
		 * @param Controls_Stack $widget     The widget control object.
		 * @param string         $section_id The section ID.
		 */
		public function ai_content_generation_controls( $widget, $section_id ) {
			$widget->add_control(
				'wraiter_light_content_generation',
				array(
					'label'     => esc_html__( 'Wraiter Light AI Testimonial Content Generation', 'wraiter-light' ),
					'type'      => \Elementor\Controls_Manager::HEADING,
					'separator' => 'before',
				)
			);
			$widget->add_control(
				'wraiter_light_type',
				array(
					'type'        => \Elementor\Controls_Manager::TEXTAREA,
					'label'       => esc_html__( 'Type Text for Testimonial Content Generation', 'wraiter-light' ),
					'label_block' => true,
					'rows'        => 2,
					'description' => esc_html__(
						'Please specify the topic and provide detailed instructions for the content you wish to be created. Additionally, you may copy and paste pre-existing content and request the AI to refine the style, correct grammar errors or rewrite the content for you.',
						'wraiter-light'
					),
					'dynamic'     => array(
						'active' => true,
					),
				)
			);
			$widget->add_control(
				'wraiter_light_language',
				array(
					'type'        => \Elementor\Controls_Manager::SELECT,
					'label'       => esc_html__( 'Choose Language', 'wraiter-light' ),
					'description' => esc_html__( 'Autocontent in the selected language.', 'wraiter-light' ),
					'options'     => wraiter_light_get_language_options(),
					'default'     => 'English',
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
					'description' => wp_kses_post(
						__(
							'<div style="font-size: 15px;font-style: italic;margin-top: 5px;color: #797474;" > <a target="_blank" href="https://codecanyon.net/item/wraiter-ai-assisted-autocontent-elementor-support/44224580">In the premium version of the plugin</a>, you can utilize multiple features such as the ability to create AI-generated images and generate HTML and source code using various programming languages. You can also customize content generation settings like writing style, tone, image style, and size. Moreover, multiple AI content variations are provided for prompts in a modal popup window for both text content and images. Apart from these, there are several other features available to you. </div>.',
							'wraiter-light'
						)
					),
					'event'       => 'wraiterlight:testimonial:request',
				)
			);
		}


	}

	new Wraiter_Light_ChatGPT_Testimonial_Control();
endif;

