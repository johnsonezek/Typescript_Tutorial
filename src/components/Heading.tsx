type HeadingProps = {
    children: string
}

export const Heading = (props: HeadingProps) => {
    console.log(props.children);
    
    return (
        <div>
           {props.children}
        </div>
    )
}