package webtest.query;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;

public class Extract {
	int dem = 0, lg;
	char[] d;
	List<String> arr = new LinkedList<String>();
	int ch = 0;
	boolean fal = false;

	public static void main(String[] args) {
//		Code k = list("p > kf.ft .xx.ss.dd > v.\"dd\" + sh.dd h, sd + gg   cop + lol ");
//		Ele d = k.get(0);
//		Pice s = d.get(d.ope(4));
//		System.out.println(s.name);
		String a="sss-cjsssfk";
		String  b="\"sss\"";
		System.out.println(qCompare(a,b,"|="));
	}

	public static Code list(String s) {
		String[] sd = s.split(",");
		int a = sd.length;
		Ele[] lt = new Ele[a];
		for (int i = 0; i < a; i++) {
			lt[i] = new Ele(new Extract().tach(sd[i]));
		}
		Code p = new Code(lt);
		return p;

	}

	private ArrayList<String> tach(String s) {
		s = s.trim();
		init(s);
		ArrayList<String> arr = new ArrayList<String>();
		int sblank = 0;
		while (ch != -1) {
			if (isopen(ch))
				sblank = sblank + 1;
			else if (isclose(ch))
				sblank = sblank - 1;
			if (sblank == 0) {
				arr.add(getch());
			} else {
				String k = getch();
				if (!k.equals(" ") && !k.equals("")) {
					arr.add(k);
				}
			}
			System.out.println(arr.get(arr.size() - 1));
		}
		return arr;
	}

	public static boolean qCompare (String a, String k, String op) {
		if (a .equals(""))
			return false;
		StringBuilder d = new StringBuilder(k);
		if (d.charAt(d.length() - 1) == '"')
			d.deleteCharAt(d.length() - 1);

		if (d.charAt(0) == '"')
			d.deleteCharAt(0);

		String b = d.toString();

		if (op.equals("=")) {
			return a.equals(b);
		} else if (op.equals("+=")) {
			String[] p = a.split(" ");
			for (String s : p) {
				if (s.equals(b))
					return true;
			}
			return false;
		} else if (op.equals("~=")) {
			String[] p = a.split(" ");
			for (String s : p) {
				if (s.equals(b))
					return true;
			}

			return false;
		} else if (op.equals("|=")) {
			if (a.length() < b.length())
				return false;
			if (a.length() == b.length())
				return a.equals(b);
			String p = b + "-";
			System.out.println(a);
			return a.startsWith(p);
		} else if (op.equals("*=")) {
			return a.contains(b);
		} else if (op.equals("$=")) {
			return a.endsWith(b);
		}

		return false;
	}

	public static boolean isword(String s) {
		return ischar(s.charAt(0));
	}

	public static boolean isope(String s) {
		return s.equals(" ") || s.equals("~") || s.equals(">") || s.equals("+");
	}

	public static boolean isopen(int ch) {
		return ch == '(' || ch == '[';
	}

	static boolean isclose(int ch) {
		return ch == ')' || ch == ']';
	}

	String getch() {
		StringBuilder sb = new StringBuilder();
		if (ischar(ch)) {
			do {
				sb.append((char) ch);
				ch = get();
			} while (ischar(ch));

		} else if (ch == ':') { // : , ::
			sb.append((char) ch);
			ch = get();
			if (ch == ':') {
				sb.append((char) ch);
				ch = get();
			}
		} else if (ch == '*') {
			sb.append((char) ch);
			ch = get();
			if (ch == '=') {
				sb.append((char) ch);
				ch = get();
			}
		} else if (ch == '|' || ch == '~' || ch == '$') {
			sb.append((char) ch);
			ch = get();
			if (ch == '=') {
				sb.append((char) ch);
				ch = get();
			} else {
				fal = true;
			}
		} else if (ch == ' ') {

			while (ch == ' ') {
				ch = get();
			}
			if (ch == '+' || ch == '~' || ch == '>' || ch == ',') {
				sb.append((char) ch);

				do {
					ch = get();
				} while (ch == ' ');
			} else
				sb.append(" ");
		} else {
			sb.append((char) ch);
			ch = get();
		}
		return sb.toString();
	}

	int get() {
		if (dem < lg) {
			int p = d[dem];
			dem++;
			return p;
		} else
			return -1;
	}

	void init(String s) {
		lg = s.length();
		d = s.toCharArray();
		ch = get();
	}

	static String match() {
		StringBuilder sb = new StringBuilder();
		return sb.toString();
	}

	public static boolean ischar(int a) {
		if (a == '_' || a == '-')
			return true;
		if (a >= '0' && a <= '9')
			return true;
		if (a >= 'a' && a <= 'z')
			return true;
		if (a >= 'A' && a <= 'Z')
			return true;
		if (a == '"')
			return true;
		return false;
	}
}
