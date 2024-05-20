import SampleAvatar from "../assets/images/sample-avatar.png";

export const JSAvatar = () => {
  return (
    <div className="bg-[#02770E] w-[40px] h-[40px] rounded-full text-white">
      <p className="pl-[11px] pt-[10px] text-sm font-normal">JS</p>
    </div>
  )
}

const AvatarJS = () => {
  return (
    <div>
        <img src={SampleAvatar} className="w-10 h-10 rounded-full" />
    </div>
  )
}

export default AvatarJS;