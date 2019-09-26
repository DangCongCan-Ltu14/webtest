load("/home/dccan/app/code/workspace/webtest/jsource/dom/node.js");
let DocumentBuilderFactory = Java
        .type("javax.xml.parsers.DocumentBuilderFactory");
let Node = Java.type("org.w3c.dom.Node");
let File = Java.type("java.io.File");

function tree(node, doc) {
    if (node.getNodeType() == Node.ELEMENT_NODE) {
        doc.nodeType = node.getNodeType();
        doc.nodeName = node.getNodeName();
        doc.tag = node.getNodeName();
        print("Node Name = " + node.getNodeName());
        let ns = node.getChildNodes();
        let z = ns.getLength();
        if (z > 2)

        {
            let i;
            for (i = 0; i < z; i++) {
                let np = ns.item(i);
                tree(np, doc.createnode());
            }
        } else {
            print("   " + ns.item(0).getNodeValue());
            doc.nodeValue = node.getNodeValue();
        }

        print("</" + node.getNodeName() + ">");
    }

}
let factory = DocumentBuilderFactory.newInstance();
let builder = factory.newDocumentBuilder();
let doc = builder.parse(new File("test.xml"));
doc.getDocumentElement().normalize();
let root = doc.getDocumentElement();
let dnode = new JNode();
tree(root, dnode);
dnode.config();


