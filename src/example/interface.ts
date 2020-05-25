interface NameInfo {
  firstName: string
  lastName: string
}

interface Vegetables {
  color?: string
  readonly type: string
  [props: string]: any
}

const getFullName = ({ firstName, lastName }: NameInfo): string => {
  return `${firstName} ${lastName}`
}

const getVegetables = ({ color, type }: Vegetables) => {
  return `A ${color} ${type}`
}

interface ArrInter {
  0: number
  1: string
}

interface AddFunc {
  (num1: number, num2: number): number
}
const add: AddFunc = (n1, n2) => n1 + n2

interface RoleDic {
  [id: number]: string
  [name: string]: string
}

interface Tomato extends Vegetables {
  radius: number
}

interface Carrot extends Tomato {
  sex: string
}

const carrot: Carrot = {
  type: '',
  radius: 4,
  sex: 'man',
}

interface Counter {
  (): void
  count: number
}

const getCounter = () => {
  const c = () => {
    c.count++
  }
  c.count = 0
  return c
}

const counter: Counter = getCounter()

console.log(counter(), counter.count)
console.log(counter(), counter.count)
console.log(counter(), counter.count)
