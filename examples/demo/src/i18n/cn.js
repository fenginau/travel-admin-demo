import chineseMessages from 'ra-language-chinese';

export default {
    ...chineseMessages,
    pos: {
        search: '搜索',
        configuration: '设置',
        language: '语言',
        theme: {
            name: '主题',
            light: '浅色调',
            dark: '深色调',
        },
        dashboard: {
            monthly_revenue: '月收入',
            new_orders: '新订单',
            pending_reviews: '未确认反馈',
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
            customers: '用户',
        },
    },
    resources: {
        customers: {
            name: '用户',
            fields: {
                commands: '订单',
                groups: '标签',
                last_seen_gte: 'Visited Since',
                name: '姓名',
                total_spent: 'Total spent',
            },
            tabs: {
                identity: 'Identity',
                address: 'Address',
                orders: '订单',
                reviews: 'Reviews',
                stats: 'Stats',
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
                    delivery: '已完成',
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
                height_gte: 'Min height',
                height_lte: 'Max height',
                height: 'Height',
                image: 'Image',
                price: 'Price',
                reference: 'Reference',
                stock_lte: 'Low Stock',
                stock: 'Stock',
                thumbnail: 'Thumbnail',
                width_gte: 'Min width',
                width_lte: 'Max width',
                width: 'Width',
            },
            tabs: {
                image: 'Image',
                details: 'Details',
                description: 'Description',
                reviews: 'Reviews',
            },
        },
        categories: {
            name: '产品分类',
            fields: {
                products: '产品',
            },
        },
        reviews: {
            name: '反馈',
            detail: 'Review detail',
            fields: {
                customer_id: 'Customer',
                command_id: 'Order',
                product_id: 'Product',
                date_gte: 'Posted since',
                date_lte: 'Posted before',
                date: '日期',
                comment: '评论',
                rating: '评分',
            },
            action: {
                accept: 'Accept',
                reject: 'Reject',
            },
            notification: {
                approved_success: 'Review approved',
                approved_error: 'Error: Review not approved',
                rejected_success: 'Review rejected',
                rejected_error: 'Error: Review not rejected',
            },
        },
        segments: {
            name: '标签',
            fields: {
                customers: '客户',
                name: '姓名',
            },
            data: {
                compulsive: 'Compulsive',
                collector: 'Collector',
                ordered_once: 'Ordered once',
                regular: 'Regular',
                returns: 'Returns',
                reviewer: 'Reviewer',
            },
        },
    },
};
