<?php

namespace Automattic\WooCommerce\Blocks\BlockTypes;

use Automattic\WooCommerce\Blocks\Utils\StyleAttributesUtils;

/**
 * CatalogSorting class.
 */
class AddToCartButton extends AbstractBlock {
	/**
	 * Block name.
	 *
	 * @var string
	 */
	protected $block_name = 'add-to-cart-button';

	/**
	 * Render the block.
	 *
	 * @param array    $attributes Block attributes.
	 * @param string   $content Block content.
	 * @param WP_Block $block Block instance.
	 *
	 * @return string | void Rendered block output.
	 */
	protected function render( $attributes, $content, $block ) {
		ob_start();

		while ( have_posts() ) {
			the_post();
			global $product;
			/**
			 * Trigger the single product add to cart action for each product type.
			 */
			do_action( 'woocommerce_' . $product->get_type() . '_add_to_cart' );
		}

		$product = ob_get_clean();

		if ( ! $product ) {
			return;
		}

		$classname          = $attributes['className'] ?? '';
		$classes_and_styles = StyleAttributesUtils::get_classes_and_styles_by_attributes( $attributes );

		return sprintf(
			'<div class="woocommerce wc-block-add-to-cart-button %1$s %2$s" style="%3$s">%4$s</div>',
			esc_attr( $classes_and_styles['classes'] ),
			esc_attr( $classname ),
			esc_attr( $classes_and_styles['styles'] ),
			$product
		);
	}

	/**
	 * Get the frontend script handle for this block type.
	 *
	 * @param string $key Data to get, or default to everything.
	 */
	protected function get_block_type_script( $key = null ) {
		return null;
	}
}
