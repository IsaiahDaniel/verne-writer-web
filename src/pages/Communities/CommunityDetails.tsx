import Layout from "../../common/Layout";
import UploadMedia from "../../assets/images/upload-media.svg";
import Button from "../../common/Button";
import Avatar, { AvatarInitials } from "../../common/Avatar";
import AvatarJH, { JHAvatar } from "../../common/JHAvatar";
import Edit from "../../assets/images/edit.svg";
import DescEdit from "../../assets/images/Desc_Edit.svg";
import useGetCommunity from "@/hooks/community/useGetCommunity";

const CommunityDetails = () => {

  const { GROUP_CATEGORIES, data: community, error, isError, isPending, navigate, selectedIndex, setSelectIndex } = useGetCommunity();

  return (
    <Layout>
      <main>
        <div className="gradient-community-bg md:h-[100px] lg:h-[200px] w-full">
          <div className="flex items-center ml-10 relative">
            {/* absolute top-20 */}
            <div>
              <div className="border border-white rounded-full p-10 bg-[#006969] absolute top-20">
                <img src={UploadMedia} alt="" />
              </div>
              <div className="absolute left-56 top-20 text-white space-y-2">
                <div>
                  <div className="flex items-center space-x-3">
                    <span>Home</span>
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
                    <span>Community</span>
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
                    <span>{community.data.name}</span>
                  </div>
                  <div className="flex">
                    <h2 className="text-[30px] mr-[10px]">Gospel Writers</h2>
                    <div className="flex">
                      <img src={Edit} alt="" />
                      <span className="mt-[13px] ml-[5px]">Edit</span>
                    </div>
                  </div>
                  <p>
                    Created By:{" "}
                    <span className="underline underline-white">
                      John Huges
                    </span>
                  </p>
                </div>
                <div className="text-black w-[60%]">
                  <div className="flex">
                    <h2 className="font-medium text-[24px] mt-10 mb-2 mr-[10px]">
                      Description
                    </h2>
                    <div className="flex">
                      <img src={DescEdit} alt="" className="mt-[30px]" />
                      <span className="text-sm font-medium text-[#008484] mt-[47px] ml-[5px]">
                        Edit
                      </span>
                    </div>
                  </div>
                  <p className="text-justify">
                    Lorem ipsum dolor sit amet consectetur. At enim aliquet
                    morbi mauris purus convallis duis erat. At ultrices mi
                    viverra euismod faucibus pellentesque mi pulvinar.
                    Adipiscing posuere sagittis ornare dolor vestibulum. Nisl
                    feugiat quis vulputate vitae volutpat nulla et.
                  </p>
                  <div className="flex items-center py-2">
                    <AvatarInitials />
                    <p className="ml-2 text-[#131313] font-medium">
                      John Gboyega & 122 others are members
                    </p>
                  </div>
                  <div className="w-[40%] mt-3">
                    <Button
                      text="Preview as Visitor"
                      classNames="px-[4px] py-24px] text-[#005454] text-sm font-semibold font-bold bg-transparent border-[1px] border-[#006969]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="mt-[300px] mx-5 border-b-[#CDCDCD] border-b py-3 space-x-5">
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
          <div className="flex flex-col items-center justify-center w-[60%] mx-auto pb-5">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="158"
                height="158"
                viewBox="0 0 158 158"
                fill="none"
              >
                <path
                  d="M54.0038 15.7685C33.5132 18.0829 16.9417 32.2165 11.5722 51.9357C8.98002 61.4404 9.44291 71.9943 12.8374 81.5298C14.0718 84.9861 17.0652 90.5716 19.3179 93.6267C20.6449 95.4165 21.2621 96.5275 21.1386 96.8669C21.046 97.1447 19.2562 99.8911 17.2195 103.008C13.7632 108.223 13.4546 108.779 13.4546 110.167C13.4238 111.772 14.0101 112.852 15.5222 113.963C17.0652 115.136 18.3304 114.858 27.3105 111.34L35.6425 108.069L38.4816 109.427C41.7218 111.001 45.6101 112.327 49.3749 113.13C53.5101 114.056 63.7863 113.963 68.3226 113.006C85.8199 109.242 100.046 97.0212 105.662 80.9126C108.841 71.7165 109.18 60.3911 106.465 51.2876C103.348 40.7646 96.8984 31.6611 87.7331 24.8411C84.6163 22.5267 77.5187 18.8853 73.9081 17.7743C67.1808 15.6759 60.7003 15.0279 54.0038 15.7685ZM80.4503 48.2017C81.3761 49.0966 81.4378 50.8865 80.512 51.7197C79.8949 52.2751 79.0925 52.306 59.0956 52.306C39.0988 52.306 38.2964 52.2751 37.6792 51.7197C36.8152 50.9173 36.8152 49.1892 37.7101 48.2325L38.3581 47.5228H59.0648H79.7406L80.4503 48.2017ZM80.4503 63.0142C81.3761 63.9091 81.4378 65.699 80.512 66.5322C79.8949 67.0876 79.0925 67.1185 59.0956 67.1185C39.0988 67.1185 38.2964 67.0876 37.6792 66.5322C36.8152 65.7298 36.8152 64.0017 37.7101 63.045L38.3581 62.3353H59.0648H79.7406L80.4503 63.0142ZM80.4503 77.8267C81.3761 78.7216 81.4378 80.5115 80.512 81.3447C79.8949 81.9001 79.0925 81.931 59.0956 81.931C39.0988 81.931 38.2964 81.9001 37.6792 81.3447C36.8152 80.5423 36.8152 78.8142 37.7101 77.8575L38.3581 77.1478H59.0648H79.7406L80.4503 77.8267Z"
                  fill="#025077"
                />
                <path
                  d="M112.853 58.3547C113.346 63.0145 113.099 70.575 112.359 74.3707C110.446 84.184 106.094 93.1332 99.7065 100.447C92.6706 108.501 82.1475 114.889 71.8405 117.327C70.2667 117.697 68.9397 118.037 68.878 118.068C68.8163 118.098 69.3409 119.055 70.0198 120.197C80.4502 137.355 103.934 144.761 122.265 136.676C123.839 135.997 125.351 135.349 125.598 135.287C125.875 135.195 128.93 136.244 132.387 137.602C135.874 138.959 139.145 140.163 139.7 140.286C141.181 140.595 143.342 139.422 144.113 137.91C145.286 135.657 145.07 135.04 141.243 129.177L138.342 124.795L139.546 123.283C143.311 118.469 145.903 112.667 147.384 105.847C148.217 101.959 148.156 93.843 147.261 89.5844C143.835 73.6609 132.911 61.5332 118.191 57.2746C116.741 56.8735 114.889 56.4414 114.087 56.318L112.637 56.102L112.853 58.3547Z"
                  fill="#025077"
                />
              </svg>
            </div>
            <div className="text-center">
              <p className="text-[27px] font-medium">No Discussions yet in this Community</p>

              <p className="text-[16px] font-normal">
                This community does not have a discussion yet, but you can start
                a discussion topic to engage followers of this community
              </p>
            </div>

            <div className="w-[40%] mt-3">
              <Button
                text="Start a Discussion"
                classNames="bg-[#025077] py-[8px] px-[48px] text-white"
              />
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default CommunityDetails;
