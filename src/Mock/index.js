const Mock = require("mockjs")

let data = Mock.mock({
    "list|10": [
        {
            "title": "@ctitle(8,10)",
            "id": "@id",
            "price|1-50": 2,
            "num|1-60": 2,
            "url": "@image(100x100,@color)"
        }
    ]
})
module.exports = data