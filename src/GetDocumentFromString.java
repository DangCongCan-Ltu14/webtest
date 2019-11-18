
import java.io.IOException;
import java.util.List;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Attribute;
import org.jsoup.nodes.Attributes;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.nodes.Node;

public class GetDocumentFromString {

	public static void main(String[] args) throws IOException {
		String htmlString = "<p id = \"vc\" >hi "
				+ "cmn ba </p><p>ss <input id =\"cmn\" readonly value=\"hello\">";
		Document doc = Jsoup.parse(htmlString);
		Element sl = doc.body();
		Element in =sl.getElementById("cmn");
		Attributes sk = in.attributes();
		List<Attribute> ss=sk.asList();
		for(Attribute p:ss)
		{
			System.out.println(p.getKey());
		}

	}

	static void tree(Node el, int k) {
		List<Node> lp = el.childNodes();
		List<Attribute> lps = el.attributes().asList();
		
		pr(k);
		if (el.nodeName() == "#text")
			System.out.println(el.outerHtml());
		else {
			System.out.println("<" + el.nodeName() + ">");
		}
		if (lps != null) {
			for (Attribute e : lps)
				System.out.println("attr " + e.getKey());
		}
		int d = k + 1;
		for (Node nd : lp) {
			tree(nd, d);
		}
		if (el.nodeName() != "#text") {
			pr(k);
			System.out.println("</" + el.nodeName() + ">");
		}
	}

	private static void pr(int k) {
		// TODO Auto-generated method stub
		for (int i = 0; i < k; i++) {
			System.out.print("  ");
		}
	}
}