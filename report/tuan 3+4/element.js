"use strict";
let System = Java.type("java.lang.System");
let _JGet = Java.type("webtest.dom.Praser");
// load(System.getenv("WEBTEST") + "/jsource/dom/node.js");
{
	load(System.getenv("WEBTEST") + "/jsource/dom/Dom2.js");
	let nelement = 3;
	let ntext = 1;

	let attr = function(a,b) {
		var name =a ;//.toLowerCase();
		this.value = b;
		this.specified = true;
		Object.defineProperty(this,"name",{value : name }) ;
		this.isId= function()
		{
			return name == "id" ;
		}
	}
	let textnode = function(a) {

		this.nodeValue = a;
		this.nodeName = "#text";
		this.nodeType = ntext;
		this.parentNode = null;
		this.parentElementNode = null;
		this.nextSibling = null;
		this.nextElementSibling = null;
		this.previousSibling = null;
		this.previousElementSibling = null;
	}
	let element = function(_name, _type) {
		this.offsetParent = "no need";
		this.testDiv.offsetTop = "no need";

		this.nodeValue;
		let nName = _name.toLowerCase();
		let nType = _type;

		let tag = nName.toUpperCase();
		// this.innerHTML;// luu thong tin text
		this.accessKey; // khong can thiet
		this.attributes = [];
		this.className;
		this.classList;
		this._state = false;
		this.id;
		// this.innerText; // giong node value
		this.contenteditable = false;
		this.namespaceURI = "http://www.w3.org/1999/xhtml ";
		// this.lang ; add in <p> element
		// css
		this.clientWidth = 10;
		this.clientHeight = 10;
		this.clientTop = 1;
		this.clientLeft = 1;
		// node
		this.childNodes = [];
		this.childElementCount = 0;
		this.children = [];
		this.parentNode = null;
		this.parentElementNode = null;
		this.nextSibling = null;
		this.nextElementSibling = null;
		this.lastChild = null;
		this.lastElementChild = null;
		this.firstChild = null;
		this.firstElementChild = null;
		this.previousSibling = null;
		this.previousElementSibling = null;

		var _addAttr = function(a,b)
		{
			let k = this.attributes.length ;
			for( let att in this.attributes)
			{
				if(att.name ==a) 
				{
					att.value = b ;
					return ;
				}
			}
			this.attributes[k]= new attr(a,b);
		}
		var getTabindex = function()
		{
			return this.getAttribute("tabindex");
		}
		var setTabindex = function(d)
		{
			_addAttr("tabindex",d);
		}
		var getTitle = function()
		{
			return this.getAttribute("title");
		}
		var setTitle = function(d)
		{
			_addAttr("title",d);
		}
		Object.defineProperty(this,"title",{ get:getTitle , set : setTitle }) ;
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
			_addAttr("lang",d);
		}
		Object.defineProperty(this, "lang", {
			get : getLang,
			set : setLang
		});
		this.getElementsByTagName = function(d) {
			let list = [];
			let p = d.toUpperCase();
			return list;
		}
		this._findtag = function(d, list) {
			if (tag == d)
				list[list.length] = this;
			for ( let i in this.children) {
				i._findclass(d, list);
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
				i._findclass(arr, cl);
			}
		}
		var getId = function() {
			return this.getAttribute("id");
		}
		var setId = function(d) {
			_addAttr("id",d);
		}
		Object.defineProperty(this, "id", {
			get : getId,
			set : setId
		});
		this.getAttribute = function(d) {
			for ( let p in this.attributes) {
				if (p.name == d) {
					return p.value;
				}
			}
		}
		this.getAttributeNode = function(d) {
			for ( let p in this.attributes) {
				if (p.name == d) {
					return p;
				}
			}
		}
		this.hasAttribute = function(d) {
			for ( let i in this.attributes) {
				if (d == i)
					return true;
			}
			return false;
		}
		this.hasAttributes = function() {
			return this.attributes.length > 0;
		}
		var getinnerText = function() {
			var ret;
			if (this.nodeType == ntext)
				ret = nodeValue;
			else {
				for ( let s in this.childNodes) {
					if (s.style.display != "none")
						ret = ret + s.innerText;
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
					ret = ret + s.innerText;
				}
			}
			return ret;
		}
		var setinnerText = function(d) {

			this.childNodes.splice(0, this.childNodes.length);
			this.children.splice(0, this.children.length);
			// this.lastChild = null;
			this.lastElementChild = null;
			// this.firstChild = null;
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
			let ret;
			if (this.nodeType != nelement)
				ret = this.nodeValue;
			else {
				ret = "<" + this.nodeName + ">";
				for ( let s in this.childNodes) {
					ret = ret + s.innerHTML;
				}
				ret = "</" + this.nodeName + ">";
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
			_tree(node, this);

		}
		Object.defineProperty(this, "innerHTML", {
			get : getinnerhttp,
			set : setinnerhtml
		});
		this.isEqualNode = function(d) {
			// return this.innerHTML == d.innerHTML
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
				if (l == 0) {
					this.firstElementChild = d;
				} else {
					this.lastElementChild = d;
					d.previousElementSibling = this.children[l - 1];
					this.childNodes[l - 1].nextElementSibling = this.children[l];
				}
				this.childElementCount = l + 1;
			}
		}

		this.click = function() {
			this._state = !this._state;
		}
		this.classList.add = function(d) // khong ho tro
		{
		};
		// event = [] ;
		this.attributes.getNamedItem = function(d) {
			let l = this.length;
			let i;
			for (i = 0; i < l; i++) {
				if (this[i].name == d)
					return this[i];
			}
			return null;
		}
		this.attributes.item = function(d) {
			return this[d];
		}
		this.attributes.removeNamedItem = function(d) {
			let k = this.length;
			let i;
			for (i = 0; i < k; i++) {
				if (this[i].name == d) {
					this.splice(i, 1);
					return;
				}
			}
		}
		this.attributes.setNamedItem = function(d) {
			let k = this.length;
			let i;
			for (i = 0; i < k; i++) {
				if (this[i].name == d.name) {
					this[i]=d ;
					return;
				}
			}
			this[k]=d;
		}
		this.insertAdjacentElement = function(str, p) {
			// chua ho tro
		}
		this.addEventListener = function(a, b) {

		}

		Object.defineProperty(this, "tagName", {
			get : getTagName
		});
		var getTagName = function() {
			return tag;
		}
		Object.defineProperty(this, "nodeName", {
			get : getNodeName
		});
		var getNodeName = function() {
			return nName;
		}
		Object.defineProperty(this, "nodeType", {
			get : getnodeType
		});
		var getnodeType = function() {
			return nType;
		}
	}
}