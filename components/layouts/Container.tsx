import React from 'react';

export default function Container({
                                      children,
                                      className
                                  }: Readonly<{
    children: React.ReactNode;
    className?: string;
}>) {
    return (
        <main className={`w-[90%] mx-auto ${className || ''}`}>
            {children}
        </main>
    );
}