"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "user",
      [
        {
          id: 1,
          firstName: "user1",
          lastName: "laptop",
          email: "user1@test.com",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 2,
          firstName: "user2",
          lastName: "phone",
          email: "user2@test.com",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 3,
          firstName: "user3",
          lastName: "gadget",
          email: "user3@test.com",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "channel",
      [
        {
          id: 1,
          name: "channel1",
          user_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 2,
          name: "channel2",
          user_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );

    await queryInterface.bulkInsert(
      "video",
      [
        {
          id: 1,
          title: "video1ByUser1",
          channel_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 2,
          title: "video2ByUser1",
          channel_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 3,
          title: "video3ByUser2",
          channel_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
