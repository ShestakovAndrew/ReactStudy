import React from "react";

type InputPropsStyle = React.ComponentProps<'input'>

export const CustomInput = (props: InputPropsStyle) => {
    return <input {...props} />
}