
import Trackorder from "../../assets/icons/trackorder.svg";
import LocationShop from "../../assets/icons/LocationShop.svg";
import LocationShopmOBILE from "../../assets/icons/mb_location.png";
import Loves from "../../assets/icons/Love.svg";
import LoginIcon from "../../assets/icons/LoginIcon.svg";
import ShoppingCart from "../../assets/icons/ShoppingCart.svg";
import { NavLink } from "react-router-dom";
import { Menu, Search } from "lucide-react";
import LogoHeader from "../../assets/icons/AnanaHeader.svg";
import { useEffect } from "react";
import { useState } from "react";
import Responsivenavbar from "./Responsivenavbar";

const Header = () => {
    const [open, setOpen] = useState(false);
    useEffect(() => {
        if (open) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }
        return () => {
            document.body.classList.remove("overflow-hidden");
        };
    }, [open]);
    return (
        <div className="w-full h-auto md:h-[30px] bg-white md:bg-black mb-2.5 max-w-full">
            <div className="flex items-center justify-between md:hidden">
                <img
                    src={LogoHeader}
                    alt="Ananas Logo"
                    width={120}
                    className="pl-2.5"
                />
                <div className="flex items-center gap-4">
                    <Search className="max-w-[47px] w-9 h-14" />
                    <img
                        src={LocationShopmOBILE}
                        alt="Location"
                        className="max-w-[47px] w-9 h-11 filter invert-0 brightness-0"
                    />
                    <img
                        src={ShoppingCart}
                        alt="Cart"
                        className="max-w-[47px] w-9 h-14 filter invert-0 brightness-0"
                    />
                </div>
                <div
                    className="bg-[#4c4c4c] p-[30px] cursor-pointer"
                    onClick={() => setOpen(!open)}
                >
                    <Menu className="text-white w-5 h-5" />
                </div>
            </div>

            <div className="hidden md:flex justify-end items-center pr-[60px] h-7">
                <nav>
                    <ul className="flex space-x-4">
                        {[
                            {
                                to: "/track-order",
                                label: "Tra cứu đơn hàng",
                                icon: Trackorder,
                            },
                            {
                                to: "/store-location",
                                label: "Tìm cửa hàng",
                                icon: LocationShop,
                            },
                            { to: "/love-product", label: "Yêu thích", icon: Loves },
                            { to: "/signin", label: "Đăng nhập", icon: LoginIcon },
                            { to: "/cart-shopping", label: "Giỏ hàng", icon: ShoppingCart },
                        ].map(({ to, label, icon }, i) => (
                            <li key={i}>
                                <NavLink to={to} className="flex items-center gap-1 text-white">
                                    <img src={icon} alt={label} className="w-4 h-4" />
                                    {label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>

            <Responsivenavbar open={open} className="block md:hidden" />
        </div>
    )
}

export default Header