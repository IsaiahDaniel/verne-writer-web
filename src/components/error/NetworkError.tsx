import ErrorImage from "@/assets/images/NetworkError.svg";
import Button from "@/common/Button";
import { handleGetError } from "@/utils/helpers/handleError";

type ErrorProps = {
    refetch: any;
    error: any;
}

const NetworkError = ({ refetch, error }: ErrorProps) => {
    return (
        <div className='flex flex-col items-center justify-center'>
            <img src={ErrorImage} alt="" className="w-64 h-64" />
            <p>{handleGetError(error)}</p>
            <div className="mx-auto w-[30%] mt-5">
                <Button text='Try Again' onClick={() => refetch()} classNames="bg-[#025077] px-5 text-white mt-[-10px]" />
            </div>
        </div>
    )
}

export default NetworkError;