const { app, Registration } = require(".");

app.post("/register", async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const existingUser = await Registration.findOne({ email: email });
        //check for existing user
        if (!existingUser) {
            const registrationData = new Registration({
                name,
                email,
                password
            });
            await registrationData.save();
            res.redirect("/success");
        }

        else {
            console.log("User already exist");
            res.redirect("/error");
        }
    }
    catch (error) {
        console.log(error);
        res.redirect("error");
    }

});
