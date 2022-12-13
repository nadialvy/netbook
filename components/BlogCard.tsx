export default function BlogCard({ img, content } : { img : any, content : any }){
    return (
    <div className="w-4/12 mx-6">
            <img src={img}alt="" className="mx-auto container"/>
            <div className="flex justify-center mt-4 mx-4">
                <hr className="line w-14 h-1 mt-4 bg-yellow-400 mr-3" />
                <p className="text-blue-900 font-semibold">{content}</p>
            </div>
            <div className="flex items-center justify-center mt-8">
                <p className="text-gray-500 mr-2">Continue Reading</p>
                <img src="./ArrowRightBlack.svg" alt=""></img>
            </div>
        </div>
    );
}