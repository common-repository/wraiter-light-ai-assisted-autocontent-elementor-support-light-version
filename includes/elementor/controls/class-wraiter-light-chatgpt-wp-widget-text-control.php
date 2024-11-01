<?php
/**
 * Widget Text editor control AI
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
if ( ! class_exists( 'Wraiter_Light_ChatGPT_Wp_Widget_Text_Control' ) ) :
	/**
	 *
	 * Text editor control for AI content generation.
	 * This class defines the text editor control for generating AI-generated content in Elementor.
	 * It adds several controls to the text editor widget, allowing users to specify the prompt, keywords,
	 * language, and generate content with the click of a button.
	 *
	 * @since      1.0.0
	 * @package    Wraiter
	 * @subpackage Wraiter Light/includes
	 */
	class Wraiter_Light_ChatGPT_Wp_Widget_Text_Control {

		/**
		 * Constructor.
		 *
		 * Add action for Elementor text editor widget.
		 */
		public function __construct() {
			add_action( 'in_widget_form', array( $this, 'ai_content_generation_controls' ), 20, 3 );
		}

		/**
		 * AI content generation controls.
		 *
		 * Add controls to Elementor text editor widget.
		 *
		 * @param object $instance Instance object.
		 * @param string $section_id The section ID.
		 * @param object $widget_data     The widget control object.
		 */
		public function ai_content_generation_controls( $instance, $section_id, $widget_data ) {
			if ( 'text' === $instance->id_base ) :
				?>
				<div class="elementor-control elementor-control-wraiter_light_content_generation elementor-control-type-heading elementor-label-block elementor-control-separator-before">
					<div class="elementor-control-content">
						<div class="elementor-control-field">
							<h3 class="elementor-control-title">
								<?php echo esc_html__( 'Wraiter Light AI Content Generation', 'wraiter-light' ); ?>
							</h3>
						</div>
					</div>
				</div>
				<div class="elementor-control elementor-control-wraiter_light_language elementor-control-type-select elementor-label-inline elementor-control-separator-default">
					<div class="elementor-control-content">
						<div class="elementor-control-field">
							<label for="elementor-control-default-c4530" class="elementor-control-title">
								<?php echo esc_html__( 'Choose Language', 'wraiter-light' ); ?>
							</label>

							<div class="elementor-control-input-wrapper elementor-control-unit-5">
								<select id="wraiter_light_language_select" data-setting="wraiter_light_language">
									<?php foreach ( wraiter_light_get_language_options() as $key => $value ) : ?>
										<option value="<?php echo esc_attr( $key ); ?>"><?php echo esc_html( $value ); ?></option>
									<?php endforeach; ?>
								</select>
							</div>
						</div>

						<div class="elementor-control-field-description">
							<?php echo esc_html__( 'Autocontent in the selected language.', 'wraiter-light' ); ?>
						</div>

					</div>
				</div>

				<div class="elementor-control elementor-control-wraiter_light_type elementor-control-type-textarea elementor-label-block elementor-control-separator-default elementor-control-dynamic">
					<div class="elementor-control-content">
						<div class="elementor-control-field">
							<label for="elementor-control-default-c4529" class="elementor-control-title">
								<?php echo esc_html__( 'Type Text for Title Content Generation', 'wraiter-light' ); ?>
							</label>
							<div class="elementor-control-input-wrapper elementor-control-dynamic-switcher-wrapper">
								<textarea id="wraiter_light_title_content" class="elementor-control-tag-area" rows="10" data-setting="wraiter_light_type" placeholder=""></textarea>
							</div>
						</div>

						<div class="elementor-control-field-description">
							<?php
							echo esc_html__(
								'Please specify the 
						topic and provide detailed instructions for the content 
						you wish to be created. Additionally, 
						you may copy and paste pre-existing content 
						and request the AI to refine the style, 
						correct grammar errors or rewrite
						the content for you.',
								'wraiter-light'
							)
							?>
						</div>

					</div>
				</div>
				<div class="elementor-control elementor-control-wraiter_light_generate elementor-control-type-button elementor-label-inline elementor-control-separator-before elementor-control-hidden-label">
					<div class="elementor-control-content">
						<div class="elementor-control-field">
							<label class="elementor-control-title"></label>
							<div class="elementor-control-input-wrapper">
								<button type="button" class="elementor-button elementor-button-default" id="wraiter-light-title_generate">
									<?php echo esc_html__( 'Title Generate and Insert', 'wraiter-light' ); ?>
								</button>
							</div>
						</div>

					</div>
				</div>
				<div class="elementor-control elementor-control-wraiter_light_type elementor-control-type-textarea elementor-label-block elementor-control-separator-default elementor-control-dynamic">
					<div class="elementor-control-content">
						<div class="elementor-control-field">
							<label for="elementor-control-default-c4529" class="elementor-control-title">
								<?php echo esc_html__( 'Prompt Text for Editor Content Generation', 'wraiter-light' ); ?>
							</label>
							<div class="elementor-control-input-wrapper elementor-control-dynamic-switcher-wrapper">
								<textarea id="wraiter_light_textarea_content" class="elementor-control-tag-area" rows="10" data-setting="wraiter_light_type" placeholder=""></textarea>
							</div>
						</div>

						<div class="elementor-control-field-description">
							<?php
							echo esc_html__(
								'Please specify the 
						topic and provide detailed instructions for the content 
						you wish to be created. Additionally, 
						you may copy and paste pre-existing content 
						and request the AI to refine the style, 
						correct grammar errors or rewrite
						the content for you.',
								'wraiter-light'
							)
							?>
						</div>

					</div>
				</div>
				<div class="elementor-control elementor-control-wraiter_light_generate elementor-control-type-button elementor-label-inline elementor-control-separator-before elementor-control-hidden-label">
					<div class="elementor-control-content">
						<div class="elementor-control-field">
							<label class="elementor-control-title"></label>
							<div class="elementor-control-input-wrapper">
								<button type="button" class="elementor-button elementor-button-default" id="wraiter-light-textarea_generate">
									<?php echo esc_html__( 'Generate and Insert', 'wraiter-light' ); ?>
								</button>
							</div>
						</div>

					</div>
				</div>
				<?php
			endif;
		}
	}

	new Wraiter_Light_ChatGPT_Wp_Widget_Text_Control();
endif;

