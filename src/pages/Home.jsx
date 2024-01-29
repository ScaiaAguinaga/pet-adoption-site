import "../styles.css";

const Home = () => {
  return (
    <>
      {/* hero section */}
      <div className="flex h-[440px] flex-col items-center justify-center gap-10 bg-hero-image bg-cover bg-center">
        <inpu className="mt-10 h-10 w-1/3 rounded-[20px] border-2 border-cerulean bg-white"></inpu>
        <div className="text-offwhite text-3xl">Find Your Forever Friend</div>
      </div>
      <div className="grid h-3 grid-cols-4 gap-5 bg-cerulean">
        <button className="flex h-[150px] rounded-[20px] bg-red-500">Adopt</button>
        <button className="flex h-[150px] rounded-[20px] bg-red-500">Rehome</button>
        <button className="flex h-[150px] rounded-[20px] bg-red-500">Volunteer</button>
        <button className="flex h-[150px] rounded-[20px] bg-red-500">Contact</button>
      </div>
    </>
  );
};

export default Home;
