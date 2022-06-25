import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faShare, faStar } from "@fortawesome/free-solid-svg-icons";
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
  } = pageInfo;
  return (
    <div className=" pl-5 pr-30 pt-5">
      <h1 className="text-5xl font-bold">{title}</h1>
      <h3 className="text-2xl font-semibold text-gray-500">{subTitle}</h3>
      <div className="mt-20">
        <div>
          <p>{desc}</p>
          <div>
            {" "}
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
          <h4 className="text-xl font-semibold">{completedLearners}</h4>
          <div className="flex">
            <button className="p-4 bg-primary rounded-full text-white font-bold text-xl">
              See Class Schedule
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
        <div></div>
      </div>
    </div>
  );
};

export default Course;
