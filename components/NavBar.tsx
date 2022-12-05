import NavItem from "./NavItem";
import Button from "./Button";
import Container from "./Container";

export default function NavBar(){
    return(
        <div className="border-b-2">
            <Container
                content = {
                    <>
                        <div className="w-2/12">
                            <img src="./logo.svg" alt="" />
                        </div>
                        <div className="w-6/12">
                            <NavItem />
                        </div>
                        <div className="w-4/12 flex justify-end">
                            <input type="text" className="bg-transparent py-4 w-1/3 bg-search pl-10 text-sm" placeholder="Search Here..." />
                            <Button content="Log in" color="ml-10 bg-blue-500 text-white" variant="small-primary"/>
                        </div>
                    </>
                }
            />
        </div>
    );
}