import { IoIosArrowBack } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import WriteArticleIcon from "../../assets/icons/WriteArticleIcon";
import Button from "../../common/Button";
import ArticleSettingsIcon from "../../assets/icons/ArticleSettingsIcon";
import PublishArticleIcon from "../../assets/icons/PublishArticleIcon";

type ArticleNavbarProps = {
    selectedIndex: string;
}

const ArticleNavbar = ({ selectedIndex }: ArticleNavbarProps) => {

    const navigate = useNavigate();

    return (
        <nav className="bg-white py-2 shadow-md border-b border-b-[#AEAEAE] px-5">
            <div className="flex items-center justify-between">
                <div onClick={() => navigate(-1)} className="flex items-center cursor-pointer">
                    <IoIosArrowBack size={22} className="mr-2" />
                    <span>Go Back</span>
                </div>

                <div className="flex items-center">
                    <div className="flex items-center px-5">
                        <div className={`mr-2 ${selectedIndex === "write" ? "bg-[#025077]" : "bg-[#F0F0F0]"} px-2 py-2 rounded-md`}>
                            <WriteArticleIcon />
                        </div>
                        <p className="whitespace-nowrap">Write Article</p>
                    </div>
                    <div className="w-[30px] h-[1px] border-b border-2" />
                    <div className="flex items-center px-5">
                        <div className={`mr-2 ${selectedIndex === "settings" ? "bg-[#025077]" : "bg-[#F0F0F0]"} px-2 py-2 rounded-md`}>
                            <ArticleSettingsIcon />
                        </div>
                        <p className="whitespace-nowrap">Settings</p>
                    </div>
                    <div className="w-[40px] h-[1px] border-b border-2" />
                    <div className="flex items-center px-5">
                        <div className={`mr-2 ${selectedIndex === "publish" ? "bg-[#025077]" : "bg-[#F0F0F0]"} px-2 py-2 rounded-md`}>
                            <PublishArticleIcon />
                        </div>
                        <p className="whitespace-nowrap">Publish Article</p>
                    </div>
                    <div>
                        <Button text="Share" classNames="bg-[#025077] text-white px-5" />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default ArticleNavbar