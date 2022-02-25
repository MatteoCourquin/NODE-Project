const jsonToken = require('jsonwebtoken')

module.exports = (req, res, next)=>{
    try{
        const token = req.headers.authorization.splite('')[1]
        console.log(req.headers.authorization)
        //const token = req.headers.authorization
        const docodedToken = jsonToken.verify(token, 'secret')
        const userId = docodedToken.userId
        if (req.body.userId && req.body.userId !== userId) {
            throw 'bad ID'
        }
        else{
            next()
        }
    } catch{
        res.status(401).json({
            error: new Error('bad request')
        })
    }
}