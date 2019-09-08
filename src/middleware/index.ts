import {
    handleCors,
    handleBodyRequestParsing,
    handleCompression,
    handleAuthentication
  } from "./common";
  
  export default [handleCors, handleBodyRequestParsing, handleCompression, handleAuthentication];