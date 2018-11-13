 window.onload = function() {
        const vm = new Vue({
            el: "#intro",
            data: {
            schools: ["ESMAD", "ISEP", "ESE", "ISCAP", "ESTG", "ESS", "ESHT"],
          
            },
            methods: {
                addSchool(){
                    this.schools.push("ESMAE")
                },

                checkE(){
                    this.schools = this.schools.filter(
                        (school) => school[0].indexOf("E") != -1 
                    )
                }

            }
        
            }) 
    }
    