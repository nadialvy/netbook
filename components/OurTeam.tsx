import Container from "./Container";
import MemberCard from "./MemberCard";
import Title from "./Title";

export default function OurTeam(){
    return(
        <div>
            <div className="text-center mx-20">
                <p className="text-blue-500 font-semibold">Valuable Team</p>
                <Title
                    content="Our Active Members"
                    isBig={false}
                    addClassNames="text-blue-900"
                />
                <p className="text-gray-500 mt-4">When an unknown printer took a galley of type and meeting fari scrambled it.</p>
            </div>

            {/* picture */}
            <Container
                addClassNames="py-16"
                content ={
                    <>
                        <MemberCard
                            img="./team_1.png"
                            name="Aditya Syahrul"
                            usn="@aditp"
                        />
                        <MemberCard
                            img="./team_2.png"
                            name="Kazi Rahman"
                            usn="@rahman"
                        />
                        <MemberCard
                            img="./team_3.png"
                            name="Noval Akbar"
                            usn="@nopal"
                        />
                        <MemberCard
                            img="./team_4.png"
                            name="Zulkipli"
                            usn="@kipli"
                        />
                    </>
                }
            />
        </div>
    );
}