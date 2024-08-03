import { useRef, useState } from "react";
import Layout from "../../common/Layout";
import Card from "../../common/Card";
// import Input from "../../common/Input";
import Button from "../../common/Button";
import UploadImage from "../../assets/images/upload-image.svg";
import AvatarJH, { JHAvatar } from "../../common/JHAvatar";
import AvatarJW, { JWAvatar } from "../../common/JWAvatar";
import useCreateCommunity from "@/hooks/community/useCreateCommunity";
import { Input } from "@material-tailwind/react";
import ErrorMessage from "@/components/error/ErrorMessage";

const CreateCommunity = () => {
  const MEMBERS = [
    {
      id: 1,
      image: <JHAvatar />,
      name: "Jennifer Huntley",
    },
    {
      id: 2,
      image: <JWAvatar />,
      name: "James Ward-Prowse",
    },
  ];

  const { addRules, handleCreateCommunity, selectedIndex, setRules, setFile, setSelectedIndex, fileRef, rules, file, register, errors, handleSubmit, isPending } = useCreateCommunity();

  console.log("errors", errors);

  return (
    <Layout>
      <main className="p-5 mt-10">
        <div className="ml-10">
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
            <span className="text-[#025077] font-medium">Communities</span>
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
            <span className="font-medium">Create communities</span>
          </div>

          <h2 className="py-3 text-2xl font-medium">Create New Community</h2>

          <div className="w-[90%] md:w-[48%] mx-auto mt-[30px] mb-4">
            <div className="flex items-center justify-between">
              <div
                className={`${selectedIndex === "community"
                  ? `bg-[#006969]`
                  : `bg-[#F0F0F0]`
                  } h-2 w-[150px]`}
                onClick={() => setSelectedIndex("community")}
              />
              <div
                className={`${selectedIndex === "members" ? `bg-[#006969]` : `bg-[#F0F0F0]`
                  } h-2 w-[150px]`}
                onClick={() => setSelectedIndex("members")}
              />
              <div
                className={`${selectedIndex === "rules" ? `bg-[#006969]` : `bg-[#F0F0F0]`
                  } h-2 w-[150px]`}
                onClick={() => setSelectedIndex("rules")}
              />
            </div>
          </div>

          <form 
            // onSubmit={handleSubmit(handleCreateCommunity)} 
            onSubmit={handleSubmit(handleCreateCommunity)}
            className="pb-36"
          >
            {selectedIndex === "community" && (
              <div className="w-[50%] mx-auto mt-10">
                <div className="bg-white rounded-md">
                  <div className="text-center py-5">
                    <h2 className="text-[36px] font-normal leading-10">
                      Create Your Own <br /> Community
                    </h2>
                    <p className="text-[16px] font-normal mt-[5px]">
                      Create a community of like-minded authors and make the{" "}
                      <br /> world a better place
                    </p>
                  </div>
                  <form className="px-5 py-5">
                    <div>
                      <Input
                        placeholder="Name of community"
                        label="name"
                        {...register("name", { required: true })}
                        error={errors.name ? true : false}
                      />
                      {errors.name && <ErrorMessage message={errors.name.message} />}
                    </div>

                    <div className="mt-2">
                      <div>
                        {file && (
                          <img
                            src={file ? URL.createObjectURL(file) : ""}
                            alt=""
                            className="w-[140px] h-[128px] object-cover mb-2 mr-3 flex flex-col items-center justify-center border-dashed"
                          />
                        )}
                      </div>

                      <div
                        className="bg-[#F0F0F0] w-full h-[95px] cursor-pointer border border-dashed border-[#919191] py-10 px-5"
                        onClick={() => fileRef.current.click()}
                      >
                        <div className="flex items-center justify-center mt-[-20px]">
                          <img src={UploadImage} />
                        </div>
                        <p className="text-[#667085] text-center">
                          Upload a cover image for this community
                        </p>
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

                    <div className="py-5">
                      <Input 
                        placeholder="Description" 
                        label="Description"
                        {...register("description", { required: true })}
                        error={errors.description ? true : false}
                      />
                    </div>

                    <div>
                      <Button
                        text="Continue"
                        classNames="bg-[#025077] text-white"
                        onClick={() => setSelectedIndex("members")}
                      />
                    </div>
                  </form>
                </div>
              </div>
            )}

            {selectedIndex === "members" && (
              <div className="w-[50%] mx-auto mt-10">
                <Card>
                  <div>
                    <h2 className="text-[36px] font-normal">Invite Members</h2>
                    <p className="text-[16px] font-normal mt-[5px]">
                      Invite members to your community
                    </p>
                  </div>

                  <>
                    {MEMBERS.map((member) => (
                      <div className="flex items-center justify-between border-b border-b-[#E1E1E1] space-y-3 mt-[30px] mb-2 py-4">
                        <div className="flex items-center">
                          <div className="mr-2">
                            <span>{member.image}</span>
                          </div>
                          <p className="text-sm font-medium">{member.name}</p>
                        </div>

                        <div className="mb-10">
                          <div className="bg-[#025077] flex items-center px-4 py-1 text-white cursor-pointer">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="17"
                              viewBox="0 0 16 17"
                              fill="none"
                              className="mr-[5px]"
                            >
                              <path
                                d="M7.5 1.25C7.72378 1.25 7.93839 1.3389 8.09662 1.49713C8.25486 1.65536 8.34375 1.86997 8.34375 2.09375V7.15625H13.4062C13.63 7.15625 13.8446 7.24514 14.0029 7.40338C14.1611 7.56161 14.25 7.77622 14.25 8C14.25 8.22378 14.1611 8.43839 14.0029 8.59662C13.8446 8.75486 13.63 8.84375 13.4062 8.84375H8.34375V13.9062C8.34375 14.13 8.25486 14.3446 8.09662 14.5029C7.93839 14.6611 7.72378 14.75 7.5 14.75C7.27622 14.75 7.06161 14.6611 6.90338 14.5029C6.74514 14.3446 6.65625 14.13 6.65625 13.9062V8.84375H1.59375C1.36997 8.84375 1.15536 8.75486 0.997129 8.59662C0.838895 8.43839 0.75 8.22378 0.75 8C0.75 7.77622 0.838895 7.56161 0.997129 7.40338C1.15536 7.24514 1.36997 7.15625 1.59375 7.15625H6.65625V2.09375C6.65625 1.86997 6.74514 1.65536 6.90338 1.49713C7.06161 1.3389 7.27622 1.25 7.5 1.25Z"
                                fill="white"
                              />
                            </svg>
                            <span>Invite</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </>

                  <div className="mt-6 space-y-2">
                    <Button
                      text="Continue"
                      bgcolor="#025077"
                      classNames="bg-[#025077] text-white"
                      onClick={() => setSelectedIndex("rules")}
                    />
                    <Button
                      text="Back"
                      classNames="text-[#005454] text-sm font-semibold font-bold bg-transparent border-[1px] border-[#006969]"
                      onClick={() => setSelectedIndex("community")}
                    />
                  </div>
                </Card>
              </div>
            )}

            {selectedIndex === "rules" && (
              <div className="w-[50%] mx-auto mt-10">
                <Card>
                  <div className="flex flex-col justify-center items-center">
                    <h2 className="text-[36px] font-normal">Set Rules</h2>
                    <p className="text-[16px] font-normal mt-[5px]">
                      Set rules for your community
                    </p>
                  </div>

                  <div className="my-[20px]">
                    <p className="text-[16px] font-medium mb-[10px]">
                      1. Treat all members with respect and dignity, regardless of
                      their background, beliefs, or experiences.
                    </p>
                    <p className="text-[16px] font-medium mb-[10px]">
                      2. Avoid discriminatory or offensive language, including hate
                      speech, slurs, and insults.
                    </p>
                    <p className="text-[16px] font-medium mb-[10px]">
                      3. Be mindful of the potential impact of your words on others,
                      and avoid causing harm or discomfort.
                    </p>
                    <p className="text-[16px] font-medium mb-[10px]">
                      4. Engage in constructive criticism and feedback, focusing on
                      the work itself and avoiding personal attacks.
                    </p>
                    <p className="text-[16px] font-medium">
                      5. Hold yourself and others accountable for upholding these
                      principles.
                    </p>
                  </div>

                  <div className="space-y-4">
                    {rules.map((rule, index) => (
                      <Input
                        key={rule.id}
                        placeholder={rule.placeholder + " " + `${index + 1}`}
                        label={`Rule ${index + 1}`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={addRules}
                    className="flex items-center bg-[#025077] py-1 px-3 mt-4"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                      className="mr-[5px]"
                    >
                      <path
                        d="M7.5 1.25C7.72378 1.25 7.93839 1.3389 8.09662 1.49713C8.25486 1.65536 8.34375 1.86997 8.34375 2.09375V7.15625H13.4062C13.63 7.15625 13.8446 7.24514 14.0029 7.40338C14.1611 7.56161 14.25 7.77622 14.25 8C14.25 8.22378 14.1611 8.43839 14.0029 8.59662C13.8446 8.75486 13.63 8.84375 13.4062 8.84375H8.34375V13.9062C8.34375 14.13 8.25486 14.3446 8.09662 14.5029C7.93839 14.6611 7.72378 14.75 7.5 14.75C7.27622 14.75 7.06161 14.6611 6.90338 14.5029C6.74514 14.3446 6.65625 14.13 6.65625 13.9062V8.84375H1.59375C1.36997 8.84375 1.15536 8.75486 0.997129 8.59662C0.838895 8.43839 0.75 8.22378 0.75 8C0.75 7.77622 0.838895 7.56161 0.997129 7.40338C1.15536 7.24514 1.36997 7.15625 1.59375 7.15625H6.65625V2.09375C6.65625 1.86997 6.74514 1.65536 6.90338 1.49713C7.06161 1.3389 7.27622 1.25 7.5 1.25Z"
                        fill="white"
                      />
                    </svg>
                    <span className="text-white">Add Another Rule</span>
                  </button>

                  <div className="mt-4 space-y-2">
                    <Button
                      text={isPending ? "loading..." : "Submit"}
                      bgcolor="#025077"
                      disabled={isPending}
                      // onClick={handleCreateCommunity}
                      type="submit"
                      classNames="bg-[#025077] text-white mb-[20px]"
                    />
                    <Button
                      text="Back"
                      onClick={() => setSelectedIndex("members")} 
                      classNames="text-[#005454] text-sm font-semibold font-bold bg-transparent border-[1px] border-[#006969]"
                    />
                    <Button
                      text="Skip & Create Community"
                      classNames="text-black text-sm font-semibold bg-[#f0f0f0]"
                    />
                  </div>
                </Card>
              </div>
            )}
          </form>

        </div>
      </main>
    </Layout>
  );
};

export default CreateCommunity;
