const functions = require("firebase-functions");
const admin = require('firebase-admin');
const nodemailer = require("nodemailer");
const cors = require("cors")({ origin: true });

admin.initializeApp();
console.log(process.env)
const outlookEmail = functions.config().outlook.email;
const outlookPassword = functions.config().outlook.password;
const adminEmail = functions.config().admin.email;



// 送信に使用するメールサーバーの設定
const mailTransport = nodemailer.createTransport({
  host: 'smtp-mail.outlook.com',
  secureConnection: false,
  port: 587,
  tls: {
    ciphers:'SSLv3'
  },
  auth: {
    user: outlookEmail,
    pass: outlookPassword
  }
});

// 管理者用のメールテンプレート
const adminContents = data => {
  return `以下内容でホームページよりお問い合わせを受けました。

お名前：
${data.name}

メールアドレス：
${data.email}

件名：
${data.title}

内容：
${data.text}
`;
};

exports.sendMail = functions.https.onCall(async (data) => {
  // メール設定
  let adminMail = {
    from: outlookEmail,
    to: adminEmail,
    subject: "ホームページお問い合わせ",
    text: adminContents(data)
  };

  // 管理者へのメール送信
  try {
    await mailTransport.sendMail(adminMail);
   } catch (e) {
    console.error(`send failed. ${e}`);
    throw new functions.https.HttpsError('internal1', 'send failed');
   }
  }
);