jQuery(document).ready(function () {
	const {__} = wp.i18n;

	const WRAITER_LIGHT_Wp_Text_Generator = {
		genButton: '',
		title_set: false,
		text_area_set: false,
		post_request(title_set = false, text_area_set = false) {
			let el = this;
			let wraiter_light_type = '';
			if (true === title_set) {
				wraiter_light_type = jQuery('#wraiter_light_title_content').val();
			}
			if (true === text_area_set) {
				wraiter_light_type = jQuery('#wraiter_light_textarea_content').val();
			}
			el.title_set = title_set;
			el.text_area_set = text_area_set;

			const requestData = {
				action: 'wraiter_light_ai_generate_content',
				type: wraiter_light_type,
				keywords: '',
				language: jQuery('#wraiter_light_language_select').val(),
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

		success_request(response, title_set = false, text_area_set = false) {
			title_set = this.title_set;
			text_area_set = this.text_area_set;
			console.log(response, title_set, text_area_set);
			if (!response.success) {
				alert(response.data);
			} else {
				const content = response.data[0].trim().replace(/\r?\n/g, '<br />');
				if (true === title_set) {
					this.set_content(content);
				} else if (true === text_area_set) {
					let title = '';
					this.set_content(title, content);
				}
			}
		},
		init() {
			let el = this;
			jQuery('body').on('click', '#wraiter-light-textarea_generate', function (clicked_button) {

				el.genButton = jQuery(this);
				;
				el.post_request(false, true);
			});

			jQuery('body').on('click', '#wraiter-light-title_generate', function (clicked_button) {
				el.genButton = jQuery(this);
				el.post_request(true);
			});
		},

		set_content(title_content = '', text_area = '') {
			if (title_content) {
				let textInput = jQuery('.text-widget-fields .title');
				if (textInput) {
					textInput.val(title_content);
					textInput.trigger('change');
				}
			}

			if (text_area) {
				let widgetId = jQuery('.wp-editor-area').attr('id');
				if (widgetId) {
					let editor = tinymce.get(widgetId);
					let textarea = jQuery('#' + widgetId);
					textarea.val(text_area);
					editor.setContent(textarea.val());
					textarea.trigger('change');
				}
			}
		}
	}
	WRAITER_LIGHT_Wp_Text_Generator.init();
});
