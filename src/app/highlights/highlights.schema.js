import { DataTypes, UUIDV4, Model } from 'sequelize';
import sequelize from '../../core/config/database.js';

/**
 * Represents a highlight in the system.
 * @class Highlights
 * @extends {Model}
 */
class Highlights extends Model {}

Highlights.init(
  {
    /**
     * The unique identifier for the highlight.
     * @type {UUID}
     */
    highlight_id: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    /**
     * The unique identifier for the user.
     * @type {UUID}
     */
    user_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'users', // The table name for the user model
        key: 'user_id', // Foreign key reference to the users table
      },
    },
    /**
     * The name of the highlight.
     * @type {string}
     */
    name: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    /**
     * The unique identifier for the sub-topic.
     * @type {UUID}
     */
    sub_topic_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'subtopics', // The table name for the subtopic model
        key: 'sub_topic_id', // Foreign key reference to the subtopics table
      },
    },
    /**
     * The unique identifier for the book.
     * @type {UUID}
     */
    book_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'books', // The table name for the book model
        key: 'book_id', // Foreign key reference to the books table
      },
    },
    /**
     * The metadata of the highlight.
     * @type {object}
     */
    metadata: {
      type: DataTypes.JSONB,
      allowNull: true,
    },
    /**
     * The timestamp when the highlight was created.
     * @type {Date}
     */
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: true,
    },
    /**
     * The timestamp when the highlight was last updated.
     * @type {Date}
     */
    updated_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: true,
    },
    /**
     * The unique identifier for the user who created the highlight.
     * @type {UUID}
     */
    createdby: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
      allowNull: true,
    },
    /**
     * The unique identifier for the user who last updated the highlight.
     * @type {UUID}
     */
    updatedby: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: 'highlights',
    timestamps: false,
  }
);

export default Highlights;