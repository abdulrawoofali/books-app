var UserProfileModel = function(user) {
    this.email = user.email,
    this.firstName = user.firstName,
    this.lastName = user.lastName
};

module.exports = UserProfileModel;