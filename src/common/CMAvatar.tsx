import SampleAvatar from "../assets/images/sample-avatar.png";

export const CMAvatar = () => {
  return (
    <div className="bg-[#025077] w-[40px] h-[40px] rounded-full text-white">
      <p className="pl-[9px] pt-[10px] text-sm font-normal">CM</p>
    </div>
  )
}

const AvatarCM = () => {
  return (
    <div>
        <img src={SampleAvatar} className="w-10 h-10 rounded-full" />
    </div>
  )
}

export default AvatarCM;