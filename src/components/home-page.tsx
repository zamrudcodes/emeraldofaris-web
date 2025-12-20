"use client"

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useContent } from '@/lib/content-context'

export default function HomePage() {
    const { content } = useContent()
    const router = useRouter()
    const [age, setAge] = useState<string>('0 years, 0 days, 0 hours, 0 minutes, 0 seconds')

    useEffect(() => {
        // Calculate precise age in years, days, hours, minutes, seconds
        const calculateDetailedAge = (): string => {
            const now = new Date()
            const birth = new Date(content.birthDateTime)

            // Calculate total difference in milliseconds
            const totalMs = now.getTime() - birth.getTime()

            // Convert to different units
            const totalSeconds = Math.floor(totalMs / 1000)
            const totalMinutes = Math.floor(totalSeconds / 60)
            const totalHours = Math.floor(totalMinutes / 60)
            const totalDays = Math.floor(totalHours / 24)
            const totalYears = Math.floor(totalDays / 365.25)

            // Calculate remaining units
            const remainingDays = Math.floor(totalDays - (totalYears * 365.25))
            const remainingHours = totalHours % 24
            const remainingMinutes = totalMinutes % 60
            const remainingSeconds = totalSeconds % 60

            return `${totalYears} years, ${remainingDays} days, ${remainingHours} hours, ${remainingMinutes} minutes, ${remainingSeconds} seconds`
        }

        // Initial calculation
        setAge(calculateDetailedAge())

        // Update every second
        const interval = setInterval(() => {
            setAge(calculateDetailedAge())
        }, 1000)

        return () => clearInterval(interval)
    }, [content.birthDateTime])

    // Keyboard shortcut to access editor
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'e' && !e.ctrlKey && !e.metaKey && !e.altKey) {
                const target = e.target as HTMLElement
                if (target.tagName !== 'INPUT' && target.tagName !== 'TEXTAREA') {
                    router.push('/editor')
                }
            }
        }

        document.addEventListener('keydown', handleKeyDown)
        return () => document.removeEventListener('keydown', handleKeyDown)
    }, [router])

    return (
        <div className="min-h-screen bg-cream text-dark-purple font-display">
            <div className="max-w-[650px] mx-auto px-[30px] py-[60px]">
                <header className="mb-[50px]">
                    <h1 className="text-[28px] font-semibold mb-5 tracking-tight">
                        <a
                            href="/"
                            className="text-dark-purple no-underline transition-opacity duration-200 hover:opacity-70"
                        >
                            {content.name}
                        </a>
                    </h1>
                </header>

                <main className="animate-fadeIn">
                    <section id="about" className="mb-[25px]">
                        <p className="mb-2.5">{content.bio}</p>
                        <p className="mb-[25px]">Age: {age}</p>

                        <div className="mb-[25px]">
                            <p className="mb-2"><strong className="font-semibold">Interests:</strong></p>
                            <ul className="list-none pl-0">
                                {content.interests.map((interest, index) => (
                                    <li key={index} className="mb-1 pl-5 relative">
                                        <span className="absolute left-0">-</span>
                                        <span className="text-dark-purple">{interest}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="mb-[25px] leading-[1.7]">
                            <p className="font-light">
                                <strong className="font-semibold">Projects:</strong> {content.projectsText}
                            </p>
                        </div>
                    </section>

                    <footer id="contact" className="mt-[50px] pt-[30px] border-t border-dark-purple/10 flex gap-5 flex-wrap">
                        <a
                            href={content.socialLinks.x}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-dark-purple no-underline relative group"
                        >
                            X
                            <span className="absolute bottom-[-2px] left-0 w-0 h-[1px] bg-dark-purple transition-all duration-200 group-hover:w-full"></span>
                        </a>
                        <a
                            href={content.socialLinks.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-dark-purple no-underline relative group"
                        >
                            Instagram
                            <span className="absolute bottom-[-2px] left-0 w-0 h-[1px] bg-dark-purple transition-all duration-200 group-hover:w-full"></span>
                        </a>
                        <a
                            href={`mailto:${content.socialLinks.email}`}
                            className="text-dark-purple no-underline relative group"
                        >
                            Email
                            <span className="absolute bottom-[-2px] left-0 w-0 h-[1px] bg-dark-purple transition-all duration-200 group-hover:w-full"></span>
                        </a>
                    </footer>
                </main>
            </div>
        </div>
    )
}
