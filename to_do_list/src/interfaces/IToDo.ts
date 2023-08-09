export interface IToDO {
  name: string
  description: string
  items: [
    {
      title: string
      details: string
      in_progress: boolean
      concluded: boolean
    }
  ]
}