const express = require("express")
const app = express()
const PORT = 3002


app.use(express.json())

app.use("/categories", require("./routes/categories")) /** PREFIJO */
app.use("/funkos", require("./routes/funkos")) /** PREFIJO */
app.use("/users", require("./routes/users")) /** PREFIJO */

app.listen(PORT, ()=> console.log(`Servidor levantado en el puerto ${PORT}`))