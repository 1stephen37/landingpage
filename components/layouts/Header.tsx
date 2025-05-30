'use client';
import {useState} from "react";
import ModeToggle from "@/components/layouts/ModeToggle";
import Container from "@/components/layouts/Container";
import Link from "next/link";
import {TiThMenu} from "react-icons/ti";
import {FaRegWindowClose} from "react-icons/fa";

const navItems = [
    {href: "/", label: "Trang chủ"},
    {href: "/about", label: "Giới thiệu"},
    {href: "/projects", label: "Dự án"},
    {href: "/blogs", label: "Bài viết"},
    {href: "/contact", label: "Liên hệ"},
];

export default function Header() {

    const [isShowMobileMenu, setIsMobileMenuOpen] = useState(false);

    return (
        <header
            className="bg-primary text-secondary h-20 md:h-24 flex items-center shadow-md sticky top-0 z-50 mb-8 lg:mb-16">
            <Container className="flex justify-between items-center">
                <Link href="/" className="text-2xl font-extrabold tracking-tight hover:opacity-80 transition">
                    Stephen Nguyễn
                </Link>

                <nav className="hidden lg:flex gap-6 items-center ">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="MediumText hover:underline"
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                <div className="hidden lg:block">
                    <ModeToggle/>
                </div>

                <div onClick={() => setIsMobileMenuOpen(true)} className="lg:hidden block">
                    <TiThMenu className={'text-[2rem] font-medium'}/>
                </div>

            </Container>
            {isShowMobileMenu && (
                <div onClick={() => setIsMobileMenuOpen(false)}
                     className="block lg:hidden w-full bg-[rgba(0,0,0,0.5)] h-screen absolute inset-0">
                    <div onClick={(e) => e.stopPropagation()}
                         className="w-1/2 ml-auto bg-primary h-screen p-12">
                        <FaRegWindowClose onClick={() => setIsMobileMenuOpen(false)}
                                          className={'text-[2rem] font-medium ml-auto'}/>
                        <nav className="mt-4 flex flex-col gap-6 items-center">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="MediumText hover:underline"
                                >
                                    {item.label}
                                </Link>
                            ))}
                            <ModeToggle/>
                        </nav>
                    </div>
                </div>
            )}
        </header>
    );
}
