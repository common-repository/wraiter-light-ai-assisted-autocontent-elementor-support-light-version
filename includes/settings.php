<?php
/**
 * Settings page.
 *
 * @author  Balcomsoft
 * @package Wraiter Light
 * @version 1.0.0
 * @since   1.0.0
 */

// Define constants for settings page.
define( 'WRAITER_LIGHT_PAGE', 'wraiter-light' );
define( 'WRAITER_LIGHT_OPTION', 'wraiter_light_options' );
define( 'WRAITER_LIGHT_SECTION_DEVELOPERS', 'wraiter_light_section_developers' );
/**
 * Custom option and settings.
 */
function wraiter_light_settings_init() {
	// Register a new setting for the wraiter light page.
	register_setting( WRAITER_LIGHT_PAGE, WRAITER_LIGHT_OPTION );
	// Register fields in the wraiter_light_section_developers section.
	$fields = array(
		array(
			'id'       => 'wraiter_light_openapi_key',
			'label'    => esc_html__( 'OpenAI API Secret Key', 'wraiter-light' ),
			'callback' => 'wraiter_light_field_pill_cb',
		),
		array(
			'id'       => 'wraiter_light_gpt3_model',
			'label'    => esc_html__( 'GPT Model', 'wraiter-light' ),
			'callback' => 'wraiter_light_field_gpt3_model_cb',
		),
		array(
			'id'       => 'wraiter_light_temperature',
			'label'    => esc_html__( 'Temperature', 'wraiter-light' ),
			'callback' => 'wraiter_light_field_temperature_cb',
		),
		array(
			'id'       => 'wraiter_light_max_tokens',
			'label'    => esc_html__( 'Max Tokens', 'wraiter-light' ),
			'callback' => 'wraiter_light_field_max_tokens_cb',
		),
		array(
			'id'       => 'wraiter_light_presence_penalty',
			'label'    => esc_html__( 'Presence Penalty', 'wraiter-light' ),
			'callback' => 'wraiter_light_field_presence_penalty_cb',
		),
		array(
			'id'       => 'wraiter_light_frequency_penalty',
			'label'    => esc_html__( 'Frequency Penalty', 'wraiter-light' ),
			'callback' => 'wraiter_light_field_frequency_penalty_cb',
		),
	);
	// Register fields in the wraiter_light_section_developers section.
	add_settings_section(
		WRAITER_LIGHT_SECTION_DEVELOPERS,
		esc_html__( 'OpenAI API Settings.', 'wraiter-light' ),
		'wraiter_light_section_developers_callback',
		WRAITER_LIGHT_PAGE
	);
	foreach ( $fields as $field ) {
		add_settings_field(
			$field['id'],
			$field['label'],
			$field['callback'],
			WRAITER_LIGHT_PAGE,
			WRAITER_LIGHT_SECTION_DEVELOPERS,
			array(
				'label_for'                 => $field['id'],
				'class'                     => 'wraiter_light_row',
				'wraiter_light_custom_data' => 'custom',
			)
		);
	}
}

/**
 * Register our wraiter_light_settings_init to the admin_init action hook.
 */
add_action( 'admin_init', 'wraiter_light_settings_init' );
/**
 * Temperature field callback function.
 *
 * @param array $args Args.
 */
function wraiter_light_field_temperature_cb( $args ) {
	$options                       = get_option( 'wraiter_light_options' );
	$options[ $args['label_for'] ] = ( ! empty( $options[ $args['label_for'] ] ) ) ? $options[ $args['label_for'] ] : '';
	?>
	<div style="width: 400px;max-width: 100%;">
		<input style="width: 400px;max-width: 100%;"
			type="number" min="0" step="0.1"
			id="<?php echo esc_attr( $args['label_for'] ); ?>"
			name="wraiter_light_options[<?php echo esc_attr( $args['label_for'] ); ?>]"
			value="<?php echo esc_attr( $options[ $args['label_for'] ] ); ?>"
		/>
		<p class="wraiter_light_description">
			<?php echo esc_html__( 'The sampling temperature to use. Higher values means the model will take more risks. Try 0.9 for more creative applications, and 0 for ones with a well-defined answer.', 'wraiter-light' ); ?>
		</p>
	</div>
	<?php
}

/**
 * Max Tokens field callback function.
 *
 * @param array $args Args.
 */
function wraiter_light_field_max_tokens_cb( $args ) {
	// Get the value of the setting we've registered with register_setting().
	$options                       = get_option( 'wraiter_light_options' );
	$options[ $args['label_for'] ] = ( ! empty( $options[ $args['label_for'] ] ) ) ? $options[ $args['label_for'] ] : '';
	?>
	<div style="width: 400px;max-width: 100%;">
		<input type="number" style="width: 400px; max-width: 100%;"
			id="<?php echo esc_attr( $args['label_for'] ); ?>"
			data-custom="<?php echo esc_attr( $args['wraiter_light_custom_data'] ); ?>"
			name="wraiter_light_options[<?php echo esc_attr( $args['label_for'] ); ?>]"
			value="<?php echo esc_attr( $options[ $args['label_for'] ] ); ?>"
		/>
		<p class="wraiter_light_description">
			<?php echo esc_html__( 'The maximum number of tokens to generate for each prompt.', 'wraiter-light' ); ?>
		</p>
	</div>
	<?php
}

/**
 * Presence Penalty field callback function.
 *
 * @param array $args Args.
 */
function wraiter_light_field_presence_penalty_cb( $args ) {
	// Get the value of the setting we've registered with register_setting().
	$options                       = get_option( 'wraiter_light_options' );
	$options[ $args['label_for'] ] = ( ! empty( $options[ $args['label_for'] ] ) ) ? $options[ $args['label_for'] ] : '';
	?>
	<div style="width: 400px;max-width: 100%;">
		<input type="number" step="0.1" min="0" max="1" style="width: 400px; max-width: 100%;"
			id="<?php echo esc_attr( $args['label_for'] ); ?>"
			name="wraiter_light_options[<?php echo esc_attr( $args['label_for'] ); ?>]"
			value="<?php echo esc_attr( $options[ $args['label_for'] ] ); ?>"
		/>
		<p class="wraiter_light_description">
			<?php echo esc_html__( 'Number between -2.0 and 2.0. Default is 0. Positive values penalize new tokens based on whether they appear in the text so far, increasing the models likelihood to talk about new topics.', 'wraiter-light' ); ?>
		</p>
	</div>
	<?php
}

/**
 * GPT Model field callback function.
 *
 * @param array $args Args.
 */
function wraiter_light_field_gpt3_model_cb( $args ) {
	$options                       = get_option( 'wraiter_light_options' );
	$options[ $args['label_for'] ] = ( ! empty( $options[ $args['label_for'] ] ) ) ? $options[ $args['label_for'] ] : '';
	$gptotions_options             = array(
		'text-davinci-003' => esc_html__( 'Text-Davinci-003', 'wraiter-light' ),
		'text-curie-001'   => esc_html__( 'Text-Curie-001', 'wraiter-light' ),
		'text-babbage-001' => esc_html__( 'Text-Babbage-001', 'wraiter-light' ),
		'text-ada-001'     => esc_html__( 'Text-Ada-001', 'wraiter-light' ),
		'gpt-3.5-turbo'    => esc_html__( 'GPT-3.5-turbo', 'wraiter-light' ),
		'gpt-4'            => esc_html__( 'GPT-4 (Limited Beta)', 'wraiter-light' ),
		'gpt-4-32k'        => esc_html__( 'GPT-4-32k (Limited Beta)', 'wraiter-light' ),
	);
	?>
	<div style="width: 400px;max-width: 100%;">
		<select style="width: 400px; max-width: 100%;" id="<?php echo esc_attr( $args['label_for'] ); ?>"
				name="wraiter_light_options[<?php echo esc_attr( $args['label_for'] ); ?>]">
			<?php foreach ( $gptotions_options as $value => $label ) : ?>
				<option value="<?php echo esc_attr( $value ); ?>" <?php selected( $options['wraiter_light_gpt3_model'], $value ); ?>><?php echo esc_html( $label ); ?></option>
			<?php endforeach; ?>
		</select>
		<p class="wraiter_light_description">
			<?php esc_html_e( 'Choose the GPT model to use for generating text.', 'wraiter-light' ); ?>
		</p>
	</div>
	<?php
}

/**
 * Frequency Penalty field callback function.
 *
 * @param array $args Args.
 */
function wraiter_light_field_frequency_penalty_cb( $args ) {
	// Get the value of the setting we've registered with register_setting().
	$options                       = get_option( 'wraiter_light_options' );
	$options[ $args['label_for'] ] = ( ! empty( $options[ $args['label_for'] ] ) ) ? $options[ $args['label_for'] ] : '';
	?>
	<div style="width: 400px;max-width: 100%;">
		<input type="number" step="0.1" min="0" max="1" style="width: 400px; max-width: 100%;"
			id="<?php echo esc_attr( $args['label_for'] ); ?>"
			name="wraiter_light_options[<?php echo esc_attr( $args['label_for'] ); ?>]"
			value="<?php echo esc_attr( $options[ $args['label_for'] ] ); ?>"
		/>
		<p class="wraiter_light_description">
			<?php echo esc_html__( 'Number between -2.0 and 2.0. Default is 0. Positive values penalize new tokens based on their existing frequency in the text so far, decreasing the model likelihood to repeat the same line verbatim.', 'wraiter-light' ); ?>
		</p>
	</div>
	<?php
}

/**
 * Custom option and settings:
 *  - callback functions
 */
/**
 * Developers section callback function.
 *
 * @param array $args The settings array, defining title, id, callback.
 */
function wraiter_light_section_developers_callback( $args ) {
	?>
	<p id="<?php echo esc_attr( $args['id'] ); ?>"><?php echo esc_html__( 'OpenAI API Settings Fields.', 'wraiter-light' ); ?></p>
	<?php
}

/**
 * Pill field callbakc function.
 *
 * @param array $args Args.
 */
function wraiter_light_field_pill_cb( $args ) {
	// Get the value of the setting we've registered with register_setting().
	$options                       = get_option( 'wraiter_light_options' );
	$options[ $args['label_for'] ] = ( ! empty( $options[ $args['label_for'] ] ) ) ? $options[ $args['label_for'] ] : '';
	?>
	<div style="width: 400px;max-width: 100%;">
		<input type="text" style="width: 400px;max-width: 100%;"
			id="<?php echo esc_attr( $args['label_for'] ); ?>"
			data-custom="<?php echo esc_attr( $args['wraiter_light_custom_data'] ); ?>"
			name="wraiter_light_options[<?php echo esc_attr( $args['label_for'] ); ?>]"
			value="<?php echo esc_attr( $options[ $args['label_for'] ] ); ?>"
		/>
		<p class="wraiter_light_description">
			<?php echo esc_html__( 'Please Enter OpenAI API Secret Key.', 'wraiter-light' ); ?>
			<?php echo esc_html__( 'Generate your secret key by visiting:', 'wraiter-light' ); ?>
			-<a href="https://platform.openai.com/account/api-keys" target="_blank">
				<?php echo esc_html__( 'OpenAI API Secret Key', 'wraiter-light' ); ?>
			</a>
		</p>
	</div>

	<?php
}

/**
 * Add the top level menu page.
 */
function wraiter_light_options_page() {
	add_menu_page(
		'Wraiter Light OpenAI API Settings.',
		'Wraiter Light OpenAI API Settings.',
		'manage_options',
		'wraiter-light',
		'wraiter_light_options_page_html'
	);
}

/**
 * Register our wraiter_light_options_page to the admin_menu action hook.
 */
add_action( 'admin_menu', 'wraiter_light_options_page' );
/**
 * Top level menu callback function
 */
function wraiter_light_options_page_html() {
	if ( ! current_user_can( 'manage_options' ) ) {
		return;
	}
	?>
	<div class="wrap">
		<h1><?php echo esc_html( get_admin_page_title() ); ?></h1>
		<form action="options.php" method="post">
			<?php
			settings_fields( 'wraiter-light' );
			do_settings_sections( 'wraiter-light' );
			submit_button( 'Save Settings' );
			?>
		</form>
	</div>
	<?php
}
