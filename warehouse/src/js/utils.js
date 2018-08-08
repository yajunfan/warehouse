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
    //获取字符串中出现最多的字母并且出现的次数
    /**
     *注意的是对象的循环，在for in循环中，obj.key指的是添加一个key的属性值，而不会获取到key的值
     *使用obj[key]
     * @param {*} str 需要进行计算的字符串
     * @returns 返回获取到的字母和次数
     */
    stringnum(str){
      var ary=str.split("");
      //首先将目前有的集中可能放在对象中保存
      var obj={};
      ary.forEach((item,index)=>{
        obj[item] = 0;
      });
      //进行循环，通过原数组比较，相同的字母进行累加
      
      for(var i=0;i<ary.length;i++){
        var item = ary[i];
        for(var key in obj){
          if(key == item){
            obj[key]++;
          }
        }
      };
      //对新的对象进行循环，获取到出现频率最高并且出现的次数
      var n=0,objbiger={};
      for(var key in obj){
        if(n<obj[key]){
          n = obj[key]
          objbiger={"name":[key],"num":n};
        }
      };
      return objbiger;
    },
    //冒泡排序
    /**
     *两两进行比较，因为比较到最后，不需要和后面的再进行比较，因为自己本身就是最后一个
     *
     * @param {*} ary 需要进行排序的数组，可以是数字数组，也可以是字母数组，
     * @returns
     */
    bubblesort(ary){
      for(var i=0;i<ary.length-1;i++){
        for(var j=0;j<ary.length-1-i;j++){
           var itemF=ary[j];
           var itemA=ary[j+1];
           if(itemF>itemA){
             var temp = itemF;
             ary[j]= itemA;
             ary[j+1] = temp;
           }
        }
      }
      return ary;
    },
    //快速排序
    /**
     *快速排序，主要使用那个递归，将一个数组中的一个值取出，让数组中的每一个与它进行比较，比他大的放在右边的数组中，比他小的放在左边的数组中，
     * 然后将获取到的左右再次进行分左右，知道左右两边的数组都是只剩一个的时候，进行拼接左中右数组
     * @param {*} ary 要排序的数组
     * @returns  返回拍好的数组
     */
    quicksort(ary){
      var leftary=[],rightary=[],middleary=[],num=ary[0];
      if(ary.length<1){
        return ary;
      }
      for(var i=0;i<ary.length;i++){
        var item = ary[i];
        if(item>num){
          rightary.push(item);
        }else if(item<num){
          leftary.push(item);
        }else {
          middleary.push(item);
        }
      }
      var aryback=quick(leftary).concat(middleary).concat(quick(rightary));
      return aryback;
    },
    //找到一串正整数的最大的差值
    /**
     *通过不停的赋值，比较当前的上次的较小值获取到更小的那个值，然后将当前值和较小的值得到结果
     *
     * @param {*} ary
     * @returns
     */
    getMax(ary){
      var minnum = ary[0];
      var maxnum = 0;
      for(var i=0;i<ary.length;i++){
        var item = ary[i];
        minnum = Math.min(item,minnum);
        var value = item - minnum;
        maxnum = Math.max(maxnum,value);
      }
      return  maxnum;
    }

  }
}