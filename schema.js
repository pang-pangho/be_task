const { buildSchema } = require("graphql");
const mongoose = require("mongoose");

const exchangeRateSchema = new mongoose.Schema({
  src: {
    type: String,
    required: true,
  },
  tgt: {
    type: String,
    required: true,
  },
  rate: {
    type: Number,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});

const ExchangeRate = mongoose.model("ExchangeRate", exchangeRateSchema);

const schema = buildSchema(`
  type Query {
    getExchangeRate(src: String!, tgt: String!): ExchangeInfo
  }

  type Mutation {
    postExchangeRate(info: InputUpdateExchangeInfo): ExchangeInfo
    deleteExchangeRate(info: InputDeleteExchangeInfo): ExchangeInfo
  }

  input InputUpdateExchangeInfo {
    src: String!
    tgt: String!
    rate: Float!
    date: String!
  }

  input InputDeleteExchangeInfo {
    src: String!
    tgt: String!
    date: String!
  }

  type ExchangeInfo {
    src: String!
    tgt: String!
    rate: Float!
    date: String!
  }
`);

const resolver = {
  getExchangeRate: async ({ src, tgt }) => {
    try {
      if (src === tgt) {
        const exchangeRate = await ExchangeRate.findOne({ src, tgt });
        if (exchangeRate) {
          return {
            src,
            tgt,
            rate: exchangeRate.rate,
            date: exchangeRate.date,
          };
        } else {
          return null;
        }
      } else {
        const exchangeRate = await ExchangeRate.findOne({ src, tgt });
        return exchangeRate || null;
      }
    } catch (error) {
      console.error("Failed to fetch exchange rate", error);
      return null;
    }
  },

  postExchangeRate: async ({ info }) => {
    try {
      let rateToSave = info.rate;
      if (info.src === info.tgt) {
        rateToSave = 1;
      }

      const exchangeRate = new ExchangeRate({
        src: info.src,
        tgt: info.tgt,
        rate: rateToSave,
        date: info.date,
      });

      await exchangeRate.save();
      return exchangeRate;
    } catch (error) {
      console.error("Failed to add exchange rate", error);
      return null;
    }
  },

  deleteExchangeRate: async ({ info }) => {
    try {
      const exchangeRate = await ExchangeRate.findOneAndDelete({
        src: info.src,
        tgt: info.tgt,
        date: info.date,
      });
      if (exchangeRate) {
        return {
          src: info.src,
          tgt: info.tgt,
          rate: exchangeRate.rate,
          date: exchangeRate.date,
        };
      } else {
        return null; // 삭제된 항목이 없는 경우
      }
    } catch (error) {
      console.error("Failed to delete exchange rate", error);
      return null;
    }
  },
};

module.exports = { schema, resolver };
