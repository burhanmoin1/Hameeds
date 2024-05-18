export default async function sitemap(): Promise<import("next").MetadataRoute.Sitemap> {
    return [
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
            lastModified: new Date().toISOString(), // Optional: You can specify the last modified date
        }
    ];
};
