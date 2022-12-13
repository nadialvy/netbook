import BlogCard from "./BlogCard";
import Container from "./Container";
import Title from "./Title";

export default function Blog(){
    return(
        <div>
            <div className="text-center mt-24">
                <p className="text-blue-500 font-semibold">Get Our Application</p>
                <Title
                    content="Latest Newst"
                    isBig={false}
                />
            </div>
            <Container
                addClassNames="py-16"
                content = {
                    <>
                        <BlogCard
                            img="./blog_1.png"
                            content="It Does Not Matter Hows Slowly go as Long"
                        />
                        <BlogCard
                            img="./blog_2.png"
                            content="Netbook Network Added New Photo Filter"
                        />
                        <BlogCard
                            img="./blog_3.png"
                            content="We Optimised Netbooks Better Navigation"
                        />
                    </>
                }
            />
        </div>
    );
}