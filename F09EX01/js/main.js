 window.onload = function() {

    Vue.component('my-jumbo', {
        data: {
            buttonText: "olá"
        },
        template: `<div class="jumbotron">
        <h1 class="display-4">Hello, world!</h1>
        <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr class="my-4">
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <p class="lead">
          <a class="btn btn-primary btn-lg" href="#" role="button">{{buttonText}}</a>
        </p>
      </div>`
      })
      

        const vm = new Vue({
            el: "#intro",
            data: {
            name: "",
            photo: "",
            castles: [
                {
                    nome:"Castelo de Bragança",
                    foto:""
                },
                {
                    nome:"Castelo de Almourol",
                    foto:""
                },
                {
                    nome:"Castelo de Marvão",
                    foto:""
                },
                {
                    nome:"Castelo de Montalegre",
                    foto: ""
                },
                {
                    nome: "Castelo de Sortelha",
                    foto:""
                },
                {
                    nome:"Castelo de Arroiolos",
                    foto:""
                },
                {
                    nome:"Castelo de Santa Maria da Feira",
                    foto:""
                },
                {
                    nome:"Castelo de Lindoso",
                    foto:""
                },
                {
                    nome:"Castelo dos Mouros",
                    foto:""
                },
                {
                    nome:"Castelo de Guimarães",
                    foto:""
                }
            ],
            },

            updated: function(){
                
                //fillterArray()

             },

            methods: {

                compareDate(a, b) {
                    if(a.departure < b.arrival) return -1
                    if(a.departure > b.arrival) return 1
                    else return 0
                    },

                addCastle(){
                    this.castles.push({
                        nome: this.name,
                        foto: this.photo
                    })
                },
                removeTask(index){
                    if (confirm("Vai remover a viagem a "+ this.filteredTravels[index].travel + " clique ok para eliminar.")) {
                        this.travels.splice(index, 1)
                    } 
                    else{
                        console.log("cancel")
                    }
                },


                fillterArray(){

                    this.filteredTravels = []

                    this.filteredTravels = this.travels.filter(
                        (travel) => travel.continente === this.filter || this.filter == "all" 
                    )

                    this.filteredTravels = this.filteredTravels.filter(
                        (travel) => travel.type === this.typeFilter || this.typeFilter == "all"
                    )
                    
                    this.filteredTravels = this.filteredTravels.filter(
                        (travel) => travel.departure === this.dateFilter || this.dateFilter == ""
                    )
                    
                
                   
                       
                    
                },

                editModal(value){
                    vmModal.showModal = true
                    vmModal.editTravel = this.filteredTravels[value].name
                    vmModal.editPais= this.filteredTravels[value].pais
                    vmModal.editContinente= this.filteredTravels[value].continente
                    vmModal.editDesc = this.filteredTravels[value].desc
                    vmModal.editDeparture = this.filteredTravels[value].departure
                    vmModal.editArrival = this.filteredTravels[value].arrival
                    vmModal.ediType = this.filteredTravels[value].type
                    vmModal.editFoto = this.filteredTravels[value].foto
                }

            }
        
        })
        

        // start app
   const vmModal = new Vue({
    el: '#app',
    data: {
        editTravel: "",
        editPais: "",
        editContinente: "",
        editDesc: "",
        editDeparture: "",
        editArrival: "",
        ediType: "",
        editFoto: "",
       showModal: false
     }
     })
        
    }
    