export default function MemberCard({ img, name, usn} : { img : any, name : any, usn : any }){
    return(
        <div className="w-3/12 mx-4">
            <div className="border border-gray-200 p-4 rounded-2xl shadow-none hover:border-none hover:shadow-xl hover:transition">
                <div className="w-fit mx-auto">
                    <img src={img} alt=""/>
                    <div className="text-center my-8">
                        <p className="text-2xl text-blue-900 font-semibold">{name}</p>
                        <p className="text-gray-500 mt-2">{usn}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
