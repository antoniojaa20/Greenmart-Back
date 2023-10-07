const PromotionModel = require('../models/promotionModel');
const ProductModel = require('../models/productModel');

module.exports= {
  createPromotion: async (req, res) => {
    try {
        const result = await PromotionModel.create(req.body)
        res.status(201).json({message: `Promoção criada com sucesso!`})
    } catch (err) {
        res.status(500).json({message: `Não foi possível criar a promoção.`})
    }
  },
  getPromotions: (req, res) => {
      PromotionModel.find({}).select(["-__v", "-_id"]).then((result) => {
          res.status(200).json(result)
      }).catch(() => {
          res.status(500).json({message: "Não foi possível listar as promoções"})
      })
  },
  deletePromotionById: async (req, res) => {
      try {
          const result = await PromotionModel.deleteOne({id: req.params.id})
          res.status(200).send({message: "Promoção removida com sucesso!"})
      } catch (err) {
          res.status(500).json({message: "Não foi possível remover."})
      }
  },
  updatePromotion: async (req, res) => {
      try {
          const result = await PromotionModel.updateOne({id: req.body.id}, req.body)
          res.status(200).send({message: 'Promoção atualizada com sucesso!'})
      } catch (err) {
          res.status(500).json({message: 'Não foi possível atualizar.'})
      }
  },
}
  