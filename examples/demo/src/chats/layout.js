import React, { Component } from 'react';
import {
    Datagrid,
    Filter,
    List,
    Responsive,
    SearchInput,
} from 'react-admin';
import withStyles from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';
import CustomerLinkField from './CustomerLinkField';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import { CardActions, CardContent } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const CustomerFilter = props => (
    <Filter {...props}>
        <SearchInput source="q" alwaysOn />
    </Filter>
);

const styles = {
    nb_commands: { color: 'purple' },
};

const conversations = [
    {
        id: 0,
        messages: [
            {
                id: 0,
                isMe: true,
                time: '2019-01-01 12:30',
                message: '请问有什么需要帮助您的吗？'
            },
            {
                id: 1,
                isMe: false,
                time: '2019-01-01 12:31',
                message: '我想问一下，这个线路能不能打折'
            }
        ]
    },
    {
        id: 1,
        messages: [
            {
                id: 0,
                isMe: false,
                time: '2019-01-02 14:30',
                message: '去迪拜需不需要办签证？'
            },
            {
                id: 1,
                isMe: true,
                time: '2019-01-01 14:35',
                message: '您好，迪拜对中国和澳洲护照都是免签的。'
            }
            ,
            {
                id: 2,
                isMe: true,
                time: '2019-01-01 14:36',
                message: '好的谢谢'
            }
        ]
    }
];

class CustomerList extends Component {
    state = { nb: 0, conversations }

    userClick = () => {
        let filtered = [0, 1].filter((v, i) => {
            return v != this.state.nb;
        });
        this.setState({ nb: filtered[Math.floor(Math.random() * filtered.length)] })
    }

    sendMessage = () => {
        if (this.state.text != '' && this.state.text != undefined) {
            let date = new Date();
            let now = `${date.getFullYear()}-${date.getMonth()}-${date.getDate} ${date.getHours}:${date.getTime}`;
            conversations[this.state.nb].messages.push({
                id: 1,
                isMe: true,
                time: now,
                message: this.state.text
            });
            this.setState({conversations, text: ''});
        }
    }

    handleChange = (event) => {
        const { target: { name, value } } = event;
        this.setState({ text: value });
    }

    render() {
        const { classes, ...props } = this.props;
        return (<div style={{ display: 'flex', flexDirection: 'row' }}>
            <div style={{ flex: 0.2 }}>
                <List
                    {...props}
                    filters={<CustomerFilter />}
                    sort={{ field: 'last_seen', order: 'DESC' }}
                    perPage={100}
                    bulkActionButtons={false}
                    exporter={false}
                    onClick={this.userClick}
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
            <div style={{ flex: 0.8 }}>
                <Card style={{ display: 'flex', flexDirection: 'column', flex: 1, backgroundColor: '#fff', width: 800, height: 'calc(100vh - 50px)', position: 'fixed', marginLeft: 20, marginRight: 20 }}>
                    <CardContent style={{ height: 'calc(100% - 140px)' }}>
                        {this.state.conversations[this.state.nb].messages.map((message, index) => (
                            <Grid direction='row' justify={message.isMe ? 'flex-start' : 'flex-end'} style={{ display: 'flex' }} >
                                {message.isMe
                                    ? <Paper style={{ padding: 16, margin: 16 }}>{message.message}</Paper>
                                    : <Paper style={{ padding: 16, margin: 16, backgroundColor: '#71BEE8', color: '#fff' }}>{message.message}</Paper>}
                            </Grid>
                        ))}
                    </CardContent>
                    <CardActions style={{ width: 800, height: 100, position: 'fixed', bottom: 0 }}>
                        <TextField
                            id="outlined-full-width"
                            label={false}
                            style={{ margin: 8 }}
                            placeholder="输入消息"
                            fullWidth
                            margin="normal"
                            variant="outlined"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={this.handleChange}
                            value={this.state.text}
                        />
                        <Button variant="contained" color="primary" onClick={this.sendMessage}>
                            Send
                            <SendIcon />
                        </Button>
                    </CardActions>
                </Card>
            </div>
        </div>);
    }

};

export default withStyles(styles)(CustomerList);
