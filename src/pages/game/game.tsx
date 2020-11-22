import { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { Game, GameService } from '../../services/game.service'
import Loading from '../../components/loading.component'

const NewGame: React.FC<AppProps> = () => {
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const gameId = router.query.id

  const [game, setGame] = useState<Game>({} as Game)

  const getGame = async (id: string) => {
    setLoading(true)
    const createdGame = await GameService.get(id)
    setGame(createdGame)
    setLoading(false)
  }

  useEffect(() => {
    getGame(gameId)
  }, [])

  const renderNewGame = () => {
    return (
      <div>
        <h1>Game created</h1>
      </div>
    )
  }

  const renderLoading = () => {
    return <Loading />
  }

  return !loading ? renderNewGame() : renderLoading()
}

export default NewGame
