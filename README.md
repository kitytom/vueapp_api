1、适配方案
在本项目中我所使用的vue移动方案是使用amfe-flexible 和 postcss-pxtorem 结合）的方式。
首先介绍一下amfe-flexible
amfe-flexible 是配置可伸缩布局方案，主要是将 1rem 设为 viewWidth/10。
然后就是这个库 postcss-pxtorem
postcss-pxtorem是postcss的插件，用于将像素单元生成rem单位。
2、如何使用和配置？
1、安装 amfe-flexible 和 postcss-pxtorem

1
2
npm install amfe-flexible --save
npm install postcss-pxtorem --save
2、安装完成后，肯定需要引入才能使用
我们需要在main.js中引入才能使用
1
import 'amfe-flexible';
这样引入就OK了
自媒体培训

3、然后就是postcss-pxtorem 配置步骤
配置postcss-pxtorem，可在vue.config.js、.postcssrc.js、postcss.config.js其中之一配置，权重从左到右降低，没有则新建文件，只需要设置其中一个即可：
为了方便 我是在 vue.config.js 配置的代码配置如下：

module.exports = {
    //...其他配置
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    require('postcss-pxtorem')({
                        rootValue: 37.5,
                        propList: ['*']
                    })
                ]
            }
        }
    },
}
在.postcssrc.js或postcss.config.js中配置如下：

module.exports = {
    "plugins": {
        'postcss-pxtorem': {
            rootValue: 37.5,
            propList: ['*']
        }
    }
}
注意点：
1、rootValue根据设计稿宽度除以10进行设置，这边假设设计稿为375，即rootValue设为37.5；
2、propList是设置需要转换的属性，这边*为所有都进行转换。
通过以上配置我们就可以在项目使用了。
比如项目中我们这样写：
.login-form {
    width: 90%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    padding: 20px;
    box-sizing: border-box;
    border-radius: 10px;
    .title {
      position: absolute;
      top: -50px;
      font-size: 24px;
      color: #fff;
      left: 0;
      right: 0;
      text-align: center;
    }
  }
那我们代码的产出就是下面这样的 ，插件实惠帮我们自动转换单位。

login-wraper .login-form {
    width: 90%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background-color: #fff;
    padding: .53333rem; // 注意这个就是转换后的单位
    box-sizing: border-box;
    border-radius: .26667rem;  // 注意这个就是转换后的单位
}
到此这篇关于vue 移动端完美适配方案的文章就介绍到这了,更多相关vue 移动端完美适配方案内容请搜索脚本之家以前的文章或继续浏览下面的相关文章希望大家以后多多支持脚本之家！

您可能感兴趣的文章:
vue开发移动端h5环境搭建的全过程
vue3+ts+vant移动端H5项目搭建的实现步骤
详解搭建一个vue-cli的移动端H5开发模板
vue中的H5移动端项目 真机测试配置方式


解决方案二：
 在指令末尾加上 -force ，例如：

npm i vant@latest-v2 -S -force