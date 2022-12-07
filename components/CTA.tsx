import Container from "./Container";
import Title from "./Title";

export default function CTA(){
    return(
        <>
            <div className="bg-blue-100">
                <div className="px-40">
                    <div className="container mx-auto">
                        <div className="flex items-center justify-start">
                            <div className="w-1/3">
                                <p className="text-blue-500 font-semibold">Get Our Application</p>
                                <Title
                                    content="You Can Easily Find This App"
                                    isBig={false}
                                    addClassNames="text-blue-900"
                                />
                                <p className="text-gray-500 mt-4">I say chap that’s suing lavatory chip shop gosh off his smashing boot are you taking the piss posh loo brilliant.</p>
                                <img src="./download.png" alt="" className="mt-12 scale-75"/>
                            </div>
                            <div className="w-1/3"></div>
                            <div className="w-1/3">
                                <img src="./phone.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}