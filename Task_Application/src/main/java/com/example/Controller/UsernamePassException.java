package com.example.Controller;

public class UsernamePassException extends Exception {
private  String msg;


public UsernamePassException(String msg) {
	super();
	this.msg = msg;
}

public String getMsg() {
	return msg;
}

public void setMsg(String msg) {
	this.msg = msg;
}

}
