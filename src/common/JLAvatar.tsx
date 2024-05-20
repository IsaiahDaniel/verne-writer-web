import SampleAvatar from "../assets/images/sample-avatar.png";

export const JLAvatar = () => {
  return (
    <div className="bg-[#025077] w-[40px] h-[40px] rounded-full text-white">
      <p className="pl-[11px] pt-[10px] text-sm font-normal">JL</p>
    </div>
  )
}

const AvatarJL = () => {
  return (
    <div>
        <img src={SampleAvatar} className="w-10 h-10 rounded-full" />
    </div>
  )
}

export default AvatarJL;