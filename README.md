Personal Caarer Blog Theme for Ghostjs

This theme is a hero focused responsive theme for Ghost for my first GhostJS blog.

It was build to provide me a space where I can host my writings and a space for my resume as well.

🛠 This theme is in active development 🛠

## Screenshot and Demo

You can look up a demo soon on [kellner-digital.com](https://www.kellner-digital.com)

The screenshot is comming soon(TM)

## Features

The following features are already in a useable state:

* [X] Index.hbs
* [X] Responsive Layout (even without javascript)
* [X] Table of Contents (works onlly with javascript)
* [X] hero.hbs
* [X] custom-tags.hbs (display all the tags)
* [X] Primary Menu
* [X] Secondary Menu
* [X] Title Description
* [X] Theme Color (for Vivaldi users)
* [X] Authors
* [X] Koenig Editor Embeds
* [X] Logo / Primary Color / Secondary Color

The following features are active in development:

* custom-resume.hbs
* portal features (I don´t plan to do much with it because I only want to write and and don´t gather leads for possible newsletters)
* dark mode
* error page
* preloads
* CSS Rewamp - I used a lot claasses exlusive to there corresponding handlebar files. I need to clean up some rules

## License

Copyright &copy; 2023 by Mario Kellner. Released under the [MIT license](https://github.com/Blackspo0n/personal-career-blog-ghost/blob/main/LICENSE).

The following files are excluded from MIT licensing:

* custom-resume.hbs
* hero.hbs
* aboutme.hbs

These files **must** modified before production use because containing my personal information.

## Built with

* PostCSS & Gulp (was default on Casper) - with many plugins activated
* [@tryghost/shared-theme-assets](https://socket.dev/npm/package/@tryghost/shared-theme-assets) (All other Frameworks used are inherited from this project)
* Icons are from [Icons8 - Line awesome](https://icons8.com/line-awesome)

## Credits - Contribution

The base of the template comes from the Ghost theme [Casper](https://github.com/TryGhost/Casperhttps:/).

I tried to orientate at the this theme as much as I could.

I used many of the css classes from [@tryghost/shared-theme-assets](https://socket.dev/npm/package/@tryghost/shared-theme-assets)

I took insperation from the following site: [Developer Portfolios](https://github.com/emmabostian/developer-portfolios)

---

Im not a professional webdeveloper so some of my code is not state of the art. If you find something that I made horrrible wrong please open an issue or create a pull request.

Help me to improve myself 😄🚀️🎉️.

## Old readme -> Will be deleted soon -- Goals

I want to create a own template to host a blog, to send newsletters but also to have an portfolio page.

### Less frameworks

I want to refresh the bare bone html5/css features without using that much frameworks.

To bring technologies together I tend to understand the core concept behind a technology.

It makes completely sense to use frameworks to be able to deploy faster to clients.
But this is not my goal. My goal is to understand and to refresh bare bone knowledge.

### Less Javascript

Javascript is all over the place. I even work with Next.js or Angular on some client projects.

But I am that guy that deactivated javascript per default in my browser.
Im a big fan of the plugin Noscript and I like sites that are at least viewable without javascript.

There also come downsites with my try to use less javascript.
Some Ghost features like "Sign up" to a newsletter and even the searchbar aren´t functional without javascript.
But I will try to implement solution that work even without it.

But for now my goal is to create at least my expected theme without javascript.

### Learnings

#### 1. Leanings

I try to orientate at the themes casper and solo and try to use the shared-theme-assets without the must js part of cz.
[https://socket.dev/npm/package/@tryghost/shared-theme-assets]

#### 2. GhostJS is good for turning your audience into a business

That is the slogan from GhostJS, right? It makes GhostJS a great editor platform.

But building a vCard-blogging platform with it is kind of challenging.

I think as good as GhostJS is, it's also bad. It is a pain to develop a custom theme with different-looking pages because of the following points:

* Lack of post-endpoint for non-JS forms (portal, search)
* For a simple contact form, you need a third-party provider. Why isn't this a native function?
* Registering custom Handlebars helpers is not possible without altering the code.
* Custom fields for more dynamic posts and pages? Where are they???
* Why is the bio limited to 200 characters?
* The only available helper (without JavaScript and Fetch) for the actual content is {{content}}. There is no way to gather, let's say, the headlines to make a table of content without writing JavaScript.

Right, you can say you can always edit the code; goddamn it's MIT. But if I do so, I have to maintain my version of GhostJS.

I don't have the time for it when I want to focus on writing.

For now, I will finish my theme with static text in it. Maybe for the next iteration, I will go to a true headless CMS system like Strapi or KeystoneJS.
