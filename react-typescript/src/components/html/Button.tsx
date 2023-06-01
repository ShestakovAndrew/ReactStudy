import React from "react"

type ButtonPropsStyle = Omit<React.ComponentProps<'button'>, 'children'> & {
    variant: 'primary' | 'secondary'
    children: string
}

export const CustomButton = ({variant, children, ...rest}: ButtonPropsStyle) => {
    return <button className={`class-with-${variant}`} {...rest}>
        {children}
    </button>
}
