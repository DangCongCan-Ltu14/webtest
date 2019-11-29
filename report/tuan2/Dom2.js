"use strict";
let System = Java.type("java.lang.System");
load(System.getenv("WEBTEST") + "/jsource/dom/node.js");
// cd /home/dccan/app/code/workspace/webtest/jsource/dom
// jjs -cp /home/dccan/Desktop/web.jar --language=es6 Dom2.js
var k = System.currentTimeMillis();
{
	let Document = function (ap)
	{
		this.node = ap ;
		this.createElement = function (d)
		{
			let np = new _Node();
			np.nodeType  = 3;
			np.nodeName = d;
			np.tag = d ;
			return np ;
		}
		this.createTextNode = function (d)
		{
			return new _text(d);
		}
		this.createAttribute = function (d)
		{
			let np = new _attr();
			np.nodeName = d ;
			return np ;
		}
		this.createComment = function (d)
		{
			let np = new _Node();
			np.nodeName ="#comment" ;
			np.tag = "#comment";
			np.nodeValue = d;
			return np ;
		}
	}
	var DOMParser = function() {
		//let doc  ;
		this.praseFile = function() {
			System.gc();
			let Get = Java.type("webtest.dom.Praser");
			let d = Get.getFile("/home/dccan/Desktop/book.xml");
			let np = new _Node();
			let al = Get.getNode(d);
			//doc = new Document(np);
			tree(al, np);
			np._config();
			return np;
		}
		let tree = function(el, np) {
			let lp = el.childNodes();
			let lps = el.attributes().asList();
			let d = lps.size();
			let i;
			if (d > 0) {

				for (i = 0; i < d; i++) {
					let e = lps.get(i);
					let attr = new _attr(e.getKey(), e.getValue());
					np.setAttributeNode(attr);
				}
			}

			np.tag = el.nodeName();
			np.nodeName = el.nodeName();
			if (el.nodeName() == "#text") {
				np.nodeValue = el.toString();
				np.nodeType = 3;
			} else if (el.nodeName() == "#comment") {
				np.nodeType = 2;
			} else if (el.nodeName() == "#cdata") {
				np.nodeType = 4;
			} else {
				np.nodeType = 1;// / elements
			}

			if (lp != null) {
				d = lp.size();
				for (i = 0; i < d; i++) {
					let nd = np._createnode();
					tree(lp.get(i), nd);
				}
			}
		}
	}
}

var parser = new DOMParser();
var doc = parser.praseFile();
var x = doc.getElementsByTagName("title")[0].childNodes[0];
var txt = x.nodeValue;
print(txt);
k = System.currentTimeMillis() - k;
print("k= " + k);
