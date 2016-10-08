window.onload=function(){
        var box=document.getElementsByClassName("box")//获取一个类名"box"，定义为box
         var leftbtn=document.getElementsByClassName("leftbtn")//获取一个类名"leftbtn"，定义为leftbtn
         var rightbtn=document.getElementsByClassName("rightbtn")//获取一个类名"rightbtn"，定义为rightbtn
         // var btnbox=document.getElementsByClassName("btnbox")//获取按钮的类名
         // var circles=btnbox.getElementsByTagName('div')//通过父元素获取子元素
         var btn1=document.getElementsByClassName("btn1")
         var btn2=document.getElementsByClassName("btn2")
         var inner=document.getElementsByClassName("inner")//获取类名inner定义为inner
         for (var i = 0; i < box.length; i++) {
             lunbo2(box[i],leftbtn[i],rightbtn[i],btn1[i],btn2[i],inner[i])
         };
       function lunbo2(box,leftbtn,rightbtn,btn1,btn2,inner){
        // var btn1=document.getElementsByClassName("btn1")
        //  var btn2=document.getElementsByClassName("btn2")
         // var circles=btnbox.getElementsByTagName('div')//通过父元素获取子元素
         var flag=true;
         box.onmouseover=function(){  //鼠标经过时，两个变量的位置
             animate(leftbtn,{left:0},200)
             animate(rightbtn,{right:0},200)
         }
         box.onmouseout=function(){//鼠标离开时，两个变量的位置
             animate(leftbtn,{left:-30},200)
             animate(rightbtn,{right:-30},200)
         }
         leftbtn.onmouseover=function(){//鼠标经过时leftbtn的图片位置
             this.style.backgroundPosition="left bottom"
         }
          rightbtn.onmouseover=function(){//鼠标经过时rightbtn的图片位置
             if(flag){
             this.style.backgroundPosition="right bottom"
            }
         }
          leftbtn.onmouseout=function(){//鼠标离开时leftbtn的图片位置
             this.style.backgroundPosition="left top"
         }
          rightbtn.onmouseout=function(){//鼠标离开时rightbtn的图片位置
             this.style.backgroundPosition="right top"
         }
          //箭头和圆圈的点击效果
         rightbtn.onclick=moveright  //将右按钮的点击效果定义为moveright
         leftbtn.onclick=moveleft    //左按钮。。。
         btn1.onclick=moveleft//右圆圈
         btn2.onclick=moveright//左圆圈
         function moveright(){
             flag=false; //当flag的值为false时
            animate(inner,{marginLeft:-390})//inner向右移动390像素
            btn1.style.background="#555"//下标为0的圆圈背景为#555
            btn2.style.background="#E5004F"//下标为1的圆圈背景为**
         }
         function moveleft(){
             flag=true;//当flag的值为true时
            animate(inner,{marginRight:-390})
            animate(inner,{marginLeft:0})
            btn2.style.background="#555"
            btn1.style.background="#E5004F"
         }
       }
       function border(obj,time){//定义一个函数border，两个参数对象和时间
             obj.style.position="relative";//obj样式,相对定位
             var div1=document.createElement("div");//创建div对象
             var div2=document.createElement("div");
             var div3=document.createElement("div");
             var div4=document.createElement("div");
             div1.style.cssText="position:absolute;background:#666;left:-1px;top:-1px;height:1px;"//给添加的div写样式
             div2.style.cssText="position:absolute;background:#666;left:-1px;top:-1px;width:1px;"
             div3.style.cssText="position:absolute;background:#666;right:-1px;bottom:-1px;height:1px;"
             div4.style.cssText="position:absolute;background:#666;right:-1px;bottom:-1px;width:1px;"
             obj.appendChild(div1)//向父容器obj中添加刚才的div
             obj.appendChild(div2)
             obj.appendChild(div3)
             obj.appendChild(div4)
             var width=parseInt(window.getComputedStyle(obj,null).width)+2;
             var height=parseInt(window.getComputedStyle(obj,null).height)+2;
             obj.onmouseover=function(){
                 animate(div1,{width,width},time)
                 animate(div2,{height,height},time)
                 animate(div3,{width,width},time)
                 animate(div4,{height,height},time)
             }
             obj.onmouseout=function(){
                 animate(div1,{width:0},time)
                 animate(div2,{height:0},time)
                 animate(div3,{width:0},time)
                 animate(div4,{height:0},time)
             }                
        }
        var aa =$(".aa");
        var bb =$(".bb");
        for (var i = 0; i < aa.length; i++) {
           border(aa[i],700)
        };
        for (var i = 0; i < bb.length; i++) {
          border(bb[i],700)
        };
var wechat=$(".wechat")[0];
var weixin=$(".weixin")[0];
var shouji=$(".shouji")[0];
var phone=$(".phone")[0];
weixin.onmouseover=function(){
  wechat.style.display="block";
}
weixin.onmouseout=function(){
  wechat.style.display="none";
}
shouji.onmouseover=function(){
  phone.style.display="block";
}
shouji.onmouseout=function(){
  phone.style.display="none";
}



//banner左边小图
   var banright=$(".banner-right")[0];
   banright.onmouseover=function(){
       animate(banright,{right:5},100)
   }
   banright.onmouseout=function(){
       animate(banright,{right:0},100)
   }

//banner轮播
   var btn3=$(".banner-btn");
   var bgs=$(".banner-tu");
   var bgc=$(".banner-box")[0];
   var arr=["#9FD0F0","#CECC9B","#F2F2F0"]
   var num=0;
   var t = setInterval(move,2000)
   function move(){
    num++;
    if (num==bgs.length) {
      num=0;
    };
      for (var i = 0; i < btn3.length; i++) {
                btn3[i].style.background="#211616"
                bgs[i].style.zIndex=1;
            };
                btn3[num].style.background="#E5004F";
                bgs[num].style.zIndex=2;
                bgc.style.background=arr[num];
    
   }
        bgc.onmouseover=function(){
            clearInterval(t)
        }
        bgc.onmouseout=function(){
             t = setInterval(move,2000)
        }
        for (var i = 0; i < btn3.length; i++) {
          btn3[i].index=i
          btn3[i].onmouseover=function(){
            for (var i = 0; i < btn3.length; i++) {
                btn3[i].style.background="#211616"
                bgs[i].style.zIndex=1;
            };
                btn3[this.index].style.background="#E5004F";
                bgs[this.index].style.zIndex=2;
                bgc.style.background=arr[this.index];
        };
        

        }
    
//选项卡效果
   var title=$(".title");
   var body=$(".brand1-body");
   for (var i = 0; i < title.length; i++) {
    title[i].index=i
    title[i].onmouseover=function(){
        for (var i = 0; i < title.length; i++) {
            body[i].style.zIndex=0;
        };
        body[this.index].style.zIndex=9;
    
   }
   };
var rb=$(".rb");
var rightBox=$(".right-box");
for (var i = 0; i < rb.length; i++) {
  rb[i].index=i;
  rb[i].onmouseover=function(){
    for (var i = 0; i < rb.length; i++) {
      rightBox[i].style.display="none";
    };
    rightBox[this.index].style.display="block";
  }
};



var left=$(".left");
var list1=$(".list1-1");
for (var i = 0; i < left.length; i++) {
  left[i].index=i;
  left[i].onmouseover=function(){
    for (var i = 0; i < list1.length; i++) {
      list1[i].style.backgroundImage="../img/6.png"
    }
    list1[this.index].style.backgroundImage="../img/6_2.png"
  }
};




  var leftbtn1=$(".leftbtn1")[0];
  var rightbtn1=$(".rightbtn1")[0];
  var banner=$(".banner")[0];
    banner.onmouseover=function(){
        leftbtn1.style.display="block";
        rightbtn1.style.display="block";
    }
    banner.onmouseout=function(){
        leftbtn1.style.display="none";
        rightbtn1.style.display="none";
    }
   leftbtn1.onclick=moveLeft;
   rightbtn1.onclick=moveRight;
   function moveRight(){
    move();
   }
   function moveLeft(){
    num--;
    if (num==-1) {
      num=0
    };
    for (var i = 0; i < btn3.length; i++) {
      bgs[i].style.zIndex="1"
      btn3[i].style.backgroundColor="#211616"
    };
    bgs[num].style.zIndex="2";
    btn3[num].style.backgroundColor="#E5004f"
   }
   
   var list=$(".list")[0];
   var nav=$(".nav")[0];
   list.onmouseover=function(){
    nav.style.display="block";
   }
   list.onmouseout=function(){
    nav.style.display="none";
   }
  var floorBox=$(".floor_box");
  var floor=$(".floor")
  for (var i = 0; i < floorBox.length; i++) {
    floor[i].index=i
    floor[i].onmouseover=function(){
      for (var i = 0; i < floorBox.length; i++) {
        floorBox[i].style.display="none"
      };
      floorBox[this.index].style.display="block"
     }; 
     floor[i].onmouseout=function(){
      floorBox[this.index].style.display="none"
     }
    }
  var returnTop=$(".nav10")[0];
  var doc=getDoc();
  var big3box=$(".big3-box");
   document.documentElement.scrollTop=1;
      if (document.documentElement.scrollTop==1) {
        //判断滚动事件的兼容性
        var scrollobj=document.documentElement;
      }else{
        var scrollobj=document.body;
      }
      var floorRight=$(".floor_right")[0];
  window.onscroll=function(){
    var st=scrollobj.scrollTop;
    
  if (st>750) {
    floorRight.style.display="block"
  }else{
    floorRight.style.display="none"
  };
      var op=st+400
      for (var j = 0; j < big3box.length; j++) {
        if(op>(big3box[j].offsetTop-10)){
          for (var i = 0; i < big3box.length; i++) {
            floorBox[i].style.background=""
          };
          floorBox[j].style.background="#E5004F"
        }
      };
   returnTop.onclick=function(){
    animate(scrollobj,{scrollTop:0})
   }
   for (var i = 0; i < big3box.length; i++) {
      floorBox[i].index=i
      for (var j = 0; j < big3box.length; j++) {
          floorBox[j].onclick=function(){
          var height=big3box[this.index].offsetTop
          
          animate(scrollobj,{scrollTop:height},1000)
        };
      }
    };
    // var gg=$(".gg");
    //   var arr = [];
    //   var doc=getDoc();
    //   var h=doc.clientHeight;
    //   for (var i = 0; i < gg.length; i++) {
    //     arr.push(gg[i].offsetTop)
    //   };
    //   doc.scrollTop=1;
      

     
      // var gg=$(".gg"); 
      //   for (var i = 0; i < gg.length; i++) {
      //     if ((doc.scrollTop+h+60)>arr[i]&&!gg[i].getAttribute("flag")) {
      //                   var imgs=$("img",gg[i])
      //                   for (var j = 0; j < imgs.length; j++) {
      //                     imgs[j].src=imgs[j].getAttribute("asrc")
      //                   };
      //                   gg[i].getAttribute("flag",true)
      //     };
          
      //   };
      
  }
   var bigBox=$(".big3-nav2");
    var fl=$(".floor-l");
    var fr=$(".floor-r");
    var flag=true;
    for (var i = 0; i < fl.length; i++) {
       lunbo(bigBox[i*3],fl[i],fr[i])
    }
    function lunbo(bigBox,fl,fr){
      fr.onclick=function(){
        if (!flag) {return ;};
        flag=false
          animate(bigBox,{marginLeft:-160},1000,
            function(){
            var first=getFirst(this);
            this.appendChild(first);
            this.style.marginLeft=0;
            flag=true
          })
      }
      fl.onclick=function(){
        var last=getLast(bigBox);
        var first=getFirst(bigBox);
        if (!flag) {return ;};
        flag=false
        bigBox.insertBefore(last,first);
        bigBox.style.marginLeft="-160px";
        animate(bigBox,{marginLeft:0},1000,function(){
          flag=true
        })
      }
    }

var head5_btn=$(".daohangzuo");
  var head5_left=$(".head-left1-11");
 for (var i = 0; i < head5_btn.length; i++) {
   head5_btn[i].index=i;
   hover(head5_btn[i],function(){
    head5_left[this.index].style.display="block"
   },function(){
    head5_left[this.index].style.display="none"
   })
 }




}
