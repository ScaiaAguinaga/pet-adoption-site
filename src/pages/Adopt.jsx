const Adopt = () => {
  return (
    <div className="flex w-1/2 justify-center">
      <div className="grid grid-cols-4">
        {/* Column for search filters */}
        <div className="col-span-1">
          <div>settings for filter</div>
        </div>
        <div className="col-span-3 grid grid-cols-3">
          <div className="h-20 w-20 bg-blue-500"></div>
          <div className="h-20 w-20 bg-red-500"></div>{" "}
          <div className="h-20 w-20 bg-blue-500"></div>
          <div className="h-20 w-20 bg-red-500"></div>
          <div className="h-20 w-20 bg-blue-500"></div>
          <div className="h-20 w-20 bg-red-500"></div>{" "}
          <div className="h-20 w-20 bg-blue-500"></div>
          <div className="h-20 w-20 bg-red-500"></div>
        </div>
      </div>
    </div>
  );
};

export default Adopt;
