import type { Request, Response } from 'express';

export class HomeController {
  static index(req: Request, res: Response): void {
    const viewData: { [key: string]: any } = {};
    viewData["title"] = "Home".toUpperCase();

    res.render('home/index', { viewData: viewData });
  }

  static about(req: Request, res: Response): void {
    const viewData: { [key: string]: any } = {};
    viewData["title"] = "About".toUpperCase();

    res.render('home/about', { viewData: viewData });
  }

  static toUppercase(text: string): string {
    return text.toUpperCase();
  }
}

