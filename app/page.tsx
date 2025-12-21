import Link from "next/link";
import { LiveAge } from "@/components/live-age";

export default function Page() {
    return (
        <div className="min-h-screen flex flex-col font-sans">
            {/* Header */}
            <header className="max-w-[1024px] mx-auto w-full px-12 py-8 flex justify-between items-center mb-6">
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
            <main className="max-w-[1024px] mx-auto w-full px-12">
                <h1 className="text-lg leading-7 font-normal text-[rgb(17,24,39)] mt-4 mb-1">About</h1>

                <div className="space-y-4">
                    <p className="text-sm leading-6 text-[rgb(55,65,81)]">
                        A digital marketer and an aspiring software engineer.

                    </p>

                    <div className="space-y-4 text-sm leading-6">
                        <p className="text-[rgb(55,65,81)]">
                            <span className="font-semibold text-[rgb(17,24,39)]">Age: </span>
                            <LiveAge />
                        </p>

                        <p className="text-[rgb(55,65,81)]">
                            <span className="font-semibold text-[rgb(17,24,39)]">Interests: </span>
                            Marketing, Technology, System Design
                        </p>

                        <div className="text-[rgb(55,65,81)]">
                            <span className="font-semibold text-[rgb(17,24,39)]">Projects: </span>
                            <ul className="list-disc list-inside mt-2 ml-2 space-y-1">
                                <li>
                                    <Link href="https://marka-digital.com" target="_blank" className="hover:text-[rgb(10,10,10)] transition-colors">
                                        Marka (Digital Marketing Agency)
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://share.google/sXEkmJsMwGDJKjHCh" target="_blank" className="hover:text-[rgb(10,10,10)] transition-colors">
                                        Bakso Tujuh Pemuda (Restaurant)
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://rekobu.com" target="_blank" className="hover:text-[rgb(10,10,10)] transition-colors">
                                        Rekobu (Book Recommendation Website)
                                    </Link>
                                </li>
                            </ul>
                        </div>


                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="max-w-[1024px] mx-auto w-full px-12 mt-12 pb-8">
                <hr className="border-t border-[rgb(229,231,235)] mb-4" />
                <div className="flex justify-end gap-6 text-sm leading-5 text-[rgb(115,115,115)]">
                    <a
                        href="https://x.com/emeraldofaris"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[rgb(10,10,10)] transition-colors"
                    >
                        X
                    </a>
                    <a
                        href="https://github.com/zamrudcodes"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[rgb(10,10,10)] transition-colors"
                    >
                        GitHub
                    </a>
                    <a
                        href="mailto:emeraldofaris@gmail.com"
                        className="hover:text-[rgb(10,10,10)] transition-colors"
                    >
                        Email
                    </a>
                    <a
                        href="https://www.linkedin.com/in/emeraldofaris/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[rgb(10,10,10)] transition-colors"
                    >
                        LinkedIn
                    </a>
                    <a
                        href="https://www.instagram.com/emeraldofaris/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[rgb(10,10,10)] transition-colors"
                    >
                        Instagram
                    </a>
                </div>
            </footer>
        </div>
    );
}