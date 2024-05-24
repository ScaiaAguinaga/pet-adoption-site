const Adopt = () => {
  return (
    <div className="flex min-h-screen justify-center">
      <div className="grid w-full grid-cols-4">
        {/* Column for search filters */}
        <div className="col-span-1">
          <div className="sticky top-0 bg-white p-4 shadow-md">
            settings for filter
          </div>
        </div>
        <div className="col-span-3 grid h-screen grid-cols-3 gap-4 overflow-auto">
          <div className="h-20 w-20 bg-blue-500"></div>
          <div className="h-20 w-20 bg-red-500"></div>
          <div className="h-20 w-20 bg-blue-500"></div>
          <div className="h-20 w-20 bg-red-500"></div>
          <div className="h-20 w-20 bg-blue-500"></div>
          <div className="h-20 w-20 bg-red-500"></div>
          <div className="h-20 w-20 bg-blue-500"></div>
          <div className="h-20 w-20 bg-red-500"></div>
        </div>
      </div>
    </div>
  );
};

export default Adopt;
