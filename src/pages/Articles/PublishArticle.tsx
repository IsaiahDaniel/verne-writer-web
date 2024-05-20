import ArticleNavbar from "../../components/navigation/ArticleNavbar";
import { EditorState } from 'draft-js';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import UploadImage from "../../assets/images/upload-image.svg";
import { useRef, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import Button from "../../common/Button";
import Input from "../../common/Input";

type IndexType = "write" | "settings" | "publish";

const PublishArticle = () => {

    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const [selectIndex, setSelectIndex] = useState<IndexType>("write");

    const [file, setFile] = useState<any>(null);
    const fileRef = useRef<any>();

    const onEditorStateChange = (editorState: any) => {
        setEditorState(editorState);
    };

    return (
        <div>
            <ArticleNavbar
                selectedIndex={selectIndex}
            />
            {selectIndex === "write" && (
                <div>
                    <Editor
                        editorState={editorState}
                        toolbarClassName="toolbarClassName"
                        // wrapperClassName="wrapperClassName1"
                        editorClassName="publishEditorClassName"
                        onEditorStateChange={onEditorStateChange}
                    />
                </div>
            )}

            {selectIndex === "settings" && (
                <div className="w-[86%] mx-auto mt-24">
                    <div className="bg-white rounded-md">
                        <div className="border-b border-[#F0F0F0] px-5 py-5">
                            <h2 className="text-[#131313] font-semibold text-xl">Settings</h2>
                        </div>

                        <form className="px-5 py-5">
                            <select name="" id="" placeholder="Category" className="border border-[#CDCDCD] outline-[#CDCDCD] py-3 rounded-lg w-full px-3">
                                <option className="text-[#AEAEAE]" value="" disabled>Category</option>
                                <option value="">Category one</option>
                                <option value="">Category Two</option>
                            </select>

                            <div className="bg-[#F8F8F8] py-4 px-4 mt-3">
                                <div className="flex items-center space-x-2">
                                    <div>
                                        <input type="radio" className="mr-1 accent-[#026E78]" />
                                        <span className="text-[#667085] text-[16px]">Free</span>
                                    </div>

                                    <div>
                                        <input type="radio" className="mr-1 accent-[#026E78]" />
                                        <span className="text-[#667085] text-[16px]">Paid</span>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-[#F8F8F8] py-4 px-4 mt-3">
                                <div className="flex items-center mt-3">
                                    <input type="checkbox" className="h-5 w-5 accent-[#025077] mr-1 rounded-full" />
                                    <span className="text-[#767676] text-[16px]">Show Excerpt</span>
                                </div>
                            </div>


                            <div className="mt-4">
                                <h2 className="text-[#667085] text-[16px]">Select Featured Image</h2>
                                <div className="flex items-center mt-2">
                                    <div>
                                        {file && (
                                            <img
                                                src={file ? URL.createObjectURL(file) : ""}
                                                alt=""
                                                className="w-[140px] h-[128px] object-cover mb-2 mx-auto mr-3"
                                            />
                                        )}
                                    </div>
                                    <div
                                        className="bg-[#F0F0F0] cursor-pointer border border-dotted border-[#919191] py-10 px-5"
                                        onClick={() => fileRef.current.click()}
                                    >
                                        <div className="flex items-center justify-center">
                                            <img src={UploadImage} />
                                        </div>
                                        <p className="text-[#667085]">Upload Image</p>
                                    </div>
                                    <input
                                        type="file"
                                        className="hidden"
                                        ref={fileRef}
                                        // onChange={onSelectFile}
                                        onChange={(e) => {
                                            setFile((e.target as any).files[0]);
                                        }}
                                    />
                                </div>
                            </div>

                            <div className="flex items-center mt-3">
                                <input type="checkbox" className="h-5 w-5 accent-[#025077] mr-1 rounded-full" />
                                <span className="text-[#767676] text-[16px]">Copyright this Book</span>
                            </div>
                        </form>

                    </div>
                </div>
            )}

            {selectIndex === "publish" && (
                <div className="bg-white w-[86%] mx-auto mt-10 p-5">
                    <h2 className="text-2xl">The Age of extintion</h2>
                    <p className="mt-2">8 Pages</p>
                </div>
            )}



            {/* Bottom Tabs */}
            {selectIndex === "write" && (
                <div className="w-[86%] mx-auto pb-5">
                    <div className="bg-white mt-0 border-t border-[#E1E1E1]">
                        <div className="flex item-end justify-end py-5 mr-5">
                            <div className="cursor-pointer">
                                <Button
                                    text="Continue"
                                    classNames="bg-[#025077] text-white px-8 py-2"
                                    onClick={() => setSelectIndex("settings")}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )}



            {selectIndex === "settings" && (
                <div className="w-[86%] mx-auto pb-5">
                    <div className="bg-white mt-0 border-t border-[#E1E1E1]">
                        <div className="flex item-end justify-end py-5 mr-5">
                            <div className="mr-4">
                                <Button
                                    text="Back"
                                    classNames="bg-[#F8F8F8] px-5"
                                    onClick={() => setSelectIndex("write")}
                                />
                            </div>
                            <div>
                                <Button
                                    text="Continue"
                                    classNames="bg-[#025077] text-white px-8 py-2"
                                    onClick={() => setSelectIndex("publish")}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {selectIndex === "publish" && (
                <div className="w-[86%] mx-auto pb-5">
                    <div className="bg-white mt-0 border-t border-[#E1E1E1]">
                        <div className="flex item-end justify-end py-5 mr-5">
                            <div className="mr-4 cursor-pointer"
                                onClick={() => setSelectIndex("settings")}>
                                <Button
                                    text="Back"
                                    classNames="bg-[#F8F8F8] px-5"

                                />
                            </div>
                            <div>
                                <Button
                                    text="Publish"
                                    classNames="bg-[#025077] text-white px-8 py-2"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </div>
    )
}

export default PublishArticle;