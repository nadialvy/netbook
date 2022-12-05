import NavItem from "./NavItem";
import Button from "./Button";

export default function NavBar(){
    return(
        <div className="border-b-2">
            <div className="py-10 px-32">
                <div className="container mx-auto">
                    <div className="flex items-center">
                        <div className="w-2/12">
                            <img src="./logo.svg" alt="" />
                        </div>
                        <div className="w-6/12">
                            <NavItem />
                        </div>
                        <div className="w-4/12 flex">
                            <input type="text" className="py-4 w-1/3 bg-search pl-10 text-sm" placeholder="Search Here..." />
                            <Button content="Log in" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}