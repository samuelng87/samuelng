interface BaseProps {
    children: React.ReactNode;
  }
  

const Base: React.FC<BaseProps> = ({
    children
}) => {
  return (
    <div
    className="
    mt-4 md:mt-8 lg:mt-16
    justify-center 
    w-auto 
    flex 
    bg-red-600 
    h-96 
    border-2 
    border-black 
    "
    >
        Base
        
        {children}

        </div>
  )
  
}

export default Base

