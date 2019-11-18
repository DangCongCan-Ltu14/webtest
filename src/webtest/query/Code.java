package webtest.query;

public class Code {
	private Ele[] list;

	public Code(Ele[] l) {
		list = l;
	}

	public Ele get(int p) {
		return list[p];
	}

	public int size() {
		return list.length;
	}
}
