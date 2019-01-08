<template>
    <div class="lt-help">
        <div v-if="type == 11">
            <h3>简介</h3>
            <p>欢迎阅读主题开发文档，我们将循序渐进地与你交流主题开发相关的内容</p>
            <h4>主题是什么</h4>
            <p>同一个基于蓝途速搭建设的网站，可以安装多种不同的样式（也可以理解为皮肤），我们称之为主题。</p>
            <h3 id="-"><a name="主题开发能做什么？" href="#主题开发能做什么？" class="anchor"></a>主题开发能做什么？</h3>
            <p>我们认为每一个品牌、团体或个人，都会有自己独特的标识、配色甚至风格。所以蓝途速搭在产品设计之初，就为支持多变灵活的网页，做了充分的考虑。</p>
            <p>通过主题开发，我们就可以完整的实现用户期待的网站视觉与效果。</p>
            <h3 id="-"><a name="主题固定的内容和样式可以修改吗？" href="#主题固定的内容和样式可以修改吗？" class="anchor"></a>主题固定的内容和样式可以修改吗？</h3>
            <p>主题市场中提供了几十套精美主题可以选择，每套主题也对应有主题设置来做配色与样式的微调。但是预先设计的样式与设置，总是无法覆盖用户的所有调整要求。</p>
            <p>别担心，这些情况我们都有应对方案。你可以：</p>
            <ul>
                <li>修改主题的任意部分的文字、配色、布局，甚至是交互流程。<a href="#">如何修改主题？</a></li>
                <li>按照用户需求，重新开发主题代码，100%还原设计稿的细节。<a href="#">如何制作主题？</a></li>
            </ul>
            <h3 id="-"><a name="主题市场可以销售我的作品吗？" href="#主题市场可以销售我的作品吗？" class="anchor"></a>主题市场可以销售我的作品吗？</h3>
            <p>我们欢迎设计师和开发人员充分发挥他们的才能，制作用户喜爱的主题，提交至主题市场进行销售。在展现自己才华的同时，得到相应的报酬。<a href="https://docs.lantusuda.com/development/56d6b1ef0abc3e7f20000066">如何销售主题？</a></p>
        </div>
        <div v-else-if="type == 12">
            <div class="docs-cont docmain-detail-cont">
                <div>
                    <h1>Hello World</h1>
                    <div class="docs-cont-inner">
                    <p>主题开发最简单的过程，就是完成如下的 Hello World 例子：</p>
                    <ol>
                    <li>复制主题</li>
                    <li>代码编辑</li>
                    <li>预览/检查</li>
                    <li>应用主题</li>
                    </ol>
                    <hr>
                    <h3 id="1-"><a name="1、复制主题" href="#1、复制主题" class="anchor"></a>1、复制主题</h3>
                    <p>进入主题风格，在 <em>应用中的通用主题</em> 选择 <em>高级</em> 菜单，点击 <em>复制</em>。</p>
                    <p><img src="https://asset.ibanquan.com/image/598aff0c02282e24c7000002/s.png" alt="#复制主题"></p>
                    <p>为复制的主题起一个容易辨识的名称，点击 <em>确定</em>。</p>
                    <p><img src="https://asset.ibanquan.com/image/56e787e40abc3e7f20000386/s.png" alt="#重命名"></p>
                    <h3 id="2-"><a name="2、代码编辑" href="#2、代码编辑" class="anchor"></a>2、代码编辑</h3>
                    <p>找到复制后的主题，点击 <em>代码编辑</em>。</p>
                    <p><img src="https://asset.ibanquan.com/image/56e787fd0abc3e7f20000389/s.png" alt="#代码编辑"></p>
                    <p>了解代码编辑可能带来的风险，并点击 <em>开始编辑</em>。如果已经编辑过的主题，则不会重复出现此提示。</p>
                    <p><img src="https://asset.ibanquan.com/image/56e7880a0abc3e7f2000038c/s.png" alt="#开始编辑"></p>
                    <p>点击打开 <em>index.html</em> 文件，并点击 <em>自定义</em> 。</p>
                    <p><img src="https://asset.ibanquan.com/image/56e78c590abc3e7f2000039c/s.png" alt="#自定义"></p>
                    <p>删除原有代码，并修改为 Hello World。点击 <em>保存</em>。</p>
                    <p><img src="https://asset.ibanquan.com/image/56e78cbf0abc3e7f2000039f/s.png" alt="#保存代码"></p>
                    <p>至此，我们已经完成代码编辑了。</p>
                    <p>不过，我们还需要进行仔细的检查，确保顾客看到无误的内容。</p>
                    <h3 id="3-"><a name="3、预览/检查" href="#3、预览/检查" class="anchor"></a>3、预览/检查</h3>
                    <p>返回主题风格，点击缩略图进行预览。</p>
                    <p><img src="https://asset.ibanquan.com/image/56e78b980abc3e7f20000399/s.png" alt="#预览"></p>
                    <p>检查没有问题，Hello World 已经成功显示。可以上线。</p>
                    <p><img src="https://asset.ibanquan.com/image/56e78da70abc3e7f200003a3/s.png" alt="#完成"></p>
                    <h3 id="4-"><a name="4、应用主题" href="#4、应用主题" class="anchor"></a>4、应用主题</h3>
                    <p>返回主题风格，点击 <em>应用主题</em>。选择 <em>设为通用主题</em>。</p>
                    <p><img src="https://asset.ibanquan.com/image/56e7900c0abc3e7f200003ab/s.png" alt="#应用主题"></p>
                    <p>现在，顾客访问你的网站首页，就可以查看到本次修改。</p>
                    <p>至此我们完成了 Hello World 例子。</p>
                    <hr>
                    <h3 id="-b-b-"><a name="提示：" href="#提示：" class="anchor"></a><b>提示：</b></h3>
                    <ul>
                    <li>在复制的主题上进行修改。可以避免修改或测试期间，影响在线的顾客的使用。</li>
                    <li>修改主题务必进行细致的样式检查与必要的流程检查，确保当次修改不影响顾客下单等核心功能。</li>
                    </ul>
                    </div> 
                </div>
            </div>
        </div>
        <div v-else-if="type == 13">
            <div>
                <h1>需要具备的知识</h1>
                <div class="docs-cont-inner">
                <p>在 Hello World 例子中，我们仅仅展示了在蓝途速搭的后台，如何进行主题开发的相关操作。</p>
                <p>如果你即将进行更深入的开发，还需要以下的知识。</p>
                <p>优化页面样式，需要了解：</p>
                <ul>
                <li><a href="http://www.w3school.com.cn/html/" target="_blank">HTML</a></li>
                <li><a href="http://www.w3school.com.cn/CSS/" target="_blank">CSS</a></li>
                <li><a href="https://docs.lantusuda.com/development/54801fe4e2931e4361000004" target="_blank">主题文件结构</a></li>
                </ul>
                <p>调整动态内容，需要了解：</p>
                <ul>
                <li><a href="https://docs.lantusuda.com/development/542144cee2931e3498000003" target="_blank">Liquid 模板引擎</a></li>
                <li><a href="https://docs.lantusuda.com/development/5425074871ea1e78fe000002" target="_blank">蓝途速搭主题对象</a></li>
                </ul>
                <p>修改交互逻辑，需要了解:</p>
                <ul>
                <li><a href="http://www.w3school.com.cn/js/" target="_blank">javascript</a></li>
                <li><a href="http://api.jquery.com/" target="_blank">jQuery</a></li>
                </ul>
                <p>我们还提供了基于 AJAX API 的网页开发工具包。让你自由灵活地开发主题，为用户提供最佳体验。</p>
                <ul>
                <li><a href="https://docs.lantusuda.com/development/5549db0b0abc3e40af000013" target="_blank">JS SDK</a></li>
                </ul>
                <p><b>蓝途速搭的文档支持全文搜索，开发过程中的任何疑问，都可以方便进行查找。</b></p>
                </div>
            </div>
        </div>
        <div v-else-if="type == 21">
            <div>
<h1>简介</h1>
<div class="docs-cont-inner">
<p>主题市场提供了各种风格的主题给用户选用。在主题预制的内容和主题设置之外的调整，就需要通过修改主题来实现。</p>
<p>修改主题前，建议先阅读<a href="/development/s/56d6b1720abc3e7f2000005a">修改须知</a>。</p>
<p>如同 Hello World 例子。蓝途速搭的网站后台，提供了在线的编辑器，方便开发者直接在线查看目录结构、修改代码、上传前端资源。</p>
<p><img src="https://asset.ibanquan.com/image/598b005302282e24c7000007/s.png" alt="#编辑界面"></p>
<p>修改主题需要了解<a href="https://docs.lantusuda.com/development/s/56d6b1240abc3e7f20000051">需要具备的知识</a>，还需要了解蓝途速搭的一些机制。</p>
<ol>
<li><p>主题版本<br>
蓝途速搭官方与第三方的主题，都会依据功能的更新、已知 BUG 的修复，持续的进行版本升级。<br>每一次更新的日期与内容，都可以从主题市场里查看。例如：<a href="https://themes.lantusuda.com/changelog/329" target="_blank">主题《深支子》的更新日志</a>。<br>
用户主题升级需要手动触发，触发的时候会提示最新一次的更新内容。</p>
</li>
<li><p>主题的高级操作<br></p>
<ul>
<li>还原：在更新主题的时候，系统会自动为当前版本主题创建一个备份。如果当次升级有问题，可以通过“还原”功能，回滚到更新前的状态。</li>
<li>定制：每套从市场安装的主题，在其拥有新版本时，都会收到通知。“定制”功能可以让当前主题成为一套独立的主题，不再收到主题版本更新通知。</li>
<li>属性：可以查看主题相关的属性，包括“基础主题”（当前主题是基于什么主题进行修改）、当前版本、修改时间等。</li>
</ul>
</li>
<li><p>主题文件与自定义<br>
从市场安装的主题，其中包含的文件，在修改时，都需要点击“自定义”按钮，来表示此文件已经被修改。
<img src="https://asset.ibanquan.com/image/56eab8050abc3e0522000028/s.png" alt="#自定义">
为了保证开发者的修改优先并且不会被覆盖。在后续的更新主题操作中，此自定义文件将不会收到更新。
<img src="https://asset.ibanquan.com/image/56eabbe00abc3e0522000033/s.png" alt="#修改记录">
自定义过的文件，会有十条历史修改记录。“删除自定义”会将当前自定义的代码及其历史记录全部删除，沿用当前主题版本的该文件。
<img src="https://asset.ibanquan.com/image/56eabead0abc3e14d4000002/s.png" alt="#默认版本">
“默认版本”按钮，可以查看此文件的当前版本与历史版本的源码。
<br><b>自定义的文件，如果既要保持修改内容，又要跟进最新版本的内容。建议更新最新版本的主题，查看该文件的最新版本，使用 diff 工具检查两者差异后，手动进行代码合并。</b>
<br>非文本类型的文件，例如图片，将不会提供历史版本。</p>
</li>
<li><p>添加布局
<br>添加布局，需要选择一个原有的文件进行复制，然后在复制文件的基础上修改。
<br>关于布局，常见的问题有：</p>
<ul>
<li><a href="https://docs.lantusuda.com/development/s/546c9d1a71ea1e2009000009">布局文件的要求</a></li>
<li><a href="https://docs.lantusuda.com/development/s/542508b0e2931e5180000008#layout">添加布局后如何使用，如何不使用布局</a></li>
</ul>
</li>
<li><p>添加模板
<br>添加模板，需要选择一个原有的文件进行复制，然后在复制文件的基础上修改。
<br>关于模板，常见的问题有：</p>
<ul>
<li>添加模板的作用？<b>目前常用的添加模板功能，主要用于复制 page.html。定制不同样式，供“自定义页面”模块来使用。</b>除复制 page.html 的文件，其他文件暂时只用于备份或者留存参考等作用。</li>
<li>能否添加 index.new.html，当访问 “/indexnew”的时候，渲染这个模板？<b>不能，目前网站的路径和模板的关系是固定的。只有“自定义页面”模块可以配置“/pages/”下的路径与模板。例如添加 page.mypath.html ，然后使用“/pages/mypath”的路径</b></li>
</ul>
</li>
<li><p>添加小部件
<br>添加小部件，输入文件名后，会创建一个空白的文件。
<br>关于小部件，常见的问题有：</p>
<ul>
<li><a href="https://docs.lantusuda.com/development/s/542508b0e2931e5180000008#include">添加小部件后如何使用</a></li>
</ul>
</li>
<li><p>添加资源
<br>添加资源，选择一个资源文件并上传。
<br>关于资源，常见的问题有：</p>
<ul>
<li><a href="https://docs.lantusuda.com/development/s/5438fbc4e2931e7057000018#asset_url">上传完成的资源的路径是什么？</a></li>
<li>还有一些来自蓝途速搭的文件，但不在“资源/Assets”中，请查看<a href="https://docs.lantusuda.com/development/s/5438fbc4e2931e7057000018#global_asset_url">全局资源</a></li>
<li>对于图片资源，蓝途速搭的 CDN 也提供直接的<a href="https://docs.lantusuda.com/development/s/5438fbc4e2931e7057000018">图片裁剪服务</a></li>
</ul>
</li>
</ol>


</div>
</div>
        </div>
        <div v-else-if="type == 22">
            <div>
<h1>修改须知</h1>
<div class="docs-cont-inner">
<p>修改主题之前，请阅读以下的内容。以便对你修改的范围有一定把握。</p>
<ul>
<li><p>主题中修改（自定义）过的文件，将不能随版本升级而得到新的内容。在点击更新主题时，会有风险提示。
蓝途速搭的客服与主题的开发者只为主题版本自带的内容提供咨询与支持服务。
<img src="https://asset.ibanquan.com/image/56e7e1d70abc3e7f20000416/s.png" alt="#更新主题"></p>
</li>
<li><p>开发中的疑问和主题使用的相关问题，可以通过联系 QQ 客服、提交工单、发送邮件或者其他方式得到官方的支持。</p>
</li>
<li><p>如果你的修改超出了官方支持服务的范围，你也可以通过 蓝途速搭 QQ 群等方式，获得其他开发者蓝途而实用的建议。</p>
</li>
</ul>


</div>
</div>
        </div>
        <div v-else-if="type == 23">
            <div>
<h1>JS 路由功能</h1>
<div class="docs-cont-inner">
<p>为了优化和提升页面性能，可以使用全局的 JS 路由功能，选择性的在不同页面运行所需的 JS 代码。</p>
<p>使用:</p>
<pre><code class="lang-javascript cm-s-default"><span class="cm-variable">$</span>(<span class="cm-variable">document</span>).<span class="cm-property">ready</span>(<span class="cm-keyword">function</span>(){
  <span class="cm-keyword">var</span> <span class="cm-def">oRouteCustom</span> <span class="cm-operator">=</span> {};
  <span class="cm-comment">// 设置 首页</span>
  <span class="cm-variable-2">oRouteCustom</span>[<span class="cm-string">'index'</span>] <span class="cm-operator">=</span> <span class="cm-keyword">function</span>(<span class="cm-def">path</span>){
    <span class="cm-comment">// Index Code</span>
  };
  <span class="cm-comment">// 设置 商品详情 页</span>
  <span class="cm-variable-2">oRouteCustom</span>[<span class="cm-string">'productDetail'</span>] <span class="cm-operator">=</span> <span class="cm-keyword">function</span>(<span class="cm-def">path</span>){
    <span class="cm-comment">// Product Detail Code</span>
  };
  <span class="cm-comment">// 初始化</span>
  <span class="cm-variable">$yhsd</span>.<span class="cm-property">route</span>.<span class="cm-property">init</span>(<span class="cm-variable-2">oRouteCustom</span>);
});
</code></pre>
<p>路由名：</p>
<table>
<thead>
<tr>
<th style="text-align:center">名称</th>
<th style="text-align:center">页面</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">all</td>
<td style="text-align:center">所有页面</td>
</tr>
<tr>
<td style="text-align:center">index</td>
<td style="text-align:center">首页</td>
</tr>
<tr>
<td style="text-align:center">cart</td>
<td style="text-align:center">购物车</td>
</tr>
<tr>
<td style="text-align:center">accountIndex</td>
<td style="text-align:center">个人信息</td>
</tr>
<tr>
<td style="text-align:center">accountLogin</td>
<td style="text-align:center">登录</td>
</tr>
<tr>
<td style="text-align:center">accountRegister</td>
<td style="text-align:center">注册</td>
</tr>
<tr>
<td style="text-align:center">accountRegisterWithEmail</td>
<td style="text-align:center">注册 - 邮箱</td>
</tr>
<tr>
<td style="text-align:center">accountRegisterWithUsername</td>
<td style="text-align:center">注册 - 用户名</td>
</tr>
<tr>
<td style="text-align:center">accountRegisterWithMobile</td>
<td style="text-align:center">注册 - 手机号码</td>
</tr>
<tr>
<td style="text-align:center">accountChangePassword</td>
<td style="text-align:center">修改密码</td>
</tr>
<tr>
<td style="text-align:center">accountForgetPassword</td>
<td style="text-align:center">忘记密码</td>
</tr>
<tr>
<td style="text-align:center">accountResetPasswordWithEmail</td>
<td style="text-align:center">忘记密码 - 邮箱</td>
</tr>
<tr>
<td style="text-align:center">accountResetPasswordWithMobile</td>
<td style="text-align:center">忘记密码 - 手机号码</td>
</tr>
<tr>
<td style="text-align:center">accountReset</td>
<td style="text-align:center">重设密码</td>
</tr>
<tr>
<td style="text-align:center">accountValidateEmail</td>
<td style="text-align:center">邮箱注册成功 - 验证邮箱</td>
</tr>
<tr>
<td style="text-align:center">orderCreate</td>
<td style="text-align:center">创建订单</td>
</tr>
<tr>
<td style="text-align:center">orderAll</td>
<td style="text-align:center">订单列表</td>
</tr>
<tr>
<td style="text-align:center">orderDetail</td>
<td style="text-align:center">订单详情</td>
</tr>
<tr>
<td style="text-align:center">productAll</td>
<td style="text-align:center">所有商品</td>
</tr>
<tr>
<td style="text-align:center">productDetail</td>
<td style="text-align:center">商品详情</td>
</tr>
<tr>
<td style="text-align:center">discounts</td>
<td style="text-align:center">参加某个优惠活动的商品列表</td>
</tr>
<tr>
<td style="text-align:center">types</td>
<td style="text-align:center">拥有某个分类的商品列表</td>
</tr>
<tr>
<td style="text-align:center">vendors</td>
<td style="text-align:center">拥有某个品牌的商品列表</td>
</tr>
<tr>
<td style="text-align:center">search</td>
<td style="text-align:center">搜索结果</td>
</tr>
<tr>
<td style="text-align:center">page</td>
<td style="text-align:center">所有自定义页面</td>
</tr>
<tr>
<td style="text-align:center">blogAll</td>
<td style="text-align:center">所有博客</td>
</tr>
<tr>
<td style="text-align:center">blogDetail</td>
<td style="text-align:center">博客详情</td>
</tr>
</tbody>
</table>


</div>
</div>
        </div>
        <div v-else-if="type == 31">
            <div>
            <h1>简介</h1>
            <div class="docs-cont-inner">
            <p>如果你手头有一份网站的设计稿，或者对于新主题有一套天马行空的想法。那你需要制作一个全新的主题，来将他们还原。</p>
            <p>使用在线编辑器，来修改个别文件，是非常方便的。但如果要编辑整套主题，我们觉得更加舒适和高效的方式，应该是沿用你习惯的操作系统与编辑器。为此我们开发了跨平台的<a href="https://docs.lantusuda.com/development/s/54815214e2931e38ae000016">主题开发工具</a>来实现快速的开发。</p>
            <p>如何检查开发中的主题？官方的<a href="https://docs.lantusuda.com/development/s/56d6b1df0abc3e7f20000063">检查文档</a>或许涵盖不了您所有的测试，但可以成为一份很好的参考。</p>


            </div>
        </div>
        </div>
        <div v-else-if="type == 32">
            <div>
<h1>检查文档</h1>
<div class="docs-cont-inner">
<p>本节主要介绍，开发者完成的主题文件中主要界面的检查项与检查流程。
主要包含以下内容：</p>
<h2 id="-"><a name="文件检查" href="#文件检查" class="anchor"></a>文件检查</h2>
<ul>
<li><a href="#文件包/Package文件">文件包/Package文件</a></li>
<li><a href="#布局/Layout目录">布局/Layout目录</a></li>
<li><a href="#模板/Templates目录">模板/Templates目录</a></li>
<li><a href="#小部件/Snippets目录">小部件/Snippets目录</a></li>
<li><a href="#资源/Assets目录">资源/Assets目录</a></li>
<li><a href="#配置/Configs目录">配置/Configs目录</a></li>
</ul>
<h2 id="-"><a name="页面检查" href="#页面检查" class="anchor"></a>页面检查</h2>
<ul>
<li><a href="#头部">布局</a><ul>
<li><a href="#头部">头部</a></li>
<li><a href="#底部">底部</a></li>
</ul>
</li>
<li><a href="#首页">首页</a> [ / ]</li>
<li><a href="#商品列表">商品</a><ul>
<li><a href="#商品列表">商品列表</a> [ /products ]</li>
<li><a href="#商品详情">商品详情</a> [ /products/p000001 ]</li>
<li><a href="#促销列表">促销列表</a> [ /discounts/d000002 ]</li>
</ul>
</li>
<li><a href="#博客列表">博客</a><ul>
<li><a href="#博客列表">博客列表</a> [ /blogs ]</li>
<li><a href="#博客详情">博客详情</a> [ /blogs/b000001 ]</li>
<li><a href="#博客作者">博客作者</a> [ /blogs?author=[handle] ]</li>
</ul>
</li>
<li><a href="#登录页">登录页/注册页</a> <ul>
<li><a href="#登录页">登录页</a> [ /account/login ]</li>
<li><a href="#注册页">注册页</a> [ /account/register ]</li>
<li><a href="#找回密码">找回密码</a> [ /account/forget_password ]</li>
<li><a href="#验证邮箱">验证邮箱</a> [ /account/reset_password_with_email ]</li>
<li><a href="#重置密码">重置密码</a> [ /account/reset/[handle] ]</li>
</ul>
</li>
<li><a href="#我的订单">个人中心</a> <ul>
<li><a href="#我的订单">我的订单</a> [ /account/orders ]</li>
<li><a href="#个人信息">个人信息</a> [ /account ]</li>
<li><a href="#修改密码">修改密码</a> [ /account/change_password ]</li>
</ul>
</li>
<li><a href="#购物车">购物车</a> [ /cart ]</li>
<li><a href="#提交订单页">提交订单页</a> [ /account/create_order ]</li>
<li><a href="#订单详情页">订单详情页</a> [ /account/orders/[handle] ]</li>
<li><a href="#自定义页">自定义页</a> [ /pages/welcome ]</li>
<li><a href="#其他项">其他项</a><ul>
<li><a href="#其他项">弹窗样式</a></li>
<li><a href="#其他项">搜索结果</a> [ /search?terms=[handle] ]</li>
<li><a href="#其他项">在线客服</a></li>
<li><a href="#其他项">回滚顶部</a></li>
<li><a href="#其他项">404界面</a></li>
<li><a href="#其他项">500界面</a></li>
</ul>
</li>
<li><a href="#设置项">设置项</a> </li>
</ul>
<h2 id="-"><a name="其他" href="#其他" class="anchor"></a>其他</h2>
<ul>
<li><a href="#SEO优化">SEO优化</a></li>
<li><a href="#兼容性">兼容性</a></li>
</ul>
<h3 id="-package-"><a name="文件包/Package文件" href="#文件包/Package文件" class="anchor"></a>文件包/Package文件</h3>
<p>主题模板打包文件大小必须小于 5MB 且为 .zip 格式。
<br>命名规范：name-version-time
<br>例如：standard-1.0-160101_0101</p>
<h3 id="-layout-"><a name="布局/Layout目录" href="#布局/Layout目录" class="anchor"></a>布局/Layout目录</h3>
<p>Layout 文件夹下包含以下布局文件：</p>
<ul>
<li>theme.html</li>
</ul>
<h3 id="-templates-"><a name="模板/Templates目录" href="#模板/Templates目录" class="anchor"></a>模板/Templates目录</h3>
<p>Templates 文件夹下包含以下模板文件：</p>
<ul>
<li>blog.html</li>
<li>blogs_list.html</li>
<li>cart.html</li>
<li>discount.html</li>
<li>index.html</li>
<li>page.html</li>
<li>product.html</li>
<li>products_list.html</li>
<li>search.html</li>
<li>type.html</li>
<li>vendor.html</li>
<li>account/change_password.html</li>
<li>account/create_order.html</li>
<li>account/forget_password.html</li>
<li>account/index.html</li>
<li>account/login.html</li>
<li>account/order.html</li>
<li>account/orders_list.html</li>
<li>account/register.html</li>
<li>account/reset_password.html</li>
<li>account/social_bind.html</li>
<li>account/validate_email.html</li>
<li>system/404.html</li>
<li>system/500.html</li>
<li>system/closing.html</li>
<li>system/protecting.html</li>
</ul>
<h3 id="-snippets-"><a name="小部件/Snippets目录" href="#小部件/Snippets目录" class="anchor"></a>小部件/Snippets目录</h3>
<p>用来存放 snippet 文件，snippet 文件可以在 template 文件中被引用。可以在 template 文件中，使用 include 方法加载 snippet 文件。</p>
<h3 id="-assets-"><a name="资源/Assets目录" href="#资源/Assets目录" class="anchor"></a>资源/Assets目录</h3>
<p>Assets 文件夹用来存放主题中，所有的静态资源文件，包括图片、CSS、JavaScript等文件。可以在 Liquid 文件中使用 asset_url 来加载资源文件。
<br>主题中引用的资源，必须为本主题的 ASSET 文件夹内的内容，或者其他可靠的 CDN 服务。
<br>主要包含以下资源文件：</p>
<ul>
<li>main.css （主题主要层叠样式表）</li>
<li>main.js （主题主要脚本语言）</li>
<li>user.css （内容为空或注释）</li>
<li>user.js （内容为空或注释）</li>
<li>favicon.ico</li>
</ul>
<h3 id="-configs-"><a name="配置/Configs目录" href="#配置/Configs目录" class="anchor"></a>配置/Configs目录</h3>
<p>Configs 文件夹下包含以下配置文件：</p>
<ul>
<li>settings_schema.json</li>
<li>settings_data.json</li>
</ul>
<h3 id="-"><a name="头部" href="#头部" class="anchor"></a>头部</h3>
<table>
<thead>
<tr>
<th>检查项</th>
<th>样式</th>
<th>功能</th>
</tr>
</thead>
<tbody>
<tr>
<td>LOGO</td>
<td><li>无图则显示店铺名字</li><li>限制图片最大宽度</li></td>
<td><li>点击 LOGO 跳转到首页</li></td>
</tr>
<tr>
<td>顶部导航</td>
<td><li> 限制宽度，防止文字过多导致溢出</li></td>
<td><li> 导航跳转链接正确</li><li>未设置链接默认使用 javascript:void(0); </li><li>菜单展开功能正常，避免选择不到子菜单</li></td>
</tr>
<tr>
<td>搜索栏</td>
<td><li> 输入框文字垂直居中</li><li>输入文字过长溢出处理</li></td>
<td><li> 收缩与展开流畅</li><li>回车键能触发搜索功能</li><li>能正常搜索结果</li></td>
</tr>
<tr>
<td>登录按钮</td>
<td><li> 用户登录后登录按钮变为用户名</li></td>
<td><li> 未登录时点击跳转登录界面</li><li>登录后点击进入个人中心</li></td>
</tr>
<tr>
<td>注册按钮</td>
<td><li> 用户登录后注册按钮变为退出登录</li></td>
<td><li> 未登录时点击跳转注册界面</li><li>登录后点击退出当前登录状态</li></td>
</tr>
<tr>
<td>顶部购物车</td>
<td><li> 缩略图水平居中，限制最大宽度</li><li>标题、SKU 描述、价格</li></td>
<td><li>链接正常</li><li>无连接状态下 javascript:void(0);</li></td>
</tr>
</tbody>
</table>
<h3 id="-"><a name="底部" href="#底部" class="anchor"></a>底部</h3>
<table>
<thead>
<tr>
<th>检查项</th>
<th>样式</th>
<th>功能</th>
</tr>
</thead>
<tbody>
<tr>
<td>底部导航</td>
<td><li> 限制宽度，防止文字过多导致溢出</li></td>
<td><li> 导航跳转链接正确</li><li>未设置链接默认使用 javascript:void(0); </li></td>
</tr>
<tr>
<td>底部二维码</td>
<td><li>非必须项</li><li> 如果有则二维码缺省图使用蓝途速搭官方二维码</li></td>
<td><li> 可在设置项设置图片</li></td>
</tr>
<tr>
<td>底部支付方式</td>
<td><li> 图标大小一致</li></td>
<td><li> 可在设置项开启或关闭单个图标</li></td>
</tr>
<tr>
<td>底部版权</td>
<td><li> 长文字情况下，按单词换行</li></td>
<td><li> 可在设置项设置文字</li></td>
</tr>
</tbody>
</table>
<h3 id="-"><a name="首页" href="#首页" class="anchor"></a>首页</h3>
<table>
<thead>
<tr>
<th>检查项</th>
<th>样式</th>
<th>功能</th>
</tr>
</thead>
<tbody>
<tr>
<td>轮播图</td>
<td><li>图片比例正确</li><li>翻页按钮水平对齐</li></td>
<td><li>跳转链接正确</li><li>可在设置项设置图片</li><li>轮播图动画正常（注意触屏、单张图情况下）</li></td>
</tr>
<tr>
<td>自定义图文展示</td>
<td><li>不同尺寸图片显示效果正常</li><li>文字过长检查</li></td>
<td><li>跳转链接正确</li><li>可在设置项设置图片</li><li>可在设置项设置文字</li></td>
</tr>
<tr>
<td>自定义页面</td>
<td><li>页面内容（图文）显示正常，不被其他样式影响</li><li>商品列表相关显示正常（图片、名称、简介、价格等）</li></td>
<td><li>对应商品跳转链接正确</li><li>默认输出 welcome 自定义页面</li><li>可在设置项设置输出的自定义页面</li></td>
</tr>
<tr>
<td>虚拟商品</td>
<td><li>样式与商品列表一致</li></td>
<td><li>在店铺后台无上架商品情况下，显示虚拟商品，仅作显示，无实际功能</li></td>
</tr>
</tbody>
</table>
<h3 id="-"><a name="商品列表" href="#商品列表" class="anchor"></a>商品列表</h3>
<table>
<thead>
<tr>
<th>检查项</th>
<th>样式</th>
<th>功能</th>
</tr>
</thead>
<tbody>
<tr>
<td>商品图</td>
<td><li>不同尺寸图片显示效果正常</li></td>
<td>对应商品跳转链接正确</td>
</tr>
<tr>
<td>商品名</td>
<td><li>限制宽度，防止文字过多导致溢出</li></td>
<td>&nbsp;</td>
</tr>
<tr>
<td>商品简介</td>
<td><li>限制宽度，防止文字过多导致溢出</li></td>
<td>&nbsp;</td>
</tr>
<tr>
<td>售价</td>
<td><li>表明单位</li></td>
<td><li>精度到分，小数点后两位</li></td>
</tr>
<tr>
<td>原价</td>
<td><li>表明单位</li><li>有明显区分于售价的处理，以免混淆价格</li></td>
<td><li>精度到分，小数点后两位</li></td>
</tr>
<tr>
<td>筛选</td>
<td><li>可选条件结构清晰，相同分类条件在同一部分显示</li><li>已选条件显眼，以免混淆为可选条件</li><li>有仅显示有货按钮</li></td>
<td><li>可以清除已选条件</li><li>仅显示有货按钮筛选有货商品</li><li>筛选结果正确有效</li><li>可在设置项开启或者关闭显示筛选</li></td>
</tr>
<tr>
<td>排序</td>
<td><li>至少有价格、销量、上架时间三种排序方式</li><li>有当前选择的排序状态提示（颜色、图标、或者其它方式）</li></td>
<td><li>排序结果正确有效</li></td>
</tr>
<tr>
<td>分页</td>
<td><li>至少有最大和最小页码以及当前所在页码显示</li><li>页面过多的情况下，不影响选择页面</li></td>
<td><li>页码逻辑正确</li><li>页码对应页面正确</li></td>
</tr>
</tbody>
</table>
<h3 id="-"><a name="商品详情" href="#商品详情" class="anchor"></a>商品详情</h3>
<table>
<thead>
<tr>
<th>检查项</th>
<th>样式</th>
<th>功能</th>
</tr>
</thead>
<tbody>
<tr>
<td>橱窗图片</td>
<td><li>不同尺寸图片显示效果正常，橱窗大小不随图片尺寸变化</li><li>图片列表过多情况下显示效果正常</li></td>
<td><li>橱窗图切换图片正常</li><li>橱窗图细节放大效果正常</li><li>橱窗图全屏显示正常</li></td>
</tr>
<tr>
<td>商品名</td>
<td><li>显示完全（过长情况下也需要）</li></td>
<td>&nbsp;</td>
</tr>
<tr>
<td>商品简介</td>
<td><li>显示完全，后台数据自带排版</li></td>
<td>&nbsp;</td>
</tr>
<tr>
<td>售价</td>
<td><li>表明单位</li></td>
<td>精度到分，小数点后两位</td>
</tr>
<tr>
<td>原价</td>
<td><li>表明单位</li><li>有明显区分于售价的处理，以免混淆价格</li></td>
<td>精度到分，小数点后两位</td>
</tr>
<tr>
<td>SKU选项</td>
<td><li>分类明确</li><li>至少有可选、已选、禁选三种状态</li><li>未选择提示内容准确明显</li></td>
<td><li>可选、已选、禁选三种状态使用逻辑正确</li><li>未选择全情况下，不允许加入购物车，并提示未选择项</li></td>
</tr>
<tr>
<td>数量选择</td>
<td>&nbsp;</td>
<td><li>可以正常选择数量</li><li>必须大于 0 ，小于等于库存</li></td>
</tr>
<tr>
<td>库存数量</td>
<td>&nbsp;</td>
<td><li>可在设置项开启或者关闭显示库存</li></td>
</tr>
<tr>
<td>已售数量</td>
<td>&nbsp;</td>
<td><li>可在设置项开启或者关闭显示已售出</li></td>
</tr>
<tr>
<td>促销活动</td>
<td><li>样式明显，以免被认为是商品原有属性</li></td>
<td><li>可在店铺后台促销管理中设置活动</li><li>跳转链接到活动页面</li></td>
</tr>
<tr>
<td>商品详情</td>
<td><li>页面内容（图文）显示正常，不被其他样式影响</li></td>
<td>&nbsp;</td>
</tr>
<tr>
<td>分享</td>
<td><li>样式明显，使用流行的图标</li></td>
<td><li>可在设置项开启或者关闭显示分享</li></td>
</tr>
<tr>
<td>加入购物车</td>
<td>&nbsp;</td>
<td><li>未登录匿名状态下正常加入购物车</li><li>登录状态能正常加入购物车</li></td>
</tr>
<tr>
<td>添加成功提示</td>
<td><li>有关闭按钮</li><li>结算按钮</li></td>
<td><li>未登录匿名状态下能正常关闭或者点击进入结算</li><li>登录状态能正常关闭或者点击进入结算</li></td>
</tr>
</tbody>
</table>
<h3 id="-"><a name="促销列表" href="#促销列表" class="anchor"></a>促销列表</h3>
<table>
<thead>
<tr>
<th>检查项</th>
<th>样式</th>
<th>功能</th>
</tr>
</thead>
<tbody>
<tr>
<td>商品图</td>
<td><li>不同尺寸图片显示效果正常</li></td>
<td><li>对应商品跳转链接正确</li></td>
</tr>
<tr>
<td>商品名</td>
<td><li>限制宽度，防止文字过多导致溢出</li></td>
<td>&nbsp;</td>
</tr>
<tr>
<td>商品简介</td>
<td><li>限制宽度，防止文字过多导致溢出</li></td>
<td>&nbsp;</td>
</tr>
<tr>
<td>售价</td>
<td><li>表明单位</li></td>
<td><li>精度到分，小数点后两位</li></td>
</tr>
<tr>
<td>原价</td>
<td><li>表明单位</li><li>有明显区分于售价的处理，以免混淆价格</li></td>
<td><li>精度到分，小数点后两位</li></td>
</tr>
<tr>
<td>筛选</td>
<td><li>可选条件结构清晰，相同分类条件在同一部分显示</li><li>已选条件显眼，以免混淆为可选条件</li><li>有仅显示有货按钮</li></td>
<td><li>可以清除已选条件</li><li>仅显示有货按钮筛选有货商品</li><li>筛选结果正确有效</li><li>可在设置项开启或者关闭显示筛选</li></td>
</tr>
<tr>
<td>排序</td>
<td><li>至少有价格、销量、上架时间三种排序方式</li><li>有当前选择的排序状态提示（颜色、图标、或者其它方式）</li></td>
<td><li>排序结果正确有效</li></td>
</tr>
<tr>
<td>分页</td>
<td><li>至少有最大和最小页码以及当前所在页码显示</li><li>页面过多的情况下，不影响选择页面</li></td>
<td><li>页码逻辑正确</li><li>页码对应页面正确</li></td>
</tr>
</tbody>
</table>
<h3 id="-"><a name="博客列表" href="#博客列表" class="anchor"></a>博客列表</h3>
<table>
<thead>
<tr>
<th>检查项</th>
<th>样式</th>
<th>功能</th>
</tr>
</thead>
<tbody>
<tr>
<td>图片</td>
<td><li>不同尺寸图片显示效果正常</li></td>
<td><li>对应博客跳转链接正确</li></td>
</tr>
<tr>
<td>标题</td>
<td><li>限制宽度，防止文字过多导致溢出</li></td>
<td><li>对应博客跳转链接正确</li></td>
</tr>
<tr>
<td>内容</td>
<td><li>页面内容（图文）显示正常，不被其他样式影响</li></td>
<td>&nbsp;</td>
</tr>
<tr>
<td>分页</td>
<td><li>至少有最大和最小页码以及当前所在页码显示</li><li>页面过多的情况下，不影响选择页面</li></td>
<td><li>页码逻辑正确</li><li>页码对应页面正确</li></td>
</tr>
<tr>
<td>虚拟博客</td>
<td><li>样式与博客列表一致</li></td>
<td><li>在店铺后台无博客情况下，显示虚拟博客，仅作显示，无实际功能</li></td>
</tr>
</tbody>
</table>
<h3 id="-"><a name="博客详情" href="#博客详情" class="anchor"></a>博客详情</h3>
<table>
<thead>
<tr>
<th>检查项</th>
<th>样式</th>
<th>功能</th>
</tr>
</thead>
<tbody>
<tr>
<td>标题</td>
<td><li>页面内容（图文）显示正常，不被其他样式影响</li></td>
<td>&nbsp;</td>
</tr>
<tr>
<td>内容</td>
<td><li>页面内容（图文）显示正常，不被其他样式影响</li></td>
<td>&nbsp;</td>
</tr>
<tr>
<td>标签</td>
<td><li>使用专门的标签图形</li></td>
<td><li>点击跳转到筛选同标签博客界面</li></td>
</tr>
<tr>
<td>作者</td>
<td><li>不同尺寸头像图片显示效果正常</li><li>作者名字限制宽度，防止溢出</li></td>
<td><li>点击跳转到作者页面</li></td>
</tr>
<tr>
<td>时间</td>
<td><li>建议显示完全（年月日时分秒）</li></td>
<td>&nbsp;</td>
</tr>
<tr>
<td>分享</td>
<td><li>样式明显，使用流行的图标</li></td>
<td><li>可在设置项开启或者关闭显示分享</li></td>
</tr>
<tr>
<td>翻页</td>
<td><li>翻页到尽头，对应翻页按钮隐藏或者有无效提示</li></td>
<td><li>能正常翻页</li></td>
</tr>
<tr>
<td>音乐</td>
<td>&nbsp;</td>
<td><li>能正常播放音乐</li></td>
</tr>
<tr>
<td>视频</td>
<td>&nbsp;</td>
<td><li>能正常播放视频</li></td>
</tr>
</tbody>
</table>
<h3 id="-"><a name="博客作者" href="#博客作者" class="anchor"></a>博客作者</h3>
<table>
<thead>
<tr>
<th>检查项</th>
<th>样式</th>
<th>功能</th>
</tr>
</thead>
<tbody>
<tr>
<td>头像</td>
<td><li>不同尺寸头像图片显示效果正常</li></td>
<td>&nbsp;</td>
</tr>
<tr>
<td>笔名</td>
<td><li>显示完全（过长情况下也需要）</li></td>
<td>&nbsp;</td>
</tr>
<tr>
<td>文章数</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
<td>社交账号</td>
<td><li>样式明显，使用流行的图标</li></td>
<td><li>可在设置项开启或者关闭显示社交账号</li></td>
</tr>
<tr>
<td>文章列表</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
<td>分页</td>
<td><li>至少有最大和最小页码以及当前所在页码显示</li><li>页面过多的情况下，不影响选择页面</li></td>
<td><li>页码逻辑正确</li><li>页码对应页面正确</li></td>
</tr>
</tbody>
</table>
<h3 id="-"><a name="注册页" href="#注册页" class="anchor"></a>注册页</h3>
<table>
<thead>
<tr>
<th>检查项</th>
<th>样式</th>
<th>功能</th>
</tr>
</thead>
<tbody>
<tr>
<td>注册方式</td>
<td><li>建议手机、邮箱、用户名三种注册方式</li></td>
<td><li>注册方式切换流畅</li></td>
</tr>
<tr>
<td>提示</td>
<td><li>提示文案准确清晰</li><li>若有提示图标，请使用规范图标</li><li>验证错误提示明显</li></td>
<td>&nbsp;</td>
</tr>
<tr>
<td>输入框</td>
<td><li>文字垂直居中</li><li>左右设置边距，以免贴边</li></td>
<td>&nbsp;</td>
</tr>
<tr>
<td>手机验证码</td>
<td><li>按钮样式，鼠标悬浮为手型</li></td>
<td><li>点击获取短信验证码</li></td>
</tr>
<tr>
<td>提交按钮</td>
<td><li>按钮样式，鼠标悬浮为手型</li></td>
<td><li>验证输入内容是否符合规定</li><li>能成功注册</li></td>
</tr>
</tbody>
</table>
<h3 id="-"><a name="登录页" href="#登录页" class="anchor"></a>登录页</h3>
<table>
<thead>
<tr>
<th>检查项</th>
<th>样式</th>
<th>功能</th>
</tr>
</thead>
<tbody>
<tr>
<td>输入框</td>
<td><li>文字垂直居中</li><li>左右设置边距，以免贴边</li></td>
<td>&nbsp;</td>
</tr>
<tr>
<td>提示</td>
<td><li>提示文案准确清晰</li><li>若有提示图标，请使用规范图标</li><li>验证错误提示明显</li></td>
<td>&nbsp;</td>
</tr>
<tr>
<td>第三方登录</td>
<td><li>使用正确的第三方图标</li></td>
<td><li>可以使用第三方登录</li></td>
</tr>
<tr>
<td>登录按钮</td>
<td><li>按钮样式，鼠标悬浮为手型</li></td>
<td><li>验证输入内容是否符合规定</li><li>能成功登录</li></td>
</tr>
<tr>
<td>密码找回</td>
<td><li>样式显眼，以免被当做普通文字</li></td>
<td><li>点击跳转到忘记密码页面</li></td>
</tr>
</tbody>
</table>
<h3 id="-"><a name="找回密码" href="#找回密码" class="anchor"></a>找回密码</h3>
<table>
<thead>
<tr>
<th>检查项</th>
<th>样式</th>
<th>功能</th>
</tr>
</thead>
<tbody>
<tr>
<td>输入框</td>
<td><li>文字垂直居中</li><li>左右设置边距，以免贴边</li></td>
<td>&nbsp;</td>
</tr>
<tr>
<td>提示</td>
<td><li>提示文案准确清晰</li><li>若有提示图标，请使用规范图标</li><li>验证错误提示明显</li></td>
<td><li>验证错误提示应当在重新输入后去除</li></td>
</tr>
<tr>
<td>提交按钮</td>
<td><li>按钮样式，鼠标悬浮为手型</li></td>
<td><li>验证输入内容是否符合规定</li><li>能成功提交</li></td>
</tr>
</tbody>
</table>
<h3 id="-"><a name="验证邮箱" href="#验证邮箱" class="anchor"></a>验证邮箱</h3>
<table>
<thead>
<tr>
<th>检查项</th>
<th>样式</th>
<th>功能</th>
</tr>
</thead>
<tbody>
<tr>
<td>提示</td>
<td><li>提示文案准确清晰</li><li>若有提示图标，请使用规范图标</li></td>
<td>&nbsp;</td>
</tr>
</tbody>
</table>
<h3 id="-"><a name="重置密码" href="#重置密码" class="anchor"></a>重置密码</h3>
<table>
<thead>
<tr>
<th>检查项</th>
<th>样式</th>
<th>功能</th>
</tr>
</thead>
<tbody>
<tr>
<td>输入框</td>
<td><li>文字垂直居中</li><li>左右设置边距，以免贴边</li></td>
<td>&nbsp;</td>
</tr>
<tr>
<td>提示</td>
<td><li>提示文案准确清晰</li><li>若有提示图标，请使用规范图标</li><li>验证错误提示明显</li></td>
<td><li>验证错误提示应当在重新输入后去除</li></td>
</tr>
<tr>
<td>重置按钮</td>
<td><li>按钮样式，鼠标悬浮为手型</li></td>
<td><li>验证输入内容是否符合规定</li></td>
</tr>
</tbody>
</table>
<h3 id="-"><a name="我的订单" href="#我的订单" class="anchor"></a>我的订单</h3>
<table>
<thead>
<tr>
<th>检查项</th>
<th>样式</th>
<th>功能</th>
</tr>
</thead>
<tbody>
<tr>
<td>订单编号</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
<td>下单时间</td>
<td><li>建议显示完全（年月日时分秒）</li></td>
<td>&nbsp;</td>
</tr>
<tr>
<td>缩略图</td>
<td><li>不同尺寸图片显示效果正常</li></td>
<td>&nbsp;</td>
</tr>
<tr>
<td>商品名称</td>
<td>&nbsp;</td>
<td><li>点击跳转到对应商品</li></td>
</tr>
<tr>
<td>商品描述</td>
<td><li>商品的SKU</li></td>
<td>&nbsp;</td>
</tr>
<tr>
<td>单价</td>
<td><li>确认显示价格与实际价格相同</li></td>
<td>&nbsp;</td>
</tr>
<tr>
<td>数量</td>
<td><li>确认显示数量与实际选择数量相同</li></td>
<td>&nbsp;</td>
</tr>
<tr>
<td>总价</td>
<td><li>包含运费</li></td>
<td>&nbsp;</td>
</tr>
<tr>
<td>运费提示</td>
<td><li>总价包含运费，此运费仅作运费金额提示</li></td>
<td>&nbsp;</td>
</tr>
<tr>
<td>订单状态</td>
<td><li>等待付款或者支付过期</li></td>
<td>&nbsp;</td>
</tr>
<tr>
<td>详情链接</td>
<td><li>链接或按钮样式，鼠标悬浮为手型</li></td>
<td><li>跳转到对应订单详情页</li></td>
</tr>
</tbody>
</table>
<h3 id="-"><a name="个人信息" href="#个人信息" class="anchor"></a>个人信息</h3>
<table>
<thead>
<tr>
<th>检查项</th>
<th>样式</th>
<th>功能</th>
</tr>
</thead>
<tbody>
<tr>
<td>昵称</td>
<td><li>默认为注册账号</li></td>
<td>&nbsp;</td>
</tr>
<tr>
<td>邮箱地址</td>
<td><li>邮箱注册用户显示注册邮箱，其它默认为空</li></td>
<td><li>验证邮箱合法性</li></td>
</tr>
<tr>
<td>手机号码</td>
<td><li>手机号注册用户显示注册手机号，其它默认为空</li></td>
<td><li>若仅输入数字，使用数字输入框，以便移动设备调用数字键盘</li><li>电话号码推荐使用 type="tel" </li></td>
</tr>
<tr>
<td>社交账号绑定</td>
<td><li>社交账号登录后显示社交账号头像</li><li>社交账号只允许绑定一个账号</li></td>
<td>&nbsp;</td>
</tr>
<tr>
<td>错误提示</td>
<td><li>提示文案准确清晰</li><li>验证错误提示明显</li></td>
<td><li>验证错误提示应当在重新输入后去除</li></td>
</tr>
</tbody>
</table>
<h3 id="-"><a name="修改密码" href="#修改密码" class="anchor"></a>修改密码</h3>
<table>
<thead>
<tr>
<th>检查项</th>
<th>样式</th>
<th>功能</th>
</tr>
</thead>
<tbody>
<tr>
<td>原密码</td>
<td><li>文字垂直居中</li><li>使用星号密码</li></td>
<td>&nbsp;</td>
</tr>
<tr>
<td>新密码</td>
<td><li>文字垂直居中</li><li>使用星号密码</li></td>
<td>&nbsp;</td>
</tr>
<tr>
<td>重复新密码</td>
<td><li>文字垂直居中</li><li>使用星号密码</li></td>
<td>&nbsp;</td>
</tr>
<tr>
<td>提示</td>
<td><li>提示文案准确清晰</li><li>若有提示图标，请使用规范图标</li><li>验证错误提示明显</li></td>
<td><li>验证错误提示应当在重新输入后去除</li></td>
</tr>
<tr>
<td>确认按钮</td>
<td><li>按钮样式，鼠标悬浮为手型</li></td>
<td><li>验证密码正确性</li></td>
</tr>
</tbody>
</table>
<h3 id="-"><a name="购物车" href="#购物车" class="anchor"></a>购物车</h3>
<table>
<thead>
<tr>
<th>检查项</th>
<th>样式</th>
<th>功能</th>
</tr>
</thead>
<tbody>
<tr>
<td>勾选按钮</td>
<td><li>复选框样式</li></td>
<td><li>复选功能，全选功能</li></td>
</tr>
<tr>
<td>清空</td>
<td><li>明显样式</li></td>
<td><li>清空所有选择的商品</li></td>
</tr>
<tr>
<td>缩略图</td>
<td><li>不同尺寸图片显示效果正常</li></td>
<td>&nbsp;</td>
</tr>
<tr>
<td>商品名称</td>
<td>&nbsp;</td>
<td><li>点击跳转到对应商品</li></td>
</tr>
<tr>
<td>商品描述</td>
<td><li>商品的 SKU</li></td>
<td>&nbsp;</td>
</tr>
<tr>
<td>商品单价</td>
<td><li>确认显示价格与实际价格相同</li><li>精确到分</li></td>
<td>&nbsp;</td>
</tr>
<tr>
<td>单品数量</td>
<td><li>确认显示数量与实际选择数量相同</li></td>
<td><li>可以调整商品数量</li></td>
</tr>
<tr>
<td>商品信息变动提示</td>
<td><li>在对应商品下出现，样式显眼</li></td>
<td><li>下单后，购买商品信息发生变动时出现提示，且不允许购买该商品</li></td>
</tr>
<tr>
<td>单品总价</td>
<td><li>不含运费</li><li>精确到分</li></td>
<td>&nbsp;</td>
</tr>
<tr>
<td>删除</td>
<td><li>按钮样式，鼠标悬浮为手型</li></td>
<td><li>点击删除当前购物车对应商品</li></td>
</tr>
<tr>
<td>总商品数量</td>
<td><li>数量准确</li></td>
<td>&nbsp;</td>
</tr>
<tr>
<td>总商品金额</td>
<td><li>不含运费</li></td>
<td>&nbsp;</td>
</tr>
<tr>
<td>优惠金额</td>
<td><li>满足活动优惠金额数</li></td>
<td><li>为负值，减去的金额</li></td>
</tr>
<tr>
<td>金额共计</td>
<td><li>不含运费</li><li>减去优惠金额</li></td>
<td>&nbsp;</td>
</tr>
<tr>
<td>确认结算</td>
<td><li>按钮样式，鼠标悬浮为手型</li></td>
<td><li>登录状态下可以成功结算</li></td>
</tr>
</tbody>
</table>
<h3 id="-"><a name="提交订单页" href="#提交订单页" class="anchor"></a>提交订单页</h3>
<table>
<thead>
<tr>
<th>检查项</th>
<th>样式</th>
<th>功能</th>
</tr>
</thead>
<tbody>
<tr>
<td>收货人</td>
<td><li>必填项</li></td>
<td>&nbsp;</td>
</tr>
<tr>
<td>所在地区</td>
<td><li>必填项</li><li>选择地区（ 省份 —— 城市 —— 县区 ）</li></td>
<td><li>使用地址库选择地区</li><li>直辖市（ 市区 —— 县区 ）</li></td>
</tr>
<tr>
<td>详细地址</td>
<td><li>必填项</li></td>
<td>&nbsp;</td>
</tr>
<tr>
<td>联系电话</td>
<td><li>必填项</li></td>
<td>&nbsp;</td>
</tr>
<tr>
<td>邮政编码</td>
<td><li>非必填项</li></td>
<td>&nbsp;</td>
</tr>
<tr>
<td>设为常用地址</td>
<td><li>复选框样式</li></td>
<td><li>设置是否为常用地址</li></td>
</tr>
<tr>
<td>编辑和删除</td>
<td><li>按钮样式，鼠标悬浮为手型</li></td>
<td><li>编辑键点击编辑对应地址</li><li>删除键点击删除对应地址</li></td>
</tr>
<tr>
<td>增加新地址</td>
<td><li>按钮样式，鼠标悬浮为手型</li></td>
<td><li>新增一个地址编辑框</li></td>
</tr>
<tr>
<td>支付方式</td>
<td><li>网上支付（第三方支付、银行卡支付）</li><li>货到付款</li></td>
<td><li>微信打开只允许微信支付</li></td>
</tr>
<tr>
<td>返回购物车按钮</td>
<td><li>按钮样式，鼠标悬浮为手型</li></td>
<td><li>点击返回购物车</li></td>
</tr>
<tr>
<td>商品名称</td>
<td>&nbsp;</td>
<td><li>点击跳转到对应商品</li></td>
</tr>
<tr>
<td>商品描述</td>
<td><li>商品的 SKU</li></td>
<td>&nbsp;</td>
</tr>
<tr>
<td>商品单价</td>
<td><li>确认显示价格与实际价格相同</li><li>精确到分</li></td>
<td>&nbsp;</td>
</tr>
<tr>
<td>单品数量</td>
<td><li>确认显示数量与实际选择数量相同</li></td>
<td><li>不可以调整商品数量</li></td>
</tr>
<tr>
<td>单品总价</td>
<td><li>不含运费</li><li>精确到分</li></td>
<td>&nbsp;</td>
</tr>
<tr>
<td>配送方式</td>
<td><li>配送方式与运费</li></td>
<td><li>可以选择不同配送方式</li></td>
</tr>
<tr>
<td>订单说明</td>
<td><li>文本输入框样式</li></td>
<td><li>用于填写订单补充说明</li></td>
</tr>
<tr>
<td>总数量</td>
<td><li>数量准确</li></td>
<td>&nbsp;</td>
</tr>
<tr>
<td>商品总价</td>
<td><li>不含运费</li></td>
<td>&nbsp;</td>
</tr>
<tr>
<td>配送总价</td>
<td><li>当前运费</li></td>
<td>&nbsp;</td>
</tr>
<tr>
<td>优惠金额</td>
<td><li>满足活动优惠金额数</li></td>
<td><li>为负值，减去的金额</li></td>
</tr>
<tr>
<td>订单总计</td>
<td><li>含运费</li><li>减去优惠金额</li><li>最终支付金额</li></td>
<td>&nbsp;</td>
</tr>
<tr>
<td>确认提交</td>
<td><li>按钮样式，鼠标悬浮为手型</li></td>
<td><li>登录状态下可以成功提交</li></td>
</tr>
</tbody>
</table>
<h3 id="-"><a name="订单详情页" href="#订单详情页" class="anchor"></a>订单详情页</h3>
<table>
<thead>
<tr>
<th>检查项</th>
<th>样式</th>
<th>功能</th>
</tr>
</thead>
<tbody>
<tr>
<td>订单状态</td>
<td><li>等待付款、支付过期、已取消等状态</li></td>
<td>&nbsp;</td>
</tr>
<tr>
<td>下单时间</td>
<td><li>建议显示完全（年月日时分秒）</li></td>
<td>&nbsp;</td>
</tr>
<tr>
<td>付款期限</td>
<td><li>建议显示完全（年月日时分秒）</li><li>样式显眼</li></td>
<td>&nbsp;</td>
</tr>
<tr>
<td>付款按钮</td>
<td><li>按钮样式，鼠标悬浮为手型</li></td>
<td><li>过期或者取消的订单无此按钮</li><li>登录状态下可以成功进入付款页面</li></td>
</tr>
<tr>
<td>取消订单</td>
<td><li>按钮样式，鼠标悬浮为手型</li></td>
<td><li>过期或者取消的订单无此按钮</li><li>登录状态下可以成功取消此订单</li></td>
</tr>
<tr>
<td>收货人</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
<td>收货地址</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
<td>联系电话</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
<td>支付方式</td>
<td>&nbsp;</td>
<td><li>微信打开只允许微信支付</li></td>
</tr>
<tr>
<td>配送方式</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
<td>商品名称</td>
<td>&nbsp;</td>
<td><li>点击跳转到对应商品</li></td>
</tr>
<tr>
<td>商品单价</td>
<td><li>确认显示价格与实际价格相同</li><li>精确到分</li></td>
<td>&nbsp;</td>
</tr>
<tr>
<td>单品数量</td>
<td><li>确认显示数量与实际选择数量相同</li></td>
<td><li>不可以调整商品数量</li></td>
</tr>
<tr>
<td>单品总价</td>
<td><li>不含运费</li><li>精确到分</li></td>
<td>&nbsp;</td>
</tr>
<tr>
<td>订单补充说明</td>
<td><li>长文字按单词换行</li></td>
<td>&nbsp;</td>
</tr>
<tr>
<td>总数量</td>
<td><li>数量准确</li></td>
<td>&nbsp;</td>
</tr>
<tr>
<td>商品总价</td>
<td><li>不含运费</li></td>
<td>&nbsp;</td>
</tr>
<tr>
<td>优惠金额</td>
<td><li>满足活动优惠金额数</li></td>
<td><li>为负值，减去的金额</li></td>
</tr>
<tr>
<td>运费</td>
<td><li>当前运费</li></td>
<td>&nbsp;</td>
</tr>
<tr>
<td>金额合计</td>
<td><li>含运费</li><li>减去优惠金额</li><li>最终支付金额</li></td>
<td>&nbsp;</td>
</tr>
</tbody>
</table>
<h3 id="-"><a name="自定义页" href="#自定义页" class="anchor"></a>自定义页</h3>
<table>
<thead>
<tr>
<th>检查项</th>
<th>样式</th>
<th>功能</th>
</tr>
</thead>
<tbody>
<tr>
<td>文字模块</td>
<td><li>页面内容（图文）显示正常，不被其他样式影响</li></td>
<td>&nbsp;</td>
</tr>
<tr>
<td>商品列表</td>
<td><li>商品列表相关显示正常（图片、名称、简介、价格等）</li></td>
<td><li>对应商品跳转链接正确</li></td>
</tr>
</tbody>
</table>
<h3 id="-"><a name="其他项" href="#其他项" class="anchor"></a>其他项</h3>
<table>
<thead>
<tr>
<th>检查项</th>
<th>样式</th>
<th>功能</th>
</tr>
</thead>
<tbody>
<tr>
<td>弹窗样式</td>
<td><li>不同尺寸屏幕下，弹窗位置正常</li><li>弹窗内容准确</li></td>
<td><li>有关闭或确定按钮，退出弹窗</li></td>
</tr>
<tr>
<td>搜索结果</td>
<td><li>无搜索结果时，显示相关无商品提示内容</li></td>
<td><li>仅搜索商品</li></td>
</tr>
<tr>
<td>在线客服</td>
<td><li>随窗口浮动</li><li>不影响正常浏览</li></td>
<td><li>可以在设置项开启并设置客服联系方式</li><li>移动端隐藏客服</li><li>能正常使用</li></td>
</tr>
<tr>
<td>回滚顶部</td>
<td><li>不影响正常浏览</li></td>
<td><li>点击窗口回滚到顶部</li><li>按钮到顶部隐藏</li><li>能正常使用</li></td>
</tr>
<tr>
<td>404界面</td>
<td><li>界面提示蓝途</li></td>
<td><li>能正常使用</li></td>
</tr>
<tr>
<td>500界面</td>
<td><li>界面提示蓝途</li></td>
<td><li>能正常使用</li></td>
</tr>
</tbody>
</table>
<h3 id="-"><a name="设置项" href="#设置项" class="anchor"></a>设置项</h3>
<table>
<thead>
<tr>
<th>检查项</th>
<th>样式</th>
<th>功能</th>
</tr>
</thead>
<tbody>
<tr>
<td>图片设置</td>
<td><li>推荐尺寸提示</li></td>
<td><li>是否显示开关</li><li>图片更换</li><li>缩略图显示</li><li>跳转链接</li></td>
</tr>
<tr>
<td>文字设置</td>
<td>&nbsp;</td>
<td><li>颜色设置</li><li>悬浮颜色设置</li><li>文字输入框</li><li>缩略图显示</li><li>跳转链接</li><li>是否显示</li></td>
</tr>
<tr>
<td>商品数量</td>
<td>&nbsp;</td>
<td><li>输入或选择每页显示商品数量</li></td>
</tr>
<tr>
<td>支付图标</td>
<td>&nbsp;</td>
<td><li>颜色设置</li><li>开启和关闭对应项设置</li></td>
</tr>
<tr>
<td>显示组件</td>
<td>&nbsp;</td>
<td><li>开启和关闭商品库存</li><li>开启和关闭已售商品</li><li>开启和关闭商品筛选</li><li>开启和关闭商品排序</li></td>
</tr>
<tr>
<td>客服</td>
<td>&nbsp;</td>
<td><li>设置客服联系方式</li><li>开启和关闭客服</li></td>
</tr>
</tbody>
</table>
<h3 id="seo-"><a name="SEO优化" href="#SEO优化" class="anchor"></a>SEO优化</h3>
<table>
<thead>
<tr>
<th>检查项</th>
<th>样式</th>
<th>功能</th>
</tr>
</thead>
<tbody>
<tr>
<td>网页标题</td>
<td><li>使用 输出</li></td>
<td>&nbsp;</td>
</tr>
<tr>
<td>网页描述</td>
<td><li>使用输出</li></td>
<td>&nbsp;</td>
</tr>
<tr>
<td>网页关键词</td>
<td><li>使用输出</li></td>
<td>&nbsp;</td>
</tr>
</tbody>
</table>
<h3 id="-"><a name="兼容性" href="#兼容性" class="anchor"></a>兼容性</h3>
<p>通用版主题必须保证兼容 IE8+ (包括 IE8 )，360 安全浏览器、搜狗浏览器、chrome、firefox 等主流浏览器的最新版本。
<br>移动版主题必须兼容手机浏览器与微信内置浏览器。</p>


</div>
</div>
        </div>
        <div v-else-if="type == 33">
            <div>
<h1>开发工具</h1>
<div class="docs-cont-inner">
<h3 id="-"><a name="简介" href="#简介" class="anchor"></a>简介</h3>
<p>此工具用于蓝途速搭主题开发，方便开发者使用喜好的编辑器进行代码编写。</p>
<h3 id="-"><a name="准备" href="#准备" class="anchor"></a>准备</h3>
<p><span>1. </span>下载工具：</p>
<ul>
<li><a href="https://asset.ibanquan.com/downloads/ThemeDevTools-v0.0.2-Win-x64.7z" title="下载蓝途速搭主题开发工具 Windows" target="_blank">Windows</a></li>
<li><a href="https://asset.ibanquan.com/downloads/ThemeDevTools-v0.0.2-Mac-x64.7z" title="下载蓝途速搭主题开发工具 Mac OS" target="_blank">Mac OS</a></li>
<li><a href="https://asset.ibanquan.com/downloads/ThemeDevTools-v0.0.2-Linux-x64.7z" title="下载蓝途速搭主题开发工具 Mac OS" target="_blank">Linux</a>
<a style="display: none;" href="https://github.com/yeezon/theme-dev-tools/releases" title="蓝途速搭主题开发工具 GitHub" target="_blank">GitHub</a></li>
</ul>
<p>若解压的 App 运行报错：</p>
<ul>
<li>可以检查压缩包 SHA-1 是否匹配，不匹配请重新下载试试；</li>
<li>若 SHA-1 匹配仍报错，试试升级/更换解压 App（如 Keka）；</li>
</ul>
<p>SHA-1:</p>
<pre><code class=" cm-s-default">ThemeDevTools-v0.0.2-Mac-x64.7z - 2f176251f6f5851a35add3c7c7f2e9891b025726
ThemeDevTools-v0.0.2-Linux-x64.7z - ecc35c34b11c73a16ead657f73bbf4314f367319
ThemeDevTools-v0.0.2-Win-x64.7z - 552218e4adcd458a828fb2c43801b7f8ba9ed214
</code></pre><p><span>2. </span>创建私有应用，获得 API Key 与 Shared Secret，步骤如下：</p>
<h3 id="-"><a name="创建私有应用" href="#创建私有应用" class="anchor"></a>创建私有应用</h3>
<p>点击菜单栏“企业服务”按钮，在企业服务页面点击“新增私有应用”按钮
<img src="https://asset.ibanquan.com/image/5acf2fcc02282e2edc00007d/s.png" alt="#创建蓝途速搭私有应用"></p>
<h3 id="-"><a name="输入私有应用信息" href="#输入私有应用信息" class="anchor"></a>输入私有应用信息</h3>
<p>输入私有应用信息后，点击“确认新增”按钮
<img src="https://asset.ibanquan.com/image/5acf306a02282e2edc000080/s.png" alt="#输入蓝途速搭私有应用名称"></p>
<h3 id="-api-key-shared-secret"><a name="获取私有应用 API Key 和 Shared Secret" href="#获取私有应用 API Key 和 Shared Secret" class="anchor"></a>获取私有应用 API Key 和 Shared Secret</h3>
<p><img src="https://asset.ibanquan.com/image/5acf30cb02282e2edc000083/s.png" alt="#查看蓝途速搭私有应用"></p>
<h3 id="-"><a name="使用" href="#使用" class="anchor"></a>使用</h3>
<p>添加店铺数据</p>
<p><img src="https://asset.ibanquan.com/image/55f281920abc3e765c0001c2/s.png" alt="#添加蓝途速搭店铺"></p>
<p>拖动 <strong>主题文件夹</strong> 到虚线域即可添加主题项目，接着 <strong>绑定店铺和主题</strong> 到此项目<br>
（若是空文件夹，会自动下载绑定主题的所有文件）</p>
<p><img src="https://asset.ibanquan.com/image/55f2819b0abc3e765c0001c5/s.png" alt="#添加主题项目，绑定蓝途速搭店铺和主题"></p>
<p>运行项目，开始开发主题</p>
<p><img src="https://asset.ibanquan.com/image/55f2846f0abc3e765c0001ce/s.png" alt="#运行蓝途速搭主题项目"></p>
<h3 id="-"><a name="功能及说明" href="#功能及说明" class="anchor"></a>功能及说明</h3>
<ul>
<li>基础功能<ul>
<li>上传主题文件<ul>
<li>本地存在，但线上不存在的主题文件会自动上传</li>
<li>图片主题文件是去除扩展名后上传的，所以注意不能重名</li>
</ul>
</li>
<li>下载主题文件<ul>
<li>线上存在，但本地不存在的主题文件会自动下载</li>
</ul>
</li>
<li>更新主题文件<ul>
<li>本地主题文件修改后，会自动更新到线上</li>
<li>若本地主题文件版本号与线上版本号不相同，不会自动更新，需要自行备份本地文件后，删除该文件，然后再运行程序，自动下载最新版本，再然后自行 Diff 做修改</li>
</ul>
</li>
<li>删除自定义主题文件<ul>
<li>工具运行时删除本地文件，才会自动同步删除线上文件<ul>
<li>非运行时删除的本地文件会自动从线上下载还原</li>
</ul>
</li>
<li>非自定义主题文件，不可删除，会自动重下载<ul>
<li>主题文件分自定义文件和系统文件</li>
<li>自定义文件在主题更新是不会被覆盖，系统文件会被覆盖</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
<li>标签功能<ul>
<li>方便开发者管理主题项目</li>
<li>对应当前标签下添加的主题项目</li>
</ul>
</li>
<li>实时刷新功能<ul>
<li>本地编辑代码后，自动刷新页面，不需手动</li>
<li>当项目运行时，点击项目条中间的 F5 图标，即可打开开发页面</li>
</ul>
</li>
</ul>
<h3 id="-"><a name="注意" href="#注意" class="anchor"></a>注意</h3>
<ul>
<li>避免双开</li>
</ul>
<h3 id="-"><a name="问题" href="#问题" class="anchor"></a>问题</h3>
<p><a href="https://lantusuda.com/about/contact" title="联系蓝途速搭" target="_blank">联系我们</a></p>


</div>
</div>
        </div>
        <div v-else-if="type == 41">
            <div>
<h1>简介</h1>
<div class="docs-cont-inner">
<h2 id="-"><a name="主题市场" href="#主题市场" class="anchor"></a>主题市场</h2>
<p>每月有超过一千商家来到蓝途速搭<a href="https://themes.lantusuda.com/" target="_blank">主题市场</a>寻找并购买他们需要的主题。赶快成为<a href="https://partners.lantusuda.com/" target="_blank">蓝途速搭开发者</a>，在主题市场销售您的主题，展现您过人的设计触觉与非凡的编码能力！</p>
<h2 id="-"><a name="高品质的主题" href="#高品质的主题" class="anchor"></a>高品质的主题</h2>
<p>蓝途速搭为确保商家挑选主题时的最佳体验，对每一套提交审核的主题与开发者都会给予充分审核与指导。独一无二的页面布局，风格鲜明，贴合顾客需求与审美的主题将会被优先上架。<a href="https://lantusuda.com/case" target="_blank">案例</a>中商家们各具特色的主题将会是不错的参考。</p>
<h2 id="-"><a name="分成模式" href="#分成模式" class="anchor"></a>分成模式</h2>
<p>蓝途速搭充分考虑开发者在主题开发过程中付出的灵感与辛劳，同时也为开发者们提供对应的服务与支持。在主题销售过程中，所有的销售所得，均以 <strong>蓝途速搭 20% / 开发者 80%</strong> 的分成模式进行。</p>
<h2 id="-"><a name="售前售后服务" href="#售前售后服务" class="anchor"></a>售前售后服务</h2>
<p>蓝途速搭给企业、商家搭建了最佳的电商快速建站服务，同时也为他们提供了完善贴心的售前售后服务。同样的作为主题市场中的服务提供方，蓝途速搭希望开发者们在销售主题时，做好服务质量的把控。高质量的售前售后服务不仅能提升后续交易的成功率，更有机会发掘用户更多深层需求。细则请参考<a href="https://docs.lantusuda.com/development/s/55a3ba650abc3e03980001dc" target="_blank">主题市场管理规范</a>。</p>


</div>
</div>
        </div>
        <div v-else-if="type == 42">
            <div>
<h1>设计指导</h1>
<div class="docs-cont-inner">
<p>本不需要用指导来限制设计师的想法，但我们还是有些东西要告诉你。</p>
<h3 id="-"><a name="主题适应的平台" href="#主题适应的平台" class="anchor"></a>主题适应的平台</h3>
<p>蓝途速搭的主题类型有：</p>
<ul>
<li>桌面端与移动端通用主题（自适应/响应式）</li>
<li>桌面端主题</li>
<li>移动端主题</li>
</ul>
<p>蓝途速搭分三个宽度断点来设计主题：</p>
<ul>
<li>640px &nbsp;（移动端）</li>
<li>1200px（桌面端）</li>
<li>1920px（桌面端）</li>
</ul>
<p>当然，你可以是其他断点。</p>
<h3 id="-"><a name="主题包含的页面" href="#主题包含的页面" class="anchor"></a>主题包含的页面</h3>
<ul>
<li>首页（必做）</li>
<li>商品列表页（必做）</li>
<li>商品详情页（必做）</li>
<li>博客列表</li>
<li>博客详情页</li>
<li>博客作者页面</li>
<li>登录页/注册页</li>
<li>我的订单</li>
<li>个人信息</li>
<li>修改密码页</li>
<li>找回密码页</li>
<li>验证邮箱页</li>
<li>弹窗样式</li>
<li>购物车页</li>
<li>提交订单页</li>
<li>订单详情页</li>
<li>个性页面（个性营销单页、关于我们、联系我们等）</li>
</ul>
<p>必做页面以外的为可选作页面，选作页面可直接使用蓝途速搭提供的基础主题界面（<a href="https://themes.lantusuda.com/view/436/style/432" target="_blank">藤煤竹</a>等）。</p>
<h3 id="-"><a name="蓝途速搭的主题可以实现所有的视觉与动效可能" href="#蓝途速搭的主题可以实现所有的视觉与动效可能" class="anchor"></a>蓝途速搭的主题可以实现所有的视觉与动效可能</h3>
<ul>
<li><a href="https://themes.lantusuda.com/" target="_blank">主题市场</a></li>
<li><a href="https://lantusuda.com/case" target="_blank">案例店铺</a></li>
</ul>
<h3 id="-"><a name="一些建议" href="#一些建议" class="anchor"></a>一些建议</h3>
<ul>
<li>Icon 建议 SVG 化，如果要考虑低端浏览器，建议字体化（IconFont）</li>
<li>界面样式尽量可以设置<ul>
<li>设置项越灵活越条理越好</li>
<li>请参考主题市场中官方主题的设置项</li>
</ul>
</li>
</ul>
<h3 id="-"><a name="如果您想销售您的主题" href="#如果您想销售您的主题" class="anchor"></a>如果您想销售您的主题</h3>
<p>可移步至 <a href="https://docs.lantusuda.com/development/56d6b1ef0abc3e7f20000066" target="_blank">如何销售主题</a></p>


</div>
</div>
        </div>
        <div v-else-if="type == 43">
            <div>
<h1>全新主题上架</h1>
<div class="docs-cont-inner">
<p><img src="https://asset.ibanquan.com/image/55b49aa40abc3e56eb0000c3/s.png" alt="#全新主题商家流程"></p>


</div>
</div>
        </div>
        <div v-else-if="type == 44">
            <div>
<h1>主题版本更新</h1>
<div class="docs-cont-inner">
<p><img src="https://asset.ibanquan.com/image/55b4a3560abc3e56eb0000d2/s.png" alt="#主题版本更新流程"></p>


</div>
</div>
        </div>
        <div v-else-if="type == 45">
            <div>
<h1>主题规范列表</h1>
<div class="docs-cont-inner">
<h2 id="-"><a name="代码要求" href="#代码要求" class="anchor"></a>代码要求</h2>
<ol>
<li><p>主题的文件结构及其包含的所有文件，必须符合主题开发文档中<a href="/development/s/546c8d2ee2931e3846000001">模板文件</a>的要求。</p>
</li>
<li><p>主题设置的内容，必须符合主题开发文档中<a href="/development/s/546c8d2ee2931e3846000001">主题设置开发（暂缺）</a>的要求。</p>
</li>
</ol>
<h2 id="-"><a name="必须要求" href="#必须要求" class="anchor"></a>必须要求</h2>
<ol>
<li><p>通用版主题必须注明布局是否为响应式设计。移动版主题则必须为响应式设计，以适配不同的屏幕尺寸。</p>
</li>
<li><p>为所有出现富文本编辑器生成的内容提供样式。例如自定义页面，商品详情、博客文章等。</p>
</li>
<li><p>通用版主题必须保证兼容 IE8+ (包括 IE8 )，360 安全浏览器、搜狗浏览器、chrome、firefox 等主流浏览器的最新版本。移动版主题必须兼容手机浏览器与微信内置浏览器。</p>
</li>
<li><p>主题必须提供一个示例店面（开发版）。示例店面必须保持使用当前主题的最新版本。</p>
</li>
<li><p>主题中引用的资源，必须为本主题的 ASSET 文件夹内的内容，或者其他可靠的 CDN 服务。</p>
</li>
<li><p>主题必须能完成交易流程。</p>
</li>
<li><p>通用主题必须完整支持店铺后台配置的所有支付方式。仅供微信的主题可仅支持微信支付。</p>
</li>
<li><p>主题必须完整支持 SEO 内容与选项。</p>
</li>
</ol>
<h2 id="-"><a name="推荐要求" href="#推荐要求" class="anchor"></a>推荐要求</h2>
<ol>
<li><p>主题完整支持三级菜单。</p>
</li>
<li><p>主题支持商品排序。</p>
</li>
</ol>


</div>
</div>
        </div>
        <div v-else>
<div>
<h1>主题市场管理规范（草案）</h1>
<div class="docs-cont-inner">
<h2 id="-"><a name="概述" href="#概述" class="anchor"></a>概述</h2>
<ol>
<li>在蓝途速搭主题市场提供收费/免费主题的设计师（或开发者等，以下简称「设计师」）均受此规则约束。</li>
<li>设计师在蓝途速搭主题市场（以下简称「市场」）上的任何行为，包括但不局限于主题开发、上传、发布和交易，均应遵守国家法律、行政法规、蓝途速搭服务条款（<a href="https://lantusuda.com/privacy_policy">https://lantusuda.com/privacy_policy</a>）等规范性文件。对任何涉嫌违反国家法律、行政法规、蓝途速搭服务条款的行为，本规则已有规定的，适用本规则；本规则尚无规定的，市场有权酌情处理。但蓝途速搭对设计师的处理不免除其应尽的法律责任。</li>
<li>蓝途速搭有权随时变更本规则并在网站上予以公告。若设计师不同意相关变更，应立即停止使用蓝途速搭的相关服务或产品。</li>
<li>本规则由蓝途速搭主题市场负责实施。</li>
</ol>
<h2 id="-"><a name="管理规范" href="#管理规范" class="anchor"></a>管理规范</h2>
<h3 id="-"><a name="主题制作规范" href="#主题制作规范" class="anchor"></a>主题制作规范</h3>
<ol>
<li>主题禁止使用任何未经授权的字体、图片、商标以及发布国家明令禁止的图片和言论。</li>
<li>严禁抄袭行为，包括但不限于文案、设计和代码。</li>
<li>主题信息/内容不得出现虚假、夸大、误导消费者的信息。</li>
<li>主题开发过程中，需充分考虑用户体验、整体美感和加载速度。</li>
<li>使用主题的多配色功能来实现相同主题的多种色彩风格搭配。</li>
</ol>
<h3 id="-"><a name="主题销售规范" href="#主题销售规范" class="anchor"></a>主题销售规范</h3>
<ol>
<li>主题销售和服务工作不得扰乱市场的正常秩序。</li>
<li>市场所有主题的售价不得低于 20 元/月、200元/永久。</li>
<li>市场所有主题必须通过市场线上交易，切实保障用户权益。</li>
<li>市场倡导设计原创、规范经营、良性竞争。如果设计师在市场发现自己的权益受到侵害，请以实名方式以「主题盗版申诉」为标题发送邮件到 <a href="mailto:support@lantusuda.com">support@lantusuda.com</a> 进行维权，内容中必须包含盗版主题的链接、自己主题的链接，盗版效果对比图，同时请指出盗版和违规的地方。</li>
</ol>
<h3 id="-"><a name="主题服务规范" href="#主题服务规范" class="anchor"></a>主题服务规范</h3>
<ol>
<li><h4 id="-">主题升级与支持</h4>
<ul>
<li>修复 BUG；</li>
<li>优化升级原有功能/样式；</li>
<li>保持主题符合<a href="/development/s/55b339150abc3e56eb000094">主题规范列表</a>;</li>
<li>增加新功能/样式。</li>
</ul>
</li>
<li><h4 id="-">人工服务</h4>
<p>设计师必须提供服务范围内的无条件服务。必须在 48 小时内响应用户（法定节假日除外），5 个工作日内给予解决方案并落实。服务范围如下：</p>
<ul>
<li>主题售前咨询服务；</li>
<li>解答用户对主题相关的各类疑问；</li>
<li>修复主题 BUG，包括发布新版本修复与紧急为单个客户修复；</li>
<li>收到市场的相关通知后及时响应。</li>
</ul>
</li>
</ol>


</div>
</div>
        </div>

    </div>
</template>
<script>
export default {
  props: {
    type: Number
  }
};
</script>
<style lang="scss" scoped>
    .lt-help{
        img{
            max-width: 100%;
        }
        p{
            font-size: 14px;
            margin: 10px auto;
        }
        ol,ul{
            padding-left: 30px;
            margin: 10px auto;
            li{
                font-size: 14px;
                margin: 10px auto;
            }
        }
        h1{
            font-size: 23px;
            margin: 30px auto;
        }
        h2,h3,h4,h5{
            font-size: 18px;
            margin: 30px auto;
        }
    }
</style>
