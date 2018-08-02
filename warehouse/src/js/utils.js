export default{
  //js算法
  ALGORITHM:{
    //判断一个单词是否是回文？
    /**
     * 将字符串转成数组，使用数组的reserse的方法，进行反转之后，再次转为字符串
     * 判断转过之后的字符串和原字符串是否一样
     * @param {*} str
     * @returns 布尔值
     */
    checkPalindrome(str) {  
        return str == str.split('').reverse().join('');
    },
    //去掉一组整型数组重复的值
    /**
     *通过对象属性名不重复的原理进行去重
     *
     * @param {*} ary 传入的数组
     * @returns 返回去重之后的数组
     */
    removeDuplicate(ary){
      var arynew=[];
      var aryobj={};
      var len = ary.length;
      for(var i=0;i<len;i++){
         aryobj[ary[i]]  =ary[i];
      };
      for(var key in aryobj){
        arynew.push(key) ;
      };
      return arynew;  
    },
    //获取两个整型数组之间的共同的部分
    /**
     * 
     * 双重循环
     * @param {*} ary1
     * @param {*} ary2
     * @returns 返回的是两个数组中的公共部分
     */
    getCommonAry(ary1,ary2){
      var aryCommon=[];
      ary1.forEach(item2=>{
        ary2.forEach(itemnew1=>{
           if(item2 == itemnew1){
            aryCommon.push(item2) 
           }
        }) 
      }); 
      return  aryCommon;
    },
    //统计一个字符串出现最多的字母,并且出现了多少次
  }
}