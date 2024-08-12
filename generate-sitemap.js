import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import { Readable } from 'stream';

const links = [
	{ url: '/', changefreq: 'daily', priority: 0.9 },
	{ url: '/menu', changefreq: 'daily', priority: 0.8 },
	{ url: '/access', changefreq: 'daily', priority: 0.8 },
	// Add more routes here as needed
];

const stream = new SitemapStream({ hostname: 'https://www.kyotoingbar.com' });

Readable.from(links)
	.pipe(stream)
	.pipe(createWriteStream('./public/sitemap.xml'));

streamToPromise(stream).then(() =>
	console.log('Sitemap created successfully.')
);
