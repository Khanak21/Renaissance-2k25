import Link from "next/link";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const ScrollToMiddleLink = ({ targetId, children }) => {
  const handleClick = () => {
    scroll.scrollTo(targetId, {
      duration: 500,
      smooth: true,
    });
  };

  return (
    <Link
      href={`#${targetId}`}
      className="mx-2 px-1 lg:mx-4 lg:px-2 relative  before:content-[''] before:absolute before:bg-custom-accent before:h-[3px] before:w-0 before:left-0 before:bottom-[-8px] before:transition-[0.3s] before:duration-300 hover:before:w-full hover:text-custom-secondary"
      key={`link-${targetId} `}
    >
      <ScrollLink onClick={handleClick}>
        {children}
      </ScrollLink>
    </Link>
  );
};

export default ScrollToMiddleLink;
