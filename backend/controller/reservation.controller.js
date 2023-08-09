const db = require('../db')

class ReservationController {
    async createReservation(req, res) {
     const {from_location, destination, travel_date} = req.body
     const newReservation = await db.query('INSERT INTO package (from_location, destination, travel_date) values ($1, $2, $3) RETURNING *', [from_location, destination, travel_date])
     res.json(newReservation.rows[0])
    }

    async getReservations(req, res) {
        const reservations = await db.query('SELECT * FROM package')
        res.json(reservations.rows)
    }

    async getOneReservation(req, res) {
        const id = req.params.id;
        const reservation = await db.query('SELECT * FROM package where id = $1', [id]);
        res.json(reservation.rows[0]);
    }

    async updateReservation(req, res) {
        const {id, from_location, destination, travel_date} = req.body
        const reservation = await db.query(
            'UPDATE package set from_location = $1, destination = $2, travel_date = $3 where id = $4 RETURNING *', 
        [from_location, destination, travel_date, id] 
        )
        res.json(reservation.rows[0])
    }

    async deleteReservation(req, res) {
        const id = req.params.id;
        await db.query('DELETE FROM package WHERE id = $1', [id]);
        res.json({ message: 'Reservation deleted successfully' });
    }

}

module.exports = new ReservationController()