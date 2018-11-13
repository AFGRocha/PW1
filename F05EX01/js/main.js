 window.onload = function() {
        const vm = new Vue({
            el: "#intro",
            data: {
                msg: "Programação Web I"
            },

            created: function(){
                console.log("created")
              
             },
            methods: {
             
                showAlert(){
                    console.log(event.target.tagName)
                    console.log(event.type)
                    alert(this.msg)
                    
                },

                showAlertPar(x){
                    console.log(event)
                    alert(x)
                },

                showMessage(){
                    alert(this.msg)
                    //Parar o bubbling
                    event.stopPropagation()
                    
                }
            }
        
            }) 
    }
    