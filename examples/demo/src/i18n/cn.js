import chineseMessages from 'ra-language-chinese';

export default {
    ...chineseMessages,
    pos: {
        search: '搜索',
        configuration: '设置',
        roles: '权限管理',
        language: '语言',
        theme: {
            name: '主题',
            light: '浅色调',
            dark: '深色调',
        },
        dashboard: {
            monthly_revenue: '月收入',
            new_orders: '新订单',
            pending_reviews: '未确认评论',
            new_customers: '新消息',
            pending_orders: '未确认订单',
            order: {
                items:
                    'by %{customer_name}, one item |||| by %{customer_name}, %{nb_items} items',
            },
            welcome: {
                title: 'Welcome to react-admin demo',
                subtitle:
                    "This is the admin of an imaginary poster shop. Fell free to explore and modify the data - it's local to your computer, and will reset each time you reload.",
                aor_button: 'react-admin site',
                demo_button: 'Source for this demo',
            },
        },
        menu: {
            sales: '销售',
            catalog: '产品目录',
            customers: '客户',
        },
    },
    resources: {
        customers: {
            name: '客户',
            fields: {
                commands: '订单',
                groups: '标签',
                last_seen_gte: '访问时间',
                name: '姓名',
                total_spent: '总消费',
            },
            tabs: {
                identity: '个人信息',
                address: '住址',
                orders: '订单',
                reviews: '评论',
                stats: '其他',
            },
            page: {
                delete: '删除客户',
            },
        },
        commands: {
            name: '订单',
            title: '订单 %{reference}',
            fields: {
                basket: {
                    delivery: '运费',
                    reference: '产品编号',
                    quantity: '数量',
                    sum: '总计',
                    tax_rate: '税率',
                    total: '总计',
                    unit_price: '单价',
                },
                customer_id: '客户',
                date_gte: '开始日期',
                date_lte: '结束日期',
                total_gte: '最小金额',
                status: '状态',
                returned: '退回',
            },
        },
        invoices: {
            name: '发票',
            fields: {
                date: '发票日期',
                customer_id: '客户',
                command_id: '订单',
                date_gte: '开始日期',
                date_lte: '结束日期',
                total_gte: '最小金额',
                address: '地址',
            },
        },
        products: {
            name: '产品',
            fields: {
                category_id: '分类',
                height_gte: '最小成团人数',
                height_lte: '最大成团人数',
                height: '成团人数',
                image: '图片',
                price: '价格',
                reference: '产品名称',
                stock_lte: '低库存',
                stock: '最低折扣',
                thumbnail: '缩略图',
                width_gte: '最少天数',
                width_lte: '最大天数',
                width: '天数',
            },
            tabs: {
                image: '图片',
                morepic: '更多图片',
                details: '详细',
                description: '介绍',
                reviews: '评论',
            },
        },
        categories: {
            name: '产品分类',
            fields: {
                products: '产品'
            },
        },
        reviews: {
            name: '评论',
            detail: '评论详情',
            fields: {
                customer_id: '客户',
                command_id: '订单',
                product_id: '产品',
                date_gte: '最后发表',
                date_lte: '最早发表',
                date: '日期',
                comment: '评论',
                rating: '评分',
            },
            action: {
                accept: '通过',
                reject: '驳回',
            },
            notification: {
                approved_success: '评论已被通过',
                approved_error: '错误: 评论未被通过',
                rejected_success: '评论已被驳回',
                rejected_error: '错误: 评论未被驳回',
            },
        },
        segments: {
            name: '标签',
            fields: {
                customers: '客户',
                name: '姓名',
            },
            data: {
                compulsive: '爱投诉',
                collector: '忠实',
                ordered_once: '已购买',
                regular: '普通',
                returns: '退订过',
                reviewer: '写过评论',
                potential: '潜在希望',
            },
        },
        chats: {
            name: '消息',
            fields: {}
        },
        poi: {
            name: '著名景点',
            user: '用户',
            roles: '权限',
        }
    },
};
