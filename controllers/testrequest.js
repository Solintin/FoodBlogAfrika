var axios = require("axios");

const requestTest = async (req, res) => {
  var data = JSON.stringify({
    origin_name: "Mrs. Hippo",
    origin_phone: "+2348170441446",
    origin_street: "Clayton St.",
    origin_city: "Ikorodu",
    origin_country: "NIGERIA",
    origin_country_code: "NG",
    origin_state: "Lagos",
    origin_state_code: "LOS",
    destination_name: "Brian",
    destination_phone: "+2348170441446",
    destination_street: "Drydock Ave Suite 610",
    destination_city: "Ikeja",
    destination_country: "NIGERIA",
    destination_country_code: "NG",
    destination_state: "Lagos",
    destination_state_code: "LOS",
    weight: "2",
    items: [
      {
        name: "Test Brian Iyoha",
        quantity: "1",
        weight: "1",
        amount: "100",
        value: "120000",
      },
      {
        name: "Test Brian Iyoha",
        quantity: "5",
        weight: "5",
        amount: "1000",
        value: "5000",
      },
    ],
  });

  var config = {
    method: "post",
    url: "https://sandbox.staging.sendbox.co/shipping/shipment_delivery_quote",
    headers: {
      Authorization:
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1aWQiOiI2MTc2YWVkNGJiNzM5NTAwMGRmMDA4YjIiLCJhaWQiOiI2MzFhMTdjYzY0OWUyZTAwMTdiNjhmYWEiLCJ0d29fZmEiOmZhbHNlLCJpbnN0YW5jZV9pZCI6IjYxMzZkZmE2YTFhYjlkMzE4YmNmY2I5NCIsImlzcyI6InNlbmRib3guYXBwcy5hdXRoLTYxMzZkZmE2YTFhYjlkMzE4YmNmY2I5NCIsImV4cCI6MTY2ODY3MzExOH0.HAvMg5lBAmWobMn3SsPFydnQ5pcj-LkG47w8dsmPfPM",
      "Content-Type": "application/json",
    },
    data: req.body,
  };

  axios(config)
    .then(function (response) {
      return res
        .status(200)
        .json({ message: "Data Retrieved", data: response.data });
    })
    .catch(function (error) {
      console.log(error);
    });
};

module.exports = requestTest;
