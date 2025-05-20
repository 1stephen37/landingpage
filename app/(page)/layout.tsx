import Header from '@/components/layouts/Header';
import React from 'react';
import Container from "@/components/layouts/Container";

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
        </div>
    );
}