const express = require("express");
const router = express.Router();
const members = require("../../members.js");
const {
   getAllmember,
   getUserById,
   deleteUser,
   addUser,
   updateUser
} = require("../../controllers/ctls.js")


router.get("/api/members/" , getAllmember);

router.get("/api/members/:id" , getUserById);

router.delete("/api/members/:id",deleteUser);
router.post("/api/members/" , addUser);
router.put("/api/members/:id" , updateUser);

module.exports = router;