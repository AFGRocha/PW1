 window.onload = function() {
        const vm = new Vue({
            el: "#intro",
            data: {
            task: "",
            type: "pessoal",
            tasks: [],
            filter: "all" ,
            filteredTasks: []
            
          
            },

            created() {
                // Add listener to save tasks only when the tab closes
                window.addEventListener('unload', this.saveStorage)
                // Get tasks from the localstorage
                if (localStorage.getItem("tasks")) {
                    this.filteredTasks = JSON.parse(localStorage.getItem("tasks"))
                    
                }
            },

            methods: {
                addTask(){
                    this.tasks.push({name: this.task, type: this.type})
                    console.log(this.tasks)
                    this.fillterArray()
                },
                removeTask(index){
                    this.tasks.splice(index, 1)

                },
                fillterArray(){
                   this.filteredTasks = this.tasks.filter(
                       (task) => task.type === this.filter || this.filter == "all"
                   )

                   console.log(this.filteredTasks)
                },

                 // Save tasks in the localstorage
                saveStorage() {            
                    localStorage.setItem("tasks",JSON.stringify(this.tasks))

                }

            }
        
            }) 
    }
    