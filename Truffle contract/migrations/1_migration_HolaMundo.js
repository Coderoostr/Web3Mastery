var HolaMundo = artifacts.require("./HolaMundo.sol");
module.exports = function(deployer){
    deployer.deploy(HolaMundo);
};