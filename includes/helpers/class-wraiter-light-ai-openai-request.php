<?php
/**
 * Wraiter Light Ai content Request.
 *
 * @author  Balcomsoft
 * @package Wraiter Light
 * @version 1.0.0
 * @since   1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * A class to send requests to the OpenAI API using WordPress functions.
 */
class Wraiter_Light_AI_Openai_Request {
	/**
	 * The OpenAI API URL.
	 *
	 * @var string The URL to the OpenAI API.
	 */
	public static string $url = 'https://api.openai.com/v1/completions';

	/**
	 * Sends a request to the OpenAI API using the specified URL and data.
	 *
	 * @param array  $data The data to send in the request body.
	 * @param string $openai_endpoint Endpoint for url.
	 *
	 * @return array The JSON-decoded response from the OpenAI API.
	 * @throws Exception If there is an error with the API request or if the API key is missing.
	 */
	public function request( $data, $openai_endpoint = '' ) {
		$url      = ( empty( $openai_endpoint ) ) ? self::$url : $openai_endpoint;
		$settings = get_option( 'wraiter_light_options' );
		if ( empty( $settings['wraiter_light_openapi_key'] ) ) {
			throw new Exception( esc_html__( 'OpenAI API secret key is missing.', 'wraiter-light' ) );
		}
		$headers  = array(
			'Content-Type'  => 'application/json',
			'Authorization' => 'Bearer ' . esc_attr( $settings['wraiter_light_openapi_key'] ),
			'User-Agent'    => 'Wraiter_Light_AI_Openai_Request',
			'Accept'        => 'application/json',
			'Cache-Control' => 'no-cache',
		);
		$args     = array(
			'headers'     => $headers,
			'body'        => wp_json_encode( $data ),
			'method'      => 'POST',
			'timeout'     => 120,
			'redirection' => 5,
			'sslverify'   => false,
		);
		$response = wp_remote_post( esc_url( $url ), $args );
		if ( is_wp_error( $response ) ) {
			$error_message = $response->get_error_message();
			throw new Exception( str_replace( esc_attr( $settings['wraiter_light_openapi_key'] ), '----', esc_html( $error_message ) ) );
		}
		$response_body = json_decode( wp_remote_retrieve_body( $response ), true );
		if ( isset( $response_body['error'] ) ) {
			throw new Exception( str_replace( esc_attr( $settings['wraiter_light_openapi_key'] ), '----', esc_html( $response_body['error']['message'] ) ) );
		}

		return $response_body;
	}

	/**
	 *
	 * Sanitizes a given string or array by applying sanitize_text_field() on string values and recursively
	 * sanitizing array values.
	 *
	 * @param string|array $array_or_string The input to sanitize.
	 *
	 * @return string|array The sanitized output.
	 */
	public function sanitize_text_or_array_field( $array_or_string ) {
		if ( is_string( $array_or_string ) ) {
			$array_or_string = sanitize_text_field( $array_or_string );
		} elseif ( is_array( $array_or_string ) ) {
			foreach ( $array_or_string as $key => &$value ) {
				if ( is_array( $value ) ) {
					$value = sanitize_text_or_array_field( $value );
				} else {
					$value = sanitize_text_field( $value );
				}
			}
		}

		return $array_or_string;
	}
}
