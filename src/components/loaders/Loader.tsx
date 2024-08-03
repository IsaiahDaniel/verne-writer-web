import { RotateLoader } from "react-spinners";

type Props = {}

const Loader = (props: Props) => {
  return (
    <div className="flex flex-col items-center justify-center mt-10">
        <RotateLoader color="#025077" />
    </div>
  )
}

export default Loader