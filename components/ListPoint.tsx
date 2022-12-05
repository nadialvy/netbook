export default function ListPoint({ content } : { content : any }){
    return(
        <div className="flex mb-2">
            <img src="./point.svg" alt="" />
            <p className="text-xl font-semibold text-gray-800 ml-4">{content}</p>
        </div>
    );
}