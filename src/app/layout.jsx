import Navbar from "@/components/organisms/Navbar";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Task Maker",
    description: "Don't remind the task just add it",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en"
            className="dark"
            style={{
                colorScheme: "dark",
            }}
        >
            <body className={cn("h-screen w-screen", inter.className)}>
                <ThemeProvider
                    attribute='class'
                    defaultTheme='system'
                    enableSystem
                    disableTransitionOnChange
                >
                    <Navbar />
                    <main className="flex relative w-full h-[calc(100%-65px)] pt-4">
                        <section className="flex flex-1 max-w-7xl mx-auto w-full">
                            {children}
                        </section>
                    </main>
                </ThemeProvider>
            </body>
        </html>
    );
}
