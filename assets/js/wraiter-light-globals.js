var wraiter_light_images = {};
var wraiter_light_selected_image = '';
if (typeof jQuery !== 'undefined') {
	const {__} = wp.i18n;

	function wraiter_light_before_send(el) {
		el.genButton.prop('disabled', true);
		el.genButton.before('<span class="elementor-control-spinner" style="display: inline;"><i class="eicon-spinner eicon-animation-spin"  style="font-size: 16px; color: #2e0445;"></i>&nbsp;&nbsp;</span>');
		const $elements = jQuery('.elementor-control-spinner');
		$elements.not(':first').remove();
	}

	function wraiter_light_complete(el) {
		el.genButton.siblings('.elementor-control-spinner').remove();
		el.genButton.prop('disabled', false);
		wraiter_light_onLoadComplete();
	}

	function wraiter_light_onLoadComplete() {
		const loader = document.getElementById('wraiter-light-loader');
		loader.parentNode.removeChild(loader);
	}

}