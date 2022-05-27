import { Request, Response } from 'express';

import { ListCategoryService } from '../../services/category/ListCategoryService';

class ListCategoryController {
  async handle(request: Request, response: Response) {
    const listCAtegoryService = new ListCategoryService();

    const category = await listCAtegoryService.execute();

    return response.json(category);
  };
};

export { ListCategoryController };
