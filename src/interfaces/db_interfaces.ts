interface User {
  id?: number,
  username: string,
  classe: string,
  level: number,
  password: string,

} 

interface Orders {
  id?: number,
  userId?: number,
}

interface Products {
  id?: number,
  name: string,
  amount: string,
  orderId?: number,

}

export { User, Orders, Products };
