const express = require("express");
const router = express.Router();

const translate = require("google-translate-api-x");
const Translation = require("../models/Translation");

// Map full language names to Google Translate language codes
const languageCodes = {
    English: "en",
    Hindi: "hi",
    Kannada: "kn",
    Tamil: "ta",
    Telugu: "te",
    French: "fr",
    German: "de"
};

router.post("/", async (req, res) => {

    try {

        const {
            sourceLanguage,
            targetLanguage,
            text,
            userId
        } = req.body;

        const sourceCode = languageCodes[sourceLanguage];
        const targetCode = languageCodes[targetLanguage];

        if (!sourceCode || !targetCode) {
            return res.status(400).json({
                message: "Unsupported language selected"
            });
        }

        const result = await translate(text, {
            from: sourceCode,
            to: targetCode
        });

        const translatedText = result.text;

        const history = new Translation({
            userId,
            sourceLanguage,
            targetLanguage,
            originalText: text,
            translatedText
        });

        await history.save();

        res.json({
            translatedText
        });

    }

    catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

});

module.exports = router;