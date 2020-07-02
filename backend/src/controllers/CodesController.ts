import { Request, Response } from 'express';

import Code from '../database/models/Code';

class CodesController {
  async index(req: Request, res: Response) {
    const rawCodes = await Code.find({});

    const codes = rawCodes.map((code) => {
      return ({
        id: code._id,
        team: code.team
      })
    })

    try {
      return res.send(codes);
    } catch(err) {
      return res.status(500).send(err);
    }
  }

  async show(req: Request, res: Response) {
    await Code.findById(req.params.id, (err, code) => {
        return res.status(200).send(code);
    });
  }

  async create(req: Request, res: Response) {
    const code = new Code(req.body)

    try {
        await code.save()
        return res.send(code)
    } catch(err){
        return res.status(500).send(err)
    }
  }

  async delete(req: Request, res: Response) {
    try{
        const code = await Code.findByIdAndDelete(req.params.id)

        if(!code) return res.status(404).send({ error: 'Código não encontrado' })

        return res.status(200).send({ success: 'Usuário deletado' })
    } catch (err){
        return res.status(500).send(err)
    }
  }

  async update(req: Request, res: Response) {
    try {
        const code = await Code.findByIdAndUpdate(req.params.id, req.body);

        if(!code) return res.status(404).send({ error: 'Código não encontrado' })

        await code.save();

        return res.status(200).send({ success: 'Dados atualizados' })
    } catch(err){
        return res.status(500).send(err)
    }
  }
}

export default CodesController;
