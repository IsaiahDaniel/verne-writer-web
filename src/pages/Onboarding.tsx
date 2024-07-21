import VerneLogo from "../assets/images/Verne20.png";
import Card from "../common/Card";
import Pills from "../components/Pills";
import Button from "../common/Button";
// import Input from "../common/Input";
import useCompleteOnboarding from "@/hooks/auth/useCompleteOnboarding";
import { Input } from "@material-tailwind/react";

const Onboarding = () => {

  const { PILLS, addSubscriber, handlePillClick, handleSubmit, handleInputChange, isPending, isSuccess, errors, register, selectedIndex, setSelectedIndex, preferences, setPreferences, handleCompleteProfile, subscribers } = useCompleteOnboarding();


  return (
    <main className="w-full mx-auto py-10 bg-[#F0FAFF]">
      <div>
        <img src={VerneLogo} alt="" className="w-[115px] ml-[50px]" />
      </div>

      <form onSubmit={handleSubmit(handleCompleteProfile)} className="flex flex-col items-center justify-center h-[80vh]">
        <div className="w-[90%] md:w-[40%] mb-4">
          <div className="flex items-center justify-between">
            <div
              className={`${selectedIndex === "category" ? `bg-[#006969]` : `bg-[#F0F0F0]`
                } h-3 w-[150px] cursor-pointer`}
              onClick={() => setSelectedIndex("category")}
            />
            <div
              className={`${selectedIndex === "username" ? `bg-[#006969]` : `bg-[#F0F0F0]`
                } h-3 w-[150px] cursor-pointer`}
              onClick={() => setSelectedIndex("username")}
            />
            <div
              className={`${selectedIndex === "subscribers"
                  ? `bg-[#006969]`
                  : `bg-[#F0F0F0]`
                } h-3 w-[150px] cursor-pointer`}
              onClick={() => setSelectedIndex("subscribers")}
            />
          </div>
        </div>

        {selectedIndex === "category" && (
          <Card classNames="w-[40%] mt-[20px]">
            <div>
              <h2 className="text-[36px] font-medium">Select Category</h2>
              <p>Select categories you are interested in</p>
            </div>

            <div className="flex flex-wrap items-center gap-3 mt-4 cursor-pointer">
              {PILLS.map((pill) => (
                <Pills
                  text={pill.text}
                  key={pill.text}
                  onClick={() => handlePillClick(pill.text)}
                  selectedPill={preferences.includes(pill.text)}
                />
              ))}
            </div>

            <div className="mt-4 space-y-2">
              <Button
                text="Submit"
                bgcolor="#025077"
                classNames="bg-[#025077] text-white"
              />
              <Button
                text="Skip to Next Step"
                bgcolor="#767676"
                classNames="text-black font-bold bg-[#F0F0F0]"
                onClick={() => setSelectedIndex("username")}
              />
            </div>
          </Card>
        )}

        {selectedIndex === "username" && (
          <Card classNames="w-[40%] mt-[20px]">
            <div>
              <h2 className="text-[36px] font-medium">Create Username</h2>
              <p>Select categories you are interested in</p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 mt-4 cursor-pointer">
              {/* <Input placeholder="Username" /> */}
              <div className="flex-1">
                <Input
                  label="Username"
                  {...register("username", { required: true })}
                  error={errors.username ? true : false}
                />
              </div>
              <div className="flex-1">
                <Input label="Domain" placeholder="domain" value={".com"} />
              </div>
            </div>

            <div className="mt-4 space-y-2">
              <Button
                text="Submit"
                bgcolor="#025077"
                classNames="bg-[#025077] text-white"
              />
              <Button
                text="Skip to Next Step"
                bgcolor="#767676"
                classNames="text-black font-bold bg-[#F0F0F0]"
                onClick={() => setSelectedIndex("subscribers")}
              />
            </div>
          </Card>
        )}

        {selectedIndex === "subscribers" && (
          <Card classNames="w-[40%] mt-[20px]">
            <div>
              <h2 className="text-[36px] font-medium">Invite Subscribers</h2>
              <p>Select categories you are interested in</p>
            </div>

            <div className="space-y-3 mt-5">
              {subscribers.map((subscriber) => (
                <Input
                  key={subscriber.id}
                  placeholder={subscriber.placeholder}
                  label={subscriber.label}
                  value={subscriber.value}
                  onChange={(e) => handleInputChange(subscriber.id, e.target.value)}
                />
              ))}
            </div>

            <button
              onClick={addSubscriber}
              className="flex items-center bg-[#131313] py-1 px-3 mt-5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
              >
                <path
                  d="M7.5 1.25C7.72378 1.25 7.93839 1.3389 8.09662 1.49713C8.25486 1.65536 8.34375 1.86997 8.34375 2.09375V7.15625H13.4062C13.63 7.15625 13.8446 7.24514 14.0029 7.40338C14.1611 7.56161 14.25 7.77622 14.25 8C14.25 8.22378 14.1611 8.43839 14.0029 8.59662C13.8446 8.75486 13.63 8.84375 13.4062 8.84375H8.34375V13.9062C8.34375 14.13 8.25486 14.3446 8.09662 14.5029C7.93839 14.6611 7.72378 14.75 7.5 14.75C7.27622 14.75 7.06161 14.6611 6.90338 14.5029C6.74514 14.3446 6.65625 14.13 6.65625 13.9062V8.84375H1.59375C1.36997 8.84375 1.15536 8.75486 0.997129 8.59662C0.838895 8.43839 0.75 8.22378 0.75 8C0.75 7.77622 0.838895 7.56161 0.997129 7.40338C1.15536 7.24514 1.36997 7.15625 1.59375 7.15625H6.65625V2.09375C6.65625 1.86997 6.74514 1.65536 6.90338 1.49713C7.06161 1.3389 7.27622 1.25 7.5 1.25Z"
                  fill="white"
                />
              </svg>
              <span className="text-white">Add Another Subscriber</span>
            </button>

            <div className="mt-4 space-y-2">
              <Button
                text="Submit"
                // type="submit"
                type="submit"
                bgcolor="#025077"
                classNames="bg-[#025077] text-white"
              />
              {/* <Button
                text="Skip to Next Step"
                // bgcolor="#767676"
                classNames="text-black font-bold bg-[#f0f0f0]"
                onClick={() => setSelectedIndex("username")}
              /> */}
            </div>
          </Card>
        )}
      </form>
    </main>
  );
};

export default Onboarding;