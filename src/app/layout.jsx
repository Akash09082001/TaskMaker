import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/organisms/Navbar";
import { Separator } from "@/components/ui/separator";

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
            <body className={inter.className}>
                <ThemeProvider
                    attribute='class'
                    defaultTheme='system'
                    enableSystem
                    disableTransitionOnChange
                >
                    <main className="flex w-full h-screen flex-col">
                        <Navbar />
                        <Separator />
                        <section className="flex flex-grow max-w-7xl mx-auto px-5 w-full">
                            {children}
                        </section>
                    </main>
                </ThemeProvider>
            </body>
        </html>
    );
}
