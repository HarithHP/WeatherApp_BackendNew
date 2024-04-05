const verifyAuthKey = (req, res, next) => {
    const authHeader = req.headers['authkey'];
    const token = authHeader;

    console.log(token);
    console.log(process.env.AUTHKEY);

    if (!token) {
        return res.status(401).json({ message: 'Access denied. authkey is missing' });
    }else if (token===process.env.AUTHKEY){
        next();
    }

}

module.exports = {verifyAuthKey}