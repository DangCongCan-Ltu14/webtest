
import java.io.IOException;
import java.util.List;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Attribute;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Node;

public class GetDocumentFromString {

	public static void main(String[] args) throws IOException {
		String htmlString = "<html><head><title>Simple Page</title></head>"
				+ "<body>Hello<p id=\"demo\">ss<h1 cmn=\"xxxsq\" id = \"sw\">xxx</h1>ss</p><br></body></html>";
		Document doc = Jsoup.parse(htmlString);
		Node sl = doc.ownerDocument();
		tree(sl, 0);

	}

	static void tree(Node el, int k) {
		List<Node> lp = el.childNodes();
		List<Attribute> lps=el.attributes().asList();
		if(lps!=null)
		{
			for(Attribute e:lps)
				System.out.println("attr "+e.getKey());
		}
		pr(k);
		if (el.nodeName() == "#text")
			System.out.println(el.outerHtml());
		else {
			System.out.println("<" + el.nodeName() + ">");
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