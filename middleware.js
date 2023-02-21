

const logger = (req,res,next) => {

    console.log(`${req.protocol}://${req.hostname}:${req.get('host')}${req.originalUrl}`);
    next();
}


module.exports = {
    logger,
}