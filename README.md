# personal-career-blog-ghost
Theme used for my ghost-instance. Works even with noscript!

## Goal
I want to create a own template to host a blog, to send newsletters but also to have an portfolio page.

### Subgoal - Less frameworks
I want to refresh the bare bone html5/css features without using that much frameworks.

To bring technologies together I tend to understand the core concept behind a technology.

It makes completely sense to use frameworks to be able to deploy faster to clients.
But this is not my goal. My goal is to understand and to refresh bare bone knowledge.

### Subgoal - Less Javscript
Javascript is all over the place. I even work with Next.js or Angular on some client projects.

But I am that guy that deactivated javascript per default in my browser.
Im a big fan of the plugin Noscript and I like sites that are at least viewable without javascript.

There also come downsites with my try to use less javascript. 
Some Ghost features like "Sign up" to a newsletter and even the searchbar aren´t functional without javascript. 
But I will try to implement solution that work even without it.

But for now my goal is to create at least my expected theme without javascript.

## Learnings
### 1. Leanings
I try to orientate at the themes casper and solo and try to use the shared-theme-assets without the must js part of cz.
[https://socket.dev/npm/package/@tryghost/shared-theme-assets]

### 2. GhostJS is good for turning your audience into a business
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
## Development Status
Still work in progress.
