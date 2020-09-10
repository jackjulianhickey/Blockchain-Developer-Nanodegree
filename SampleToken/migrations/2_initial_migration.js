var SampleToken = artifacts.require("SampleToken");

module.exports = function(deployer) {
  deployer.deploy(SampleToken, "Lannister Gold", "LanG", 18, 50000);
};
