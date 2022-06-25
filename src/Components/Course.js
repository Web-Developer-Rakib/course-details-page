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
          <div className="">
            <p className="text-gray-500">{teachersReviews}</p>
          </div>
          <h4 className="text-xl font-semibold">{completedLearners}</h4>
          <div className="flex">
            <button className="p-4 bg-primary rounded-3xl text-white font-bold text-xl">
              See Class Schedule
            </button>
            <button className="p-4 text-primary font-bold text-xl">Save</button>
            <button className="p-4 text-primary font-bold text-xl">
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
