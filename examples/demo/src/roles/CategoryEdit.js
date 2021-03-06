import React from 'react';
import {
    translate,
    Datagrid,
    Edit,
    EditButton,
    ReferenceManyField,
    SimpleForm,
    TextInput,
    TextField
} from 'react-admin';

const CategoryTitle = translate(({ record, translate }) => (
    <span>
        {translate('resources.poi.roles', { smart_count: 1 })} &quot;
        {record.name}&quot;
    </span>
));

const CategoryEdit = props => (
    <Edit title={<CategoryTitle />} {...props}>
        <SimpleForm>
            <TextInput source="name" label='权限' />
            <ReferenceManyField
                reference="users"
                target="category_id"
                label={null}
                perPage={5}
            >
                <Datagrid>
                    <TextField source='userid' label='ID' />
                    <TextField source='name' label='用户名' />
                    <EditButton />
                </Datagrid>
            </ReferenceManyField>
        </SimpleForm>
    </Edit>
);

export default CategoryEdit;
