class Hero extends Person {
    constructor(name) {
        super(name);
        
    }

    render() {
        return `
        <div class="heroContainer">
            <div class="hero">
                <img src="./hero.png" />
                <div class="health">${this.health}</div>
            </div>
            <div class="weapon">
                <img src="./sword.jpg" height=200 width=100/>
            </div>
        </div>
        `
    }
    
}