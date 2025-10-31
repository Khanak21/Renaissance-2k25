import "./TeamPageStyles.css";
import { useEffect, useState } from "react";
import getEventApi from "../../../../api/getEvent.api";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import registerUserApi from "../../../../api/registerEvent.api";
import getAllUserDetailsApi from "../../../../api/getAllUserDetails.api";
import unregisterUserApi from "../../../../api/unregisterEvent.api";
import { renaissance2025EventsMap } from "../../../components/Events/renaissance2025Data";

const TeamPage = ({ eventid }) => {
  const [eventDetails, setEventsDetails] = useState(null);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [isUserRegistered, setIsUserRegistered] = useState(false);
  const [isRenaissance2025Event, setIsRenaissance2025Event] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsUserLoggedIn(true);
    }

    const renaissance2025Event = renaissance2025EventsMap[eventid];
    if (renaissance2025Event) {
      setEventsDetails(renaissance2025Event);
      setIsRenaissance2025Event(true);
    } else {
      getEventApi({ eventid }).then((data) => {
        if (data.success) {
          setEventsDetails(data.data);
        }
        if (token) {
          getAllUserDetailsApi().then((userData) => {
            if (userData.success) {
              const userRegisteredEventsArray = userData.data.eventsParticipated;
              if (userRegisteredEventsArray.includes(data.data._id)) {
                setIsUserRegistered(true);
              }
            }
          });
        }
      });
    }
  }, [eventid]);

  const handleParticipateClick = async () => {
    if (isRenaissance2025Event) {
      window.open(eventDetails.link, '_blank');
      return;
    }

    if (isUserLoggedIn) {
      if (isUserRegistered) {
        unregisterUserApi({ eventId: eventDetails._id }).then((data) => {
          if (data.success) {
            toast.success(data.message);
            setIsUserRegistered(false);
          } else {
            toast.error(data.message);
          }
        });
      } else {
        registerUserApi({ eventId: eventDetails._id }).then((data) => {
          if (data.success) {
            toast.success(data.message);
            setIsUserRegistered(true);
          } else {
            toast.error(data.message);
          }
        });
      }
    } else {
      toast.error("Register yourself to continue.");
      router.push("/auth/register");
    }
  };

  if (!eventDetails) {
    return <div className="min-h-screen bg-gradient-to-b from-custom-primary to-custom-accent flex items-center justify-center">
      <div className="text-white text-2xl">Loading...</div>
    </div>;
  }

  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#DB5461] to-[#E76F7C] pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {eventDetails.eventName}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            {eventDetails.date}
          </p>
          <button
            onClick={handleParticipateClick}
            className="bg-white text-[#DB5461] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-200 inline-flex items-center gap-2 shadow-lg"
          >
            {isRenaissance2025Event ? "REGISTER ON UNSTOP →" : (isUserRegistered ? "UNREGISTER" : "CONFIRM YOUR SEAT →")}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-gradient-to-b from-custom-accent to-custom-secondary">

        {/* Description Section */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-black">DESCRIPTION</h2>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12">
              <p className="text-xl leading-relaxed text-gray-800">
                {eventDetails.about || eventDetails.description}
              </p>
            </div>
          </div>
        </section>

        {/* Format Section */}
        <section className="py-16 px-6 bg-white/5">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black">FORMAT</h2>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12">
              <ul className="space-y-4">
                {eventDetails.format && eventDetails.format.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-800">
                    <span className="text-[#DB5461] font-bold text-xl">•</span>
                    <span className="text-lg leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Prizes Section */}
        {eventDetails.prizeValue && (
          <section className="py-16 px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-black">REWARDS & PRIZES</h2>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border-2 border-[#DB5461]">
                <div className="text-center mb-8">
                  <p className="text-5xl md:text-6xl font-bold text-[#DB5461] mb-2">{eventDetails.prizeValue}</p>
                  <p className="text-xl text-gray-700">Worth of Benefits</p>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-[#DB5461]/10 rounded-xl p-6 border border-[#DB5461]/30">
                    <h3 className="font-bold text-xl text-[#DB5461] mb-4">Champions Package:</h3>
                    <ul className="space-y-2">
                      {eventDetails.prizeComponents && eventDetails.prizeComponents.map((prize, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-800 text-lg">
                          <span className="text-[#DB5461]">✓</span>
                          <span>{prize}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-[#DB5461]/10 rounded-xl p-6 border border-[#DB5461]/30">
                    <h3 className="font-bold text-xl text-[#DB5461] mb-4">All Participants:</h3>
                    <ul className="space-y-2 text-gray-800 text-lg">
                      <li className="flex items-start gap-2">
                        <span className="text-[#DB5461]">✓</span>
                        <span>Official Certificate of Participation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#DB5461]">✓</span>
                        <span>LinkedIn-worthy credential</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Eligibility Section */}
        {eventDetails.eligibility && (
          <section className="py-16 px-6 bg-white/5">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-black">ELIGIBILITY</h2>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12">
                <ul className="space-y-3">
                  {eventDetails.eligibility.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-800">
                      <span className="text-[#DB5461] font-bold">✓</span>
                      <span className="text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        )}

        {/* Rules Section */}
        {eventDetails.rules && (
          <section className="py-16 px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-black">RULES & GUIDELINES</h2>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12">
                <ul className="space-y-3">
                  {eventDetails.rules.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-800">
                      <span className="text-[#DB5461] font-bold">•</span>
                      <span className="text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        )}

        {/* Skills Section */}
        {eventDetails.skills && (
          <section className="py-16 px-6 bg-white/5">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-black">SKILLS TO BE ASSESSED</h2>
              <div className="flex flex-wrap justify-center gap-3">
                {eventDetails.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-[#DB5461] text-white px-5 py-2.5 rounded-full text-base font-semibold"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* About Renaissance Section */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-black">ABOUT RENAISSANCE 2025</h2>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12">
              <p className="text-xl leading-relaxed text-gray-800 text-center">
                Renaissance is the annual entrepreneurship summit of E-Cell, MNNIT Allahabad - one of India's premier technical institutions.
                With 18,000+ participants, 90+ colleges, 140+ startups, and 50+ industry speakers, Renaissance has been the launchpad for
                countless entrepreneurial journeys since its inception 9 years ago. Join us for Renaissance 2025: Risk to Riches on 1-2 November 2025!
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        {eventDetails.contact && (
          <section className="py-16 px-6 bg-white/5">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-black">CONTACT & QUERIES</h2>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-6 text-gray-800">
                  <div>
                    <p className="font-semibold mb-2">Email:</p>
                    <p className="text-[#DB5461]">{eventDetails.contact.email}</p>
                  </div>
                  {eventDetails.contact.phones && eventDetails.contact.phones.length > 0 && (
                    <div>
                      <p className="font-semibold mb-2">Phone:</p>
                      {eventDetails.contact.phones.map((phone, idx) => (
                        <p key={idx} className="text-[#DB5461]">{phone}</p>
                      ))}
                    </div>
                  )}
                  <div>
                    <p className="font-semibold mb-2">Website:</p>
                    <a href={eventDetails.contact.website} target="_blank" rel="noopener noreferrer" className="text-[#DB5461] hover:underline">
                      {eventDetails.contact.website}
                    </a>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Follow us:</p>
                    <p className="text-[#DB5461]">Instagram: {eventDetails.contact.instagram}</p>
                    <p className="text-[#DB5461]">LinkedIn: {eventDetails.contact.linkedin}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <button
              onClick={handleParticipateClick}
              className="bg-[#DB5461] text-white px-12 py-5 rounded-lg font-bold text-xl hover:bg-[#C44451] transition-all duration-200 inline-flex items-center gap-3 shadow-xl"
            >
              {isRenaissance2025Event ? "REGISTER NOW ON UNSTOP →" : (isUserRegistered ? "UNREGISTER" : "CONFIRM YOUR SEAT →")}
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default TeamPage;
