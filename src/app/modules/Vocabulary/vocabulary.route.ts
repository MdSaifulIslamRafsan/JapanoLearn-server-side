import express from 'express'
import validateRequest from '../../middleware/validateRequest';
import { vocabularyValidation } from './vocabulary.validation';
import { VocabularyController } from './vocabulary.controller';
import verifyToken from '../../middleware/VerifyToken';
import verifyAdmin from '../../middleware/VerifyAdmin';

const router = express.Router();

router.post('/', verifyToken , verifyAdmin , validateRequest(vocabularyValidation.createVocabularyValidation) , VocabularyController.createVocabulary )



export const VocabularyRoutes = router