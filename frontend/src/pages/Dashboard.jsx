import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import NoteForm from '../components/NoteForm'
import NoteItem from '../components/NoteItem'
import Spinner from '../components/Spinner'
import { getNotes } from '../features/notes/noteSlice'
import { reset } from '../features/auth/authSlice'

function Dashboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  const { notes, isLoading, isError, message } = useSelector((state) => state.notes)

  useEffect(() => {
    if (isError) {
      console.log(message)
    }
    if (!user) {
      navigate('/login')
    }
    dispatch(getNotes())

    return () => { dispatch(reset()) }
  }, [user, navigate, isError, message, dispatch])

  if (isLoading) {
    return <Spinner />
  }

  return (
    <div>
      
      <section className='content'>
        <NoteForm />
        { notes.length > 0 ? (
          <div className='notes'>
            
            {notes.map((note) => (
              <NoteItem key={note._id} note={note} />
            ))}
          </div>
        ) : (
          <h3>You have no saved notes.</h3>
        ) }
      </section>
    </div>
  )
}

export default Dashboard