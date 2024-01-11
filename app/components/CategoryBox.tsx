import { IconType } from 'react-icons';

interface CategoryBoxProps {
    icon: IconType;
    label: string;
}

const CategoryBox: React.FC<CategoryBoxProps> = ({
    icon: Icon,
    label
}) => {
     return (
    <div
    className="
        flex
        flex-col
        items-center
        justify-center
        gap-2
        p-3
        border-b-2
        "
        >
        <Icon size={25}
        />
        <div className="font-medium text-[10px]">
        {label}
      </div>
    </div>
  )
}

export default CategoryBox