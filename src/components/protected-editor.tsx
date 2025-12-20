"use client"

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import EditorPage from '@/components/editor-page'

export default function ProtectedEditorPage() {
    const router = useRouter()
    const [password, setPassword] = useState('')
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(false)

    // You can change this password to whatever you want
    const EDITOR_PASSWORD = 'P4ssword?'

    // Check session storage on mount
    useEffect(() => {
        const auth = sessionStorage.getItem('editorAuth')
        if (auth === 'true') {
            setIsAuthenticated(true)
        }
        setIsLoading(false)
    }, [])

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault()

        if (password === EDITOR_PASSWORD) {
            setIsAuthenticated(true)
            sessionStorage.setItem('editorAuth', 'true')
            setError(false)
        } else {
            setError(true)
            setPassword('')
        }
    }

    const handleLogout = () => {
        setIsAuthenticated(false)
        sessionStorage.removeItem('editorAuth')
        router.push('/')
    }

    if (isLoading) {
        return (
            <div className="min-h-screen bg-cream text-dark-purple font-display flex items-center justify-center">
                <div className="text-center">Loading...</div>
            </div>
        )
    }

    // If authenticated, show the editor
    if (isAuthenticated) {
        return (
            <div>
                <EditorPage />
                {/* Add logout button overlay */}
                <div className="fixed bottom-5 right-5">
                    <button
                        onClick={handleLogout}
                        className="px-4 py-2 bg-dark-purple/90 text-cream rounded shadow-lg hover:bg-dark-purple transition-colors text-sm"
                    >
                        Logout
                    </button>
                </div>
            </div>
        )
    }

    // Show password prompt
    return (
        <div className="min-h-screen bg-cream text-dark-purple font-display flex items-center justify-center">
            <div className="max-w-[400px] w-full px-[30px]">
                <div className="bg-white border border-dark-purple/10 rounded-lg p-8 shadow-sm">
                    <h2 className="text-2xl font-semibold mb-6 text-center">Editor Login</h2>

                    <form onSubmit={handleLogin} className="space-y-4">
                        <div>
                            <label htmlFor="password" className="block mb-2 font-semibold text-sm">
                                Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value)
                                    setError(false)
                                }}
                                className={`w-full px-4 py-3 bg-white border rounded focus:outline-none focus:border-dark-purple ${error ? 'border-red-500' : 'border-dark-purple/20'
                                    }`}
                                placeholder="Enter password"
                                autoFocus
                            />
                            {error && (
                                <p className="text-red-500 text-sm mt-2">Incorrect password</p>
                            )}
                        </div>

                        <button
                            type="submit"
                            className="w-full px-6 py-3 bg-dark-purple text-cream rounded font-semibold hover:opacity-90 transition-opacity"
                        >
                            Login
                        </button>
                    </form>

                    <div className="mt-6 text-center">
                        <button
                            onClick={() => router.push('/')}
                            className="text-sm text-dark-purple/60 hover:text-dark-purple transition-colors"
                        >
                            ← Back to site
                        </button>
                    </div>
                </div>

                <div className="mt-4 text-center text-xs text-dark-purple/40">
                    Press &apos;e&apos; on the homepage to access this page
                </div>
            </div>
        </div>
    )
}
