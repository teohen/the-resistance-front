import api from '../api'

export interface Game {
  id: number
  code: string
  nPlayers: number
}

export const GameService = {
  async create(numPlayers: number): Promise<Game> {
    try {
      const { data } = await api.post('game', {
        nPlayers: numPlayers
      })

      return <Game>{
        id: data.id,
        code: data.code,
        nPlayers: data.nPlyers
      }
    } catch (err) {
      console.log(err)
    }
  },
  async get(id: string): Promise<Game> {
    try {
      const { data } = await api.get(`game/${id}`)
      return <Game>{
        id: data.id,
        code: data.code,
        nPlayers: data.nPlyers
      }
    } catch (err) {
      console.log(err)
    }
  }
}
