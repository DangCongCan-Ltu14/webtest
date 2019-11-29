
import java.io.File;
import java.io.IOException;
import java.util.List;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Attribute;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Node;
import org.jsoup.select.Elements;


public class GetDocumentFromString {

	public static void main(String[] args) throws IOException {
		File input = new File("");
		long k =System.currentTimeMillis();
		Document doc = Jsoup.connect("https://en.wikipedia.org/wiki/Main_Page").get();
		//long k =System.currentTimeMillis()
		Elements c=doc.getElementsByTag("a");
	//	System.out.println(c.size());
		System.out.println(System.currentTimeMillis()-k);

	}

	static void log(String a, Object... title) {
		// TODO Auto-generated method stub
		String ka = String.format(a, title);
		System.out.println(ka);
	}

	static void tree(Node el, int k) {
		List<Node> lp = el.childNodes();
		List<Attribute> lps = el.attributes().asList();

		// pr(k);
		if (el.nodeName() == "#text") {
			pr(k);
			System.out.println(" text " +el.outerHtml());
		} else {
			pr(k);
			System.out.println("<" + el.nodeName() + ">");
		}
		if (lps .size()>0)
		{
			for (Attribute e : lps) {
				pr(k);
				System.out.println("attr " + e.getKey()+" :: "+e.getValue());
			}
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