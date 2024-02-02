import React, { useState,useEffect } from "react";
import { motion, AnimatePresence  ,useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const faqData = [
  {
    question: "What is Tailwind CSS?",
    answer:
      "Tailwind CSS is a utility-first CSS framework that helps you quickly build modern designs.",
  },
  {
    question: "How can I install Tailwind CSS?",
    answer:
      "You can install Tailwind CSS using npm or yarn. Run `npm install tailwindcss` or `yarn add tailwindcss`.",
  },
  {
    question: "What are the main features of Tailwind CSS?",
    answer:
      "Tailwind CSS provides a set of utility classes for styling, a responsive design system, and a customizable configuration.",
  },
  // Add more FAQ items as needed
];

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
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
    <div className="mx-auto mt-10">
      <h2 className="text-4xl font-bold text-center mb-10">
        Frequently Asked Questions
      </h2>
      <div className="flex justify-center items-center">
        <motion.div
          className="w-[80%]"
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
                className="bg-gray-100 p-6 rounded-lg shadow-md overflow-hidden transition-all duration-300 ease-in-out max-h-full"
              >
                <h3
                  className={`text-xl font-semibold cursor-pointer ${
                    selectedQuestion === index ? "text-blue-500" : "text-black"
                  }`}
                  onClick={() => handleToggle(index)}
                >
                  {faq.question}
                </h3>
                <AnimatePresence>
                  {selectedQuestion === index && (
                    <motion.p
                      key="answer"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="text-gray-700 overflow-hidden mt-2"
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
