// const package1Function = require('@mkmandar123/test_package_1')
// const package2Function = require('@mkmandar123/test_package_2')
// const package3Function = require('@mkmandar123/test_package_3')
//
// console.log(package3Function());

const pakcage1 = require('@mkmandar123/test_package_1');

console.log(pakcage1());


module.exports = () => {
    console.log('>>>>>package 2 working');
}
