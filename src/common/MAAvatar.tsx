import SampleAvatar from "../assets/images/sample-avatar.png";

export const MAAvatar = () => {
  return (
    <div className="bg-[#7B61FF] w-[40px] h-[40px] rounded-full text-white">
      <p className="pl-[9px] pt-[10px] text-sm font-normal">MA</p>
    </div>
  )
}

const AvatarMA = () => {
  return (
    <div>
        <img src={SampleAvatar} className="w-10 h-10 rounded-full" />
    </div>
  )
}

export default AvatarMA;