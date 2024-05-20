import Layout from "../common/Layout";
import Button from "../common/Button";
import Card from "../common/Card";
import AvatarJH, { JHAvatar } from "../common/JHAvatar";
import AvatarJW, { JWAvatar } from "../common/JWAvatar";
import AvatarFO, { FOAvatar } from "../common/FOAvatar";
import AvatarCM, { CMAvatar } from "../common/CMAvatar";
import AvatarJI, { JIAvatar } from "../common/JIAvatar";
import React, { useState } from "react";
import { Input } from "@material-tailwind/react";

const UserProfile = () => {
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const [selectedIndex, setSelectIndex] = useState(0);

  const GROUP_CATEGORIES = [
    { id: 1, name: "Profile Details" },
    { id: 2, name: "Subscribers" },
    { id: 3, name: "Change Password" },
  ];

  const SUBSCRIBERS = [
    {
      id: 1,
      image: <JHAvatar />,
      user: "Jennifer Huntley",
      desc: "Writer on Fiction, Religion, Politics",
    },
    {
      id: 2,
      image: <JWAvatar />,
      user: "James Ward-Prowse",
      desc: "Writer on Politics, Business, Life",
    },
    {
      id: 3,
      image: <FOAvatar />,
      user: "Fikayo Odunmirin",
      desc: "Writer on Fiction, Religion, Politics",
    },
    {
      id: 4,
      image: <CMAvatar />,
      user: "Cyril Mbadiwe",
      desc: "Writer on Fiction, Religion, Politics",
    },
    {
      id: 5,
      image: <JIAvatar />,
      user: "Josh Igbakalu",
      desc: "Writer on Fiction, Religion, Politics",
    },
  ];

  return (
    <Layout>
      <main className="mt-10 h-full p-5">
        <div className="flex items-center space-x-3">
          <span className="text-[#008484] font-medium">Home</span>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="11"
              viewBox="0 0 10 11"
              fill="none"
            >
              <path
                d="M3.30828 1.52235C3.19111 1.63955 3.12529 1.79849 3.12529 1.96422C3.12529 2.12995 3.19111 2.28889 3.30828 2.4061L6.40203 5.49985L3.30828 8.5936C3.19443 8.71147 3.13143 8.86935 3.13286 9.03322C3.13428 9.1971 3.20001 9.35385 3.31589 9.46973C3.43177 9.58561 3.58853 9.65134 3.7524 9.65277C3.91628 9.65419 4.07415 9.59119 4.19203 9.47735L7.72765 5.94172C7.84482 5.82452 7.91064 5.66557 7.91064 5.49985C7.91064 5.33412 7.84482 5.17518 7.72765 5.05797L4.19203 1.52235C4.07482 1.40518 3.91588 1.33936 3.75015 1.33936C3.58443 1.33936 3.42548 1.40518 3.30828 1.52235Z"
                fill="#767676"
              />
            </svg>
          </div>
          <span className="font-medium">Profile</span>
        </div>

        <div className="flex items-center justify-between mt-5">
          <h2 className="text-3xl font-medium">Your Profile</h2>
        </div>

        <section className="border-b-[#CDCDCD] border-b py-3 space-x-5 mt-[30px]">
          <div className="flex items-center">
            {GROUP_CATEGORIES.map((groupTab, index) => (
              <div
                className="relative cursor-pointer"
                onClick={() => setSelectIndex(index)}
              >
                <p className={`mr-6`}>{groupTab.name}</p>
                <div
                  className={`${
                    selectedIndex === index &&
                    "border-b-2 border-b-[#008484] pt-10 w-[70%]"
                  } mr-6 absolute bottom-0 -top-1`}
                />
              </div>
            ))}
          </div>
        </section>

        <div className="mt-4 mx-5">
          {selectedIndex == 0 && (
            <Card classNames="lg:w-[60%] mt-[40px] ml-[180px]">
              <div className="flex flex-col">
                <div className="flex justify-betweeen gap-[20px]">
                  <div className="flex w-72 flex-col items-end gap-6">
                    <Input size="md" label="First Name" />
                  </div>
                  <div className="flex w-72 flex-col items-end gap-6">
                    <Input size="md" label="Last Name" />
                  </div>
                </div>

                <div className="flex justify-betweeen gap-[20px] mt-[30px]">
                  <div className="flex w-72 flex-col items-end gap-6">
                    <Input size="md" label="Username" />
                  </div>
                  <div className="flex w-72 flex-col items-end gap-6">
                    <Input size="md" label="Domain Name" />
                  </div>
                </div>

                <div className="flex w-90 flex-col items-end gap-6 mt-[30px]">
                  <Input size="md" label="Email" />
                </div>
              </div>
              <div className="ml-auto w-[30%] mt-4">
                <Button
                  text="Save Updates"
                  classNames="bg-[#025077] py-[8px]  px-3 text-white"
                />
              </div>
            </Card>
          )}

          {selectedIndex == 1 && (
            <Card classNames="lg:w-[55%] mt-[40px] ml-[180px]">
              {SUBSCRIBERS.map((subscriber) => (
                <div className="bg-white px-4 py-1.5">
                  <div className="flex items-center justify-between mb-[20px]">
                    <div className="flex ">
                      <span className="mr-3">{subscriber.image} </span>
                      <div className="space-y-1">
                        <div className="flex items-center">
                          <p className="text-sm font-semibold">
                            {subscriber.user}
                          </p>
                        </div>
                        <p className="text-sm text-[#767676]">
                          {subscriber.desc}
                        </p>
                      </div>
                    </div>
                    <div>
                      <Button
                        classNames="bg-[#000] rounded-none py-[4px] px-[24px] h-[25px] text-white text-xs"
                        text="Subscribe"
                      />
                    </div>
                  </div>
                  <hr className="w-full h-[2px]" />
                </div>
              ))}
            </Card>
          )}

          {selectedIndex == 2 && (
            <Card classNames="lg:w-[48%] mt-[40px] ml-[180px]">
              <div className="flex w-90 flex-col items-end gap-6">
                <Input size="md" label="Current Password" />
              </div>
              <div className="flex w-90 flex-col items-end gap-6 mt-[30px]">
                <Input size="md" label="New Password" />
              </div>
              <div className="flex w-90 flex-col items-end gap-6 mt-[30px]">
                <Input size="md" label="Confirm Password" />
              </div>
              <div className="flex justify-end">
                <Button
                  classNames="bg-[#025077] w-[135px] h-[35px] pl-[10px] pr-[10px] rounded-[5px] text-white text-sm truncate text-clip mt-[30px]"
                  text="Change Password"
                />
              </div>
            </Card>
          )}
        </div>
      </main>
    </Layout>
  );
};

export default UserProfile;
