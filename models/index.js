const Traveller = require('./Traveller');
const Location = require('./Location');
const Trips = require('./Trips');
const TravellerLocations = sequelize.define('TravellerLocations', {
    travel_id : {
        type: DataTypes.INTEGER,
        references: {
            model: 'traveller',
            key: 'traveller_id'
        }
    },
    location_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'location',
            key: 'location_id'
        }
    }
});

Traveller.belongsToMany(Location, {
  through: TravellerLocations,
  onDelete: 'CASCADE',
});

Location.belongsToMany(Traveller, {
  through: TravellerLocations,
  onDelete: 'CASCADE',
});


Trips.belongsTo(Traveller, {
  foreignKey: 'traveller_id',
});

Traveller.hasMany(Trips, {
    foreignKey: 'traveller_id',
})

module.exports = { Traveller, Trips, Locations };
