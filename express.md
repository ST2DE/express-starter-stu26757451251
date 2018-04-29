
----
### ���ε{�����;� Express generator

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

### route structure (route �����c)

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

####���n!!! : 
	Var app = Express() (�}��express���}��)

	Middleware:::
	App.use will execute every route
	App.use �@�w�n���ϥΨ�A�b�A�ϥΥ��� get.���e	
	�ӥBapp.use �M�b�{���X�����Ǧ����諸���Y

