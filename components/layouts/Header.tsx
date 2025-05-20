import ModeToggle from "@/components/layouts/ModeToggle";
import Container from "@/components/layouts/Container";
import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-primary text-secondary h-20 md:h-24 flex items-center shadow-md sticky top-0 z-50 mb-8 lg:mb-16">
            <Container className="flex justify-between items-center">
                <Link href="/" className="text-2xl font-extrabold tracking-tight hover:opacity-80 transition">
                    Stephen Nguyễn
                </Link>

                <nav className="hidden md:flex gap-6 items-center">
                    <Link href="/about" className="MediumText">Giới thiệu</Link>
                    <Link href="/projects" className="MediumText">Dự án</Link>
                    <Link href="/blogs" className="MediumText">Bài viết</Link>
                    <Link href="/contact" className="MediumText">Liên hệ</Link>
                </nav>

                {/*<div className="flex items-center gap-3">*/}
                    <ModeToggle />
                {/*</div>*/}
                <div className="md:hidden block">
                    mobile menu
                </div>
            </Container>
        </header>
    );
}
