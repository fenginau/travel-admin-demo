import React from 'react';
import {
    Datagrid,
    DateField,
    DateInput,
    Edit,
    EditButton,
    FormTab,
    LongTextInput,
    NullableBooleanInput,
    NumberField,
    ReferenceManyField,
    TabbedForm,
    TextField,
    TextInput,
} from 'react-admin';
import withStyles from '@material-ui/core/styles/withStyles';

import NbItemsField from '../orders/NbItemsField';
import ProductReferenceField from '../products/ProductReferenceField';
import StarRatingField from '../reviews/StarRatingField';
import FullNameField from './FullNameField';
import SegmentsInput from './SegmentsInput';
import { styles } from './VisitorCreate';

const VisitorTitle = ({ record }) =>
    record ? <FullNameField record={record} size={32} /> : null;

const VisitorEdit = ({ classes, ...props }) => (
    <Edit title={<VisitorTitle />} {...props}>
        <TabbedForm>
            <FormTab label="resources.customers.tabs.identity">
                <TextInput
                    source="first_name"
                    formClassName={classes.first_name}
                    label="名"
                />
                <TextInput
                    source="last_name"
                    formClassName={classes.last_name}
                    label="姓"
                />
                <TextInput
                    type="email"
                    source="email"
                    validation={{ email: true }}
                    fullWidth={true}
                    formClassName={classes.email}
                    label="电子邮件"
                />
                <DateInput source="birthday" 
                    label="生日"/>
            </FormTab>
            <FormTab label="resources.customers.tabs.address" path="address">
                <LongTextInput
                    source="address"
                    formClassName={classes.address}
                    label="住址"
                />
                <TextInput source="zipcode" formClassName={classes.zipcode} label="邮编" />
                <TextInput source="city" formClassName={classes.city} label="城市" />
            </FormTab>
            <FormTab label="resources.customers.tabs.orders" path="orders">
                <ReferenceManyField
                    addLabel={false}
                    sort={{ field: 'date', order: 'DESC' }}
                    reference="commands"
                    target="customer_id"
                >
                    <Datagrid>
                        <DateField source="date" />
                        <TextField source="reference" />
                        <NbItemsField />
                        <NumberField
                            source="total"
                            options={{ style: 'currency', currency: 'USD' }}
                        />
                        <TextField source="status" />
                        <EditButton />
                    </Datagrid>
                </ReferenceManyField>
            </FormTab>
            <FormTab label="resources.customers.tabs.reviews" path="reviews">
                <ReferenceManyField
                    addLabel={false}
                    sort={{ field: 'date', order: 'DESC' }}
                    reference="reviews"
                    target="customer_id"
                >
                    <Datagrid filter={{ status: 'approved' }}>
                        <DateField source="date" />
                        <ProductReferenceField />
                        <StarRatingField />
                        <TextField
                            source="comment"
                            cellClassName={classes.comment}
                        />
                        <EditButton style={{ padding: 0 }} />
                    </Datagrid>
                </ReferenceManyField>
            </FormTab>
            <FormTab label="resources.customers.tabs.stats" path="stats">
                <SegmentsInput />
                <NullableBooleanInput source="has_newsletter" label="是否订阅" />
                <DateField
                    source="first_seen"
                    style={{ width: 128, display: 'inline-block' }} label="注册日期"
                />
                <DateField
                    source="latest_purchase"
                    style={{ width: 128, display: 'inline-block' }} label="上次购买"
                />
                <DateField
                    source="last_seen"
                    style={{ width: 128, display: 'inline-block' }} label="上次登录"
                />
            </FormTab>
        </TabbedForm>
    </Edit>
);

export default withStyles(styles)(VisitorEdit);
