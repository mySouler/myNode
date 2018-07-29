
<template>
//父组件
<myRadio @change="changeRadio"  v-model="myVal" value="冰山"></myRadio>

<myRadio @change="changeRadio" v-model="myVal" value="被动" :disabled="notOne"></myRadio>
<script>
data() {
  return {
    myVal:'',
    closeRadio:''
  }
}
methods：{
    changeRadio(val){
       if( this.closeRadio == val ){
           this.myVal =''
       }
    },
}

//配合watch可以取消单选
watch: {
      myVal:function(val){
          this.closeRadio = val
      },
}

</script>
</template>

//子组件 myRadio

<template>


  <!--这里设置了选中后的radio样式类,和禁用后的样式类-->
  <label class="myRadio" :class="{'checked':model==value,'disabled':disabled}">
    <input type="radio" ref="radio" :value="value" @click="updateVal" :disabled="disabled">
   
  </label>
 
  
</template>
<script>
export default {
  name:'myRadio',//radio组件名称
  model: {//自定义 v-model的 prop和event,这个定义的意思就是使用change事件更新model的值,以此来实时更新v-model的值
    prop: 'model',
    event: 'change'
  },
  props:{
    value:{//radio的value属性
      type:[String,Number],
      require:true
    },
    model:{//这里的model指的是上面定义的v-model的prop
      type:[String,Number],
      require:true
    },
    checked:{//是否默认选中
      type:Boolean,
      default:false
    },
    disabled:{//是否禁用
      type:Boolean,
      default:false
    }
  },
  mounted:function(){//当dom渲染完成,判断组件是否默认选中
    if(this.checked===true)
      this.updateVal();
  },
  methods:{
    updateVal:function(){//当用户点击radio时,触发change事件更新v-model
    event.stopPropagation()
      this.$emit('change',this.$refs.radio.value);
    }
  }
}
</script>

<style>
.myRadio{


    position: relative;
    width: 15px;
    height: 15px;
    background-color: #0000;
    border: solid 1px #3b4665;
    background-clip: padding-box;
    display: inline-block;
    -webkit-appearance: none;

    border-radius: 2px;
}
.myRadio.disabled{
  background: #ccc;
}
.myRadio::after{
    background:#3b4665;
}
.myRadio.disabled::after{
  background-color: #ccc;
}
.myRadio.checked{
        background: #3b4665
}
.myRadio.checked::after {
   
   content: '';
    position: absolute;
    width: 9px;
    height: 5px;
    background: transparent;
    top: 1px;
    left: 1px;
    border: 2px solid #fff;
    border-top: none;
    border-right: none;

    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    transform: rotate(-45deg);
}

</style>
