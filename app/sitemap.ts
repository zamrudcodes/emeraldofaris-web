import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://emeraldofaris.com',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
    ]
}
