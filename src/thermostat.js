class Thermostat {
    constructor() {
        this.temperature = 20
    }
    up() {
        this.temperature++
    }
    down() {
        this.temperature--
    }
}
module.exports = Thermostat