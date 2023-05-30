
const Button =(
    {
        content="",
        bgColor="",
        classNames="",
        linkto="",
        width="",
        height="",
        paddingY="py-2",
        paddingX="px-5"
    }
)=>
{
    return(
        <div className={`{bgColor,width,height,paddingX,paddingY}`}>
           {content}
        </div>
    )
}

export default Button;

