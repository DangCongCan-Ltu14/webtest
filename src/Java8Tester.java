import java.io.File;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;

import org.w3c.dom.Document;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;

public class Java8Tester {

	private final static String NASHORN_ARGS = "nashorn.args";

	private final static String ES_6 = "--language=es6";

	public static void main(String args[]) {
		try {
			System.setProperty(NASHORN_ARGS, ES_6);
			DocumentBuilderFactory dbFactory = DocumentBuilderFactory.newInstance();
			DocumentBuilder dBuilder = dbFactory.newDocumentBuilder();
			Document doc = dBuilder.parse(new File("students.xml"));
			tree(doc.getDocumentElement(),0);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

	}
	/**
	 * @param el  mode nhap vao
	 * @param k muc cua cay 
	 * khong tra ve 
	 */
	static void tree(Node el, int k) {
		// TODO Auto-generated method stub
		pr(k);
		System.out.println("<" + el.getNodeName() + ">");
		pr(k);
		System.out.println("node value " + el.getNodeValue());

		NodeList nl = el.getChildNodes();
		int v = nl.getLength();
		int ll = k + 1;
		for (int i = 0; i < v; i++) {
			Node p = nl.item(i);
			if (p.getNodeName().equals("#text")) {
				if (p.getNodeValue() != null)
					if (p.getNodeValue().trim().length() > 1)
						tree(p, ll);
			} else
				tree(p, ll);

		}
		pr(k);
		System.out.println("</" + el.getNodeName() + ">");
		// System.out.println();
	}

	private static void pr(int k) {
		// TODO Auto-generated method stub
		for (int i = 0; i < k; i++) {
			System.out.print("  ");
		}
	}

}