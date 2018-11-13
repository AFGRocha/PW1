 window.onload = function() {

    Vue.component('modal', {
        template: '#modal-template'
      })
      

        const vm = new Vue({
            el: "#intro",
            data: {
            travel: "",
            pais: "",
            continente: "",
            desc: "",
            departure: "",
            arrival: "",
            type: "ferias",
            foto: "",
            travels: [],
            filter: "all" ,
            dateFilter: "",
            typeFilter: "all",
            filteredTravels: [],

            editName: "",
            editPais: "",
            editContinente: "",
            editDesc: "",
            editDeparture: "",
            editArrival: "",
            editType: "ferias",
            editFoto: "",
            editIndex: 0
            },

            created() {
                // Add listener to save tasks only when the tab closes
                window.addEventListener('unload', this.saveStorage)
                // Get tasks from the localstorage
                if (localStorage.getItem("travels")) {
                    this.filteredTravels = JSON.parse(localStorage.getItem("travels"))
                    this.travels = JSON.parse(localStorage.getItem("travels"))
                }
            },

            methods: {
                getLastId() {

                    if (this.travels.length > 0)
                        return this.travels[this.travels.length - 1].id + 1
                    else
                        return 0
                },
        

                compareDate(a, b) {
                    if(a.departure < b.arrival) return -1
                    if(a.departure > b.arrival) return 1
                    else return 0
                    },

                addTravel(){
                    this.travels.push({
                        id: this.getLastId(),
                        name: this.travel,
                        pais: this.pais, 
                        continente: this.continente, 
                        desc: this.desc,
                        departure: this.departure, 
                        arrival:this.arrival, 
                        type: this.type, 
                        foto: this.foto
                    })
                    console.log(this.travels)
                    this.travels.sort(this.compareDate)
                    this.filteredTravels = this.travels
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

                editTravel(index){

                    document.getElementById("editTravelDialog").showModal()
                    editIndex = index
                    this.editName = this.travels[this.filteredTravels[index].id].name
                    this.editPais = this.travels[this.filteredTravels[index].id].pais
                    this.editContinente = this.travels[this.filteredTravels[index].id].continente
                    this.editDesc = this.travels[this.filteredTravels[index].id].desc
                    this.editDeparture = this.travels[this.filteredTravels[index].id].departure
                    this.editArrival = this.travels[this.filteredTravels[index].id].arrival
                    this.editType = this.travels[this.filteredTravels[index].id].type
                    this.editFoto = this.travels[this.filteredTravels[index].id].foto
                },

                saveEdit(index){
                    this.travels[this.filteredTravels[editIndex].id].name = this.editName
                    this.travels[this.filteredTravels[editIndex].id].pais = this.editPais 
                    this.travels[this.filteredTravels[editIndex].id].continente = this.editContinente
                    this.travels[this.filteredTravels[editIndex].id].desc = this.editDesc
                    this.travels[this.filteredTravels[editIndex].id].departure = this.editDeparture
                    this.travels[this.filteredTravels[editIndex].id].arrival = this.editArrival
                    this.travels[this.filteredTravels[editIndex].id].type = this.editType
                    this.travels[this.filteredTravels[editIndex].id].foto = this.editFoto
                    document.getElementById("editTravelDialog").close()
                    this.fillterArray()
                },

                   // Save tasks in the localstorage
                   saveStorage() {            
                  
                  localStorage.setItem("travels",JSON.stringify(this.travels))

                }
            }
        
        })
        
    }
    