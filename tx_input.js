"use strict";

class TxInput{

    constructor(path, destPointer, salt){
	this.path = path;
	this.destPointer = destPointer;
	this.salt = salt;
    }

}

module.exports = { TxInput }