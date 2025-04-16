import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'KKRIT Application',
        short_name: 'KKRIT App', 
        description: 
            'KKRIT магазин одежды, аксесуаров, концелярии и сувениров',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#fff',
        display: 'standalone',
        icons: [
            {
                src: '/img/icon.png',
                sizes: '196x196 512x512 144x144 192x192 128x128 180x180',
                type: 'image/png',
                purpose: 'maskable',
            },
        ],
    }
}