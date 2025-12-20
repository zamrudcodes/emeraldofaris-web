"use client"

import React, { createContext, useContext, useState, useEffect } from 'react'
import type { ReactNode } from 'react'

export interface ContentData {
    name: string
    bio: string
    birthDateTime: string
    interests: string[]
    projectsText: string
    socialLinks: {
        x: string
        instagram: string
        email: string
    }
}

interface ContentContextType {
    content: ContentData
    updateContent: (newContent: ContentData) => void
}

const defaultContent: ContentData = {
    name: 'Emeraldo Faris',
    bio: 'Digital marketer. Aspiring software builder.',
    birthDateTime: '1992-12-31T21:30:00.000Z', // 4:30 WIB on Jan 1, 1993
    interests: ['Building products', 'Building businesses', 'Technology'],
    projectsText: 'Sedang sangat menikmati membuat automations dan simple apps yang solve masalah dan membuat hidup banyak orang jadi lebih mudah.',
    socialLinks: {
        x: 'https://x.com/emeraldofaris',
        instagram: 'https://www.instagram.com/emeraldofaris/',
        email: 'emeraldofaris@gmail.com'
    }
}

const ContentContext = createContext<ContentContextType | undefined>(undefined)

export const ContentProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [content, setContent] = useState<ContentData>(defaultContent)
    const [isLoaded, setIsLoaded] = useState(false)

    // Load content from localStorage on mount
    useEffect(() => {
        const savedContent = localStorage.getItem('siteContent')
        if (savedContent) {
            try {
                setContent(JSON.parse(savedContent))
            } catch (e) {
                console.error('Failed to parse saved content:', e)
            }
        }
        setIsLoaded(true)
    }, [])

    const updateContent = (newContent: ContentData) => {
        setContent(newContent)
        localStorage.setItem('siteContent', JSON.stringify(newContent))
    }

    // Don't render children until we've loaded from localStorage
    if (!isLoaded) {
        return null
    }

    return (
        <ContentContext.Provider value={{ content, updateContent }}>
            {children}
        </ContentContext.Provider>
    )
}

export const useContent = () => {
    const context = useContext(ContentContext)
    if (context === undefined) {
        throw new Error('useContent must be used within a ContentProvider')
    }
    return context
}
