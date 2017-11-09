var in1=document.querySelector("#in1");
var in2=document.querySelector("#in2");
var btn=document.querySelector("#btn");
var res=document.querySelector("#res");
 
import addObj from './calc.js'

btn.onclick=function () {
    var val1=parseFloat(in1.value);
    var val2=parseFloat(in2.value);
    res.value=addObj.add(val1,val2)
   /* // es5语法
    var add = require('./calc.js');
    res.value=add(val1,val2)*/
}
/*
//es5语法
//css打包
require('../statics/css/site.css')
// sass打包
require('../statics/css/site1.scss')
// less打包
require('../statics/css/site2.less')
// url打包
require('../statics/imgs/logo.png')
require('../statics/imgs/bg.png')*/

//es6语法
import '../statics/css/site.css'
import '../statics/css/site1.scss'
import '../statics/css/site2.less'
import '../statics/imgs/logo.png'
import '../statics/imgs/bg.png'