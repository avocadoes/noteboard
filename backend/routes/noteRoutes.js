const express = require('express') // use commonJS syntax
const router = express.Router()
const { getNotes, setNote, updateNote, deleteNote } = require('../controllers/noteController')

router.route('/').get(getNotes).post(setNote)
router.route('/:id').delete(deleteNote).put(updateNote)

/* alternative
router.get('/', getNotes)

router.post('/', setNote)

router.put('/:id', updateNote)

router.delete('/:id', deleteNote)
*/

module.exports = router