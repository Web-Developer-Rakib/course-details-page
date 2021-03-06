import { faHeart, faQuestionCircle } from "@fortawesome/free-regular-svg-icons";
import {
  faArrowRight,
  faShare,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Course = ({ pageInfo }) => {
  const {
    title,
    subTitle,
    desc,
    teachersName,
    teachersReviews,
    classReviews,
    completedLearners,
    teachersImg,
    courseImg,
  } = pageInfo;
  return (
    <div className=" pl-1 pr-1 lg:pl-5 lg:pr-30 pt-5">
      <h1 className="text-5xl font-bold">{title}</h1>
      <h3 className="text-2xl font-semibold text-gray-500 mt-2">
        {subTitle}
        <FontAwesomeIcon
          className="ml-2"
          icon={faQuestionCircle}
        ></FontAwesomeIcon>
      </h3>
      <div className="mt-20 flex justify-around flex-wrap-reverse lg:flex-nowrap">
        <div>
          <p className="lg:mr-60 w-full lg:w-[500px] font-semibold mt-5 lg:mt-0">
            {desc}
          </p>
          <div className="flex items-center mt-5">
            <img
              src={teachersImg}
              className="rounded-full mr-2"
              alt=""
              width={30}
            />
            <h4 className="text-xl text-primary font-semibold">
              {teachersName}
            </h4>
          </div>
          <div className="mt-5">
            <span>
              <FontAwesomeIcon
                className="text-yellow-500"
                icon={faStar}
              ></FontAwesomeIcon>
              <FontAwesomeIcon
                className="text-yellow-500"
                icon={faStar}
              ></FontAwesomeIcon>
              <FontAwesomeIcon
                className="text-yellow-500"
                icon={faStar}
              ></FontAwesomeIcon>
              <FontAwesomeIcon
                className="text-yellow-500"
                icon={faStar}
              ></FontAwesomeIcon>
              <FontAwesomeIcon
                className="text-yellow-500"
                icon={faStar}
              ></FontAwesomeIcon>
            </span>
            <span className="text-gray-500 ml-2">{teachersReviews}</span>
          </div>
          <div className="mt-1">
            <span>
              <FontAwesomeIcon
                className="text-yellow-500"
                icon={faStar}
              ></FontAwesomeIcon>
              <FontAwesomeIcon
                className="text-yellow-500"
                icon={faStar}
              ></FontAwesomeIcon>
              <FontAwesomeIcon
                className="text-yellow-500"
                icon={faStar}
              ></FontAwesomeIcon>
              <FontAwesomeIcon
                className="text-yellow-500"
                icon={faStar}
              ></FontAwesomeIcon>
              <FontAwesomeIcon
                className="text-yellow-500"
                icon={faStar}
              ></FontAwesomeIcon>
            </span>
            <span className="text-gray-500 ml-2">{classReviews}</span>
          </div>
          <h4 className="text-xl font-semibold mt-3">{completedLearners}</h4>
          <div className="flex mt-8 mb-5">
            <button className="p-4 bg-primary rounded-full text-white font-bold text-xl">
              See Class Schedule{" "}
              <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
            </button>
            <button className="p-4 text-primary font-bold text-xl">
              {" "}
              <FontAwesomeIcon
                className="mr-2"
                icon={faHeart}
              ></FontAwesomeIcon>
              Save
            </button>
            <button className="p-4 text-primary font-bold text-xl">
              <FontAwesomeIcon
                className="mr-2"
                icon={faShare}
              ></FontAwesomeIcon>
              Share
            </button>
          </div>
        </div>
        <div className="lg:pr-20 flex justify-center">
          <img src={courseImg} className="rounded-xl" alt="" width={1200} />
        </div>
      </div>
    </div>
  );
};

export default Course;
