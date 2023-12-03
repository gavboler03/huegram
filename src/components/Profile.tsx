import kaylee from "/kaylee.jpg";

const Profile = () => {
  return (
    <div className="flex flex-col p-8 items-center text-white mt-14 max-md:hidden">
      <div className="flex w-1/2">
        <img src={kaylee} alt="" className="rounded-full" />
      </div>
      <h1 className="m-4 font-bold text-2xl">@kodom</h1>
      <div className="m-14">
        <p className="text-4xl font-bold">96 likes</p>
      </div>
      <div className="m-14">
        <p className="text-4xl font-bold">47 hues</p>
      </div>
    </div>
  );
};

export default Profile;
