<?php
/**
 * Wraiter Light Ai content generate.
 *
 * @author  Balcomsoft
 * @package Wraiter Light
 * @version 1.0.0
 * @since   1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
if ( ! class_exists( ' Wraiter_Light_AI_Openai_Request' ) ) {
	require_once 'class-wraiter-light-ai-openai-request.php';
}
if ( ! class_exists( 'Wraiter_Light_Ai_Content_Generate' ) ) :
	/**
	 * Ai content Generate.
	 *
	 * @author  Balcomsoft
	 */
	class Wraiter_Light_Ai_Content_Generate extends Wraiter_Light_AI_Openai_Request {

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
			$this->version = WRAITER_LIGHT_VERSION;
			add_action( 'wp_ajax_nopriv_wraiter_light_ai_generate_content', array( $this, 'wraiter_light_ai_generate_content' ) );
			add_action( 'wp_ajax_wraiter_light_ai_generate_content', array( $this, 'wraiter_light_ai_generate_content' ) );
			add_action( 'wp_ajax_nopriv_wraiter_light_ai_generate_html', array( $this, 'wraiter_light_ai_generate_html' ) );
			add_action( 'wp_ajax_wraiter_light_ai_generate_html', array( $this, 'wraiter_light_ai_generate_html' ) );

		}

		/**
		 * Ai Content Generation.
		 *
		 * @throws Exception Exceptions.
		 * @author Balcomsoft
		 */
		public function wraiter_light_ai_generate_content() {
			try {
				check_ajax_referer( 'wraiter_light_aicontent_nonce', '_ajax_nonce-wraiter_light_aicontent_nonce' );
				$content_params = array();
				$settings       = get_option( 'wraiter_light_options' );
				$model_params   = $this->sanitize_text_or_array_field( $settings );
				$post_requests  = array(
					'type',
					'keywords',
					'language',
					'wraiter_light_image',
					'wraiter_light_writing_style',
					'wraiter_light_writing_tone',
					'wraiter_light_suggestions',
				);
				foreach ( $post_requests as $key ) {
					if ( ! empty( $_POST[ $key ] ) ) {
						$content_params[ $key ] = sanitize_text_field( wp_unslash( $_POST[ $key ] ) );
					}
				}
				$output = '';
				$prompt = 'Write content based on this instruction follows the text: ' . $content_params['type'] . '. ';
				if ( ! empty( $content_params['keywords'] ) ) {
					$prompt .= 'with these keywords: ' . $content_params['keywords'] . '. ';
				}
				$prompt .= 'in this language: ' . $content_params['language'] . '. ';
				if ( ! empty( $content_params['wraiter_light_writing_style'] ) ) {
					$prompt .= 'Style: ' . $content_params['wraiter_light_writing_style'] . '. ';
				}
				if ( ! empty( $content_params['wraiter_light_writing_tone'] ) ) {
					if ( 'Default' !== $content_params['wraiter_light_writing_tone'] ) {
						$prompt .= 'Tone: ' . $content_params['wraiter_light_writing_tone'] . '. ';
					}
				}
				$n               = ( ! empty( $content_params['wraiter_light_suggestions'] ) ) ? $content_params['wraiter_light_suggestions'] : 1;
				$call_params     = array(
					'model'             => $model_params['wraiter_light_gpt3_model'],
					'max_tokens'        => intval( $model_params['wraiter_light_max_tokens'] ),
					'temperature'       => floatval( $model_params['wraiter_light_temperature'] ),
					'top_p'             => 1,
					'n'                 => (int) $n,
					'stream'            => false,
					'frequency_penalty' => floatval( $model_params['wraiter_light_frequency_penalty'] ),
					'presence_penalty'  => floatval( $model_params['wraiter_light_presence_penalty'] ),
				);
				$wr_chat_mode    = false;
				$array_chat_mode = array( 'gpt-3.5-turbo', 'gpt-4', 'gpt-4-32k' );
				if ( in_array( $call_params['model'], $array_chat_mode, true ) ) {
					$wr_chat_mode = true;
				}
				if ( $wr_chat_mode ) {
					$url                     = 'https://api.openai.com/v1/chat/completions';
					$call_params['messages'] = array(
						array(
							'role'    => 'user',
							'content' => $prompt,
						),
					);
				} else {
					$url                    = 'https://api.openai.com/v1/completions';
					$call_params['prompt']  = $prompt;
					$call_params['best_of'] = 1;
				}
				$response = $this->request( $call_params, $url );
				$output   = array();
				foreach ( $response['choices'] as $choises ) {
					if ( $wr_chat_mode ) {
						$output[] = $choises ['message']['content'];
					} else {
						$output[] = $choises['text'];
					}
				}
				wp_send_json_success( $output );
			} catch ( \Throwable $throwable ) {
				wp_send_json_error( esc_html__( 'Error! ', 'wraiter-light' ) . $throwable->getMessage() );
			} catch ( \Exception $exception ) {
				wp_send_json_error( esc_html__( 'Error! ', 'wraiter-light' ) . $exception->getMessage() );
			}
		}

		/**
		 * Write html content.
		 *
		 * @author Balcomsfot.
		 */
		public function wraiter_light_ai_generate_html() {

			check_ajax_referer( 'wraiter_light_aicontent_nonce', '_ajax_nonce-wraiter_light_aicontent_nonce' );
			$prompt       = '';
			$settings     = get_option( 'wraiter_light_options' );
			$model_params = $this->sanitize_text_or_array_field( $settings );
			if ( ! empty( $_POST['type'] ) ) {
				$prompt = sanitize_text_field( wp_unslash( $_POST['type'] ) );
			}
			$post_requests = array(
				'wraiter_light_suggestions',
			);
			foreach ( $post_requests as $key ) {
				if ( ! empty( $_POST[ $key ] ) ) {
					$content_params[ $key ] = sanitize_text_field( wp_unslash( $_POST[ $key ] ) );
				}
			}
			$n           = ( ! empty( $content_params['wraiter_light_suggestions'] ) ) ? $content_params['wraiter_light_suggestions'] : 1;
			$prompt      = 'Write content based on this instruction follows the text: ' . $prompt . '\n';
			$call_params = array(
				'model'             => $model_params['wraiter_light_gpt3_model'],
				'prompt'            => $prompt,
				'max_tokens'        => intval( $model_params['wraiter_light_max_tokens'] ),
				'temperature'       => floatval( $model_params['wraiter_light_temperature'] ),
				'top_p'             => 1,
				'n'                 => (int) $n,
				'stop'              => null,
				'stream'            => false,
				'frequency_penalty' => floatval( $model_params['wraiter_light_frequency_penalty'] ),
				'presence_penalty'  => floatval( $model_params['wraiter_light_presence_penalty'] ),
			);
			$response    = $this->request( $call_params );
			$output      = $response['choices'][0]['text'];
			wp_send_json_success( trim( $output ) );
		}

	}

	new Wraiter_Light_Ai_Content_Generate();
endif;
