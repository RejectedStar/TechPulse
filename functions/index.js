const functions = require("firebase-functions");
const admin = require("firebase-admin");
const sgMail = require("@sendgrid/mail");

admin.initializeApp();
const db = admin.firestore();
sgMail.setApiKey(functions.config().sendgrid.key);

exports.sendDailyEmails = functions.pubsub.schedule('0 4 * * *') // This is UTC, which is 6 am Berlin time
    .timeZone('Europe/Berlin')
    .onRun(async (context) => {
        const usersSnapshot = await db.collection('users').get();

        usersSnapshot.forEach(async (doc) => {
            const user = doc.data();
            const email = user.email;
            const selectedBlogs = user.blogs.join(', ');

            const msg = {
                to: email,
                from: 'your-email@example.com',
                subject: 'Your Daily Tech News Update',
                text: `Here are the latest articles from your favorite blogs: ${selectedBlogs}`,
                html: `<p>Here are the latest articles from your favorite blogs: ${selectedBlogs}</p>`,
            };

            try {
                await sgMail.send(msg);
                console.log(`Email sent to ${email}`);
            } catch (error) {
                console.error('Error sending email:', error);
            }
        });

        return null;
    });

