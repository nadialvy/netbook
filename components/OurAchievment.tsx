import Button from "./Button";
import Container from "./Container";
import Title from "./Title";

export default function OurAchievment(){
    return(
        <Container
            content={
                <>
                    <div className="w-4/12 shadow-xl rounded-md p-6">
                        <div className="flex items-center mb-4 mx-6">
                            <img src="./star.svg" alt="" />
                            <p className="text-blue-900 ml-4 font-semibold text-lg">4.8 Rating</p>
                        </div>
                        <div className="flex items-center mb-4">
                            <img src="./people.png" alt="" className="-ml-4"/>
                            <p className="text-gray-500"><span className="text-blue-500 font-semibold">+836k</span> Member</p>
                        </div>
                        <p className="text-gray-500 mb-8 tracking-wide">More than 2 billion we people over countries use socibooks we to stay in touch with friends.</p>
                        <div className="flex items-center">
                            <p className="text-blue-500 mr-2 font-semibold">Join Our Comunitas</p>
                            <img src="./ArrowRight.svg" alt="" />
                        </div>
                    </div>
                    <div className="w-4/12 shadow-xl rounded-md p-6 mx-6">
                        <div className="flex items-center mb-4">
                            <img src="./Trophy.svg" alt="" />
                            <p className="text-blue-900 ml-4 font-semibold text-lg">Awards</p>
                        </div>
                        <div className="flex items-center mb-4">
                            <img src="./github.svg" alt="" className="-ml-4"/>
                            <p className="text-gray-500">Best of <span className="text-blue-500 font-semibold">2021</span> on Github</p>
                        </div>
                        <p className="text-gray-500 mb-8 tracking-wide">More than 2 billion we people over countries use socibooks we to stay in touch with friends.</p>
                        <div className="flex items-center">
                            <p className="text-gray-600 mr-2 font-semibold">Go To Awards</p>
                            <img src="./ArrowRightBlack.svg" alt="" />
                        </div>
                    </div>
                    <div className="w-4/12 mx-6">
                        <div className="">
                            <p className="text-blue-500 font-semibold">Our Achievement</p>
                            <Title
                                content="We are Connecting You The Digital Life."
                                isBig={false}
                                addClassNames="mt-6"
                            />
                            <p className="text-gray-500 tracking-wide mt-4">The scope the Social Media becomes crucial Is helps the business to directly engage with their needs and wants.</p>
                            <Button
                                content="Discover Me"
                                variant="longways"
                                color="mt-8 bg-blue-500 text-white"
                            />
                        </div>
                    </div>
                </>
            }
        />
    );
}