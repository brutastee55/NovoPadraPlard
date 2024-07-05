export default class listModel {
    constructor() {
            this.id = undefined,
            this.name = undefined,
            this.status = undefined,
            this.species = undefined,
            this.type = undefined,
            this.gender = undefined,
            this.origin = undefined,
            this.location = undefined,
            this.image = undefined,
            this.episode = undefined,
            this.url = undefined,
            this.created = undefined
    }

    hasSameProperties(object) {


        expect(object.body).to.have.all.keys('id', 'name', 'closed', 'color', 'idBoard', 'limits', 'pos')
    }

    validateResponseSucessul(object) {
        if (!object) return false
        if (Object.keys(object).length != Object.keys(this).length) return false
        return Object.keys(this).reduce((acc, key) => key in object && acc, true)
    }

}