
const layout = ({children}:{children:React.ReactNode}) => {
  return (
    <div>
        <div className="bg-gray-800 text-white p-4 text-center font-bold text-2xl">
            This is my User Layout Navbar.
        </div>
        {children}
    </div>
  )
}

export default layout
