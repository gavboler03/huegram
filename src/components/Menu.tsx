
const Menu = () => {
  return (
    <div className='flex flex-col p-8'>

        <div className='space-y-2'>
            <span className="block h-0.5 w-8 bg-gray-100"></span>
            <span className="block h-0.5 w-8 bg-gray-100"></span>
            <span className="block h-0.5 w-8 bg-gray-100"></span>
        </div>

        <a href="" className="menulink text-gray-200 text-2xl my-4">Home</a>
        <a href="" className="menulink text-gray-200 text-2xl my-4">Search</a>
        <a href="" className="menulink text-gray-200 text-2xl my-4">Trending</a>

    </div>
  )
}

export default Menu