import React from 'react';
import {
    BooleanField,
    Datagrid,
    DateField,
    DateInput,
    EditButton,
    Filter,
    List,
    NullableBooleanInput,
    NumberField,
    Responsive,
    SearchInput,
} from 'react-admin';
import withStyles from '@material-ui/core/styles/withStyles';

import SegmentsField from './SegmentsField';
import SegmentInput from './SegmentInput';
import CustomerLinkField from './CustomerLinkField';
import ColoredNumberField from './ColoredNumberField';
import MobileGrid from './MobileGrid';

const VisitorFilter = props => (
    <Filter {...props}>
        <SearchInput source="q" alwaysOn />
        <DateInput source="last_seen_gte" />
        <NullableBooleanInput source="has_ordered" label="已购买客户" />
        <NullableBooleanInput source="has_newsletter" defaultValue label="订阅" />
        <SegmentInput />
    </Filter>
);

const styles = {
    nb_commands: { color: 'purple' },
};

const VisitorList = ({ classes, ...props }) => (
    <List
        {...props}
        filters={<VisitorFilter />}
        sort={{ field: 'last_seen', order: 'DESC' }}
        perPage={25}
    >
        <Responsive
            xsmall={<MobileGrid />}
            medium={
                <Datagrid>
                    <CustomerLinkField label="名称" />
                    <DateField source="last_seen" type="date" label="注册日期" />
                    <NumberField
                        source="nb_commands"
                        label="resources.customers.fields.commands"
                        className={classes.nb_commands}
                    />
                    <ColoredNumberField
                        source="total_spent"
                        options={{ style: 'currency', currency: 'AUD' }}
                        label="总共消费"
                    />
                    <DateField source="latest_purchase" showTime label="上次订单" />
                    <BooleanField source="has_newsletter" label="订阅" />
                    <SegmentsField />
                    <EditButton />
                </Datagrid>
            }
        />
    </List>
);

export default withStyles(styles)(VisitorList);
