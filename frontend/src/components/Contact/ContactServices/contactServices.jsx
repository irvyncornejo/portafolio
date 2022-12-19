import AWS from 'aws-sdk' 

const config = {
  region: process.env.REACT_APP_REGION,
  accessKeyId: process.env.REACT_APP_ID_ACCESS,
  secretAccessKey: process.env.REACT_APP_KEY_SECRET_ACCESS,
}

AWS.config.update(config)

const  params = {
  Destination: {
    CcAddresses: [
      'ssickaje25@gmail.com'
    ],
    ToAddresses: [
      process.env.REACT_APP_EMAIL_BASE
    ]
  },
  Message: {
    Body: {
      Html: {
       Charset: "UTF-8",
       Data: "HTML_FORMAT_BODY"
      },
      Text: {
       Charset: "UTF-8",
       Data: "TEXT_FORMAT_BODY"
      }
     },
     Subject: {
      Charset: 'UTF-8',
      Data: 'Test email'
     }
    },
  Source: process.env.REACT_APP_EMAIL_BASE,
  ReplyToAddresses: [
    process.env.REACT_APP_EMAIL_BASE
  ],
};


const sendMessage = () => {
  const sendPromise = new AWS.SES({apiVersion: '2010-12-01'}).sendEmail(params).promise()
  sendPromise.then(
    function(data) {
      console.log(data.MessageId)
    }).catch(
      function(err) {
      console.error(err, err.stack)
    })
}

export default sendMessage