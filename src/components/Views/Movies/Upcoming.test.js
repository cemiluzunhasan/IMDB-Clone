const rewire = require("rewire")
const Upcoming = rewire("./Upcoming")
const mapStateToProps = Upcoming.__get__("mapStateToProps")
// @ponicode
describe("mapStateToProps", () => {
    test("0", () => {
        let callFunction = () => {
            mapStateToProps({ upcoming: "2021-07-29T20:12:53.196Z" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            mapStateToProps({ upcoming: "2021-07-29T23:03:48.812Z" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            mapStateToProps({ upcoming: "2021-07-30T00:05:36.818Z" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            mapStateToProps({ upcoming: "2021-07-29T17:54:41.653Z" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            mapStateToProps({ upcoming: "2021-07-29T15:31:46.922Z" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            mapStateToProps({ upcoming: undefined })
        }
    
        expect(callFunction).not.toThrow()
    })
})
