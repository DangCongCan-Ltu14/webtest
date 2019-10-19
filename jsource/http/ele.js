"use strict";
{
	let nelement = 3;
	let ntext = 1;

	let attr = function() {
		this.name;
		this.value;
		this.specified = true;
	}
	let element = function() {
		this.offsetParent = "no need";
		this.testDiv.offsetTop = "no need";

		this.nodeValue;
		this.nodeName;
		this.nodeType;
		this.innerHTML;// luu thong tin text
		this.accessKey; // khong can thiet
		this.attributes = [];
		this.className;
		this.classList;
		this._state = false;
		this.id;
		this.innerText; // giong node value
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

		this.isEqualNode = function (d)
		{
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
			let i = this.length;
			this[i] = d;
		}
		this.insertAdjacentElement = function(str, p) {
			// chua ho tro
		}
		this.addEventListener = function(a, b) {

		}
	}
}