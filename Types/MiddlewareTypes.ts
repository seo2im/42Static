import express, { Request, Response, NextFunction } from 'express'

export type tMiddleware = (req: Request, res: Response, next: NextFunction) => void