import React from 'react';
import {
    Datagrid,
    Filter,
    List,
    Responsive,
    SearchInput,
} from 'react-admin';
import withStyles from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import CustomerLinkField from './CustomerLinkField';

const CustomerFilter = props => (
    <Filter {...props}>
        <SearchInput source="q" alwaysOn />
    </Filter>
);

const styles = {
    nb_commands: { color: 'purple' },
};

const CustomerList = ({ classes, ...props }) => (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div style={{ flex: 0.2 }}>
            <List
                {...props}
                filters={<CustomerFilter />}
                sort={{ field: 'last_seen', order: 'DESC' }}
                perPage={100}
                bulkActionButtons={false}
                exporter={false}
            >
                <Responsive
                    medium={
                        <Datagrid>
                            <CustomerLinkField label={false} />
                        </Datagrid>
                    }
                />
            </List>
        </div>
        <div style={{ flex: 0.8, alignContent: 'stretch', alignItems: 'stretch' }}>
            <Card style={{ display: 'flex', flex: 1, backgroundColor: '#fff', width: 800, height: 'calc(100vh - 50px)', position: 'fixed', marginLeft: 20, marginRight: 20 }}>
                <CardContent>
                </CardContent>
            </Card>
        </div>
    </div>
);

export default withStyles(styles)(CustomerList);
