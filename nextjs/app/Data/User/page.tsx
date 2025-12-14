import Link from "next/link";
const Page = () => {
  return (
    <div className="text-center text-5xl text-green-200 font-bold">
        This is User Data Page
        <div>
            <ul className="mt-10">

                <li> <Link href = "/Data/User/1"> User1 </Link>" </li>
                <li> <Link href = "/Data/User/2"> User2 </Link>" </li>
                <li> <Link href = "/Data/User/3"> User3 </Link>" </li>

            </ul>

        </div>
    </div>
    
  )
}

export default Page
