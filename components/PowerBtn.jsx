

const PowerBtn = ({onClick}) => {
  return (
    <div className="h-screen w-screen flex justify-center items-center flex-col gap-3 absolute z-[100]" onClick={()=>{onClick()}}>
        <div><i className="ri-shut-down-line text-6xl font-bold hover:text-gray-600 cursor-pointer"></i></div>
        <div className="text-xl font-bold text-gray-500">click to start</div>
    </div>
  )
}

export default PowerBtn