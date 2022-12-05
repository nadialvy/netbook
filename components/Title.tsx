import classnames from "classnames";

export default function Title({ content, isBig, addClassNames } : { content : any, isBig : any, addClassNames? : any }){
    return(
        <h1 className={classnames(
            "font-extra-bold text-blue-900",
            isBig ? "text-5xl" : "text-3xl",
            addClassNames
        )}>{content}</h1>
    );
}