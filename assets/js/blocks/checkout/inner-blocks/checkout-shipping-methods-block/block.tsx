/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { useShippingData } from '@woocommerce/base-context/hooks';
import { ShippingRatesControl } from '@woocommerce/base-components/cart-checkout';
import {
	getShippingRatesPackageCount,
	hasCollectableRate,
} from '@woocommerce/base-utils';
import { getCurrencyFromPriceResponse } from '@woocommerce/price-format';
import FormattedMonetaryAmount from '@woocommerce/base-components/formatted-monetary-amount';
import { useEditorContext, noticeContexts } from '@woocommerce/base-context';
import { StoreNoticesContainer } from '@woocommerce/blocks-checkout';
import { decodeEntities } from '@wordpress/html-entities';
import { Notice } from 'wordpress-components';
import classnames from 'classnames';
import { getSetting } from '@woocommerce/settings';
import type {
	PackageRateOption,
	CartShippingPackageShippingRate,
} from '@woocommerce/types';
import type { ReactElement } from 'react';
import { useSelect } from '@wordpress/data';
import { CART_STORE_KEY } from '@woocommerce/block-data';

/**
 * Internal dependencies
 */
import './style.scss';
import { shippingAddressHasValidationErrors } from '../../../../data/cart/utils';

/**
 * Renders a shipping rate control option.
 *
 * @param {Object} option Shipping Rate.
 */
const renderShippingRatesControlOption = (
	option: CartShippingPackageShippingRate
): PackageRateOption => {
	const priceWithTaxes = getSetting( 'displayCartPricesIncludingTax', false )
		? parseInt( option.price, 10 ) + parseInt( option.taxes, 10 )
		: parseInt( option.price, 10 );
	return {
		label: decodeEntities( option.name ),
		value: option.rate_id,
		description: decodeEntities( option.description ),
		secondaryLabel: (
			<FormattedMonetaryAmount
				currency={ getCurrencyFromPriceResponse( option ) }
				value={ priceWithTaxes }
			/>
		),
		secondaryDescription: decodeEntities( option.delivery_time ),
	};
};

const Block = ( {
	noShippingPlaceholder = null,
	shippingCostRequiresAddress = false,
} ): ReactElement | null => {
	const { isEditor } = useEditorContext();

	const {
		shippingRates,
		needsShipping,
		isLoadingRates,
		hasCalculatedShipping,
		isCollectable,
	} = useShippingData();

	const shippingAddressPushed = useSelect( ( select ) => {
		return select( CART_STORE_KEY ).getFullShippingAddressPushed();
	} );

	const filteredShippingRates = isCollectable
		? shippingRates.map( ( shippingRatesPackage ) => {
				return {
					...shippingRatesPackage,
					shipping_rates: shippingRatesPackage.shipping_rates.filter(
						( shippingRatesPackageRate ) =>
							! hasCollectableRate(
								shippingRatesPackageRate.method_id
							)
					),
				};
		  } )
		: shippingRates;

	if ( ! needsShipping ) {
		return null;
	}

	const shippingAddressIsComplete = ! shippingAddressHasValidationErrors();

	const shippingRatesPackageCount =
		getShippingRatesPackageCount( shippingRates );

	if (
		( ! hasCalculatedShipping && ! shippingRatesPackageCount ) ||
		( shippingCostRequiresAddress &&
			( ! shippingAddressPushed || ! shippingAddressIsComplete ) )
	) {
		return (
			<p>
				{ __(
					'Shipping options will be displayed here after entering your full shipping address.',
					'woo-gutenberg-products-block'
				) }
			</p>
		);
	}

	return (
		<>
			<StoreNoticesContainer
				context={ noticeContexts.SHIPPING_METHODS }
			/>
			{ isEditor && ! shippingRatesPackageCount ? (
				noShippingPlaceholder
			) : (
				<ShippingRatesControl
					noResultsMessage={
						<Notice
							isDismissible={ false }
							className={ classnames(
								'wc-block-components-shipping-rates-control__no-results-notice',
								'woocommerce-error'
							) }
						>
							{ __(
								'There are no shipping options available. Please check your shipping address.',
								'woo-gutenberg-products-block'
							) }
						</Notice>
					}
					renderOption={ renderShippingRatesControlOption }
					collapsible={ false }
					shippingRates={ filteredShippingRates }
					isLoadingRates={ isLoadingRates }
					context="woocommerce/checkout"
				/>
			) }
		</>
	);
};

export default Block;
