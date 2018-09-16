$(document).ready(function() {
  var list = [];

  new Vue({
    el: ".todo",
    data: {
      current: 0,
      list: list,
      classenable: false
    },
    methods: {
      //添加任务
      addTodo(ev) {
        //向List中添加一项任务
        //事件处理函数的this指向的是，当前这个根实例
        if (ev.keyCode === 13) {
          //判断是否为空，为空不添加
          if (ev.target.value == "") {
            return;
          }
          //否则，添加
          this.list.push({
            title: ev.target.value
          });
          //添加完清空
          ev.target.value = "";
        }
      },
      hiddenTodo(index) {
        this.classenable = true;
        this.current = index;
      },
      showTodo(index) {
        this.classenable = false;
        this.current = index;
      },
      delTodo(index){
        alert("删除"+index+"行");
      }
    }
  });
});
