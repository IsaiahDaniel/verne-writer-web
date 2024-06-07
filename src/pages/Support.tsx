// import { Box } from "@mui/material";
// import SiginComponent from "../components/SigninComponent";

import { Link, useNavigate } from "react-router-dom";
import VerneLogo from "../assets/images/Verne20.png";
import { MdSearch } from "react-icons/md";
import Button from "../common/Button";
import UserIcon from "../assets/icons/UserIcon";
import DropdownActions from "../components/DropdownAction";
import Card from "../common/Card";
import GroupImage from "../assets/images/group-image.svg";
import Input from "../common/Input";
import { useState } from "react";

type Props = {};

const Support = (props: Props) => {
  const [selectedIndex, setSelected] = useState(0);

  const GROUP_CATEGORIES = [
    { id: 1, name: "Features & Topics" },
    { id: 2, name: "FAQs" },
    { id: 3, name: "Contact Support" },
  ];

  const FEATURES = [
    {
      id: 1,
      image: GroupImage,
      title: "How to create a Publication",
      desc: "Lorem ipsum dolor sit amet consectetur. Malesuada velit faucibus sed faucibus et nibh sit euismod. In ipsum venenatis ac morbi. Tellus netus faucibus molestie viverra nulla risus eleifend. Arcu ultrices ultrices ut tempor natoque quis odio mauris pretium.",
    },
  ];

  const navigate = useNavigate();
  return (
    <main className="w-full h-[100%] bg-[#F0FAFF]">
      <div className="flex justify-between items-center pt-[10px]">
        <img src={VerneLogo} alt="" className="w-[70px] h-[30px] ml-[40px]" />
        <div className="flex">
          <span
            className="text-[#667085] text-base font-medium cursor-pointer"
            onClick={() => navigate("/dashboard")}
          >
            Back to Dashboard
          </span>
          <div className="flex cursor-pointer mr-[10px] ml-[20px]">
            <Button withIcon Icon={UserIcon} classNames="w-[28px] h-[28px] " />
            <div className="mt-[-5px]">
              <DropdownActions />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mt-[10px]">
        <h1 className="text-[66px] font-medium text-[#131313]">
          Knowledge . Support
        </h1>
        <div className="flex items-center py-2 bg-[#fff] border border-[#025077] px-3 rounded-md w-[520px] h-[40px] mt-[10px]">
          <input
            type="text"
            className="w-full outline-none bg-transparent placeholder:text-sm placeholder:text-[#AEAEAE] "
            placeholder="Search"
          />
          <MdSearch className="mr-2 opacity-50 w-[25px] h-[25px] cursor-pointer" />
        </div>

        <section className="border-b-[#CDCDCD] border-b py-3 space-x-5 mt-[30px]">
          <div className="flex items-center">
            {GROUP_CATEGORIES.map((groupTab, index) => (
              <div
                className="relative cursor-pointer"
                onClick={() => setSelected(index)}
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

        <div className="w-[10%] mt-[20px] mr-[220px] flex self-end">
          <select
            name=""
            id=""
            className="bg-transparent border border-[#CDCDCD] outline-[#CDCDCD] py-1.5 rounded-lg w-full px-1 text-[#919191]"
          >
            <option value="" className="">
              All Categories
            </option>
          </select>
        </div>

        <div className="flex gap-[30px] items-center mb-[22px]">
          {selectedIndex == 0 && (
            <Card classNames="lg:w-[450px] mt-[40px] border-[#025077]">
              {FEATURES.map((feature) => (
                <div className="flex flex-col ml-[10px]">
                  <img src={feature.image} className="w-[51px] h-[48px] mr-3" />
                  <p className="text-base font-semibold text-[#005454] mt-[5px]">
                    {feature.title}
                  </p>
                  <p className="text-sm font-normal text-[#767676]">
                    Lorem ipsum dolor sit amet consectetur. Malesuada velit
                    faucibus sed faucibus et nibh sit euismod. In ipsum
                    venenatis ac morbi. Tellus netus faucibus molestie viverra
                    nulla risus eleifend. Arcu ultrices ultrices ut tempor
                    natoque quis odio mauris pretium.
                  </p>
                  <div className="flex self-start mt-[10px]">
                    <Button
                      classNames="bg-[#025077] text-white py-[4px] px-[10px]"
                      text="Learn More"
                      onClick={() => navigate("/communities/join/1")}
                    />
                  </div>
                </div>
              ))}
            </Card>
          )}
          {selectedIndex == 0 && (
            <Card classNames="lg:w-[450px] mt-[40px]">
              {FEATURES.map((feature) => (
                <div className="flex flex-col ml-[10px]">
                  <img src={feature.image} className="w-[51px] h-[48px] mr-3" />
                  <p className="text-base font-semibold text-[#005454] mt-[5px]">
                    {feature.title}
                  </p>
                  <p className="text-sm font-normal text-[#767676]">
                    Lorem ipsum dolor sit amet consectetur. Malesuada velit
                    faucibus sed faucibus et nibh sit euismod. In ipsum
                    venenatis ac morbi. Tellus netus faucibus molestie viverra
                    nulla risus eleifend. Arcu ultrices ultrices ut tempor
                    natoque quis odio mauris pretium.
                  </p>
                  <div className="flex self-start mt-[10px]">
                    <Button
                      classNames="bg-[#025077] text-white py-[4px] px-[10px]"
                      text="Learn More"
                      onClick={() => navigate("/communities/join/1")}
                    />
                  </div>
                </div>
              ))}
            </Card>
          )}
        </div>
      </div>
    </main>
  );
};

export default Support;
