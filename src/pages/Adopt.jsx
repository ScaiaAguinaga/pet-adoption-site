const Adopt = () => {
  return (
    <div className="flex justify-center">
      <div className="grid w-1/2 grid-cols-4">
        <div className="col-span-4 justify-center h-96"> Filler Content </div>
        {/* Column for search filters */}
        <div className="col-span-1">
          <div className="sticky top-16 flex h-80 justify-center">
            <div>filter</div>
          </div>
        </div>
        <div className="col-span-3 grid grid-cols-3 gap-8 justify-self-center overflow-auto">
          <div className=" h-[350px] w-[250px] border-2 border-black bg-offwhite">
            <div className="h-2/3 bg-red-500">picture</div>
            <div className="h-1/3 bg-blue-500">name</div>
          </div>
          <div className=" h-[350px] w-[250px] border-2 border-black bg-offwhite">
            <div className="h-2/3 bg-red-500">picture</div>
            <div className="h-1/3 bg-blue-500">name</div>
          </div>
          <div className=" h-[350px] w-[250px] border-2 border-black bg-offwhite">
            <div className="h-2/3 bg-red-500">picture</div>
            <div className="h-1/3 bg-blue-500">name</div>
          </div>
          <div className=" h-[350px] w-[250px] border-2 border-black bg-offwhite">
            <div className="h-2/3 bg-red-500">picture</div>
            <div className="h-1/3 bg-blue-500">name</div>
          </div>
          <div className=" h-[350px] w-[250px] border-2 border-black bg-offwhite">
            <div className="h-2/3 bg-red-500">picture</div>
            <div className="h-1/3 bg-blue-500">name</div>
          </div>
          <div className=" h-[350px] w-[250px] border-2 border-black bg-offwhite">
            <div className="h-2/3 bg-red-500">picture</div>
            <div className="h-1/3 bg-blue-500">name</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adopt;
