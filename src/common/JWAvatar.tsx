import SampleAvatar from "../assets/images/sample-avatar.png";

export const JWAvatar = () => {
  return (
    <div className="bg-[#025077] w-[40px] h-[40px] rounded-full text-white">
      <p className="pl-[9px] pt-[10px] text-sm font-normal">JW</p>
    </div>
  )
}

const AvatarJW = () => {
  return (
    <div>
        <img src={SampleAvatar} className="w-10 h-10 rounded-full" />
    </div>
  )
}

export default AvatarJW;