import SampleAvatar from "../assets/images/sample-avatar.png";

export const RSAvatar = () => {
  return (
    <div className="bg-[#C00DC3] w-[40px] h-[40px] rounded-full text-white">
      <p className="pl-[11px] pt-[10px] text-sm font-normal">RS</p>
    </div>
  )
}

const AvatarRS = () => {
  return (
    <div>
        <img src={SampleAvatar} className="w-10 h-10 rounded-full" />
    </div>
  )
}

export default AvatarRS;