const enhancer = require('./enhancer.js');
// test away!

const item = {
    name: "user",
    durability: 100,
    enhancement: 20
}

describe("enhancer testing", () => {
    test("succeed()", () => {
        const newItem = enhancer.succeed(item)
        const initEnhancement = item.enhancement
        if (item.enhancement === 20) {
            expect(newItem.enhancement).toEqual(initEnhancement)
        } else {
            expect(newItem.enhancement).toEqual(initEnhancement + 1)
        }
    })

    test("fail()", () => {
        if (item.enhancement < 15) {
            expect(enhancer.fail(item).durability).toEqual(item.durability - 5)
        } else if (item.enhancement >= 15 && item.enhancement < 15) {
            expect(enhancer.fail(item).durability).toEqual(item.durability - 10)
        } else {
            expect(enhancer.fail(item).durability).toEqual(item.durability - 1)
        }
    })

    test("repair()", () => {
        expect(enhancer.repair(item).durability).toEqual(100)
    })
})