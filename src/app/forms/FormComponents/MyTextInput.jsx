import React from 'react';
import {useField} from "formik";
import {FormField, Label} from "semantic-ui-react";

const MyTextInput = ({label, ...props}) => {
    /*
    ...props contains all the values.
     */

    const [field, meta] = useField(props);
    /*
    field--> onChange, onBlur, name, and value
    meta --> value, touched, error, and initialValue
     */

    return (
        <FormField error={meta.touched && !!meta.error}>

            <label>{label}</label>
            <input {...field} {...props}/>
            {meta.touched && meta.error ? <Label basic color={'red'}>{meta.error}</Label> : null}

        </FormField>
    );
};

export default MyTextInput;
