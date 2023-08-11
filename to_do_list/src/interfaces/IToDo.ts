export interface ItemsT {
  id: string
  title: string
  concluded: boolean
}

export interface IToDO {
  id: string
  name: string
  description: string
  items: ItemsT[] | []
  status: string
}
