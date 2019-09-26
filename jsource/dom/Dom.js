//load("/home/dccan/app/code/workspace/webtest/jsource/Ajax.js");
let DocumentBuilderFactory = Java
		.type("javax.xml.parsers.DocumentBuilderFactory");
let Node = Java.type("org.w3c.dom.Node");
let File = Java.type("java.io.File");
function tree(node) {
	if (node.getNodeType() == Node.ELEMENT_NODE) {
		print("Node Name = " + node.getNodeName());
		let ns = node.getChildNodes();
		let z = ns.getLength();
		if (z == 0)
			print(node.getNodeValue());
		else {
			let i;
			for (i = 0; i < z; i++) {
				let np = ns.item(i);
				tree(np);
			}
		}
	}
}
let factory = DocumentBuilderFactory.newInstance();
let builder = factory.newDocumentBuilder();
let doc = builder.parse(new File("test.xml"));
doc.getDocumentElement().normalize();
let root = doc.getDocumentElement();
tree(root);
