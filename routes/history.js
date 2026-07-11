const express = require("express");
const router = express.Router();

const Translation = require("../models/translation");

// Get all translations of a user
router.get("/:userId", async (req, res) => {

    try {

        const history = await Translation.find({

            userId: req.params.userId

        }).sort({

            createdAt: -1

        });

        res.json(history);

    } catch (error) {

        res.status(500).json({

            message: error.message

        });

    }

});

// Delete translation

router.delete("/:id", async (req, res) => {

    try {

        await Translation.findByIdAndDelete(req.params.id);

        res.json({

            message: "Deleted Successfully"

        });

    } catch (error) {

        res.status(500).json({

            message: error.message

        });

    }

});

module.exports = router;
function saveHistory() {
  alert("Saved! Redirecting to your translation history...");
  window.location.href = "history.html";
}