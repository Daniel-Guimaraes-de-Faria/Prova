"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Profile = void 0;
exports.initializeProfile = initializeProfile;
const sequelize_1 = require("sequelize");
class Profile extends sequelize_1.Model {
}
exports.Profile = Profile;
function initializeProfile(sequelize) {
    Profile.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        firstName: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        profession: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        balance: {
            type: sequelize_1.DataTypes.FLOAT,
            allowNull: false,
            defaultValue: 0,
        },
        type: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
    }, {
        sequelize,
        modelName: "Profile",
        tableName: "profile",
        timestamps: false,
        freezeTableName: true,
    });
}
