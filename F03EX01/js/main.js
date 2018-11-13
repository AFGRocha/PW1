 window.onload = function() {
        const vm = new Vue({
            el: "#intro",
            data: {
                person: { firstName: "Rui", lastName: "Silva", age: 23}
            },
            created: function(){
                console.log("EVENTO: CRIAÇÃO ")
             },
             mounted: function(){
                console.log("EVENTO: MONTAGEM")
                
             },
             updated: function(){
                console.log("EVENTO: ATUALIZAÇÃO")
             },
            methods: {
                dataPerson: function(){
                    console.log("METHOD > NOME: "+ this.person.firstName + " IDADE: " + this.person.age)
                }
            },
            computed: {
                dataPersonComputed: function(){
                    console.log("COMPUTED > NOME: "+ this.person.firstName + " IDADE: " + this.person.age)
                }
            }
        
            }) 
    }
    