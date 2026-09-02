import { Search, ShoppingCart } from "lucide-react"
import Link from 'next/link'
import Logo from "../../public/Images/Logo(7).png"
import Image from "next/image"
import Person from "../../public/Images/Ellipse 8.png"

const navItems = [
    { name: "Laptops", route: "/laptops" },
    { name: "Desktop PCs", route: "/desktops" },
    { name: "Networking Devices", route: "/networking-devices" },
    { name: "Printers & Scanners", route: "/printers-scanners" },
    { name: "PC Parts", route: "/pc-parts" },
    { name: "All Other Products", route: "/products" },
    { name: "Repairs", route: "/repairs" }
]

export default function Navbar() {
    return (
        <nav className="fixed top-[44px]   w-full max-w-[1550px] items-center  text-center  mx-auto flex justify-center gap-[27px]    bg-white border-b border-gray-200 z-50">
            <div className="   flex items-center justify-between gap-6">

                <div className="flex-shrink-0">
                    <Link href="/" className="flex items-center">
                        <Image 
                            src={Logo} 
                            alt="Logo" 
                            priority 
                            className="w-[85px] h-auto object-contain" 
                        />
                    </Link>
                </div>

                <ul className="hidden lg:flex items-center gap-6 xl:gap-8 text-[14px] font-semibold text-[#23232C] list-none whitespace-nowrap">
                    {navItems.map((item, index) => (
                        <li key={index} className="hover:text-[#0156FF] transition-colors cursor-pointer tracking-normal">
                            <Link href={item.route}>
                                {item.name}
                            </Link>
                        </li>
                    ))}

                    <li>
                        <Link
                            href="/deals"
                            className="border-2 border-[#0156FF] text-[#0156FF] hover:bg-[#0156FF] hover:text-white font-bold px-5 py-2 rounded-full transition-all text-[14px]"
                        >
                            Our Deals
                        </Link>
                    </li>
                </ul>

              

            </div>

            {/* //  */}
              <div className="flex items-center gap-5 text-[#23232C] flex-shrink-0">
                    {/* Universal Search Triggers */}
                    <button aria-label="Search" className="p-1.5 hover:text-[#0156FF] rounded-full transition-colors flex items-center justify-center">
                        <Search className="w-5 h-5 stroke-[2.5]" />
                    </button>

                    {/* Shopping Cart Trigger Indicator Overlay Badge */}
                    <Link href="/cart" aria-label="Shopping Cart" className="p-1.5 hover:text-[#0156FF] rounded-full transition-colors relative flex items-center justify-center">
                        <ShoppingCart className="w-5 h-5 stroke-[2]" />
                        <span className="absolute -top-1 -right-1 h-[16px] min-w-[16px] px-1 inline-flex items-center justify-center text-[10px] font-bold text-white bg-[#0156FF] rounded-full">
                            2
                        </span>
                    </Link>

                    {/* Identity Profile Thumbnail Avatar Selection */}
                    <Link href="/profile" className="flex items-center justify-center w-9 h-9 relative overflow-hidden rounded-full border border-gray-100 ml-1">
                        <Image 
                            src={Person} 
                            alt="User Profile" 
                            priority 
                            className="w-full h-full object-cover" 
                        />
                    </Link>
                </div>
        </nav>
    )
}
