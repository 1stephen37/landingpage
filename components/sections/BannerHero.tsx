import Image from "next/image";

export default function BannerHero() {
    return (
        <section className="py-16 bg-background text-center">
            <div className="container mx-auto px-4">
                <img
                    src="/stephen-avatar.png"
                    alt="Stephen Nguyen"
                    className="mx-auto rounded-full w-32 h-32 mb-4 object-cover shadow-lg"
                />
                <h1 className="text-4xl font-bold text-primary mb-2">Stephen Nguyễn</h1>
                <p className="text-muted-foreground text-lg mb-4">
                    Frontend Developer · Educator · Sources Team Leader
                </p>
                <div className="flex justify-center gap-4">
                    <a href="/cv.pdf" className="btn btn-primary">Xem CV</a>
                    <a href="#contact" className="btn btn-outline">Liên hệ</a>
                </div>
            </div>
        </section>
    );
}