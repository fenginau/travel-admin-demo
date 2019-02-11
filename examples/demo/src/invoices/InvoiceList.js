import React from 'react';
import {
    List,
    Datagrid,
    TextField,
    DateField,
    ReferenceField,
    NumberField,
    Filter,
    DateInput,
} from 'react-admin';

import FullNameField from '../visitors/FullNameField';
import AddressField from '../visitors/AddressField';
import InvoiceShow from './InvoiceShow';

const ListFilters = props => (
    <Filter {...props}>
        <DateInput source="date_gte" alwaysOn />
        <DateInput source="date_lte" alwaysOn />
    </Filter>
);

const InvoiceList = props => (
    <List {...props} filters={<ListFilters />} perPage={25}>
        <Datagrid rowClick="expand" expand={<InvoiceShow />}>
            <TextField source="id" label="编号" />
            <DateField source="date" />
            <ReferenceField source="customer_id" reference="customers">
                <FullNameField />
            </ReferenceField>
            <ReferenceField
                source="customer_id"
                reference="customers"
                linkType={false}
                label="resources.invoices.fields.address"
            >
                <AddressField />
            </ReferenceField>
            <ReferenceField source="command_id" reference="commands">
                <TextField source="reference" />
            </ReferenceField>
            <NumberField source="total_ex_taxes" label="税前价" />
            {/* <NumberField source="delivery_fees" /> */}
            <NumberField source="taxes" label="税"/>
            <NumberField source="total" label="总计"/>
        </Datagrid>
    </List>
);

export default InvoiceList;
