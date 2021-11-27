import React from 'react';
import {FormField, Label, Select} from "semantic-ui-react";
import {useField} from "formik";

const MySelectInput = ({label,...props}) => {
    const [field, meta, helpers] = useField(props);
    return (
        <div>
            <FormField error={meta.touched && !!meta.error}>
                <label>{label}</label>
                <Select
                    clearable
                    value={field.value || null}
                    onChange={(e, d) => helpers.setValue(d.value)}
                    onBlur={() => helpers.setTouched(true)}
                    {...props}
                />
                {meta.touched && meta.error ?
                    <Label basic color={'red'}>{meta.error}</Label> : null}
            </FormField>

        </div>
    );
};

export default MySelectInput;
