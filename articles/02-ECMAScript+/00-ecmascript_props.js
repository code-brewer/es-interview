import projectConfig from '/pagic.config.js';
var _a, _b;
export default {
    'prev': {
        "link": "articles/02-ECMAScript+/index.html",
        "text": "ECMAScript+"
    },
    'next': {
        "text": "JavaScript 基础知识",
        "link": "articles/02-ECMAScript+/01-javascript.html"
    },
    'head': React.createElement("link", { href: "/favicon.png", rel: "icon", type: "image/png" }),
    'sidebar': [
        {
            "text": "ESMAScript+ 面试宝典",
            "link": "articles/index.html",
            "pagePath": "articles/README.md"
        },
        {
            "text": "前端大事记",
            "link": "articles/es-timeline.html",
            "pagePath": "articles/es-timeline.md"
        },
        {
            "text": "职业 & 成长",
            "link": "articles/00-Profession/index.html",
            "pagePath": "articles/00-Profession/README.md"
        },
        {
            "link": "articles/01-Programming/index.html",
            "title": "编程基础",
            "children": [
                {
                    "text": "编程语言",
                    "link": "articles/01-Programming/00-language.html",
                    "pagePath": "articles/01-Programming/00-language.md"
                },
                {
                    "text": "操作系统",
                    "link": "articles/01-Programming/01-operating-system.html",
                    "pagePath": "articles/01-Programming/01-operating-system.md"
                },
                {
                    "text": "算法",
                    "link": "articles/01-Programming/02-algorithms.html",
                    "pagePath": "articles/01-Programming/02-algorithms.md"
                },
                {
                    "text": "设计模式",
                    "link": "articles/01-Programming/03-design-patterns.html",
                    "pagePath": "articles/01-Programming/03-design-patterns.md"
                },
                {
                    "text": "工程化",
                    "link": "articles/01-Programming/04-software-engineering.html",
                    "pagePath": "articles/01-Programming/04-software-engineering.md"
                },
                {
                    "text": "安全",
                    "link": "articles/01-Programming/05-network-security.html",
                    "pagePath": "articles/01-Programming/05-network-security.md"
                },
                {
                    "text": "测试",
                    "link": "articles/01-Programming/06-software-test.html",
                    "pagePath": "articles/01-Programming/06-software-test.md"
                },
                {
                    "text": "版本控制",
                    "link": "articles/01-Programming/07-version-control.html",
                    "pagePath": "articles/01-Programming/07-version-control.md"
                }
            ],
            "text": "编程基础",
            "pagePath": "articles/01-Programming/README.md"
        },
        {
            "link": "articles/02-ECMAScript+/index.html",
            "title": "ECMAScript+",
            "children": [
                {
                    "text": "ECMAScript",
                    "link": "articles/02-ECMAScript+/00-ecmascript.html",
                    "pagePath": "articles/02-ECMAScript+/00-ecmascript.md"
                },
                {
                    "text": "JavaScript 基础知识",
                    "link": "articles/02-ECMAScript+/01-javascript.html",
                    "pagePath": "articles/02-ECMAScript+/01-javascript.md"
                },
                {
                    "text": "TypeScript",
                    "link": "articles/02-ECMAScript+/02-typescript.html",
                    "pagePath": "articles/02-ECMAScript+/02-typescript.md"
                },
                {
                    "text": "JavaScript 常见实战题",
                    "link": "articles/02-ECMAScript+/03-javascript-parctice.html",
                    "pagePath": "articles/02-ECMAScript+/03-javascript-parctice.md"
                }
            ],
            "text": "ECMAScript+",
            "pagePath": "articles/02-ECMAScript+/README.md"
        },
        {
            "link": "articles/03-HTML+CSS/index.html",
            "title": "HTML + CSS",
            "children": [
                {
                    "text": "HTML",
                    "link": "articles/03-HTML+CSS/00-html.html",
                    "pagePath": "articles/03-HTML+CSS/00-html.md"
                },
                {
                    "text": "CSS",
                    "link": "articles/03-HTML+CSS/01-css-design.html",
                    "pagePath": "articles/03-HTML+CSS/01-css-design.md"
                },
                {
                    "text": "HTML + CSS 实战",
                    "link": "articles/03-HTML+CSS/02-html-css-practice.html",
                    "pagePath": "articles/03-HTML+CSS/02-html-css-practice.md"
                }
            ],
            "text": "HTML + CSS",
            "pagePath": "articles/03-HTML+CSS/README.md"
        },
        {
            "link": "articles/04-Network+API/index.html",
            "title": "网络 + 前后端协作",
            "children": [
                {
                    "text": "网络",
                    "link": "articles/04-Network+API/00-network.html",
                    "pagePath": "articles/04-Network+API/00-network.md"
                },
                {
                    "text": "前后端协作",
                    "link": "articles/04-Network+API/01-fe-be-api.html",
                    "pagePath": "articles/04-Network+API/01-fe-be-api.md"
                },
                {
                    "text": "登录",
                    "link": "articles/04-Network+API/02-login.html",
                    "pagePath": "articles/04-Network+API/02-login.md"
                }
            ],
            "text": "网络 + 前后端协作",
            "pagePath": "articles/04-Network+API/README.md"
        },
        {
            "link": "articles/05-V8+Runtime/index.html",
            "title": "V8 + JavaScript 运行时",
            "children": [
                {
                    "text": "V8",
                    "link": "articles/05-V8+Runtime/00-v8.html",
                    "pagePath": "articles/05-V8+Runtime/00-v8.md"
                },
                {
                    "text": "Node",
                    "link": "articles/05-V8+Runtime/01-node.html",
                    "pagePath": "articles/05-V8+Runtime/01-node.md"
                },
                {
                    "text": "Deno",
                    "link": "articles/05-V8+Runtime/02-deno.html",
                    "pagePath": "articles/05-V8+Runtime/02-deno.md"
                }
            ],
            "text": "V8 + JavaScript 运行时",
            "pagePath": "articles/05-V8+Runtime/README.md"
        },
        {
            "link": "articles/06-FE+Browser/index.html",
            "title": "前端应用开发 + 浏览器",
            "children": [
                {
                    "text": "浏览器",
                    "link": "articles/06-FE+Browser/00-browser.html",
                    "pagePath": "articles/06-FE+Browser/00-browser.md"
                },
                {
                    "text": "前端",
                    "link": "articles/06-FE+Browser/01-fe-framework.html",
                    "pagePath": "articles/06-FE+Browser/01-fe-framework.md"
                },
                {
                    "text": "前端工具链",
                    "link": "articles/06-FE+Browser/02-fe-tooltain.html",
                    "pagePath": "articles/06-FE+Browser/02-fe-tooltain.md"
                },
                {
                    "text": "前端打包工具",
                    "link": "articles/06-FE+Browser/03-pack-tool.html",
                    "pagePath": "articles/06-FE+Browser/03-pack-tool.md"
                },
                {
                    "text": "移动端 Web 开发",
                    "link": "articles/06-FE+Browser/04-fe-mobile.html",
                    "pagePath": "articles/06-FE+Browser/04-fe-mobile.md"
                }
            ],
            "text": "前端应用开发 + 浏览器",
            "pagePath": "articles/06-FE+Browser/README.md"
        },
        {
            "link": "articles/07-BE+Server/index.html",
            "title": "后端应用开发 + 服务器",
            "children": [
                {
                    "text": "Linux + Nginx + 数据库",
                    "link": "articles/07-BE+Server/00-linux-nginx-database.html",
                    "pagePath": "articles/07-BE+Server/00-linux-nginx-database.md"
                },
                {
                    "text": "Node 框架",
                    "link": "articles/07-BE+Server/01-node-framework.html",
                    "pagePath": "articles/07-BE+Server/01-node-framework.md"
                }
            ],
            "text": "后端应用开发 + 服务器",
            "pagePath": "articles/07-BE+Server/README.md"
        }
    ],
    config: { "root": "/", ...projectConfig, ...(_b = (_a = projectConfig.i18n) === null || _a === void 0 ? void 0 : _a.overrides) === null || _b === void 0 ? void 0 : _b['undefined'] },
    'pagePath': "articles/02-ECMAScript+/00-ecmascript.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "articles/02-ECMAScript+/00-ecmascript.html",
    'title': "ECMAScript",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>ECMAScript</h1>\n<blockquote>\n<p>重点关注标准和版本特性</p>\n</blockquote>\n<h2 id="es-%E6%A0%87%E5%87%86%E5%8F%8A%E5%85%B6%E6%B5%81%E7%A8%8B">ES 标准及其流程？<a class="anchor" href="#es-%E6%A0%87%E5%87%86%E5%8F%8A%E5%85%B6%E6%B5%81%E7%A8%8B">§</a></h2>\n<ul>\n<li>\n<p>ECMAScript 是 ECMA 制定的标准化脚本语言。</p>\n</li>\n<li>\n<p>ECMA 规范最终由 TC39 敲定。TC39 由包括浏览器厂商在内的各方组成，他们开会推动 JavaScript 提案沿着一条严格的发展道路前进。</p>\n</li>\n<li>\n<p>TC39 的新特性提案：<a href="https://github.com/tc39/proposals">https://github.com/tc39/proposals</a></p>\n</li>\n<li>\n<p>ECMAScript 新闻：<a href="https://www.ecma-international.org/news/index.html">https://www.ecma-international.org/news/index.html</a></p>\n</li>\n<li>\n<p>从提案到入选ECMA规范主要有以下几个阶段：</p>\n<ul>\n<li>Stage 0: strawman——最初想法的提交。</li>\n<li>Stage 1: proposal（提案）——由 TC39 至少一名成员倡导的正式提案文件，该文件包括 API 示例。</li>\n<li>Stage 2: draft（草案）——功能规范的初始版本，该版本包含功能规范的两个实验实现。</li>\n<li>Stage 3: candidate（候选）——提案规范通过审查并从厂商那里收集反馈。</li>\n<li>Stage 4: finished（完成）——提案准备加入ECMAScript，但是到浏览器或者Nodejs中可能需要更长的时间。</li>\n</ul>\n</li>\n</ul>\n<h2 id="%E5%85%B3%E9%94%AE%E5%AD%97%E4%B8%8E%E4%BF%9D%E7%95%99%E5%AD%97%E9%83%BD%E6%9C%89%E5%93%AA%E4%BA%9B">关键字与保留字都有哪些？<a class="anchor" href="#%E5%85%B3%E9%94%AE%E5%AD%97%E4%B8%8E%E4%BF%9D%E7%95%99%E5%AD%97%E9%83%BD%E6%9C%89%E5%93%AA%E4%BA%9B">§</a></h2>\n<ul>\n<li>null：表示尚未存在的对象，是一种特殊的 object\n<ul>\n<li>作为函数的参数，表示该函数的参数不是对象。</li>\n<li>作为对象原型链的终点。</li>\n</ul>\n</li>\n</ul>\n<p>ECMA-262 定义了 ECMAScript 支持的一套关键字和一套保留字。如果把关键字用作变量名或函数名，可能得到诸如 &quot;Identifier Expected&quot;（应该有标识符、期望标识符）这样的错误消息。其中，关键字标识了 ECMAScript 语句的开头和/或结尾，保留字在某种意思上是为将来的关键字而保留的单词，因此关键字与保留字军不能被用作变量名或函数名。</p>\n<table>\n<thead>\n<tr>\n<th>JavaScript 关键字</th>\n<th>(待做待加入 ES6+)</th>\n<th></th>\n<th></th>\n<th></th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>break</td>\n<td>case</td>\n<td>catch</td>\n<td>continue</td>\n<td>default</td>\n</tr>\n<tr>\n<td>delete</td>\n<td>do</td>\n<td>else</td>\n<td>finally</td>\n<td>for</td>\n</tr>\n<tr>\n<td>function</td>\n<td>if</td>\n<td>in</td>\n<td>instanceof</td>\n<td>new</td>\n</tr>\n<tr>\n<td>return</td>\n<td>switch</td>\n<td>this</td>\n<td>throw</td>\n<td>try</td>\n</tr>\n<tr>\n<td>typeof</td>\n<td>var</td>\n<td>void</td>\n<td>while</td>\n<td>with</td>\n</tr>\n<tr>\n<td>class(ES5)</td>\n<td>enum(ES5)</td>\n<td>export(ES5)</td>\n<td>import(ES5)</td>\n<td>super(ES5)</td>\n</tr>\n<tr>\n<td>extends(ES5)</td>\n<td></td>\n<td></td>\n<td></td>\n<td></td>\n</tr>\n</tbody>\n</table>\n<table>\n<thead>\n<tr>\n<th>JavaScript 保留字</th>\n<th>(待做待加入 ES6+)</th>\n<th></th>\n<th></th>\n<th></th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>abstract</td>\n<td>boolean</td>\n<td>byte</td>\n<td>char</td>\n<td>const</td>\n</tr>\n<tr>\n<td>debugger</td>\n<td>double</td>\n<td>final</td>\n<td>float</td>\n<td>goto</td>\n</tr>\n<tr>\n<td>implements</td>\n<td>int</td>\n<td>interface</td>\n<td>long</td>\n<td>native</td>\n</tr>\n<tr>\n<td>package</td>\n<td>private</td>\n<td>protected</td>\n<td>public</td>\n<td>short</td>\n</tr>\n<tr>\n<td>static</td>\n<td>synchronized</td>\n<td>throws</td>\n<td>transient</td>\n<td>volatile</td>\n</tr>\n</tbody>\n</table>\n<h2 id="%E6%A0%87%E8%AF%86%E7%AC%A6%E5%91%BD%E5%90%8D%E7%9A%84%E9%81%BF%E5%85%8D%E5%8E%9F%E5%88%99">标识符命名的避免原则？<a class="anchor" href="#%E6%A0%87%E8%AF%86%E7%AC%A6%E5%91%BD%E5%90%8D%E7%9A%84%E9%81%BF%E5%85%8D%E5%8E%9F%E5%88%99">§</a></h2>\n<ul>\n<li>避免使用一些 Java 对象和属性作为 JavaScript 标识符。</li>\n</ul>\n<table>\n<thead>\n<tr>\n<th>Java 关键字示例</th>\n<th></th>\n<th></th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>getClass</td>\n<td>java</td>\n<td>JavaArray</td>\n</tr>\n<tr>\n<td>javaClass</td>\n<td>JavaObject</td>\n<td>JavaPackage</td>\n</tr>\n</tbody>\n</table>\n<ul>\n<li>避免使用 HTML 和 Windows 对象属性和名称作为 JavaScript 标识符。</li>\n</ul>\n<table>\n<thead>\n<tr>\n<th>HTML、Windows 对象属性和名称</th>\n<th></th>\n<th></th>\n<th></th>\n<th></th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>alert</td>\n<td>all</td>\n<td>anchor</td>\n<td>anchors</td>\n<td>area</td>\n</tr>\n<tr>\n<td>assign</td>\n<td>blur</td>\n<td>button</td>\n<td>checkbox</td>\n<td>clearInterval</td>\n</tr>\n<tr>\n<td>clearTimeout</td>\n<td>clientInformation</td>\n<td>close</td>\n<td>closed</td>\n<td>confirm</td>\n</tr>\n<tr>\n<td>constructor</td>\n<td>crypto</td>\n<td>decodeURI</td>\n<td>decodeURIComponent</td>\n<td>defaultStatus</td>\n</tr>\n<tr>\n<td>document</td>\n<td>element</td>\n<td>elements</td>\n<td>embed</td>\n<td>embeds</td>\n</tr>\n<tr>\n<td>encodeURI</td>\n<td>encodeURIComponent</td>\n<td>escape</td>\n<td>event</td>\n<td>fileUpload</td>\n</tr>\n<tr>\n<td>focus</td>\n<td>form</td>\n<td>forms</td>\n<td>frame</td>\n<td>innerHeight</td>\n</tr>\n<tr>\n<td>innerWidth</td>\n<td>layer</td>\n<td>layers</td>\n<td>link</td>\n<td>location</td>\n</tr>\n<tr>\n<td>mimeTypes</td>\n<td>navigate</td>\n<td>navigator</td>\n<td>frames</td>\n<td>frameRate</td>\n</tr>\n<tr>\n<td>hidden</td>\n<td>history</td>\n<td>image</td>\n<td>images</td>\n<td>offscreenBuffering</td>\n</tr>\n<tr>\n<td>open</td>\n<td>opener</td>\n<td>option</td>\n<td>outerHeight</td>\n<td>outerWidth</td>\n</tr>\n<tr>\n<td>packages</td>\n<td>pageXOffset</td>\n<td>pageYOffset</td>\n<td>parent</td>\n<td>parseFloat</td>\n</tr>\n<tr>\n<td>parseInt</td>\n<td>password</td>\n<td>pkcs11</td>\n<td>plugin</td>\n<td>prompt</td>\n</tr>\n<tr>\n<td>propertyIsEnum</td>\n<td>radio</td>\n<td>reset</td>\n<td>screenX</td>\n<td>screenY</td>\n</tr>\n<tr>\n<td>scroll</td>\n<td>secure</td>\n<td>select</td>\n<td>self</td>\n<td>setInterval</td>\n</tr>\n<tr>\n<td>setTimeout</td>\n<td>status</td>\n<td>submit</td>\n<td>taint</td>\n<td>text</td>\n</tr>\n<tr>\n<td>textarea</td>\n<td>top</td>\n<td>unescape</td>\n<td>untaint</td>\n<td>window</td>\n</tr>\n</tbody>\n</table>\n<ul>\n<li>避免使用 HTML 事件句柄作为 JavaScript 标识符。</li>\n</ul>\n<table>\n<thead>\n<tr>\n<th></th>\n<th></th>\n<th></th>\n<th></th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>onblur</td>\n<td>onclick</td>\n<td>onerror</td>\n<td>onfocus</td>\n</tr>\n<tr>\n<td>onkeydown</td>\n<td>onkeypress</td>\n<td>onkeyup</td>\n<td>onmouseover</td>\n</tr>\n<tr>\n<td>onload</td>\n<td>onmouseup</td>\n<td>onmousedown</td>\n<td>onsubmit</td>\n</tr>\n</tbody>\n</table>\n<ul>\n<li>避免使用非标准 JavaScript 的关键字</li>\n</ul>\n<p>一个实例是 const 关键字，用于定义变量。一些 JavaScript 引擎把 const 当作 var 的同义词。另一些引擎则把 const 当作只读变量的定义。Const 是 JavaScript 的扩展。JavaScript 引擎支持它用在 Firefox 和 Chrome 中。但是它并不是 JavaScript 标准 ES3 或 ES5 的组成部分。建议：不要使用它。</p>\n<h2 id="%E5%9F%BA%E7%A1%80%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B%E9%83%BD%E6%9C%89%E5%93%AA%E4%BA%9B">基础数据类型都有哪些？<a class="anchor" href="#%E5%9F%BA%E7%A1%80%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B%E9%83%BD%E6%9C%89%E5%93%AA%E4%BA%9B">§</a></h2>\n<ul>\n<li>undefiend 没有定义数据类型</li>\n<li>number 数值数据类型，例如 10 或者 1 或者 5.5\n<ul>\n<li>NaN 是一种特殊的 number</li>\n</ul>\n</li>\n<li>string 字符串数据类型用来描述文本，例如 &quot;你的姓名&quot;\n<ul>\n<li>string 的内置属性和方法：</li>\n<li>构造函数 String()</li>\n</ul>\n</li>\n<li>boolean 布尔类型 true | false ，不是正就是反\n<ul>\n<li>boolean 的内置属性和方法：</li>\n<li>构造函数</li>\n</ul>\n</li>\n<li>object 对象类型，复杂的一组描述信息的集合\n<ul>\n<li>null 是一种特殊的 object</li>\n<li>object 的内置属性和方法：</li>\n<li>构造函数</li>\n<li>Object.prototype</li>\n</ul>\n</li>\n<li>function 函数类型\n<ul>\n<li>函数的内置属性和方法：</li>\n<li>构造函数</li>\n<li>Function.prototype</li>\n</ul>\n</li>\n</ul>\n<h2 id="window-%E5%85%A8%E5%B1%80%E5%86%85%E7%BD%AE%E7%9A%84%E5%B1%9E%E6%80%A7%E5%92%8C%E6%96%B9%E6%B3%95">window 全局内置的属性和方法？<a class="anchor" href="#window-%E5%85%A8%E5%B1%80%E5%86%85%E7%BD%AE%E7%9A%84%E5%B1%9E%E6%80%A7%E5%92%8C%E6%96%B9%E6%B3%95">§</a></h2>\n<h2 id="javascript-%E7%9A%84%E5%86%85%E7%BD%AE%E5%AF%B9%E8%B1%A1">JavaScript 的内置对象？<a class="anchor" href="#javascript-%E7%9A%84%E5%86%85%E7%BD%AE%E5%AF%B9%E8%B1%A1">§</a></h2>\n<p>原生对象是由 ECMAScript 规范定义的 JavaScript 内置对象，比如 String、Math、RegExp、Object、Function 等等。</p>\n<p>宿主对象是由运行时环境(浏览器或 Node 提供，比如 Window、XMLHttpRequest 等等)。</p>\n<h2 id="es-5-%E7%89%B9%E6%80%A7%E5%8F%91%E5%B1%95%E5%8F%B2">ES ~5 特性发展史？<a class="anchor" href="#es-5-%E7%89%B9%E6%80%A7%E5%8F%91%E5%B1%95%E5%8F%B2">§</a></h2>\n<h2 id="es-6-%E6%96%B0%E7%89%B9%E6%80%A7%E6%A6%82%E8%A6%81">ES 6+ 新特性概要？<a class="anchor" href="#es-6-%E6%96%B0%E7%89%B9%E6%80%A7%E6%A6%82%E8%A6%81">§</a></h2>\n<blockquote>\n<p>以下特性摘抄自博客，尚未和 ES 标准精确配对，可能会出现特性和版本不一致。</p>\n</blockquote>\n<ul>\n<li>ES6：在 ES5 发布近 6 年（2009-11 至 2015-6）之后才将其标准化。\n<ul>\n<li><strong>类</strong>：<code>class; new; instanceof; constructor;</code>。</li>\n<li><strong>模块化</strong>：<code>export; import;</code>。</li>\n<li><strong>箭头函数</strong>：箭头函数与包围它的代码共享同一个 this。<code>() =&gt; {}; fun.bind(this);</code>。</li>\n<li><strong>函数参数默认值</strong>：<code>function foo(h = 50, c = \'red\') {};</code>。</li>\n<li><strong>模板字符串</strong>：`Your name is ${first} ${last}`;。</li>\n<li><strong>解构赋值</strong>：<code>[a=5, b=7] = [1];  [a, b] = [b, a]; const { n, a } = s;</code>。</li>\n<li><strong>延展操作符</strong>：<code>[...[1, 2]]; [...obj, \'4\', ...\'hello\', 6];</code>。</li>\n<li><strong>对象属性简写</strong>：<code>student = { name };</code>。</li>\n<li><strong>Promise</strong>：异步编程串行化，避免了回调地狱。<code>new Promise((resolve, reject) =&gt; {});</code>。</li>\n<li><strong>Let 与 Const</strong>：填补块级作用域空白。</li>\n</ul>\n</li>\n<li>ES7：来说明标准化的过程\n<ul>\n<li><strong>Array.prototype.includes()</strong>：判断一个数组是否包含一个指定的值。</li>\n<li><strong>指数操作符</strong>：具有与 Math.pow(..) 相同的效果。<code>console.log(2**10);</code>。</li>\n</ul>\n</li>\n<li>ES8：\n<ul>\n<li><strong>[升级] 延展操作符</strong>：增加了对对象的支持，<code>let objClone = { ...obj }; </code>。</li>\n<li><strong>Async/Await</strong>：异步迭代器。</li>\n<li><strong>Object.values()</strong>：与 Object.keys() 类似，返回 Object 自身属性的所有值，不包括继承的值。</li>\n<li><strong>Object.entries()</strong>：返回一个给定对象自身可枚举属性的键值对的数组。<code>for(let [k,v] of Object.entries(obj)) {}</code>。</li>\n<li><strong>String padding</strong>：填充字符串达到当前长度。<code>String.prototype.padStart; String.prototype.padEnd;</code>。</li>\n<li><strong>函数参数列表结尾允许逗号</strong>：git 修改同一个函数减少不必要的行变更。</li>\n<li><strong>Object.getOwnPropertyDescriptors()</strong>：获取一个对象的所有自身属性的描述符,如果没有任何自身属性，则返回空对象。</li>\n<li><strong>ShareArrayBuffer</strong>：类似于 ArrayBuffer，表示一个通用的，固定长度的原始二进制数据缓冲区，但 SharedArrayBuffer 不能被分离。<code>new SharedArrayBuffer(length)</code>。</li>\n<li><strong>Atomics</strong>：提供了一组静态方法用来对 SharedArrayBuffer 对象进行原子操作（多线程共同读写时保证符合预期）。Atomics 的所有属性和方法都是静态的（与 Math 对象一样）。</li>\n</ul>\n</li>\n<li>ES9：\n<ul>\n<li><strong>[升级] 异步迭代器</strong>：Async/Await。<code>for await (let i of arr) {}; arr.forEach(async i =&gt; { await fun(i); }); </code>。</li>\n<li><strong>[升级] Promise.finally()</strong>：指定多个 Promise 统一执行完后最终的逻辑，不关注每一个的成功状态。</li>\n<li><strong>[升级] Rest/Spread 属性</strong>：允许我们将一个不定数量的参数表示为一个数组，只适用于每个对象的顶层而非嵌套。<code>restParam(p1, p2, ...p3)</code>。</li>\n<li><strong>正则表达式命名捕获组</strong>：<code>const reDate = /(?&lt;year&gt;[0-9]{4})-(?&lt;month&gt;[0-9]{2})-(?&lt;day&gt;[0-9]{2}); const usDate = \'2020-10-01\'.replace(reDate, \'$&lt;month&gt;-$&lt;day&gt;-$&lt;year&gt;\');</code>。</li>\n<li><strong>正则表达式反向断言</strong>：分为肯定反向断言，否定反向断言。</li>\n<li><strong>正则表达式 dotAll 模式</strong>：<code>.</code> 匹配除回车外的任何单字符，标记 <code>s</code> 改变这种行为，允许行终止符的出现。<code>/hello.world/s.test(\'hello\nworld\');</code>。</li>\n<li><strong>正则表达式 Unicode 转义</strong>：添加了 Unicode 属性转义——形式为 <code>\p{...}</code> 和 <code>\P{...}</code></li>\n<li><strong>非转义序列的模板字符串</strong>。</li>\n</ul>\n</li>\n<li><a href="https://ecma-international.org/publications/standards/Ecma-417.htm">ES10（ES 2019，ECMA-417）</a>：\n<ul>\n<li>**行分隔符（U + 2028）和段分隔符（U + 2029）**符号现在允许在字符串文字中，与 JSON 匹配。以前这些符号在字符串文字中被视为行终止符，使用它们会导致 SyntaxError 异常。</li>\n<li><strong>[升级] JSON.stringify</strong>：和 Unicode 有关。</li>\n<li><strong>Array.flat() 和 Array.flatMap()</strong>：本质上就是是归纳（reduce） 与 合并（concat）的操作。</li>\n<li><strong>String.trimStart() 和 String.trimEnd()</strong>：分别去除字符串首尾空白字符。</li>\n<li><strong>Object.fromEntries()</strong>：<code>Object.entries()</code> 返回一个给定对象自身可枚举属性的键值对数组，其排列与使用 for...in 循环遍历该对象时返回的顺序一致。<code>Object.fromEntries()</code> 则是 <code>Object.entries()</code> 的反转。可以将 Map 或 Array 转化为 Object。</li>\n<li><strong>Symbol.prototype.description</strong>：直接访问 Symbol(\'The description\') 后的内容，使用 <code>sym.description</code> 而非 <code>String(sym.desc)</code>。</li>\n<li><strong>String.prototype.matchAll</strong>：查找字符串中所有正则表达式的匹配项和它们的位置。<code>str.matchAll(regexp)</code>。</li>\n<li><strong>Function.prototype.toString()</strong>：现在返回精确字符，包括空格和注释。<code>console.log(foo.toString()); // function /* comment */ foo /* another comment */ (){}</code>。</li>\n<li><strong>修改 catch 绑定</strong>：简化 <code>try {} catch(e) {}</code> 为 <code>try {} catch {}</code>。</li>\n<li><strong>BigInt</strong>：新的基本数据类型。创建比 2^53 - 1 还大的数，typeof 值为 bigint。<code>BigInt(1); 1n</code>。</li>\n<li><strong>globalThis</strong>：统一浏览器的 window 和 node 中的 global。</li>\n</ul>\n</li>\n<li><a href="https://www.ecma-international.org/publications/standards/Ecma-262.htm">ES11（ES 2020，ECMA-262）</a>：\n<ul>\n<li><strong>Optional Chaining 可选链式调用</strong>：<code>flower.species?.lily; flowers?.[1]; plantFlowers?.()</code>。</li>\n<li><strong>Nullish Coalescing 空值合并</strong>：<code>number ?? 7</code>。</li>\n<li><strong>Private Fields 私有字段</strong>：ES6 支持类语法，ES11 才引人私有字段，符号为 <code>#</code>。</li>\n<li><strong>Static Fields 静态字段</strong>：想使用类的方法，必须先实例化一个类，除非此方法为 static。</li>\n<li><strong>Top Level Await 顶级 Await</strong>：此前在顶级 await 必须使用 IIFE，现在直接顶级使用。</li>\n<li><strong>Promise.allSettled 方法</strong>：可以不关心数组中每个的 Promise 是否成功或失败，统一处理。<code>Promise.allSettled([a, b]).then(([a, b]) =&gt; {})</code>。</li>\n<li><strong>Dynamic Import 动态引入</strong>：<code>import(\'\').then()</code>。</li>\n</ul>\n</li>\n</ul>\n<h2 id="ecmascript-%E6%A8%A1%E5%9D%97%E5%8C%96%E5%8F%91%E5%B1%95%E5%8F%B2">ECMAScript 模块化发展史<a class="anchor" href="#ecmascript-%E6%A8%A1%E5%9D%97%E5%8C%96%E5%8F%91%E5%B1%95%E5%8F%B2">§</a></h2>\n<ul>\n<li>社区解决方案 - 同步服务端 CommonJS &amp; Node.js：\n<ul>\n<li>暴露模块 - <code>module.exports</code>。</li>\n<li>暴露模块 - <code>exports</code>。</li>\n<li>加载模块 - <code>require()</code>。</li>\n</ul>\n</li>\n<li>社区解决方案 - 异步浏览器 AMD &amp; RequireJS：\n<ul>\n<li>定义：<code>define(id?, dependencies?, factory);</code>。</li>\n<li>加载：<code>require([module], callback);</code>。</li>\n</ul>\n</li>\n<li>社区解决方案 - 异步就近加载 CMD &amp; SeaJS：\n<ul>\n<li>定义：<code>define(id?, dependencies?, factory);</code>。</li>\n<li>依赖就近，用的时候再 <code>require</code>。</li>\n<li>需要使用把模块变为字符串解析一遍才知道依赖了那些模块。</li>\n</ul>\n</li>\n<li>官方解决方案 - ES6 import/export：\n<ul>\n<li>导出 - 命名式导出。</li>\n<li>导出 - 默认导出：<code>export default {};</code>。</li>\n<li>导入：对应导出的命名式导出和默认导出。<code>import $, {each, map} from \'jquery\';</code>。</li>\n</ul>\n</li>\n</ul>\n<h2 id="es-%E6%A8%A1%E5%9D%97%E5%8C%96%E7%9A%84%E5%85%B7%E4%BD%93%E7%89%B9%E6%80%A7">ES 模块化的具体特性？<a class="anchor" href="#es-%E6%A8%A1%E5%9D%97%E5%8C%96%E7%9A%84%E5%85%B7%E4%BD%93%E7%89%B9%E6%80%A7">§</a></h2>\n<ul>\n<li>import, require 有什么不同的表现形式？</li>\n<li>为什么说 ES6 的模块化是静态可分析的？-&gt; Tree Shaking</li>\n</ul>\n<pre class="language-autoit"><code class="language-autoit">Module Syntax\nModule <span class="token punctuation">:</span>\n     ModuleBody\nModuleBody <span class="token punctuation">:</span>\n     ModuleItemList\nModuleItemList <span class="token punctuation">:</span>\n     ModuleItem\n     ModuleItemList ModuleItem\nModuleItem <span class="token punctuation">:</span>\n     ImportDeclaration\n     ExportDeclaration\n     StatementListItem\n</code></pre>\n<ul>\n<li>模块化概念\n<ul>\n<li>命名空间：命名空间当前并非 JavaScript 一部分</li>\n<li>匿名函数表达式</li>\n<li>对象字面量</li>\n<li>闭包：从技术角度来讲，所有函数都是闭包</li>\n</ul>\n</li>\n<li>模块化意义\n<ul>\n<li>避免命名冲突</li>\n<li>保护代码完整性</li>\n<li>隐藏复杂性</li>\n<li>降低代码改变带来的冲击</li>\n<li>代码组织</li>\n</ul>\n</li>\n<li>模块化缺点：不能测试私有部分、拓展对象</li>\n<li>模块化编程\n<ul>\n<li>重要思想：通过模块模式来内化逻辑复杂性，并提供公有 API，这是 JavaScript 的封装实现方式</li>\n<li>模块对于 JavaScript 而言是特殊的构造函数，该类型函数通常被称为 IIFE 立即调用函数表达式</li>\n<li>模块内部返回带有公有函数的对象字面量，该对象字面量作为模块的公有 API</li>\n<li>典型模块模式：使用全局变量作为模块模式</li>\n<li>揭示模式：简化了返回的对象（API）</li>\n<li>对于 AMD/CommonJS 模块，不需要赋值给全局变量</li>\n<li>广义上，作用域指应用的某部分到相同应用另一部分的可达性</li>\n<li>坚持使用 SRP 单一职责原则设计模块</li>\n</ul>\n</li>\n<li>模块间交互方式\n<ul>\n<li>直接通过模块 API 交互\n<ul>\n<li>A 直接调用 B 的 API 与 B 交互，B 被称为 A 的依赖</li>\n<li>传统模块模式：在模块尾部括号内声明依赖，并通过参数访问列表来访问这些依赖</li>\n</ul>\n</li>\n<li>通过发布/订阅模式的事件聚合模式的方式\n<ul>\n<li>基于经典的观察者模式：observable 广播给 observer</li>\n<li>发布/订阅模式通常由一个中间服务代表另一个对象发布</li>\n<li>分为基本通知类型、带有数据的通知类型</li>\n</ul>\n</li>\n</ul>\n</li>\n<li>模块加载及依赖管理\n<ul>\n<li>将模块合并到尽可能少的文件中去</li>\n<li>异步模块 AMD\n<ul>\n<li>define 声明模块</li>\n<li>require 导入模块</li>\n</ul>\n</li>\n<li>RequireJS 基础知识\n<ul>\n<li>data-main 入口</li>\n<li>requirejs.config()</li>\n<li>baseURL</li>\n<li>path</li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>\n<h2 id="%E4%BB%80%E4%B9%88%E6%98%AF%E6%A8%A1%E5%9D%97%E6%A8%A1%E5%BC%8F">什么是模块模式<a class="anchor" href="#%E4%BB%80%E4%B9%88%E6%98%AF%E6%A8%A1%E5%9D%97%E6%A8%A1%E5%BC%8F">§</a></h2>\n<ul>\n<li>在模块内部功能与公开功能之间划定了清晰界限</li>\n<li>可访问性控制</li>\n<li>创建公有 API\n<ul>\n<li>返回对象字面量</li>\n<li>让函数立即返回</li>\n<li>闭包构造</li>\n</ul>\n</li>\n<li>允许全局导入\n<ul>\n<li>使得代码易读</li>\n<li>加速解释器的变量解释过程</li>\n</ul>\n</li>\n<li>优良特性\n<ul>\n<li>用模块封装内部代码，避免变量及函数污染全局命名空间</li>\n<li>创建应用编程接口，提供对内部功能的访问控制</li>\n</ul>\n</li>\n<li>创建模块的命名空间</li>\n</ul>\n<pre class="language-autoit"><code class="language-autoit"><span class="token operator">/</span><span class="token operator">/</span> 创建模块的命名空间\nvar moduleName <span class="token operator">=</span> <span class="token punctuation">(</span>function <span class="token punctuation">(</span><span class="token punctuation">)</span> {\n    var someVar<span class="token comment">;</span>\n    <span class="token operator">/</span><span class="token operator">/</span> 整体闭包构造\n    function someFunction <span class="token punctuation">(</span><span class="token punctuation">)</span> {\n    }\n    return {\n        <span class="token operator">/</span><span class="token operator">/</span> 返回 对象字面量\n        someFunction<span class="token punctuation">:</span> someFunction\n    }\n}<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment">; // IIFE</span>\n</code></pre>\n<h2 id="this-%E4%B8%8E%E7%AE%AD%E5%A4%B4%E5%87%BD%E6%95%B0%E7%9A%84%E8%A7%84%E5%88%99%E5%92%8C%E7%89%B9%E7%82%B9">this 与箭头函数的规则和特点？<a class="anchor" href="#this-%E4%B8%8E%E7%AE%AD%E5%A4%B4%E5%87%BD%E6%95%B0%E7%9A%84%E8%A7%84%E5%88%99%E5%92%8C%E7%89%B9%E7%82%B9">§</a></h2>\n<ul>\n<li>this 有四种绑定：和调用位置有关，和定义位置无关\n<ul>\n<li>默认绑定：在非严格模式下，this 就是全局对象，否则是 undefined。<code>foo()</code>。</li>\n<li>隐式绑定：<code>o.foo()</code>。</li>\n<li>显示绑定：如果 foo 是通过 call、apply 或者 bind 调用的，那么这种调用就是显式绑定。<code>foo.call(obj)</code>。</li>\n<li>new 关键字绑定：构造函数中。</li>\n</ul>\n</li>\n<li>箭头函数的特点：和定义位置有关，和调用位置无关\n<ul>\n<li>无视 this 的四种绑定规则。</li>\n<li>this 的值就是函数创建时候所在的 lexical scope 中的 this，而和调用方式无关。</li>\n</ul>\n</li>\n<li>绑定规则优先级：箭头函数 &gt; 关键字 new 调用 &gt; 显式绑定 &gt; 隐式绑定 &gt; 默认绑定</li>\n</ul>\n<p>this 是 JavaScript 语言的一个关键字，函数调用的方式决定了 this 的值，this 取值符合以下标准：</p>\n<ul>\n<li>在调用函数时使用 new 关键字，函数内的 this 是一个全新的对象。</li>\n<li>如果 apply、call 或 bind 方法用于调用、创建一个函数，函数内的 this 就是作为参数传入这些方法的对象。</li>\n<li>当函数作为对象里的方法被调用时，函数内的 this 时调用该函数的对象。比如当 obj.method() 被调用时，函数内的 this 将绑定到 obj 对象。</li>\n<li>如果调用函数不符合上述规则，那么 this 的值指向全局对象。浏览器环境下 this 的值指向 window 对象，但是在严格模式下(\'use strict\')，this 的值为 undefined。</li>\n<li>如果符合上述多个规则，则较高的规则(1 号最高，4 号最低)将决定 this 的值。</li>\n<li>如果该函数是 ES2015 中的箭头函数，将忽略上面的所有规则，this 被设置为它被创建时的上下文。</li>\n</ul>\n<h2 id="varletconst-%E7%9A%84%E5%8F%98%E9%87%8F%E6%8F%90%E5%8D%87%E5%92%8C%E5%9D%97%E7%BA%A7%E4%BD%9C%E7%94%A8%E5%9F%9F">var/let/const 的变量提升和块级作用域？<a class="anchor" href="#varletconst-%E7%9A%84%E5%8F%98%E9%87%8F%E6%8F%90%E5%8D%87%E5%92%8C%E5%9D%97%E7%BA%A7%E4%BD%9C%E7%94%A8%E5%9F%9F">§</a></h2>\n<ul>\n<li>编译器预编译的时候，第一步只会记录变量和函数的定义，第二步才会执行程序。\n<ul>\n<li>所有这些函数和变量声明都被添加到名为词法环境的 JavaScript 数据结构内的内存中。</li>\n</ul>\n</li>\n<li>var 会变量提升，初始值为 undefined</li>\n<li>let 和 const 相比 var\n<ul>\n<li>都会被提升，但是不会被初始化，不能被引用</li>\n<li>只在块级作用域中有效</li>\n<li>不允许重复声明</li>\n<li>不会绑定全局作用域</li>\n</ul>\n</li>\n<li>let 和 const 区别\n<ul>\n<li>const 定义的指针不能修改，但是指向的对象属性可以修改</li>\n</ul>\n</li>\n</ul>\n<h2 id="fetch-api-%E7%9A%84%E5%8E%9F%E7%90%86">Fetch API 的原理<a class="anchor" href="#fetch-api-%E7%9A%84%E5%8E%9F%E7%90%86">§</a></h2>\n<h2 id="%E9%97%AD%E5%8C%85">闭包<a class="anchor" href="#%E9%97%AD%E5%8C%85">§</a></h2>\n<ul>\n<li>特点：\n<ul>\n<li>用来包装私有变量</li>\n<li>形成一个不销毁的栈环境</li>\n<li>匿名函数可以访问父级作用域的变量</li>\n</ul>\n</li>\n<li>缺点：\n<ul>\n<li>容易内存泄漏</li>\n</ul>\n</li>\n<li>场景\n<ul>\n<li>内部计数器</li>\n</ul>\n</li>\n</ul>\n<h2 id="javascript-%E5%86%85%E5%AD%98%E6%B3%84%E6%BC%8F">JavaScript 内存泄漏<a class="anchor" href="#javascript-%E5%86%85%E5%AD%98%E6%B3%84%E6%BC%8F">§</a></h2>\n<ul>\n<li>内存泄漏是反应迟缓、崩溃、高延迟等诸多问题的渊源</li>\n<li>JavaScript 的垃圾回收机制通过周期性地检查先前分配的内存是否可达，帮助开发者管理内存。</li>\n<li>常见的 JavaScript 内存泄漏：\n<ul>\n<li>意外的全局变量</li>\n<li>被遗忘的计时器或回调函数</li>\n<li>脱离 DOM 的引用</li>\n<li>闭包</li>\n</ul>\n</li>\n<li>两种内存泄漏：周期性的内存增长导致的泄漏，以及偶现的内存泄漏</li>\n</ul>\n<h2 id="%E4%BD%9C%E7%94%A8%E5%9F%9F%E9%93%BE%E6%98%AF%E4%BB%80%E4%B9%88">作用域链是什么？<a class="anchor" href="#%E4%BD%9C%E7%94%A8%E5%9F%9F%E9%93%BE%E6%98%AF%E4%BB%80%E4%B9%88">§</a></h2>\n<h2 id="settimeout-%E5%92%8C-setinterval-%E5%8E%9F%E7%90%86">setTimeOut 和 setInterval 原理？<a class="anchor" href="#settimeout-%E5%92%8C-setinterval-%E5%8E%9F%E7%90%86">§</a></h2>\n<h2 id="es5-use-strict-%E6%9C%89%E4%BB%80%E4%B9%88%E7%94%A8">[ES5] \'use strict\' 有什么用？<a class="anchor" href="#es5-use-strict-%E6%9C%89%E4%BB%80%E4%B9%88%E7%94%A8">§</a></h2>\n<p>\'use strict\' 是用于对整个脚本或单个函数启用严格模式的语句。严格模式是可选择的一个限制 JavaScript 的变体的一种方式。</p>\n<p>优点：</p>\n<ul>\n<li>无法再意外创建全局变量。</li>\n<li>会引起静默失效(即不报错也没有任何效果)的赋值抛出异常。</li>\n<li>试图删除不可删除的属性时会抛出异常(之前的操作不会产生任何效果)。</li>\n<li>要求函数的参数名唯一。</li>\n<li>全局作用域下，this 的值为 undefined。</li>\n<li>捕获了一些常见的编码错误，并抛出异常。</li>\n<li>禁用令人困惑或欠佳的功能。</li>\n</ul>\n<p>缺点：</p>\n<ul>\n<li>缺失许多开发人员已经习惯的功能。</li>\n<li>无法访问 function.caller 和 function.arguments。</li>\n<li>以不同严格模式编写的脚本合并后可能导致问题。</li>\n</ul>\n<h2 id="constructor-%E4%B8%8E-instanceof-%E7%9A%84%E5%8C%BA%E5%88%AB">constructor 与 instanceof 的区别？<a class="anchor" href="#constructor-%E4%B8%8E-instanceof-%E7%9A%84%E5%8C%BA%E5%88%AB">§</a></h2>\n<p>只要一个对象 a 的内部 prototype 属性或者它的原型链上的任意对象与 b.prototype 是同一个对象,那么 a instanceof b 就返回true。</p>\n<pre class="language-javascript"><code class="language-javascript"><span class="token known-class-name class-name">Array</span> <span class="token keyword">instanceof</span> <span class="token class-name">Object</span> <span class="token comment">// true</span>\n<span class="token known-class-name class-name">Object</span> <span class="token keyword">instanceof</span> <span class="token class-name">Object</span> <span class="token comment">// true</span>\n<span class="token known-class-name class-name">Array</span> <span class="token keyword">instanceof</span> <span class="token class-name">Array</span> <span class="token comment">// false</span>\n<span class="token keyword null nil">null</span> <span class="token keyword">instanceof</span> <span class="token class-name">Object</span> <span class="token comment">// false</span>\n<span class="token number">NaN</span> <span class="token keyword">instanceof</span> <span class="token class-name">Number</span> <span class="token comment">// false</span>\n<span class="token string">\'str\'</span> <span class="token keyword">instanceof</span> <span class="token class-name">String</span> <span class="token comment">// false</span>\n<span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token string">\'str\'</span><span class="token punctuation">)</span> <span class="token keyword">instanceof</span> <span class="token class-name">String</span> <span class="token comment">// true</span>\n</code></pre>\n<h2 id="%E5%AF%B9%E8%B1%A1%E5%AD%97%E9%9D%A2%E9%87%8F-vs-%E6%9E%84%E9%80%A0%E5%87%BD%E6%95%B0%E5%88%9B%E5%BB%BA%E5%AF%B9%E8%B1%A1%E7%9A%84%E5%AF%B9%E6%AF%94">对象字面量 vs 构造函数创建对象的对比？<a class="anchor" href="#%E5%AF%B9%E8%B1%A1%E5%AD%97%E9%9D%A2%E9%87%8F-vs-%E6%9E%84%E9%80%A0%E5%87%BD%E6%95%B0%E5%88%9B%E5%BB%BA%E5%AF%B9%E8%B1%A1%E7%9A%84%E5%AF%B9%E6%AF%94">§</a></h2>\n<blockquote>\n<p>在 JavaScript 中，我们可以通过 new 关键字、Object.create() 函数创建一个对象，或者使用字面量记法(也称对象初始化器材——object initializer)。字面量记法使用花括号定义对象，对象的 Property 与值以名称 - 值对的方式组织，用冒号分隔。我们还需要在每个名称 - 值对的最后加上逗号(除了最后一个名称 - 值对)。值可以包含变量、函数，或者其他对象。</p>\n<p>—— 《 SPA 设计与架构 》</p>\n</blockquote>\n<p>字面量的优势：</p>\n<ul>\n<li>它的代码量更少，更易读；</li>\n<li>它可以强调对象就是一个简单的可变的散列表，而不必一定派生自某个类；</li>\n<li>对象字面量运行速度更快，因为它们可以在解析的时候被优化：它们不需要&quot;作用域解析(scope resolution)&quot;；因为存在我们创建了一个同名的构造函数 Object() 的可能，当我们调用 Object() 的时候，解析器需要顺着作用域链从当前作用域开始查找，如果在当前作用域找到了名为Object()的函数就执行，如果没找到，就继续顺着作用域链往上照，直到找到全局 Object() 构造函数为止</li>\n<li>Object() 构造函数可以接收参数，通过这个参数可以把对象实例的创建过程委托给另一个内置构造函数，并返回另外一个对象实例，而这往往不是你想要的。</li>\n</ul>\n<h2 id="%E4%BB%80%E4%B9%88%E6%98%AF-javascript-%E9%AB%98%E9%98%B6%E5%87%BD%E6%95%B0">什么是 JavaScript 高阶函数？<a class="anchor" href="#%E4%BB%80%E4%B9%88%E6%98%AF-javascript-%E9%AB%98%E9%98%B6%E5%87%BD%E6%95%B0">§</a></h2>\n<p>高阶函数是将一个或多个函数作为参数的函数，它用于数据处理，也可能将函数作为返回结果。高阶函数是为了抽象一些重复执行的操作。如 map、forEach、filter、reduce 等。</p>\n<p><code>.apply()、.bind()、.call()</code></p>\n<p>.apply() 和 .call() 都用于调用函数，第一个参数将用作函数内 this 的值。然而 .call 接受逗号分隔的参数作为后面的参数，而 .apply 接受一个参数数组作为后面的参数。</p>\n<pre class="language-autoit"><code class="language-autoit">function add <span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span> {\n    return a <span class="token operator">+</span> b<span class="token comment">;</span>\n}\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>add<span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">/</span><span class="token operator">/</span> <span class="token number">3</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>add<span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">/</span><span class="token operator">/</span> <span class="token number">3</span>\n</code></pre>\n<p>.bind() 方法创建一个新的函数，当被调用时，将其 this 关键字设置为提供的值，在调用新函数时，在任何提供之前提供一个给定的参数序列。这种将 this 的值绑定到想要传递给其他函数的类的方法中是非常有用的。</p>\n<h2 id="%E7%BB%86%E8%AF%B4-javascript-%E5%8E%9F%E5%9E%8B%E9%93%BE">细说 JavaScript 原型链？<a class="anchor" href="#%E7%BB%86%E8%AF%B4-javascript-%E5%8E%9F%E5%9E%8B%E9%93%BE">§</a></h2>\n<p>所有 JavaScript 对象都有一个 prototype 属性，指向它的原型对象。当试图访问一个对象的属性时，如果没有在该对象上找到，它还会搜寻该对象的原型，以及该对象的原型的原型，依次层层向上搜索，直到找到一个名字匹配的属性或到达原型链的末尾。这种行为是在模拟经典的继承，与其说是继承，不如说是委托。</p>\n<ul>\n<li>每个对象都有 <code>__proto__</code> 属性。</li>\n<li>函数有 <code>prototype</code>，定义在 ES 规范里。</li>\n<li>实例继承构造函数 prototype 的所有属性和方法\n<ul>\n<li>实例的 <code>__proto__</code> 指向构造函数的 prototype</li>\n<li>对象具有属性 <code>__proto__</code>，可称为隐式原型，一个对象的隐式原型指向构造该对象的构造函数的原型，这也保证了实例能够访问在构造函数原型中定义的属性和方法。</li>\n</ul>\n</li>\n<li>几乎所有的 JavaScript 对象都是 Object 的实例。\n<ul>\n<li>一个典型的对象继承了 Object.prototype 的属性（包括方法），尽管这些属性可能被遮蔽（也被称为覆盖）。</li>\n<li>但是有时候可能故意创建不具有典型原型链继承的对象，比如通过 Object.create(null) 创建的对象，或者通过 Object.setPrototypeOf 方法改变原型链。</li>\n<li>改变 Object 原型，会通过原型链，而改变所有对象；除非这些属性和方法被其他对原型链更里层的改动所覆盖。这提供了一个非常强大的、但有潜在危险的机制，来覆盖或扩展对象行为。</li>\n</ul>\n</li>\n<li>所有的构造器的 constructor 都指向 Function</li>\n<li>Function 的 prototype 指向一个特殊匿名函数，而这个特殊匿名函数的 <code>__proto__</code> 指向Object.prototype</li>\n</ul>\n<pre class="language-javascript"><code class="language-javascript"><span class="token known-class-name class-name">Function</span> <span class="token keyword">instanceof</span> <span class="token class-name">Object</span><span class="token punctuation">;</span> <span class="token comment">// true</span>\n<span class="token known-class-name class-name">Object</span> <span class="token keyword">instanceof</span> <span class="token class-name">Function</span><span class="token punctuation">;</span> <span class="token comment">// true</span>\n\n<span class="token comment">//①构造器Function的构造器是它自身</span>\n<span class="token class-name">Function</span><span class="token punctuation">.</span><span class="token property-access">constructor</span><span class="token operator">===</span> <span class="token known-class-name class-name">Function</span><span class="token punctuation">;</span><span class="token comment">//true</span>\n<span class="token comment">//②构造器Object的构造器是Function（由此可知所有构造器的constructor都指向Function）</span>\n<span class="token class-name">Object</span><span class="token punctuation">.</span><span class="token property-access">constructor</span> <span class="token operator">===</span> <span class="token known-class-name class-name">Function</span><span class="token punctuation">;</span><span class="token comment">//true</span>\n<span class="token comment">//③构造器Function的__proto__是一个特殊的匿名函数function() {}</span>\n<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token known-class-name class-name">Function</span><span class="token punctuation">.</span><span class="token property-access">__proto__</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//function() {}</span>\n<span class="token comment">//④这个特殊的匿名函数的__proto__指向Object的prototype原型。</span>\n<span class="token known-class-name class-name">Function</span><span class="token punctuation">.</span><span class="token property-access">__proto__</span><span class="token punctuation">.</span><span class="token property-access">__proto__</span> <span class="token operator">===</span> <span class="token class-name">Object</span><span class="token punctuation">.</span><span class="token property-access">prototype</span><span class="token comment">//true</span>\n<span class="token comment">//⑤Object的__proto__指向Function的prototype，也就是上面③中所述的特殊匿名函数</span>\n<span class="token known-class-name class-name">Object</span><span class="token punctuation">.</span><span class="token property-access">__proto__</span> <span class="token operator">===</span> <span class="token class-name">Function</span><span class="token punctuation">.</span><span class="token property-access">prototype</span><span class="token punctuation">;</span><span class="token comment">//true</span>\n<span class="token class-name">Function</span><span class="token punctuation">.</span><span class="token property-access">prototype</span> <span class="token operator">===</span> <span class="token known-class-name class-name">Function</span><span class="token punctuation">.</span><span class="token property-access">__proto__</span><span class="token punctuation">;</span><span class="token comment">//true</span>\n</code></pre>\n<h2 id="javascript-%E6%9F%AF%E9%87%8C%E5%8C%96%E6%98%AF%E4%BB%80%E4%B9%88">JavaScript 柯里化是什么？<a class="anchor" href="#javascript-%E6%9F%AF%E9%87%8C%E5%8C%96%E6%98%AF%E4%BB%80%E4%B9%88">§</a></h2>\n<p>柯里化，currying，是一种模式，其中具有多个参数的函数被分解为多个函数，当被串联调用时，将一次一个地累积所有需要的参数。这种技术帮助编写函数式风格的代码，使代码更易读、紧凑。值得注意的是，对于需要被 curry 的函数，它需要从一个函数开始，然后分解成一系列函数，每个函数都需要一个参数。</p>'
        } }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'toc': React.createElement("aside", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#es-%E6%A0%87%E5%87%86%E5%8F%8A%E5%85%B6%E6%B5%81%E7%A8%8B">ES 标准及其流程？</a></li><li><a href="#%E5%85%B3%E9%94%AE%E5%AD%97%E4%B8%8E%E4%BF%9D%E7%95%99%E5%AD%97%E9%83%BD%E6%9C%89%E5%93%AA%E4%BA%9B">关键字与保留字都有哪些？</a></li><li><a href="#%E6%A0%87%E8%AF%86%E7%AC%A6%E5%91%BD%E5%90%8D%E7%9A%84%E9%81%BF%E5%85%8D%E5%8E%9F%E5%88%99">标识符命名的避免原则？</a></li><li><a href="#%E5%9F%BA%E7%A1%80%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B%E9%83%BD%E6%9C%89%E5%93%AA%E4%BA%9B">基础数据类型都有哪些？</a></li><li><a href="#window-%E5%85%A8%E5%B1%80%E5%86%85%E7%BD%AE%E7%9A%84%E5%B1%9E%E6%80%A7%E5%92%8C%E6%96%B9%E6%B3%95">window 全局内置的属性和方法？</a></li><li><a href="#javascript-%E7%9A%84%E5%86%85%E7%BD%AE%E5%AF%B9%E8%B1%A1">JavaScript 的内置对象？</a></li><li><a href="#es-5-%E7%89%B9%E6%80%A7%E5%8F%91%E5%B1%95%E5%8F%B2">ES ~5 特性发展史？</a></li><li><a href="#es-6-%E6%96%B0%E7%89%B9%E6%80%A7%E6%A6%82%E8%A6%81">ES 6+ 新特性概要？</a></li><li><a href="#ecmascript-%E6%A8%A1%E5%9D%97%E5%8C%96%E5%8F%91%E5%B1%95%E5%8F%B2">ECMAScript 模块化发展史</a></li><li><a href="#es-%E6%A8%A1%E5%9D%97%E5%8C%96%E7%9A%84%E5%85%B7%E4%BD%93%E7%89%B9%E6%80%A7">ES 模块化的具体特性？</a></li><li><a href="#%E4%BB%80%E4%B9%88%E6%98%AF%E6%A8%A1%E5%9D%97%E6%A8%A1%E5%BC%8F">什么是模块模式</a></li><li><a href="#this-%E4%B8%8E%E7%AE%AD%E5%A4%B4%E5%87%BD%E6%95%B0%E7%9A%84%E8%A7%84%E5%88%99%E5%92%8C%E7%89%B9%E7%82%B9">this 与箭头函数的规则和特点？</a></li><li><a href="#varletconst-%E7%9A%84%E5%8F%98%E9%87%8F%E6%8F%90%E5%8D%87%E5%92%8C%E5%9D%97%E7%BA%A7%E4%BD%9C%E7%94%A8%E5%9F%9F">var/let/const 的变量提升和块级作用域？</a></li><li><a href="#fetch-api-%E7%9A%84%E5%8E%9F%E7%90%86">Fetch API 的原理</a></li><li><a href="#%E9%97%AD%E5%8C%85">闭包</a></li><li><a href="#javascript-%E5%86%85%E5%AD%98%E6%B3%84%E6%BC%8F">JavaScript 内存泄漏</a></li><li><a href="#%E4%BD%9C%E7%94%A8%E5%9F%9F%E9%93%BE%E6%98%AF%E4%BB%80%E4%B9%88">作用域链是什么？</a></li><li><a href="#settimeout-%E5%92%8C-setinterval-%E5%8E%9F%E7%90%86">setTimeOut 和 setInterval 原理？</a></li><li><a href="#es5-use-strict-%E6%9C%89%E4%BB%80%E4%B9%88%E7%94%A8">[ES5] &#39;use strict&#39; 有什么用？</a></li><li><a href="#constructor-%E4%B8%8E-instanceof-%E7%9A%84%E5%8C%BA%E5%88%AB">constructor 与 instanceof 的区别？</a></li><li><a href="#%E5%AF%B9%E8%B1%A1%E5%AD%97%E9%9D%A2%E9%87%8F-vs-%E6%9E%84%E9%80%A0%E5%87%BD%E6%95%B0%E5%88%9B%E5%BB%BA%E5%AF%B9%E8%B1%A1%E7%9A%84%E5%AF%B9%E6%AF%94">对象字面量 vs 构造函数创建对象的对比？</a></li><li><a href="#%E4%BB%80%E4%B9%88%E6%98%AF-javascript-%E9%AB%98%E9%98%B6%E5%87%BD%E6%95%B0">什么是 JavaScript 高阶函数？</a></li><li><a href="#%E7%BB%86%E8%AF%B4-javascript-%E5%8E%9F%E5%9E%8B%E9%93%BE">细说 JavaScript 原型链？</a></li><li><a href="#javascript-%E6%9F%AF%E9%87%8C%E5%8C%96%E6%98%AF%E4%BB%80%E4%B9%88">JavaScript 柯里化是什么？</a></li></ol></nav>'
        } })
};
