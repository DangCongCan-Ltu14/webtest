import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import javax.script.ScriptException;

public class Nashorn {

	public static void main(String[] args) throws ScriptException {
		System.setProperty("nashorn.args", "--no-deprecation-warning=true");
		System.setProperty("nashorn.args", "--cp=/home/dccan/Desktop/web.jar");
		ScriptEngine engine = new ScriptEngineManager().getEngineByName("js");
		String s = System.getenv("WEBTEST") + "/jsoirce/http/ele.ls";
		engine.eval("load(" + s + ")");
		
	}
}