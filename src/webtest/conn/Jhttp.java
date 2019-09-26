package webtest.conn;

import java.io.BufferedReader;
import java.io.DataOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.ProtocolException;
import java.net.URL;

public class Jhttp {
	String url, pra = "";
	HttpURLConnection con;
	public boolean err=false;
	public Jhttp(String a) {
		check(a);
		init();
	}

	private void check(String a) {
		// TODO Auto-generated method stub
		if (!a.startsWith("http")) {
			a = "http:\\" + a;
		}
		url = a;
		System.out.println(a);
	}

	public static void main(String[] args) {
		Jhttp hp = new Jhttp("http://localhost/pcode/gethint.php");
		System.out.println(hp.send());
	}

	public int getstatus() {
		try {
			return con.getResponseCode();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			System.out.println(" loi get ResponseCode");
			err=true;
			return 404;
		}
	}
	public String getstatustext() {
		try {
			return con.getResponseMessage();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			System.out.println(" loi get ResponseMessage");
			err=true;
			return "ERROR";
		}
	}
	public void setRequestHeader(String key, String value) {
		con.addRequestProperty(key, value);
	}

	public void setCokie(String a) {
		con.setRequestProperty("Cookie", a);
	}

	public void setMethod(String a) {
		try {
			con.setRequestMethod(a);
		} catch (ProtocolException e) {
			// TODO Auto-generated catch block
			System.out.println("loi nhap method = " + a);
			err=true;
		}
	}

	public String send() {

		try {
			DataOutputStream wr = new DataOutputStream(con.getOutputStream());
			wr.writeBytes(pra);
			wr.close();

			// Get Response
			InputStream is;
			is = con.getInputStream();
			BufferedReader rd = new BufferedReader(new InputStreamReader(is));
			StringBuilder response = new StringBuilder(); // or StringBuffer if Java version 5+
			String line;
			while ((line = rd.readLine()) != null) {
				response.append(line);
				response.append('\r');
			}
			rd.close();
			return response.toString();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			err=true;
			return "ERROR";
		}

	}

	private void init() {
		// TODO Auto-generated method stub
		try {
			URL ur = new URL(url);
			con = (HttpURLConnection) ur.openConnection();
			con.setRequestProperty("Content-Type", "application/x-www-form-urlencoded");
			con.setRequestProperty("Content-Language", "en-US");
			con.setUseCaches(false);
			con.setDoOutput(true);
		} catch (Exception e) {
			// TODO: handle exception
			err=true;
		}

	}

	public void setpara(String d) {
		pra = d;
		con.setRequestProperty("Content-Length", Integer.toString(pra.getBytes().length));
	}

	public void close() {
		con.disconnect();
	}
}
