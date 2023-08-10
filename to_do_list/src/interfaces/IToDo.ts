export interface IToDO {
  id: string
  name: string
  description?: string
  items?: [
    {
      title: string
      details: string
      in_progress: boolean
      concluded: boolean
    }
  ]
  status: string
}
