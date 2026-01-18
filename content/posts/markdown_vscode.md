---
id: "markdown_vscode"
title: "Markdown in VSCODE"
date: 2026-01-17
category: "Guide"
description: "Markdown is a lightweight markup language for creating formatted text using a plain-text editor."
---
Beyond the Basics: 3 Markdown Features You're Probably Not Using

Markdown is renowned for its simplicity. With just a few intuitive symbols, you can create beautifully structured documents, from lists and headers to bolded text. It's a clean, efficient way to write for the web.

But for many users, that's where the story ends. They master the basics and never realize that powerful, flexible features are hiding in plain sight. These aren't obscure tricks; they are core capabilities designed to solve common and complex formatting challenges.

This article will reveal three of the most impactful and surprising features of Markdown. Learning them will elevate your documents from simple text to precisely controlled, feature-rich content.

1. You Can Break the Rules with HTML

Markdown is not a closed system. Its single most powerful feature is that you can drop raw HTML tags directly into your document whenever you need formatting that its native syntax doesn't cover. This acts as an "escape hatch," giving you limitless control over the final output.

While standard Markdown is excellent for structure, it offers no native syntax for embedding media, applying specific colors, or defining image dimensions. That's where HTML comes in. Here are a few practical examples of what this enables:

* Embedding a video: You can embed a video directly into your document using the HTML iframe tag, controlling its properties right from your text.
* Styling text with inline CSS: For advanced text styling, you can use HTML tags with inline CSS. For example, to make a specific phrase green as shown in the guide, you would write: <p style="color:green;">This is a green text.</p>
* Controlling image size: While Markdown can place an image, HTML gives you fine-tuned control. By using an <img> tag, you can specify exact width and height attributes.

This design choice reveals that Markdown's creators understood its limits. By including an HTML passthrough, they prioritized utility over purity, ensuring that Markdown could be a practical tool for the real world, not just a rigid, academic syntax.

2. The Backslash is Your "Ignore" Command

Have you ever tried to type a literal asterisk or underscore, only to have it accidentally italicize your text? This is a common problem when writing technical documentation or tutorials where special characters are part of the content itself.

The solution is the backslash (\), which functions as an "escape character." Placing a backslash immediately before a special formatting character tells the Markdown processor to ignore its special function and treat it as a literal character instead.

* Without escaping: Typing _literal underscore_ results in literal underscore.
* With escaping: Typing \_literal underscore\_ results in _literal underscore_.

This feature is non-negotiable for technical writing, giving authors the power to document syntax with absolute precision and ensuring the reader sees exactly what was intended, free from accidental formatting.

3. It’s More Forgiving Than You Think

Markdown was designed with the writer's convenience in mind, and this is reflected in its flexible syntax. It often provides multiple ways to achieve the same result, allowing you to use whichever method is fastest or easiest to remember at the moment.

This flexibility is most apparent in two common formatting tasks:

* For unordered lists: You can use an asterisk (*), a plus sign (+), or a hyphen (-) interchangeably to create bullet points. All three produce the same result.
* For emphasis: You can use either single asterisks (*italic*) or single underscores (_italic_) to make text italic. For bold text, you can use either double asterisks (**bold**) or double underscores (__bold__).

This design choice isn't accidental. It prioritizes the ease of writing over rigid, unforgiving rules, which is a key reason Markdown is so fast to learn and efficient to use in day-to-day work.

Your New Markdown Toolkit

Markdown is a tool that is simple to learn but offers surprising depth for those willing to look closer. While the basics are enough to get by, understanding its more advanced capabilities transforms it from a simple formatter into a powerful authoring system.

By adding HTML for advanced needs, using the backslash for precise control, and leveraging the syntax's inherent flexibility, you can create richer, more accurate documents with less effort.

Now that you know what's possible, what will you create with Markdown?
