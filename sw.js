// Ovi Card — service worker. Page: network-first (updates show right away), offline fallback from cache.
const V = 'ovi-card-v4';
const FILES = ['./', './index.html', './manifest.webmanifest', './icon.svg', './ovi.vcf'];

self.addEventListener('install', e => {
