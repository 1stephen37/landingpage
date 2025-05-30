import Link from "next/link";

const Links = [
    {href: "/", label: "Github"},
    {href: "/about", label: "Email"},
    {href: "/contact", label: "Linkedin"},
];

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="absolute bottom-0 w-full bg-primary text-secondary py-8 mt-16">
            <div className="max-w-7xl mx-auto px-4 flex flex-col justify-between items-center text-sm">
                <div className="mb-4 MediumText">
                    © {year} Stephen Nguyễn. All rights reserved.
                </div>
                <div className="flex space-x-6">
                    {Links.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            target="_blank"
                            className="MediumText hover:underline"
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>
            </div>
        </footer>
    );
}
