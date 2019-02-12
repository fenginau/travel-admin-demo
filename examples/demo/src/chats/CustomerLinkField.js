import React from 'react';
import { Link } from 'react-admin';

import FullNameField from './FullNameField';

const CustomerLinkField = props => (
    <Link to={`#`}>
        <FullNameField {...props} />
    </Link>
);

CustomerLinkField.defaultProps = {
    source: 'customer_id',
    addLabel: true,
};

export default CustomerLinkField;
