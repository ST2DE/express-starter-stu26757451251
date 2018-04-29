
----
### 應用程式產生器 Express generator

``` bash
npm install express-generator -g
```

``` bash
express -h
```

----

``` bash
express --view=pug another_app
cd another_app
npm install
```

*http://expressjs.com/zh-tw/starter/generator.html

----

### route structure (route 的結構)

app.method(path, handler);

* `app` is an instance of express
* `method` is an HTTP request method, in lowercase
* `path` is a path on the server (URI)
* `handler` is the function executed when the route is matched

----

### route example 

``` javascript
app.get('/', function (req, res) {
  res.send('Hello World!');
});
```

``` javascript
app.post('/', function (req, res) {
  res.send('Got a POST request');
});
```

---

####重要!!! : 
	Var app = Express() (開啟express的開關)

	Middleware:::
	App.use will execute every route
	App.use 一定要先使用到，在你使用任何 get.之前	
	而且app.use 和在程式碼的順序有絕對的關係

