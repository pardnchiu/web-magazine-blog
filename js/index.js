import { viewer } from "https://cdn.jsdelivr.net/gh/pardnchiu/PDMarkdownKit@1.0.1/dist/PDMarkdownKit.js";

const pre = `# PDMarkdownKit (JavaScript Library)

> PDMarkdownKit is a lightweight Markdown editor and viewer library based on JavaScript. It offers rich features to edit and preview Markdown content in real-time.

![](https://img.shields.io/github/v/release/pardnchiu/PDMarkdownKit?color=bb4444) ![](https://img.shields.io/npm/v/pdmarkdownkit?color=44bb44) ![](https://img.shields.io/github/size/pardnchiu/PDMarkdownKit/dist%2FPDMarkdownKit.js?color=4444bb) ![](https://img.shields.io/github/license/pardnchiu/PDMarkdownKit?color=bbbb44)<br>
![](https://img.shields.io/badge/tag-JavaScript%20Library-44bbbb) ![](https://img.shields.io/badge/creator-邱敬幃%20Pardn%20Chiu-bb44bb)

## Feature

- Provide standalone editor and viewer modules, supporting real-time preview and scroll synchronization.
- Support various Markdown syntax, including headings, bold, italic, links, images, code blocks, etc.
- Offer undo and redo functionality, and support file import and export (.md and .html formats).
- Rendered using [PDRenderKit](https://github.com/pardnchiu/PDRenderKit).
- Use [Font Awesome 6](https://fontawesome.com/v6/search) icons.
- Use [code-prettify](https://github.com/googlearchive/code-prettify) for code highlighting.

## Creator

<img src="https://pardn.io/image/head-s.jpg" style="float: left; margin-right: 0.5rem; width: 128px; height: 128px;">

### 邱敬幃 Pardn Chiu

[![](https://pardn.io/image/mail.svg)](mailto:mail@pardn.ltd) [![](https://skillicons.dev/icons?i=linkedin)](https://linkedin.com/in/pardnchiu) 
<br><br>

## License

This source code project is licensed under the [GPL-3.0](https://github.com/pardnchiu/PDMarkdownKit/blob/main/LICENSE) license.

## How to use
- ### Add dependency \`PDRenderKit\`
\`\`\`Html
<script src="https://cdn.jsdelivr.net/gh/pardnchiu/PDRenderKit@[VERSION]/dist/PDRenderKit.js" copyright="Pardn Ltd"></script>
\`\`\`
- ### Directly download the package
\`\`\`Shell
npm i pdmarkdownkit
\`\`\`
- ### Or include via \`cdn.jsdelivr.net\`
\`\`\`JAVASCRIPT
import { editor,  iewer } from "https://cdn.jsdelivr.net/gh/pardnchiu/PDMarkdownKit@[VERSION]/dist/PDMarkdownKit.js";

const elm_editor = new editor({
id: "",                             // Default PDMDEditor
placeholder: "Content",             // Default Type here ..
placeholderColor: "#ff000080",      // Default #0000ff1a
focusBackgroundColor: "#ff00001a",  // Default #0000ffff
focusTextColor: "#ff0000",          // Default bfbfbf
showRow: 1,                         // Show number of rows, default 1
fillMode: 1,                        // Fill mode, resizes with parent element, default 1
preventRefresh: 0                   // Prevent refresh, default 0
});

const elm_viewer = new viewer({
id: "",                 // Default PDMDViewer
pre: "",                // Default content. Displayed when PDEditor is empty
delay: 50,              // Update delay, default 300ms, minimum 1
editor: elm_editor,     // Link to editor
scrollSync: 1,          // Synchronize scrolling with editor
tagPath: "?keyword=",   // Hashtag path, required to detect hashtags
tagTarget: "_blank",    // Open hashtags in, default _blank
fillMode: 1             // Fill mode, resizes with parent element, default 1
});

// Add elements to the view
{DOM}.appendChild(elm_editor.body);
{DOM}.appendChild(elm_viewer.body);

// Initialize editor and viewer.
elm_editor.init(pre: string);
elm_viewer.init(pre: string);
\`\`\`

## Heading

H1
===
\`\`\`
H1
===
\`\`\`

H2
---
\`\`\`
H2
---
\`\`\`

- # H1 → \`# H1\`
- ## H2 → \`## H2\`
- ### H3 → \`### H3\`
- #### H4 → \`#### H4\`
- ##### H5 → \`##### H5\`
- ###### H6 → \`##### H6\`

## Font Style

- ### Bold
1. **Bold 1** → \`**Bold 1**\`
2. <b>Bold 2</b> → \`<b>Bold 2</b>\`
3. <strong>Bold 3</strong> → \`<strong>Bold 3</strong>\`
- ### Italic
1. *Italic 1* → \`*Italic 1*\`
2. _Italic 2_ → \`_Italic 2_\`
3. <i>Italic 3</i> → \`<i>Italic 3</i>\`
4. <em>Italic 4</em> → \`<em>Italic 4</em>\`
- ### Strile Through
1. ~~Strile Through 1~~ → \`~~Strile Through 1~~\`
2. <s>Strile Through 2</s> → \`<s>Strile Through 2</s>\`
- ### Under Line
1. __Under Line 1__ → \`__Under Line 1__\` 
2. <u>Under Line 2</u> → \`<u>Under Line 2</u>\`
- ### Mark
1. ==Mark 1== → \`==Mark 1==\`
2. <mark>Mark 2</mark> → \`<mark>Mark 2</mark>\`
- ### Superscripts / Subscripts
1. x^2^ → \`x^2^\`
2. H~2~O → \`H~2~O\`

## Horizontal Rule

- \`---\` ↓

---

- \`***\` ↓

***

## Blockquote

> Blockquote-1
> 
>> Blockquote-2
>>> Blockquote-3

## Table

| Title | Title |
| - | - |
| Value | Value |
| Value | Value |
| Value | Value |
| Value | Value |

## List

- Ordered List
1. ol List 0
2. ol List 0
3. ol List 0
1. ol List 1
    1. ol List 2
        1. ol List 3
            1. ol List 4
- Unordered List
- ul List 0
- ul List 0
- ul List 0
- ul List 1
    - ul List 2
        - ul List 3
            - ul List 4
- Mixed List
- ul List 0
- ul List 0
- ul List 0
1. ol List 1
1. ol List 1
1. ol List 1
    - ul List 2
    - ul List 2
    - ul List 2
        1. ol List 3
            - ul List 4

## Code Block

- ### inline: 
\`#Code-1\`
- ### Block: 
\`\`\`
#Code-2
#Code-2
#Code-2
\`\`\`
- ### Block by Space*4: 

#Code-3
#Code-3
#Code-3

## Link

- ### Link-1 https://github.com/pardnchiu/PDMarkdownKit/
- ### [Link-2](https://github.com/pardnchiu/PDMarkdownKit/)
- ### [Link-3](https://github.com/pardnchiu/PDMarkdownKit/ "Github")

## Image

- ### Image-1 
![](https://opengraph.githubassets.com/1/pardnchiu/PDMarkdownKit)
- ### Image-2 
![name](https://opengraph.githubassets.com/1/pardnchiu/PDMarkdownKit)
- ### Image-3 
![name](https://opengraph.githubassets.com/1/pardnchiu/PDMarkdownKit "title")
- ### Image-4 (width: 50%, height: 360) 
![](https://opengraph.githubassets.com/1/pardnchiu/PDMarkdownKit)(50%*360)
- ### Image + Link 
[![](https://opengraph.githubassets.com/1/pardnchiu/PDMarkdownKit)](https://github.com/pardnchiu/PDMarkdownKit)
- ### Video
![](static/image/youtube.mov)

### Hashtag

#test1 #test2 #test3

## Shortcut Keys

- Supported
- Copy: \`cmd/ctrl\` + \`c\`
- Cut: \`cmd/ctrl\` + \`x\`
- Paste: \`cmd/ctrl\` + \`v\`
- Undo: \`cmd/ctrl\` + \`z\`
- Redo: \`cmd/ctrl\` + \`shift\` + \`z\`
- Bold: \`cmd/ctrl\` + \`b\`
- Italic: \`cmd/ctrl\` + \`i\`
- Strikethrough: \`cmd/ctrl\` + \`s\`
- Underline: \`cmd/ctrl\` + \`u\`
- Mark: \`cmd/ctrl\` + \`m\`
- Superscript: \`cmd/ctrl\` + \`ArrowUp\`
- Subscript: \`cmd/ctrl\` + \`ArrowDown\`
- Code block: \`cmd/ctrl\` + \`k\`
- Disabled
- Refresh: \`cmd/ctrl\` + \`r\` or \`F5\`

***

*All translations powered by ChatGPT*

***

©️ 2023 [邱敬幃 Pardn Chiu](https://www.linkedin.com/in/pardnchiu)`;

document.addEventListener("DOMContentLoaded", _ => {
    const page = location.href.$query("page") || "home";
    const app = new PD({
        id: "app",
        data: {
            page: page,
            nav: (_ => {
                if (page == "home") {
                    return {
                        index: 0,
                        subIndex: 0,
                    };
                }
                else if (page == "list-1") {
                    return {
                        index: 1,
                        subIndex: 0,
                    };
                }
                else if (page == "list-2") {
                    return {
                        index: 1,
                        subIndex: 1,
                    };
                }
                else if (page == "grid-1") {
                    return {
                        index: 1,
                        subIndex: 2,
                    };
                }
                else if (page == "grid-2") {
                    return {
                        index: 1,
                        subIndex: 3,
                    };
                }
                else if (page == "post-1") {
                    return {
                        index: 2,
                        subIndex: 0,
                    };
                }
                else if (page == "post-2") {
                    return {
                        index: 2,
                        subIndex: 1,
                    };
                }
                else if (page == "author") {
                    return {
                        index: 3,
                        subIndex: 0,
                    };
                }
                else if (page == "contact") {
                    return {
                        index: 4,
                        subIndex: 0,
                    };
                }
                else {
                    return {
                        index: 5,
                        subIndex: 0,
                    };
                }
            })(),
            item_2: Array.from({ length: 2 }, (_, i) => i),
            item_3: Array.from({ length: 3 }, (_, i) => i),
            item_4: Array.from({ length: 4 }, (_, i) => i),
            item_10: Array.from({ length: 10 }, (_, i) => i),
            item_20: Array.from({ length: 20 }, (_, i) => i)
        },
        event: {
            rightTab: _ => {
                const dom = "right-tab".$;

                if (dom == null) {
                    return;
                };

                if (dom.style.display === "none") {
                    dom._style({
                        display: "block"
                    });
                }
                else {
                    dom._class("hide");

                    setTimeout(_ => {
                        dom._style({
                            display: "none"
                        }).class_("hide");
                    }, 300)
                };
            },
            scrollTop: _ => {

                document.body.scrollTo({
                    top: 0,
                    behavior: "smooth"
                })
            }
        },
        next: _ => {
            setTimeout(function () {
                document.body.class_("ft");

                if ("section.md".$) {
                    const elm_viewer = new viewer({
                        pre: pre,
                        delay: 50,
                        tagPath: "?keyword=",
                        tagTarget: "_blank",
                        fillMode: 0
                    });

                    "section.md".$._child([
                        elm_viewer.body
                    ]);

                    elm_viewer.init()
                };
            }, 500);

            document.body.addEventListener("scroll", function () {
                const maxY = this.scrollHeight - this.clientHeight;
                const offsetY = this.scrollTop;
                offsetY > 0 ? "top-nav".$._class("show") : "top-nav".$.class_("show");
                "top-nav".$._attr({
                    percent: Math.round(offsetY / maxY * 1000)
                });

                if ("section-right".$) {
                    const vh = document.body.clientHeight;
                    const rightH = "section-right".$.clientHeight;
                    "section-right".$._style({
                        top: (vh < rightH ? vh - rightH : "112") + "px"
                    });
                };
            });
        }
    })
});