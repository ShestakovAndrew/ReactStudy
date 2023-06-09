import React from "react";

type TextOwnPropsType<E extends React.ElementType> = {
    size?: 'sm' | 'md' | 'lg'
    color?: 'primary' | 'secondary'
    children: React.ReactNode
    as?: E
}

type TextPropsType<E extends React.ElementType> = TextOwnPropsType<E> &
    Omit<React.ComponentProps<E>, keyof TextOwnPropsType<E>>

export const Text = <E extends React.ElementType = 'div'>({
    size,
    color,
    children,
    as
}: TextPropsType<E>) => {
    const Component = as || 'div'
    return (
        <Component className={`class-with-${size}-${color}`}>{children}</Component>
    )
}
