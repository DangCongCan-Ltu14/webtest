import java.io.File;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;

import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;

public class Java8Tester {

	public static void main(String args[]) {
		try {
			DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
			DocumentBuilder builder = factory.newDocumentBuilder();
			Document document = builder.parse(new File("students.xml"));
			// Normalize the XML Structure; It's just too important !!
			document.getDocumentElement().normalize();
			Node root = document.getDocumentElement();
			tree(root);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

	}

	static void tree(Node node) {

		if (node.getNodeType() == Node.ELEMENT_NODE) {
			System.out.println("<" + node.getNodeName() + ">");
			NodeList ns = node.getChildNodes();
			int z = ns.getLength();
			if (z > 2) {
				int i;
				for (i = 0; i < z; i++) {
					Node np = ns.item(i);
					tree(np);
				}
			} else
				System.out.println(ns.item(0).getNodeValue());
			System.out.println("</" + node.getNodeName() + ">");
		} else {
			// System.out.println(node.getNodeType() + ": " +node.getNodeName());
		}
	}

}