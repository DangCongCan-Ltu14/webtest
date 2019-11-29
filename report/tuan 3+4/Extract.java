package js;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;

public class Extract {
	static int dem = 0, lg;
	static char[] d;
	static List<String> arr = new LinkedList<String>();
	static int ch = 0;
	static boolean fal = false;

	public static void main(String[] args) {
		String s = "p:test   p#s , pika:chu";
		s = s.trim();
		init(s);
		ch = get();
		ArrayList<String> arr = new ArrayList<String>();
		boolean sblank = true;
		while (ch != -1) {
			if (isopen(ch))
				sblank = false;
			else if (isclose(ch))
				sblank = true;
			if (sblank) {
				arr.add(getch());
			} else {
				String k = getch();
				if (!k.equals(" ") && !k.equals("")) {
					arr.add(k);
				}
			}
		}
		for (String d : arr) {
			System.out.println(d);
		}
	}

	static boolean isopen(int ch) {
		return ch == '(' || ch == '[';
	}

	static boolean isclose(int ch) {
		return ch == ')' || ch == ']';
	}

	static String getch() {
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
			if (ch == '+' || ch == '~' || ch == '>'|| ch == ',') {
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

	static int get() {
		if (dem < lg) {
			int p = d[dem];
			dem++;
			return p;
		} else
			return -1;
	}

	static void init(String s) {
		lg = s.length();
		d = s.toCharArray();
	}

	static String match() {
		StringBuilder sb = new StringBuilder();
		return sb.toString();
	}

	static boolean ischar(int a) {
		if (a == '_' || a == '-')
			return true;
		if (a >= '0' && a <= '9')
			return true;
		if (a >= 'a' && a <= 'z')
			return true;
		if (a >= 'A' && a <= 'Z')
			return true;
		return false;
	}
}
