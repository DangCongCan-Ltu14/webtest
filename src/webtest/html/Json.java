package webtest.html;

public class Json {
	public static void main(String[] args) {
		String s = "color:red;font-size:75px;font-family:cursive";
		cvString(s);
	}

	public static String cvString(String s) {
		String ret = "{";
		System.out.println(s);
		String[] k = s.split(";");
		int p = k.length;
		int i;
		for (i = 0; i < p - 1; i++) {
			String[] so = k[i].split(":");
			ret = ret + String.format("\"%s\":\"%s\",", so[0], so[1]);
		}
		String[] so = k[i].split(":");
		ret = ret + String.format("\"%s\":\"%s\"}", so[0], so[1]);
		System.out.println(ret);
		return ret;
	}
}
