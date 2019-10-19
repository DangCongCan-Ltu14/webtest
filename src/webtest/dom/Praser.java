package webtest.dom;

import java.io.File;
import java.io.IOException;
import java.util.List;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Node;

public class Praser {
	static void tree(Node k) {
		List<Node> ps = k.childNodes();
		if (k.nodeName() == "#text") {
			System.out.println(k.toString());
		}
		for (Node ss : ps) {
			tree(ss);
		}
	}

	public static Node getNode(Document c) {
		return (Node) c.ownerDocument();
	}

	public static Document getFile(String s) {
		File fl = new File(s);
		try {
			return Jsoup.parse(fl, null);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return null;
		}
	}

	public static Document getDoc(String s) {
		return Jsoup.parse(s);
	}
}
