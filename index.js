const express = require("express")
const app = express()
const PORT = 3002
const cors = require("cors")

app.use(express.json())
app.use(cors())

app.use("/categories", require("./routes/categories")) /** PREFIJO */
app.use("/funkos", require("./routes/funkos")) /** PREFIJO */
app.use("/users", require("./routes/users")) /** PREFIJO */
app.use("/orders", require("./routes/orders"))

app.listen(PORT, ()=> console.log(`Servidor levantado en el puerto ${PORT}`))