import { Stock } from "../models/stock.models.js";
import yahooFinance from "yahoo-finance2";

// your symbols
const symbols = ["TCS.NS", "INFY.NS", "RELIANCE.NS", "HDFCBANK.NS", "ICICIBANK.NS", "SBIN.NS", "HINDUNILVR.NS", "ITC.NS", "BAJFINANCE.NS"];

// update function
async function updateStocks() {
    console.log("✅ Stock update Started.");

    for (let symbol of symbols) {
        try {
            const quote = await yahooFinance.quote(symbol);
            await Stock.findOneAndUpdate(
                { symbol },
                {
                    symbol,
                    name: quote.shortName || symbol,
                    lastPrice: quote.regularMarketPrice,
                    dayChange: quote.regularMarketChangePercent,
                },
                { upsert : true , new: true } // upsert:true -- Means agar yeh stock listed nhi hai to add kardo 
            );
        } 
        catch (err) {
            console.error(`Failed to update `, err);
        }
    }
    console.log("✅ Stock update finished.");
}

export {updateStocks};