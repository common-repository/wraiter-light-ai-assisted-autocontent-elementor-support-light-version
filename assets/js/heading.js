if (typeof jQuery !== 'undefined') {
	const {__} = wp.i18n;

	jQuery(window).on('elementor/init', function () {
		elementor.channels.editor.on('wraiterlight:heading:generate', function (controlView) {
			const WRAITER_LIGHT_Heading_Generator = {
				controls: '',
				field: '',
				settings: '',
				genButton: '',

				init(controlView) {
					this.controls = jQuery(controlView).get(0).$el.parentsUntil('.elementor-controls-stack');
					this.field = elementor.getPanelView().currentPageView.getControlViewByName('title');
					this.settings = controlView.container.settings.attributes;
					this.genButton = this.controls.find('.elementor-button-default[data-event="wraiterlight:heading:generate"]');
					this.trigger_generate(this);
				},

				trigger_generate(event) {

					const promptControl = this.controls.find('.elementor-control-type-textarea textarea[data-setting="wraiter_light_type"]');
					promptControl.css({borderColor: 'inherit'});

					if (promptControl.val().trim().length === 0) {
						promptControl.css({borderColor: '#93003c'});
						alert(__('Please provide text for Auto Content Generation.', 'wraiter-light'));
						return;
					}

					this.post_request();
				},

				post_request() {
					let el = this;
					const requestData = {
						action: 'wraiter_light_ai_generate_content',
						type: this.settings['wraiter_light_type'],
						keywords: this.settings['wraiter_light_keywords'],
						language: this.settings['wraiter_light_language'],
						wraiter_light_writing_style: this.settings['wraiter_light_writing_style'],
						wraiter_light_writing_tone: this.settings['wraiter_light_writing_tone'],
						wraiter_light_suggestions: this.settings['wraiter_light_suggestions'],
						'_ajax_nonce-wraiter_light_aicontent_nonce': wraiter_light_ajax_object.wraiter_light_aicontent_nonce,
					};

					const loader = jQuery('<div id="wraiter-light-loader" class="wraiter-light-loader"><div class="wraiter-light-loading-icon"></div><div class="wraiter-light-loading-message">' + __('Please wait..., generating AI content', 'wraiter-light') + '</div></div>');
					jQuery('body').append(loader);
					jQuery.ajax({
						url: wraiter_light_ajax_object.ajax_url,
						type: 'POST',
						data: requestData,
						beforeSend: () => wraiter_light_before_send(el),
						success: this.success_request.bind(this),
						complete: () => wraiter_light_complete(el),
					});
				},
				success_request(response) {
					if (!response.success) {
						alert(response.data);
					} else {
						this.field.setValue(response.data[0]);
						this.field.applySavedValue();
					}
				},
			};

			WRAITER_LIGHT_Heading_Generator.init(controlView);
		});
	});
}
