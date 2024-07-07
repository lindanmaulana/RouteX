import SectionHomeLayouts from "../../../layouts/SectionHomeLayouts";
import { IoIosSend } from "react-icons/io";

const MessageUsSection = () => {
  return (
    <SectionHomeLayouts>
      <div className="flex">
        <form className="w-1/2 p-10 bg-white rounded-2xl">
          <div className="flex w-full mb-5 gap-7">
            <div className="w-1/2 ">
              <label htmlFor="" className="text-primary">
                Your Email
              </label>
              <div className="relative">
                <input
                  type="email"
                  className="w-full py-2 pl-4 border rounded-full outline-none border-black/20 active:border-black/60 focus:border-black/60"
                  placeholder="Your Email"
                />
                <IoIosSend className="absolute w-5 h-5 top-3 right-3" />
              </div>
            </div>
            <div className="w-1/2 ">
              <label htmlFor="" className="text-primary">
                Your Phone
              </label>
              <input
                type="number"
                className="w-full py-2 pl-4 border rounded-full outline-none border-black/20 active:border-black/60 focus:border-black/60"
                placeholder="Your Phone"
              />
            </div>
          </div>
          <div className="flex flex-col mb-5">
            <label htmlFor="" className="text-primary">
              Your Address
            </label>
            <input
              type="text"
              className="py-2 pl-4 border rounded-full outline-none border-black/20 active:border-black/60 focus:border-black/60"
              placeholder="Your Address"
            />
          </div>
          <div className="flex flex-col mb-5">
            <label htmlFor="" className="text-primary">
              Message
            </label>
            <textarea
              name=""
              id=""
              className="py-2 pl-4 border outline-none border-black/20 rounded-2xl active:border-black/60 focus:border-black/60"
              placeholder="Write Message"
            ></textarea>
          </div>

          <button className="w-full px-4 py-4 text-sm text-white rounded-full bg-secondary">
            Send Message
          </button>
        </form>
        <div className="w-1/2"></div>
      </div>
    </SectionHomeLayouts>
  );
};

export default MessageUsSection;
