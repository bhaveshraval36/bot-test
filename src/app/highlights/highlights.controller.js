import statusCodes from '../../core/common/utils/statusCodes.js';
import HighlightsService from "./highlights.service.js";
import sendResponse from '../../core/common/utils/response.js';
/**
 * Controller class for handling highlight-related HTTP requests.
 */
class HighlightsController {
    constructor() {
        this.highlightsService = new HighlightsService();
    }

    /**
     * Adds a new highlight.
     * @param {object} req - The HTTP request object.
     * @param {object} res - The HTTP response object.
     */
    async addHighlight(req, res) {
        try {
            const { highlightData } = req.body;
            console.log("highlightData is =======>", highlightData);
            
            const { user_id, subtopic_id, book_id, topic_id, meta_data } = highlightData;
            const highlight = await this.highlightsService.addHighlight(user_id, subtopic_id, book_id, topic_id, meta_data);
            sendResponse(res, statusCodes.SUCCESS, highlight);
        } catch (error) {
            sendResponse(res, statusCodes.SERVER_ERROR, { message: error.message });
        }
    }

    async getHighlights(req, res) {
        try {
            const { user_id } = req.params;
            const highlights = await this.highlightsService.getHighlights(user_id);
            sendResponse(res, statusCodes.SUCCESS, highlights);
        } catch (error) {
            sendResponse(res, statusCodes.SERVER_ERROR, { message: error.message });
        }
    }

    async updateHighlight(req, res) {
        try {
            const { highlightData } = req.body;
            const { meta_data, highlight_id } = highlightData;

            const checkHighlightExist = await this.highlightsService.checkHighlightExist(highlight_id);
            
            if (!checkHighlightExist[0].exists) {
                return sendResponse(res, statusCodes.INVALID_REQUEST, { message: `Highlight with id ${highlight_id} does not exist` });
            }
            if (meta_data === null) {
                // console.log('Delete highlight');
                await this.highlightsService.deleteHighlight(highlight_id);
                return sendResponse(res, statusCodes.SUCCESS, { message: `Highlight with id ${highlight_id} deleted successfully` });
            }
            const highlight = await this.highlightsService.updateHighlight(meta_data, highlight_id);
            sendResponse(res, statusCodes.SUCCESS,{message: `Highlight with id ${highlight_id} updated Successfully `}, highlight);
        } catch (error) {
            sendResponse(res, statusCodes.SERVER_ERROR, { message: error.message });
        }
    }
}

export default HighlightsController;