import Container from "./Container";
import Title from "./Title";
import ListPoint from "./ListPoint";

export default function AboutUs(){
    return(
        <Container
            content = {
                <>
                    <div className="w-6/12 py-32">
                        <div className="w-3/4">
                            <p className="text-blue-500 font-semibold">Whats Netbooks?</p>
                            <Title
                                content="Why Join to Netbook Social Network?"
                                isBig={false}
                                addClassNames="mt-6"
                            />
                            <p className="text-gray-500 mt-8 mb-10 tracking-wide">Recent surveys have indicated that small businesses recognise the need they have to connect with consumer.</p>
                            <ListPoint content="Groups"/>
                            <ListPoint content="Messages"/>
                            <ListPoint content="Share"/>
                        </div>
                    </div>
                    <div className="w-6/12 flex items-center">
                        <img src="./about_us_1.png" alt="" className="w-1/2 h-1/2 pr-8" />
                        <div>
                            <img src="./about_us_2.png" alt="" className="pb-8" />
                            <img src="./about_us_3.png" alt="" />
                        </div>
                    </div>
                </>
            }
        />
    );
}