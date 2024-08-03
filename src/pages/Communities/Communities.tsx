import React from "react";
import Layout from "../../common/Layout";
import Button from "../../common/Button";
import { Link, useNavigate } from "react-router-dom";
import { MdSearch } from "react-icons/md";
import { MdExpandMore } from "react-icons/md";
import GroupImage from "../../assets/images/group-image.svg";
import Avatar, { AvatarInitials } from "../../common/Avatar";
import useGetCommunities from "@/hooks/community/useGetCommunities";
import Loader from "@/components/loaders/Loader";
import NetworkError from "@/components/error/NetworkError";
import { error } from "console";

const Communities = () => {
  

  const COMMUNITIES = [
    {
      id: 1,
      image: GroupImage,
      title: "Gospel Writers",
      created_by: "John Hughes",
      people: "John Gboyega & 122 others are members",
      desc: "A community of writers dedicated to the spread of the gospel of Jesus Christ all over the world",
      published_date: "11/9/2023",
      joinLink: "11:09PM",
    },
    {
      id: 2,
      image: GroupImage,
      title: "Islamic Writers",
      created_by: "John Hughes",
      people: "John Gboyega & 122 others are members",
      desc: "A community of writers dedicated to the spread of the teachings of Prophet Mohammed all over the world",
    },
    {
      id: 3,
      image: GroupImage,
      title: "Design4All",
      created_by: "John Hughes",
      people: "John Gboyega & 122 others are members",
      desc: "Designers educating the world one letter at a time",
    },
    {
      id: 4,
      image: GroupImage,
      title: "Political Correspondents for USA",
      created_by: "John Hughes",
      People: "John Gboyega & 122 others are members",
      desc: "We inform citizens on political drama and upheavals through our creative enterprise",
    },
  ];

  const { data: communities, navigate, isPending, isError, error, refetch } = useGetCommunities();

  return (
    <Layout>
      <main className="mt-10 h-full p-5">
        <div className="flex items-center space-x-3">
          <span className="text-[#025077] font-medium">Home</span>
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
          <span className="font-medium">Community</span>
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
          <span className="font-medium">Communities</span>
        </div>

        <div className="flex items-center justify-between mt-5">
          <div className="flex flex-col">
            <h2 className="text-3xl font-medium">Communities</h2>
            <p className="text-sm font-normal">
              Explore and join communities with fellow writers to expand your
              network and gain knowledge
            </p>
          </div>
          <div>
            <Button
              text="Create Your Own Community"
              classNames="bg-[#025077] px-5 text-white mt-[-10px]"
              onClick={() => navigate("/communities/create")}
            />
          </div>
        </div>

        <div className="flex items-center justify-between mt-5 border-b border-[#CDCDCD] pb-4">
          <div className="flex items-center py-2 border border-[#CDCDCD] px-3 rounded-md w-[40%]">
            <MdSearch className="mr-2 w-[20px] h-[20px] opacity-30" />
            <input
              type="text"
              className="w-full outline-none bg-transparent"
              placeholder="Search Communities"
            />
          </div>

          <div className="w-[10%]">
            <select
              name=""
              id=""
              className="border border-[#CDCDCD] outline-[#CDCDCD] py-2 rounded-lg w-full px-1 text-[#919191]"
            >
              <option value="" className="">
                Category
              </option>
            </select>
          </div>
        </div>

        { isPending &&  <div className="mt-32"> <Loader /> </div>  }

        { isError && <NetworkError error={error} refetch={refetch} /> }

        {communities?.data?.map((community: any) => (
          <div className="bg-white px-4 py-4 my-5" key={community._id}>
            <div className="flex items-center justify-between">
              <div className="flex">
                <img src={community.image} className="mr-3" />
                <div className="space-y-1">
                  <Link to="/community-details">
                    <h2
                      className="text-base text-[#005454] font-medium cursor-pointer"
                      onClick={() => navigate("/community-details")}
                    >
                      {community.name}
                    </h2>
                  </Link>
                  <p className="text-sm font-normal text-[#767676]">
                    {community.description}
                  </p>
                  <div className="flex items-center">
                    <p className="mr-3 text-sm font-normal">
                      <span className="text-[#767676]">Created By:</span>{" "}
                      {community.creator._id}
                    </p>
                    <div className="flex items-center">
                      <span>
                        <AvatarInitials />
                      </span>
                      <p className="ml-1 text-sm font-normal">
                        {community.people}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <Button
                  classNames="bg-[#025077] px-5 text-white"
                  text="Join Now"
                  onClick={() => navigate(`/communities/join/${community._id}`)}
                />
              </div>
            </div>
          </div>
        ))}
      </main>
    </Layout>
  );
};

export default Communities;
