public class Ts {
	public int a=10,b=20;
	public static void main(String[] args) {
		call(8,9,5,6,6,6,6);
	}
	static void call(int...arg)
	{
		int d=arg.length;
		System.out.println(d);
	}
}
