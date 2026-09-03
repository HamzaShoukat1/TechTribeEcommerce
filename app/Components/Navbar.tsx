import Link from 'next/link'
import Image from "next/image"

// Local image imports
import logo from "../public/images/Meubel House_Logos-05.png"
import logoName from "../public/images/SkinClinic.png"
import personIcon from "../public/images/Vector.png"
import cart from "../public/images/ant-design_shopping-cart-outlined.png"
import heart from "../public/images/akar-icons_heart.png"
import search from "../public/images/akar-icons_search.png"

export { logo, personIcon, cart, heart, search }

const navItems = [
    { name: "Home", route: "/home" },
    { name: "Shop", route: "/shop" },
    { name: "About", route: "/about" },
    { name: "Contact", route: "/contact" },
]

export default function Navbar() {
    return (
        <nav className="  z-50 w-full bg-white py-7 px-10 shadow-sm">
            <div className="mx-auto flex max-w-[1286px] items-center justify-between w-full">

                {/* Brand Logo Section */}
                <Link href="/" className="flex items-center gap-1.5 flex-shrink-0">
                    <Image
                        src={logo}
                        alt="Furniro Logo"
                        priority
                        className="h-8 w-full max-w-[50px] object-contain"
                    />
                    <Image
                        src={logoName}
                        alt="Furniro"
                        className="h-6 w-auto object-contain font-bold"
                    />
                </Link>

                {/* Central Navigation Links */}
                <ul className="hidden lg:flex items-center font-extrabold  gap-14 font-montserrat text-[16px] font-black text-[#000000]">
                    {navItems.map((item) => (
                        <li key={item.name} className="transition-colors  hover:text-gray-600">
                            <Link href={item.route}>{item.name}</Link>
                        </li>
                    ))}
                </ul>

                {/* Utility Actions (Icons) */}
                <div className="flex items-center gap-8 text-black">
                    <Link href="/profile" aria-label="Account">
                        <Image src={personIcon} alt="Account" className="h-6  object-contain w-full max-w-[28px]" />
                    </Link>

                    <button aria-label="Search" className="focus:outline-none">
                        <Image src={search} alt="Search" className="h-6  object-contain w-full max-w-[28px]" />
                    </button>

                    <Link href="/favorites" aria-label="Favorites">
                        <Image src={heart} alt="Favorites" className="h-6 w-full max-w-[28px] object-contain" />
                    </Link>

                    <Link href="/cart" aria-label="Shopping Cart">
                        <Image src={cart} alt="Cart" className="h-6 object-contain w-full max-w-[28px]" />
                    </Link>
                </div>

            </div>
        </nav>
    )
}
