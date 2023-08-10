export interface IToDO {
  id: string
  name: string
  description: string
  items: [
    {
      title: string
      concluded: boolean
    }
  ] | []
  status: string
}
