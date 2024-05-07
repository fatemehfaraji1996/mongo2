const {Router}= require('express')

const{
getAllFacultyMembers,
addFacultyMember,
deleteFacultyMember
}=require('./controllers')

const router = Router()
router.get('/',getAllFacultyMembers)
router.post('/',addFacultyMember)
router.delete("/member/:id",deleteFacultyMember)

module.exports = router;