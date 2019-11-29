"use strict";
{
	let System = Java.type("java.lang.System");
	let _JGet = Java.type("webtest.dom.Praser");
	// load(System.getenv("WEBTEST") + "/jsource/dom/node.js");
	let Extract = Java.type("webtest.query.Extract");
	let nelement = 3;
	let ntext = 1;

	let attr = function(a) {
		let dname = a;// .toLowerCase();
		// this.value = b;
		this.specified = true;
		Object.defineProperty(this, "name", {
			value : dname
		});
		this.isId = function() {
			return name == "id";
		}
	}
	var _makeAtt = function() {
		let attributes = [];
		attributes.getNamedItem = function(d) {
			let l = this.length;
			let i;
			for (i = 0; i < l; i++) {
				if (this[i].name == d)
					return this[i];
			}
			return null;
		}
		attributes.item = function(d) {
			return this[d];
		}
		attributes.removeNamedItem = function(d) {
			let k = this.length;
			let i;
			for (i = 0; i < k; i++) {
				if (this[i].name == d) {
					this.splice(i, 1);
					return;
				}
			}
		}
		attributes.setNamedItem = function(d) {
			let k = this.length;
			let i;
			for (i = 0; i < k; i++) {
				if (this[i].name == d.name) {
					this[i] = d;
					return;
				}
			}
			this[k] = d;
		}
		attributes.toString=function()
		{
			let s="";
			let lg = this.length ;
			for(let i =0;i<lg;i++)
			{
				s=s+this[i].name+" = "+this[i].value+" ";
			}
			return s;
		}
		return attributes;
	}
	let Clist = function(ele) {
		let link = ele;
		let ctain = function(list, p) {
			for ( let i in list) {
				if (list[i].equals(p))
					return true;
			}
			return false;
		}
		this.add = function() {
			let d = Array.prototype.slice.call(arguments);
			let cl = link.getAttributeNode("class");
			if (cl == undefined)
				return;
			let dh = cl.value;
			let list = dh.split(" ");
			for ( let z in d) {
				let h = d[z];
				if (typeof (h) == "string" && (!ctain(list, h))) {
					dh = dh + " " + h;
				}
			}
			cl.value = dh;
		}

		this.contains = function(d) {
			let cl = link.getAttribute("class").split(" ");
			return ctain(cl, d);
		};
		this.item = function(i) {
			let cl = link.getAttributeNode("class");
			if (cl == undefined)
				return;
			let p = cl.value.split(" ");
			if (i < p.length)
				return p[i];
			return null;
		}
		this.remove = function() {

			let cl = link.getAttributeNode("class");
			if (cl == undefined)
				return;
			let d = Array.prototype.slice.call(arguments);
			let p = cl.value.split(" ");
			let lg = p.length;
			let txt = "";
			for ( let i in p) {
				if (!cmp(p[i], d)) {

					txt = txt + p[i] + " ";

				}
			}
			cl.value = txt.trim();
		};
		let cmp = function(a, b) {
			for ( let i in b) {
				if (a == b[i])
					return true;
			}
			return false;

		}
		this.toString = function() {
			let cl = link.getAttribute("class");
			return cl;
		}
		let lg = function() {
			let cl = link.getAttributeNode("class");
			if (cl == undefined)
				return 0;
			var p = cl.value.split(" ").length;
			return p;
		}
		Object.defineProperty(this, "length", {
			get : lg
		});
		// Object.defineProperty(this, this, {
		// 	get : function()
		// 	{
		// 		return this ;
		// 	},
		// 	set : function(d)
		// 	{
		// 		ele.setAttribute("class",d);
		// 	}
		// });
	}
	let textnode = function(a) {
		this.nodeValue = a;
		this.nodeName = "#text";
		this.nodeType = ntext;
	}

	var _document = function() {
		this.createElement = function(d) {
			let p = new element(d, nelement);
			return p;
		}
		this.createAttribute = function(d) {
			let p = new attr(d);
			return p;
		}
		this.createTextNode = function(d) {
			let p = new textnode(d);
			return p;
		}
		this._tree =function(ele,node)
		{
			let lps = ele.attributes().asList();
			if (lps.size()>0) {
				//print(node.nodeName)
				node.attributes =_makeAtt() ;
				for (let i in lps) {
					let la = lps.get(i);
					let k = document.createAttribute(la.getKey());
					if(!la.getValue().equals(""))
					{
						k.value = la.getValue();
					}
					node.attributes[i]=k;
				}
				node._classList=new Clist(node);
			}
			let lp = ele.childNodes();
			if(lp.size()>0)
			{
				for (let i in lp)
				{
					let ln = lp.get(i);
					let z ;
					if(ln.nodeName().equals("#text")||ln.nodeName().equals("#data"))
					{
						z= this.createTextNode(ele.outerHtml()) ;
					}
					else
					{
						z=this.createElement(ln.nodeName());
						this._tree(ln,z);
					}
					node.appendChild(z);
				}
			}
		}
	}
	var document = new _document() ;
	
	let element = function(_name, _type) {

		let nName = _name.toLowerCase();
		let nType = _type;
		let tag = nName.toUpperCase();
		this._state = false;
		this.contenteditable = false;
		this.namespaceURI = "http://www.w3.org/1999/xhtml ";
		this.clientWidth = 10;
		this.clientHeight = 10;
		this.clientTop = 1;
		this.clientLeft = 1;
		this.QuerySelector = function(d) {
			let list = [];
			let code = Extract.list(d);
			this._query(list, code, true);
			return list[0];
		}
		this.QuerySelectorAll= function(d) {
			let list = [];
			let code = Extract.list(d);
			this._query(list, code, false);
			return list;
		}
		this._query = function(list, code, qa) {
			if (qa) {
				if (list.length > 0)
					return;
			}
			let gl = this._duyet(code);

			for ( let i in gl) {
				let h = code.get(i);
				if (gl[i]) {
					if (this._checkQ(h, h.length() - 1, h.pnode()))
						list[list.length] = this;
				}
			}

			if (this.firstElementChild != null)
				this.firstElementChild._query(list, code, qa);
			if (this.nextElementSibling != null)
				this.nextElementSibling._Squery(list, gl, code, qa);

		}
		this._Squery = function(list, gl, code, qa) {
			if (qa) {
				if (list.length > 0)
					return;
			}
			for ( let i in gl) {
				let h = code.get(i);
				if (gl[i]) {
					if (this._checkQ(h, h.length() - 1, h.pnode()))
						list[list.length] = this;
				}
			}
			if (this.firstElementChild != null)
				this.firstElementChild._query(list, code, qa);
			if (this.nextElementSibling != null)
				this.nextElementSibling._Squery(list, gl, code, qa);
		}
		this._duyet = function(code) {
			let list = [];
			let lg = code.length();
			for (let i = 0; i < lg; i++) {
				let ele = code.get(i);
				list[i] = this._checkQ(ele, ele.pnode(), 0); // duyet den goc
			}
			return list;
		}
		this._checkQ = function(ele, d, gt) {
			let pice = ele.get(d);
			print("com pare "+_compare(pice))
			if (!_compare(pice)) {

				let h = pice.op;
				if (h.equals(" ")) {
					if (this.parentElement == null){
						print("sdfgh");
						return false;
					}
					else
						return this.parentElement._checkQ(ele, d, gt);
				} else if (h.equals("~")) {
					if (this.previousElementSibling == null)
					{
						print("next error");
						return false;
					}
					else
						return this.previousElementSibling._checkQ(ele, d, gt);
				}
				h = ele.get(d - 1).op;
				if (d > gt) {

					if (h.equals(" ")) {
						if (this.parentElement == null) {
							print("nex error") ;
							return false;
						}
						else
							return this.parentElement._checkQ(ele, d, gt);
					} else if (h.equals("~")) {
						if (this.previousElementSibling == null)
						{
							print("h next")
							return false;
						}
						else
							return this.previousElementSibling._checkQ(ele, d,gt);
					}
				}
				return false;
			} else {
				if (d == gt)
					return true;
				if (d > gt) {
					let h = ele.get(d - 1).op;
					if (h.equals(" ") || h.equals(">")) {
						if (this.parentElementNode == null){
							print("equals node");
							return false;
						}
						else
							return this.parentElementNode._checkQ(ele, d - 1, gt);
					} else if (h.equals("~") || h.equals("+")) {
						if (this.previousElementSibling == null)
						{
							print("pre false")
							return false;
						}
						else
							return this.previousElementSibling._checkQ(ele,d - 1, gt);
					}
					return false
				} else
				return false;
			}
		}
		let _compare = function(pice) {
			if (!nName.equals(pice.name))
			{
				print("do ten")
				return false;
			}
			let h = pice.length();
			let i = 0;
			while (i < h) {
				let p = pice.get(i);
				if (p.equals("#")) {
					i = i + 1;
					let z = pice.get(i);
					if (!this.id.equals(z)){
						print("do id")
						return false;
					}
					i = i + 1;
				} else if (p.equals("[")) {
					i = i + 1;
					while (i < h) {

						let a = pice.get(i);
						i = i + 1;
						let op = pice.get(i);
						i = i + 1;
						let b = pice.get(i);
						i = i + 1;
						if (!Extract.qCompare(a, b, op))
							return false;
						if (pice.geti(i).equals("]"))
							break;
					}
				} else if (p.equals(".")) {
					i = i + 1;
					let dot = pice.get(i);
					if(this._classList==null){
						print("do class")
						return false ;
					}
					if (!this._classList.contains(dot)){
						print("ko chua class")
						return false;
					}
					i = i + 1;
				} else if (p.equals(":")||p.equals("::")) {
					i = i + 1;

					i = i + 1;
				}
			}
			return true;
		}
		
		this.setAttribute = function(a, b) {
			if (this.attributes == null) {

				this.attributes = new _makeAtt();
			}
			let k = this.attributes.length;
			let s = a.toLowerCase();
			for ( let att in this.attributes) {
				if (this.attributes[att].name == s) {
					this.attributes[att].value = b;
					return;
				}
			}
			this.attributes[k] = new attr(s);
			this.attributes[k].value = b;
		}
		var getclassName = function() {
			return this.getAttribute("class");
		}
		var setclassName = function(d) {
			this.setAttribute("class", d);
		}
		Object.defineProperty(this, "className", {
			get : getclassName,
			set : setclassName
		});
		Object.defineProperty(this, "classList", {
			get : function() {
				return this._classList;
			},
			set : setclassName
		})
		var getTabindex = function() {
			return this.getAttribute("tabindex");
		}
		var setTabindex = function(d) {
			this.setAttribute("tabindex", d);
		}
		var getTitle = function() {
			return this.getAttribute("title");
		}
		var setTitle = function(d) {
			this.setAttribute("title", d);
		}
		Object.defineProperty(this, "title", {
			get : getTitle,
			set : setTitle
		});
		var getStyle = function() {
			return this.getAttribute("style");
		}
		Object.defineProperty(this, "style", {
			get : getStyle
		});
		var getLang = function() {
			return this.getAttribute("lang");
		}
		var setLang = function(d) {
			this.setAttribute("lang", d);
		}
		Object.defineProperty(this, "lang", {
			get : getLang,
			set : setLang
		});
		this.getElementsByTagName = function(d) {
			let list = [];
			let p = d.toUpperCase();
			this._findtag(p, list);
			return list;
		}
		this._findtag = function(d, list) {

			if (tag == d)
				list[list.length] = this;
			for ( let i in this.children) {
				this.children[i]._findtag(d, list);
			}
		}
		this.getElementsByClassName = function(d) {
			let ret = [];
			this._findclass(ret, d);
			return ret;
		}
		this._findclass = function(arr, cl) {
			if (this.getAttribute("class") == cl)
				arr[arr.length] = this;
			for ( let i in this.children) {
				this.children[i]._findclass(arr, cl);
			}
		}
		var getId = function() {
			return this.getAttribute("id");
		}
		var setId = function(d) {
			this.setAttribute("id", d);
		}
		Object.defineProperty(this, "id", {
			get : getId,
			set : setId
		});
		this.getAttribute = function(d) {
			for ( let p in this.attributes) {
				if (this.attributes[p].name == d) {
					return this.attributes[p].value;
				}
			}
		}
		this.getAttributeNode = function(d) {
			let la = d.toLowerCase();
			for ( let p in this.attributes) {
				if (this.attributes[p].name == la) {
					return this.attributes[p];
				}
			}
		}
		this.hasAttribute = function(p) { // ok

			let d = p.toLowerCase();
			for ( let i in this.attributes) {
				if (d == this.attributes[i].name)
					return true;
			}
			return false;
		}
		this.hasAttributes = function() { // ok
			return this.attributes.length > 0;
		}
		var getinnerText = function() {
			let ret;
			if (this.nodeType == ntext)
				ret = nodeValue;
			else {
				for ( let s in this.childNodes) {
					if (this.childNodes[s].style.display != "none")
						ret = ret + this.childNodes[s].innerText;
				}
			}
			return ret;
		}
		var getTextContent = function() {
			var ret;
			if (this.nodeType == ntext)
				ret = nodeValue;
			else {
				for ( let s in this.childNodes) {
					ret = ret + this.childNodes[s].innerText;
				}
			}
			return ret;
		}
		var setinnerText = function(d) {

			this.childNodes.splice(0, this.childNodes.length);
			this.children.splice(0, this.children.length);
			this.lastChild = null;
			this.lastElementChild = null;
			this.firstChild = null;
			this.firstElementChild = null;
			let s = new textnode(d);
			this.childNodes[0] = s;
			this.firstChild = s;
			this.firstChild = s;

		}
		Object.defineProperty(this, "textContent", {
			get : getTextContent,
			set : setinnerText
		});
		Object.defineProperty(this, "innerText", {
			get : getinnerText,
			set : setinnerText
		});
		var getinnerhttp = function() {
			let ret="";
			for ( let s in this.childNodes) {
				if (this.childNodes[s].nodeType == nelement)
				{
					
					ret = ret +"<" + this.childNodes[s].nodeName + ">";
					ret = ret + this.childNodes[s].innerHTML;
					ret = ret+"</" + this.childNodes[s].nodeName + ">";
				}
				else
				{
					ret =ret + this.childNodes[s].nodeValue ;
				}
			}

			
			return ret;

		}
		var setinnerhtml = function(d) {
			this.childNodes.splice(0, this.childNodes.length);
			this.children.splice(0, this.children.length);
			this.lastChild = null;
			this.lastElementChild = null;
			this.firstChild = null;
			this.firstElementChild = null;
			
			let node = _JGet.pInner(d);
			document._tree(node, this);

		}
		Object.defineProperty(this, "innerHTML", {
			get : getinnerhttp,
			set : setinnerhtml
		});
		this.isEqualNode = function(d) {
			return this.innerHTML == d.innerHTML
		}
		this.isSameNode = function(d) {
			return this == d;
		}
		this.hasChildNodes = function() {
			return this.childNodes > 0;
		}
		this.replaceChild = function(a, b) {
			let l = this.children.length;
			let i;
			for (i = 0; i < l; i++) {
				if (this.children[i] == d) {

					break;
				}
			}
			if (i < l) {
				b.nextElementSibling = this.children[i].nextElementSibling;
				b.nextSibling = this.children[i].nextSibling;
				b.previousElementSibling = this.children[i].previousElementSibling;
				b.previousSibling = this.children[i].previousSibling;
				b.parentNode = this;
				b.previousElementSibling = this;
				this.children[i] = b;
			}
		}
		this.removeChild = function(d) {
			rmElement(d);
			rmNode(d);
		}
		this.remove = function() {
			rmNode(d);
			if (d.nodeType == nelement)
				rmElement(d);

		}
		let rmElement = function(d) {
			let l = this.children.length;
			let i;
			for (i = 0; i < l; i++) {
				if (this.children[i] == d) {

					break;
				}
			}
			if (i < l) {
				this.children.splice(i, 1);
				this.childElementCount = l - 1;
				if (i == l - 1) // o cuoi
				{
					if (l > 2)
						this.children[i - 1].nextElementSibling = null;
				} else {
					if (i > 1) {
						this.children[i - 1].nextElementSibling = this.children[i];
						this.children[i].previousElementSibling = this.children[i - 1];
					} else {
						this.children[i].previousElementSibling = null;
					}

				}

			}
		}
		let rmNode = function(d) {
			let l = this.childNodes.length;
			let i;
			for (i = 0; i < l; i++) {
				if (this.childNodes[i] == d) {

					break;
				}
			}
			if (i < l) {
				this.childNodes.splice(i, 1);
				if (i == l - 1) // o cuoi
				{
					if (l > 2)
						this.childNodes[i - 1].nextSibling = null;
				} else {
					if (i > 1) {
						this.children[i - 1].nextSibling = this.children[i];
						this.children[i].previousSibling = this.children[i - 1];
					} else {
						this.children[i].previousSibling = null;
					}

				}

			}
		}
		this.appendChild = function(d) {
			d.parentNode = this;
			if (this.nodeType == nelement)
				d.parentElement = this;
			if (this.childNodes == null) {
				this.childNodes = [];
				this.children = [];
			}
			let l = this.childNodes.length;
			this.childNodes[l] = d;
			if (l == 0) {
				this.firstChild = d;
			} else {
				this.lastChild = d;
				d.previousSibling = this.childNodes[l - 1];
				this.childNodes[l - 1].nextSibling = this.childNodes[l];
			}
			if (d.nodeType == nelement) {

				l = this.children.length;
				this.children[l] = d;
				if (l == 0) {
					this.firstElementChild = d;
				} else {
					this.lastElementChild = d;
					d.previousElementSibling = this.children[l - 1];
					this.children[l - 1].nextElementSibling = this.children[l];
				}
				this.childElementCount = l + 1;
			}
		}

		this.click = function() {
			this._state = !this._state;
		}

		// event = [] ;
		this.insertAdjacentElement = function(str, p) {
			// chua ho tro
		}
		this.addEventListener = function(a, b) {

		}
		var getTagName = function() {
			return tag;
		}
		Object.defineProperty(this, "tagName", {
			get : getTagName
		});

		let getNodeName = function() {
			return nName;
		}
		Object.defineProperty(this, "nodeName", {
			get : getNodeName
		});
		var getnodeType = function() {
			return nType;
		}

		Object.defineProperty(this, "nodeType", {
			get : getnodeType
		});

		let d = 10;
	}
}

