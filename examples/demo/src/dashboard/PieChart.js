import React from 'react';
import compose from 'recompose/compose';
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import PieChartIcon from '@material-ui/icons/PieChart';
import Divider from '@material-ui/core/Divider';
import { Link } from 'react-router-dom';
import { translate } from 'react-admin';
import { PieChart, Pie, Sector, Cell, Legend } from 'recharts';

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

const data = [{ name: 'APP', value: 451 }, { name: '网站', value: 24 },
{ name: '门店', value: 320 }, { name: '其他', value: 11 }];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};

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
            <CardIcon Icon={PieChartIcon} bgColor="#5c4d95" />
            <Card className={classes.card}>
                <Typography className={classes.title} color="textSecondary">
                    本月各渠道订单数量
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
                <PieChart width={800} height={400}>
                    <Pie
                        data={data}
                        nameKey="name"
                        cx={385}
                        cy={200}
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={120}
                        fill="#8884d8"
                    >
                        {
                            data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]} />)
                        }
                    </Pie>
                    <Legend />
                </PieChart>
            </Card>
        </div>
    );

const enhance = compose(
    withStyles(styles),
    translate
);

export default enhance(PendingReviews);
