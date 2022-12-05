import Button from "./Button";
import Container from "./Container";
import Title from "./Title";

export default function Hero(){
    return(
        <Container
            content = {
              <>
                <div className="w-6/12">
                  <Button
                    content="Netbook Community"
                    color= "text-blue-500 font-semibold bg-blue-100 rounded-md"
                    variant="longways"
                  />
                  <Title
                    content="Your Solutions For Community!"
                    isBig={true}
                    addClassNames="mt-6"
                  />
                  <p className="text-gray-500 mt-6 mb-16">More than 2 billion people in over countries use socibook to stay in touch with friends & family.</p>
                  <Button
                    content="About More"
                    variant="normal-primary"
                    color="bg-blue-500 text-white"
                  />
                  <Button
                    content="Invite Friend"
                    variant="normal-primary"
                    color="text-blue-500 border border-blue-500 ml-4"
                  />
                </div>
                <div className="w-6/12">
                  <img src="./header-pict.png" alt="" className="pb-16" />
                </div>
            </>
            }
        />
    );
}