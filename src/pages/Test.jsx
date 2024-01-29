import "../styles.css";

const Test = () => {
  return (
    <>
      {/* hero section */}
      <div className="flex h-[440px] flex-col items-center justify-center gap-10 bg-hero-image bg-cover bg-center">
        {/* hero section search bar */}
        <div className="mt-20 flex h-12 w-1/3 items-center justify-center rounded-[20px] border-2 border-cerulean bg-white">
          <div>Put Magnifying Glass</div>
        </div>
        {/* call to action */}
        <div className="text-[40px] text-white">Find Your Forever Friend</div>
      </div>
      <div className="flex h-3 grid-cols-4 justify-center gap-10 bg-cerulean"></div>
    </>
  );
};

export default Test;
