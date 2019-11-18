package webtest.query;

import java.util.ArrayList;

class Compare {
	public static int checpe(Pice[] pc, int k) {
		//int k = pc.length;
		int s = k - 1;

		while (s > -1) {
			if (pc[s].op.equals(" "))
				break;
			s--;
		}
		s++;
		int g=s;
		for (int i = s; i < k; i++) {
			int z = i;
			int j = i + i;
			for (; j < k; j++) {
				if (Pice.compare(pc[z], pc[j]))
					z++;
			}
			if (j == k)
				return z;
		}
		return g ;
	}

	public static int check(ArrayList<String> arr) {
		int f = arr.lastIndexOf(" ") + 1;
		if (f == 0)
			f = 1;
		int l = arr.size();
		int h = l - 1;
		for (int i = f; i < h; i++) {
			int m = 0;
			int j = i;
			for (; j < l; j++) {
				if (arr.get(m).equals(arr.get(j))) {
					m++;
				} else
					break;
			}
			if (j == l) {
				if (Extract.isope(arr.get(m))) {
					System.out.println(arr.get(m));
					return m + 1;
				}
			}
		}

		return arr.lastIndexOf(" ") + 1;
	}
}
