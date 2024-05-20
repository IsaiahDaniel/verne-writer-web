import { Link, useNavigate } from "react-router-dom";
import Layout from "../../common/Layout";
import Button from "../../common/Button";
import Card from "../../common/Card";
import CommentIcon from "../../assets/icons/CommentIcon";
import LikeIcon from "../../assets/icons/LikeIcon";
import ShareIcon from "../../assets/icons/ShareIcon";
import ReadIcon from "../../assets/icons/ReadIcon";
import UpGauge from "../../assets/images/UpGuage.png";
import AnalyticsChart from "../../assets/icons/AnalyticsChart";
import JanChart from "../../common/JanChart";
import FebChart from "../../common/FebChart";
import MarChart from "../../common/MarChart";
import AprChart from "../../common/AprChart";
import MayChart from "../../common/MayChart";
import JunChart from "../../common/JunChart";
import JulChart from "../../common/JulChart";
import AugChart from "../../common/AugChart";
import SepChart from "../../common/SepChart";
import OctChart from "../../common/OctChart";
import NovChart from "../../common/NovChart";
import DecChart from "../../common/DecChart";
import { useState } from "react";

type Props = {};

const AnalyticsPublication = (props: Props) => {
  const [selectedIndex, setSelected] = useState(0);

  const BOOKS = [
    {
      id: 1,
      comments: "Total Comments",
      comments_icon: <CommentIcon />,
      comments_number: "345",
      increase_icon: <img src={UpGauge} />,
      recent_comments: "10 comments up in the last 30 days",
    },
    {
      id: 2,
      likes: "Total Likes",
      likes_icon: <LikeIcon />,
      likes_number: "239",
      increase_likes_icon: <img src={UpGauge} />,
      recent_likes: "10 likes up in the last 30 days",
    },
    {
      id: 3,
      shares: "Total Shares",
      shares_icon: <ShareIcon />,
      shares_number: "10",
      increase_shares_icon: <img src={UpGauge} />,
      recent_shares: "5 shares up in the last 30 days",
    },
    {
      id: 4,
      reads: "Total Reads / Views",
      read_icon: <ReadIcon />,
      read_number: "300",
      increase_read_icon: <img src={UpGauge} />,
      recent_reads: "129 reads up in the last 30 days",
    },
    {
      id: 5,
      tag: "Books",
      selection: (
        <select className="w-[150px] h-[25px] rounded-[5px] border-[1px] border-[#AEAEAE] text-[#919191] text-sm font-normal">
          <option>All Books</option>
        </select>
      ),
      duration: (
        <span className="flex rounded-[5px] border-[1px] border-[#AEAEAE] mb-[40px] divide-x">
          <div className="p-[3px] bg-[#00A2A2] text-[12px] font-normal text-[#F0FAFF]">
            24hr
          </div>
          <div className="p-[3px] text-[12px] font-normal text-[#838383]">
            7d
          </div>
          <div className="p-[3px] text-[12px] font-normal text-[#838383]">
            1m
          </div>
          <div className="p-[3px] text-[12px] font-normal text-[#838383]">
            3m
          </div>
          <div className="p-[3px] text-[12px] font-normal text-[#838383]">
            6m
          </div>
          <div className="p-[3px] text-[12px] font-normal text-[#838383]">
            1yr
          </div>
        </span>
      ),

      read_stats: "20",
      reads_views_tag: (
        <section className="bg-[#FF6C6C] w-[10px] h-[10px] mt-[4px] mb-[30px]"></section>
      ),
      tag_title: "Reads / Views",

      like_stats: "93",
      like_tag: (
        <section className="bg-[#FFDF39] w-[10px] h-[10px] mt-[4px]"></section>
      ),
      like_tag_title: "Likes",

      comment_stats: "92",
      comment_tag: (
        <section className="bg-[#5DFF25] w-[10px] h-[10px] mt-[4px]"></section>
      ),
      comment_tag_title: "Comments",

      download_stats: "20",
      download_tag: (
        <section className="bg-[#00E6E6] w-[10px] h-[10px] mt-[4px]"></section>
      ),
      download_tag_title: "Downloads",

      saves_stats: "47",
      saves_tag: (
        <section className="bg-[#1238FC] w-[10px] h-[10px] mt-[4px]"></section>
      ),
      saves_tag_title: "Saves",

      shares_stats: "19",
      shares_tag: (
        <section className="bg-[#EE2BFF] w-[10px] h-[10px] mt-[4px]"></section>
      ),
      shares_tag_title: "Shares",
    },
    {
        id: 6,
        graph: <AnalyticsChart/>,
        jan_chart: <JanChart/>,
        feb_chart: <FebChart/>,
        mar_chart: <MarChart/>,
        apr_chart: <AprChart/>,
        may_chart: <MayChart/>,
        jun_chart: <JunChart/>,
        jul_chart: <JulChart/>,
        aug_chart: <AugChart/>,
        sep_chart: <SepChart/>,
        oct_chart: <OctChart/>,
        nov_chart: <NovChart/>,
        dec_chart: <DecChart/>,
    }
  ];

  const navigate = useNavigate();

  return (
    <Layout>
      <main className="mt-10 h-full p-5">
        <div className="flex items-center space-x-3">
          <span className="text-sm font-medium text-[#008484]">Home</span>
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
          <span className="text-sm font-medium text-[#000]">Analytics</span>
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
          <span className="text-sm font-medium text-[#000]">Publications</span>
        </div>

        <div className="flex items-center justify-between mt-5">
          <h2 className="text-3xl font-medium">Publications</h2>
        </div>

        <div>
          <section className="mt-[30px] mx-1 border-b-[#CDCDCD] border-b py-1 space-x-5">
            <div className="flex items-center relative">
              <p className="cursor-pointer mr-3" onClick={() => setSelected(0)}>
                Books
              </p>
              <p className="cursor-pointer mr-3" onClick={() => setSelected(1)}>
                Articles
              </p>
            </div>
          </section>

          <div className="flex justify-end gap-[10px] mt-[10px]">
            <div className="w-[25px] h-[25px] cursor-pointer">
              <svg
                width="29"
                height="29"
                viewBox="0 0 29 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.5">
                  <rect
                    x="29"
                    width="29"
                    height="29"
                    rx="14.5"
                    transform="rotate(90 29 0)"
                    fill="#025077"
                  />
                  <path
                    d="M17 8L9.96 15.04L17 22.08"
                    stroke="#F0FAFF"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </svg>
            </div>
            <div className="w-[25px] h-[25px] cursor-pointer">
              <svg
                width="29"
                height="29"
                viewBox="0 0 29 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  y="29"
                  width="29"
                  height="29"
                  rx="14.5"
                  transform="rotate(-90 0 29)"
                  fill="#025077"
                />
                <path
                  d="M12 21L19.04 13.96L12 6.92"
                  stroke="#F0FAFF"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex gap-[10px]">
              {selectedIndex == 0 && (
                <Card classNames="lg:w-[30%] h-[130px] mt-[40px]">
                  {BOOKS.map((book) => (
                    <div className="flex flex-col">
                      <div className="flex justify-between">
                        <p className="text-sm font-normal text-[#767676]">
                          {book.comments}
                        </p>
                        <span className="w-[25px] h-[25px]">
                          {book.comments_icon}
                        </span>
                      </div>
                      <p className="text-3xl font-medium">
                        {book.comments_number}
                      </p>
                      <div className="flex mt-[5px]">
                        <span className="w-[28px] h-[28px]">
                          {book.increase_icon}
                        </span>
                        <p className="text-sm font-normal text-[#767676] ml-[5px]">
                          {book.recent_comments}
                        </p>
                      </div>
                    </div>
                  ))}
                </Card>
              )}

              {selectedIndex == 0 && (
                <Card classNames="lg:w-[30%] h-[130px] mt-[40px]">
                  {BOOKS.map((book) => (
                    <div className="flex flex-col mt-[-30px]">
                      <div className="flex justify-between">
                        <p className="text-sm font-normal text-[#767676]">
                          {book.likes}
                        </p>
                        <span className="w-[25px] h-[25px]">
                          {book.likes_icon}
                        </span>
                      </div>
                      <p className="text-3xl font-medium">
                        {book.likes_number}
                      </p>
                      <div className="flex mt-[5px]">
                        <span className="w-[28px] h-[28px]">
                          {book.increase_likes_icon}
                        </span>
                        <p className="text-sm font-normal text-[#767676] ml-[5px]">
                          {book.recent_likes}
                        </p>
                      </div>
                    </div>
                  ))}
                </Card>
              )}

              {selectedIndex == 0 && (
                <Card classNames="lg:w-[30%] h-[130px] mt-[40px]">
                  {BOOKS.map((book) => (
                    <div className="flex flex-col mt-[-40px]">
                      <div className="flex justify-between">
                        <p className="text-sm font-normal text-[#767676]">
                          {book.shares}
                        </p>
                        <span className="w-[25px] h-[25px]">
                          {book.shares_icon}
                        </span>
                      </div>
                      <p className="text-3xl font-medium">
                        {book.shares_number}
                      </p>
                      <div className="flex mt-[5px]">
                        <span className="w-[28px] h-[28px]">
                          {book.increase_shares_icon}
                        </span>
                        <p className="text-sm font-normal text-[#767676] ml-[5px]">
                          {book.recent_shares}
                        </p>
                      </div>
                    </div>
                  ))}
                </Card>
              )}

              {selectedIndex == 0 && (
                <Card classNames="lg:w-[30%] h-[130px] mt-[40px]">
                  {BOOKS.map((book) => (
                    <div className="flex flex-col mt-[-45px]">
                      <div className="flex justify-between">
                        <p className="text-sm font-normal text-[#767676]">
                          {book.reads}
                        </p>
                        <span className="w-[25px] h-[25px]">
                          {book.read_icon}
                        </span>
                      </div>
                      <p className="text-3xl font-medium">{book.read_number}</p>
                      <div className="flex mt-[5px]">
                        <span className="w-[28px] h-[28px]">
                          {book.increase_read_icon}
                        </span>
                        <p className="text-sm font-normal text-[#767676] ml-[5px]">
                          {book.recent_reads}
                        </p>
                      </div>
                    </div>
                  ))}
                </Card>
              )}
            </div>
            {selectedIndex == 0 && (
              <Card classNames="lg:w-[100%] h-[460px] mt-[40px]">
                {BOOKS.map((book) => (
                  <div className="flex flex-col">
                    <div className="flex justify-between">
                      <p className="text-sm font-medium text-[#767676]">
                        {book.tag}
                      </p>
                      <div className="flex ">
                        <span>{book.selection}</span>
                        <span className="ml-[10px]">{book.duration}</span>
                      </div>
                    </div>
                    <div className="flex ">
                      <div className="flex flex-col w-[17%]">
                        <p className="text-[30px] font-medium">
                          {book.read_stats}
                        </p>
                        <div className="flex">
                          <span>{book.reads_views_tag}</span>
                          <p className="text-sm font-medium text-[#767676] ml-[5px]">
                            {book.tag_title}
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col w-[17%]">
                        <p className="text-[30px] font-medium">
                          {book.like_stats}
                        </p>
                        <div className="flex">
                          <span>{book.like_tag}</span>
                          <p className="text-sm font-medium text-[#767676] ml-[5px]">
                            {book.like_tag_title}
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col w-[17%]">
                        <p className="text-[30px] font-medium">
                          {book.comment_stats}
                        </p>
                        <div className="flex">
                          <span>{book.comment_tag}</span>
                          <p className="text-sm font-medium text-[#767676] ml-[5px]">
                            {book.comment_tag_title}
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col w-[17%]">
                        <p className="text-[30px] font-medium">
                          {book.download_stats}
                        </p>
                        <div className="flex">
                          <span>{book.download_tag}</span>
                          <p className="text-sm font-medium text-[#767676] ml-[5px]">
                            {book.download_tag_title}
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col w-[17%]">
                        <p className="text-[30px] font-medium">
                          {book.saves_stats}
                        </p>
                        <div className="flex">
                          <span>{book.saves_tag}</span>
                          <p className="text-sm font-medium text-[#767676] ml-[5px]">
                            {book.saves_tag_title}
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col w-[17%]">
                        <p className="text-[30px] font-medium">
                          {book.shares_stats}
                        </p>
                        <div className="flex">
                          <span>{book.shares_tag}</span>
                          <p className="text-sm font-medium text-[#767676] ml-[5px]">
                            {book.shares_tag_title}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col relative">
                        <span>{book.graph}</span>
                        <div className="flex ">
                            <span className="absolute top-[155px] left-[55px]">{book.jan_chart}</span>
                            <span className="absolute top-[162px] left-[140px]">{book.feb_chart}</span>
                            <span className="absolute top-[72px] left-[225px]">{book.mar_chart}</span>
                            <span className="absolute top-[50px] left-[310px]">{book.apr_chart}</span>
                            <span className="absolute top-[130px] left-[395px]">{book.may_chart}</span>
                            <span className="absolute top-[145px] left-[480px]">{book.jun_chart}</span>
                            <span className="absolute top-[82px] left-[560px]">{book.jul_chart}</span>
                            <span className="absolute top-[142px] left-[645px]">{book.aug_chart}</span>
                            <span className="absolute top-[98px] left-[730px]">{book.sep_chart}</span>
                            <span className="absolute top-[125px] left-[815px]">{book.oct_chart}</span>
                            <span className="absolute top-[75px] left-[898px]">{book.nov_chart}</span>
                            <span className="absolute top-[90px] left-[980px]">{book.dec_chart}</span>
                        </div>
                    </div>

                    
                    
                  </div>
                ))}
              </Card>
            )}
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default AnalyticsPublication;
