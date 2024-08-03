import Card from "../common/Card";
import Button from "../common/Button";
import { MdKeyboardArrowDown } from "react-icons/md";
import Gauge from "../assets/images/guage.png";
import UpGauge from "../assets/images/UpGuage.png";
import DownGauge from "../assets/images/DownGauge.png";
import Avatar from "../common/Avatar";
import LineGraphIcon from "../assets/icons/LineGraph"
import CreatePublication from "../components/CreatePublication";
import { Link, useNavigate } from "react-router-dom";



const DashboardComponent = ({ username }: { username: string }) => {
  const CARDS_CONTENT = [
    {
      id: 1,
      title: "Gross Revenue Earned",
      figure: "₦ 0.00",
      subText: "₦0 earned in the last 30 days",
      icon: <img src={Gauge} />,
    },
    {
      id: 2,
      title: "Publications",
      figure: "34",
      subText: "13 publications created in the last 30 days",
      icon: <img src={UpGauge} className="mt-[-10px]" />,
    },
    {
      id: 3,
      title: "Avg Read Rate",
      figure: "12%",
      subText: "1.2% down in the last 30 days",
      icon: <img src={DownGauge} />,
    },
  ];

  const GRAPH_CONTENT = [
    {
      id: 1,
      tag: "Subscribers",
      duration: (
        <span className="flex rounded-[5px] border-[1px] border-[#AEAEAE] mb-[30px]  mt-[-5px] divide-x">
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
      free_subscribers: "0",
      free_tag: (
        <section className="bg-[#025077] w-[10px] h-[10px] mt-[4px]"></section>
      ),
      free_tag_title: "Free Subscriber",
      paid_subscribers: "0",
      paid_tag: (
        <section className="bg-[#00A2A2] w-[10px] h-[10px] mt-[4px]"></section>
      ),
      paid_tag_title: "Paid Subscriber",
    },
  ];

  const navigate = useNavigate();

  

  return (
    <main className="p-5">
      <div className="flex items-center justify-between mt-[10px]">
        <h2 className="text-3xl font-medium">Welcome {username}</h2>
        <div className="flex cursor-pointer">
          <CreatePublication />
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-2 mt-5">
        {CARDS_CONTENT.map((content) => (
          <Card>
            <div className="space-y-3">
              <p className="text-[#767676] font-medium">{content.title}</p>
              <h2 className="text-[30px] font-semibold">{content.figure}</h2>
              <div className="flex items-center">
                <span>{content.icon}</span>
                <p className="text-[#767676] font-medium ml-3 text-[15px]">
                  {content.subText}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="flex justify-between gap-2 mt-5">
        <Card classNames="w-[700px] flex-1 w-[450px]">
          {GRAPH_CONTENT.map((graph) => (
            <div className="flex flex-col">
              <div className="flex justify-between">
                <p className="text-sm font-medium text-[#767676]">
                  {graph.tag}
                </p>
                <div className="flex ">
                  <span>{graph.duration}</span>
                </div>
              </div>
              <div className="flex ">
                <div className="flex flex-col w-[50%]">
                  <p className="text-[30px] font-medium">
                    {graph.free_subscribers}
                  </p>
                  <div className="flex">
                    <span>{graph.free_tag}</span>
                    <p className="text-sm font-medium text-[#767676] ml-[5px]">
                      {graph.free_tag_title}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col w-[50%]">
                  <p className="text-[30px] font-medium">
                    {graph.paid_subscribers}
                  </p>
                  <div className="flex">
                    <span>{graph.paid_tag}</span>
                    <p className="text-sm font-medium text-[#767676] ml-[5px]">
                      {graph.paid_tag_title}
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-[650px] h-[250px] my-[20px]">
                <LineGraphIcon/>
              </div>
            </div>
          ))}
        </Card>

        <Card classNames="w-[350px]">
          <h2 className="border-b border-b-[#CDCDCD] py-3 text-[#767676] font-medium text-sm">
            Recent Subscribers
          </h2>
          <div className="flex items-center mt-4 border-b border-b-[#CDCDCD] pb-4">
            <Avatar />
            <div className="ml-2">
              <h2 className="text-[#131313] text-sm font-semibold">
                Seun Agbawo
              </h2>
              <p className="text-[#767676] font-medium text-sm">
                Freelance Writer
              </p>
            </div>
          </div>

          <div className="flex items-center mt-4 border-b border-b-[#CDCDCD] pb-4">
            <Avatar />
            <div className="ml-2">
              <h2 className="text-[#131313] text-sm font-semibold">
                Seun Agbawo
              </h2>
              <p className="text-[#767676] font-medium text-sm">
                Freelance Writer
              </p>
            </div>
          </div>

          <div className="flex items-center mt-4">
            <Avatar />
            <div className="ml-2">
              <h2 className="text-[#131313] text-sm font-semibold">
                Seun Agbawo
              </h2>
              <p className="text-[#767676] font-medium text-sm">
                Freelance Writer
              </p>
            </div>
          </div>
        </Card>
      </div>
    </main>
  );
};

export default DashboardComponent;
