import React from 'react';

import FullNameField from './FullNameField';

const CustomerLinkField = props => (
    <FullNameField {...props} />
);

CustomerLinkField.defaultProps = {
    source: 'customer_id',
    addLabel: true,
};

export default CustomerLinkField;
