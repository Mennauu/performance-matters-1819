<h1 align="center">Performance Matters @cmda-minor-web · 2018-2019</h1>

<p align="center"><b>Transfering the <a href="https://github.com/Mennauu/project-1-1819" target="_blank">OBA client side web app</a> to a server side rendered application. Also, a series of optimisations have been implemented to improve the performance of the application. It's also avaiable offline.</b>
</p>

<br>

<p align="center">
  <a href="https://mennauu.github.io/web-app-from-scratch-18-19/week1">
    <img src="https://img.shields.io/badge/week-1-brightgreen.svg?style=flat-square" alt="week1">
  </a>
  &nbsp;&nbsp;&nbsp;
  <a href="https://mennauu.github.io/web-app-from-scratch-18-19/week2">
    <img src="https://img.shields.io/badge/week-2-red.svg?style=flat-square" alt="week2">
  </a>
  &nbsp;&nbsp;&nbsp;
  <a href="https://mennauu.github.io/web-app-from-scratch-18-19/week3">
    <img src="https://img.shields.io/badge/week-3-red.svg?style=flat-square" alt="week3">
  </a>
  &nbsp;&nbsp;&nbsp;
  <a href="https://github.com/Mennauu/web-app-from-scratch-18-19/blob/master/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square" alt="License">
  </a>
</p> 

<br>

![preview](assets/preview.png)

<br>

<!-- ☝️ replace this description with a description of your own work -->
## Introduction
[ Description ]

Some resources possess an emoticon to help you understand which type of content you may find:

- 📖: Documentation or article
- 🛠: Tool or library
- 📹: Video

You can find a live demo right here: https://mennauu.github.io/performance-matters-1819/week3

<!-- Maybe a table of contents here? 📚 -->
## Table of Contents

- [Installation](#installation)
- [Interactions](#interactions)
- [Data](#data)
  - [Authentication and limit](#authentication-and-limit)
  - [Featured data](#featured-data)
  - [Retrieve](#retrieve)
  - [Cache](#cache)
- [Code structure](#code-structure)
  - [Actor diagram](#authentication-and-limit)
  - [Interaction diagram](#authentication-and-limit)
- [Checklist](#checklist)
- [Credits](#credits)
- [Sources](#sources)
  - [API](#api)
  - [Router](#router)
  - [Async and await](#async-and-await)
  - [General JavaScript](#general-javascript)
  - [Diagrams](#diagrams)
- [License](#license)

<!-- How about a section that describes how to install this project? 🤓 -->
## Installation
1. Open your terminal
2. Change the directory to a folder in which you want to place the files
```bash
cd /~path
```
3. Clone the repository (you're going to need [Git](https://www.linode.com/docs/development/version-control/how-to-install-git-on-linux-mac-and-windows/))
```bash
git clone https://github.com/Mennauu/performance-matters-1819
```
4. 

## Optimalisations

### First view

#### Compression
The first thing I did was add compression. Brotli compression seems to be the most efficient.
```diff
+ HTML file reduction 71,4%
+ CSS file reduction: 54,8%
```
<details>
  <summary>Network results based on a slow 3G network</summary>


**Without compression**
```
HTML: Size 4.2 KB | Time 2.09s
CSS: Size 3.1 KB | Time 2.27s

27 requests | 109 KB transferred | Finish 13.49s | DOMContentLoaded: 2.10s | Load 11.47s
```

**With Gzip**
```
HTML: Size 1.2 KB | Time 2.01s
CSS: Size 1.4 KB | Time 2.04s

27 requests | 105 KB transferred | Finish 13.40s | DOMContentLoaded: 2.06s | Load 11.38s
```

**With Brotli**
```
HTML: Size 1.0 KB | Time 2.01s
CSS: Size 1.4 KB | Time 2.03s

27 requests | 105 KB transferred | Finish 13.24s | DOMContentLoaded: 2.06s | Load 11.22s
```
</details>

#### Minifying
I don't use JavaScript (client-side) so the only meaningful files to minify are css files.

```diff
+ CSS file reduction: 17,7%
```
<details>
  <summary>Network results based on a slow 3G network</summary>


**Not minified**
```
Size: 1.7 KB | Time: 2.25s
```

**Minified**
```
Size: 1.4 KB | Time: 2.08s
```
</details>

#### Images to WebP
Support is weak for WebP, but that doesn't mean we shouldn't use it in browsers that can actually make use of it. We can use a fallback. Browsers that don't support the picture tag, or webp files, will just ignore those lines and render the fallback image in the img tag.
```diff
+ Improvement: 32%
```

```html
<picture>
  <source srcset="{{cover_image}}" type="image/webp">
  <source srcset="{{cover_image_fallback}}" type="image/jpeg">
  <img src="{{cover_image_fallback}}" alt="{{genre}}">
</picture>
```

<details>
  <summary>Network results based on a slow 3G network</summary>


**Jpeg**

![jpeg test results](assets/jpeg.png)

**WebP**

![webp test results](assets/webp.png)

</details>

### Render view

#### Unique hash digits
Use Gulp, Webpack, or similar to add unique hash digits to your css, js, and image files (like app-67ce7f3483.css)

#### Caching
For JavaScript ,CSS, and image files, set Cache-Control: public, max-age=31536000, no Etag, no Last-Modified settings.

For HTML files, use Cache-Control: no-cache, and Etag.

Removed 'X-Powered-By' for all












## Notes (This will be removed)
* Kijk naar NPM scripts
* Kijk naar gulp of nieuwere tools dan Gulp

HET BUILDEN VAN DE HELE APP VIA NPM

- Minification
- file revisioning (rev-manifest)
- Brotli ipv GZIP
- precompression (Static site)
- img revision tag (304 - 200)
- srcset and sizes attributes 
- Picture html tag (client hints) - webp met fallbacks
- Resource hints
- DNS-PREFETCH
- link preconnect, prefetch, preload, prerender
- font subsetting
- font rendering controls (font-display: swap)
- Reflow verminderen door op de fallback font line-height en letter-spacing te plaatsen (Font style Matcher)
- fontFaceObserver (add class async (after font is loaded)) with a cookie and class
- Defer, async scripts
- Je kan styles asynchroon inladen (LoadCSS)
- Critical CSS - minimum css nodig (lijn trekken)

<!-- Maybe a checklist of done stuff and stuff still on your wishlist? ✅ -->
## Checklist
- [x] Filled
- [ ] Empty

<!-- Maybe someone helped me 🤔-->
## Credits

<!-- Maybe I used some awesome sources that I can mention 🤔-->
## Sources
Underneath you will find all the sources that were previously mentioned throughout the document and some others which were helpful.

<!-- How about a license here? 📜 (or is it a licence?) 🤷 -->
## License 
See the [LICENSE file](https://github.com/Mennauu/web-app-from-scratch-18-19/blob/master/LICENSE) for license rights and limitations (MIT).
