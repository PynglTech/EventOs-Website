import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Event-OS - Modular Event Experience Platform",
    description: "Modular, plug-and-play event experience platform. Deploy interactive kiosks, pavilions, and museum displays in minutes.",
    icons: {
        icon: "/Asset 1@5x.png",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="font-sans text-primary bg-white antialiased overflow-x-hidden">{children}</body>
        </html>
    );
}
