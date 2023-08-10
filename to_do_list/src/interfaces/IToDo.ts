interface itemsT {
  id: string
  title: string
  concluded: boolean
}

export interface IToDO {
  id: string
  name: string
  description: string
  items: itemsT[] | []
  status: string
}
