import java.io.File;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;

import org.w3c.dom.Document;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;

public class Ts {
	public int a = 10, b = 20;

	public static void main(String[] args) {
		DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
		try {
			DocumentBuilder builder = factory.newDocumentBuilder();
			Document doc = builder.parse(new File("students.xml"));
			Node k = doc.getDocumentElement();
			tree(k);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	private static void tree(Node k) {
		NodeList ps = k.getChildNodes();
		int z = ps.getLength();
		System.out.print("<" + k.getNodeName() + ">");
		System.out.println("type " + k.getNodeType());
		for (int i = 0; i < z; i++)
			tree(ps.item(i));
		System.out.println("</" + k.getNodeName() + ">");
	}

}
