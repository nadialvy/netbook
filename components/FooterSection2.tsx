import Container from "./Container";

export default function FooterSection2() {
    return(
        <div className="bg-darkBlue-900 -my-2">
            <Container
                addClassNames="py-2"
                content={
                    <>
                        <div className="w-4/12 flex justify-start">
                            <p className="text-white">Besnik Creative Agency.</p>
                        </div>
                        <div className="w-4/12 flex justify-center">
                            <img src="./LogoLight.svg" alt="" />
                        </div>
                        <div className="w-4/12 flex justify-end space-x-2">
                            <img src="./facebook.svg" alt="" />
                            <img src="./instagram.svg" alt="" />
                            <img src="./Linkedin.svg" alt="" />
                            <img src="./Twitter.svg" alt="" />
                        </div>
                    </>
                }
            />
        </div>
    );
}