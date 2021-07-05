// const package1Function = require('@mkmandar123/test_package_1')
// const package2Function = require('@mkmandar123/test_package_2')
// const package3Function = require('@mkmandar123/test_package_3')
//
// console.log(package3Function());

const package1 = require('@mkmandar123/test_package_1');
const package3 = require('@mkmandar123/test_package_3');

console.log(package1());
console.log(package3());


module.exports = () => {
    console.log('>>>>>package 2 working');
}
