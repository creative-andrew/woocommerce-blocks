/**
 * External dependencies
 */
import { useBlockProps } from '@wordpress/block-editor';
import EditableButton from '@woocommerce/editor-components/editable-button';

/**
 * Internal dependencies
 */
import { defaultStartShoppingButtonLabel } from './constants';

export const Edit = ( {
	attributes,
	setAttributes,
}: {
	attributes: {
		startShoppingButtonLabel: string;
	};
	setAttributes: ( attributes: Record< string, unknown > ) => void;
} ): JSX.Element => {
	const blockProps = useBlockProps();
	const { startShoppingButtonLabel } = attributes;

	return (
		<div className="wp-block-button aligncenter">
			<EditableButton
				{ ...blockProps }
				className="wc-block-mini-cart__shopping-button"
				value={ startShoppingButtonLabel }
				placeholder={ defaultStartShoppingButtonLabel }
				onChange={ ( content ) => {
					setAttributes( {
						startShoppingButtonLabel: content,
					} );
				} }
			/>
		</div>
	);
};

export const Save = (): JSX.Element => {
	return <div { ...useBlockProps.save() }></div>;
};
