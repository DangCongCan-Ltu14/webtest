"use strict";
let System = Java.type("java.lang.System");
load(System.getenv("WEBTEST") + "/jsource/dom/node.js");
let DocumentBuilderFactory = Java
		.type("javax.xml.parsers.DocumentBuilderFactory");
let Node = Java.type("org.w3c.dom.Node");
let File = Java.type("java.io.File");
function _DOM(a) {
	this.documentElement = a;

	this.createElement = function(d) {
		let k = new JNode();
		k.nodeName = d;
		k.tag = d;
		k.nodeType = 1;
		return k;
	}
	this.createTextNode(d)
	{
		let k = new JNode();
		k.nodeName = "#text";
		k.tag = "#text";
		k.nodeType = 3;
		k.nodeValue = d;
		return k;
	};
	this.getElementsByTagName = function(d) {
		return this.documentElement.getElementsByTagName(d);
	}
}
function DOMParser() {
	this.parseFromString = function(str, stype) // phan type khong ho tro
	{
		let factory = DocumentBuilderFactory.newInstance();
		let builder = factory.newDocumentBuilder();
		let doc = builder.parse(str);
		doc.getDocumentElement().normalize();
		let root = doc.getDocumentElement();
		let dnode = new JNode();
		tree(root, dnode);
		dnode._config();
		// dnode.documentElement=dnode; // nen sua lai sau
		return dnode;
	}
	let tree = function(node, doc) {
		if (node.getNodeType() == Node.ELEMENT_NODE) {
			doc.nodeType = node.getNodeType();
			doc.nodeName = node.getNodeName();
			doc.tag = node.getNodeName();
			if (node.hasAttributes()) {
				let map = node.getAttributes();
				let ln = map.getLength();
				let i;
				for (i = 0; i < ln; i++) {
					let as = map.item(i);
					doc.setAttributeNode(new J_attr(node.getNodeName(), node
							.getNodeValue()));
				}
			}
			let ns = node.getChildNodes();
			let z = ns.getLength();
			if (z > 1) {
				let i;
				for (i = 0; i < z; i++) {
					let np = ns.item(i);
					tree(np, doc._createnode());
				}
			} else {
				let p = doc._createnode();
				let k = ns.item(0);
				p.nodeValue = k.getNodeValue();
				p.nodeType = k.getNodeType();
				p.nodeName = k.getNodeName();

			}
		}
	}
}
