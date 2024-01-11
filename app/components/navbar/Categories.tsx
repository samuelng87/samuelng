
import { 
  FaReact, 
  FaBootstrap, 
  FaPhp, 
  FaHtml5, 
  FaCss3Alt 

} from "react-icons/fa";
 import { TbBrandNextjs, TbBrandVscode } from "react-icons/tb";
 import { SiTailwindcss, SiPrisma } from "react-icons/si";
 import { IoLogoJavascript } from "react-icons/io5";


import CategoryBox from "../CategoryBox";
import Container from '../Container';

export const categories = [
  {
      label: 'ReactJS',
      icon: FaReact,
    },
    {
      label: 'NextJS',
      icon: TbBrandNextjs,
    },
    {
      label: 'Tailwindcss',
      icon: SiTailwindcss,
    },
    {
      label: 'Bootstrap',
      icon: FaBootstrap,
    },
    {
      label: 'Prisma',
      icon: SiPrisma,
    },
    {
      label: 'Php',
      icon: FaPhp,
    },
    {
      label: 'Html5',
      icon: FaHtml5,
    },
    {
      label: 'CSS3',
      icon: FaCss3Alt,
    },
    {
      label: 'Javascript',
      icon: IoLogoJavascript,
    },
    {
      label: 'Vscode',
      icon: TbBrandVscode,
    },
    {
      label: 'Camping',
      icon: FaReact,
    },
    {
      label: 'Arctic',
      icon: FaReact,
    },
    {
      label: 'Desert',
      icon: FaReact,
    },
    {
      label: 'Barns',
      icon: FaReact,
    },
    {
      label: 'Lux',
      icon: FaReact,
      // description: ''
    }
]



const Categories = () => {
  return (
    <Container>
        <div 
        className=" 
            flex
            flex-row
            items-center
            overflow-x-auto
        "
        >
            {categories.map((item) => (
                <CategoryBox
                key={item.label}
                label={item.label}
                icon={item.icon}
                />
            ))}
            
        </div>
    </Container>
  );
}

export default Categories