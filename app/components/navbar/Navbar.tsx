import Container from "../Container";
import Categories from "./Categories";
import Image from "next/image"



interface NavbarProps {
  children: React.ReactNode;
}

const Navbar: React.FC<NavbarProps> = ({
  children
}) => {
  console.log({children});
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
        <div className="py-4 border-[1px]">
            <Container>
                <div className="
                  flex
                  flex-row
                  items-center
                  justify-between
                  gap-3
                  md:gap-0
                "
                >
                  <Image
            alt="sam"
            className="hidden md:block cursor-pointer"
            height="200"
            width="200"
            src="/image/sam.jpeg" 
        />
                </div>
            </Container>
            </div>
            <Categories />
        </div>  
        );
}

export default Navbar