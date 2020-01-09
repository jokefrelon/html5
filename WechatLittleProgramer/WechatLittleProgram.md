# 微信小程序遇到的坑

微信小程序其实很简单,和 **HTML** 差不多,但是又加入了微信的很多特色,我也是本着写着玩的心态写了几天的小程序,发现有很多坑哦,和 **HTML**还是有点差距的

## 1 文本超出隐藏并加…

其实在html里面这段代码很简单,只要在父元素里面定义

~~~css
overflow:hidden;
text-overflow: ellipsis;
white-space: nowrap;
~~~

但是微信小程序就邪了门了,在电脑上看的好好的,可到了真机预览就失效了,

而且还只是IOS平台出现问题,Android并没有问题,这就见鬼了吗!!同样的代码,还能有不同疗效的???

### 1.1 Answer :

然后百度,得答案:子元素还必须是 **text** 元素才会生效,这是因为IOS的 **Safari** 浏览器的特立独行吧,

还有的说需要设置一下宽度就可以解决,反正这个方法我没有试,懒得试

## 2 background-attachment:fixed

这个属性是用来设置背景图的,但是还是在 **IOS** 这里出现了问题,反观 **Android** 那边一切都很正常😂

本来固定背景图片就是一个常用的功能,但是 **IOS** 这边就是死活不兼容这个属性,一开始我这样写,出错了我还以为是我自己の问题,在哪里倒腾了大半天,无果,百度发现这是一个很普遍的现象,那些大神解决问题的方式倒也很直接,不用这个属性,自己在写一个 **view** 放在最下面一层

### 2.1 Answer :

~~~css
  position:fixed;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background:url('http://172.17.150.251:8080/pic/bk7.jpg') no-repeat #000;
  background-size:cover;
  z-index:-1;
~~~

## 3 wx : for

~~~html
<view class="acf" wx:for="{{heloi}}" wx:key="index">
		<view class="bhk" data-arturl="{{item.article}}" bindtap="showNextPage">
			<div class="guli"><text class="intro">{{item.introduce}}</text></div>
			<div class="ddas">
				<image class="pic" src='{{item.picurl}}'></image>
			</div>
		</view>
	</view>
~~~

~~~javascript
  onLoad: function () {
    var _self = this
    wx.request({
      url: "http://172.17.150.251:8080/as.json",
      success: function (qum) {
        _self.setData({
          heloi: qum.data.page,
        })
      }
    })
  },
~~~

wx:for用来解析服务器返回的 **json** 是真的很棒的,可以一键迭代生成很多的内容



## 4 不同页面间传参

这是困扰我最长时间的一个问题了,因为不太熟悉小程序,只能看别人怎么写,我就跟着这样写,毫无灵魂,也上网百度了,都是看的一知半解,就目前而言,我还不是特别会页面间的传参,但是,还是可以写出来点东西的

上代码:

~~~html
<view class="bhk" data-arturl="{{item.article}}" bindtap="showNextPage">LOL😁</view>
~~~

~~~javascript
showNextPage: function (event) {
  var url = event.currentTarget.dataset.arturl
  console.log(url)
  wx.navigateTo({
    url: "/pages/aitrcle/aitrcle?url="+url,
    success: function () { 
      console.log("Success! Congratulate!")
    },
    fail: function () { console.log("faild!!!") },
  })
}
~~~

下面是 **article** 的 **js** 

~~~javascript
onLoad: function (options) {
    var that = this
    that.data.paurl =options.url
    console.log(that.data.paurl)

    wx.request({
      url:that.data.paurl,
      success:function(){
        console.log("Yes! U did")
      },
      false:function(){
        console.log("false")
      }
    })
  }
~~~

我只会这种简单的页面传参,还有别的传参方法,比如:	

#### 使用数据库传递数据,

#### 全局变量使用方法

#### 使用缓存传递参数,使用组件模板 template传递参数





~~~
docker run --detach --name solo --network=host \
--env RUNTIME_DB="MYSQL" \
--env JDBC_USERNAME="root" \
--env JDBC_PASSWORD="123123" \
--env JDBC_DRIVER="com.mysql.cj.jdbc.Driver" \
--env JDBC_URL="jdbc:mysql://127.0.0.1:3306/solo?useUnicode=yes&characterEncoding=UTF-8&useSSL=false&serverTimezone=UTC" \
b3log/solo --listen_port=80 --server_scheme=https --server_host=www.jokeme.top --server_port=

docker stop nginx
docker rm nginx 
docker run -d -p 80:80 -p 443:443 --name nginx \
-v /dockerData/nginx/conf/nginx.conf:/etc/nginx/nginx.conf \
-v /dockerData/nginx/conf/conf.d:/etc/nginx/conf.d \
-v /dockerData/nginx/ssl:/ssl/ \
-v /dockerData/nginx/www:/usr/share/nginx/html \
-v /dockerData/nginx/logs:/var/log/nginx nginx

~~~

