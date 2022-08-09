import { useDispatch } from 'react-redux'
import { deleteNote } from '../features/notes/noteSlice'

function NoteItem({ note }) {
  const dispatch = useDispatch()
  
  return (
    <div className='note'>
      <div className='date'>
        { new Date(note.createdAt).toLocaleString('en-US') }
      </div>
      <h3>{ note.text }</h3>
      <button onClick={() => dispatch(deleteNote(note._id))} className='close'>X</button>
    </div>
  )
}

export default NoteItem