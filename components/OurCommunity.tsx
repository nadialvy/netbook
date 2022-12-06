import CommunityCard from "./CommunityCard";
import Container from "./Container";
import Title from "./Title";

export default function OurCommunity(){
    return (
        <div className="community-gradient mt-32">
            <div className="w-fit mx-auto text-center">
                <p className="text-blue-500 font-semibold">Our Community</p>
                <Title
                    content="Community Main Feature"
                    isBig={false}
                    addClassNames="mb-2"
                />
                <p className="text-gray-500">The wise man therefore always holds in these matters to this principle of selection.</p>
            </div>
            <Container
                addClassNames="flex-wrap px-8 py-20"
                content={
                    <>
                        <div className="w-6/12 mb-10">
                            <CommunityCard
                                icon="./member.png"
                                title="Members, Friends"
                                desc="Members, Friends Connection (like followers), Private Message"
                            />
                        </div>
                        <div className="w-6/12 mb-10">
                            <CommunityCard
                                icon="./groups.png"
                                title="Groups"
                                desc="Your users can create groups to let other users to join and talk"
                            />
                        </div>
                        <div className="w-6/12 mb-10">
                            <CommunityCard
                                icon="./forum.png"
                                title="Forum"
                                desc="Forum is ready by BBPress. Your users can make topics and talk."
                            />
                        </div>
                        <div className="w-6/12 mb-10">
                            <CommunityCard
                                icon="./custom_module.png"
                                title="Custom Module"
                                desc="You can create Members, Groups Module. We already created 3 modules. It's by drag & drop live builder."
                            />
                        </div>
                        <div className="w-6/12 mb-10">
                            <CommunityCard
                                icon="./list_builder.png"
                                title="List Builder"
                                desc="Members, Groups list can be modified by drag & drop live builder."
                            />
                        </div>
                        <div className="w-6/12 mb-10">
                            <CommunityCard
                                icon="./list_scroll.png"
                                title="List Scroll Efects"
                                desc="8 different scroll effects are ready. You can always change by your tastes."
                            />
                        </div>
                    </>
                }
            />
        </div>
    );
}