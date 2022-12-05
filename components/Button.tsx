import classnames from 'classnames';

export default function Button({ content, color, variant } : { content : any, color? : any, variant : any}){
    const variants = {
        "small-primary": `px-10 py-4`,
        "normal-primary": `px-10 py-6`,
        "longways": `py-3`
    }

    const pickedVariant = variants[variant as keyof typeof variants];

    return(
        <button className={classnames(
            "w-1/3 rounded-2xl text-sm",
            color,
            pickedVariant
        )}>{content}</button>
    );
}