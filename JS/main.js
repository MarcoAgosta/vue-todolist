const{createApp} = Vue;
createApp({
    data(){
        return {
            todolist:[
                {
                    text: "Dare da mangiare al cane",
                    done: false,
                },{
                    text: "Andare a fare la spesa",
                    done: false,
                }
            ],

            stringa:""
        }
    },
    methods:{

        changeDone(i){
            
            if (this.todolist[i].done==false){
                this.todolist[i].done=true;

            } else if (this.todolist[i].done==true){
                this.todolist[i].done=false;
            }
        },

        eliminateElement(i){
            this.todolist.splice(i, 1)
        },

        submitElement(){
            const newElement={
                text:this.stringa,
                done:false
            }
            this.todolist.push(newElement)
        }
    },

}).mount("#app")