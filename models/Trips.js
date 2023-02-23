const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Trips extends Model {}

Trips.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        trip_budget: {
            type: DataTypes.NUMBER(10, 2),
            allowNull: false,
            validate: {
                isDecimal: true
            }

        },
        traveller_amount: {
            type: DataTypes.STRING,
            allowNull: true,

        },
        traveller_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'traveller',
                key: 'id',
            },
        },
        location_id: {
            type: DataTypes.INTEGER,
            references: {
              model: 'reader',
              key: 'id',
            },
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'trips',
    }
);

module.exports = Trips;