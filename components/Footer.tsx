import Container from "./Container";
import SubTextFooter from "./SubTextFooter";

export default function Footer(){
    return(
        <div className="bg-darkBlue-800">
            <Container
                addClassNames="py-16 justify-center"
                content={
                    <>
                        <div className="w-8/12 flex justify-evenly text-white">
                            <div className="w-2/8">
                                <p className="font-semibold mb-8">Home</p>
                                <SubTextFooter content="Home" />
                                <SubTextFooter content="Community" />
                                <SubTextFooter content="Events" />
                                <SubTextFooter content="Contact" />
                            </div>
                            <div className="w-2/8">
                                <p className="font-semibold mb-8">Resources</p>
                                <SubTextFooter content="Blog" />
                                <SubTextFooter content="News" />
                                <SubTextFooter content="Guides" />
                                <SubTextFooter content="Help Center" />
                            </div>
                            <div className="w-2/8">
                                <p className="font-semibold mb-8">Community</p>
                                <SubTextFooter content="News Feed" />
                                <SubTextFooter content="Profile" />
                                <SubTextFooter content="Firends" />
                                <SubTextFooter content="Forums" />
                            </div>
                            <div className="w-2/8">
                                <p className="font-semibold mb-8">Main Links</p>
                                <SubTextFooter content="Membes" />
                                <SubTextFooter content="Activity" />
                                <SubTextFooter content="Groups" />
                                <SubTextFooter content="Private Group" />
                            </div>
                        </div>
                        <div className="w-4/12 text-white">
                            <p className="text-2xl mb-6">Subscribe Cirkle Newsletter</p>
                            <p className="text-sm opacity-75 mb-6">Subscribe to be the first one to know about updates. Enter your email</p>
                            <div className="flex">
                                <input type="text" name="" id="" placeholder="Email Address" className="text-sm rounded-none rounded-l-lg bg-transparent border border-white px-4 py-4 w-full" />
                                <span className="inline-flex items-center text-center px-4 text-sm font-semibold text-darkBlue-800 bg-white border border-r-0 border-gray-300 rounded-r-lg">
                                    Subscribe
                                </span>
                            </div>
                        </div>
                    </>
                }
            />
        </div>
    );
}