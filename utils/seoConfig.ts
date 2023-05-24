/**
 * Defines the default SEO configuration for the website.
 */
export const seoConfig = {
    baseURL: process.env.SITE_URL || "https://bsccsitnepal.com", // Change this to your production URL.
    description: process.env.SITE_DESCRIPTION || "CSIT resources at your fingertips.",
    type: "website",
    image: {
        url: "/assets/homepage.png",
        alt: "Home Page of Bsc Csit Nepal",
        width: 1343,
        height: 641
    },
    siteName: "Bsc Csit Nepal", // Change this to your website's name,
    twitter: {
        card: "summary_large_image"
    }
}