import SampleAvatar from "../assets/images/sample-avatar.png";

export const SOAvatar = () => {
  return (
    <div className="bg-[#B09400] w-[40px] h-[40px] rounded-full text-white">
      <p className="pl-[11px] pt-[10px] text-sm font-normal">SO</p>
    </div>
  )
}

const AvatarSO = () => {
  return (
    <div>
        <img src={SampleAvatar} className="w-10 h-10 rounded-full" />
    </div>
  )
}

export default AvatarSO;