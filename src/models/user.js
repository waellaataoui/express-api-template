export default (sequelize, DataTypes) => {
    const User = sequelize.define("user", {
        id: {
            type: DataTypes.INTEGER(),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        username: {
            type: DataTypes.STRING(35),
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING(20),
            allowNull: false
        }
    }, { freezeTableName: true });
    return User
};
