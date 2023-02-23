/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { Fragment } from '@wordpress/element';
import { Icon, home } from '@wordpress/icons';
import { ALLOWED_COUNTRIES } from '@woocommerce/block-settings';
import type {
	CartShippingAddress,
	CartBillingAddress,
} from '@woocommerce/types';

/**
 * Internal dependencies
 */
import './style.scss';

const AddressCard = ( {
	address,
	onEdit,
}: {
	address: CartShippingAddress | CartBillingAddress;
	onEdit: () => void;
} ): JSX.Element | null => {
	return (
		<div className="wc-block-components-address-card">
			<Icon
				icon={ home }
				className="wc-block-components-address-card__icon"
			/>
			<address>
				<strong>
					{ address.first_name + ' ' + address.last_name }
				</strong>
				<br />
				{ [
					address.address_1,
					address.address_2,
					address.city,
					address.state,
					address.postcode,
					ALLOWED_COUNTRIES[ address.country ]
						? ALLOWED_COUNTRIES[ address.country ]
						: address.country,
				]
					.filter( ( field ) => !! field )
					.map( ( field, index ) => (
						<Fragment key={ `address-` + index }>
							{ field }
							<br />
						</Fragment>
					) ) }
			</address>
			{ onEdit && (
				<a
					role="button"
					href="#wc-block-components-address-modal"
					className="wc-block-components-address-card__edit"
					aria-label={ __(
						'Change address',
						'woo-gutenberg-products-block'
					) }
					onClick={ onEdit }
				>
					{ __( 'Change', 'woo-gutenberg-products-block' ) }
				</a>
			) }
		</div>
	);
};

export default AddressCard;