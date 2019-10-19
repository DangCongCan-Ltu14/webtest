let System = Java.type("java.lang.System");
load(System.getenv("WEBTEST")+"/jsource/dom/node.js");
let DocumentBuilderFactory = Java
.type("javax.xml.parsers.DocumentBuilderFactory");
let Node = Java.type("org.w3c.dom.Node");
let File = Java.type("java.io.File");
function tree(node, doc) {
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
		if (z > 1)

		{
			let i;
			for (i = 0; i < z; i++) {
				let np = ns.item(i);
				tree(np, doc.createnode());
			}
		} else {	
			let p=doc.createnode();
			let k=ns.item(0);
			p.nodeValue=k.getNodeValue();
			p.nodeType = k.getNodeType();
			p.nodeName =k.getNodeName();
			
		}
	}
}
let factory = DocumentBuilderFactory.newInstance();
let builder = factory.newDocumentBuilder();
let doc = builder.parse(new File(
	"/home/dccan/app/code/workspace/webtest/students.xml"));
doc.getDocumentElement().normalize();
let root = doc.getDocumentElement();
var dnode = new JNode();
tree(root, dnode);
dnode.config();
var l = new Array();
dnode.findtag("firstName", l);
var k=l.length-1;
for(k;k>-1;k++)
	{
	print 
	}


