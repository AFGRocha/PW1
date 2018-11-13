 window.onload = function() {
        const vm = new Vue({
            el: "#intro",
            data: {
                msg: "A ESMAD é uma escola do IPP",
                textColor : "black",
                backColor : "white",
                fontSize : "12px",
                show: "visible"
            },
            methods: {
                formatTextColor: function(color){
                    this.textColor = color
                },
                bigText: function(number){
                    this.fontSize = number
                },
                backgroundColor: function(color){
                    this.backColor =color
                },
                showText: function(){
                    if(this.show == "visible"){
                        this.show = "hidden"
                    }
                    else{
                        this.show = "visible"
                    }
                }

            }
        
            }) 
    }
    