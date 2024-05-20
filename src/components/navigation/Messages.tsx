import React from "react";
import Layout from "../../common/Layout";
import Button from "../../common/Button";
import { Link, useNavigate } from "react-router-dom";
import { MdSearch } from "react-icons/md";
import { useState } from "react";
import AvatarJL, { JLAvatar } from "../../common/JLAvatar";
import AvatarJS, { JSAvatar } from "../../common/JSAvatar";
import AvatarMA, { MAAvatar } from "../../common/MAAvatar";

const Messages = () => {
  const navigate = useNavigate();

  const [selectedIndex, setSelectIndex] = useState(0);


  const GROUP_CATEGORIES = [
    { id: 1, all: "All Messages" },
    { id: 2, name: "Sent Messages" },
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
          <span className="font-medium">Messages</span>
        </div>

        <div className="flex items-center justify-between mt-5">
          <h2 className="text-3xl font-medium">Messages</h2>
          <div>
            <Button
              text="Create New Message"
              classNames="bg-[#025077] w-[200px] h-[40px] px-[10px] text-white text-medium"
            />
          </div>
        </div>

        <section className="mt-[30px] mx-1 border-b-[#CDCDCD] border-b py-1 space-x-5">
          <div className="flex items-center">
            {GROUP_CATEGORIES.map((groupTab, index) => (
              <div
                className="relative cursor-pointer"
                onClick={() => setSelectIndex(index)}
              >
                <p className={`mr-6 font-medium`}>{groupTab.all}</p>
                <p className="text-[#919191]">{groupTab.name}</p>
                <div
                  className={`${
                    selectedIndex === index &&
                    "border-b-2 border-b-[#008484] pt-8 w-[70%]"
                  } mr-6 absolute bottom-0 -top-1`}
                />
              </div>
            ))}
          </div>
        </section>

        <div className="flex items-center justify-between mt-10 border-[#CDCDCD] border-b pb-4">
          <div className="flex items-center py-2 border border-[#CDCDCD] px-3 rounded-md w-[40%]">
            <MdSearch className="mr-2 opacity-20 w-[20px] h-[20px] cursor-pointer" />
            <input
              type="text"
              className="w-full outline-none bg-transparent placeholder:text-sm placeholder:font-light "
              placeholder="Search Messages"
            />
          </div>

          <div className="flex ">
            <div className="border border-[#CDCDCD] w-[120px] h-[40px] px-2 rounded-md py-2 flex mr-[10px]">
              <div className="mr-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M9 11H7V13H9V11ZM13 11H11V13H13V11ZM17 11H15V13H17V11ZM19 4H18V2H16V4H8V2H6V4H5C3.89 4 3.01 4.9 3.01 6L3 20C3 20.5304 3.21071 21.0391 3.58579 21.4142C3.96086 21.7893 4.46957 22 5 22H19C20.1 22 21 21.1 21 20V6C21 4.9 20.1 4 19 4ZM19 20H5V9H19V20Z"
                    fill="#919191"
                  />
                </svg>
              </div>
              <span className="text-[#767676] text-sm pt-[2px]">Sort by Date</span>
            </div>

            <div className="w-[110px] ">
              <select
                name=""
                id=""
                className="bg-transparent border border-[#CDCDCD] outline-[#CDCDCD] text-[#767676] py-2.5 rounded-lg px-1 text-sm"
              >
                <option className="" value="">
                  All Messages
                </option>
              </select>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mt-5">
          <div className="flex items-center">
            <input type="checkbox" className="h-4 w-4 ml-[25px] mr-[10px] cursor-pointer" />
            <div>
              <p className="text-[#767676] text-sm">
                0 Selected<span className="text-[#131313] text-sm"> of 30 Items</span>
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <p className="mr-2 text-sm text-[#131313]">Actions on Selected Items:</p>
            <div className="bg-[#CDCDCD] flex items-center justify-center px-3 py-1 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="mr-[5px]"
              >
                <path
                  d="M2.5 4.00079H1.5C1.36739 4.00079 1.24021 3.94811 1.14645 3.85435C1.05268 3.76059 1 3.63342 1 3.50082C1 3.36822 1.05268 3.24105 1.14645 3.14729C1.24021 3.05353 1.36739 3.00086 1.5 3.00086H5.5V1.49996C5.5 1.36737 5.55268 1.2402 5.64645 1.14644C5.74021 1.05267 5.86739 1 6 1H10C10.1326 1 10.2598 1.05267 10.3536 1.14644C10.4473 1.2402 10.5 1.36737 10.5 1.49996V3.00086H14.5C14.6326 3.00086 14.7598 3.05353 14.8536 3.14729C14.9473 3.24105 15 3.36822 15 3.50082C15 3.63342 14.9473 3.76059 14.8536 3.85435C14.7598 3.94811 14.6326 4.00079 14.5 4.00079H13.5V14.5C13.5 14.6326 13.4473 14.7598 13.3536 14.8536C13.2598 14.9473 13.1326 15 13 15H3C2.86739 15 2.74021 14.9473 2.64645 14.8536C2.55268 14.7598 2.5 14.6326 2.5 14.5V4.00079ZM9.5 3.00086V2.00093H6.5V3.00086H9.5ZM3.5 14.0001H12.5V4.00079H3.5V14.0001ZM6.5 12.0002C6.36739 12.0002 6.24021 11.9475 6.14645 11.8538C6.05268 11.76 6 11.6328 6 11.5002V6.50061C6 6.36801 6.05268 6.24084 6.14645 6.14708C6.24021 6.05332 6.36739 6.00064 6.5 6.00064C6.63261 6.00064 6.75979 6.05332 6.85355 6.14708C6.94732 6.24084 7 6.36801 7 6.50061V11.5002C7 11.6328 6.94732 11.76 6.85355 11.8538C6.75979 11.9475 6.63261 12.0002 6.5 12.0002ZM9.5 12.0002C9.36739 12.0002 9.24021 11.9475 9.14645 11.8538C9.05268 11.76 9 11.6328 9 11.5002V6.50061C9 6.36801 9.05268 6.24084 9.14645 6.14708C9.24021 6.05332 9.36739 6.00064 9.5 6.00064C9.63261 6.00064 9.75979 6.05332 9.85355 6.14708C9.94732 6.24084 10 6.36801 10 6.50061V11.5002C10 11.6328 9.94732 11.76 9.85355 11.8538C9.75979 11.9475 9.63261 12.0002 9.5 12.0002Z"
                  fill="#919191"
                />
              </svg>
              <div className="text-[#919191]">
                <span className="text-sm">Delete</span>
              </div>
            </div>
          </div>
        </div>

        <div className="relative overflow-x-auto shadow-md  mt-8">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="bg-[#F0F0F0]">
              <tr className="flex justify-between">
                <th scope="col" className="flex px-6 py-3">
                  <input
                    type="checkbox"
                    className="w-4 h-4 mr-3 mt-[2px] cursor-pointer"
                  />
                  <p className="text-sm font-medium text-[#131313]">Messages</p>
                </th>

                <th scope="col" className="px-6 py-3">
                  <p className="text-sm font-medium text-[#131313] ">Action</p>
                </th>
              </tr>
            </thead>

            <tbody>
              <tr className=" w-full ">
                <div className="flex flex-col">
                  <div className="flex bg-[#F0FAFF] h-[70px]">
                    <input
                      type="checkbox"
                      className="w-4 h-4 ml-6 mt-[25px] cursor-pointer"
                    />
                    <div className="ml-[10px] mt-[10px]">
                      <JLAvatar />
                    </div>
                    <div className="flex flex-col ml-[20px] mt-[2px]">
                      <p className="text-sm font-medium text-[#131313] pt-[5px]">
                        John Louis
                      </p>
                      <p className="text-sm font-normal leading-tight text-[#131313]">
                        Lorem ipsum dolor sit amet consectetur. Condimentum
                        aliquam tristique fusce amet eleifend quis ante. <br />{" "}
                        Sed odio tellus dictum donec nibh. Urna nibh id elit a.
                        Felis nisl cursus enim vel id quam.
                      </p>
                    </div>

                    <div className="flex flex-col ml-[100px] mt-[2px]">
                      <p className="text-sm font-medium text-[#131313] pt-[5px]">
                        Jan 26, 2024
                      </p>
                      <p className="mt-[10px] ml-[24px] text-sm font-normal leading-tight text-[#767676]">
                        11:24PM
                      </p>
                    </div>

                    <span className="ml-[55px] mt-[20px] cursor-pointer">...</span>
                  </div>

                  <div className="flex bg-[#F0FAFF] h-[70px]">
                    <input
                      type="checkbox"
                      className="w-4 h-4 ml-6 mt-[25px] cursor-pointer"
                    />
                    <div className="ml-[10px] mt-[10px]">
                      <JSAvatar />
                    </div>
                    <div className="flex flex-col ml-[20px] mt-[2px]">
                      <p className="text-sm font-medium text-[#131313] pt-[5px]">
                        Joshua Selman
                      </p>
                      <p className="text-sm font-normal leading-tight text-[#131313]">
                        Lorem ipsum dolor sit amet consectetur. Condimentum
                        aliquam tristique fusce amet eleifend quis ante. <br />{" "}
                        Sed odio tellus dictum donec nibh. Urna nibh id elit a.
                        Felis nisl cursus enim vel id quam.
                      </p>
                    </div>

                    <div className="flex flex-col ml-[100px] mt-[2px]">
                      <p className="text-sm font-medium text-[#131313] pt-[5px]">
                        Jan 26, 2024
                      </p>
                      <p className="mt-[10px] ml-[24px] text-sm font-normal leading-tight text-[#767676]">
                        11:24PM
                      </p>
                    </div>

                    <span className="ml-[55px] mt-[20px] cursor-pointer">...</span>
                  </div>

                  <div className="flex bg-[#fff] h-[70px]">
                    <input
                      type="checkbox"
                      className="w-4 h-4 ml-6 mt-[25px] cursor-pointer"
                    />
                    <div className="ml-[10px] mt-[10px]">
                      <MAAvatar />
                    </div>
                    <div className="flex flex-col ml-[20px] mt-[2px]">
                      <p className="text-sm font-medium text-[#131313] pt-[5px]">
                        Mirabel Adetimi
                      </p>
                      <p className="text-sm font-normal leading-tight text-[#131313]">
                        Lorem ipsum dolor sit amet consectetur. Condimentum
                        aliquam tristique fusce amet eleifend quis ante. <br />{" "}
                        Sed odio tellus dictum donec nibh. Urna nibh id elit a.
                        Felis nisl cursus enim vel id quam.
                      </p>
                    </div>

                    <div className="flex flex-col ml-[100px] mt-[2px]">
                      <p className="text-sm font-medium text-[#131313] pt-[5px]">
                        Jan 26, 2024
                      </p>
                      <p className="mt-[10px] ml-[24px] text-sm font-normal leading-tight text-[#767676]">
                        11:24PM
                      </p>
                    </div>

                    <span className="ml-[55px] mt-[20px] cursor-pointer">...</span>
                  </div>
                </div>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center mt-5">
            <div className="mr-4">
              <select
                name=""
                id=""
                className="border border-[#CDCDCD] outline-[#CDCDCD] py-1 rounded-lg w-full px-2"
              >
                <option value="">20</option>
                <option value="">30</option>
                <option value="">40</option>
                <option value="">50</option>
              </select>
            </div>
            <p className="text-[#131313] font-normal">rows per page</p>
          </div>

          <div className="flex items-center space-x-4 mt-5">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <path
                  d="M8.32617 2.03716L3.80067 6.69916C3.71871 6.78112 3.67773 6.87912 3.67773 6.99316C3.67773 7.1072 3.71871 7.20972 3.80067 7.30072L8.32617 11.9627C8.40813 12.0356 8.5038 12.0721 8.61317 12.0721C8.72255 12.0721 8.81821 12.0311 8.90017 11.9492C8.98213 11.8672 9.02311 11.7715 9.02311 11.6622C9.02311 11.5528 8.98213 11.4571 8.90017 11.3752L4.63455 7.00016L8.90017 2.62516C8.98213 2.5432 9.02311 2.44754 9.02311 2.33816C9.02311 2.22879 8.98213 2.13312 8.90017 2.05116C8.81821 1.9692 8.72255 1.92822 8.61317 1.92822C8.5038 1.92822 8.40813 1.96468 8.32617 2.0376V2.03716Z"
                  fill="#006969"
                />
              </svg>
            </div>
            <span className="text-sm font-normal text-[#014161] cursor-pointer">1</span>
            <span className="text-sm font-medium text-[#014161] cursor-pointer">2</span>
            <span className="text-sm font-medium text-[#014161] cursor-pointer">3</span>
            <span className="text-sm font-medium text-[#014161] cursor-pointer">4</span>
            <span className="text-sm font-medium text-[#014161] cursor-pointer">5</span>
            <span className="text-sm font-medium text-[#014161] cursor-pointer">...</span>
            <span className="text-sm font-medium text-[#014161] cursor-pointer">100</span>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <path
                  d="M4.662 2.03706C4.58004 2.12835 4.53906 2.22868 4.53906 2.33806C4.53906 2.44743 4.58004 2.5431 4.662 2.62506L8.92763 7.00006L4.662 11.3751C4.58004 11.457 4.53906 11.5527 4.53906 11.6621C4.53906 11.7714 4.58004 11.8671 4.662 11.9491C4.74396 12.031 4.83963 12.072 4.949 12.072C5.05838 12.072 5.15404 12.0355 5.236 11.9626L9.7615 7.30062C9.84346 7.21866 9.88444 7.11833 9.88444 6.99962C9.88444 6.88091 9.84346 6.78058 9.7615 6.69862L5.236 2.03662C5.15404 1.9637 5.05838 1.92725 4.949 1.92725C4.83963 1.92725 4.74396 1.9637 4.662 2.03662V2.03706Z"
                  fill="#006969"
                />
              </svg>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Messages;
