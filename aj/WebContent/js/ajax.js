//123456
function getXhr(){
	var xhr=null;
	if(window.XMLHttpRequest){
		xhr=new XMLHttpRequest();
	}else{
		xhr=new ActiveXObject("Microsoft.XMLHTTP");
	}
	return xhr;
}
function $(id) {
	return document.getElementById(id);
}
//依据id查找节点
function $F(id) {
	return $(id).value;
}