const Router = require('express')
const router = new Router()


const reservationController = require('../controller/reservation.controller')


router.post('/reservation', reservationController.createReservation)
router.get('/reservation', reservationController.getReservations)
router.get('/reservation/:id', reservationController.getOneReservation)

router.put('/reservation', reservationController.updateReservation)

router.delete('/reservation/:id', reservationController.deleteReservation)


module.exports = router