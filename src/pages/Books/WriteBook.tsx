import { Editor } from "react-draft-wysiwyg";
import BookNavbar from "../../components/navigation/BookNavbar";
import { useRef, useState } from "react";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import Button from "../../common/Button";
import Input from "../../common/Input";
import UploadImage from "../../assets/images/upload-image.svg";

type IndexType = "write" | "settings" | "publish";

const WriteBook = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [selectIndex, setSelectIndex] = useState<IndexType>("write");

  const [file, setFile] = useState<any>(null);
  const fileRef = useRef<any>();

  const onEditorStateChange = (editorState: any) => {
    setEditorState(editorState);
  };

  return (
    <>
      <BookNavbar selectedIndex={selectIndex} />
      {selectIndex === "write" && (
        <div className="flex items-center justify-center mt-24">
          <Editor
            editorState={editorState}
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
            onEditorStateChange={onEditorStateChange}
          />
        </div>
      )}

      {selectIndex === "publish" && (
        <div className="flex items-center justify-center mt-24">
          <Editor
            editorState={editorState}
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
            onEditorStateChange={onEditorStateChange}
          />
        </div>
      )}

      {selectIndex === "settings" && (
        <div className="w-[50%] mx-auto mt-24">
          <div className="bg-white rounded-md">
            <div className="border-b border-[#F0F0F0] px-5 py-5">
              <h2 className="text-[#131313] font-semibold text-xl">Settings</h2>
            </div>

            <form className="flex flex-col justify-center items-center px-3 py-3">
              <select
                name=""
                id=""
                placeholder="Category"
                className="border border-[#CDCDCD] outline-[#CDCDCD] py-1 rounded-lg w-[550px] h-[40px] px-3 text-[#919191] mt-[10px]"
              >
                <option
                  className="text-[#919191] text-base font-normal"
                  value=""
                >
                  Category
                </option>
                <option value="">Fiction</option>
                <option value="">Non-Fiction</option>
                <option value="">Mystery and Thriller</option>
                <option value="">Sci-Fi</option>
                <option value="">Romance</option>
                <option value="">Horror</option>
                <option value="">Biography and Autobiography</option>
                <option value="">Historical Fiction</option>
                <option value="">Science and Nature</option>
                <option value="">Travel</option>
                <option value="">Poetry</option>
                <option value="">Humor and Satire</option>
                <option value="">Drama and Plays</option>
                <option value="">Religion and Spirituality</option>
                <option value="">Cookbooks and Food</option>
                <option value="">Graphic Novels and Comics</option>
                <option value="">Art and Photography</option>
                <option value="">Reference and Educational</option>
                <option value="">Self-Help and Personal Development</option>
              </select>

              <div className="flex w-[550px] h-[60px] bg-[#F8F8F8] mt-[30px]">
                <div className="flex items-center ml-[20px]">
                  <input
                    type="radio"
                    className="h-5 w-5 accent-[#025077] mr-2 rounded-full"
                  />
                  <span className="text-base font-normal text-[#667085]">
                    Free
                  </span>
                </div>

                <div className="flex items-center ml-[20px]">
                  <input
                    type="radio"
                    className="h-5 w-5 accent-[#025077] mr-2 rounded-full"
                  />
                  <span className="text-base font-normal text-[#667085]">
                    Paid
                  </span>
                </div>
              </div>

              <div className="flex w-[550px] h-[60px] bg-[#F8F8F8] mt-[30px]">
                <div className="flex items-center ml-[20px]">
                  <input
                    type="checkbox"
                    className="h-5 w-5 accent-[#025077] mr-2"
                  />
                  <span className="text-base font-normal text-[#667085]">
                    Show Excerpt
                  </span>
                </div>
              </div>
            </form>

            <form className="ml-[65px]">
              <div className="mt-4">
                <h2 className="text-[#667085] text-[16px]">Set Book Cover</h2>
                <div className="flex items-center  mt-2">
                  <div>
                    {file && (
                      <img
                        src={file ? URL.createObjectURL(file) : ""}
                        alt=""
                        className="w-[120px] h-[90px] object-cover mb-2 mx-auto mr-3"
                      />
                    )}
                  </div>
                  <div
                    className="w-[120px] h-[90px] bg-[#F0F0F0] cursor-pointer border border-dashed border-[#919191] py-3"
                    onClick={() => fileRef.current.click()}
                  >
                    <div className="flex items-center justify-center mt-[5px]">
                      <img src={UploadImage} />
                    </div>
                    <p className="text-[#667085] text-sm font-normal text-center truncate mt-[5px]">Upload Image</p>
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

              <div className="flex items-center mt-[20px] pb-[20px]">
                <input
                  type="checkbox"
                  className="h-5 w-5 accent-[#025077] mr-2"
                />
                <span className="text-base font-normal text-[#667085]">
                  Copyright this Article
                </span>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Bottom Buttons */}
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
        <div className="w-[50%] mx-auto pb-5">
          <div className="bg-white mt-0 border-t border-[#E1E1E1]">
            <div className="flex item-end justify-end py-5 mr-5">
              <div className="mr-4">
                <Button
                  text="Back"
                  classNames="bg-[#F8F8F8] px-10 text-base font-medium"
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
              <div
                className="mr-4 cursor-pointer"
                onClick={() => setSelectIndex("settings")}
              >
                <Button text="Back" classNames="bg-[#F8F8F8] px-5" />
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
    </>
  );
};

export default WriteBook;
