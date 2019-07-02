const { DataSource } = require('apollo-datasource');
const Sequelize = require('sequelize');

class RealEstateAPI extends DataSource {
  constructor({ store }) {
    super();
    this.store = store;
  }

  initialize(config) {
    this.context = config.context;
  }

  // async getMovieLikes({ user }) {
  //   return await this.store.likes.findAll({ where: { user } });
  // }

  // async toggleMovieLike({ id, user }) {
  //   const like = await this.store.likes.find({
  //     where: {
  //       user,
  //       movie: id,
  //     },
  //   });
  //   if (!like) await this.store.likes.create({ user, movie: id });
  //   else await this.store.likes.destroy({ where: { user, movie: id } });
  // }

  // async isMovieLiked({ id, user }) {
  //   const like = await this.store.likes.find({ where: { user, movie: id } });
  //   return !!like;
  // }

  // Aca van las llamadas a la base
}


module.exports = RealEstateAPI;


