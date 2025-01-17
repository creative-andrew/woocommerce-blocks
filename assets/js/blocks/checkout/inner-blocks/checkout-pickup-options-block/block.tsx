/**
 * External dependencies
 */
import { _n, __ } from '@wordpress/i18n';
import {
	useState,
	useEffect,
	useCallback,
	createInterpolateElement,
} from '@wordpress/element';
import { useShippingData, useStoreCart } from '@woocommerce/base-context/hooks';
import { getCurrencyFromPriceResponse } from '@woocommerce/price-format';
import FormattedMonetaryAmount from '@woocommerce/base-components/formatted-monetary-amount';
import { decodeEntities } from '@wordpress/html-entities';
import { getSetting } from '@woocommerce/settings';
import { Icon, mapMarker } from '@wordpress/icons';
import type { RadioControlOption } from '@woocommerce/base-components/radio-control/types';
import { CartShippingPackageShippingRate } from '@woocommerce/types';
import { isPackageRateCollectable } from '@woocommerce/base-utils';
import { ExperimentalOrderLocalPickupPackages } from '@woocommerce/blocks-checkout';
import { LocalPickupSelect } from '@woocommerce/base-components/cart-checkout/local-pickup-select';

/**
 * Internal dependencies
 */
import './style.scss';
import ShippingRatesControlPackage from '../../../../base/components/cart-checkout/shipping-rates-control-package';

const getPickupLocation = (
	option: CartShippingPackageShippingRate
): string => {
	if ( option?.meta_data ) {
		const match = option.meta_data.find(
			( meta ) => meta.key === 'pickup_location'
		);
		return match ? match.value : '';
	}
	return '';
};

const getPickupAddress = (
	option: CartShippingPackageShippingRate
): string => {
	if ( option?.meta_data ) {
		const match = option.meta_data.find(
			( meta ) => meta.key === 'pickup_address'
		);
		return match ? match.value : '';
	}
	return '';
};

const getPickupDetails = (
	option: CartShippingPackageShippingRate
): string => {
	if ( option?.meta_data ) {
		const match = option.meta_data.find(
			( meta ) => meta.key === 'pickup_details'
		);
		return match ? match.value : '';
	}
	return '';
};

const renderPickupLocation = (
	option: CartShippingPackageShippingRate,
	packageCount: number
): RadioControlOption => {
	const priceWithTaxes = getSetting( 'displayCartPricesIncludingTax', false )
		? parseInt( option.price, 10 ) + parseInt( option.taxes, 10 )
		: option.price;
	const location = getPickupLocation( option );
	const address = getPickupAddress( option );
	const details = getPickupDetails( option );

	return {
		value: option.rate_id,
		label: location
			? decodeEntities( location )
			: decodeEntities( option.name ),
		secondaryLabel:
			parseInt( priceWithTaxes, 10 ) > 0 ? (
				createInterpolateElement(
					/* translators: %1$s name of the product (ie: Sunglasses), %2$d number of units in the current cart package */
					_n(
						'<price/>',
						'<price/> x <packageCount/> packages',
						packageCount,
						'woo-gutenberg-products-block'
					),
					{
						price: (
							<FormattedMonetaryAmount
								currency={ getCurrencyFromPriceResponse(
									option
								) }
								value={ priceWithTaxes }
							/>
						),
						packageCount: <>{ packageCount }</>,
					}
				)
			) : (
				<em>{ __( 'free', 'woo-gutenberg-products-block' ) }</em>
			),
		description: decodeEntities( details ),
		secondaryDescription: address ? (
			<>
				<Icon
					icon={ mapMarker }
					className="wc-block-editor-components-block-icon"
				/>
				{ decodeEntities( address ) }
			</>
		) : undefined,
	};
};

const Block = (): JSX.Element | null => {
	const { shippingRates, selectShippingRate } = useShippingData();

	// Get pickup locations from the first shipping package.
	const pickupLocations = ( shippingRates[ 0 ]?.shipping_rates || [] ).filter(
		isPackageRateCollectable
	);

	const [ selectedOption, setSelectedOption ] = useState< string >(
		() => pickupLocations.find( ( rate ) => rate.selected )?.rate_id || ''
	);

	const onSelectRate = useCallback(
		( rateId: string ) => {
			selectShippingRate( rateId );
		},
		[ selectShippingRate ]
	);

	// Prepare props to pass to the ExperimentalOrderLocalPickupPackages slot fill.
	// We need to pluck out receiveCart.
	// eslint-disable-next-line no-unused-vars
	const { extensions, receiveCart, ...cart } = useStoreCart();
	const slotFillProps = {
		extensions,
		cart,
		components: {
			ShippingRatesControlPackage,
			LocalPickupSelect,
		},
		renderPickupLocation,
	};

	// Update the selected option if there is no rate selected on mount.
	useEffect( () => {
		if ( ! selectedOption && pickupLocations[ 0 ] ) {
			setSelectedOption( pickupLocations[ 0 ].rate_id );
			onSelectRate( pickupLocations[ 0 ].rate_id );
		}
	}, [ onSelectRate, pickupLocations, selectedOption ] );

	return (
		<>
			<ExperimentalOrderLocalPickupPackages.Slot { ...slotFillProps } />
			<ExperimentalOrderLocalPickupPackages>
				<LocalPickupSelect
					title={ shippingRates[ 0 ].name }
					setSelectedOption={ setSelectedOption }
					onSelectRate={ onSelectRate }
					selectedOption={ selectedOption }
					renderPickupLocation={ renderPickupLocation }
					pickupLocations={ pickupLocations }
				/>
			</ExperimentalOrderLocalPickupPackages>
		</>
	);
};

export default Block;
