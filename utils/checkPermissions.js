const CustomError = require('../errors/custom-api');

const checkPermissions = (requestUser, resourceUserId) => {

    console.log(requestUser);
    console.log(resourceUserId);
    console.log(typeof resourceUserId);
    if (requestUser.role == 'admin') return;
    if (requestUser.userId === resourceUserId) return;
    throw new CustomError.UnauthorizedError('Not authorized to access this route');
};

module.exports = { checkPermissions };