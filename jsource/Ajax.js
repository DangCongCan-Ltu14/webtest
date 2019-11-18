var Jhttp=Java.type("webtest.conn.Jhttp");
// load("/home/dccan/app/code/workspace/webtest/jsource/Ajax.js");
function XMLHttpRequest (){
	this.http;
	this.responseText;
	this.status;	// status
	this.readyState=0; // trang thai
	this.statusText;
	
	this.open = function(method, url,sys)
	{
		// can lay url tu document
		this.http=new Jhttp(url);
		this.http.setMethod(method);
		if(this.http.err==false) this.readyState=1;
	};
	
	this.setRequestHeader =function(a,b){
		this.http.setRequestHeader(a,b);
	};
	this.onreadystatechange = function(){};  // null function
	
	this.send = function(d="")
	{
		if(this.http.err==false) this.readyState=2;
		if(d!="")
			{
			this.http.setpara(d);
			}
		
		this.responseText=this.http.send();
		this.status=parseInt(this.http.getstatus());
		this.statusText=this.http.getstatustext();
		if(this.http.err==false) 	this.readyState=4; // ko co loi
		this.onreadystatechange();
		this.http.close();
	};
};

