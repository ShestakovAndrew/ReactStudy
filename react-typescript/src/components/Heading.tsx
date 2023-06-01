type HeadingPropsType = {
    children: string
}

export const Heading = (props: HeadingPropsType) => {
    return <h2>{props.children}</h2>
}
