
package webtest.query;

import java.util.ArrayList;

public class Ele {
	protected Pice[] pc;
	private int ope = 0;

	public Pice get(int i) {
		return pc[i];
	}

	public int pnode() {
		return ope;
	}

	public int length() {
		return pc.length;
	}

	public Ele(ArrayList<String> as) {
		separate(as);
		ope = Compare.checkp(pc);
	}

// viec tach code co the lam dong thoi khi phan tich cu phap
	private void separate(ArrayList<String> t) {

		ArrayList<Integer> k = new ArrayList<Integer>();
		k.add(-1);
		int g = t.size();
		for (int i = 0; i < g; i++) {
			if (Extract.isope(t.get(i))) {
				// System.out.println(i);
				k.add(i);
			}
		}
		t.add("");
		pc = new Pice[k.size()];
		int z = k.size();
		k.add(g);
		// System.out.println(g+" "+z);
		for (int i = 0; i < z; i++) {
			int h = k.get(i) + 1;

			if (h < g) {
				Pice pp = new Pice();
				if (Extract.ischar(t.get(h).charAt(0))) {
					pp.name = t.get(h);
					h++;
				}

				int dem = k.get(i + 1) - h;
				pp.pt = new String[dem];
				for (int s = 0; s < dem; s++) {
					pp.pt[s] = t.get(h + s);
				}
				pp.op = t.get(h + dem);
				pc[i] = pp;
			}
		}
	}

}
