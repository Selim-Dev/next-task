
const data = {
  "forms": [
    {
      "id": 1,
      "createdAt": "2023-06-18T10:00:00",
      "status": "under review",
      "title": "title 1",
      "type": "pending",
      "custodianDetails": {
        "name": "John Doe",
        "address": "123 Main Street",
        "accountName": "John Doe's Account",
        "accountNumber": 123456789
      },
      "otherInformation": {
        "certificates": "client",
        "profits": "custodian",
        "salesOutcome": "other entity"
      },
      "certification": "I hereby certify that the information provided in this form is accurate and complete."
    },
    {
      "id": 2,
      "createdAt": "2023-06-19T14:30:00",
      "status": "pending",
      "title": "title 2",
      "type": "approved",
      "custodianDetails": {
        "name": "Jane Smith",
        "address": "456 Oak Avenue",
        "accountName": "Jane Smith's Account",
        "accountNumber": 987654321
      },
      "otherInformation": {
        "certificates": "custodian",
        "profits": "client",
        "salesOutcome": "custodian"
      },
      "certification": "I confirm that I have read and understood all the terms and conditions stated in this form."
    },
    {
      "id": 3,
      "createdAt": "2023-06-20T09:45:00",
      "status": "submitted",
      "title": "title 3",
      "type": "pending",
      "custodianDetails": {
        "name": "Mark Johnson",
        "address": "789 Pine Street",
        "accountName": "Mark Johnson's Account",
        "accountNumber": 246813579
      },
      "otherInformation": {
        "certificates": "other entity",
        "profits": "other entity",
        "salesOutcome": "client"
      },
      "certification": "By signing this form, I acknowledge and agree to the terms and conditions outlined herein."
    },
    {
      "id": 3,
      "createdAt": "2023-06-20T09:45:00",
      "status": "pending",
      "title": "title 3",
      "type": "pending",
      "custodianDetails": {
        "name": "Mark Johnson",
        "address": "789 Pine Street",
        "accountName": "Mark Johnson's Account",
        "accountNumber": 246813579
      },
      "otherInformation": {
        "certificates": "other entity",
        "profits": "other entity",
        "salesOutcome": "client"
      },
      "certification": "By signing this form, I acknowledge and agree to the terms and conditions outlined herein."
    }
  ]
}
export default function handler(req, res) {
  // Example JSON data


  // Set the response header to indicate JSON content type
  res.setHeader('Content-Type', 'application/json');
  let json_response = {
    status: 'success',
    results: data.length,
    data,
  }
  // Return the JSON data
  res.status(200).json(json_response);
}