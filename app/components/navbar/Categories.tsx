'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { 
  FaReact,


}
 from "react-icons/fa";

 import { 
  TbBrandNextjs,


}
 from "react-icons/tb";


import CategoryBox from "../CategoryBox";
import Container from '../Container';

export const categories = [
    {
        label: 'ReactJS',
        icon: FaReact,
        description: 'This property is close to the beach!',
      },
      {
        label: 'NextJS',
        icon: TbBrandNextjs,
        description: 'This property is has windmills!',
      },
      {
        label: 'Modern',
        icon: FaReact,
        description: 'This property is modern!'
      },
      {
        label: 'Countryside',
        icon: FaReact,
        description: 'This property is in the countryside!'
      },
      {
        label: 'Pools',
        icon: FaReact,
        description: 'This is property has a beautiful pool!'
      },
      {
        label: 'Islands',
        icon: FaReact,
        description: 'This property is on an island!'
      },
      {
        label: 'Lake',
        icon: FaReact,
        description: 'This property is near a lake!'
      },
      {
        label: 'Skiing',
        icon: FaReact,
        description: 'This property has skiing activies!'
      },
      {
        label: 'Castles',
        icon: FaReact,
        description: 'This property is an ancient castle!'
      },
      {
        label: 'Caves',
        icon: FaReact,
        description: 'This property is in a spooky cave!'
      },
      {
        label: 'Camping',
        icon: FaReact,
        description: 'This property offers camping activities!'
      },
      {
        label: 'Arctic',
        icon: FaReact,
        description: 'This property is in arctic environment!'
      },
      {
        label: 'Desert',
        icon: FaReact,
        description: 'This property is in the desert!'
      },
      {
        label: 'Barns',
        icon: FaReact,
        description: 'This property is in a barn!'
      },
      {
        label: 'Lux',
        icon: FaReact,
        description: 'This property is brand new and luxurious!'
      }
]

const Categories = () => {

    const params = useSearchParams();
    const category = params?.get('category');
    const pathname = usePathname();

    const isMainPage = pathname == '/';

    if(!isMainPage) {
        return null;
    }

  return (
    <Container>
        <div 
        className="
            pt-4
            flex
            flex-row
            items-center
            justify-between
            overflow-x-auto
        "
        >
            {categories.map((item) => (
                <CategoryBox
                key={item.label}
                label={item.label}
                selected={category == item.label}
                icon={item.icon}
                />
            ))}
            
        </div>
    </Container>
  );
}

export default Categories