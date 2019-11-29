package webtest.query;

public class Pice {
	public String name = "*";
	protected String[] pt =null;//=new String[0];
	public String op = "";

	public String get(int i) {
		if (i < pt.length)
			return pt[i];
		return "";
	}

	public int length() {
		return pt.length;
	}

	static boolean compare(Pice a, Pice b) {
		if (!a.name.equals(b.name))
			return false;
		if ((!a.op.equals("")) && (!b.op.equals("")) && (!a.op.equals(b.op)))
			return false;
		
		if (a.pt.length != b.pt.length)
			return false;
		int h = a.length();
		for (int i = 0; i < h; i++) {
			if (!a.get(i).equals(b.get(i)))
				return false;
		}
		return true;
	}
}
