<?php
namespace Automattic\WooCommerce\Blocks\BlockTypes;

use Automattic\WooCommerce\Blocks\Utils\StyleAttributesUtils;


/**
 * ProductImageGallery class.
 */
class ProductImageGallery extends AbstractBlock {
	/**
	 * Block name.
	 *
	 * @var string
	 */
	protected $block_name = 'product-image-gallery';

	/**
	 *  Register the context
	 *
	 * @var string
	 */
	protected function get_block_type_uses_context() {
		return [ 'query', 'queryId', 'postId' ];
	}

	/**
	 * Get block attributes.
	 *
	 * @return array
	 */
	protected function get_block_type_supports() {
		return array(
			'__experimentalSelector' => 'img',
		);
	}

	/**
	 * Include and render the block.
	 *
	 * @param array    $attributes Block attributes. Default empty array.
	 * @param string   $content    Block content. Default empty string.
	 * @param WP_Block $block      Block instance.
	 * @return string Rendered block type output.
	 */
	protected function render( $attributes, $content, $block ) {

		$post_id = $block->context['postId'];
		global $product;
		$product = wc_get_product( $post_id );

		if ( class_exists( 'WC_Frontend_Scripts' ) ) {
			$frontend_scripts = new \WC_Frontend_Scripts();
			$frontend_scripts::load_scripts();
		}

		$classname          = $attributes['className'] ?? '';
		$classes_and_styles = StyleAttributesUtils::get_classes_and_styles_by_attributes( $attributes );

		ob_start();
		woocommerce_show_product_images();
		$product_image_gallery_html = ob_get_clean();

		return sprintf(
			'<div class="wp-block-woocommerce-product-image-gallery %1$s %2$s" style="%3$s">%4$s</div>',
			esc_attr( $classes_and_styles['classes'] ),
			esc_attr( $classname ),
			esc_attr( $classes_and_styles['styles'] ),
			$product_image_gallery_html
		);

	}
}
