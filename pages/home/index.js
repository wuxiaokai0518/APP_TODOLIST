$(document).ready(function () {
    var list = [{
        title: '吃饭打豆豆'
    }, {
        title: '吃饭打豆豆'
    }];

    new Vue({
        el: '.todo',
        data: {
            list: list
        },
        methods: {
            //添加任务
            addTodo(ev) {
                //向List中添加一项任务
                //事件处理函数的this指向的是，当前这个根实例
                if (ev.keyCode === 13) {
                    this.list.push({
                        title: ev.target.value
                    });
                }

            },
            hiddenTodo() {
                console.log("hiddenTodo");
                $(this).find('img').hide();
            },
            showTodo() {
                console.log("showTodo");
                $(this).find('img').show();
            }
        }
    });
});

