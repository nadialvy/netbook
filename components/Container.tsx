import classnames from 'classnames';

export default function Container({ content, addClassNames } : { content : any, addClassNames? : any }){
    return(
        <div className="py-6 px-40">
            <div className="container mx-auto">
                <div className={classnames("flex items-center", addClassNames)}>
                    {content}
                </div>
            </div>
        </div>
    );
}