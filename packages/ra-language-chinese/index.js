module.exports = {
    ra: {
        action: {
            add_filter: '添加筛选',
            add: '添加',
            back: '后退',
            bulk_actions: '1 item selected |||| %{smart_count} items selected',
            cancel: '取消',
            clear_input_value: '清除输入',
            clone: '克隆',
            confirm: '确认',
            create: '创建',
            delete: '删除',
            edit: '编辑',
            export: '导出',
            list: '列表',
            refresh: '刷新',
            remove_filter: '取消筛选',
            remove: '移除',
            save: '保存',
            search: '搜索',
            show: '表示',
            sort: '排序',
            undo: '撤销',
        },
        boolean: {
            true: '是',
            false: '否',
        },
        page: {
            create: 'Create %{name}',
            dashboard: '主页',
            edit: '%{name} #%{id}',
            error: 'Something went wrong',
            list: '%{name}',
            loading: 'Loading',
            not_found: 'Not Found',
            show: '%{name} #%{id}',
        },
        input: {
            file: {
                upload_several:
                    '将文件拖曳到这里或选择文件上传。',
                upload_single: '将文件拖曳到这里或选择文件上传。',
            },
            image: {
                upload_several:
                    '将图片拖曳到这里或选择图片上传。',
                upload_single:
                    '将图片拖曳到这里或选择图片上传。',
            },
            references: {
                all_missing: 'Unable to find references data.',
                many_missing:
                    'At least one of the associated references no longer appears to be available.',
                single_missing:
                    'Associated reference no longer appears to be available.',
            },
        },
        message: {
            about: '关于',
            are_you_sure: '是否确定?',
            bulk_delete_content:
                'Are you sure you want to delete this %{name}? |||| Are you sure you want to delete these %{smart_count} items?',
            bulk_delete_title:
                'Delete %{name} |||| Delete %{smart_count} %{name} items',
            delete_content: 'Are you sure you want to delete this item?',
            delete_title: 'Delete %{name} #%{id}',
            details: 'Details',
            error:
                "A client error occurred and your request couldn't be completed.",
            invalid_form: 'The form is not valid. Please check for errors',
            loading: 'The page is loading, just a moment please',
            no: 'No',
            not_found:
                'Either you typed a wrong URL, or you followed a bad link.',
            yes: 'Yes',
        },
        navigation: {
            no_results: '无数据',
            no_more_results:
                'The page number %{page} is out of boundaries. Try the previous page.',
            page_out_of_boundaries: 'Page number %{page} out of boundaries',
            page_out_from_end: 'Cannot go after last page',
            page_out_from_begin: 'Cannot go before page 1',
            page_range_info: '%{offsetBegin}-%{offsetEnd} of %{total}',
            page_rows_per_page: '每页显示:',
            next: '下一页',
            prev: '上一页',
        },
        auth: {
            user_menu: '资料',
            username: '用户名',
            password: '密码',
            sign_in: '登录',
            sign_in_error: '验证失败，请重试',
            logout: '登出',
        },
        notification: {
            updated: 'Element updated |||| %{smart_count} elements updated',
            created: 'Element created',
            deleted: 'Element deleted |||| %{smart_count} elements deleted',
            bad_item: 'Incorrect element',
            item_doesnt_exist: 'Element does not exist',
            http_error: 'Server communication error',
            data_provider_error:
                'dataProvider error. Check the console for details.',
            canceled: 'Action cancelled',
            logged_out: 'Your session has ended, please reconnect.',
        },
        validation: {
            required: '必填',
            minLength: '至少%{min}个字符',
            maxLength: '最多%{max}个字符',
            minValue: '必须大于%{min}',
            maxValue: '必须小于或等于%{max}',
            number: '必须是数字',
            email: '必须是电子邮件',
            oneOf: '必须是其中之一: %{options}',
            regex: '必须按照格式 (regexp): %{pattern}',
        },
    },
};
