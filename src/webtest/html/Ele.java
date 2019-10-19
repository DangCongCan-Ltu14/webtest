package webtest.html;

import java.util.Collection;
import java.util.Map;
import java.util.Set;

import javax.script.Bindings;

import jdk.nashorn.api.scripting.JSObject;
import jdk.nashorn.api.scripting.ScriptObjectMirror;

public class Ele implements JSObject, Bindings {

	ScriptObjectMirror sp;

	public Ele(Object p) {
		sp = (ScriptObjectMirror) p;
	}

	public void setMember(String arg0, Object arg1) {
		// TODO Auto-generated method stub
		System.out.println("set cmn " + arg0 + " = " + arg1);
		sp.setMember(arg0, arg1);
	}

	// overwrite method
	public int size() {

		return sp.size();
	}

	public boolean isEmpty() {

		return sp.isEmpty();
	}

	public boolean containsValue(Object value) {

		return sp.containsValue(value);
	}

	public void clear() {
		sp.clear();

	}

	public Set<String> keySet() {

		return sp.keySet();
	}

	public Collection<Object> values() {

		return sp.values();
	}

	public Set<Entry<String, Object>> entrySet() {

		return sp.entrySet();
	}

	public Object call(Object arg0, Object... arg1) {

		return sp.call(arg0, arg1);
	}

	public Object eval(String arg0) {

		return sp.eval(arg0);
	}

	public String getClassName() {

		return sp.getClassName();
	}

	public Object getMember(String arg0) {

		return sp.getMember(arg0);
	}

	public Object getSlot(int arg0) {

		return sp.getSlot(0);
	}

	public boolean hasMember(String arg0) {

		return sp.hasMember(arg0);
	}

	public boolean hasSlot(int arg0) {
		return sp.hasSlot(arg0);
	}

	public boolean isArray() {
		return sp.isArray();
	}

	public boolean isFunction() {
		return sp.isFunction();
	}

	public boolean isInstance(Object arg0) {
		return sp.isInstance(arg0);
	}

	public boolean isInstanceOf(Object arg0) {
		return sp.isInstanceOf(arg0);
	}

	public boolean isStrictFunction() {
		return sp.isStrictFunction();
	}

	public Object newObject(Object... arg0) {
		return sp.newObject(arg0);
	}

	public void removeMember(String arg0) {
		sp.removeMember(arg0);
	}

	public void setSlot(int arg0, Object arg1) {
		sp.setSlot(arg0, arg1);

	}

	@SuppressWarnings("deprecation")
	public double toNumber() {

		return sp.toNumber();
	}

	public Object put(String name, Object value) {
		// TODO Auto-generated method stub
		System.out.println("put cmn " + name + " = " + value);
		return sp.put(name, value);
	}

	public void putAll(Map<? extends String, ? extends Object> toMerge) {
		sp.putAll(toMerge);
	}

	public boolean containsKey(Object key) {
		return sp.containsKey(key);
	}

	public Object get(Object key) {
		return sp.get(key);
	}

	public Object remove(Object key) {
		return sp.remove(key);
	}

}
