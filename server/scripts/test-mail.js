require('dotenv').config();
const nodemailer = require('nodemailer');

async function testMail() {
  console.log('--------------------------------------------------');
  console.log('📧 Testing OVH SMTP Connection & Email Dispatch...');
  console.log('--------------------------------------------------');
  console.log(`SMTP Host:   ${process.env.SMTP_HOST}`);
  console.log(`SMTP Port:   ${process.env.SMTP_PORT}`);
  console.log(`SMTP Secure: ${process.env.SMTP_SECURE}`);
  console.log(`SMTP User:   ${process.env.SMTP_USER}`);
  console.log(`SMTP From:   ${process.env.SMTP_FROM}`);
  console.log('--------------------------------------------------\n');

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'ssl0.ovh.net',
    port: parseInt(process.env.SMTP_PORT || '465', 10),
    secure: process.env.SMTP_SECURE !== 'false',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
    logger: true,
    debug: true,
  });

  try {
    console.log('1. Verifying SMTP server connection & credentials...');
    await transporter.verify();
    console.log(' SUCCESS: SMTP Connection and Auth verified!\n');

    console.log(`2. Sending test welcome email to ${process.env.SMTP_USER}...`);
    const info = await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.SMTP_USER,
      subject: 'Test Email - Ordres de Mission Platform',
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
          <h2 style="color: #1b1f2a;">El Mouradi Hotels</h2>
          <p>This is a test notification email from the <strong>Gestion des Ordres de Mission</strong> platform.</p>
          <p>Status: <span style="color: green; font-weight: bold;">Mail System Working Perfectly!</span></p>
        </div>
      `,
    });

    console.log('\n==================================================');
    console.log(` EMAIL SENT SUCCESSFULLY!`);
    console.log(`Message ID: ${info.messageId}`);
    console.log(`Accepted:   ${info.accepted.join(', ')}`);
    console.log('==================================================\n');
  } catch (error) {
    console.error('\n❌ SMTP Troubleshooting Error Report:');
    console.error('--------------------------------------------------');
    console.error(`Code:    ${error.code || 'N/A'}`);
    console.error(`Command: ${error.command || 'N/A'}`);
    console.error(`Message: ${error.message}`);
    console.error('--------------------------------------------------\n');
  }
}

testMail();
