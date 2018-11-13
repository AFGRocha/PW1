 window.onload = function() {
        const vm = new Vue({
            el: "#intro",
            data: {
            number: 0,
            isValue0: true
            },
            created: function(){
                console.log("created")
                if(localStorage.number) {
                    this.number = parseInt(localStorage.number)
                }
             },
             mounted: function(){
                console.log("mounted")
             },
             updated: function(){
                console.log("updated")
                if(this.number == 0){
                    this.isValue0 = true   
                }
                localStorage.setItem("number", number)
             },
            methods:{
            plus: function(){
                vm.number = vm.number + 1
                this.isValue0 = false
        
            },

            minus: function(){
                if(this.number != 0){
                    vm.number = vm.number - 1
                }
                else{
                    this.isValue0 = true
                }
                
            }
            }
        
            }) 
    }
    