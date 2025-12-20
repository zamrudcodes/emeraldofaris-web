import Link from "next/link";
import { LiveAge } from "@/components/live-age";

export default function Page() {
    return (
        <div className="min-h-screen flex flex-col font-sans">
            {/* Header */}
            <header className="max-w-[1024px] mx-auto w-full px-12 py-8 flex justify-between items-center mb-12">
                <Link
                    href="/"
                    className="text-xl leading-7 font-normal text-[rgb(17,24,39)] hover:text-[rgb(115,115,115)] transition-colors"
                >
                    Emeraldo Faris Aufar
                </Link>
                <nav className="flex gap-6 text-sm leading-5 text-[rgb(115,115,115)]">
                    <Link href="/" className="hover:text-[rgb(10,10,10)] transition-colors">
                        About
                    </Link>
                    {/* Add more nav links here later */}
                </nav>
            </header>

            {/* Main Content */}
            <main className="max-w-[1024px] mx-auto w-full px-12 flex-1">
                <h1 className="text-lg leading-7 font-normal text-[rgb(17,24,39)] mt-7 mb-3.5">About</h1>

                <div className="space-y-4">
                    <p className="text-sm leading-6 text-[rgb(55,65,81)]">
                        Software Engineer
                    </p>

                    <div className="space-y-4 text-sm leading-6">
                        <p className="text-[rgb(55,65,81)]">
                            <span className="font-semibold text-[rgb(17,24,39)]">Age: </span>
                            <LiveAge />
                        </p>

                        <p className="text-[rgb(55,65,81)]">
                            <span className="font-semibold text-[rgb(17,24,39)]">Interests: </span>
                            Technology, Music, Travel
                        </p>

                        <p className="text-[rgb(55,65,81)]">
                            <span className="font-semibold text-[rgb(17,24,39)]">Writing: </span>
                            Coming soon...
                        </p>

                        <p className="text-[rgb(55,65,81)]">
                            <span className="font-semibold text-[rgb(17,24,39)]">Podcasts: </span>
                            Coming soon...
                        </p>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="max-w-[1024px] mx-auto w-full px-12 mt-12 pb-8">
                <hr className="border-t border-[rgb(229,231,235)] mb-4" />
                <div className="flex justify-end gap-6 text-sm leading-5 text-[rgb(115,115,115)]">
                    <a
                        href="https://x.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[rgb(10,10,10)] transition-colors"
                    >
                        X
                    </a>
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[rgb(10,10,10)] transition-colors"
                    >
                        GitHub
                    </a>
                    <a
                        href="mailto:hello@example.com"
                        className="hover:text-[rgb(10,10,10)] transition-colors"
                    >
                        Email
                    </a>
                </div>
            </footer>
        </div>
    );
}