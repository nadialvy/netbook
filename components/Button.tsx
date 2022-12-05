export default function Button({ content } : { content : any }){
    return(
        <button className="ml-4 bg-blue-500 w-1/3 text-white px-10 py-4 rounded-2xl text-sm">{content}</button>
    );
}