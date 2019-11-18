"use strict";
let System = Java.type("java.lang.System");
let _JGet = Java.type("webtest.dom.Praser");
// load(System.getenv("WEBTEST") + "/jsource/dom/node.js");
{
	load(System.getenv("WEBTEST") + "/jsource/dom/Dom2.js");
	let nelement = 3;
	let ntext = 1;

	let attr = function(a,b) {
		let dname =a ;//.toLowerCase();
		this.value = b;
		this.specified = true;
		Object.defineProperty(this,"name",{value : dname }) ;
		this.isId= function()
		{
			return name == "id" ;
		}
	}

	let Clist = function (ele)
	{
		let link = ele ;

	this.add = function(...d) // khong ho tro
	{
		let cl =link.getAttributeNode("class");
		if(cl==undefined) return ;
		let d=cl.split(" ");
		for(let z in d)
		{
			let h=d[z];
			if(typeof (d)=="string"&&(!cl.value.contains(h)))
			{
				cl.value = cl.value + " "+d ;
			}
		}
	}

	this.contains = function(d)
	{
		if(cl==undefined) return ;
		let cl =link.getAttribute("class");
		return cl.contains(d);
	};
	this.item =function (i)
	{
		let cl =link.getAttributeNode("class");
		if(cl==undefined) return ;
		let p =cl.value.split(" ");
		if(i<p.length) return p[i];
		return null ;
	}
	this.remove = function(...d)
	{

		let cl =link.getAttributeNode("class");
		if(cl==undefined) return ;
		let p =cl.value.split(" ");
		let lg=d.length ;
		let txt ="";
		for(let i in p)
		{
			if(!cmp(p[i],d))
			{
				if(i<lg)
					txt=txt+p[i]+" ";
				else txt=txt+p[i] ;
			}
		}
		cl.value = txt ;
	};
	let cmp= function( a ,b)
	{
		for(let i in b)
		{
			if(a==b[i])
				return true ;
		}
		return false ;

	}
	this.toString = function()
	{
		return cl.value ;
	}
	let lg = function()
	{
		let cl =link.getAttributeNode("class");
		if(cl==undefined) return 0;
		var p =cl.value.split(" ").length ;
		return p ;
	}
	Object.defineProperty(this , "length",{get : lg }) ;
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
		let cli = new Clist(this);
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

		// ckass webtest.query.Pice
		let Extract = Java.type("webtest.query.Extract");

		let 
		let _compare = function(pice)
		{
			if(!nName.equals(pice.name)) return false ;
			let h=pice.length();
			let i=0 ;
			while(i<h)
			{
				let p=pice.get(i);
				if(p.equals("#"))
				{
					i=i+1;
					let z = pice.get(i);
					if(!this.id.equals(z)) return false ;
					i=i+1;
				}else if(p.equals("["))
				{
					i=i+1 ;
					while(i<h)
					{
						
						let a=pice.get(i);
						i=i+1;
						let op=pice.get(i);
						i=i+1 ;
						let b=pice.get(i);
						i=i+1;
						if(!Extract.qCompare(a,b,op)) return false ;
						if(pice.geti(i).equals("]")) break ;
					}
				}
				else if(p.equals("."))
				{
					i=i+1 ;
					let dot = pice.get(i);
					if(!cli.contains(dot)) return false ;
					i=i+1;
				}
			}
		return true ;
	}

	var _addAttr = function(a,b)
	{
		let k = this.attributes.length ;
		for( let att in this.attributes)
		{
			if(this.attributes[att].name ==a.toLowerCase()) 
			{
				this.attributes[att].value = b ;
				return ;
			}
		}
		this.attributes[k]= new attr(a,b);
	}
	var getclassName =function()
	{
		return this.getAttribute("class");
	}
	var setclassName = function(d)
	{
		_addAttr("class",d);
	}
	Object.defineProperty(this , "className" , {get : getclassName , set : setclassName });
	Object.defineProperty(this,"classList",{get : function(){return cli ;} , set : setclassName })
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
			this.children[i]._findclass(d, list);
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
		_addAttr("id",d);
	}
	Object.defineProperty(this, "id", {
		get : getId,
		set : setId
	});
	this.getAttribute = function(d) {
		for ( let p in this.attributes) {
			if (this.attributes[p].name == d) {
				return p.value;
			}
		}
	}
	this.getAttributeNode = function(d) {
		let la =d.toLowerCase();
		for ( let p in this.attributes) {
			if (this.attributes[p].name == la) {
				return p;
			}
		}
	}
	this.hasAttribute = function(p) {
		let d=p.toLowerCase() ;
		for ( let i in this.attributes) {
			if (d ==this.attributes[i])
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
					ret = ret + this.childNodes[s].innerHTML;
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
	// let classattr = function (b)
	// {
	// 	let dname ="class" ;//.toLowerCase();
	// 	let list = b.split(" ");
	// 	this.specified = true;
	// 	Object.defineProperty(this,"name",{value : dname }) ;
	// 	this.isId= function()
	// 	{
	// 		return false ;
	// 	}
	// 	let setValue = function(d)
	// 	{
	// 		list = d.split(" ");
	// 	}
	// 	let getValue = function()
	// 	{
	// 		let p="";
	// 		var d;
	// 		for(d in list)
	// 		{
	// 			p=p+list[d]+" ";
	// 		}
	// 		return p ;
	// 	}
	// 	Object.defineProperty(this,"value",{get : getValue , set : setValue }) ;