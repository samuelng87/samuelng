import Container from "../Container";
import Categories from "./Categories";
import Image from "next/image"
import YoutubeEmbed from "../Video";



const Navbar = () => {
  return (
    <div className="fixed w-full  z-10 shadow-sm">
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
        className="cursor-pointer"
        height="200"
        width="200"
        src="/image/sam.jpeg" 
    />
    
      <div className="flex bg-white">
      </div>
    
            </div>
          
        </Container>
        </div>
        <Categories />
    </div>    
    )
}

export default Navbar