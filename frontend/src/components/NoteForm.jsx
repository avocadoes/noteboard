import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createNote } from '../features/notes/noteSlice'

function NoteForm() {
    const [text, setText] = useState('')

    const dispatch = useDispatch()

    const onSubmit = e => {
        e.preventDefault()

        dispatch(createNote({ text }))
        setText('')
    }
    return (
        <section className='noteform'>
            <form className='input' onSubmit={onSubmit}>
                <div className='form-group'>
                    <textarea 
                        type='text'
                        name='text'
                        id='text'
                        value={text}
                        rows='8'
                        placeholder='Write a note...'
                        onChange={(e) => setText(e.target.value)}
                    />
                </div>
                <div className='form-group'>
                    <button className='btn btn-block' type='submit'>Add Note</button>
                </div>
            </form>
        </section>
    )
}

export default NoteForm