package webtest.conn;

import java.util.ArrayList;

public class Test {
	ArrayList<Object> as = new ArrayList<Object>();
	public Test()
	{
		as.add(new Object());
		as.add(new Object());
		as.add(new Object());
	}
	public void put(Object s) {
		as.add(s);
	}

	public Object get(int a) {
		return as.get(a);
	}
}
