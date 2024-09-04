import HighlightsRepository from './highlights.repository.js';

/**
 * Service class for handling highlight-related operations.
 */
class HighlightsService {
    constructor() {
        this.highlightsRepository = new HighlightsRepository();
    }

    /**
     * Adds a new highlight.
     * @param {string} user_id - The ID of the user.
     * @param {string} subtopic_id - The ID of the subtopic.
     * @param {string} book_id - The ID of the book.
     * @param {string} topic_id - The ID of the topic.
     * @param {object} meta_data - The metadata for the highlight.
     * @returns {Promise<object>} The created highlight.
     */
    async addHighlight(user_id, subtopic_id, book_id, topic_id, meta_data) {
        return await this.highlightsRepository.addHighlight(user_id, subtopic_id, book_id, topic_id, meta_data);
    }

    async getHighlights(user_id) {
        return await this.highlightsRepository.getHighlights(user_id);
    }

    async deleteHighlight(highlight_id) {
        return await this.highlightsRepository.deleteHighlight(highlight_id);
    }

    async updateHighlight(meta_data, highlight_id) {
        return await this.highlightsRepository.updateHighlight(meta_data, highlight_id);
    }

    async checkHighlightExist(highlight_id) {
        return await this.highlightsRepository.checkHighlightExist(highlight_id);
    }
}

export default HighlightsService;