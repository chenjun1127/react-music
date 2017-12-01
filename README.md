## React-Music


### 一、简介
该项目是基于React全家桶开发的一个音乐播放器，技术栈采用：Webpack + React + React-redux + React-router + Node + Sass + Es6 + Localstorage+ Css3，基本音乐API使用http-proxy酷狗音乐的，在此感谢酷狗音乐！项目涉及的知识点非常广泛，基于react全家桶技术都有使用，原创独立开发精品之作，具有很好的参考价值！

1、项目依赖基本核心版本：
* react: "^15.6.1",
* react-dom: "^15.6.1",
* react-router: "^4.2.0",
* react-router-dom: "^4.2.2"
* react-redux: "^5.0.6",
* redux: "^3.7.2",
* webpack: "^3.5.5",
* webpack-dev-server: "^2.7.1"

2、该音乐播放器基本功能：
* 展示最新的推荐歌单、歌单、排行榜、歌手；
* 音乐的播放、暂停、上一首、下一首、删除当前播放列表功能；
* 控制音量大小，搜索加入历史存储功能；
* 基本搜索功能；
* 喜欢音乐加入收藏列表；
* 模拟登录功能（随便输入用户名，密码即可）；

3、项目动图预览：

![首页](/pic.gif)

### 二、项目结构

```javascript
├── src               			项目主文件目录
│   ├── actions           		Redux actions
│   │   ├── xxx.js
│   │   └── ...
│   ├── components      		木偶组件主目录
│   │   ├──	Artist
│   │   │	├── xxx.js
│   │   │	└── ...
│   │   ├──	Common
│   │   │	├── xxx.js
│   │   │   └── ...
│   │   ├──	Home
│   │   │	├── xxx.js
│   │   │	└── ...
│   │   ├──	New
│   │   │	├── xxx.js
│   │   │	└── ...
│   │   ├──	Play
│   │   │	├── xxx.js
│   │   │	└── ...
│   │   ├──	Rank
│   │   │	├── xxx.js
│   │   │	└── ...
│   │   ├──	Search
│   │   │	├── xxx.js
│   │   │	└── ...   
│   │   └── User
│   │   	├── xxx.js
│   │   	└── ...
│   ├── constants          		Constant 常量
│   │   └── index.js
│   ├── reducers          		Redux reducers
│   │   ├── index.js
│   │   └── ...
│   ├── containers          		智能组件 
│   │   ├──	Artist
│   │   │	├── xxx.js
│   │   │	└── ...
│   │   ├──	Home
│   │   │	├── xxx.js
│   │   │	└── ...
│   │   ├──	New
│   │   │	├── xxx.js
│   │   │	└── ...
│   │   ├──	Play
│   │   │	├── xxx.js
│   │   │	└── ...
│   │   ├──	Rank
│   │   │	├── xxx.js
│   │   │	└── ...
│   │   ├──	Search
│   │   │	├── xxx.js
│   │   │	└── ...   
│   │   └── User
│   │   	├── xxx.js
│   │   	└── ...
│   ├── routes          		路由
│   │   └── index.js
│   ├── static          		静态文件目录
│   │   ├──	css
│   │   │	├── xxx.scss
│   │   │	└── ...   
│   │   └── images
│   │   	└── ...
│   ├── store          			Redux store
│   │   └── configureStore.js
│   ├── util          			工具目录
│   │   ├── xxx.js
│   │   └── ...
├── templates               	 	模板    	
│   └── index.html	
├── dist               			打包生成目录          	
│   ├── css          	
│   │   └── xxx.css
│   ├── js          		
│   │	├── xxx.js
│   │	└── ...
│   ├── favicon.ico
│   └── index.html
├── node_modules               	
│   └── ...					 
├── README.md
├── app.js            			Express下的启动配置
├── server.js        			主要服务启动文件   
├── webpack.config.js     		基本配置      
├── webpack.prod.config.js 		生产环境配置
├── yarn.lock         			
└── package.json
```
### 三、如何执行

####  1、将项目克隆到本地，cd 到 react-music
```javascript
git clone git@github.com:chenjun1127/react-music.git
cd react-music
```
#### 2、安装依赖
```javascript
npm install or yarn install
```
#### 3、执行
```javascript
npm start or yarn start
// npm run build(打包)
```
#### 4、打开浏览器浏览 [http://localhost:3000/](http://localhost:3000/)，强烈建议使用 Chrome、Firefox 浏览器浏览。

### 四、项目总结
整体项目实现了一个基本播放器应有的功能，但个别功能还有待完善，比如收藏列表本地持续化存储、登录注册未做真正限制等。觉得项目不错的，可以给个Star，谢谢！
如果您觉得本项目对你有所帮助，不妨扫描下方二维码（左微信，右支付宝）请我喝杯咖啡，谢谢！

![微信](/QR-code/weixin.png)
![支付宝](/QR-code/zhifubao.png)

Tips：在npm install or yarn install 的时候，请确保网络良好，如个别依赖安装不了，请设置淘宝镜像为安装源；

如有问题：请联系QQ：402074940