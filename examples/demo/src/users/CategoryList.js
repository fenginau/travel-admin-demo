import React from 'react';
import { Datagrid, EditButton, List, TextField } from 'react-admin';
import withStyles from '@material-ui/core/styles/withStyles';


const styles = {
    name: { padding: '0 12px 0 25px' },
};

const CategoryList = ({ classes, ...props }) => (
    <List {...props} sort={{ field: 'name', order: 'ASC' }}>
        <Datagrid>
            <TextField source="name" className={classes.name} label='权限' />
            <EditButton />
        </Datagrid>
    </List>
);

export default withStyles(styles)(CategoryList);
