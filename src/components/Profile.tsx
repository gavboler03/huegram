import kaylee from '/kaylee.jpg'

const Profile = () => {
  return (
    <div className='flex flex-col border-2 p-8 items-center text-white'>

        <h1>@kodom</h1>

        <div className="flex w-1/2">
            <img src={kaylee} alt="" className='rounded-full'/>
        </div>

    </div>
  )
}

export default Profile