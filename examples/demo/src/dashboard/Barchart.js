import React from 'react';
import compose from 'recompose/compose';
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AssessmentIcon from '@material-ui/icons/Assessment';
import Divider from '@material-ui/core/Divider';
import { Link } from 'react-router-dom';
import { translate } from 'react-admin';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

import CardIcon from './CardIcon';

const styles = theme => ({
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

const data = [
    {
        month: '2018-08',
        'APP订单数量': '476',
        '门店订单数量': '123'
    },
    {
        month: '2018-09',
        'APP订单数量': '234',
        '门店订单数量': '421'
    },
    {
        month: '2018-10',
        'APP订单数量': '231',
        '门店订单数量': '125'
    },
    {
        month: '2018-11',
        'APP订单数量': '745',
        '门店订单数量': '614'
    },
    {
        month: '2018-12',
        'APP订单数量': '165',
        '门店订单数量': '451'
    },
    {
        month: '2019-01',
        'APP订单数量': '322',
        '门店订单数量': '111'
    },
    {
        month: '2019-02',
        'APP订单数量': '542',
        '门店订单数量': '621'
    },
];

const location = {
    pathname: 'reviews',
    query: { filter: JSON.stringify({ status: 'pending' }) },
};

const PendingReviews = ({
    reviews = [],
    customers = {},
    nb,
    translate,
    classes,
}) => (
        <div className={classes.main}>
            <CardIcon Icon={AssessmentIcon} bgColor="#f44336" />
            <Card className={classes.card}>
                <Typography className={classes.title} color="textSecondary">
                    月度订单数量
                </Typography>
                <Typography
                    variant="headline"
                    component="h2"
                    className={classes.value}
                >
                    <Link to={location} className={classes.titleLink}>
                        {nb}
                    </Link>
                </Typography>
                <Divider />
                <BarChart width={800} height={300} data={data}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend style={{marginTop: 20}} />
                    <Bar dataKey="APP订单数量" fill="#8884d8" />
                    <Bar dataKey="门店订单数量" fill="#82ca9d" />
                </BarChart>
            </Card>
        </div>
    );

const enhance = compose(
    withStyles(styles),
    translate
);

export default enhance(PendingReviews);
