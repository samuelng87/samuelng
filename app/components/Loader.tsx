import { BarLoader } from "react-spinners"

const Loader = () => {
  return (
    <div
        className="
        h-[70vh]
        flex
        flex-col
        justify-center
        items-center
        "
    >
        <BarLoader
            height={4}
            width={100}
            color="black"
        />
    </div>
  )
}

export default Loader