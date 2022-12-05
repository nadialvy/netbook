export default function Container({ content } : { content : any }){
    return(
        <div className="py-6 px-40">
            <div className="container mx-auto">
                <div className="flex items-center">
                    {content}
                </div>
            </div>
        </div>
    );
}