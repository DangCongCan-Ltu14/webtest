"use strict";
let System = Java.type("java.lang.System");
load(System.getenv("WEBTEST") + "/jsource/dom/node.js");
var k=System.currentTimeMillis();
{
	// cd /home/dccan/app/code/workspace/webtest/jsource/dom
//	let System = Java.type("java.lang.System");
//	load(System.getenv("WEBTEST") + "/jsource/dom/node.js");
	var DOMParser=function () {
		this.praseFile = function()
		{
			let Get = Java.type("webtest.dom.Praser");
			let d = Get.getFile("/home/dccan/Desktop/book.xml");
			let np=new _Node();
			let al  = Get.getNode(d);
			tree(al,np);
			np._config();
			return np ;
		}
		let tree = function(el, np) {
			let lp = el.childNodes();
			let lps = el.attributes().asList();
			let d = lps.size();
			let i;
			if (d>0) {
				
				for (i = 0; i < d; i++) {
					let e = lps.get(i);
					let attr = new _attr(e.getKey(), e.getValue());
					np.setAttributeNode(attr);
				}
			}
			
			np.tag=el.nodeName();
			np.nodeName = el.nodeName();
			if( el.nodeName()=="#text")
				np.nodeValue = el.toString();

			if(lp!=null)
			{
				d=lp.size() ;
				for (i=0;i<d;i++) {
					let nd=np._createnode() ;
					tree(lp.get(i),nd);
				}
			}
		}
	}
}

var parser = new DOMParser();
var doc = parser.praseFile() ;
var x= doc.getElementsByTagName("book")[0];
var p=x.parent;
p.removeChild(x);
print(doc.getElementsByTagName("book").length);
k=System.currentTimeMillis()-k;
print("k= "+k);
