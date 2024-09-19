import { Application } from "https://deno.land/x/oak/mod.ts";

const app = new Application();

app.use((ctx) => {
  // ctx.response.status = 404
  console.log('url=', ctx.request.url)
  let pathname = ctx.request.url.pathname
  if (pathname == '/') {
    ctx.response.body =
     `<html>
<head>
<style>
* {
  margin: 0;
  padding: 0;
}
div {
 width: 10px;
  height: 100vh;
  background: white;
  transition: width 1s;
}

.expanded {
  width: 100px;
}
</style>
</head>
<body>


<h1>クマの自己紹介 </h1>

<p>打開連結將會更多資訊</p>
<button onclick="button()">＼＼＼</button>
<div id="myDiv"> 
  <ol>
<li><a href="/name">なまえわ？</a></li>
<li><a href="/age">何歳ですが？</a></li>
<li><a href="/gender">性別は何ですか？</a></li>
</ol>
</div>
<script>
function button() {
  var element = document.getElementById("myDiv");
  element.classList.toggle("expanded");
}
</script>

</body>
</html>
`
  } else if (pathname == '/name') {
    ctx.response.body = '卡皮巴拉·畇蓁'
  } else if (pathname == '/age') {
    ctx.response.body = '350'
  } else if (pathname == '/gender') {
    ctx.response.body = 'normal'
  } else {

  }
  // ctx.response.body = 'Not Found!'
});

console.log('start at : http://127.0.0.1:8000')
await app.listen({ port: 8000 })
