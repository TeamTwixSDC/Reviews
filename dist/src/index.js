"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-console */
const express_1 = __importDefault(require("express"));
// import getReviews from '../queries';
const settings_1 = __importDefault(require("../settings"));
const app = express_1.default();
const port = 5000;
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.json({ message: settings_1.default });
});
// app.get('/reviews', getReviews);
app.listen(port, () => console.log(`Running on port ${port}`));
//# sourceMappingURL=index.js.map