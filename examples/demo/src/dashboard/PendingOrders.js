import React from 'react';
import compose from 'recompose/compose';
import Card from '@material-ui/core/Card';
// import CardHeader from '@material-ui/core/CardHeader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { translate } from 'react-admin';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import CardIcon from './CardIcon';

const style = theme => ({
    root: {
        flex: 1,
    },
    cost: {
        marginRight: '1em',
        color: theme.palette.text.primary,
    },
    main: {
        flex: '1',
        marginRight: '1em',
        marginTop: 20,
    },
    titleLink: { textDecoration: 'none', color: 'inherit' },
    card: {
        padding: '16px 0',
        overflow: 'inherit',
        textAlign: 'right',
    },
    title: {
        padding: '0 16px',
    },
    value: {
        padding: '0 16px',
        minHeight: 48,
    },
    avatar: {
        background: theme.palette.background.avatar,
    },
    listItemText: {
        overflowY: 'hidden',
        height: '4em',
        display: '-webkit-box',
        WebkitLineClamp: 2,
        WebkitBoxOrient: 'vertical',
    },
});

const location = {
    pathname: 'orders',
    query: { filter: JSON.stringify({ status: 'pending' }) },
};

const PendingOrders = ({ orders = [], customers = {}, translate, classes }) => (
    <div className={classes.main}>
        <CardIcon Icon={ShoppingCartIcon} bgColor="#f44336" />
        <Card className={classes.card}>
            <Typography className={classes.title} color="textSecondary">
                {translate('pos.dashboard.pending_orders')}
            </Typography>
            <Typography
                variant="headline"
                component="h2"
                className={classes.value}
            >
                <Link to={location} className={classes.titleLink}>
                    {orders.length}
                </Link>
            </Typography>
            <Divider />
            <List dense={true}>
                {orders.map(record => (
                    <ListItem
                        key={record.id}
                        button
                        component={Link}
                        to={`/commands/${record.id}`}
                    >
                        {customers[record.customer_id] ? (
                            <Avatar
                                className={classes.avatar}
                                src={`${
                                    customers[record.customer_id].avatar
                                    }?size=32x32`}
                            />
                        ) : (
                                <Avatar />
                            )}
                        <ListItemText
                            primary={new Date(record.date).toLocaleString('en-GB')}
                            secondary={translate('pos.dashboard.order.items', {
                                smart_count: record.basket.length,
                                nb_items: record.basket.length,
                                customer_name: customers[record.customer_id]
                                    ? `${
                                    customers[record.customer_id].first_name
                                    } ${customers[record.customer_id].last_name}`
                                    : '',
                            })}
                        />
                        <ListItemSecondaryAction>
                            <span className={classes.cost}>{record.total}$</span>
                        </ListItemSecondaryAction>
                    </ListItem>
                ))}
            </List>
        </Card>
    </div>
);

const enhance = compose(
    withStyles(style),
    translate
);

export default enhance(PendingOrders);
