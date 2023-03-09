import Link from "next/link"

const Header = () => {
    return(
        <div className="w-full h-header px-4 py-4 flex flex-row justify-between items-center bg-orange-900">
            <h1 className="text-3xl">React Meetups</h1>
            <div>
                <Link href='/' className="px-4 text-gray-400 hover:text-gray-100">All Meetups</Link>
                <Link href='/new-meetup' className="px-4 text-gray-400 hover:text-gray-100">Add New Meetup</Link>
            </div>
        </div>
    )
}

export default Header