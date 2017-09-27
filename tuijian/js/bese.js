var use_id,token1;//定义用户id，令牌，城市
//获取从安卓传来的数据
document.addEventListener( "plusready", check_login, false );
function check_login(){
	// 处理第三方传入的参数
	if ( plus.runtime.arguments != "" ) {
	var obj = JSON.parse(plus.runtime.arguments);
	 use_id = obj.userid;
	 token1  = obj.token;

	if(token1 == -1){
//		alert('用户未登录！');
		function njsStartActivity()
		{
			var REQUESTCODE = 1000; //赋值一个变量 验证传值
			main = plus.android.runtimeMainActivity(); //获取activity
			var Intent = plus.android.importClass('android.content.Intent'); //引入 Intent intent是activity里面的事件 可以进行传值
			var ContactsContract = plus.android.importClass('android.content.Intent'); //安卓系统自带的类 搞联系人的
			var intent = new Intent("aaaaaa"); //事件用来传值
			main.onActivityResult = function(requestCode, resultCode, data)
			{   //Activity结束后传过来的值   h5传的值requestCode 安卓传的值
		 		if(requestCode==1000)
		 		{
		 			var data1 = data.getStringExtra("888");
						use_id = data1.userid;
						token1 = data1.token;
						alert(data1);
				}
	
			};
			main.startActivityForResult(intent, REQUESTCODE);
		};
		njsStartActivity();
	}
	if(token1 != -1){
//		alert('用户已登录');
	   		use_id = use_id;
	   		token1 = token1;
	   		mui.toast(use_id);
	   		mui.toast(token1);
	   	}
	}
}
