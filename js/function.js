function $(selector,range){
	range=range||document
	if (typeof(selector)=="string") {
        if (selector.charAt(0)=="#") {
        	return document.getElementById(selector.slice(1))
        }
        if (selector.charAt(0)==".") {
        	return getClass(selector.slice(1),range)
        }
        if (/^[a-z][a-z,1-6]{0,9}$/.test(selector)) {
        	return range.getElementsByTagName(selector)
        }
	}
	if (typeof(selector)=="function") {
		window.onload=selector
	}

}
	function getStyle(obj,attr){
			if (window.getComputedStyle) {
				return window.getComputedStyle(obj,null)[attr]
			}else{
				return obj.currentStyle[attr]
			}

		}
		function getClass(selector,context){
  context=context||document;
	if (document.getElementsByClassName){
     return context.getElementsByClassName(selector)
   }else{
   	var all=context.all;      
   	var newarr=[];
   	for (var i = 0; i < all.length; i++) {
   	 if(checkstr(all[i].className,selector)){
   	 	newarr.push(all[i])
   	 }
   	}
   	return newarr;
   }
}
function checkstr(lstr,str){
      var arr=lstr.split(" ")
      for (var i = 0; i < arr.length; i++) {
        if(arr[i]==str){
         return true;
        }
      }
      return false;
   }

// !=8 &&!( ==3 && ==“”)
function getChild(obj){    //获取子元素   且不获取注释  及回车
  var arr=[]
  var all=obj.childNodes

  for (var i = 0; i < all.length; i++) {
    if (pd(all[i])) {  //all[i].nodeType!=8&&!(all[i].nodeType==3&&trim(all[i].nodeValue)=="")
      arr.push(all[i])
    };
  }
  return arr
}
//去除字符串两侧空格
   function trim(str){
     return str.replace(/^\s*|\s*$/g,"")
}
//判断   不是注释节点   且     不是      文本节点和空字符串
function pd(obj){
  return obj.nodeType!=8&&!(obj.nodeType==3&&trim(obj.nodeValue)=="")
}
//
function getFirst(obj){
  var all=getChild(obj)
  return all[0]

}
function getLast(obj){
  var all=getChild(obj)
  return all[all.length-1]
}
function getNum(obj,num){    //第几个元素即为num  
  var all=getChild(obj)
  return all[num-1]
}
function getNext(obj){
  var next=obj.nextElementSibling
     if (!next) {
          return false
        };
  // if (!next) {    //当下一个元素不存在时   不报错  保证程序执行
  //   return false

  // };
  while(!pd(next)){
    if (next==null) {
          return false
        };
        next=next.nextSibling
        
  }
  return next
}

function insertAfter(charu,zhihou){
  var parent=zhihou.parentNode
  var next=getNext(zhihou)
  if (next) {
    parent.insertBefore(charu,next)
  }else{
    parent.appendChild(charu)
  }
}


function getDoc(){
  // var doc=null;
  // document.body.scrollTop=0;
  // if (document.body.scrollTop==0) {
  //   doc=document.body
  // }else{
  //   doc=document.documentElement
  // }
    var doc = document.body.scrollTop;  
  if(0==doc){  
      doc = document.documentElement.scrollTop;  
  }
  return doc;
}


 function contains (parent,child) {
  if(parent.contains){
     return parent.contains(child) && parent!=child;
  }else{
    return (parent.compareDocumentPosition(child)===20);
  }
 }
function getEvent(e){
    return e||window.event;
  }
function checkHover (e,target) {
   if(getEvent(e).type=="mouseover"){
      return !contains(target,getEvent(e).relatedTarget || getEvent(e).fromElement)&&
    !((getEvent(e).relatedTarget || getEvent(e).fromElement)===target)
   }else{
    return !contains(target,getEvent(e).relatedTarget || getEvent(e).toElement)&&
    !((getEvent(e).relatedTarget || getEvent(e).toElement)===target)
    }
  }

function hover (obj,overfun,outfun) {
    if(overfun){
      obj.onmouseover=function  (e) {
        if(checkHover(e,obj)){
           overfun.call(obj,[e]);
        }
      }
    }
    if(outfun){
      obj.onmouseout=function  (e) {
        if(checkHover(e,obj)){
           outfun.call(obj,[e]);
        }
      }
    }
}