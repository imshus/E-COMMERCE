const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "AR85atr65s8V5LIxWUy5TZlGf-nR2g1w-3OgywlwAHQIiLDAt1zr3NnwUdxKNlpBnFt82LyuQy6nY5Yh",
  client_secret: "EIH7aoE1DtyJ9HmSuILU1WEOpPBJOpTRHnTnbK9gAkaRfkmPb8MWXoLK-TXsipRdYv2dONqzDA51TIW7",
});

module.exports = paypal;
