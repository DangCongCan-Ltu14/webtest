function attr(d) {
	this.name = d;
	this.nodeValue;
}
function JNode() {
	this.parent;// link to parent node
	this.nodeValue;
	this.nodeName;
	this.nodeType;
	this.atb = new Array();
	this.childNodes = new Array();
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
		var ln = this.childNodes.length;
		this.childNodes[ln] = node;
		node.parent = this;
		if (ln > 1) {
			this.childNodes[ln - 1].nextSibling = node;
			this.childNodes[ln].previousSibling = child[ln - 1];
			this.lastChild = node;
		} else {
			this.firstChild = node;
		}
	};
	this.createnode = function() {
		var ln = this.childNodes.length;
		this.childNodes[ln] = new JNode();
		return this.childNodes[ln];
	};
	this.config = function() {
		let ln = this.childNodes.length;
		if (ln > 0) {
			this.firstChild = this.childNodes[0];
			this.lastChild = this.childNodes[ln - 1];
			let z = 0;
			for (z = 0; z < ln; z++) {
				this.childNodes[z].config();
			}
		}
	};

	this.setAttributeNode = function(newAtt) {
		var i;
		var n = this.atb.length;
		for (i = 0; i < n; i++) {
			if (newAtt.name == this.atb[i].name) {
				this.atb[i] = newAtt;
				i = -1;
				break;
			}
		}
		if (i != -1)
			this.atb[n] = newAtt
	}
	this.getAttribute = function(d) {
		var i;
		var n = this.atb.length;
		for (i = 0; i < n; i++) {
			if (this.atb[i].name == d) {
				return this.atb[i].nodeValue;
			}
		}
		return null;
	}
	this.findtag = function(d, list) {
		if (this.tag == d) {
			list[list.length] = this.tag;
		}
		var z = this.childNodes.length;
		var i;
		for (i = 0; i < z; i++) {
			this.childNodes[i].findtag(d, list);
		}
	}
};