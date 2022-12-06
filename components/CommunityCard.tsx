export default function CommunityCard({ icon, title, desc } : { icon : any, title : any, desc : any }){
    return(
        <div className="bg-white px-10 py-12 rounded-2xl flex items-start justify-center mx-6">
            <img src={icon} alt="" className="mr-8"/>
            <div>
                <p className="text-blue-900 text-lg font-semibold mb-4">{title}</p>
                <p className="text-gray-500 text-sm tracking-wide">{desc}</p>
            </div>
        </div>
    );
}