"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useContent } from '@/lib/content-context'

export default function EditorPage() {
    const { content, updateContent } = useContent()
    const router = useRouter()

    const [formData, setFormData] = useState(content)
    const [saved, setSaved] = useState(false)

    const handleSave = () => {
        updateContent(formData)
        setSaved(true)
        setTimeout(() => setSaved(false), 2000)
    }

    const handleInterestChange = (index: number, value: string) => {
        const newInterests = [...formData.interests]
        newInterests[index] = value
        setFormData({ ...formData, interests: newInterests })
    }

    const addInterest = () => {
        setFormData({ ...formData, interests: [...formData.interests, ''] })
    }

    const removeInterest = (index: number) => {
        const newInterests = formData.interests.filter((_, i) => i !== index)
        setFormData({ ...formData, interests: newInterests })
    }

    return (
        <div className="min-h-screen bg-cream text-dark-purple font-display">
            <div className="max-w-[800px] mx-auto px-[30px] py-[60px]">
                <div className="flex justify-between items-center mb-[50px]">
                    <h1 className="text-[28px] font-semibold tracking-tight">Content Editor</h1>
                    <button
                        onClick={() => router.push('/')}
                        className="px-4 py-2 bg-dark-purple text-cream rounded hover:opacity-80 transition-opacity"
                    >
                        View Site
                    </button>
                </div>

                <div className="space-y-[25px]">
                    {/* Name */}
                    <div>
                        <label className="block mb-2 font-semibold">Name</label>
                        <input
                            type="text"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full px-4 py-2 bg-white border border-dark-purple/20 rounded focus:outline-none focus:border-dark-purple"
                        />
                    </div>

                    {/* Bio */}
                    <div>
                        <label className="block mb-2 font-semibold">Bio</label>
                        <textarea
                            value={formData.bio}
                            onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                            className="w-full px-4 py-2 bg-white border border-dark-purple/20 rounded focus:outline-none focus:border-dark-purple h-[80px]"
                        />
                    </div>

                    {/* Interests */}
                    <div>
                        <label className="block mb-2 font-semibold">Interests</label>
                        {formData.interests.map((interest, index) => (
                            <div key={index} className="flex gap-2 mb-2">
                                <input
                                    type="text"
                                    value={interest}
                                    onChange={(e) => handleInterestChange(index, e.target.value)}
                                    className="flex-1 px-4 py-2 bg-white border border-dark-purple/20 rounded focus:outline-none focus:border-dark-purple"
                                    placeholder={`Interest ${index + 1}`}
                                />
                                <button
                                    onClick={() => removeInterest(index)}
                                    className="px-4 py-2 bg-red-100 text-red-700 rounded hover:bg-red-200"
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                        <button
                            onClick={addInterest}
                            className="px-4 py-2 bg-dark-purple/10 text-dark-purple rounded hover:bg-dark-purple/20"
                        >
                            + Add Interest
                        </button>
                    </div>

                    {/* Projects */}
                    <div>
                        <label className="block mb-2 font-semibold">Projects Description</label>
                        <textarea
                            value={formData.projectsText}
                            onChange={(e) => setFormData({ ...formData, projectsText: e.target.value })}
                            className="w-full px-4 py-2 bg-white border border-dark-purple/20 rounded focus:outline-none focus:border-dark-purple h-[120px]"
                        />
                    </div>

                    {/* Social Links */}
                    <div>
                        <label className="block mb-2 font-semibold">Social Links</label>
                        <div className="space-y-2">
                            <div>
                                <label className="block text-sm mb-1">X (Twitter)</label>
                                <input
                                    type="text"
                                    value={formData.socialLinks.x}
                                    onChange={(e) => setFormData({
                                        ...formData,
                                        socialLinks: { ...formData.socialLinks, x: e.target.value }
                                    })}
                                    className="w-full px-4 py-2 bg-white border border-dark-purple/20 rounded focus:outline-none focus:border-dark-purple"
                                    placeholder="https://x.com/username"
                                />
                            </div>
                            <div>
                                <label className="block text-sm mb-1">Instagram</label>
                                <input
                                    type="text"
                                    value={formData.socialLinks.instagram}
                                    onChange={(e) => setFormData({
                                        ...formData,
                                        socialLinks: { ...formData.socialLinks, instagram: e.target.value }
                                    })}
                                    className="w-full px-4 py-2 bg-white border border-dark-purple/20 rounded focus:outline-none focus:border-dark-purple"
                                    placeholder="https://www.instagram.com/username/"
                                />
                            </div>
                            <div>
                                <label className="block text-sm mb-1">Email</label>
                                <input
                                    type="email"
                                    value={formData.socialLinks.email}
                                    onChange={(e) => setFormData({
                                        ...formData,
                                        socialLinks: { ...formData.socialLinks, email: e.target.value }
                                    })}
                                    className="w-full px-4 py-2 bg-white border border-dark-purple/20 rounded focus:outline-none focus:border-dark-purple"
                                    placeholder="hello@example.com"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Save Button */}
                    <div className="pt-[25px]">
                        <button
                            onClick={handleSave}
                            className="w-full px-6 py-3 bg-dark-purple text-cream rounded font-semibold hover:opacity-90 transition-opacity"
                        >
                            {saved ? '✓ Saved!' : 'Save Changes'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
