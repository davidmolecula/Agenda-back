import jwt from "jsonwebtoken";

export const actionAgendaMiddleware = (req, res, next) => {

    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).json({ message: "No se proporcionó token" });
    }
    const parts = authHeader.split(' ');
    if (parts.length !== 2 || parts[0] !== 'Bearer') {
        return res.status(401).json({ message: "Formato de token inválido" });
    }
    const token = parts[1]; 
    try {
        const decoded = jwt.verify(token, process.env.SECRET);
        req.user=decoded
        next();
    } catch (error) {
        console.log(error)
    return res.status(401).json({ message: "Token expirado o inválido" });
    }
};