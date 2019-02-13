import React from 'react';
import {
    translate,
    Datagrid,
    Edit,
    EditButton,
    ReferenceManyField,
    SimpleForm,
    TextInput,
} from 'react-admin';

import ProductRefField from '../products/ProductRefField';

const CategoryTitle = translate(({ record, translate }) => (
    <span>
        {translate('resources.categories.name', { smart_count: 1 })} &quot;
        {record.name}&quot;
    </span>
));

const CategoryEdit = props => (
    <Edit title={<CategoryTitle />} {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <ReferenceManyField
                reference="products"
                target="category_id"
                label="pos.roles"
                perPage={5}
            >
                <Datagrid>
                    <ProductRefField source="reference" label='用户' />
                    <EditButton />
                </Datagrid>
            </ReferenceManyField>
        </SimpleForm>
    </Edit>
);

export default CategoryEdit;
