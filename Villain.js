class Villain extends Person {
    constructor(name) {
        super(name);
        
    }

    render() {
        return `
        <div class="villainContainer">
            <div class="Villain">
                <img src="./Villain.png" />
                <div class="health">${this.health}</div>
            </div>
            <div class="weapon">
                <img src="./excalibur.jpg" height=200 width=100/>
            </div>
        
        `
        }
    
}