import sequelize from '../../core/config/database.js';
import { QueryTypes } from 'sequelize';

/**
 * Repository class for handling database operations related to highlights.
 */
class HighlightsRepository {
    
    /**
     * Adds a new highlight to the database.
     * @param {string} user_id - The ID of the user.
     * @param {string} subtopic_id - The ID of the subtopic.
     * @param {string} book_id - The ID of the book.
     * @param {string} topic_id - The ID of the topic.
     * @param {object} meta_data - The metadata for the highlight.
     * @returns {Promise<object>} The result of the insert operation.
     */
    async addHighlight(user_id, subtopic_id, book_id, topic_id, meta_data) {
        try {
            meta_data = JSON.stringify(meta_data);

            const query = `
            INSERT INTO public.highlights
            (user_id, sub_topic_id, book_id, metadata, topic_id)
            VALUES (:user_id, :subtopic_id, :book_id, :meta_data, :topic_id)
            `;
            return await sequelize.query(query, {
                type: QueryTypes.INSERT,
                replacements: { user_id, subtopic_id, book_id, topic_id, meta_data }
            });
        } catch (e) {
            console.log("Error is ====>", e);
        }
    }

    async getHighlights(user_id) {
        try {
            const query = `
            SELECT *
            FROM public.highlights
            WHERE user_id = :user_id
            `;
            return await sequelize.query(query, {
                type: QueryTypes.SELECT,
                replacements: { user_id }
            }); 
        }
        catch (e) {
            console.log("Error is ====>", e);
        }
    }

    async deleteHighlight(highlight_id) {
        try {
            const query = `
            DELETE FROM public.highlights
            WHERE highlight_id = :highlight_id
            `;
            return await sequelize.query
            (query, {
                type: QueryTypes.DELETE,
                replacements: { highlight_id }
            });
        }
        catch (e) {
            console.log("Error is ====>", e);
        }
    }

    async updateHighlight(meta_data, highlight_id) {
        try {
            meta_data = JSON.stringify(meta_data);

            const query = `
            UPDATE public.highlights
            SET metadata = :meta_data
            WHERE highlight_id = :highlight_id
            `;
            return await sequelize.query(query, {
                type: QueryTypes.UPDATE,
                replacements: { meta_data, highlight_id }
            });
        }
        catch (e) {
            console.log("Error is ====>", e);
        }
    }

    async checkHighlightExist(highlight_id) {
        try {
            const query = `
            SELECT EXISTS (
            SELECT 1
            FROM public.highlights
            WHERE highlight_id = :highlight_id
            )
            `;
            return await sequelize.query(query, {
                type: QueryTypes.SELECT,
                replacements: { highlight_id }
            });
        }
        catch (e) {
            console.log("Error is ====>", e);
        }
    }
}

export default HighlightsRepository;