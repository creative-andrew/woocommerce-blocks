<?php
namespace Automattic\WooCommerce\Blocks\BlockTypes;

/**
 * SingleProductServerSide class.
 */
class SingleProductServerSide extends AbstractBlock {
	/**
	 * Block name.
	 *
	 * @var string
	 */
	protected $block_name = 'single-product-server-side';
	protected $product_id = 0;

	protected function initialize() {
		parent::initialize();
		add_filter( 'render_block_context', array( $this, 'update_context' ), 10, 3 );
	}


	/**
	 * Render the block.
	 *
	 * @param array    $attributes Block attributes.
	 * @param string   $content Block content.
	 * @param WP_Block $block Block instance.
	 *
	 * @return string Rendered block output.
	 */
	protected function render( $attributes, $content, $block ) {
		$classname = $attributes['className'] ?? '';

		return sprintf(
			'<div class="wp-block-woocommerce-single-product-server-side %1$s">
				%2$s
			</div>',
			esc_attr( $classname ),
			$content
		);
	}

	function update_context( $context, $block, $parent_block ) {
		if( $block['blockName'] === 'woocommerce/single-product-server-side'
			&& isset( $block['attrs']['productId'] ) ) {
				$this->product_id = $block['attrs']['productId'];
		}
		if( $this->product_id > 0 ){
			$context['postId'] = $this->product_id;
		}

		return $context;
	}
}