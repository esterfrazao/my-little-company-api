"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePutContactSchema = exports.updatePatchContactSchema = exports.createContactSchema = void 0;
const yup = __importStar(require("yup"));
exports.createContactSchema = yup.object().shape({
    name: yup.string().required("name is a required field"),
    email: yup.string().email("Invalid Email"),
    phone_number: yup
        .string()
        .max(15, "number must not have more than 15 characters"),
});
exports.updatePatchContactSchema = yup.object().shape({
    name: yup.string(),
    email: yup.string().email("Invalid Email"),
    phone_number: yup
        .string()
        .max(15, "number must not have more than 15 characters"),
});
exports.updatePutContactSchema = yup.object().shape({
    name: yup.string().required("name is a required field"),
    email: yup
        .string()
        .email("Invalid Email")
        .required("email is a required field"),
    phone_number: yup
        .string()
        .max(15, "number must not have more than 15 characters")
        .required("phone_number is a required field"),
});
//# sourceMappingURL=contacts.schemas.js.map