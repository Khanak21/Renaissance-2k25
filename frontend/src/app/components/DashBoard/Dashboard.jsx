import React, { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import getAllUserDetailsEventLinkApi from "../../../api/getAllUserDetailsEventLink.api";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const router = useRouter();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/");
    }
    getAllUserDetailsEventLinkApi().then((data) => {
      if (data.success) {
        setUserData(data.data);
      }
    });
  }, []);

  return (
    <>
      <div className="flex flex-col-reverse px-[40px] md:flex-row-reverse bg-[#27282A] min-h-screen">
        <div className="mt-[40px] md:p-4 flex-1 md:flex-[0.65] xl:flex-[0.75]">
          <div className="w-full bg-custom-light p-2 rounded-md shadow-md">
            <div className="text-base w-full px-6 py-2 flex flex-col justify-center items-center">
              <p className="font-bold text-base lg:text-lg">
                RENESSANCE EVENTS
              </p>
            </div>
            <div>
              <table class="w-full border-collapse border border-slate-400">
                <thead>
                  <tr>
                    <th class="border border-slate-300">S.No.</th>
                    <th class="border border-slate-300">Event Name</th>
                    <th class="border border-slate-300">Google form</th>
                  </tr>
                </thead>
                <tbody>
                  {userData?.eventsParticipated.map((item, index) => {
                    return (
                      <tr>
                        <td class="border border-slate-300 pl-2">
                          {index + 1}
                        </td>
                        {/* <!-- Add the eventPage link as well (so, on clicking on the `Event Name`, the user is redirected to the EventPage) --> */}
                        <td class="border border-slate-300 pl-2">
                          {item.eventName}
                        </td>
                        <td class="border border-slate-300 pl-2 hover:text-custom-accent cursor-pointer">
                          <a href={item?.link} target="_blank">Link</a>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <div class="font-bold">Note:</div>
              <div class="">
                Please complete your application by applying through the Google
                Form. Otherwise, you wont be able to participate in the event.
              </div>
            </div>
          </div>
        </div>
        <div className="w-full mt-[50px] md:mt-[0px] md:flex-[0.35] xl:flex-[0.25] md:pt-[59px]">
          <div className="rounded-md w-full flex flex-col bg-gray-200 py-[40px]">
            <div className="w-full flex flex-col justify-center items-center">
              <FaUserCircle className="w-24 h-24" />
              <p className="text-base lg:text-lg font-bold">
                {userData?.username}
              </p>
            </div>

            <div className="text-base px-6 py-2 flex flex-col mt-[40px]">
              <p className="">
                <span className="font-bold">RenID : </span> {userData?.renId}
              </p>
              <p>
                <span className="font-bold">Email : </span>
                {userData?.email}
              </p>
              <p>
                <span className="font-bold">Phone No. : </span>
                {userData?.phone}
              </p>
              <p>
                <span className="font-bold">Gender : </span> {userData?.gender}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
