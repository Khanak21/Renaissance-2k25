import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { faqData } from "./FAQ.data";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const FAQ = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const handleToggle = (index) => {
    setSelectedQuestion((prevIndex) => (prevIndex === index ? null : index));
  };

  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div className="mx-auto pt-10 bg-[#EEF5DB]">
      <h2 className="px-8 mb-4 text-lg font-bold text-center lg:text-2xl">
        FREQUENTLY ASKED QUESTIONS
      </h2>
      <div className="flex items-center justify-center px-4 md:px-12 lg:px-20">
        <motion.div
          className="w-full"
          variants={container}
          initial="hidden"
          animate={controls}
          ref={ref}
        >
          <div className="grid grid-cols-1 gap-4">
            {faqData.map((faq, index) => (
              <motion.div
                key={index}
                variants={item}
                className="max-h-full p-4 overflow-hidden transition-all duration-300 ease-in-out bg-gray-100 rounded-lg shadow-md"
              >
                <h3
                  className={`text-base font-semibold cursor-pointer ${selectedQuestion === index ? "text-blue-500" : "text-black"
                    }`}
                  onClick={() => handleToggle(index)}
                >
                  <div className="flex justify-between">
                    {faq.question}
                    <motion.div
                      initial={{ rotate: 0 }}
                      animate={
                        selectedQuestion === index
                          ? { rotate: -90 }
                          : { rotate: 0 }
                      }
                      className="m-2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-chevron-down"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                        />
                      </svg>
                    </motion.div>
                  </div>
                </h3>

                <AnimatePresence>
                  {selectedQuestion === index && (
                    <motion.p
                      key="answer"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-2 overflow-hidden text-sm text-gray-700"
                    >
                      {faq.answer}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQ;
