import Header from '@/components/layouts/Header';
import React from 'react';
import Container from "@/components/layouts/Container";
import Footer from "@/components/layouts/Footer";

export default function Layout({
                    children,
                }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <Header/>
            <Container>
                {children}
            </Container>
            <Footer/>
        </div>
    );
}