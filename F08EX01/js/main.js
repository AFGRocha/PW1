 window.onload = function() {

    Vue.component('modal', {
        template: '#modal-template'
      })
      

        const vm = new Vue({
            el: "#intro",
            data: {
            name: "",
            photo: "",
            year: 0,
            dCastleImg: "",
            editName: "",
            editPhoto: "",
            editYear:"",
            editId: 0,
            castles: [
                {
                    id: 0,
                    nome:"Castelo de Bragança",
                    foto:"https://cdn.discordapp.com/attachments/310152512751534093/511599011363291136/unknown-2.png",
                    ano: 1000
                },
                {
                    id: 1,
                    nome:"Castelo de Almourol",
                    foto:"",
                    ano: 1000
                },
                {
                    id: 2,
                    nome:"Castelo de Marvão",
                    foto:"",
                    ano: 1000
                },
                {
                    id: 3,
                    nome:"Castelo de Montalegre",
                    foto: "",
                    ano: 1000
                },
                {
                    id: 4,
                    nome: "Castelo de Sortelha",
                    foto:"",
                    ano: 1000
                },
                {
                    id: 5,
                    nome:"Castelo de Arroiolos",
                    foto:"",
                    ano: 1000
                },
                {
                    id: 6,
                    nome:"Castelo de Santa Maria da Feira",
                    foto:"",
                    ano: 1000
                },
                {
                    id: 7,
                    nome:"Castelo de Lindoso",
                    foto:"",
                    ano: 1000
                },
                {
                    id: 8,
                    nome:"Castelo dos Mouros",
                    foto:"",
                    ano: 1000
                },
                {
                    id: 9,
                    nome:"Castelo de Guimarães",
                    foto:"",
                    ano: 1970
                }
            ],
            },

            updated: function(){

             },

            methods: {

                getLastId() {

                    if (this.castles.length > 0)
                        return this.castles[this.castles.length - 1].id + 1
                    else
                        return 0
                },

                addCastle(){
                    this.castles.push({
                        id: this.getLastId(),
                        nome: this.name,
                        foto: this.photo,
                        ano: this.year
                    })
                },

                viewCastle(index){
                    document.getElementById("viewCastleDialog").showModal()
                    this.dCastleImg = this.castles[index].foto

                },

                closeDialog(){
                    document.getElementById("viewCastleDialog").close()
                    document.getElementById("editCastleDialog").close()
                },


                editCastle(index){
                    document.getElementById("editCastleDialog").showModal()
                    this.editName = this.castles[index].nome
                    this.editPhoto = this.castles[index].foto
                    this.editYear = this.castles[index].ano
                    this.editId = this.castles[index].id

                },

                saveCastle(){
                    this.castles[this.editId].nome = this.editName
                    this.castles[this.editId].foto = this.editPhoto
                    this.castles[this.editId].ano = this.editYear
                    document.getElementById("editCastleDialog").close()
                },


                //Manipulaçao de arrays

                // Remove the word 'Castelo' from the castle's name

                removeStr(){
                    const str = "Castelo"
                    this.castles = this.castles.map(
                        (castle) => {
                            if (castle.nome.indexOf(str) !== -1) {
                                castle.nome = castle.nome.replace(str, "")
                            }
                            return castle
                        }

                        //map muda os valores do array de acordo uma funçao
                    )
                },

                 // Calculate the average date for the castles's creation
                media(){
   
                    const averageDate = this.castles.reduce(
                        (sum, cur) => sum + cur.ano, 0) / this.castles.length
                    console.log(averageDate)

                    //sum é o total, cur intera no array, é como se fosse um ciclo for a fazer Total += cur.year , nao percebo o 0
                },

                checkMarvao(){
   
                    const checkingMarvao = this.castles.some(
                        (castle) => castle.nome.includes("Marvão"))
                    console.log(checkingMarvao)

                    //some verifica se uma condiçao é verdade
                },
               
                filterA(){
                    let castlesA = []

                    castlesA = this.castles.filter(
                        (castle) => castle.nome.startsWith("A")
                    )

                    console.log(castlesA)
                },

                checksLinks(){
                    
                    const check = this.castles.every(
                        (castle) => castle.foto.length !== 0
                    )
                    console.log(check)

                    //every confirma se todos os elementos de um array passam um teste e retorna true or false
                },

                /* Ignora o stor é nabo                
                fillNoPhoto(){
                    
                   this.castles.fill("http://nofoto.jpg")

                    //every confirma se todos os elementos de um array passam um teste e retorna true or false
                },
                */


               findMaria(){

                const name = "Castelo de Santa Maria da Feira"
                console.log(this.castles.find(
                    (castle) => castle.nome === name))

                //The find() method returns the value of the first element in an array that pass a test 
            },


            findArroilos(){

                const newName = "Castelo de Arroiolos"
                console.log(this.castles.findIndex(
                    (castle) => castle.nome === newName
                ))

                //findIndex procura o index 
            },
             
            //Extra stuff 

            replaceHifen(){
                const separator = "-"
                console.log(this.castles.map(
                    (castle) => castle.nome
                ).join(separator))

                    //map muda os valores do array de acordo uma funçao
                
            },


            modernCastlefy(){
                const modernCastlesYear = 1950
                console.log(this.castles.filter(
                    (castle) => {
                        if (castle.ano > modernCastlesYear) {
                            return castle.nome
                        }
                    }
                ))
            },


            cleanLinks1000(){
                const resetLinksYear = 1000
                console.log(this.castles.map(
                    (castle) => {
                        if (castle.ano < resetLinksYear) {
                            castle.foto = ""
                        }
                        return castle
                    }
                ))
            },

            incressYearBy5(){
                const incrementsYear = 5
                console.log(this.castles.map(
                    (castle) => {
                        if (castle.nome.toLowerCase().startsWith("a") ||
                            castle.nome.toLowerCase().startsWith("e") ||
                            castle.nome.toLowerCase().startsWith("i") ||
                            castle.nome.toLowerCase().startsWith("o") ||
                            castle.nome.toLowerCase().startsWith("u")) {
                            castle.ano += incrementsYear
                        }
                        return castle
                    }
                ))
            }

            }
        })
        

 
        
    }
    