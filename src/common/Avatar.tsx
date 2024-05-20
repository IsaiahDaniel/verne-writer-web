import SampleAvatar from "../assets/images/sample-avatar.png";
import GroupAvatar from "../assets/images/GroupAvatar.png";

export const AvatarInitials = () => {
  return (
    <div className="flex items-center">
      <img src={GroupAvatar} className="w-[40px] h-[30px] rounded-full" />
    </div>
  );
};

const Avatar = () => {
  return (
    <div>
      <img src={SampleAvatar} className="w-10 h-10 rounded-full" />
    </div>
  );
};

export default Avatar;
