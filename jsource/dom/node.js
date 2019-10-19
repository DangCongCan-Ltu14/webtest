let _attr =function (d, b) {
	this.nodeName = d;
	this.nodeValue = b;
	this.nodeType = 3;
}

var _Node =function () {
	this.parent;// link to parent node
	this.nodeValue;
	this.nodeName;
	this.nodeType;
	this.atb = [];
	this.childNodes = [];
	this.tag;
	this.nextSibling = null;
	this.previousSibling = null;
	this.firstChild;
	this.lastChild;

	this.setnextSibling = function(d) {
		this.nextSibling = d;
	};
	this.settag = function(t) {
		this.tag = t;
	};
	this.appendChild = function(node) {
		let ln = this.childNodes.length;
		this.childNodes[ln] = new _Node();
		this.childNodes[ln].tag = node.tag;
		this.childNodes[ln].nodeValue = node.nodeValue;
		this.childNodes[ln].nodeType = node.nodeType;
		this.childNodes[ln].nodeName = node.nodeName;
		this.childNodes[ln].parent = this;
		if (ln > 1) {
			this.childNodes[ln - 1].nextSibling = node;
			this.childNodes[ln].previousSibling = this.childNodes[ln - 1];
			this.lastChild = node;
		} else {
			this.firstChild = node;
		}
	};
	this._createnode = function() {
		let ln = this.childNodes.length;
		this.childNodes[ln] = new _Node();
		this.childNodes[ln].parent = this;
		if (ln > 0) {
			this.childNodes[ln - 1].nextSibling = this.childNodes[ln];
			this.childNodes[ln].previousSibling = this.childNodes[ln - 1];
		}
		return this.childNodes[ln];
	};
	this._config = function() {
		let ln = this.childNodes.length;
		if (ln > 0) {
			this.firstChild = this.childNodes[0];
			this.lastChild = this.childNodes[ln - 1];
			let z = 0;
			for (z = 0; z < ln; z++) {
				this.childNodes[z]._config();
			}
		}
	};

	this.setAttributeNode = function(newAtt) {
		let i;
		let n = this.atb.length;
		for (i = 0; i < n; i++) {
			if (newAtt.nodeName == this.atb[i].nodeName) {
				this.atb[i] = newAtt;
				i = -1;
				break;
			}
		}
		if (i != -1)
			this.atb[n] = newAtt
	}
	this.getAttribute = function(d) {
		let i;
		let n = this.atb.length;
		for (i = 0; i < n; i++) {
			if (this.atb[i].nodeName == d) {
				return this.atb[i].nodeValue;
			}
		}
		return null;
	}
	this.getElementsByTagName = function(d) {
		let list = new Array();
		this._findtag(d, list);
		return list;
	}
	this._findtag = function(d, list) {
		if (this.tag == d) {
			list[list.length] = this;
		}
		let z = this.childNodes.length;
		let i;
		for (i = 0; i < z; i++) {
			this.childNodes[i]._findtag(d, list);
		}
	}
	this.removeChild = function(d) {
		let i;
		let n = this.childNodes.length;
		for (i = 0; i < n; i++) {
			if (this.childNodes[i] == d)
				break;
		}
		if (i < n)
			this.childNodes.splice(i, 1);
	};
	this.replaceChild = function (Nnode,Onode)
	{
		let i;
		let n = this.childNodes.length;
		for (i = 0; i < n; i++) {
			if (this.childNodes[i] == Onode )
			{
				this.childNodes[i]=Nnode ;
				break ;
			}
		}
	}
	this.cloneNode = function(d)
	{
		let node = new _Node();
		node.nodeName = this.nodeName ;
		node.tag=this.tag ;
		node.nodeValue = this.nodeValue ;
		node.childNodes =[] ;
		node.atb =[];
		if(tr == true)
		{
			let n=this.atb.length ;
			let i;
			for(i=0;i<n ;i++)
			{
				node.atb[i] = new _attr( this.atb[i].nodeName , this.atb[i].nodeValue );
			}
			n=this.childNodes.length ;
			for(i=0;i<n ;i++)
			{
				node.childNodes[i] = this.childNodes[i].cloneNode(d);
			}

		}
		return node ;
	}
};