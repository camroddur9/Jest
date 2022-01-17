const text = "Hallo World"
const fruits = ["apple", "banana", "grape"]

test('should contain an specific text', () => {
    expect(text).toMatch(/World/)
})

test('do we have a banana?', () => {
    expect(fruits).toContain('banana')
})

test('value greater than', () => {
    expect(10).toBeGreaterThan(9)
})

test('check if is true',() => {
    expect(true).toBeTruthy();
})

const reverseString = (str, callback) => {
    callback(str.split("").reverse().join(""))
};

test("callback test", () => {
    reverseString("Hola", (str) => {
        expect(str).toBe("aloH")
    })
})

const reverseString2 = (str) => {
    return new Promise((resolve, reject) => {
        if(!str){
            return reject(Error('Error'))
        }

        resolve(str.split("").reverse().join(""))
    })
}

test("test a promise", () => {
    return reverseString2('Hola').then(string => {
        expect(string).toBe('aloH')
    })
})

test('Test async/await', async () => {
    const string = await reverseString2('Hola')
    expect(string).toBe('aloH')
})

afterEach(() => {console.log('after each test')})
afterAll(() => {console.log('after all test')})

beforeEach(() => {console.log('before each test')})
beforeAll(() => {console.log('before all test')})