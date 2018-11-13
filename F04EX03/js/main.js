 window.onload = function() {
        const vm = new Vue({
            el: "#intro",
            data: {
          
            teams: [
                {name: "benfica", year: 1910,location: "Lisboa"},
                {name: "porto", year: 1912, location: "Porto"},
                {name: "sporting", year: 1914, location: "Lisboa"},
            ]
          
            },
            methods: {
                addTeam(){
                    this.teams.push({name: "braga",year:1900,location: "Braga"})
                },

                filterLisbon(){
                    this.teams = this.teams.filter(
                        (team) => team.location == "Lisboa"
                    )
                }
            }
        
            }) 
    }
    